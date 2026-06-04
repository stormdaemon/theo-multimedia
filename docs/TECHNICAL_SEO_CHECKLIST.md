# Checklist SEO Technique

## Indexation

- `robots.txt` présent et sitemap déclaré.
- `sitemap.xml` dynamique avec pages existantes, services, locales, blog et portfolio.
- Canonical présent via le composant `SEO`.
- Robots index/follow par défaut.

## Metadata

- Titles et descriptions uniques sur les nouvelles pages.
- Open Graph et Twitter card configurés.
- Images OG SVG 1200x630 dans `public/images/og/`.
- Keywords optionnels et limités.

## Données structurées

- LocalBusiness / ProfessionalService sans coordonnées GPS précises non confirmées.
- WebPage, FAQPage, BreadcrumbList, Article, CreativeWork selon les pages.
- Pas d’aggregateRating ou avis inventés.

## Performance

- Assets existants majoritairement WebP.
- Cards avec dimensions stables.
- Animations CSS légères en transform/opacity.
- `prefers-reduced-motion` respecté dans `styles/globals.css`.
- Manifest ajouté.

## Accessibilité

- Cartes services cliquables avec `aria-label`.
- Focus visible global.
- Formulaire contact avec labels.
- Accordéons FAQ en `details/summary`.
- Navigation mobile avec libellés.

## TODO

- Vérifier les captures portfolio avec le propriétaire.
- Confirmer NAP exact et cohérence Google Business Profile.
- Ajouter un vrai suivi analytics uniquement si l’outil est installé.

## Commandes

- `npm run build`
- `npm run test`
