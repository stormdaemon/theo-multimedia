import { render } from '@testing-library/react';
import SEO, {
  createBreadcrumbSchema,
  createLocalBusinessSchema,
  createWebPageSchema,
} from '../components/SEO';
import { business } from '../lib/business';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }) => <>{children}</>,
}));

// React 19 hisse <title>/<meta>/<link> dans document.head : on interroge le document.
const queryMeta = (name) =>
  document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);

describe('composant SEO', () => {
  test('suffixe le title avec le nom de la marque', () => {
    render(<SEO title="Ma page" description="Desc." canonical="/ma-page" />);
    expect(document.querySelector('title').textContent).toBe('Ma page | Théo Multimédia');
  });

  test('ne double pas le nom de marque déjà présent dans le title', () => {
    render(<SEO title="CGU | Théo Multimédia" description="Desc." canonical="/cgu" />);
    expect(document.querySelector('title').textContent).toBe('CGU | Théo Multimédia');
  });

  test('canonical et hreflang sont absolus et cohérents', () => {
    render(<SEO title="T" description="D" canonical="/services" />);
    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical.getAttribute('href')).toBe(`${business.siteUrl}/services`);
    const alternates = [...document.querySelectorAll('link[rel="alternate"]')];
    expect(alternates.map((l) => l.getAttribute('hreflang')).sort()).toEqual(['fr', 'x-default']);
    for (const alt of alternates) {
      expect(alt.getAttribute('href')).toBe(`${business.siteUrl}/services`);
    }
  });

  test('noindex produit un robots noindex, nofollow', () => {
    render(<SEO title="T" description="D" canonical="/x" noindex />);
    expect(queryMeta('robots').getAttribute('content')).toBe('noindex, nofollow');
  });

  test("l'og:image par défaut est une image absolue (pas un SVG)", () => {
    render(<SEO title="T" description="D" canonical="/x" />);
    const og = queryMeta('og:image').getAttribute('content');
    expect(og).toMatch(/^https?:\/\//);
    expect(og).not.toMatch(/\.svg$/);
  });

  test('le JSON-LD est sérialisé en JSON valide et échappe les <', () => {
    const schema = { '@context': 'https://schema.org', '@type': 'WebPage', name: '<script>alert(1)</script>' };
    const { container } = render(<SEO title="T" description="D" canonical="/x" schema={schema} />);
    const script = document.querySelector('script[type="application/ld+json"]') || container.querySelector('script');
    expect(script.innerHTML).not.toContain('<script>');
    expect(JSON.parse(script.innerHTML)).toEqual(schema);
  });
});

describe('générateurs de schémas', () => {
  test('createLocalBusinessSchema contient le NAP complet', () => {
    const schema = createLocalBusinessSchema();
    expect(schema['@id']).toBe(`${business.siteUrl}/#business`);
    expect(schema.name).toBe(business.brandName);
    expect(schema.email).toBe(business.email);
    expect(schema.telephone).toBe(business.phoneE164);
    expect(schema.address.addressLocality).toBe(business.legalAddress.city);
    expect(schema.image[0]).toMatch(/og-image\.jpg$/);
  });

  test('createWebPageSchema omet dateModified quand non fournie, et ne la fabrique jamais', () => {
    const without = createWebPageSchema('T', 'D', 'https://example.com/');
    expect(without).not.toHaveProperty('dateModified');
    const withDate = createWebPageSchema('T', 'D', 'https://example.com/', '2026-06-05');
    expect(withDate.dateModified).toBe('2026-06-05');
  });

  test('createBreadcrumbSchema numérote les positions et absolutise les URLs', () => {
    const schema = createBreadcrumbSchema([
      { name: 'Accueil', url: '/' },
      { name: 'Blog', url: '/blog' },
    ]);
    expect(schema.itemListElement.map((i) => i.position)).toEqual([1, 2]);
    expect(schema.itemListElement[1].item).toBe(`${business.siteUrl}/blog`);
  });
});
