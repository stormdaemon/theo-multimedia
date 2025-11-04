import Head from 'next/head';

/**
 * Comprehensive SEO Component for 2025
 * Includes: Meta tags, Open Graph, Twitter Cards, JSON-LD Schema
 * Optimized for Google SEO and AI Search (ChatGPT, Perplexity)
 */
const SEO = ({
  title,
  description,
  canonical,
  ogImage = '/theo_multimedia.png',
  ogType = 'website',
  schema = null,
  additionalMetaTags = [],
}) => {
  const siteName = 'Théo Multimédia';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const siteUrl = 'https://www.theomultimedia.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content="Théo LAFONT" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={fullCanonical} />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="fr-FR" />
      <meta name="language" content="French" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:creator" content="@theomultimedia" />

      {/* Additional Meta Tags */}
      {additionalMetaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}

      {/* JSON-LD Schema */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
};

export default SEO;

/**
 * Schema Generators for different page types
 */

export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Théo Multimédia',
  description: 'Création de sites internet ultra-rapides, éco-responsables et optimisés pour convertir. Livraison en 24h disponible.',
  url: 'https://www.theomultimedia.com',
  logo: 'https://www.theomultimedia.com/theo_multimedia_logo.png',
  image: 'https://www.theomultimedia.com/theo_multimedia.png',
  founder: {
    '@type': 'Person',
    name: 'Théo LAFONT',
    jobTitle: 'Développeur Web & Expert SEO',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Angoulême',
    addressCountry: 'FR',
  },
  sameAs: [
    'https://www.linkedin.com/in/theo-lafont',
    'https://github.com/stormdaemon',
  ],
  areaServed: 'FR',
  priceRange: '€€',
  serviceType: ['Création de sites web', 'Développement web', 'SEO', 'Design web'],
});

export const createWebPageSchema = (title, description, url) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description: description,
  url: url,
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Théo Multimédia',
    url: 'https://www.theomultimedia.com',
  },
});

export const createServiceSchema = (serviceName, description) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  provider: {
    '@type': 'ProfessionalService',
    name: 'Théo Multimédia',
    url: 'https://www.theomultimedia.com',
  },
  description: description,
  areaServed: 'FR',
});

export const createFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const createBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://www.theomultimedia.com${item.url}`,
  })),
});

export const createArticleSchema = (title, description, image, datePublished, dateModified) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description: description,
  image: image,
  datePublished: datePublished,
  dateModified: dateModified,
  author: {
    '@type': 'Person',
    name: 'Théo LAFONT',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Théo Multimédia',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.theomultimedia.com/theo_multimedia_logo.png',
    },
  },
});
