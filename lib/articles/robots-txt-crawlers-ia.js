const article = {
  slug: 'robots-txt-crawlers-ia',
  publishedAt: '2026-11-05',
  updatedAt: '2026-11-05',
  title: 'robots.txt et GPTBot : quels robots IA autoriser pour être cité ?',
  metaTitle: 'robots.txt GPTBot : quels robots IA autoriser',
  description: 'Robots.txt GPTBot : distinguez robots d’entraînement et de recherche IA, et voyez quoi autoriser pour être cité. Exemple commenté prêt à copier.',
  keyword: 'robots.txt GPTBot',
  category: 'GEO & IA',
  city: null,
  readingMinutes: 6,
  answer: 'Pour être cité par ChatGPT et Perplexity, autorisez les robots de recherche, OAI-SearchBot et PerplexityBot, dans votre fichier robots.txt. Les robots d’entraînement, comme GPTBot ou le jeton Google-Extended, se règlent séparément : les bloquer n’empêche pas d’apparaître dans les réponses de recherche. Chaque éditeur documente ces réglages comme indépendants.',
  intro: [
    'Un fichier robots.txt de quelques lignes décide aujourd’hui de bien plus que le simple passage de Google. Il dit aussi aux robots des moteurs de réponse IA s’ils peuvent lire votre site.',
    'Beaucoup de sites bloquent tout « par prudence » et se coupent sans le savoir de ChatGPT ou de Perplexity. L’inverse existe aussi : autoriser tout sans avoir choisi. Voici comment distinguer les familles de robots et décider en connaissance de cause.',
  ],
  sections: [
    {
      title: 'Quelle différence entre robot d’entraînement, de recherche et d’action utilisateur ?',
      paragraphs: [
        'Les éditeurs séparent trois usages. Le robot d’entraînement collecte des contenus susceptibles de nourrir un modèle. Le robot de recherche explore le web pour afficher et citer des sites dans les réponses. Le robot d’action utilisateur se rend sur une page parce qu’une personne vient de le demander.',
        'Cette distinction est la clé : bloquer l’un ne bloque pas les autres. Chez OpenAI, la documentation officielle indique que les réglages sont indépendants, et qu’on peut autoriser l’un et refuser l’autre.',
      ],
    },
    {
      title: 'Quels sont les user-agents à connaître chez OpenAI, Perplexity et Google ?',
      paragraphs: [
        'Voici ce que disent les documentations officielles d’OpenAI, de Perplexity et de Google.',
      ],
      items: [
        'OAI-SearchBot (OpenAI) : recherche. Il permet à votre site d’apparaître dans les fonctions de recherche de ChatGPT.',
        'GPTBot (OpenAI) : entraînement. Le refuser signale que votre contenu ne doit pas servir à entraîner les modèles, sans effet sur la visibilité en recherche.',
        'ChatGPT-User (OpenAI) : action d’un utilisateur dans ChatGPT. Les règles robots.txt peuvent ne pas s’appliquer, car c’est la personne qui déclenche la visite.',
        'PerplexityBot (Perplexity) : affichage des sites dans les résultats de Perplexity, et non entraînement de modèles. Perplexity conseille de l’autoriser pour apparaître.',
        'Perplexity-User (Perplexity) : visite demandée par un utilisateur, qui ignore en général robots.txt.',
        'Google-Extended (Google) : simple jeton robots.txt qui contrôle l’usage de vos contenus pour les futurs modèles Gemini. Google précise qu’il n’a aucun effet sur la présence dans la recherche Google.',
      ],
    },
    {
      title: 'Que faut-il autoriser quand on veut être cité ?',
      paragraphs: [
        'Si votre objectif est d’être repris dans les réponses, autorisez les robots de recherche : OAI-SearchBot et PerplexityBot. Laissez aussi Googlebot tranquille : c’est lui qui gère la recherche Google, y compris ses fonctions de réponse.',
        'Le reste est un choix de principe. Un vigneron ou une maison de négoce attachés à leurs textes et à leurs photos peuvent refuser GPTBot et Google-Extended, sans renoncer à la citation. Un artisan qui veut un maximum d’exposition peut tout autoriser. Aucun des deux choix ne garantit d’être cité : ils déterminent seulement si les robots ont le droit de lire.',
        'Un point de méthode : décidez une fois, par écrit, et datez votre choix. Les éditeurs ajoutent régulièrement de nouveaux robots, et un robots.txt jamais relu finit par ne plus refléter vos intentions. Relisez-le à chaque refonte du site et au moins une fois par an, en comparant avec les pages officielles des éditeurs.',
      ],
    },
    {
      title: 'À quoi ressemble un robots.txt commenté ?',
      paragraphs: [
        'L’exemple ci-dessous autorise la recherche IA, refuse l’entraînement et protège une zone privée. Les lignes qui commencent par # sont des commentaires. Adaptez les chemins à votre site, ici fictif.',
      ],
      code: '# Robots de recherche IA : autorisés pour pouvoir être cités\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\n# Robots d’entraînement : refusés (choix éditorial)\nUser-agent: GPTBot\nDisallow: /\n\nUser-agent: Google-Extended\nDisallow: /\n\n# Tous les autres robots, dont Googlebot\nUser-agent: *\nDisallow: /espace-client/\nDisallow: /panier/\n\nSitemap: https://www.boulangerie-exemple.fr/sitemap.xml',
    },
    {
      title: 'Quelles erreurs fréquentes coupent un site des moteurs IA ?',
      paragraphs: [
        'Première erreur : un Disallow: / sous User-agent: * hérité d’un site en préproduction, jamais retiré à la mise en ligne. Deuxième erreur : bloquer GPTBot en croyant bloquer ChatGPT, alors que c’est OAI-SearchBot qui gère la recherche.',
        'Troisième erreur : croire que robots.txt protège un contenu. Ce fichier est une consigne de courtoisie que les robots respectent ou non, pas un verrou. Pour un contenu réellement confidentiel, il faut un accès protégé. Enfin, un pare-feu ou un CDN peut bloquer des robots que votre robots.txt autorise : testez aussi de ce côté.',
      ],
    },
    {
      title: 'Comment vérifier que le réglage est bon ?',
      paragraphs: [
        'Ouvrez votre-site.fr/robots.txt dans un navigateur et relisez chaque bloc : un robot nommé dans un groupe suit ce groupe, les autres suivent le groupe User-agent: *. Surveillez aussi les fautes de frappe dans les noms de robots, qui rendent la règle inopérante. Les changements peuvent mettre environ 24 heures à être pris en compte côté OpenAI, selon sa documentation. Consultez ensuite vos journaux serveur pour voir si ces robots passent réellement.',
      ],
    },
  ],
  takeaways: [
    'Entraînement, recherche et action utilisateur sont trois usages distincts, réglés séparément.',
    'Pour être cité, autorisez OAI-SearchBot et PerplexityBot.',
    'Bloquer GPTBot ou Google-Extended n’efface pas votre site des réponses de recherche.',
    'robots.txt est une consigne, pas une protection : ne l’utilisez pas pour cacher du contenu sensible.',
  ],
  faqs: [
    ['Bloquer GPTBot m’empêche-t-il d’apparaître dans ChatGPT ?', 'Non, d’après la documentation d’OpenAI. GPTBot concerne l’entraînement ; la recherche dépend d’OAI-SearchBot, réglé séparément.'],
    ['Google-Extended joue-t-il sur mon classement Google ?', 'Non. Google indique que ce jeton n’affecte pas la présence dans la recherche Google et ne sert pas de signal de classement.'],
    ['Un robots.txt suffit-il pour être cité ?', 'Non. Il ouvre la porte aux robots. Encore faut-il un contenu clair, des réponses directes et des informations d’entreprise cohérentes.'],
  ],
  sources: [
    ['OpenAI : documentation des robots', 'https://developers.openai.com/api/docs/bots'],
    ['Perplexity : robots d’exploration', 'https://docs.perplexity.ai/guides/bots'],
    ['Google : robots d’exploration courants', 'https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers'],
  ],
  links: [
    ['Mesurer le trafic venu de ChatGPT et Perplexity', '/blog/mesurer-trafic-ia-chatgpt-perplexity'],
    ['Comment être cité par ChatGPT', '/blog/comment-etre-cite-par-chatgpt'],
    ['Checklist d’audit technique SEO', '/blog/audit-technique-seo-checklist'],
    ['Référencement IA (GEO)', '/geo-referencement-ia'],
    ['Audit SEO et GEO offert', '/audit-seo-gratuit'],
  ],
};

export default article;
