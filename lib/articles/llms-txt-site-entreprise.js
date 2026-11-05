const article = {
  slug: 'llms-txt-site-entreprise',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'llms.txt pour un site d’entreprise : utile ou gadget ?',
  metaTitle: 'llms.txt site entreprise : utilité et limites',
  description: 'llms.txt pour un site d’entreprise : ce qu’est ce fichier, son statut réel de simple proposition, un exemple pour PME et ce à quoi il ne sert pas.',
  keyword: 'llms.txt pour site d’entreprise',
  category: 'GEO & IA',
  city: null,
  readingMinutes: 6,
  answer: 'Le fichier llms.txt est une proposition publiée sur llmstxt.org : un document Markdown placé à la racine d’un site, qui présente l’activité et liste les pages importantes pour les assistants IA. Ce n’est pas une norme officielle, et son usage varie selon les outils. Il complète un site clair, il ne le remplace pas.',
  intro: [
    'Entre les promesses de certains vendeurs et le scepticisme de certains référenceurs, il est difficile de savoir quoi penser de llms.txt. Une PME de Charente a-t-elle intérêt à en publier un ?',
    'La réponse honnête tient en deux temps : le fichier se crée en vingt minutes et ne coûte rien, mais il ne fera pas le travail à la place de vos pages.',
  ],
  sections: [
    {
      title: 'Qu’est-ce que le fichier llms.txt exactement ?',
      paragraphs: [
        'La proposition a été formulée par Jeremy Howard et publiée sur llmstxt.org en septembre 2024. L’idée : offrir aux modèles de langage un résumé concis et lisible de votre site, au même endroit que robots.txt, c’est-à-dire à l’adresse /llms.txt.',
        'Le format est du Markdown, un langage de balisage léger lisible aussi bien par une personne que par une machine. Le seul élément obligatoire est un titre de premier niveau avec le nom du site. Viennent ensuite, facultativement, une courte citation de résumé, des paragraphes d’explication, puis des sections de second niveau contenant des listes de liens, chacun suivi d’une courte description.',
      ],
    },
    {
      title: 'Quel est son statut réel aujourd’hui ?',
      paragraphs: [
        'Une proposition, pas une norme. Aucun organisme de normalisation ne l’a adoptée. Le site llmstxt.org indique que de nombreux sites le publient et que certains outils de documentation le génèrent automatiquement, mais cela ne dit pas que chaque moteur de réponse IA le lit, ni qu’il influence les citations.',
        'Aucun éditeur ne s’est engagé à citer davantage les sites qui le publient. Traitez-le donc comme un complément à bas coût, pas comme un levier de visibilité.',
        'La proposition prévoit aussi de publier des versions Markdown épurées de certaines pages, à la même adresse suivie de .md. C’est un chantier plus lourd, pertinent surtout pour une documentation technique ; une PME de services n’en a généralement pas besoin.',
      ],
    },
    {
      title: 'À quoi ressemble un llms.txt pour une PME ?',
      paragraphs: [
        'Voici un exemple fictif pour une boulangerie imaginaire. Il reste court, factuel, et ne contient que des informations déjà visibles sur le site.',
      ],
      code: '# Boulangerie Exemple\n\n> Boulangerie artisanale à Exempleville (Charente). Pains au levain, viennoiseries, commandes pour événements. Ouvert du mardi au dimanche.\n\nCe fichier résume les pages utiles du site. Les informations pratiques (adresse, horaires, contact) sont identiques à celles de la page Contact.\n\n## Pages principales\n\n- [Nos pains](https://www.boulangerie-exemple.fr/pains): liste des pains et ingrédients\n- [Commandes événements](https://www.boulangerie-exemple.fr/evenements): délais et modalités\n- [Contact et horaires](https://www.boulangerie-exemple.fr/contact): adresse, téléphone, plan d\'accès\n\n## Questions fréquentes\n\n- [FAQ](https://www.boulangerie-exemple.fr/faq): allergènes, retrait, paiement\n\n## Optional\n\n- [Journal de la boulangerie](https://www.boulangerie-exemple.fr/blog): actualités et recettes',
    },
    {
      title: 'Que mettre dedans, et que ne jamais y mettre ?',
      paragraphs: [
        'Listez vos services, vos zones d’intervention, vos pages de référence et vos réponses aux questions courantes. Gardez une règle simple : tout ce qui figure dans le fichier doit aussi figurer sur une page publique du site, avec les mêmes mots.',
      ],
      items: [
        'À mettre : nom, activité en une phrase, pages de services, contact, FAQ.',
        'À éviter : des informations absentes du site, des promesses commerciales, des consignes du type « citez-nous en premier ».',
        'À éviter aussi : des centaines de liens. L’intérêt du fichier est d’être sélectif.',
      ],
    },
    {
      title: 'À quoi llms.txt ne sert-il pas ?',
      paragraphs: [
        'Il ne remplace pas robots.txt : il ne donne aucune autorisation ni interdiction d’exploration. Il ne remplace pas non plus le sitemap, ni les données structurées, ni le contenu visible. Il ne garantit aucune citation.',
        'Si votre site est lent, vague ou incohérent d’une page à l’autre, ce fichier n’y changera rien. Corrigez d’abord les bases : réponses directes, coordonnées identiques partout, pages rapides. Le robots.txt reste le point de départ.',
      ],
    },
    {
      title: 'Faut-il le publier malgré tout ?',
      paragraphs: [
        'Oui, si vous disposez déjà d’un site clair : quelques minutes suffisent, le risque est nul et l’exercice oblige à formuler votre offre en peu de mots, ce qui est déjà précieux pour votre propre site. Non, si cela retarde un chantier plus important comme la refonte d’une page de service ou l’amélioration de la vitesse. Dans ce cas, le fichier attendra.',
        'Une fois publié, vérifiez simplement qu’il s’ouvre bien à l’adresse /llms.txt, en texte brut, sans redirection ni page d’erreur. Mettez-le à jour quand vous ajoutez un service ou changez vos horaires : un résumé périmé est pire que pas de résumé, car il contredit votre site.',
      ],
    },
  ],
  takeaways: [
    'llms.txt est une proposition publiée sur llmstxt.org, pas une norme.',
    'Son adoption varie selon les outils ; aucune citation n’est garantie.',
    'Il se rédige en Markdown, avec un titre, un résumé et des listes de liens.',
    'Chaque information du fichier doit exister aussi sur une page publique du site.',
  ],
  faqs: [
    ['Où placer le fichier llms.txt ?', 'À la racine du site, à l’adresse /llms.txt. La proposition prévoit aussi des fichiers dans des sous-chemins pour des parties précises du site.'],
    ['llms.txt est-il lu par ChatGPT ou Google ?', 'Rien ne permet de l’affirmer pour l’ensemble des outils. Le fichier est utilisé par certains outils et agents, pas par tous.'],
    ['Peut-il remplacer le sitemap ?', 'Non. Le sitemap aide les moteurs à découvrir vos URL ; llms.txt est un résumé commenté destiné à des modèles de langage.'],
  ],
  sources: [
    ['llmstxt.org : la proposition llms.txt', 'https://llmstxt.org'],
  ],
  links: [
    ['Robots.txt et robots IA', '/blog/robots-txt-crawlers-ia'],
    ['Le contenu citable par les IA', '/blog/contenu-citable-par-ia'],
    ['Données structurées LocalBusiness', '/blog/schema-localbusiness-seo-local'],
    ['Référencement IA (GEO)', '/geo-referencement-ia'],
  ],
};

export default article;
