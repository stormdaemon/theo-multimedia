const article = {
  slug: 'core-web-vitals-site-vitrine',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'Core Web Vitals pour site vitrine : LCP, INP et CLS expliqués',
  metaTitle: 'Core Web Vitals site vitrine : seuils LCP, INP, CLS',
  description: 'LCP, INP, CLS : les seuils officiels de Google, comment les mesurer avec PageSpeed Insights et Search Console, et les corrections d’un site vitrine.',
  keyword: 'Core Web Vitals site vitrine',
  category: 'Refonte & performance',
  city: null,
  readingMinutes: 6,
  answer: 'Les Core Web Vitals sont trois indicateurs de Google : LCP mesure le délai d’affichage du contenu principal, INP la réactivité aux interactions et CLS la stabilité de la mise en page. Pour être considéré comme bon, un site doit viser un LCP d’au plus 2,5 secondes, un INP d’au plus 200 millisecondes et un CLS d’au plus 0,1, au 75e percentile des visites.',
  intro: [
    'Un site vitrine peut être joli et pourtant perdre des visiteurs. Si la page met longtemps à afficher son titre, si les boutons répondent avec retard ou si les éléments sautent pendant le chargement, le visiteur part avant de lire votre offre.',
    'Les Core Web Vitals résument ces trois problèmes en trois mesures. Google les intègre à ses critères d’expérience de page. Elles ne suffisent pas à faire un bon référencement, mais elles montrent où le site fait fuir ses visiteurs.',
  ],
  sections: [
    {
      title: 'LCP : combien de temps avant que le contenu principal s’affiche ?',
      paragraphs: [
        'Le LCP (Largest Contentful Paint) correspond au moment où le plus grand élément visible, souvent une image de bannière ou un grand titre, apparaît à l’écran. Un LCP lent vient souvent d’une image de bannière trop lourde ou d’un fichier chargé trop tard. Les seuils officiels sont les suivants.',
      ],
      items: [
        'Bon : 2,5 secondes ou moins.',
        'À améliorer : entre 2,5 et 4 secondes.',
        'Mauvais : plus de 4 secondes.',
      ],
    },
    {
      title: 'INP : le site répond-il vite aux clics et aux saisies ?',
      paragraphs: [
        'L’INP (Interaction to Next Paint) mesure le délai entre une interaction, comme un clic sur un menu ou une saisie dans un formulaire, et l’affichage de la réponse à l’écran. Il a remplacé le FID comme indicateur officiel de réactivité.',
      ],
      items: [
        'Bon : 200 millisecondes ou moins.',
        'À améliorer : entre 200 et 500 millisecondes.',
        'Mauvais : plus de 500 millisecondes.',
      ],
    },
    {
      title: 'CLS : la mise en page reste-t-elle stable pendant le chargement ?',
      paragraphs: [
        'Le CLS (Cumulative Layout Shift) additionne les décalages inattendus des éléments. Un bouton qui se déplace au moment où l’on clique est le cas typique. Un score de 0,1 ou moins est bon, et au-delà de 0,25 il est mauvais.',
      ],
      items: [
        'Bon : 0,1 ou moins.',
        'À améliorer : entre 0,1 et 0,25.',
        'Mauvais : plus de 0,25.',
      ],
    },
    {
      title: 'Comment mesurer ses Core Web Vitals ?',
      paragraphs: [
        'Deux outils gratuits suffisent pour démarrer. PageSpeed Insights affiche les données réelles des visiteurs pour une page donnée, avec un diagnostic détaillé. Le rapport Core Web Vitals de Search Console regroupe les pages du site par statut, sur mobile et sur ordinateur.',
        'Les données réelles sont celles que Google retient. Un score de laboratoire élevé ne garantit pas une bonne expérience, notamment sur un téléphone ancien ou un réseau mobile lent.',
        'Pour une lecture plus fine, comparez les pages de votre tunnel de contact (accueil, prestations, formulaire) et non seulement l’accueil. Une page de service lourde en images peut dégrader la lecture globale sans que l’accueil le laisse paraître.',
      ],
      items: [
        'PageSpeed Insights : données réelles et diagnostic, page par page.',
        'Search Console : vue d’ensemble du site, à suivre dans le temps.',
        'Mesurer sur mobile en priorité, puis sur ordinateur.',
      ],
    },
    {
      title: 'Quelles corrections apportent le plus à un site vitrine ?',
      paragraphs: [
        'Les problèmes se répètent d’un site à l’autre. Ils viennent surtout de l’image principale, des polices, des scripts tiers et des éléments sans dimensions réservées. Corriger ces points résout souvent la plupart des alertes.',
        'Ajoutez les animations seulement après ces corrections. Un site stable et rapide est plus agréable à utiliser qu’un site animé mais lent.',
      ],
      items: [
        'Optimiser l’image du haut de page : format moderne, bonne taille, chargement prioritaire.',
        'Réserver la place des images, vidéos et iframes avec width et height, pour limiter le CLS.',
        'Charger les polices avec parcimonie, et éviter qu’elles fassent sauter le texte.',
        'Retirer ou différer les scripts tiers (chat, widgets, pixels) qui ne servent pas à la première impression.',
      ],
    },
  ],
  takeaways: [
    'LCP, INP et CLS mesurent respectivement le chargement, la réactivité et la stabilité d’une page.',
    'Les seuils « bon » sont 2,5 secondes pour le LCP, 200 millisecondes pour l’INP et 0,1 pour le CLS.',
    'Les données réelles, au 75e percentile, comptent davantage qu’un score de laboratoire.',
    'Les corrections les plus rentables portent sur l’image principale, les polices, les scripts tiers et les dimensions.',
  ],
  faqs: [
    ['Faut-il atteindre les trois seuils pour être considéré comme bon ?', 'Oui. Une page est considérée comme conforme lorsque les trois indicateurs sont au niveau bon au 75e percentile des visites, sur mobile comme sur ordinateur.'],
    ['Les Core Web Vitals suffisent-ils pour mieux se classer ?', 'Non. Ce sont des signaux parmi d’autres. Le contenu et la pertinence restent les premiers leviers pour se classer.'],
    ['Un score PageSpeed élevé signifie-t-il un bon LCP réel ?', 'Pas toujours. Le score de laboratoire diffère des données réelles. Vérifiez la section des données réelles ou le rapport Search Console.'],
    ['Faut-il mesurer chaque page du site ?', 'Pas forcément. Commencez par les pages qui reçoivent le plus de visites et par les pages de conversion, puis élargissez l’analyse une fois les premières corrections faites.'],
  ],
  sources: [
    ['Web.dev : Core Web Vitals', 'https://web.dev/articles/vitals'],
    ['Web.dev : INP', 'https://web.dev/articles/inp'],
    ['Web.dev : CLS', 'https://web.dev/articles/cls'],
  ],
  links: [
    ['Maintenance de site web', '/maintenance-site-web'],
    ['Refonte de site internet', '/refonte-site-internet'],
    ['Audit SEO gratuit', '/audit-seo-gratuit'],
    ['Images WebP et AVIF pour le SEO', '/blog/images-webp-avif-seo'],
    ['Contact', '/contact'],
  ],
};

export default article;
