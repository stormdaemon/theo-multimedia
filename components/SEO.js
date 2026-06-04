import Head from 'next/head';

const SEO = ({
  title,
  description,
  canonical,
  ogImage = '/theo_multimedia.png',
  ogType = 'website',
  schema = null,
  additionalMetaTags = [],
  enableLocalSEO = false,
}) => {
  const siteName = 'Théo Multimédia';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Agence Web Angoulême`;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '');
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content="Théo LAFONT" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={fullCanonical} />

      <meta httpEquiv="content-language" content="fr-FR" />
      <meta name="language" content="French" />

      {enableLocalSEO && (
        <>
          <meta name="geo.region" content="FR-16" />
          <meta name="geo.placename" content="Angoulême" />
          <meta name="geo.position" content="45.6484;0.1560" />
          <meta name="ICBM" content="45.6484, 0.1560" />
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
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#business`,
      name: 'Théo Multimédia',
      alternateName: 'Théo Multimédia - Agence Web Angoulême',
      description: 'Agence web à Angoulême spécialisée dans la création de sites internet ultra-rapides, éco-responsables et optimisés SEO. Expertise Google et IA (ChatGPT, Perplexity). Livraison express 24h.',
      url: siteUrl,
      email: 'contact@theo-multimedia.com',
      telephone: '+33 7 68 51 95 68',
    geo: { '@type': 'GeoCoordinates', latitude: 45.6484, longitude: 0.1560 },
    address: {
      '@type': 'PostalAddress',
        addressLocality: 'Angoulême',
      addressRegion: 'Charente',
      postalCode: '16000',
      addressCountry: 'FR',
    },
    areaServed: [
        { '@type': 'City', name: 'Angoulême' },
      { '@type': 'State', name: 'Nouvelle-Aquitaine' },
      { '@type': 'Country', name: 'France' },
    ],
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    }],
      priceRange: '$$',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/assets/logo-theo-multimedia-orange-v2.webp`, width: 512, height: 512 },
    image: [`${siteUrl}/theo_multimedia.png`],
    founder: {
      '@type': 'Person',
          name: 'Théo LAFONT',
          jobTitle: 'Développeur Web Full-Stack & Expert SEO',
      url: `${siteUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/theo-lafont', 'https://github.com/stormdaemon'],
    },
    sameAs: ['https://www.linkedin.com/in/theo-lafont', 'https://github.com/stormdaemon'],
    makesOffer: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Création de sites internet', description: 'Développement de sites web sur-mesure avec Next.js et React' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Référencement SEO local', description: 'Optimisation pour Google, ChatGPT, Perplexity et moteurs IA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Livraison express 24h', description: 'Sites professionnels livres en 24 heures' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Éco-conception web', description: 'Sites web éco-responsables à faible empreinte carbone' } },
    ],
        knowsAbout: ['agence web angoulême', 'création site internet angoulême', 'développeur web charente', 'seo angoulême', 'SEO', 'Next.js', 'React', 'web design', 'éco-conception web', 'référencement IA', 'ChatGPT SEO', 'GEO optimisation'],
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
    name: 'Théo Multimédia',
    url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com'),
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
    item: `${(process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '')}${item.url}`,
  })),
});

export const createOrganizationSchema = () => {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteUrl}/#organization`,
    name: 'Théo Multimédia',
    url: siteUrl,
    email: 'contact@theo-multimedia.com',
    logo: { '@type': 'ImageObject', url: `${siteUrl}/assets/logo-theo-multimedia-orange-v2.webp`, width: 512, height: 512 },
    founder: {
      '@type': 'Person',
      name: 'Théo LAFONT',
      jobTitle: 'Développeur Web Full-Stack & Expert SEO',
    },
    sameAs: ['https://www.linkedin.com/in/theo-lafont', 'https://github.com/stormdaemon'],
  };
};

export const createHowToSchema = (steps) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment je crée votre site web',
  description: 'Methodologie de création de sites web professionnels par Théo Multimédia',
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
});
