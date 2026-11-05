const article = {
  slug: 'creation-site-web-restaurant-cognac',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'Créer un site web pour restaurant à Cognac : menu, réservation, horaires',
  metaTitle: 'Site web restaurant Cognac : menu, réservation, horaires',
  description: 'Site de restaurant à Cognac : menu lisible sur mobile, réservation simple, horaires à jour et fiche Google cohérente. Les points à vérifier avant lancement.',
  keyword: 'création site web restaurant Cognac',
  category: 'Site internet',
  city: 'Cognac',
  readingMinutes: 6,
  answer: 'Un site de restaurant à Cognac doit répondre dans les premières secondes à trois questions : que mange-t-on, quand ouvre-t-on et comment réserver. Le menu doit se lire sur téléphone sans zoom, les horaires doivent être à jour sur le site et sur la fiche Google, et le bouton de réservation doit rester visible. Le reste sert à donner envie et à se faire trouver localement.',
  intro: [
    'Un restaurant vit de deux choses : des tables remplies et un téléphone qui sonne au bon moment. Le site ne remplace pas le bouche-à-oreille, mais il reste ouvert à toute heure. Quand quelqu’un cherche un restaurant à Cognac pour ce soir, il arrive souvent sur la fiche Google, puis sur le site. Si la page met trop de temps à répondre, il ferme l’onglet et réserve ailleurs.',
    'Cet article s’adresse aux restaurateurs, aux bars à vin, aux traiteurs et aux lieux d’accueil de Cognac qui veulent un site simple, rapide et utile. Il ne parle pas de design pour le design : il parle de ce qui fait venir la table.',
  ],
  sections: [
    {
      title: 'Quelles informations doivent apparaître dès le premier écran ?',
      paragraphs: [
        'Le visiteur pressé veut trois réponses sans faire défiler la page : où êtes-vous, êtes-vous ouvert, et puis-je réserver. Tout le reste vient après. Un bon premier écran reprend donc les éléments critiques, en texte réel et non dans une image.',
      ],
      items: [
        'L’adresse, avec un lien qui ouvre l’itinéraire sur le téléphone.',
        'Les horaires du jour, avec la mention des fermetures exceptionnelles.',
        'Un numéro de téléphone cliquable, qui lance l’appel en un geste.',
        'Un bouton « Réserver » visible sans toucher l’écran.',
        'Un lien direct vers le menu, sans passer par un téléchargement.',
      ],
    },
    {
      title: 'Comment rendre le menu lisible sur mobile ?',
      paragraphs: [
        'Le PDF est le piège classique. Sur un téléphone, il oblige à zoomer, à pivoter l’écran et à chercher la section des desserts. Google et les moteurs de réponse lisent mal ces fichiers, alors que le texte d’une page HTML se découpe, se cite et se recherche facilement.',
        'Une page menu simple suffit. Elle s’organise en sections courtes (entrées, plats, desserts, boissons), chaque plat tient sur une ligne, et les allergènes ou options végétariennes sont indiqués près du nom du plat. Si la carte change chaque semaine, prévoyez une mise à jour rapide plutôt qu’une nouvelle maquette.',
      ],
    },
    {
      title: 'Comment gérer la réservation sans compliquer la vie du client ?',
      paragraphs: [
        'Une réservation en ligne doit tenir en moins de trois étapes : choisir la date et l’heure, indiquer le nombre de couverts, saisir un nom et un numéro. Au-delà, une partie des visiteurs abandonne. Le choix de l’outil dépend du service que vous utilisez déjà : certains restaurants gardent le téléphone pour les grandes tablées et le formulaire pour le reste.',
      ],
      items: [
        'Vérifiez que le lien de réservation fonctionne sur téléphone, pas seulement sur ordinateur.',
        'Affichez le délai de réponse et ce qui se passe en cas de créneau complet.',
        'Envoyez une confirmation claire, avec l’adresse et le numéro à appeler en cas de changement.',
      ],
    },
    {
      title: 'Comment faire coïncider les horaires du site et ceux de Google ?',
      paragraphs: [
        'Le plus fréquent problème des restaurants est la désynchronisation : le site affiche un horaire, la fiche Google un autre, et les jours fériés ne sont mis à jour nulle part. Le client qui se déplace pour rien ne revient pas. Désignez une seule source de vérité, puis répétez-la à l’identique sur le site et sur la fiche.',
        'Pour aider les moteurs à comprendre la structure de votre établissement, un balisage schema.org de type Restaurant peut décrire l’adresse, le téléphone et les horaires. Les valeurs ci-dessous sont fictives et servent uniquement d’exemple.',
      ],
      code: '{\n  "@context": "https://schema.org",\n  "@type": "Restaurant",\n  "name": "Restaurant Exemple",\n  "telephone": "+33 5 00 00 00 00",\n  "openingHours": ["Mo-Fr 12:00-14:00", "Fr-Sa 19:00-22:00"],\n  "address": {\n    "@type": "PostalAddress",\n    "addressLocality": "Cognac",\n    "addressRegion": "Charente"\n  }\n}',
    },
    {
      title: 'Quelles photos publier et comment les rendre légères ?',
      paragraphs: [
        'Les photos de stock sont reconnues immédiatement et ne convainquent personne. Les clients veulent voir la salle à l’heure du service, le plat tel qu’il sort de la cuisine et l’équipe qui vous accueille. Quelques photos réelles, bien cadrées, valent mieux qu’une galerie de quarante images floues.',
        'Chaque image doit rester légère, sinon le site ralentit sur le réseau mobile. Exportez-les en WebP ou en AVIF, donnez-leur un nom explicite et ajoutez un texte alternatif qui décrit ce qu’on voit.',
      ],
      items: [
        'Une photo de la salle, prise à l’heure du service.',
        'Un ou deux plats signature, photographiés à la lumière du jour.',
        'Une photo de la façade, utile pour le repérage depuis la rue.',
      ],
    },
    {
      title: 'Faut-il lancer une préversion avant l’ouverture ?',
      paragraphs: [
        'Quand la date d’ouverture approche et que le site complet n’est pas prêt, une préversion peut être mise en ligne rapidement. L’offre Préversion express 24 h sert à cela : publier vite une version qui donne les informations essentielles et lance l’indexation. Ce n’est jamais un site définitif. Il est ensuite enrichi et finalisé avec les photos, le menu complet et la réservation.',
      ],
    },
  ],
  takeaways: [
    'Le premier écran doit donner l’adresse, les horaires, le téléphone et la réservation.',
    'Un menu en texte HTML se lit mieux qu’un PDF sur téléphone.',
    'Les horaires doivent être identiques sur le site et sur la fiche Google.',
    'Des photos réelles et légères valent mieux qu’une galerie de stock.',
  ],
  faqs: [
    ['Faut-il un site si j’ai déjà une fiche Google ?', 'Oui, si vous voulez montrer le menu, la carte des plats et la réservation. La fiche Google affiche l’essentiel, le site apporte le détail et une page que l’on peut partager.'],
    ['Le menu peut-il rester un PDF ?', 'Vous pouvez le proposer en complément, mais la version principale doit être une page HTML. Elle se lit sur téléphone, se met à jour facilement et reste accessible aux moteurs de recherche.'],
    ['Combien de temps prend la création d’un site de restaurant ?', 'Le délai dépend du nombre de pages, des photos disponibles et de l’outil de réservation choisi. Un devis précise le calendrier une fois le besoin défini.'],
  ],
  sources: [],
  links: [
    ['Création de site internet à Cognac', '/creation-site-internet-cognac'],
    ['Être visible sur Google Maps à Cognac', '/blog/comment-etre-visible-google-maps-cognac'],
    ['Préversion express 24 h', '/preversion-express-24h'],
    ['Demander un devis', '/contact'],
  ],
};

export default article;
