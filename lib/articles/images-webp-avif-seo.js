const article = {
  slug: 'images-webp-avif-seo',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'Images WebP, AVIF et SEO : optimiser sans perdre la qualité',
  metaTitle: 'Images WebP et AVIF pour le SEO : guide pratique',
  description: 'WebP, AVIF, dimensions, width et height, lazy loading, texte alternatif : les réglages qui allègent un site sans nuire à son référencement et à sa lisibilité.',
  keyword: 'images WebP AVIF et SEO',
  category: 'Refonte & performance',
  city: null,
  readingMinutes: 5,
  answer: 'Le WebP et l’AVIF sont des formats d’image plus légers que le JPEG ou le PNG pour une qualité comparable. Pour le SEO, il faut les servir à la bonne taille, réserver l’espace de chaque image avec width et height, décrire son contenu par un texte alternatif utile et différer le chargement des images situées hors du premier écran.',
  intro: [
    'Les images représentent souvent la plus grande part du poids d’une page. Une photo de 4 000 pixels de large affichée à 600 pixels ralentit le chargement, surtout sur mobile, sans rien apporter au visiteur.',
    'Une image bien optimisée sert trois objectifs à la fois : un chargement rapide, une mise en page stable et un contenu compréhensible par les moteurs de recherche et les lecteurs d’écran. Voici les réglages à appliquer.',
  ],
  sections: [
    {
      title: 'WebP ou AVIF : quel format choisir ?',
      paragraphs: [
        'Le WebP est un format largement pris en charge, qui réduit le poids des photos comme des illustrations. L’AVIF compresse souvent mieux encore, au prix d’un encodage plus long. Le plus simple est de proposer les deux, avec le JPEG en repli, et de laisser le navigateur choisir le format qu’il sait lire.',
      ],
      items: [
        'Photos : AVIF ou WebP, avec JPEG en repli.',
        'Logos et pictogrammes : SVG, quand c’est possible.',
        'Images avec transparence : WebP ou PNG optimisé.',
      ],
    },
    {
      title: 'Quelles dimensions donner à chaque image ?',
      paragraphs: [
        'Une image doit être livrée à la taille réellement affichée, multipliée par la densité d’écran si nécessaire. Un fichier d’origine de plusieurs milliers de pixels n’a aucun intérêt sur un site vitrine. Les versions multiples, déclarées avec srcset, permettent au navigateur de choisir la plus adaptée.',
        'Une compression modérée suffit souvent pour garder une qualité nette sans alourdir la page.',
      ],
    },
    {
      title: 'Pourquoi indiquer width et height ?',
      paragraphs: [
        'Les attributs width et height réservent l’espace de l’image avant son chargement. Sans eux, le texte se décale quand l’image apparaît, ce qui fait grimper le CLS. Ils ne figent pas l’affichage : le CSS peut toujours adapter la taille finale, par exemple avec une largeur de 100 % et une hauteur automatique.',
        'Cette règle vaut pour toutes les images, y compris celles d’une galerie de réalisations ou d’une équipe. Dans un portfolio, où les visuels occupent la majorité de l’écran, la stabilité de la mise en page compte autant que le poids des fichiers.',
      ],
    },
    {
      title: 'Lazy loading : quelles images charger tout de suite ?',
      paragraphs: [
        'Le chargement différé, déclaré avec l’attribut loading="lazy", repousse le téléchargement des images situées hors de l’écran initial. Il ne faut jamais l’appliquer à l’image principale du haut de page : elle doit au contraire être chargée en priorité, car elle compte souvent pour le LCP.',
        'Attention toutefois : une image masquée dans un carrousel ou un onglet fermé peut ne jamais se charger si le code est mal écrit. Testez chaque gabarit de page après avoir activé le chargement différé.',
      ],
      items: [
        'Image principale du haut de page : pas de lazy loading, et un chargement prioritaire.',
        'Images plus bas dans la page : loading="lazy".',
        'Vérifier le résultat avec PageSpeed Insights.',
      ],
    },
    {
      title: 'Comment rédiger un texte alternatif utile ?',
      paragraphs: [
        'Le texte alternatif (attribut alt) décrit l’image pour une personne qui ne la voit pas, par exemple avec un lecteur d’écran. Il aide aussi les moteurs de recherche à comprendre le contenu d’un visuel. Il doit décrire ce que montre l’image dans son contexte, en quelques mots, sans bourrage de mots-clés.',
      ],
      items: [
        'Une photo de réalisation : ce qu’elle montre, dans le contexte de la page.',
        'Une image purement décorative : alt vide (alt="") pour qu’elle soit ignorée des lecteurs d’écran.',
        'Un logo : le nom de l’organisation.',
      ],
    },
    {
      title: 'Exemple : une balise picture avec deux formats',
      paragraphs: [
        'La balise picture propose plusieurs formats, et le navigateur prend le premier qu’il sait lire. Le code ci-dessous utilise des noms de fichiers et un texte fictifs, à remplacer par les vôtres.',
      ],
      code: '<picture>\n  <source type="image/avif" srcset="/images/atelier-exemple-800.avif 800w, /images/atelier-exemple-1600.avif 1600w" sizes="(max-width: 800px) 100vw, 800px">\n  <source type="image/webp" srcset="/images/atelier-exemple-800.webp 800w, /images/atelier-exemple-1600.webp 1600w" sizes="(max-width: 800px) 100vw, 800px">\n  <img src="/images/atelier-exemple-800.jpg" width="800" height="533" alt="Atelier Exemple, établi en bois avec outils rangés" loading="lazy">\n</picture>',
    },
  ],
  takeaways: [
    'WebP et AVIF allègent les images ; un JPEG de repli garantit l’affichage partout.',
    'Chaque image doit être livrée à sa taille d’affichage, pas à la taille de l’original.',
    'width et height réservent l’espace et limitent le CLS.',
    'L’image principale se charge en priorité ; les autres en lazy loading.',
  ],
  faqs: [
    ['Le WebP suffit-il pour le SEO ?', 'Pour la plupart des sites, oui. L’AVIF peut alléger encore davantage les fichiers, mais le gain réel dépend de l’image et du temps d’encodage.'],
    ['Faut-il renommer les fichiers images ?', 'Un nom clair, en minuscules et avec des mots séparés par des tirets, aide à décrire le contenu. Il ne remplace pas le texte alternatif.'],
    ['Les images compressées perdent-elles en qualité ?', 'Une compression modérée reste quasiment invisible à l’écran. Une compression trop forte se remarque sur les aplats de couleur et sur les textes intégrés à l’image.'],
    ['Un site WordPress peut-il convertir ses images automatiquement ?', 'Oui, la plupart des extensions d’optimisation proposent la conversion en WebP. Vérifiez quand même le rendu, les dimensions et les textes alternatifs, que l’outil ne remplit pas toujours correctement.'],
  ],
  sources: [],
  links: [
    ['Maintenance de site web', '/maintenance-site-web'],
    ['Core Web Vitals pour site vitrine', '/blog/core-web-vitals-site-vitrine'],
    ['Création de site internet', '/creation-site-internet'],
    ['Portfolio', '/portfolio'],
    ['Audit SEO gratuit', '/audit-seo-gratuit'],
  ],
};

export default article;
