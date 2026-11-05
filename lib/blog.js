import { articles as raw } from './articles/index.js';

const countWords = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;

function wordCountOf(a) {
  let n = countWords(a.title) + countWords(a.answer);
  (a.intro || []).forEach((p) => {
    n += countWords(p);
  });
  (a.sections || []).forEach((s) => {
    n += countWords(s.title);
    (s.paragraphs || []).forEach((p) => {
      n += countWords(p);
    });
    (s.items || []).forEach((p) => {
      n += countWords(p);
    });
  });
  (a.takeaways || []).forEach((p) => {
    n += countWords(p);
  });
  (a.faqs || []).forEach(([q, r]) => {
    n += countWords(q) + countWords(r);
  });
  return n;
}

export { slugify, formatDate } from './text.js';

export const articles = raw
  .map((a) => {
    const wordCount = wordCountOf(a);
    return { ...a, wordCount, readingMinutes: Math.max(2, Math.round(wordCount / 230)) };
  })
  .sort((x, y) => (y.publishedAt || '').localeCompare(x.publishedAt || '') || x.title.localeCompare(y.title, 'fr'));

export const categories = ['GEO & IA', 'SEO local', 'Site internet', 'Refonte & performance', 'Sur mesure', 'Prix & cadrage'].filter((c) =>
  articles.some((a) => a.category === c),
);

/** The three guides that open the blog: the GEO pillar first. */
export const featuredSlugs = ['geo-definition-referencement-ia', 'comment-etre-cite-par-chatgpt', 'seo-ou-geo-2026'];

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug);
}

/** Light version for list pages (keeps page JSON small). */
export function summarize(a) {
  return {
    slug: a.slug,
    title: a.title,
    description: a.description,
    category: a.category,
    readingMinutes: a.readingMinutes,
    publishedAt: a.publishedAt,
    updatedAt: a.updatedAt || a.publishedAt,
  };
}
