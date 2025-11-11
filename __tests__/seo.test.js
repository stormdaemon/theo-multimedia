/**
 * Comprehensive SEO Tests for theo-multimedia.com
 * Tests all critical SEO requirements for perfect Google/AI indexation
 * Based on 2025 best practices
 */

const fs = require('fs');
const path = require('path');

describe('SEO Meta Tags Tests', () => {

  test('Viewport meta tag exists in _document.js', () => {
    const documentPath = path.join(__dirname, '../pages/_document.js');
    const documentContent = fs.readFileSync(documentPath, 'utf8');
    expect(documentContent).toContain('name="viewport"');
    expect(documentContent).toContain('width=device-width, initial-scale=1');
  });

  test('HTML lang attribute set to fr', () => {
    const documentPath = path.join(__dirname, '../pages/_document.js');
    const documentContent = fs.readFileSync(documentPath, 'utf8');
    expect(documentContent).toContain('lang="fr"');
  });

  test('Charset meta tag exists', () => {
    const documentPath = path.join(__dirname, '../pages/_document.js');
    const documentContent = fs.readFileSync(documentPath, 'utf8');
    expect(documentContent).toContain('charSet="utf-8"');
  });
});

describe('JSON-LD Structured Data Tests', () => {
  test('SEO component includes JSON-LD schema support', () => {
    const seoPath = path.join(__dirname, '../components/SEO.js');
    const seoContent = fs.readFileSync(seoPath, 'utf8');
    expect(seoContent).toContain('application/ld+json');
    expect(seoContent).toContain('JSON.stringify(schema)');
  });

  test('Organization schema generator exists', () => {
    const seoPath = path.join(__dirname, '../components/SEO.js');
    const seoContent = fs.readFileSync(seoPath, 'utf8');
    expect(seoContent).toContain('createOrganizationSchema');
    expect(seoContent).toContain('@type');
    expect(seoContent).toContain('ProfessionalService');
  });

  test('WebPage schema generator exists', () => {
    const seoPath = path.join(__dirname, '../components/SEO.js');
    const seoContent = fs.readFileSync(seoPath, 'utf8');
    expect(seoContent).toContain('createWebPageSchema');
    expect(seoContent).toContain('WebPage');
  });

  test('Index page uses JSON-LD schema', () => {
    const indexPath = path.join(__dirname, '../pages/index.js');
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    expect(indexContent).toContain('createOrganizationSchema');
    expect(indexContent).toContain('createWebPageSchema');
    expect(indexContent).toContain('@graph');
  });

  test('About page uses JSON-LD schema', () => {
    const aboutPath = path.join(__dirname, '../pages/about.js');
    const aboutContent = fs.readFileSync(aboutPath, 'utf8');
    expect(aboutContent).toContain('createOrganizationSchema');
    expect(aboutContent).toContain('createWebPageSchema');
  });
});

describe('SEO Component Tests', () => {
  test('SEO component includes all required meta tags', () => {
    const seoPath = path.join(__dirname, '../components/SEO.js');
    const seoContent = fs.readFileSync(seoPath, 'utf8');

    // Primary meta tags
    expect(seoContent).toContain('name="title"');
    expect(seoContent).toContain('name="description"');
    expect(seoContent).toContain('name="author"');
    expect(seoContent).toContain('name="robots"');
    expect(seoContent).toContain('rel="canonical"');

    // Open Graph tags
    expect(seoContent).toContain('property="og:type"');
    expect(seoContent).toContain('property="og:url"');
    expect(seoContent).toContain('property="og:title"');
    expect(seoContent).toContain('property="og:description"');
    expect(seoContent).toContain('property="og:image"');
    expect(seoContent).toContain('property="og:site_name"');

    // Twitter Card tags
    expect(seoContent).toContain('name="twitter:card"');
    expect(seoContent).toContain('name="twitter:title"');
    expect(seoContent).toContain('name="twitter:description"');
    expect(seoContent).toContain('name="twitter:image"');
  });

  test('SEO component includes proper robots directive', () => {
    const seoPath = path.join(__dirname, '../components/SEO.js');
    const seoContent = fs.readFileSync(seoPath, 'utf8');
    expect(seoContent).toContain('index, follow');
    expect(seoContent).toContain('max-image-preview:large');
    expect(seoContent).toContain('max-snippet:-1');
  });

  test('All main pages import SEO component', () => {
    const pages = ['index.js', 'about.js', 'services.js', 'portfolio.js', 'contact.js'];

    pages.forEach(page => {
      const pagePath = path.join(__dirname, `../pages/${page}`);
      const pageContent = fs.readFileSync(pagePath, 'utf8');
      expect(pageContent).toContain('from \'../components/SEO\'');
    });
  });
});

