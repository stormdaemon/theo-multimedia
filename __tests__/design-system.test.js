const fs = require('fs');
const path = require('path');

const read = (relativePath) => fs.readFileSync(path.join(__dirname, '..', relativePath), 'utf8');

describe('Theo Multimedia orange glass redesign', () => {
  test('global theme exposes the dark orange glass design tokens', () => {
    const css = read('styles/globals.css');

    expect(css).toContain('--tm-orange: #ff5a00');
    expect(css).toContain('--tm-night: #03070c');
    expect(css).toContain('.tm-glass');
    expect(css).toContain('.tm-thick-glass');
    expect(css).toContain('backdrop-filter: blur(42px)');
    expect(css).toContain('.tm-legal-shell');
  });

  test('homepage uses the generated transparent hero, process and audit assets', () => {
    const home = read('pages/index.js');

    expect(home).toContain('/assets/hero-devices-electricien-restaurant.webp');
    expect(home).toContain('/assets/process-section-developer-working.webp');
    expect(home).toContain('/assets/audit-seo-target-rocket.webp');
    expect(home).toContain('Votre site vitrine');
    expect(home).toContain('Votre visibilité se construit dès le premier pixel.');
  });

  test('shared navigation and footer use the new visual identity', () => {
    const navbar = read('components/Navbar.js');
    const footer = read('components/Footer.js');

    expect(navbar).toContain('tm-navbar');
    expect(navbar).toContain('BrandLogo');
    expect(navbar).toContain("path: '/referencement-local'");
    expect(navbar).toContain("path: '/solutions'");
    expect(navbar).toContain("path: '/blog'");
    expect(navbar).not.toContain('/services#');
    expect(navbar).toContain('Audit gratuit');
    expect(footer).toContain('tm-footer');
    expect(footer).toContain('Zone d’intervention');
  });

  test('route changes scroll to top and every main navbar entry is a full page', () => {
    const layout = read('components/Layout.js');
    const scroll = read('components/ScrollToTopOnRoute.js');
    const sitemap = read('pages/sitemap.xml.js');
    const serviceData = read('lib/services-data.js');

    expect(layout).toContain('ScrollToTopOnRoute');
    expect(scroll).toContain("events.on('routeChangeComplete'");
    expect(scroll).toContain("window.scrollTo({ top: 0");
    expect(sitemap).toContain('contentPages');
    expect(serviceData).toContain("canonical: '/referencement-local'");
    expect(sitemap).toContain("url: '/solutions'");
    expect(sitemap).toContain("url: '/blog'");
  });

  test('homepage uses generated icons instead of Lucide placeholders', () => {
    const home = read('pages/index.js');

    expect(home).not.toContain('lucide-react');
    [
      'icon-design-orange.webp',
      'icon-seo-local-orange.webp',
      'icon-seo-audit-orange.webp',
      'icon-crm-orange.webp',
      'icon-lms-orange.webp',
      'icon-ecommerce-orange.webp',
      'icon-clock-orange.webp',
      'icon-target-orange.webp',
      'icon-users-orange.webp',
      'icon-star-rating-orange.webp',
    ].forEach((asset) => expect(home).toContain(`/assets/${asset}`));
  });

  test('every principal page declares a page-specific dark artwork', () => {
    const pageArtwork = {
      'pages/services.js': '/assets/services-hero-solutions.webp',
      'pages/about.js': '/assets/about-developer-studio.webp',
      'pages/contact.js': '/assets/contact-cognac-night.webp',
      'pages/seo.js': '/assets/services-seo-local-map-dashboard.webp',
      'pages/solutions.js': '/assets/services-crm-pipeline-dashboard.webp',
    };

    Object.entries(pageArtwork).forEach(([page, artwork]) => {
      expect(read(page)).toContain(artwork);
    });
  });

  test('legal pages are covered by the same glass design system', () => {
    ['mentions-legales.js', 'politique-confidentialite.js', 'cgv.js', 'cgu.js'].forEach((page) => {
      expect(read(`pages/${page}`)).toContain('tm-legal-shell');
    });
  });

  test('required generated artwork is stored in the project', () => {
    [
      'hero-devices-electricien-restaurant.webp',
      'logo-theo-multimedia-orange.webp',
      'process-section-developer-working.webp',
      'service-card-audit-seo-preview.webp',
      'audit-seo-target-rocket.webp',
      'services-hero-solutions.webp',
      'about-developer-studio.webp',
      'contact-cognac-night.webp',
      'logo-theo-multimedia-orange-v2.webp',
    ].forEach((file) => {
      expect(fs.existsSync(path.join(__dirname, '..', 'public', 'assets', file))).toBe(true);
    });
  });
});
