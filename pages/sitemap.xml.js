import { blogPosts } from '../lib/blog-data';
import { projects } from '../lib/projects';
import { contentPages } from '../lib/services-data';
import { business } from '../lib/business';

// Dernière modification réelle des pages statiques. À mettre à jour quand le
// contenu d'une page change (pas à chaque déploiement).
const STATIC_PAGES = [
  { url: '', lastmod: '2026-06-05' },
  { url: '/about', lastmod: '2026-06-05' },
  { url: '/services', lastmod: '2026-06-05' },
  { url: '/seo', lastmod: '2026-06-05' },
  { url: '/solutions', lastmod: '2026-06-05' },
  { url: '/portfolio', lastmod: '2026-06-05' },
  { url: '/blog', lastmod: '2026-06-05' },
  { url: '/contact', lastmod: '2026-06-05' },
  { url: '/mentions-legales', lastmod: '2026-06-11' },
  { url: '/politique-confidentialite', lastmod: '2026-06-11' },
  { url: '/cgu', lastmod: '2026-06-11' },
  { url: '/cgv', lastmod: '2026-06-11' },
];

export function generateSiteMap(baseUrl) {
  const pages = [
    ...STATIC_PAGES,
    ...contentPages.map((page) => ({ url: page.canonical, lastmod: page.updatedAt })),
    ...blogPosts.map((post) => ({ url: `/blog/${post.slug}`, lastmod: post.updatedAt })),
    ...projects.map((project) => ({ url: `/portfolio/${project.slug}`, lastmod: project.updatedAt })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(({ url, lastmod }) => `  <url>
    <loc>${baseUrl}${url}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`)
    .join('\n')}
</urlset>
`;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || business.siteUrl).replace(/\/$/, '');
  const sitemap = generateSiteMap(baseUrl);

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default SiteMap;
