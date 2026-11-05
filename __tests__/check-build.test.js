/** @jest-environment node */
import { spawnSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { absoluteUrl } from '../lib/business.js';
import { ROOT, generated } from './helpers/site.js';

/** Runs scripts/check-build.mjs on an export directory. */
const checkBuild = (dir) =>
  spawnSync(process.execPath, ['--no-warnings', path.join(ROOT, 'scripts', 'check-build.mjs'), dir], {
    cwd: ROOT,
    encoding: 'utf8',
  });

/** A minimal page that passes every check. */
function page(route) {
  const url = absoluteUrl(route);
  const head =
    route === '/404'
      ? '<title>Page introuvable</title><meta name="robots" content="noindex, follow"/>'
      : `<title>Page ${route}</title><meta name="description" content="Description de ${route}"/><link rel="canonical" href="${url}"/>` +
        `<script type="application/ld+json">{"@context":"https://schema.org","@type":"WebPage","url":"${url}"}</script>`;
  return (
    `<!DOCTYPE html><html lang="fr"><head><meta charSet="utf-8"/>${head}</head><body>` +
    '<svg><title>icône</title></svg><h1>Titre</h1>' +
    '<a href="/contact?service=audit-geo">Contact</a><a href="/blog#guides">Blog</a><a href="/llms.txt">llms</a><a href="#contenu">Haut</a>' +
    '<picture><source srcSet="/logo.avif 1x" type="image/avif"/><img src="/logo.webp" alt=""/></picture>' +
    '<script src="/_next/static/chunks/main.js"></script><script>if (typeof x === "undefined") var y = NaN;</script>' +
    `<script id="__NEXT_DATA__" type="application/json">{"page":"${route}"}</script></body></html>`
  );
}

describe('scripts/check-build.mjs', () => {
  let tmp;
  let clean;

  beforeAll(() => {
    const { routes, files } = generated();
    tmp = mkdtempSync(path.join(os.tmpdir(), 'tm-check-build-'));
    clean = path.join(tmp, 'clean');
    mkdirSync(clean);
    for (const [name, content] of Object.entries(files)) writeFileSync(path.join(clean, name), content);
    for (const asset of ['logo.avif', 'logo.webp']) writeFileSync(path.join(clean, asset), '');
    for (const { path: route } of routes) {
      const file = path.join(clean, route === '/' ? 'index.html' : `${route.slice(1)}.html`);
      mkdirSync(path.dirname(file), { recursive: true });
      writeFileSync(file, page(route));
    }
  });

  afterAll(() => {
    rmSync(tmp, { recursive: true, force: true });
  });

  test('accepte un export complet et propre', () => {
    const result = checkBuild(clean);
    expect(result.stderr).toBe('');
    expect(result.stdout).toMatch(/^check-build: OK/);
    expect(result.status).toBe(0);
  });

  test('liste chaque problème et sort en erreur', () => {
    const broken = path.join(tmp, 'broken');
    cpSync(clean, broken, { recursive: true });
    const edit = (file, change) =>
      writeFileSync(path.join(broken, file), change(readFileSync(path.join(broken, file), 'utf8')));
    rmSync(path.join(broken, 'cgu.html'));
    rmSync(path.join(broken, 'llms.txt'));
    edit('blog.html', (h) => h.replace('<h1>Titre</h1>', ''));
    edit('about.html', (h) => h.replace('<title>Page /about</title>', ''));
    edit('cgv.html', (h) => h.replace(/<meta name="description"[^>]*>/, ''));
    edit('contact.html', (h) => h.replace(absoluteUrl('/contact'), absoluteUrl('/')));
    edit('seo.html', (h) => h.replace('{"@context"', '{@context'));
    edit('solutions.html', (h) =>
      h.replace('</body>', '<a href="/page-absente">x</a><img src="/absente.webp"></body>')
    );
    edit('services.html', (h) => h.replace('</body>', '<p>undefined min de lecture</p><p>[object Object]</p></body>'));
    edit('mentions-legales.html', (h) => h.replace('</body>', '<p>http://localhost:3000</p></body>'));
    edit('portfolio.html', (h) =>
      h.replace('</head>', `<meta property="og:image" content="${absoluteUrl('/og/absente.jpg')}"/></head>`)
    );

    const result = checkBuild(broken);
    expect(result.status).toBe(1);
    const output = result.stderr;
    for (const expected of [
      'missing page for route /cgu',
      'llms.txt: missing',
      'blog.html: 0 <h1> elements',
      'about.html: missing or empty <title>',
      'cgv.html: missing or empty <meta name="description">',
      `contact.html: canonical is ${absoluteUrl('/')}, expected ${absoluteUrl('/contact')}`,
      'seo.html: JSON-LD block does not parse',
      'link /page-absente points to nothing',
      'src /absente.webp points to nothing',
      'services.html: contains "undefined"',
      'services.html: contains "[object Object]"',
      'mentions-legales.html: contains "localhost"',
      `URL ${absoluteUrl('/og/absente.jpg')} points to nothing`,
      `lists ${absoluteUrl('/cgu')}, which has no page`,
    ]) {
      expect(output).toContain(expected);
    }
  });
});
