# Stratégie SEO - Théo Multimédia

## Audit initial

- Framework : Next.js Pages Router.
- Routes existantes conservées : `/`, `/services`, `/seo`, `/solutions`, `/portfolio`, `/about`, `/contact`, `/mentions-legales`, `/politique-confidentialite`, `/cgu`, `/cgv`.
- SEO existant : composant `SEO`, sitemap dynamique, `robots.txt`, `llms.txt`, Open Graph global, JSON-LD, assets WebP.
- Corrections UI : cartes services de l’accueil transformées en liens, flèches alignées en bas, bloc stats stabilisé en grille 2/4 colonnes, portfolio centralisé et interactif.
- Point sensible : les pages légales indiquent Angoulême, tandis que le positionnement commercial met Cognac en avant.

## Source business

La source de vérité est `lib/business.js`.

- `siteUrl` : `https://theo-multimedia.com`
- `brandName` : `Théo Multimédia`
- `legalName` : `Théo LAFONT`
- `email` : `contact@theo-multimedia.com`
- `phone` : `07 68 51 95 68`
- `baseArea` : `Cognac / Charente`
- `legalArea` : `Angoulême`
- `serviceAreas` : Cognac, Angoulême, Saintes, Jarnac, Charente, Charente-Maritime, Nouvelle-Aquitaine

TODO propriétaire : À confirmer par le propriétaire : ville de base commerciale officielle et adresse NAP exacte à harmoniser avec Google Business Profile.

## Pages créées

- `/site-vitrine-24h`
- `/creation-site-internet`
- `/referencement-local`
- `/audit-seo-gratuit`
- `/seo-ia`
- `/crm-sur-mesure`
- `/lms-elearning`
- `/ecommerce-sur-mesure`
- `/refonte-site-internet`
- `/maintenance-site-web`
- `/creation-site-internet-angouleme`
- `/creation-site-internet-cognac`
- `/creation-site-internet-saintes`
- `/zones-intervention`
- `/blog`
- `/blog/[slug]` avec 42 articles
- `/portfolio/[slug]` avec pages projet

## Maillage

- Accueil vers services, audit, portfolio et contact.
- Footer vers services dédiés, zones, blog et contact.
- Pages locales vers services, blog et contact.
- Articles vers pages services/locales selon l’intention.
- Portfolio vers pages projet, services liés et contact.

## Données structurées

- LocalBusiness / ProfessionalService sans coordonnées GPS précises non confirmées.
- WebPage sur pages services/locales.
- FAQPage sur pages services/locales.
- BreadcrumbList sur pages secondaires.
- Article sur les articles de blog.
- CreativeWork sur les pages portfolio.

## Images

- OG global : `public/images/og/default.svg`
- OG services : `public/images/og/services.svg`
- OG locales : `public/images/og/local.svg`
- OG blog : `public/images/og/blog.svg`
- Captures portfolio : assets existants dans `public/assets/portfolio-live/`.
- TODO propriétaire : fournir captures client actualisées si certaines réalisations changent.

## Validation

Commandes prévues :

- `npm run build`
- `npm run test`

Le projet ne déclare pas de script `lint` ni `typecheck`.
