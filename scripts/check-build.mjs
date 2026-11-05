// Post-build gate (npm "postbuild"): scans the static export and exits with
// code 1, listing every problem, when
//   - a route of the site (see getRoutes in generate-seo-files.mjs) has no HTML file;
//   - a page lacks <title>, <meta name="description">, a canonical equal to its
//     own absolute URL, or does not have exactly one <h1>;
//   - a page listed in the sitemap is marked noindex;
//   - a JSON-LD block does not parse;
//   - an internal href, an image src/srcset or an absolute URL of the site
//     points to nothing in the export (#hash, ?query and /_next/ are ignored);
//   - the HTML contains localhost, undefined, NaN, [object Object], gmail.com or tlafont49;
//   - sitemap.xml, robots.txt, llms.txt, llms-full.txt or the IndexNow key file is missing.
// Usage: node scripts/check-build.mjs [export directory, default: out]
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getRoutes, loadSiteData } from './generate-seo-files.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(root, process.argv[2] || 'out');
const outLabel = relative(root, outDir).replace(/\\/g, '/') || '.';

/** Error pages: checked for <title> and <h1> only, never indexed. */
const ERROR_ROUTES = new Set(['/404', '/500']);
/** Never acceptable anywhere in the HTML, inline scripts included. */
const FORBIDDEN = [/localhost/i, /gmail\.com/i, /tlafont49/i];
/** Rendering leftovers, searched outside executable inline scripts. */
const LEFTOVERS = [/\bundefined\b/, /\bNaN\b/, /\[object Object\]/];

const problems = [];
const report = (file, message) => problems.push({ file, message });

function listFiles(dir, prefix = '') {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const rel = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) files.push(...listFiles(join(dir, entry.name), rel));
    else files.push(rel);
  }
  return files;
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
function decodeEntities(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, e) => {
    if (e[0] === '#')
      return String.fromCodePoint(e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : Number(e.slice(1)));
    return ENTITIES[e.toLowerCase()] ?? match;
  });
}

function attributes(tag) {
  const attrs = {};
  const body = tag.replace(/^<[a-z0-9-]+/i, '').replace(/\/?>$/, '');
  for (const m of body.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
    attrs[m[1].toLowerCase()] = decodeEntities(m[2] ?? m[3] ?? m[4] ?? '');
  }
  return attrs;
}

