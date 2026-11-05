export const business = {
  siteUrl: 'https://theo-multimedia.netlify.app',
  brandName: 'Théo Multimédia',
  legalName: 'Théo LAFONT',
  legalForm: 'Entreprise individuelle',
  founder: 'Théo Lafont',
  founderRole: 'Fondateur, développeur web et consultant GEO',
  phone: '07 68 51 95 68',
  phoneE164: '+33768519568',
  // The address on the former theo-multimedia.com domain no longer receives
  // mail: written requests go through the contact form below.
  email: null,
  formEndpoint: 'https://formspree.io/f/mblypyew',
  tagline: 'Agence GEO & web à Cognac',
  description:
    'Théo Multimédia est une agence web installée à Cognac (Charente). Elle rend les entreprises visibles sur Google et citables par les IA (ChatGPT, Perplexity, Gemini) : GEO, SEO local, création et refonte de sites rapides, outils sur mesure.',
  legalAddress: {
    streetAddress: '149 rue Henri Fichon',
    postalCode: '16100',
    city: 'Cognac',
    department: 'Charente',
    region: 'Nouvelle-Aquitaine',
    country: 'FR',
  },
  serviceAreas: ['Cognac', 'Jarnac', 'Angoulême', 'Saintes', 'Charente', 'Charente-Maritime', 'Nouvelle-Aquitaine'],
  sameAs: [],
  siret: '884 758 970 00054',
  vatNumber: 'FR59884758970',
  apeCode: '8211Z - Services administratifs combinés de bureau',
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    label: 'Du lundi au vendredi, 9 h – 18 h',
    opens: '09:00',
    closes: '18:00',
  },
  socialImage: '/og/default.jpg',
};

export const fullAddress = `${business.legalAddress.streetAddress}, ${business.legalAddress.postalCode} ${business.legalAddress.city}`;

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return clean === '/' ? `${business.siteUrl}/` : `${business.siteUrl}${clean}`;
}

export function contactUrl(service = '') {
  return service ? `/contact?service=${encodeURIComponent(service)}` : '/contact';
}
