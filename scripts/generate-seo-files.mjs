// Writes the SEO files of the static site before every build (npm "prebuild"):
//   lib/articles/index.js   article index (scripts/build-article-index.mjs)
//   public/sitemap.xml      every listed route, lastmod taken from the data
//   public/robots.txt       open to every crawler, search and AI crawlers named
//   public/llms.txt         llmstxt.org summary of the site
//   public/llms-full.txt    full text of the service pages and the guides
//   public/<key>.txt        IndexNow key file (the key lives in lib/indexnow.js)
// Routes are derived from the data modules in lib/: a new page, project or
// article shows up in every file without touching this script. Importing this
// module writes nothing; scripts/check-build.mjs and the tests reuse its exports.
import { readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildArticleIndex } from './build-article-index.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');

/** lastmod of the pages written by hand in pages/: bump it when one of them really changes. */
export const STATIC_LASTMOD = '2026-11-05';

const HUB_ROUTES = ['/', '/services', '/seo', '/solutions'];
const AGENCY_ROUTES = ['/about', '/contact'];
const LEGAL_ROUTES = ['/mentions-legales', '/politique-confidentialite', '/cgv', '/cgu'];
/** Rendered but never listed in the sitemap. */
const UNLISTED_ROUTES = ['/404'];

/** Guide categories listed under "Guides GEO et SEO" in llms.txt; the other guides go to "Optional". */
const GEO_SEO_CATEGORIES = ['GEO & IA', 'SEO local'];

/**
 * Crawlers named in robots.txt: [exact token, vendor, purpose]. Tokens checked
 * on 2026-11-05 against each vendor's documentation:
 *   OpenAI      https://developers.openai.com/api/docs/bots
 *   Perplexity  https://docs.perplexity.ai/guides/bots
 *   Anthropic   https://support.claude.com/en/articles/8896518
 *   Google      https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
 *   Microsoft   https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0
 *   Apple       https://support.apple.com/en-us/119829
 *   Mistral AI  https://docs.mistral.ai/robots/
 *   DuckDuckGo  https://duckduckgo.com/duckduckgo-help-pages/results/duckassistbot
 */
export const NAMED_CRAWLERS = [
  ['OAI-SearchBot', 'OpenAI', 'résultats de recherche de ChatGPT'],
  ['ChatGPT-User', 'OpenAI', 'pages ouvertes à la demande d’un utilisateur de ChatGPT'],
  ['GPTBot', 'OpenAI', 'entraînement des modèles'],
  ['PerplexityBot', 'Perplexity', 'résultats de recherche de Perplexity'],
  ['Perplexity-User', 'Perplexity', 'pages ouvertes à la demande d’un utilisateur de Perplexity'],
  ['Claude-SearchBot', 'Anthropic', 'résultats de recherche de Claude'],
  ['Claude-User', 'Anthropic', 'pages ouvertes à la demande d’un utilisateur de Claude'],
  ['ClaudeBot', 'Anthropic', 'entraînement des modèles'],
  ['Googlebot', 'Google', 'Google Search, AI Overviews compris'],
  ['Google-Extended', 'Google', 'jeton de contrôle : entraînement et ancrage des réponses de Gemini'],
  ['bingbot', 'Microsoft', 'Bing, qui alimente aussi Copilot'],
  ['Applebot', 'Apple', 'Spotlight, Siri et Safari'],
  ['Applebot-Extended', 'Apple', 'jeton de contrôle : entraînement des modèles d’Apple'],
  ['MistralAI-Index', 'Mistral AI', 'index de recherche de Mistral AI'],
  ['MistralAI-User', 'Mistral AI', 'pages ouvertes à la demande d’un utilisateur'],
  ['DuckAssistBot', 'DuckDuckGo', 'réponses assistées par IA de DuckDuckGo'],
];

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const KEY_RE = /^[A-Za-z0-9-]{8,128}$/;

