import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { contentPages } from '../../lib/services-data.js';
import { projects } from '../../lib/projects.js';
import { articles } from '../../lib/blog.js';

export const ROOT = path.join(__dirname, '..', '..');

/** Routes written by hand in pages/ (brief of the 2026-11 redesign). */
export const STATIC_ROUTES = [
  '/',
  '/services',
  '/seo',
  '/solutions',
  '/portfolio',
  '/blog',
  '/about',
  '/contact',
  '/mentions-legales',
  '/politique-confidentialite',
  '/cgv',
  '/cgu',
];

/** Every route that must appear in the sitemap, rebuilt from the data independently of the generator. */
export function expectedRoutes() {
  return [
    ...STATIC_ROUTES,
    ...contentPages.map((p) => `/${p.slug}`),
    ...projects.map((p) => `/portfolio/${p.slug}`),
    ...articles.map((a) => `/blog/${a.slug}`),
  ];
}

/** Source paths of the redirects declared in netlify.toml. */
export function redirectedPaths() {
  const toml = readFileSync(path.join(ROOT, 'netlify.toml'), 'utf8');
  return [...toml.matchAll(/^\s*from\s*=\s*"([^"]+)"/gm)].map((m) => m[1]);
}

let cache;

/**
 * Runs scripts/generate-seo-files.mjs in a separate Node process (it is a
 * native ES module) and returns what it would write, without writing anything:
 * { routes: [{ path, lastmod, listed }], files: { 'sitemap.xml': '...', ... } }.
 */
export function generated() {
  if (!cache) {
    const script = pathToFileURL(path.join(ROOT, 'scripts', 'generate-seo-files.mjs')).href;
    const code = [
      `const m = await import(${JSON.stringify(script)});`,
      'process.stdout.write(JSON.stringify(m.buildSeoFiles(await m.loadSiteData())));',
    ].join('\n');
    const stdout = execFileSync(process.execPath, ['--no-warnings', '--input-type=module', '-e', code], {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    });
    cache = JSON.parse(stdout);
  }
  return cache;
}

/** Collapses whitespace like the generator does. */
export const norm = (s) => String(s).replace(/\s+/g, ' ').trim();
