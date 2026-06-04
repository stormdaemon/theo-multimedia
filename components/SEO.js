import Head from 'next/head';
import { absoluteUrl, business } from '../lib/business';

const SEO = ({
  title,
  description,
  canonical,
  ogImage = business.socialImage,
  ogType = 'website',
  schema = null,
  additionalMetaTags = [],
  enableLocalSEO = false,
  keywords = [],
  noindex = false,
}) => {
  const siteName = business.brandName;
  const fullTitle = title
    ? title.includes(siteName) ? title : `${title} | ${siteName}`
    : `${siteName} - Agence web en Charente`;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || business.siteUrl).replace(/\/$/, '');
  const fullCanonical = canonical
    ? canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`
    : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const robots = noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content={business.legalName} />
      <meta name="robots" content={robots} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.slice(0, 8).join(', ')} />}
      <link rel="canonical" href={fullCanonical} />

      <meta httpEquiv="content-language" content="fr-FR" />
      <meta name="language" content="French" />

      {enableLocalSEO && (
        <>
          <meta name="geo.region" content="FR-16" />
          <meta name="geo.placename" content="Cognac, Angoulême, Saintes, Charente" />
        </>
      )}

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_FR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {additionalMetaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}

      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      )}
    </Head>
  );
};

export default SEO;

export const createLocalBusinessSchema = () => {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || business.siteUrl).replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': `${siteUrl}/#business`,
    name: business.brandName,
    legalName: business.legalName,
    alternateName: `${business.brandName} - Agence web en Charente`,
    description: business.publicPositioning,
    url: siteUrl,
    email: business.email,
    telephone: business.phoneE164,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.legalAddress.city,
      addressRegion: business.legalAddress.region,
      postalCode: business.legalAddress.postalCode,
      addressCountry: business.legalAddress.country,
    },
    areaServed: business.serviceAreas.map((name) => ({
      '@type': name.includes('Charente') || name.includes('Aquitaine') ? 'AdministrativeArea' : 'City',
      name,
    })),
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: business.openingHours.days,
      opens: business.openingHours.opens,
      closes: business.openingHours.closes,
    }],
    priceRange: '$$',
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/assets/logo-theo-multimedia-orange-v2.webp`,
      width: 512,
      height: 512,
    },
    image: [`${siteUrl}/og-image.jpg`],
    founder: {
      '@type': 'Person',
      name: business.founder,
      jobTitle: 'Développeur web full-stack et consultant SEO',
      url: `${siteUrl}/about`,
      sameAs: business.sameAs,
    },
    sameAs: business.sameAs,
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Création de sites internet',
          description: 'Sites vitrines, refontes et pages locales rapides en Charente.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Référencement SEO local',
          description: 'Structure, contenus, maillage et données structurées pour la visibilité locale.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Site vitrine en 24h',
          description: 'Livraison express quand le périmètre est cadré.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'CRM, LMS et e-commerce sur mesure',
          description: 'Outils métier et boutiques adaptés aux besoins réels.',
        },
      },
    ],
    knowsAbout: [
      'agence web Cognac',
      'création site internet Angoulême',
      'création site internet Saintes',
      'création site internet Charente',
      'SEO local',
      'Next.js',
      'React',
      'web design',
      'référencement IA',
      'GEO',
      'llms.txt',
    ],
  };
};

export const createWebPageSchema = (title, description, url) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url,
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    name: business.brandName,
    url: (process.env.NEXT_PUBLIC_SITE_URL || business.siteUrl),
  },
  dateModified: new Date().toISOString().split('T')[0],
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '[data-speakable]'],
  },
});

export const createFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

export const createBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.url),
  })),
});

export const createOrganizationSchema = () => {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || business.siteUrl).replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: business.brandName,
    legalName: business.legalName,
    url: siteUrl,
    email: business.email,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/assets/logo-theo-multimedia-orange-v2.webp`,
      width: 512,
      height: 512,
    },
    founder: {
      '@type': 'Person',
      name: business.founder,
      jobTitle: 'Développeur web full-stack et consultant SEO',
    },
    sameAs: business.sameAs,
  };
};

export const createHowToSchema = (steps) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment je crée votre site web',
  description: `Méthodologie de création de sites web professionnels par ${business.brandName}`,
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
});