/** Loads the data modules. Dynamic imports, so a freshly rebuilt lib/articles/index.js is the one read. */
export async function loadSiteData() {
  const [site, services, portfolio, blog, indexnow] = await Promise.all([
    import('../lib/business.js'),
    import('../lib/services-data.js'),
    import('../lib/projects.js'),
    import('../lib/blog.js'),
    import('../lib/indexnow.js'),
  ]);
  return {
    business: site.business,
    absoluteUrl: site.absoluteUrl,
    fullAddress: site.fullAddress,
    contentPages: services.contentPages,
    serviceIndex: services.serviceIndex || [],
    projects: portfolio.projects,
    articles: blog.articles,
    categories: blog.categories || [],
    featuredSlugs: blog.featuredSlugs || [],
    indexNowKey: indexnow.INDEXNOW_KEY,
  };
}

function checkDate(value, where) {
  if (!DATE_RE.test(String(value ?? '')) || Number.isNaN(Date.parse(value))) {
    throw new Error(`${where}: invalid or missing date "${value}" (expected YYYY-MM-DD)`);
  }
  return value;
}

function checkSlug(slug, where) {
  if (!SLUG_RE.test(String(slug ?? ''))) throw new Error(`${where}: invalid slug "${slug}"`);
  return slug;
}

const latest = (dates) => dates.reduce((max, date) => (date > max ? date : max), STATIC_LASTMOD);

/** Content pages in reading order: the pillar (GEO) first, then the service index order, then the rest. */
export function orderedContentPages({ contentPages, serviceIndex = [] }) {
  const rank = new Map(serviceIndex.map((entry, i) => [entry.slug, i]));
  const score = (page) => (page.pillar ? -1 : rank.has(page.slug) ? rank.get(page.slug) : serviceIndex.length);
  return contentPages
    .map((page, index) => ({ page, index }))
    .sort((a, b) => score(a.page) - score(b.page) || a.index - b.index)
    .map(({ page }) => page);
}

/** Guides: the featured ones first, then by category order, newest first inside a category. */
export function orderedArticles({ articles, categories = [], featuredSlugs = [] }) {
  const featured = featuredSlugs.map((slug) => articles.find((a) => a.slug === slug)).filter(Boolean);
  const rank = (a) => (categories.includes(a.category) ? categories.indexOf(a.category) : categories.length);
  const byDate = (a, b) => (b.publishedAt || '').localeCompare(a.publishedAt || '');
  const rest = articles.filter((a) => !featured.includes(a)).sort((a, b) => rank(a) - rank(b) || byDate(a, b));
  return [...featured, ...rest];
}

/**
 * Every route of the site: { path, lastmod, listed }. `listed: false` routes
 * exist in the export but stay out of the sitemap. Throws on a bad slug, a bad
 * date or two routes with the same path.
 */
export function getRoutes(data) {
  const { contentPages, projects, articles } = data;
  const routes = [];
  const add = (path, lastmod, listed = true) => routes.push({ path, lastmod, listed });

  const pageDates = contentPages.map((p) => checkDate(p.updatedAt, `lib/services-data.js "${p.slug}" updatedAt`));
  const projectDates = projects.map((p) => checkDate(p.updatedAt, `lib/projects.js "${p.slug}" updatedAt`));
  const articleDates = articles.map((a) =>
    checkDate(a.updatedAt || a.publishedAt, `lib/articles/${a.slug}.js updatedAt`)
  );

  for (const path of HUB_ROUTES) add(path, STATIC_LASTMOD);
  for (const page of orderedContentPages(data)) {
    add(`/${checkSlug(page.slug, 'lib/services-data.js')}`, pageDates[contentPages.indexOf(page)]);
  }
  // Listing pages change when an item is added or updated.
  add('/portfolio', latest(projectDates));
  projects.forEach((p, i) => add(`/portfolio/${checkSlug(p.slug, 'lib/projects.js')}`, projectDates[i]));
  add('/blog', latest(articleDates));
  articles.forEach((a, i) => add(`/blog/${checkSlug(a.slug, 'lib/articles')}`, articleDates[i]));
  for (const path of [...AGENCY_ROUTES, ...LEGAL_ROUTES]) add(path, STATIC_LASTMOD);
  for (const path of UNLISTED_ROUTES) add(path, null, false);

  const seen = new Set();
  for (const { path } of routes) {
    if (seen.has(path)) throw new Error(`Two pages share the route ${path}: rename one of the slugs`);
    seen.add(path);
  }
  return routes;
}

