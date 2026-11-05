/** @jest-environment node */
import { absoluteUrl, business } from '../lib/business.js';
import { contentPages } from '../lib/services-data.js';
import { projects } from '../lib/projects.js';
import { articles } from '../lib/blog.js';
import { INDEXNOW_KEY } from '../lib/indexnow.js';
import { expectedRoutes, generated, norm } from './helpers/site.js';

const EMAIL = /[\w.+-]+@[\w-]+\.[a-z]{2,}/i;

/** RFC 9309 groups: consecutive user-agent lines, then their allow/disallow rules. */
function robotsGroups(text) {
  const groups = [];
  let current = null;
  let previousWasAgent = false;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, '').trim();
    const m = /^([A-Za-z-]+)\s*:\s*(.*)$/.exec(line);
    if (!m) continue;
    const key = m[1].toLowerCase();
    if (key === 'user-agent') {
      if (!previousWasAgent) groups.push((current = { agents: [], rules: [] }));
      current.agents.push(m[2].toLowerCase());
      previousWasAgent = true;
    } else {
      if ((key === 'allow' || key === 'disallow') && current) current.rules.push(`${key}: ${m[2]}`);
      previousWasAgent = false;
    }
  }
  return groups;
}

describe('robots.txt', () => {
  const bots = [
    'OAI-SearchBot',
    'ChatGPT-User',
    'GPTBot',
    'PerplexityBot',
    'Perplexity-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'Google-Extended',
    'Applebot-Extended',
    'Bingbot',
    'Googlebot',
  ];
  let robots;
  let groups;

  beforeAll(() => {
    robots = generated().files['robots.txt'];
    groups = robotsGroups(robots);
  });

  test('autorise tout le site à tous les robots', () => {
    const star = groups.find((g) => g.agents.includes('*'));
    expect(star.rules).toEqual(['allow: /']);
    expect(robots).not.toMatch(/^\s*disallow\s*:\s*\S/im);
  });

  test.each(bots)('%s a son propre groupe, complet', (bot) => {
    const group = groups.find((g) => g.agents.includes(bot.toLowerCase()));
    expect(group).toBeDefined();
    expect(group.rules).toEqual(['allow: /']);
  });

  test('chaque groupe reprend la règle complète (un robot nommé ignore le groupe *)', () => {
    for (const group of groups) expect(group.rules).toEqual(['allow: /']);
    const agents = groups.flatMap((g) => g.agents);
    expect(new Set(agents).size).toBe(agents.length);
  });

  test('déclare le sitemap en URL absolue', () => {
    expect(robots).toMatch(new RegExp(`^Sitemap: ${absoluteUrl('/sitemap.xml').replace(/\./g, '\\.')}$`, 'm'));
  });
});

describe('llms.txt', () => {
  let llms;
  let lines;
  let items;
  const section = (title) => {
    const start = lines.indexOf(title);
    const end = lines.findIndex((l, i) => i > start && l.startsWith('## '));
    return lines.slice(start + 1, end === -1 ? undefined : end).filter((l) => l.startsWith('- '));
  };
  const linkTo = (line) => /\]\(([^)]+)\)/.exec(line)?.[1];

  beforeAll(() => {
    llms = generated().files['llms.txt'];
    lines = llms.split('\n');
    items = lines.filter((l) => l.startsWith('- '));
  });

  test('suit le format llmstxt.org : H1, citation, puis sections H2', () => {
    expect(lines[0]).toBe(`# ${business.brandName}`);
    expect(lines.slice(1).find((l) => l.trim())).toMatch(/^> \S/);
    expect(lines.filter((l) => /^#\s/.test(l))).toHaveLength(1);
    expect(lines.filter((l) => /^##\s/.test(l))).toEqual([
      '## Services',
      '## Guides GEO et SEO',
      '## Réalisations',
      '## Optional',
    ]);
    expect(lines.filter((l) => /^#{3,}\s/.test(l))).toEqual([]);
  });

  test('chaque entrée est un lien absolu vers une page qui existe, avec une description', () => {
    const known = new Set([...expectedRoutes().map((r) => absoluteUrl(r)), absoluteUrl('/llms-full.txt')]);
    for (const item of items) expect(item).toMatch(/^- \[[^\]]+\]\(https:\/\/[^)\s]+\): \S/);
    const urls = items.map(linkTo);
    expect(urls.filter((u) => !known.has(u))).toEqual([]);
    expect(new Set(urls).size).toBe(urls.length);
  });

  test('la page GEO ouvre la section Services, qui liste toutes les pages de contenu', () => {
    const services = section('## Services');
    expect(linkTo(services[0])).toBe(absoluteUrl('/geo-referencement-ia'));
    expect(services.map(linkTo).sort()).toEqual(contentPages.map((p) => absoluteUrl(`/${p.slug}`)).sort());
  });

  test('liste toutes les réalisations et tous les guides', () => {
    expect(section('## Réalisations').map(linkTo)).toEqual(projects.map((p) => absoluteUrl(`/portfolio/${p.slug}`)));
    const urls = items.map(linkTo);
    for (const a of articles) expect(urls).toContain(absoluteUrl(`/blog/${a.slug}`));
    expect(section('## Guides GEO et SEO').length).toBeGreaterThan(0);
  });

  test('décrit la préversion express honnêtement : urgence ou indexation, jamais un site fini', () => {
    const line = items.find((l) => linkTo(l) === absoluteUrl('/preversion-express-24h'));
    expect(line).toMatch(/urgence/i);
    expect(line).toMatch(/index/i);
    expect(line).toMatch(/pas un site définitif/i);
  });

  test('donne adresse, téléphone, horaires et zone d’intervention avant les sections', () => {
    const facts = llms.slice(0, llms.indexOf('## Services'));
    const a = business.legalAddress;
    for (const fact of [a.streetAddress, a.postalCode, a.city, business.phone, ...business.serviceAreas])
      expect(facts).toContain(fact);
    expect(facts.toLowerCase()).toContain(business.openingHours.label.toLowerCase());
  });
});

