/** @jest-environment node */
import { absoluteUrl, business } from '../lib/business.js';
import { contentPages } from '../lib/services-data.js';
import { projects } from '../lib/projects.js';
import { articles } from '../lib/blog.js';
import { STATIC_ROUTES, expectedRoutes, generated, redirectedPaths } from './helpers/site.js';

const STATIC_LASTMOD = '2026-11-06';
const max = (dates) => dates.reduce((a, b) => (b > a ? b : a), STATIC_LASTMOD);

describe('sitemap.xml', () => {
  let xml;
  let entries;
  let lastmodOf;

  beforeAll(() => {
    xml = generated().files['sitemap.xml'];
    entries = [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>\s*<\/url>/g)].map(
      ([, loc, lastmod]) => ({
        loc,
        lastmod,
      })
    );
    lastmodOf = (route) => entries.find((e) => e.loc === absoluteUrl(route))?.lastmod;
  });

  test('est un urlset XML dont chaque <url> a une <loc> et une <lastmod>', () => {
    expect(
      xml.startsWith(
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
      )
    ).toBe(true);
    expect(xml.trim().endsWith('</urlset>')).toBe(true);
    expect(entries.length).toBe((xml.match(/<url>/g) || []).length);
  });

  test('contient toutes les routes du site, et seulement elles', () => {
    expect(entries.map((e) => e.loc).sort()).toEqual(
      expectedRoutes()
        .map((r) => absoluteUrl(r))
        .sort()
    );
  });

  test('ne liste ni URL redirigée, ni la page 404, ni doublon', () => {
    const redirects = redirectedPaths();
    expect(redirects).toEqual(
      expect.arrayContaining(['/seo-ia', '/site-vitrine-24h', '/blog/site-vitrine-en-24h-est-ce-possible'])
    );
    const locs = entries.map((e) => e.loc);
    for (const from of [...redirects, '/404']) expect(locs).not.toContain(absoluteUrl(from));
    expect(new Set(locs).size).toBe(locs.length);
  });

  test('les URL sont absolues, sur le domaine du site, sans slash final (sauf l’accueil)', () => {
    for (const { loc } of entries) {
      expect(loc.startsWith(`${business.siteUrl}/`)).toBe(true);
      if (loc !== `${business.siteUrl}/`) expect(loc.endsWith('/')).toBe(false);
    }
  });

  test('lastmod reprend la date updatedAt des données', () => {
    for (const p of contentPages) expect(lastmodOf(`/${p.slug}`)).toBe(p.updatedAt);
    for (const p of projects) expect(lastmodOf(`/portfolio/${p.slug}`)).toBe(p.updatedAt);
    for (const a of articles) expect(lastmodOf(`/blog/${a.slug}`)).toBe(a.updatedAt || a.publishedAt);
  });

  test('les pages statiques datent du 2026-11-06, les listes suivent leur contenu le plus récent', () => {
    for (const route of STATIC_ROUTES.filter((r) => r !== '/blog' && r !== '/portfolio')) {
      expect(lastmodOf(route)).toBe(STATIC_LASTMOD);
    }
    expect(lastmodOf('/blog')).toBe(max(articles.map((a) => a.updatedAt || a.publishedAt)));
    expect(lastmodOf('/portfolio')).toBe(max(projects.map((p) => p.updatedAt)));
  });

  test('n’émet ni priority ni changefreq (ignorés par Google)', () => {
    expect(xml).not.toContain('<priority>');
    expect(xml).not.toContain('<changefreq>');
  });
});
