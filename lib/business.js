export const business = {
  siteUrl: 'https://theo-multimedia.com',
  brandName: 'Théo Multimédia',
  legalName: 'Théo LAFONT',
  founder: 'Théo Lafont',
  email: 'contact@theo-multimedia.com',
  phone: '07 68 51 95 68',
  phoneE164: '+33768519568',
  publicPositioning:
    'Agence web en Charente spécialisée en sites vitrines rapides, SEO local, outils sur mesure et visibilité IA.',
  commercialPositioning:
    'Agence web en Charente, basée à Cognac et active à Angoulême, Saintes et dans les alentours.',
  baseArea: 'Cognac / Charente',
  legalArea: 'Cognac',
  legalAddress: {
    streetAddress: '149 rue Henri Fichon',
    postalCode: '16100',
    city: 'Cognac',
    region: 'Charente',
    country: 'FR',
  },
  serviceAreas: [
    'Cognac',
    'Angoulême',
    'Saintes',
    'Jarnac',
    'Charente',
    'Charente-Maritime',
    'Nouvelle-Aquitaine',
  ],
  sameAs: [],
  siret: '884 758 970 00054',
  vatNumber: 'FR59884758970',
  apeCode: '8211Z - Services administratifs combinés de bureau',
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  socialImage: '/og-image.jpg',
};

export const ownerTodo =
  'À confirmer par le propriétaire : ville de base commerciale officielle et adresse NAP exacte à harmoniser avec Google Business Profile.';

export const serviceTaxonomy = [
  'Site vitrine',
  'Application web',
  'Web radio',
  'Landing page',
  'E-learning',
  'SEO local',
  'Conversion',
  'E-commerce',
  'CRM',
  'IA',
  'Événementiel',
  'Association',
  'Artisan',
];

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${business.siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function contactUrl(service = '') {
  return service ? `/contact?service=${encodeURIComponent(service)}` : '/contact';
}
