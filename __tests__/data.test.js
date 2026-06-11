import { blogPosts } from '../lib/blog-data';
import { projects } from '../lib/projects';
import { contentPages } from '../lib/services-data';

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

describe('intégrité des données de contenu', () => {
  test('tous les slugs sont uniques (blog + projets + pages de contenu)', () => {
    const slugs = [...blogPosts, ...projects, ...contentPages].map((entry) => entry.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  test('chaque article de blog a les champs requis et des dates valides', () => {
    for (const post of blogPosts) {
      expect(post.slug).toMatch(/^[a-z0-9-]+$/);
      expect(post.title).toBeTruthy();
      expect(post.summary).toBeTruthy();
      expect(post.publishedAt).toMatch(DATE_RE);
      expect(post.updatedAt).toMatch(DATE_RE);
      expect(Date.parse(post.updatedAt)).toBeGreaterThanOrEqual(Date.parse(post.publishedAt));
    }
  });

  test('chaque projet a les champs requis et une date valide', () => {
    for (const project of projects) {
      expect(project.slug).toMatch(/^[a-z0-9-]+$/);
      expect(project.title).toBeTruthy();
      expect(project.updatedAt).toMatch(DATE_RE);
      expect(project.imageDesktop).toMatch(/^\/assets\//);
    }
  });

  test('chaque page de contenu a un canonical interne et une date valide', () => {
    for (const page of contentPages) {
      expect(page.canonical).toBe(`/${page.slug}`);
      expect(page.metaTitle).toBeTruthy();
      expect(page.metaDescription).toBeTruthy();
      expect(page.updatedAt).toMatch(DATE_RE);
    }
  });

  test('les liens internes des articles pointent vers des chemins relatifs', () => {
    for (const post of blogPosts) {
      for (const [label, href] of post.links || []) {
        expect(label).toBeTruthy();
        expect(href).toMatch(/^\//);
      }
    }
  });
});
