// Dynamic sitemap generation for SEO
import { getSiteUrlFromHeaders } from '../lib/siteUrl'

function generateSiteMap(baseUrl) {
  const pages = [
    { url: '', changefreq: 'weekly', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/services', changefreq: 'weekly', priority: '0.9' },
    { url: '/portfolio', changefreq: 'weekly', priority: '0.9' },
    { url: '/contact', changefreq: 'monthly', priority: '0.8' },
    { url: '/mentions-legales', changefreq: 'yearly', priority: '0.3' },
    { url: '/politique-confidentialite', changefreq: 'yearly', priority: '0.3' },
    { url: '/cgu', changefreq: 'yearly', priority: '0.3' },
    { url: '/cgv', changefreq: 'yearly', priority: '0.3' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map(({ url, changefreq, priority }) => {
         return `
       <url>
          <loc>${baseUrl}${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will handle this
}

export async function getServerSideProps({ req, res }) {
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl')
  const baseUrl = getSiteUrlFromHeaders(req)
  const sitemap = generateSiteMap(baseUrl);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