describe('llms-full.txt', () => {
  let full;

  beforeAll(() => {
    full = generated().files['llms-full.txt'];
  });

  test('reprend chaque page de contenu : titre, URL, réponse, intro, sections et FAQ', () => {
    for (const p of contentPages) {
      expect(full).toContain(`### ${norm(p.title)}\n`);
      expect(full).toContain(absoluteUrl(`/${p.slug}`));
      if (p.answer) expect(full).toContain(norm(p.answer));
      expect(full).toContain(norm(p.intro));
      for (const s of [...(p.sections || []), ...(p.detailSections || [])])
        expect(full).toContain(`#### ${norm(s.title)}\n`);
      for (const [q, r] of p.faqs) expect(full).toContain(`**${norm(q)}**\n${norm(r)}`);
    }
  });

  test('reprend chaque article : titre, URL, réponse, intro, sections, points clés et FAQ', () => {
    for (const a of articles) {
      expect(full).toContain(`### ${norm(a.title)}\n`);
      expect(full).toContain(absoluteUrl(`/blog/${a.slug}`));
      expect(full).toContain(norm(a.answer));
      for (const p of a.intro) expect(full).toContain(norm(p));
      for (const s of a.sections) expect(full).toContain(`#### ${norm(s.title)}\n`);
      for (const t of a.takeaways) expect(full).toContain(`- ${norm(t)}`);
      for (const [q, r] of a.faqs) expect(full).toContain(`**${norm(q)}**\n${norm(r)}`);
    }
  });

  test('donne les coordonnées de l’entreprise et l’avertissement de la préversion', () => {
    for (const fact of [business.phone, business.siret, business.legalAddress.streetAddress])
      expect(full).toContain(fact);
    expect(full).toContain(norm(contentPages.find((p) => p.slug === 'preversion-express-24h').disclaimer));
  });

  test('les blocs de code sont fermés et aucun reste de rendu n’apparaît', () => {
    expect((full.match(/^```/gm) || []).length % 2).toBe(0);
    expect(full).not.toMatch(/\bundefined\b|\[object Object\]|\bNaN\b/);
  });
});

describe('fichiers générés', () => {
  test('aucune adresse e-mail, aucun ancien domaine, aucune URL locale', () => {
    for (const [name, content] of Object.entries(generated().files)) {
      expect([name, EMAIL.test(content)]).toEqual([name, false]);
      expect([name, /theo-multimedia\.com|localhost|gmail/i.test(content)]).toEqual([name, false]);
    }
  });

  test('la clé IndexNow est stable, au bon format, et son fichier ne contient qu’elle', () => {
    expect(INDEXNOW_KEY).toMatch(/^[0-9a-f]{32}$/);
    expect(generated().files[`${INDEXNOW_KEY}.txt`]).toBe(INDEXNOW_KEY);
  });
});
