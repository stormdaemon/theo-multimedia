import { blogPosts } from '../lib/blog-data';
import { projects } from '../lib/projects';
import { contentPages } from '../lib/services-data';

function generateSiteMap(baseUrl) {
  const staticPages = [
    { url: '', changefreq: 'weekly', priority: '1.0' },
    { url: '/about', changefreq: 'monthly', priority: '0.7' },
    { url: '/services', changefreq: 'weekly', priority: '0.9' },
    { url: '/seo', changefreq: 'weekly', priority: '0.7' },
    { url: '/solutions', changefreq: 'weekly', priority: '0.8' },
    { url: '/portfolio', changefreq: 'weekly', priority: '0.9' },
    { url: '/blog', changefreq: 'weekly', priority: '0.8' },
    { url: '/contact', changefreq: 'monthly', priority: '0.8' },
    { url: '/mentions-legales', changefreq: 'yearly', priority: '0.3' },
    { url: '/politique-confidentialite', changefreq: 'yearly', priority: '0.3' },
    { url: '/cgu', changefreq: 'yearly', priority: '0.3' },
    { url: '/cgv', changefreq: 'yearly', priority: '0.3' },
  ];

  const seoPages = contentPages.map((page) => ({
    url: page.canonical,
    changefreq: page.type === 'local' ? 'monthly' : 'weekly',
    priority: page.type === 'local' ? '0.85' : '0.9',
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    changefreq: 'monthly',
    priority: '0.65',
  }));

  const projectPages = projects.map((project) => ({
    url: `/portfolio/${project.slug}`,
    changefreq: 'monthly',
    priority: '0.65',
  }));

  const pages = [...staticPages, ...seoPages, ...blogPages, ...projectPages];
  const lastmod = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map(({ url, changefreq, priority }) => `
       <url>
          <loc>${baseUrl}${url}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
       </url>
     `)
       .join('')}
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ req, res }) {
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl');
  const baseUrl = getSiteUrlFromHeaders(req);
  const sitemap = generateSiteMap(baseUrl);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default SiteMap;
