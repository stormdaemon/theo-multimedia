/** Small text helpers shared by pages (kept apart from the article data so pages don't bundle it). */

/** URL fragment for a section title: "Qu’est-ce que le GEO ?" -> "quest-ce-que-le-geo" */
export function slugify(text) {
  return String(text)
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’'`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 64);
}

/** "2026-11-05" -> "5 novembre 2026" */
export function formatDate(iso) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** French typography: no-break space before : ; ! ? », after « and inside "24 h", so nothing starts a line alone. */
export function frenchSpacing(text) {
  return String(text)
    .replace(/ ([:;!?»])/g, ' $1')
    .replace(/« /g, '« ')
    .replace(/(\d) (h|min|km|%)(?![\p{L}\d])/gu, '$1 $2');
}

/**
 * Heading text for <Heat>: the part after " : " (or from " pour ") is the accent.
 * "GEO : devenir la réponse…" -> "GEO : [[devenir la réponse…]]"
 */
export function accentTitle(title) {
  const t = String(title);
  const colon = t.indexOf(' : ');
  if (colon > 0) return frenchSpacing(`${t.slice(0, colon)} : [[${t.slice(colon + 3)}]]`);
  const pour = t.indexOf(' pour ');
  if (pour > 0) return frenchSpacing(`${t.slice(0, pour)} [[${t.slice(pour + 1)}]]`);
  return frenchSpacing(t);
}
