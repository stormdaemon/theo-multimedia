import { business, absoluteUrl } from './business.js';

const ORG_ID = `${business.siteUrl}/#organisation`;
const SITE_ID = `${business.siteUrl}/#website`;
const PERSON_ID = `${business.siteUrl}/#theo-lafont`;

const dayMap = {
  Monday: 'https://schema.org/Monday',
  Tuesday: 'https://schema.org/Tuesday',
  Wednesday: 'https://schema.org/Wednesday',
  Thursday: 'https://schema.org/Thursday',
  Friday: 'https://schema.org/Friday',
  Saturday: 'https://schema.org/Saturday',
  Sunday: 'https://schema.org/Sunday',
};

export const areaServed = [
  { '@type': 'City', name: 'Cognac' },
  { '@type': 'City', name: 'Jarnac' },
  { '@type': 'City', name: 'Angoulême' },
  { '@type': 'City', name: 'Saintes' },
  { '@type': 'AdministrativeArea', name: 'Charente' },
  { '@type': 'AdministrativeArea', name: 'Charente-Maritime' },
];

export function organizationNode() {
  const a = business.legalAddress;
  return {
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: business.brandName,
    alternateName: 'Théo Multimédia, agence GEO et web à Cognac',
    url: absoluteUrl('/'),
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/brand/logo-mark-512.png'),
      width: 512,
      height: 512,
    },
    image: absoluteUrl(business.socialImage),
    description: business.description,
    slogan: 'Votre métier, votre ville : la réponse évidente.',
    telephone: business.phoneE164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.streetAddress,
      postalCode: a.postalCode,
      addressLocality: a.city,
      addressRegion: a.region,
      addressCountry: a.country,
    },
    areaServed,
    founder: { '@id': PERSON_ID },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: business.openingHours.days.map((d) => dayMap[d]),
      opens: business.openingHours.opens,
      closes: business.openingHours.closes,
    },
    vatID: business.vatNumber,
    identifier: { '@type': 'PropertyValue', propertyID: 'SIRET', value: business.siret.replace(/\s/g, '') },
    knowsAbout: [
      'Generative Engine Optimization (GEO)',
      'Référencement dans les moteurs de réponse IA',
      'Référencement naturel (SEO)',
      'SEO local et Google Business Profile',
      'Données structurées schema.org',
      'Création de sites internet',
      'Refonte de sites internet',
      'Next.js',
      'E-commerce sur mesure',
      'CRM sur mesure',
      'Plateformes e-learning (LMS)',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: business.phoneE164,
      areaServed: 'FR',
      availableLanguage: ['fr'],
      url: absoluteUrl('/contact'),
    },
    ...(business.sameAs.length ? { sameAs: business.sameAs } : {}),
  };
}

export function personNode() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: business.founder,
    jobTitle: business.founderRole,
    worksFor: { '@id': ORG_ID },
    url: absoluteUrl('/about'),
    knowsAbout: ['GEO', 'SEO', 'Développement web', 'Next.js', 'Design d’interface'],
    homeLocation: { '@type': 'Place', name: 'Cognac, Charente' },
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: absoluteUrl('/'),
    name: business.brandName,
    description: business.description,
    inLanguage: 'fr-FR',
    publisher: { '@id': ORG_ID },
  };
}

export function webPageNode({ path, title, description, type = 'WebPage', dateModified, image }) {
  const url = absoluteUrl(path);
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: 'fr-FR',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    ...(image ? { primaryImageOfPage: { '@type': 'ImageObject', url: absoluteUrl(image) } } : {}),
    ...(dateModified ? { dateModified } : {}),
    breadcrumb: { '@id': `${url}#breadcrumb` },
  };
}

export function breadcrumbNode(path, crumbs) {
  const url = absoluteUrl(path);
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: crumbs.map(([name, href], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: absoluteUrl(href),
    })),
  };
}

export function faqNode(path, faqs) {
  if (!faqs?.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(path)}#faq`,
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function serviceNode(page) {
  const url = absoluteUrl(page.canonical || `/${page.slug}`);
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: page.title.split(' : ')[0],
    serviceType: page.keywords?.[0] || page.title,
    description: page.answer || page.metaDescription,
    url,
    provider: { '@id': ORG_ID },
    areaServed: page.city ? [{ '@type': 'City', name: page.city }] : areaServed,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: absoluteUrl('/contact'),
      servicePhone: business.phoneE164,
    },
  };
}

export function articleNode(article, image) {
  const url = absoluteUrl(`/blog/${article.slug}`);
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.description,
    abstract: article.answer,
    url,
    mainEntityOfPage: { '@id': `${url}#webpage` },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    inLanguage: 'fr-FR',
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORG_ID },
    image: absoluteUrl(image),
    keywords: article.keyword,
    articleSection: article.category,
    wordCount: article.wordCount,
    isAccessibleForFree: true,
    ...(article.sources?.length ? { citation: article.sources.map(([name, href]) => ({ '@type': 'CreativeWork', name, url: href })) } : {}),
  };
}

export function projectNode(project, image) {
  const url = absoluteUrl(`/portfolio/${project.slug}`);
  return {
    '@type': 'CreativeWork',
    '@id': `${url}#projet`,
    name: project.title,
    description: project.shortDescription,
    url,
    image: image ? absoluteUrl(image) : undefined,
    creator: { '@id': ORG_ID },
    genre: project.category,
    keywords: project.tags?.join(', '),
    ...(project.online && project.url ? { sameAs: project.url } : {}),
  };
}

export function itemListNode(path, items) {
  return {
    '@type': 'ItemList',
    '@id': `${absoluteUrl(path)}#liste`,
    itemListElement: items.map(([name, href], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      url: absoluteUrl(href),
    })),
  };
}

/** The entity nodes repeated on every page, so each page is self-describing. */
export function baseGraph() {
  return [organizationNode(), websiteNode(), personNode()];
}
