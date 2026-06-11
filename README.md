# Théo Multimédia — Site de l'agence

Site web de l'agence « Théo Multimédia » (Cognac / Charente), construit avec Next.js (Pages Router), Tailwind CSS 4 et Motion. Toutes les pages sont générées statiquement ; seul `/sitemap.xml` est servi dynamiquement.

## Pour commencer

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts disponibles

- `npm run dev` : serveur de développement.
- `npm run build` : build de production (toutes les pages doivent rester `○ Static` ou `● SSG`).
- `npm run start` : serveur de production.
- `npm run lint` : ESLint (config `eslint.config.mjs`).
- `npm test` : tests Jest (intégrité des données, composant SEO, sitemap).

## Points d'attention

- Les contenus (blog, projets, pages services/locales) vivent dans `lib/*-data.js` ; chaque entrée porte un `updatedAt` (`YYYY-MM-DD`) utilisé par le sitemap et les schémas — le mettre à jour quand le contenu change réellement.
- Les headers de sécurité et de cache sont définis dans `next.config.js` ; `netlify.toml` ne gère que le cache long des assets.
- Images : tout est en WebP dans `public/assets/`. Pour en ajouter, passer par `scripts/optimize-images.js` (sharp).
