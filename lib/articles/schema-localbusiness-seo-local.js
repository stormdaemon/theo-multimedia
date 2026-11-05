const article = {
  slug: 'schema-localbusiness-seo-local',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'Schema LocalBusiness : que renseigner, sans rien inventer ?',
  metaTitle: 'Schema LocalBusiness : exemple JSON-LD commenté',
  description: 'Schema.org LocalBusiness pour le SEO local : exemple JSON-LD commenté, propriétés utiles, erreurs fréquentes et test des résultats enrichis de Google.',
  keyword: 'schema.org LocalBusiness pour SEO local',
  category: 'SEO local',
  city: 'Charente',
  readingMinutes: 6,
  answer: 'Le schéma LocalBusiness est un balisage schema.org, écrit en JSON-LD, qui décrit votre entreprise locale aux moteurs : nom, adresse, téléphone, horaires, coordonnées. Google exige au minimum le nom et l’adresse, et recommande le reste. Chaque valeur doit correspondre à ce que le visiteur lit sur la page, sans aucun avis ni donnée inventés.',
  intro: [
    'Les données structurées ne sont pas un artifice pour monter dans Google. Elles servent à dire sans ambiguïté, à une machine, ce que votre page affirme déjà en clair : qui vous êtes, où vous êtes, quand vous ouvrez.',
    'C’est aussi une base utile pour les moteurs de réponse IA, qui recoupent plusieurs sources pour confirmer une information d’entreprise.',
    'Cet article donne un exemple prêt à adapter, la liste des propriétés qui comptent, les erreurs que l’on rencontre le plus souvent sur des sites de commerçants et d’artisans, et la méthode de vérification gratuite proposée par Google.',
  ],
  sections: [
    {
      title: 'Qu’est-ce que LocalBusiness dans schema.org ?',
      paragraphs: [
        'Selon schema.org, LocalBusiness désigne une entreprise physique particulière ou une agence d’une organisation. C’est un sous-type d’Organization et de Place. Il existe des sous-types plus précis, comme Restaurant ou Store.',
        'Google conseille d’utiliser le sous-type le plus précis disponible. Une boulangerie, un salon de coiffure ou un restaurant gagnent à choisir leur type plutôt qu’un générique.',
        'Si vous avez plusieurs établissements, par exemple deux boutiques à Cognac et à Jarnac, chacun mérite son propre balisage sur sa propre page, avec son adresse, son téléphone et ses horaires. Ne regroupez pas deux adresses dans un seul bloc.',
      ],
    },
    {
      title: 'À quoi ressemble un JSON-LD LocalBusiness commenté ?',
      paragraphs: [
        'Voici un exemple avec des valeurs fictives. Le JSON n’accepte pas les commentaires : retenez la logique du bloc. Le @type précise l’activité, name et address identifient l’établissement, openingHoursSpecification donne les horaires et sameAs renvoie à vos profils officiels.',
      ],
      code: '<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Bakery",\n  "name": "Boulangerie Exemple",\n  "url": "https://www.boulangerie-exemple.fr/",\n  "image": "https://www.boulangerie-exemple.fr/facade.jpg",\n  "telephone": "+33 5 00 00 00 00",\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "1 rue de l\'Exemple",\n    "postalCode": "16000",\n    "addressLocality": "Exempleville",\n    "addressCountry": "FR"\n  },\n  "openingHoursSpecification": [{\n    "@type": "OpeningHoursSpecification",\n    "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],\n    "opens": "07:00",\n    "closes": "19:00"\n  }],\n  "sameAs": ["https://www.facebook.com/boulangerie-exemple"]\n}\n</script>',
    },
    {
      title: 'Quelles propriétés sont réellement utiles ?',
      paragraphs: [
        'Google distingue deux propriétés obligatoires et plusieurs recommandées.',
      ],
      items: [
        'name et address : obligatoires. Renseignez l’adresse avec autant de champs que possible.',
        'telephone : avec l’indicatif du pays, au format international.',
        'url : l’adresse de la page de l’établissement concerné.',
        'openingHoursSpecification : les horaires, avec opens et closes. Pour un jour fermé, Google indique 00:00 pour les deux.',
        'geo : latitude et longitude avec au moins cinq décimales.',
        'sameAs : vos profils officiels, par exemple la fiche Google Business Profile ou une page de réseau social.',
        'areaServed : la zone desservie, utile pour un artisan qui se déplace.',
      ],
    },
    {
      title: 'Quelles erreurs fréquentes éviter ?',
      paragraphs: [
        'La première est l’incohérence : une adresse ou des horaires différents dans le balisage, sur la page et sur la fiche Google. Les moteurs recoupent, et une divergence affaiblit la confiance.',
        'La deuxième est d’ajouter des avis ou une note moyenne fabriqués. Google réserve aggregateRating et review aux sites qui collectent réellement des avis sur d’autres entreprises ; ils n’ont pas leur place sur votre propre fiche. La troisième est de baliser des éléments invisibles sur la page. La quatrième est de copier un modèle trouvé en ligne sans vider les valeurs d’exemple.',
      ],
    },
    {
      title: 'Comment vérifier son balisage avec le test des résultats enrichis ?',
      paragraphs: [
        'Ouvrez le test des résultats enrichis de Google, collez l’URL de votre page ou votre code, puis lancez l’analyse. Les erreurs critiques sont à corriger ; les avertissements non critiques sont à examiner mais ne bloquent pas l’éligibilité.',
        'Une fois la page publiée, utilisez l’inspection d’URL de la Search Console pour confirmer que Google peut y accéder, sans blocage dans robots.txt ni balise noindex. Comptez quelques jours avant la prise en compte.',
        'Pensez à relancer le test à chaque modification de vos horaires ou de votre adresse, par exemple après un déménagement ou pour les horaires d’été : un balisage resté sur l’ancienne information est l’erreur la plus facile à éviter et la plus fréquente.',
      ],
    },
    {
      title: 'Le balisage améliore-t-il le classement local ?',
      paragraphs: [
        'Il rend l’information plus lisible, il ne promet aucune position, ni même l’affichage d’un résultat enrichi. Le classement local dépend surtout de la fiche Google Business Profile, de la pertinence de vos pages et de la cohérence de vos coordonnées partout où elles apparaissent.',
      ],
    },
  ],
  takeaways: [
    'LocalBusiness exige au minimum un nom et une adresse ; le reste est recommandé.',
    'Choisissez le sous-type le plus précis : Bakery, Restaurant, Store.',
    'Chaque valeur du JSON-LD doit exister aussi, à l’identique, sur la page.',
    'Testez avec les résultats enrichis, puis contrôlez l’accès avec l’inspection d’URL.',
  ],
  faqs: [
    ['JSON-LD ou microdonnées ?', 'Les exemples de Google utilisent le JSON-LD, plus simple à maintenir car séparé du contenu visible de la page.'],
    ['Faut-il un balisage par page ?', 'Mettez-le sur la page qui présente l’établissement, en général la page d’accueil ou la page contact, pas nécessairement partout.'],
    ['Puis-je ajouter une note moyenne pour mon entreprise ?', 'Non, pas pour vos propres avis. Google réserve ces propriétés aux sites qui collectent des avis sur d’autres entreprises.'],
  ],
  sources: [
    ['Google : données structurées LocalBusiness', 'https://developers.google.com/search/docs/appearance/structured-data/local-business'],
    ['schema.org : LocalBusiness', 'https://schema.org/LocalBusiness'],
  ],
  links: [
    ['Checklist d’audit technique SEO', '/blog/audit-technique-seo-checklist'],
    ['Optimiser sa fiche Google Business Profile', '/blog/optimiser-fiche-google-business-profile-saintes'],
    ['SEO local', '/referencement-local'],
    ['Fichier llms.txt', '/blog/llms-txt-site-entreprise'],
  ],
};

export default article;