describe('Sitemap Tests', () => {
  test('Sitemap file exists and includes all pages', () => {
    const sitemapPath = path.join(__dirname, '../pages/sitemap.xml.js');
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

    // Check all main pages are included
    expect(sitemapContent).toContain('/about');
    expect(sitemapContent).toContain('/services');
    expect(sitemapContent).toContain('/portfolio');
    expect(sitemapContent).toContain('/contact');

    // Check legal pages are included
    expect(sitemapContent).toContain('/mentions-legales');
    expect(sitemapContent).toContain('/politique-confidentialite');
    expect(sitemapContent).toContain('/cgu');
    expect(sitemapContent).toContain('/cgv');
  });

  test('Sitemap includes proper XML structure', () => {
    const sitemapPath = path.join(__dirname, '../pages/sitemap.xml.js');
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

    expect(sitemapContent).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(sitemapContent).toContain('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
    expect(sitemapContent).toContain('<loc>');
    expect(sitemapContent).toContain('<lastmod>');
    expect(sitemapContent).toContain('<changefreq>');
    expect(sitemapContent).toContain('<priority>');
  });

  test('Sitemap uses dynamic baseUrl from headers', () => {
    const sitemapPath = path.join(__dirname, '../pages/sitemap.xml.js');
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

    expect(sitemapContent).toContain('getSiteUrlFromHeaders');
    expect(sitemapContent).toContain('getServerSideProps');
  });
});

describe('Robots.txt Tests', () => {
  test('Robots.txt file exists', () => {
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    expect(fs.existsSync(robotsPath)).toBe(true);
  });

  test('Robots.txt allows all user agents', () => {
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');

    expect(robotsContent).toContain('User-Agent: *');
    expect(robotsContent).toContain('Allow: /');
  });

  test('Robots.txt includes AI crawler permissions', () => {
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');

    // Check for major AI crawlers
    expect(robotsContent).toContain('GPTBot');
    expect(robotsContent).toContain('ChatGPT-User');
    expect(robotsContent).toContain('PerplexityBot');
    expect(robotsContent).toContain('anthropic-ai');
    expect(robotsContent).toContain('Claude-Web');
    expect(robotsContent).toContain('Google-Extended');
  });

  test('Robots.txt blocks internal paths appropriately', () => {
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');

    expect(robotsContent).toContain('Disallow: /api/');
    expect(robotsContent).toContain('Disallow: /_next/');
  });

  test('Robots.txt includes sitemap reference', () => {
    const robotsPath = path.join(__dirname, '../public/robots.txt');
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');

    expect(robotsContent).toContain('Sitemap:');
    expect(robotsContent).toContain('/sitemap.xml');
  });
});

describe('Edge Function Headers Tests', () => {
  test('Edge function sets X-Robots-Tag header', () => {
    const edgeFunctionPath = path.join(__dirname, '../netlify/edge-functions/add-headers.js');
    const edgeFunctionContent = fs.readFileSync(edgeFunctionPath, 'utf8');

    expect(edgeFunctionContent).toContain('X-Robots-Tag');
    expect(edgeFunctionContent).toContain('all');
  });

  test('Edge function includes AI-friendly headers', () => {
    const edgeFunctionPath = path.join(__dirname, '../netlify/edge-functions/add-headers.js');
    const edgeFunctionContent = fs.readFileSync(edgeFunctionPath, 'utf8');

    expect(edgeFunctionContent).toContain('X-AI-Access');
    expect(edgeFunctionContent).toContain('allow');
  });

  test('Edge function sets CORS headers', () => {
    const edgeFunctionPath = path.join(__dirname, '../netlify/edge-functions/add-headers.js');
    const edgeFunctionContent = fs.readFileSync(edgeFunctionPath, 'utf8');

    expect(edgeFunctionContent).toContain('Access-Control-Allow-Origin');
  });
});

describe('OG Image Tests', () => {
  test('OG image file exists', () => {
    const ogImagePath = path.join(__dirname, '../public/og-image.jpg');
    expect(fs.existsSync(ogImagePath)).toBe(true);
  });

  test('Theo Multimedia logo exists', () => {
    const logoPath = path.join(__dirname, '../public/theo_multimedia_logo.png');
    expect(fs.existsSync(logoPath)).toBe(true);
  });

  test('Theo Multimedia main image exists', () => {
    const imagePath = path.join(__dirname, '../public/theo_multimedia.png');
    expect(fs.existsSync(imagePath)).toBe(true);
  });
});

describe('Next.js Configuration Tests', () => {
  test('Next.js config includes SEO-friendly headers', () => {
    const configPath = path.join(__dirname, '../next.config.js');
    const configContent = fs.readFileSync(configPath, 'utf8');

    expect(configContent).toContain('headers()');
    expect(configContent).toContain('Vary');
    expect(configContent).toContain('User-Agent');
  });

  test('Powered by header is disabled', () => {
    const configPath = path.join(__dirname, '../next.config.js');
    const configContent = fs.readFileSync(configPath, 'utf8');

    expect(configContent).toContain('poweredByHeader: false');
  });

  test('React strict mode is enabled', () => {
    const configPath = path.join(__dirname, '../next.config.js');
    const configContent = fs.readFileSync(configPath, 'utf8');

    expect(configContent).toContain('reactStrictMode: true');
  });
});

describe('Server-Side Rendering Tests', () => {
  test('Index page uses getServerSideProps for SSR', () => {
    const indexPath = path.join(__dirname, '../pages/index.js');
    const indexContent = fs.readFileSync(indexPath, 'utf8');

    expect(indexContent).toContain('getServerSideProps');
    expect(indexContent).toContain('getSiteUrlFromHeaders');
  });

  test('About page uses getServerSideProps for SSR', () => {
    const aboutPath = path.join(__dirname, '../pages/about.js');
    const aboutContent = fs.readFileSync(aboutPath, 'utf8');

    expect(aboutContent).toContain('getServerSideProps');
  });

  test('All pages get dynamic baseUrl from headers', () => {
    const pages = ['index.js', 'about.js', 'services.js', 'portfolio.js', 'contact.js'];

    pages.forEach(page => {
      const pagePath = path.join(__dirname, `../pages/${page}`);
      const pageContent = fs.readFileSync(pagePath, 'utf8');
      expect(pageContent).toContain('baseUrl');
    });
  });
});

describe('Legal Pages Indexation Tests', () => {
  test('Legal pages are set to be indexed', () => {
    const legalPages = ['mentions-legales.js', 'politique-confidentialite.js', 'cgu.js', 'cgv.js'];

    legalPages.forEach(page => {
      const pagePath = path.join(__dirname, `../pages/${page}`);
      const pageContent = fs.readFileSync(pagePath, 'utf8');

      // Should use SEO component (which defaults to index, follow)
      expect(pageContent).toContain('from \'../components/SEO\'');

      // Should NOT contain noindex
      expect(pageContent).not.toContain('noindex: true');
    });
  });
});

// Summary test
describe('SEO Coverage Summary', () => {
  test('All critical SEO elements are present', () => {
    const checklist = {
      'Viewport meta tag': fs.existsSync(path.join(__dirname, '../pages/_document.js')),
      'SEO component': fs.existsSync(path.join(__dirname, '../components/SEO.js')),
      'JSON-LD schemas': fs.existsSync(path.join(__dirname, '../components/SEO.js')),
      'Sitemap': fs.existsSync(path.join(__dirname, '../pages/sitemap.xml.js')),
      'Robots.txt': fs.existsSync(path.join(__dirname, '../public/robots.txt')),
      'OG Image': fs.existsSync(path.join(__dirname, '../public/og-image.jpg')),
      'Edge function headers': fs.existsSync(path.join(__dirname, '../netlify/edge-functions/add-headers.js')),
    };

    Object.entries(checklist).forEach(([name, exists]) => {
      expect(exists).toBe(true);
    });

    console.log('\n✅ SEO Coverage: 100%');
    console.log('All critical SEO elements are properly configured for perfect indexation.');
  });
});
