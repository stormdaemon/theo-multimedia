/** @jest-environment node */
import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { business } from '../lib/business.js';
import { contentPages, getContentPage, serviceIndex } from '../lib/services-data.js';
import { projects } from '../lib/projects.js';
import { articles, categories, featuredSlugs } from '../lib/blog.js';
import { ROOT, STATIC_ROUTES, expectedRoutes } from './helpers/site.js';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const TOMORROW = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
const routes = new Set(expectedRoutes());
const pathOf = (href) => href.split(/[?#]/)[0] || '/';
const nonEmpty = (s) => typeof s === 'string' && s.trim().length > 0;
const isPair = (x) => Array.isArray(x) && x.length === 2 && nonEmpty(x[0]) && nonEmpty(x[1]);

function expectDate(value) {
  expect(value).toMatch(DATE_RE);
  expect(Number.isNaN(Date.parse(value))).toBe(false);
  expect(value <= TOMORROW).toBe(true);
}

/** Every string of a value, recursively. */
function strings(value) {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(strings);
  return [];
}

function listFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? listFiles(path.join(dir, e.name)) : [path.join(dir, e.name)]
  );
}

describe('slugs et routes', () => {
  test('les slugs sont valides et uniques entre pages de contenu, projets et articles', () => {
    const slugs = [...contentPages, ...projects, ...articles].map((x) => x.slug);
    for (const slug of slugs) expect(slug).toMatch(SLUG_RE);
    expect(slugs.filter((s, i) => slugs.indexOf(s) !== i)).toEqual([]);
  });

  test('aucune page de contenu ne prend la route d’une autre page', () => {
    const reserved = [...STATIC_ROUTES, '/404', '/500'].map((r) => r.slice(1)).filter(Boolean);
    expect(contentPages.map((p) => p.slug).filter((slug) => reserved.includes(slug))).toEqual([]);
  });

  test('les index pointent vers des contenus existants', () => {
    for (const { slug } of serviceIndex) expect(getContentPage(slug)).toBeDefined();
    const slugs = articles.map((a) => a.slug);
    for (const slug of featuredSlugs) expect(slugs).toContain(slug);
  });

  test('lib/articles/index.js importe exactement les fichiers d’articles, nommés d’après leur slug', () => {
    const dir = path.join(ROOT, 'lib', 'articles');
    const files = readdirSync(dir)
      .filter((f) => f.endsWith('.js') && f !== 'index.js')
      .sort();
    const index = readFileSync(path.join(dir, 'index.js'), 'utf8');
    const imported = [...index.matchAll(/from '\.\/([^']+)'/g)].map((m) => m[1]).sort();
    expect(imported).toEqual(files);
    expect(articles.map((a) => `${a.slug}.js`).sort()).toEqual(files);
  });
});

describe('champs obligatoires', () => {
  test.each(contentPages.map((p) => [p.slug, p]))('page de contenu %s', (slug, page) => {
    expect(['service', 'local']).toContain(page.type);
    for (const field of ['title', 'metaTitle', 'metaDescription', 'intro']) expect(nonEmpty(page[field])).toBe(true);
    expectDate(page.updatedAt);
    if (page.canonical) expect(page.canonical).toBe(`/${slug}`);
    const sections = page.sections || page.detailSections;
    expect(sections.length).toBeGreaterThan(0);
    for (const s of sections) expect(nonEmpty(s.title)).toBe(true);
    expect(page.faqs.length).toBeGreaterThan(0);
    expect(page.faqs.every(isPair)).toBe(true);
    expect((page.relatedLinks || []).every(isPair)).toBe(true);
  });

  test.each(articles.map((a) => [a.slug, a]))('article %s', (slug, a) => {
    for (const field of ['title', 'metaTitle', 'description', 'answer']) expect(nonEmpty(a[field])).toBe(true);
    expect(categories).toContain(a.category);
    expectDate(a.publishedAt);
    expectDate(a.updatedAt);
    expect(a.updatedAt >= a.publishedAt).toBe(true);
    expect(a.intro.length).toBeGreaterThan(0);
    expect(a.sections.length).toBeGreaterThan(0);
    for (const s of a.sections) {
      expect(nonEmpty(s.title)).toBe(true);
      expect((s.paragraphs || []).length + (s.items || []).length + (s.code ? 1 : 0)).toBeGreaterThan(0);
    }
    expect(a.takeaways.length).toBeGreaterThan(0);
    expect(a.faqs.length).toBeGreaterThan(0);
    expect(a.faqs.every(isPair)).toBe(true);
    for (const [label, url] of a.sources || []) {
      expect(nonEmpty(label)).toBe(true);
      expect(url).toMatch(/^https?:\/\//);
    }
    expect((a.links || []).every(isPair)).toBe(true);
  });

  test.each(projects.map((p) => [p.slug, p]))('projet %s', (slug, p) => {
    for (const field of ['title', 'category', 'shortDescription']) expect(nonEmpty(p[field])).toBe(true);
    expectDate(p.updatedAt);
    if (p.online) expect(p.url).toMatch(/^https:\/\//);
    expect(Array.isArray(p.services)).toBe(true);
  });
});

describe('liens internes', () => {
  const links = [];
  for (const p of contentPages) {
    for (const [, href] of p.relatedLinks || []) links.push([`page ${p.slug}`, href]);
    for (const cta of [p.cta, p.secondaryCta]) if (cta) links.push([`bouton de ${p.slug}`, cta.href]);
  }
  for (const a of articles) for (const [, href] of a.links || []) links.push([`article ${a.slug}`, href]);
  for (const p of projects) for (const href of p.services || []) links.push([`projet ${p.slug}`, href]);

  test('les liens des données sont relatifs à la racine ou en https', () => {
    expect(links.filter(([, href]) => !/^\/(?!\/)|^https:\/\//.test(href))).toEqual([]);
  });

  test('chaque lien interne des données mène à une route existante', () => {
    const broken = links.filter(([, href]) => href.startsWith('/') && !routes.has(pathOf(href)));
    expect(broken).toEqual([]);
  });
});

describe('positionnement', () => {
  test('la préversion express porte un avertissement : ce n’est pas un site définitif', () => {
    const page = getContentPage('preversion-express-24h');
    expect(page).toBeDefined();
    expect(nonEmpty(page.disclaimer)).toBe(true);
    expect(page.disclaimer).toMatch(/pas un site définitif/i);
  });

  test('la page GEO est la page pilier', () => {
    expect(getContentPage('geo-referencement-ia').pillar).toBe(true);
  });

  test('aucun article n’affiche de prix', () => {
    const price = /\d[\d\s  .,]*(?:€|euros?\b|EUR\b)|€\s*\d/i;
    const hits = articles.flatMap((a) =>
      strings(a)
        .map((text) => price.exec(text))
        .filter(Boolean)
        .map((m) => `${a.slug} : ${m[0]}`)
    );
    expect(hits).toEqual([]);
  });
});

describe('coordonnées', () => {
  test('pas d’adresse e-mail publique dans business.js', () => {
    expect(business.email).toBeNull();
  });

  test('aucun fichier de données ne contient d’adresse Gmail', () => {
    const offenders = listFiles(path.join(ROOT, 'lib'))
      .filter((file) => /\.(m?js|json)$/.test(file))
      .filter((file) => /gmail|tlafont49/i.test(readFileSync(file, 'utf8')))
      .map((file) => path.relative(ROOT, file));
    expect(offenders).toEqual([]);
  });
});