const tags = (html, name) => [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map((m) => attributes(m[0]));
const SCRIPT_RE = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
const isDataScript = (attrs) => /\btype\s*=\s*["']?application\/(?:ld\+)?json/i.test(attrs);

function snippet(text, index) {
  return text
    .slice(Math.max(0, index - 40), index + 40)
    .replace(/\s+/g, ' ')
    .trim();
}

const routeOfHtml = (file) => (file === 'index.html' ? '/' : `/${file.replace(/(\/index)?\.html$/, '')}`);
const htmlOfRoute = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);

async function main() {
  if (!existsSync(outDir)) {
    console.error(`check-build: ${outLabel}/ does not exist, run "next build" first`);
    process.exitCode = 1;
    return;
  }
  const data = await loadSiteData();
  const { absoluteUrl, business } = data;
  const routes = getRoutes(data);
  const listed = new Set(routes.filter((r) => r.listed).map((r) => r.path));
  const known = new Set(routes.map((r) => r.path));
  const files = new Set(listFiles(outDir));
  // Search Console verification files (googleXXXX.html) are plain text, not pages.
  const htmlFiles = [...files].filter(
    (f) => f.endsWith('.html') && !f.startsWith('_next/') && !/^google[0-9a-f]+\.html$/.test(f),
  );

  // A root-relative path exists if it is a file of the export or a page.
  const exists = (path) => {
    if (path === '/') return files.has('index.html');
    const rel = path.slice(1);
    return files.has(rel) || (!rel.endsWith('/') && files.has(`${rel}.html`));
  };
  const check = (file, raw, what, shown = raw) => {
    let path = raw.split('#')[0].split('?')[0];
    if (!path || path.startsWith('/_next/')) return 0;
    try {
      path = decodeURI(path);
    } catch {
      report(file, `${what} ${shown} is not a valid URL`);
      return 1;
    }
    if (!exists(path)) {
      const hint =
        path.length > 1 && path.endsWith('/') && exists(path.slice(0, -1)) ? ' (drop the trailing slash)' : '';
      report(file, `${what} ${shown} points to nothing in ${outLabel}/${hint}`);
    }
    return 1;
  };

  // 1. Every route has its HTML file.
  for (const { path } of routes) {
    if (!files.has(htmlOfRoute(path))) report(`${outLabel}/${htmlOfRoute(path)}`, `missing page for route ${path}`);
  }

  // 2. Every HTML page.
  const site = business.siteUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const selfUrlRe = new RegExp(`${site}(/[^\\s"'<>\\\\)\\]]*)?`, 'g');
  let linkCount = 0;
  let jsonLdCount = 0;
  const unlisted = [];

  for (const rel of htmlFiles) {
    const file = `${outLabel}/${rel}`;
    const route = routeOfHtml(rel);
    const html = readFileSync(join(outDir, rel), 'utf8');
    const head = (/<head\b[^>]*>([\s\S]*?)<\/head>/i.exec(html) || [null, html])[1];
    const withoutJs = html.replace(SCRIPT_RE, (m, attrs) => (isDataScript(attrs) ? m : ''));
    const markup = html.replace(SCRIPT_RE, '').replace(/<!--[\s\S]*?-->/g, '');
    const isError = ERROR_ROUTES.has(route);
    if (!known.has(route) && !isError) unlisted.push(route);

    // Head tags.
    const titles = [...head.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)].map((m) => decodeEntities(m[1]).trim());
    if (!titles.length || !titles[0]) report(file, 'missing or empty <title>');
    else if (titles.length > 1) report(file, `${titles.length} <title> tags in <head>`);
    const metas = tags(head, 'meta');
    const robots = metas.find((m) => (m.name || '').toLowerCase() === 'robots')?.content || '';
    const noindex = /noindex/i.test(robots);
    if (listed.has(route) && noindex) report(file, `listed in sitemap.xml but marked "${robots}"`);
    if (!isError && !noindex) {
      const descriptions = metas.filter((m) => (m.name || '').toLowerCase() === 'description');
      if (!descriptions.length || !descriptions[0].content?.trim())
        report(file, 'missing or empty <meta name="description">');
      else if (descriptions.length > 1) report(file, `${descriptions.length} <meta name="description"> tags`);
      const canonicals = tags(head, 'link').filter((l) =>
        (l.rel || '').toLowerCase().split(/\s+/).includes('canonical')
      );
      const expected = absoluteUrl(route);
      if (!canonicals.length) report(file, `missing <link rel="canonical"> (expected ${expected})`);
      else if (canonicals.length > 1) report(file, `${canonicals.length} canonical links`);
      else if (canonicals[0].href !== expected)
        report(file, `canonical is ${canonicals[0].href}, expected ${expected}`);
    }

    // Exactly one <h1>.
    const h1 = (markup.match(/<h1[\s>]/gi) || []).length;
    if (h1 !== 1) report(file, `${h1} <h1> elements (expected exactly one)`);

    // JSON-LD parses.
    for (const m of html.matchAll(SCRIPT_RE)) {
      if (!/\btype\s*=\s*["']?application\/ld\+json/i.test(m[1])) continue;
      jsonLdCount += 1;
      try {
        JSON.parse(m[2]);
      } catch (error) {
        report(file, `JSON-LD block does not parse: ${error.message}`);
      }
    }

    // Internal links, images and absolute URLs of the site.
    for (const m of markup.matchAll(/\shref\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) {
      const href = decodeEntities(m[1] ?? m[2]);
      if (href.startsWith('/') && !href.startsWith('//')) linkCount += check(file, href, 'link');
    }
    for (const m of markup.matchAll(/\s(src|srcset)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) {
      const value = decodeEntities(m[2] ?? m[3]);
      const urls =
        m[1].toLowerCase() === 'srcset' ? value.split(',').map((c) => c.trim().split(/\s+/)[0]) : [value.trim()];
      for (const url of urls) if (url.startsWith('/') && !url.startsWith('//')) check(file, url, m[1].toLowerCase());
    }
    for (const m of html.matchAll(selfUrlRe)) {
      const path = (m[1] || '/').replace(/[.,;:!?»]+$/, '');
      check(file, path, 'URL', `${business.siteUrl}${path}`);
    }

    // Strings that must never be published.
    for (const re of FORBIDDEN) {
      const m = re.exec(html);
      if (m) report(file, `contains "${m[0]}": …${snippet(html, m.index)}…`);
    }
    for (const re of LEFTOVERS) {
      const m = re.exec(withoutJs);
      if (m) report(file, `contains "${m[0]}": …${snippet(withoutJs, m.index)}…`);
    }
  }

  // 3. Generated files.
  for (const name of ['sitemap.xml', 'robots.txt', 'llms.txt', 'llms-full.txt']) {
    if (!files.has(name)) report(`${outLabel}/${name}`, 'missing (generated by scripts/generate-seo-files.mjs)');
  }
  const keyFile = `${data.indexNowKey}.txt`;
  if (!files.has(keyFile)) report(`${outLabel}/${keyFile}`, 'IndexNow key file missing');
  else if (readFileSync(join(outDir, keyFile), 'utf8').trim() !== data.indexNowKey)
    report(`${outLabel}/${keyFile}`, 'does not contain the IndexNow key');
  let sitemapCount = 0;
  if (files.has('sitemap.xml')) {
    for (const m of readFileSync(join(outDir, 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]*)<\/loc>/g)) {
      sitemapCount += 1;
      const loc = decodeEntities(m[1].trim());
      if (!loc.startsWith(`${business.siteUrl}/`)) report(`${outLabel}/sitemap.xml`, `URL outside the site: ${loc}`);
      else if (!exists(loc.slice(business.siteUrl.length)))
        report(`${outLabel}/sitemap.xml`, `lists ${loc}, which has no page`);
    }
  }

  if (problems.length) {
    // One line per message, with the pages it occurs on: a broken footer link is printed once.
    const grouped = new Map();
    for (const { file, message } of problems) {
      const where = grouped.get(message) || new Map();
      where.set(file, (where.get(file) || 0) + 1);
      grouped.set(message, where);
    }
    const count = [...grouped.values()].reduce((n, where) => n + where.size, 0);
    console.error(`check-build: ${count} problem${count > 1 ? 's' : ''} in ${outLabel}/`);
    for (const [message, where] of grouped) {
      const pages = [...where].map(([file, n]) => (n > 1 ? `${file} (${n}×)` : file));
      const shown = pages.slice(0, 5).join(', ') + (pages.length > 5 ? ` and ${pages.length - 5} more pages` : '');
      console.error(`  - ${shown}: ${message}`);
    }
    process.exitCode = 1;
    return;
  }
  console.log(
    `check-build: OK, ${htmlFiles.length} HTML pages, ${routes.length} routes, ${sitemapCount} sitemap URLs, ` +
      `${linkCount} internal links and ${jsonLdCount} JSON-LD blocks checked`
  );
  if (unlisted.length) {
    console.log(
      `check-build: note, not in the route list of generate-seo-files.mjs (so not in sitemap.xml): ${unlisted.join(', ')}`
    );
  }
}

main().catch((error) => {
  console.error(`check-build: ${error.stack || error.message}`);
  process.exitCode = 1;
});
