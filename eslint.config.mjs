import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  globalIgnores(['.next/**', 'node_modules/**', 'out/**', '.netlify/**', 'coverage/**']),
  ...nextVitals,
  {
    rules: {
      // Le site utilise volontairement <img> pour des icônes/visuels décoratifs WebP déjà optimisés.
      '@next/next/no-img-element': 'off',
      // Site francophone : les apostrophes dans le JSX sont voulues et sans risque.
      'react/no-unescaped-entities': 'off',
    },
  },
]);
