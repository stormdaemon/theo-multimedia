const article = {
  slug: 'accessibilite-rgaa-site-pme',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'Accessibilité d’un site de PME : les bases du RGAA à appliquer',
  metaTitle: 'Accessibilité RGAA site PME : les bases à appliquer',
  description: 'Contrastes, navigation au clavier, textes alternatifs et formulaires : les bases du RGAA pour qu’un site de PME soit utilisable par tous les visiteurs.',
  keyword: 'accessibilité RGAA site PME',
  category: 'Site internet',
  city: null,
  readingMinutes: 5,
  answer: 'Le RGAA est le référentiel français qui décrit comment rendre un site accessible aux personnes handicapées. Pour une PME, il se traduit par quelques bases vérifiables : des contrastes suffisants, une navigation au clavier, des textes alternatifs pour les images utiles et des formulaires compréhensibles. Les appliquer dès la création demande moins de reprises qu’une correction après coup.',
  intro: [
    'L’accessibilité numérique est souvent reléguée à la fin des projets, quand il ne reste plus de budget. Pourtant, les mêmes gestes servent à tout le monde : un visiteur sur téléphone en plein soleil, une personne qui navigue au clavier, quelqu’un qui agrandit le texte.',
    'Cet article présente les bases, sans transformer la PME en laboratoire d’audit. Il sert de liste de contrôle pour un site vitrine, une refonte ou un site déjà en ligne.',
  ],
  sections: [
    {
      title: 'Qu’est-ce que le RGAA, et qui doit le respecter ?',
      paragraphs: [
        'Le RGAA, Référentiel général d’amélioration de l’accessibilité, reprend les critères internationaux de l’accessibilité web et les adapte au droit français. Il sert de méthode pour auditer un site et corriger ses défauts.',
        'Pour une PME, une bonne première étape consiste à lister les pages les plus visitées, puis à vérifier ces seules pages avant d’élargir le contrôle.',
        'Les obligations dépendent de la nature de l’organisme et du service proposé. Avant de conclure pour votre cas, consultez les pages officielles de l’État sur l’accessibilité numérique : ce sont elles qui font référence.',
      ],
    },
    {
      title: 'Comment vérifier les contrastes du texte ?',
      paragraphs: [
        'Un texte courant doit ressortir nettement de son fond. Le seuil de référence pour un texte de taille normale est un contraste d’au moins 4,5 pour 1. Les outils de mesure en ligne donnent le ratio exact à partir des deux couleurs.',
        'Un bouton qui change de couleur au survol doit rester lisible dans son état normal comme dans son état actif.',
      ],
      items: [
        'Vérifier le texte courant, les titres, les boutons et les liens.',
        'Ne pas transmettre une information par la couleur seule : un champ en erreur doit aussi porter un message.',
        'Tester le site en niveaux de gris pour repérer ce qui disparaît.',
      ],
    },
    {
      title: 'Comment permettre la navigation au clavier ?',
      paragraphs: [
        'Tout ce qu’un clic permet doit être accessible avec la touche Tabulation, puis Entrée ou Espace. Un visiteur qui ne peut pas utiliser la souris compte sur cette navigation pour lire le site entier.',
        'Dans les menus, vérifiez aussi le passage d’un niveau à l’autre : un sous-menu qui se ferme dès qu’on le survole sans clic est souvent inutilisable au clavier.',
      ],
      items: [
        'Chaque élément interactif est atteignable, dans un ordre logique.',
        'Le point de focus reste visible, par exemple un contour net autour du lien actif.',
        'Les menus déroulants et les accordéons s’ouvrent au clavier.',
        'Aucune fenêtre ne piège le curseur : on peut toujours la fermer.',
      ],
    },
    {
      title: 'Quels textes alternatifs écrire pour les images ?',
      paragraphs: [
        'Le texte alternatif remplace l’image pour un lecteur d’écran. Il dépend de la fonction de l’image : une photo informative se décrit, une image purement décorative reçoit un texte vide, et une image qui contient du texte répète ce texte.',
        'Un logo cliquable se nomme d’après sa destination, par exemple « Retour à l’accueil », et non d’après son dessin.',
      ],
      code: '<img src="facade.jpg" alt="Façade de la boutique, rue principale">\n<img src="motif.svg" alt="">',
    },
    {
      title: 'Comment rendre les formulaires compréhensibles ?',
      paragraphs: [
        'Un formulaire de contact simple et bien libellé suffit souvent à couvrir l’essentiel pour une PME.',
        'Testez le formulaire sans souris, puis avec un message d’erreur volontaire, pour voir si l’aide reste compréhensible.',
      ],
      items: [
        'Chaque champ a un libellé visible, relié au champ, et pas seulement un texte d’exemple.',
        'Les champs obligatoires sont indiqués par une mention, pas seulement par un astérisque.',
        'Un message d’erreur précis apparaît près du champ concerné, avec la façon de le corriger.',
        'Les cases à cocher d’un même groupe sont regroupées sous une question commune.',
      ],
    },
  ],
  takeaways: [
    'Le RGAA se résume à des bases vérifiables : contrastes, clavier, textes alternatifs, formulaires.',
    'Un contraste de 4,5 pour 1 sert de repère pour un texte courant.',
    'Un outil automatique ne suffit pas, les parcours se testent à la main.',
    'Prévoir l’accessibilité dès la création évite les reprises.',
  ],
  faqs: [
    ['Un site accessible coûte-t-il beaucoup plus cher ?', 'Le surcoût dépend surtout de la conception. Un site construit avec un HTML propre et un design sobre demande peu de travail en plus, alors qu’une correction tardive peut obliger à reprendre des pages entières. Un devis permet de chiffrer votre cas.'],
    ['Un outil automatique suffit-il à vérifier l’accessibilité ?', 'Non. Les outils détectent une partie des défauts, comme l’absence de texte alternatif. La navigation et la compréhension se vérifient à la main, au clavier et avec un lecteur d’écran.'],
    ['Faut-il un diagnostic avant une refonte ?', 'C’est utile pour voir les défauts existants et décider de ce qui doit être repris. Il se chiffre sur devis, selon l’état du site.'],
    ['Faut-il rendre les vidéos accessibles ?', 'Une vidéo qui transmet une information importante doit proposer des sous-titres, et une transcription si le contenu est dense. C’est un point à vérifier au cas par cas.'],
  ],
  sources: [],
  links: [
    ['Création de site internet', '/creation-site-internet'],
    ['Refonte d’un site existant', '/refonte-site-internet'],
    ['Maintenance de site web', '/maintenance-site-web'],
    ['Demander un devis', '/contact'],
  ],
};

export default article;
