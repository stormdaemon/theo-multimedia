import { generateSiteMap } from '../pages/sitemap.xml';
import { blogPosts } from '../lib/blog-data';
import { projects } from '../lib/projects';
import { contentPages } from '../lib/services-data';
import { business } from '../lib/business';

describe('sitemap.xml', () => {
  const xml = generateSiteMap(business.siteUrl);

  test('contient toutes les pages de contenu, articles et projets', () => {
    for (const page of contentPages) {
      expect(xml).toContain(`<loc>${business.siteUrl}${page.canonical}</loc>`);
    }
    for (const post of blogPosts) {
      expect(xml).toContain(`<loc>${business.siteUrl}/blog/${post.slug}</loc>`);
    }
    for (const project of projects) {
      expect(xml).toContain(`<loc>${business.siteUrl}/portfolio/${project.slug}</loc>`);
    }
  });

  test('chaque lastmod est une vraie date (pas un timestamp de génération)', () => {
    const lastmods = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
    expect(lastmods.length).toBeGreaterThan(0);
    for (const date of lastmods) {
      expect(date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
    // Toutes les dates ne doivent pas être identiques à "aujourd'hui"
    const today = new Date().toISOString().slice(0, 10);
    expect(lastmods.every((d) => d === today)).toBe(false);
  });

  test("n'émet ni priority ni changefreq (ignorés par Google)", () => {
    expect(xml).not.toContain('<priority>');
    expect(xml).not.toContain('<changefreq>');
  });

  test('toutes les URLs sont absolues sur le domaine de production', () => {
    const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    for (const loc of locs) {
      expect(loc.startsWith(`${business.siteUrl}/`) || loc === business.siteUrl).toBe(true);
    }
  });
});