const escapeXml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c]);

export function buildSitemap(data, routes = getRoutes(data)) {
  const urls = routes
    .filter((r) => r.listed)
    .map((r) =>
      [
        '  <url>',
        `    <loc>${escapeXml(data.absoluteUrl(r.path))}</loc>`,
        `    <lastmod>${r.lastmod}</lastmod>`,
        '  </url>',
      ].join('\n')
    );
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}

export function buildRobots({ business, absoluteUrl }) {
  const lines = [
    `# robots.txt · ${business.brandName} · ${business.siteUrl}`,
    '# Généré par scripts/generate-seo-files.mjs à chaque build : ne pas modifier à la main.',
    '#',
    '# Tout le site est ouvert à tous les robots. Les robots des moteurs de recherche',
    '# et des moteurs de réponse IA sont aussi nommés un par un. Un robot qui trouve',
    '# un groupe à son nom ignore le groupe « * » : chaque groupe reprend donc la',
    '# règle complète.',
    '',
    'User-agent: *',
    'Allow: /',
    '',
  ];
  for (const [token, vendor, purpose] of NAMED_CRAWLERS) {
    lines.push(`# ${vendor} · ${purpose}`, `User-agent: ${token}`, 'Allow: /', '');
  }
  lines.push(`Sitemap: ${absoluteUrl('/sitemap.xml')}`, '');
  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// llms.txt and llms-full.txt
// ---------------------------------------------------------------------------

const oneLine = (s) =>
  String(s ?? '')
    .replace(/\s+/g, ' ')
    .trim();
const lowerFirst = (s) => (s ? s.charAt(0).toLowerCase() + s.slice(1) : s);
const listFr = (items) => new Intl.ListFormat('fr', { style: 'long', type: 'conjunction' }).format(items);
const toArray = (x) => (Array.isArray(x) ? x : x ? [x] : []);
const frDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
const linkText = (s) => oneLine(s).replace(/([[\]])/g, '\\$1');
const pathOnly = (href) => href.split(/[?#]/)[0] || '/';
const pageName = (page) => page.title.split(' : ')[0];

function linkItem(data, title, path, text) {
  return `- [${linkText(title)}](${data.absoluteUrl(path)})${text ? `: ${oneLine(text)}` : ''}`;
}

function projectSummary(p) {
  const results = (p.results || []).map(oneLine).join(' ');
  const status = p.online && p.url ? `Site en ligne : ${p.url}` : 'Projet archivé : le site n’est plus en ligne.';
  return [`${p.category} · ${oneLine(p.shortDescription)}`, results, status].filter(Boolean).join(' ');
}

function factsParagraph({ business, fullAddress }) {
  const a = business.legalAddress;
  return [
    `Adresse : ${fullAddress} (${a.department}, ${a.region}).`,
    `Téléphone : ${business.phone}.`,
    `Horaires : ${lowerFirst(business.openingHours.label)}.`,
    `Zone d’intervention : ${listFr(business.serviceAreas)}.`,
    business.email
      ? `E-mail : ${business.email}.`
      : 'Pas d’adresse e-mail publique : les demandes écrites passent par le formulaire de la page Contact.',
    `Interlocuteur : ${business.founder} (${lowerFirst(business.founderRole)}).`,
    `${business.legalForm}, SIRET ${business.siret}.`,
  ].join(' ');
}

export function buildLlms(data) {
  const { business, serviceIndex, projects } = data;
  const short = new Map(serviceIndex.map((entry) => [entry.slug, entry]));
  const guides = orderedArticles(data);
  const guide = (a) => linkItem(data, a.title, `/blog/${a.slug}`, a.description);

  const services = orderedContentPages(data).map((page) => {
    const entry = short.get(page.slug);
    return linkItem(data, entry?.title || pageName(page), `/${page.slug}`, entry?.text || page.metaDescription);
  });
  const optional = [
    linkItem(data, 'Tous les services', '/services', 'Vue d’ensemble des services de l’agence.'),
    linkItem(
      data,
      'SEO et GEO : le hub',
      '/seo',
      'Point d’entrée vers les pages et les guides sur le référencement Google et dans les IA.'
    ),
    linkItem(data, 'Solutions sur mesure', '/solutions', 'CRM, LMS et outils métier développés sur mesure.'),
    linkItem(
      data,
      'L’agence',
      '/about',
      `Présentation de ${business.brandName} et de son fondateur, ${business.founder}.`
    ),
    linkItem(data, 'Contact', '/contact', 'Formulaire de contact et coordonnées.'),
    linkItem(data, 'Réalisations', '/portfolio', 'Tous les projets : sites en ligne et archives.'),
    linkItem(data, 'Blog', '/blog', 'Tous les guides GEO, SEO et web.'),
    ...guides.filter((a) => !GEO_SEO_CATEGORIES.includes(a.category)).map(guide),
    linkItem(data, 'Mentions légales', '/mentions-legales', 'Éditeur du site et informations légales.'),
    linkItem(
      data,
      'Texte complet du site',
      '/llms-full.txt',
      'Pages services et guides réunis dans un seul fichier texte.'
    ),
  ];

  return [
    `# ${business.brandName}`,
    '',
    `> ${oneLine(business.description)}`,
    '',
    factsParagraph(data),
    '',
    `Texte complet des pages services et des guides : ${data.absoluteUrl('/llms-full.txt')}`,
    '',
    '## Services',
    '',
    ...services,
    '',
    '## Guides GEO et SEO',
    '',
    ...guides.filter((a) => GEO_SEO_CATEGORIES.includes(a.category)).map(guide),
    '',
    '## Réalisations',
    '',
    ...projects.map((p) => linkItem(data, p.title, `/portfolio/${p.slug}`, projectSummary(p))),
    '',
    '## Optional',
    '',
    ...optional,
    '',
  ].join('\n');
}

function fence(code) {
  const marker = code.includes('```') ? '~~~~' : '```';
  return [marker, code.replace(/\s+$/, ''), marker].join('\n');
}

/** "#### title", paragraphs, bullet items and an optional code block, followed by a blank line. */
function block(title, { paragraphs = [], items = [], code } = {}) {
  const out = [`#### ${oneLine(title)}`, ''];
  for (const p of toArray(paragraphs)) out.push(oneLine(p), '');
  if (items.length) out.push(...items.map((item) => `- ${oneLine(item)}`), '');
  if (code) out.push(fence(String(code)), '');
  return out;
}

function faqBlock(faqs) {
  if (!faqs?.length) return [];
  const out = ['#### Questions fréquentes', ''];
  for (const [question, answer] of faqs) out.push(`**${oneLine(question)}**`, oneLine(answer), '');
  return out;
}

function relatedBlock(data, links) {
  const seen = new Set();
  const items = [];
  for (const [label, href] of links || []) {
    const url = /^https?:/.test(href) ? href : data.absoluteUrl(pathOnly(href));
    if (seen.has(url)) continue;
    seen.add(url);
    items.push(`- [${linkText(label)}](${url})`);
  }
  return items.length ? ['#### Pages liées', '', ...items, ''] : [];
}

function pageText(data, page) {
  const out = [
    `### ${oneLine(page.title)}`,
    '',
    `- URL : ${data.absoluteUrl(`/${page.slug}`)}`,
    `- Mise à jour : ${frDate(page.updatedAt)}`,
    '',
  ];
  if (page.answer) out.push(`Réponse courte : ${oneLine(page.answer)}`, '');
  if (page.disclaimer) out.push(`À savoir : ${oneLine(page.disclaimer)}`, '');
  for (const p of toArray(page.intro)) out.push(oneLine(p), '');
  if (page.steps?.length) {
    out.push(
      '#### Méthode',
      '',
      ...page.steps.map(([title, text], i) => `${i + 1}. ${oneLine(title)}. ${oneLine(text)}`),
      ''
    );
  }
  if (page.professionals?.length) out.push(...block('Pour qui ?', { items: page.professionals }));
  for (const s of [...toArray(page.sections), ...toArray(page.detailSections)]) {
    out.push(...block(s.title, { paragraphs: s.body || s.paragraphs, items: s.items || [], code: s.code }));
  }
  if (page.localSeo)
    out.push(
      ...block(page.city ? `Référencement local à ${page.city}` : 'Référencement local', { paragraphs: page.localSeo })
    );
  if (page.uniqueAngles?.length) out.push(...block('Points travaillés', { items: page.uniqueAngles }));
  if (page.siteIncludes?.length) out.push(...block('Ce que comprend le site', { items: page.siteIncludes }));
  if (page.method?.length) out.push(...block('Méthode', { items: page.method }));
  out.push(...faqBlock(page.faqs), ...relatedBlock(data, page.relatedLinks));
  return out;
}

function articleText(data, a) {
  const dates =
    a.updatedAt && a.updatedAt !== a.publishedAt
      ? `Publié le ${frDate(a.publishedAt)}, mis à jour le ${frDate(a.updatedAt)}`
      : `Publié le ${frDate(a.publishedAt)}`;
  const out = [
    `### ${oneLine(a.title)}`,
    '',
    `- URL : ${data.absoluteUrl(`/blog/${a.slug}`)}`,
    `- Catégorie : ${a.category}`,
    `- ${dates}`,
    `- Auteur : ${data.business.founder}`,
    '',
  ];
  if (a.answer) out.push(`Réponse courte : ${oneLine(a.answer)}`, '');
  for (const p of toArray(a.intro)) out.push(oneLine(p), '');
  for (const s of a.sections || [])
    out.push(...block(s.title, { paragraphs: s.paragraphs, items: s.items || [], code: s.code }));
  if (a.takeaways?.length) out.push(...block('À retenir', { items: a.takeaways }));
  out.push(...faqBlock(a.faqs));
  if (a.sources?.length) {
    out.push('#### Sources', '', ...a.sources.map(([label, url]) => `- [${linkText(label)}](${url})`), '');
  }
  out.push(...relatedBlock(data, a.links));
  return out;
}

function projectText(data, p) {
  const services = (p.services || []).map((href) => {
    const page = data.contentPages.find((c) => `/${c.slug}` === pathOnly(href));
    const entry = data.serviceIndex.find((s) => `/${s.slug}` === pathOnly(href));
    return entry?.title || (page ? pageName(page) : href);
  });
  const out = [
    `### ${oneLine(p.title)}`,
    '',
    `- URL : ${data.absoluteUrl(`/portfolio/${p.slug}`)}`,
    `- Type : ${p.category}`,
    `- Statut : ${p.online && p.url ? `site en ligne, ${p.url}` : 'projet archivé, le site n’est plus en ligne'}`,
  ];
  if (services.length) out.push(`- Services : ${services.join(', ')}`);
  out.push('', oneLine(p.longDescription || p.shortDescription), '');
  if (p.objectives?.length) out.push(...block('Objectifs', { items: p.objectives }));
  if (p.results?.length) out.push(...block('Résultats', { items: p.results }));
  return out;
}

export function buildLlmsFull(data) {
  const { business, absoluteUrl } = data;
  const a = business.legalAddress;
  const allDates = [
    ...data.contentPages.map((p) => p.updatedAt),
    ...data.projects.map((p) => p.updatedAt),
    ...data.articles.map((x) => x.updatedAt || x.publishedAt),
  ];
  const facts = [
    `- Nom : ${business.brandName}`,
    `- Activité : ${business.tagline}`,
    `- Site : ${absoluteUrl('/')}`,
    `- Adresse : ${data.fullAddress} (${a.department}, ${a.region}, France)`,
    `- Téléphone : ${business.phone}`,
    `- Horaires : ${business.openingHours.label}`,
    `- Zone d’intervention : ${listFr(business.serviceAreas)}`,
    business.email
      ? `- E-mail : ${business.email}`
      : `- Contact écrit : formulaire de la page ${absoluteUrl('/contact')} (pas d’adresse e-mail publique)`,
    `- Interlocuteur : ${business.founder}, ${lowerFirst(business.founderRole)}`,
    `- Forme juridique : ${business.legalForm}`,
    `- SIRET : ${business.siret}`,
    business.vatNumber ? `- TVA intracommunautaire : ${business.vatNumber}` : null,
  ].filter(Boolean);

  return [
    `# ${business.brandName} : texte complet du site`,
    '',
    `> ${oneLine(business.description)}`,
    '',
    `Ce fichier réunit le texte des pages services, des réalisations et des guides publiés sur ${absoluteUrl('/')}`,
    `Sommaire du site : ${absoluteUrl('/llms.txt')}`,
    `Dernière mise à jour du contenu : ${frDate(latest(allDates))}`,
    '',
    '## L’entreprise',
    '',
    ...facts,
    '',
    '## Services',
    '',
    ...orderedContentPages(data).flatMap((page) => pageText(data, page)),
    '## Réalisations',
    '',
    ...data.projects.flatMap((p) => projectText(data, p)),
    '## Guides',
    '',
    ...orderedArticles(data).flatMap((x) => articleText(data, x)),
  ]
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\s+$/, '\n');
}

/** Builds every generated file in memory: { routes, files: { [name in public/]: content } }. */
export function buildSeoFiles(data) {
  if (!KEY_RE.test(String(data.indexNowKey ?? ''))) {
    throw new Error('lib/indexnow.js: INDEXNOW_KEY must be 8 to 128 characters among a-z, A-Z, 0-9 and "-"');
  }
  const routes = getRoutes(data);
  return {
    routes,
    files: {
      'sitemap.xml': buildSitemap(data, routes),
      'robots.txt': buildRobots(data),
      'llms.txt': buildLlms(data),
      'llms-full.txt': buildLlmsFull(data),
      [`${data.indexNowKey}.txt`]: data.indexNowKey,
    },
  };
}

/** Deletes IndexNow key files left by a previous key: <key>.txt files whose content is their own name. */
function removeStaleKeyFiles(currentKey) {
  const removed = [];
  for (const entry of readdirSync(publicDir, { withFileTypes: true })) {
    const match = /^([A-Za-z0-9-]{8,128})\.txt$/.exec(entry.name);
    if (!entry.isFile() || !match || match[1] === currentKey) continue;
    const file = join(publicDir, entry.name);
    if (readFileSync(file, 'utf8').trim() === match[1]) {
      unlinkSync(file);
      removed.push(entry.name);
    }
  }
  return removed;
}

async function main() {
  const articleCount = buildArticleIndex();
  const data = await loadSiteData();
  const { routes, files } = buildSeoFiles(data);
  const removed = removeStaleKeyFiles(data.indexNowKey);
  for (const [name, content] of Object.entries(files)) writeFileSync(join(publicDir, name), content);

  const links = (files['llms.txt'].match(/^- \[/gm) || []).length;
  const size = Math.round(Buffer.byteLength(files['llms-full.txt']) / 1024);
  console.log(
    `generate-seo-files: ${articleCount} articles indexed, sitemap.xml ${routes.filter((r) => r.listed).length} URLs, ` +
      `robots.txt ${NAMED_CRAWLERS.length} named crawlers, llms.txt ${links} links, llms-full.txt ${size} KB, ` +
      `IndexNow ${data.indexNowKey}.txt${removed.length ? `, removed ${removed.join(', ')}` : ''}`
  );
}

const self = fileURLToPath(import.meta.url);
const invoked = process.argv[1] ? resolve(process.argv[1]) : '';
if (process.platform === 'win32' ? invoked.toLowerCase() === self.toLowerCase() : invoked === self) {
  main().catch((error) => {
    console.error(`generate-seo-files: ${error.message}`);
    process.exitCode = 1;
  });
}
