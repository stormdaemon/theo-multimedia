import Head from 'next/head';
import { absoluteUrl, business } from '../lib/business';
import { baseGraph, breadcrumbNode, webPageNode } from '../lib/schema';

const SUFFIX = ' | Théo Multimédia';

export function buildTitle(title) {
  if (!title) return `${business.brandName}, ${business.tagline}`;
  if (title.includes(business.brandName)) return title;
  return title.length + SUFFIX.length <= 64 ? `${title}${SUFFIX}` : title;
}

/**
 * Head tags + one JSON-LD @graph per page.
 * `crumbs`: [['Accueil', '/'], ['Services', '/services'], ...]
 * `schema`: extra schema.org nodes (Service, FAQPage, BlogPosting...).
 */
export default function SEO({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  pageType = 'WebPage',
  crumbs,
  schema = [],
  noindex = false,
  article,
  dateModified,
  imageSize,
}) {
  const fullTitle = buildTitle(title);
  const [imgW, imgH] = image && imageSize ? imageSize : [1200, 630];
  const url = absoluteUrl(path);
  const img = absoluteUrl(image || business.socialImage);
  const breadcrumbs = crumbs || (path === '/' ? [['Accueil', '/']] : [['Accueil', '/'], [title, path]]);
  const graph = noindex
    ? null
    : {
        '@context': 'https://schema.org',
        '@graph': [
          ...baseGraph(),
          webPageNode({ path, title: fullTitle, description, type: pageType, dateModified, image: image || business.socialImage }),
          breadcrumbNode(path, breadcrumbs),
          ...schema.filter(Boolean),
        ],
      };

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />
      <link rel="canonical" href={url} />
      <meta name="author" content={business.founder} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={business.brandName} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:image:width" content={String(imgW)} />
      <meta property="og:image:height" content={String(imgH)} />
      <meta property="og:image:alt" content={title || business.brandName} />
      {article && <meta property="article:published_time" content={article.publishedAt} />}
      {article && <meta property="article:modified_time" content={article.updatedAt || article.publishedAt} />}
      {article && <meta property="article:author" content={business.founder} />}
      {article && <meta property="article:section" content={article.category} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      {graph && (
        <script
          type="application/ld+json"
          // Escape "<" so content can never close the script element.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
        />
      )}
    </Head>
  );
}
