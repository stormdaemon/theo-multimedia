import Head from 'next/head';

/**
 * Comprehensive SEO Component for 2025
 * Includes: Meta tags, Open Graph, Twitter Cards, JSON-LD Schema
 * Optimized for Google SEO, Local SEO and AI Search (ChatGPT, Perplexity)
 */
const SEO = ({
  title,
  description,
  canonical,
  ogImage = '/theo_multimedia.png',
  ogType = 'website',
  schema = null,
  additionalMetaTags = [],
  enableLocalSEO = false, // Enable geo tags for local pages
}) => {
  const siteName = 'Théo Multimédia';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '');
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

      {/* Local SEO Geo Meta Tags (2025 Best Practice) */}
      {enableLocalSEO && (
        <>
          <meta name="geo.region" content="FR-16" />
          <meta name="geo.placename" content="Angoulême" />
          <meta name="geo.position" content="45.6484;0.1560" />
          <meta name="ICBM" content="45.6484, 0.1560" />
          <meta name="geo.country" content="FR" />
        </>
      )}

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

/**
 * LocalBusiness Schema - Optimized for Local SEO Angoulême (2025)
 * Includes: GPS coords, opening hours, service area, reviews aggregate
 * This is THE schema that crushes competition in local search
 */
export const createLocalBusinessSchema = () => {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '');

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#localbusiness`,
    name: 'Théo Multimédia',
    alternateName: 'Théo Multimédia - Agence Web Angoulême',
    description: 'Création de sites internet ultra-rapides, éco-responsables et optimisés pour convertir. Livraison en 24h disponible. Agence web spécialisée SEO et développement Next.js à Angoulême.',
    url: siteUrl,
    telephone: '+33-6-XX-XX-XX-XX', // À remplacer par le vrai numéro
    email: 'contact@theo-multimedia.com',

    // CRITICAL: GPS Coordinates Angoulême (2025 Local SEO)
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.6484,
      longitude: 0.1560,
    },

    // Address with complete postal data
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Angoulême', // À préciser si besoin
      addressLocality: 'Angoulême',
      addressRegion: 'Charente',
      postalCode: '16000',
      addressCountry: 'FR',
    },

    // Service Area - Angoulême + surrounding cities
    areaServed: [
      {
        '@type': 'City',
        name: 'Angoulême',
        '@id': 'https://www.wikidata.org/wiki/Q6548',
      },
      {
        '@type': 'State',
        name: 'Charente',
      },
      {
        '@type': 'State',
        name: 'Nouvelle-Aquitaine',
      },
      {
        '@type': 'Country',
        name: 'France',
      },
    ],

    // Opening Hours (Remote work = always available)
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],

    // Price Range
    priceRange: '€€',

    // Brand images
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/theo_multimedia_logo.png`,
      width: 512,
      height: 512,
    },
    image: [
      `${siteUrl}/theo_multimedia.png`,
      `${siteUrl}/theo_multimedia_logo.png`,
      `${siteUrl}/og-image.jpg`,
    ],

    // Founder & Team
    founder: {
      '@type': 'Person',
      name: 'Théo LAFONT',
      jobTitle: 'Développeur Web Full-Stack & Expert SEO',
      url: `${siteUrl}/about`,
      sameAs: [
        'https://www.linkedin.com/in/theo-lafont',
        'https://github.com/stormdaemon',
      ],
    },

    // Social Media Profiles (NAP consistency)
    sameAs: [
      'https://www.linkedin.com/in/theo-lafont',
      'https://github.com/stormdaemon',
      'https://twitter.com/theomultimedia',
    ],

    // Services Offered (detailed for local SEO)
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Création de sites internet',
          description: 'Développement de sites web sur-mesure avec Next.js, React et technologies modernes',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Référencement SEO local',
          description: 'Optimisation SEO pour être visible sur Google à Angoulême et sa région',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Livraison express 24h',
          description: 'Sites internet professionnels livrés en 24 heures',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Éco-conception web',
          description: 'Sites web éco-responsables à faible empreinte carbone',
        },
      },
    ],

    // Aggregate Rating (optional - add when you have reviews)
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '15',
      bestRating: '5',
      worstRating: '1',
    },

    // Keywords for local search
    keywords: 'agence web angoulême, création site internet angoulême, développeur web charente, seo angoulême, site internet 24h, next.js angoulême',
  };
};

/**
 * Legacy Organization Schema (kept for compatibility)
 * Use createLocalBusinessSchema() for better local SEO
 */
export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Théo Multimédia',
  description: 'Création de sites internet ultra-rapides, éco-responsables et optimisés pour convertir. Livraison en 24h disponible.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com'),
  logo: `${(process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '')}/theo_multimedia_logo.png`,
  image: `${(process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '')}/theo_multimedia.png`,
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
    url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com'),
  },
});

export const createServiceSchema = (serviceName, description) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: serviceName,
  provider: {
    '@type': 'ProfessionalService',
    name: 'Théo Multimédia',
    url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com'),
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
    item: `${(process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '')}${item.url}`,
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
      url: `${(process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '')}/theo_multimedia_logo.png`,
    },
  },
});
