/**
 * Local SEO Tests for theo-multimedia.com
 * The current strategy keeps commercial wording around Cognac / Charente while
 * preserving Angoulême as legal-area data from the legal pages.
 */

const fs = require('fs');
const path = require('path');

const read = (relativePath) => fs.readFileSync(path.join(__dirname, '..', relativePath), 'utf8');

describe('Local SEO - Charente strategy', () => {
  test('Business config centralizes NAP and service areas', () => {
    const business = read('lib/business.js');

    expect(business).toContain("siteUrl: 'https://theo-multimedia.com'");
    expect(business).toContain("brandName: 'Théo Multimédia'");
    expect(business).toContain("legalName: 'Théo LAFONT'");
    expect(business).toContain("email: 'contact@theo-multimedia.com'");
    expect(business).toContain("phone: '07 68 51 95 68'");
    expect(business).toContain("baseArea: 'Cognac / Charente'");
    expect(business).toContain("legalArea: 'Angoulême'");
    expect(business).toContain("'Saintes'");
    expect(business).toContain("'Charente-Maritime'");
  });

  test('LocalBusiness Schema exists and avoids unconfirmed precise geo', () => {
    const seoContent = read('components/SEO.js');

    expect(seoContent).toContain('createLocalBusinessSchema');
    expect(seoContent).toContain('LocalBusiness');
    expect(seoContent).toContain('ProfessionalService');
    expect(seoContent).toContain('PostalAddress');
    expect(seoContent).toContain('areaServed');
    expect(seoContent).not.toContain('GeoCoordinates');
    expect(seoContent).not.toContain('geo.position');
    expect(seoContent).not.toContain('ICBM');
    expect(seoContent).not.toContain('45.6484');
    expect(seoContent).not.toContain('0.1560');
  });

  test('LocalBusiness Schema includes contact, opening hours and services offered', () => {
    const seoContent = read('components/SEO.js');
    const business = read('lib/business.js');

    expect(seoContent).toContain('telephone');
    expect(seoContent).toContain('email');
    expect(seoContent).toContain('openingHoursSpecification');
    expect(business).toContain("opens: '09:00'");
    expect(business).toContain("closes: '18:00'");
    expect(seoContent).toContain('makesOffer');
    expect(seoContent).toContain('Création de sites internet');
    expect(seoContent).toContain('Référencement SEO local');
  });

  test('LocalBusiness Schema does not publish unverified aggregate ratings', () => {
    const seoContent = read('components/SEO.js');

    expect(seoContent).not.toContain('aggregateRating');
    expect(seoContent).not.toContain('AggregateRating');
    expect(seoContent).not.toContain('ratingValue');
  });

  test('Priority local pages exist and are unique', () => {
    const data = read('lib/services-data.js');
    const dynamicPage = read('pages/[slug].js');

    expect(dynamicPage).toContain('contentPages');
    expect(data).toContain("slug: 'creation-site-internet-angouleme'");
    expect(data).toContain("slug: 'creation-site-internet-cognac'");
    expect(data).toContain("slug: 'creation-site-internet-saintes'");
    expect(data).toContain('Angoulême a une identité forte');
    expect(data).toContain('Cognac demande une image soignée');
    expect(data).toContain('Saintes réunit commerce local');
  });

  test('Index and about pages use LocalBusiness Schema', () => {
    expect(read('pages/index.js')).toContain('createLocalBusinessSchema');
    expect(read('pages/about.js')).toContain('createLocalBusinessSchema');
  });

  test('Local SEO documentation includes owner NAP TODO', () => {
    const strategy = read('docs/SEO_STRATEGY.md');

    expect(strategy).toContain('À confirmer par le propriétaire');
    expect(strategy).toContain('Google Business Profile');
  });
});

describe('Local SEO Coverage Summary', () => {
  test('All critical local SEO elements are present', () => {
    const checklist = {
      'Business config': fs.existsSync(path.join(__dirname, '../lib/business.js')),
      'LocalBusiness Schema': fs.existsSync(path.join(__dirname, '../components/SEO.js')),
      'Local pages': fs.existsSync(path.join(__dirname, '../lib/services-data.js')),
      'Sitemap': fs.existsSync(path.join(__dirname, '../pages/sitemap.xml.js')),
      'No unverified ratings': true,
      'No precise unconfirmed GPS': true,
    };

    Object.entries(checklist).forEach(([, exists]) => {
      expect(exists).toBe(true);
    });
  });
});
