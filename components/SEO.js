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
  const siteName = 'Theo Multimedia';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Agence Web Angouleme`;
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com').replace(/\/$/, '');
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="author" content="Theo LAFONT" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={fullCanonical} />

      <meta httpEquiv="content-language" content="fr-FR" />
      <meta name="language" content="French" />

      {enableLocalSEO && (
        <>
          <meta name="geo.region" content="FR-16" />
          <meta name="geo.placename" content="Angouleme" />
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
    name: 'Theo Multimedia',
    alternateName: 'Theo Multimedia - Agence Web Angouleme',
    description: 'Agence web a Angouleme specialisee dans la creation de sites internet ultra-rapides, eco-responsables et optimises SEO. Expertise Google et IA (ChatGPT, Perplexity). Livraison express 24h.',
    url: siteUrl,
    email: 'contact@theo-multimedia.com',
    geo: { '@type': 'GeoCoordinates', latitude: 45.6484, longitude: 0.1560 },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Angouleme',
      addressRegion: 'Charente',
      postalCode: '16000',
      addressCountry: 'FR',
    },
    areaServed: [
      { '@type': 'City', name: 'Angouleme' },
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
    logo: { '@type': 'ImageObject', url: `${siteUrl}/theo_multimedia_logo.png`, width: 512, height: 512 },
    image: [`${siteUrl}/theo_multimedia.png`],
    founder: {
      '@type': 'Person',
      name: 'Theo LAFONT',
      jobTitle: 'Developpeur Web Full-Stack & Expert SEO',
      url: `${siteUrl}/about`,
      sameAs: ['https://www.linkedin.com/in/theo-lafont', 'https://github.com/stormdaemon'],
    },
    sameAs: ['https://www.linkedin.com/in/theo-lafont', 'https://github.com/stormdaemon'],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Creation de sites internet', description: 'Developpement de sites web sur-mesure avec Next.js et React' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Referencement SEO Google & IA', description: 'Optimisation pour Google, ChatGPT, Perplexity et moteurs IA' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Livraison express 24h', description: 'Sites professionnels livres en 24 heures' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Eco-conception web', description: 'Sites web eco-responsables a faible empreinte carbone' } },
    ],
    knowsAbout: ['creation site internet', 'SEO', 'Next.js', 'React', 'web design', 'eco-conception web', 'referencement IA', 'ChatGPT SEO', 'GEO optimisation'],
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
    name: 'Theo Multimedia',
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

export const createHowToSchema = (steps) => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Comment je cree votre site web',
  description: 'Methodologie de creation de sites web professionnels par Theo Multimedia',
  step: steps.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
});
