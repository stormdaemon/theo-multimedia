// Submits the site's URLs to IndexNow (https://www.indexnow.org/documentation).
// One POST to the shared endpoint, which passes the URLs on to every
// participating search engine (Bing, Yandex, Seznam, Naver, Yep...).
// Run it after a deploy, once https://theo-multimedia.netlify.app/<key>.txt is live:
//   npm run indexnow                          every URL of public/sitemap.xml
//   npm run indexnow -- --since=2026-11-05    only the URLs whose lastmod is on or after that date
//   npm run indexnow -- --dry-run             print the request, send nothing
// IndexNow asks for changed URLs only: after the first submission, prefer --since.
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { INDEXNOW_KEY } from '../lib/indexnow.js';

const ENDPOINT = 'https://api.indexnow.org/indexnow';
const HOST = 'theo-multimedia.netlify.app';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const MAX_URLS_PER_REQUEST = 10000;

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sitemapFile = join(root, 'public', 'sitemap.xml');

/** Response codes documented by IndexNow. */
const MEANING = {
  200: 'URLs received',
  202: 'URLs received, key validation pending',
  400: 'bad request: invalid format',
  403: 'key not valid: the key file was not found or does not contain the key',
  422: 'URLs outside the host, or key not matching the schema',
  429: 'too many requests: wait before submitting again',
};

const decodeXml = (s) =>
  s.replace(/&(amp|lt|gt|quot|apos);/g, (m, e) => ({ amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" })[e]);

function sitemapUrls(since) {
  if (!existsSync(sitemapFile)) {
    throw new Error('public/sitemap.xml not found: run "node scripts/generate-seo-files.mjs" first');
  }
  const xml = readFileSync(sitemapFile, 'utf8');
  return [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)]
    .map(([, entry]) => ({
      loc: decodeXml(/<loc>([^<]+)<\/loc>/.exec(entry)?.[1].trim() || ''),
      lastmod: /<lastmod>([^<]+)<\/lastmod>/.exec(entry)?.[1].trim() || '',
    }))
    .filter(({ loc, lastmod }) => loc.startsWith(`https://${HOST}/`) && (!since || lastmod >= since))
    .map(({ loc }) => loc);
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const since = args.find((a) => a.startsWith('--since='))?.slice('--since='.length);
  if (since !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(since))
    throw new Error('--since expects a date as YYYY-MM-DD');

  const urls = sitemapUrls(since);
  if (!urls.length) {
    console.log(`indexnow: no URL to submit${since ? ` with a lastmod on or after ${since}` : ''}`);
    return;
  }

  if (!dryRun) {
    // A key file that is not online yet gets a 403 (or a silent failure after a 202).
    const res = await fetch(KEY_LOCATION).catch((error) => ({ ok: false, status: error.message }));
    const text = res.ok ? (await res.text()).trim() : '';
    if (text !== INDEXNOW_KEY) {
      throw new Error(
        `${KEY_LOCATION} does not serve the key (${res.ok ? 'other content' : res.status}): deploy the site first`
      );
    }
  }

  for (let start = 0; start < urls.length; start += MAX_URLS_PER_REQUEST) {
    const urlList = urls.slice(start, start + MAX_URLS_PER_REQUEST);
    const body = JSON.stringify({ host: HOST, key: INDEXNOW_KEY, keyLocation: KEY_LOCATION, urlList });
    if (dryRun) {
      console.log(
        `indexnow (dry run): POST ${ENDPOINT}\nContent-Type: application/json; charset=utf-8\n\n${JSON.stringify(JSON.parse(body), null, 2)}`
      );
      continue;
    }
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    });
    console.log(`indexnow: HTTP ${res.status} ${MEANING[res.status] || res.statusText} (${urlList.length} URLs)`);
    if (!res.ok) {
      const detail = (await res.text()).trim();
      if (detail) console.log(detail.slice(0, 500));
      process.exitCode = 1;
    }
  }
}

main().catch((error) => {
  console.error(`indexnow: ${error.message}`);
  process.exitCode = 1;
});
