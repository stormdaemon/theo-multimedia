const article = {
  slug: 'animations-web-conversion',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'Animations web qui aident la conversion, sans ralentir le site',
  metaTitle: 'Animations web et conversion : sobres et accessibles',
  description: 'Quelles animations aident un visiteur à comprendre une offre sans ralentir le site ? transform, opacity, prefers-reduced-motion : les règles à suivre.',
  keyword: 'animations web qui améliorent la conversion',
  category: 'Site internet',
  city: null,
  readingMinutes: 5,
  answer: 'Une animation peut aider la conversion quand elle aide le visiteur à comprendre l’offre ou à savoir quoi faire : un bouton qui réagit, un contenu qui apparaît au moment utile, une étape qui se montre. Pour rester sobre et accessible, elle doit utiliser transform et opacity, durer peu et être désactivée quand l’utilisateur demande moins de mouvement.',
  intro: [
    'Une animation bien placée guide le regard. Un mauvais effet distrait, ralentit la page et gêne les personnes sensibles au mouvement. Le problème n’est pas l’animation elle-même, mais le rôle qu’on lui donne.',
    'Cet article propose une grille simple pour décider quoi animer, avec quelles propriétés CSS et à quel niveau de sobriété.',
  ],
  sections: [
    {
      title: 'Quelles animations servent vraiment la compréhension ?',
      paragraphs: [
        'Une animation utile répond à une question du visiteur : où aller, ce qui a changé, ce qui va se passer après un clic. Elle ne doit jamais être décorative seule. Si on la retire et que le message reste le même, elle ne sert à rien.',
        'Une animation de conversion se juge sur le parcours, pas sur son effet isolé. Un visiteur qui découvre un service doit voir le bénéfice avant l’appel à l’action, et l’effet doit l’aider à suivre cet ordre.',
      ],
      items: [
        'Un retour visuel sur un bouton après un clic.',
        'Une étape qui s’affiche dans l’ordre d’un parcours, comme un formulaire en trois temps.',
        'Une transition entre deux états : ouverture d’un menu, filtre appliqué.',
        'Une frise qui rend un déroulé lisible d’un coup d’œil.',
      ],
    },
    {
      title: 'Pourquoi privilégier transform et opacity ?',
      paragraphs: [
        'Le navigateur peut animer transform et opacity sans recalculer toute la mise en page. Animer la largeur, la hauteur ou la position d’un élément avec top ou left oblige en revanche à recalculer le layout à chaque image, ce qui provoque des saccades, surtout sur téléphone.',
      ],
      items: [
        'Déplacer : transform avec translateY, plutôt que top.',
        'Faire apparaître : opacity, plutôt que display ou height.',
        'Éviter d’animer box-shadow ou filter sur de grandes surfaces.',
      ],
    },
    {
      title: 'Comment respecter prefers-reduced-motion ?',
      paragraphs: [
        'La media query prefers-reduced-motion détecte qu’un visiteur a demandé de réduire les mouvements dans les réglages de son système. Certaines personnes ressentent des malaises, des vertiges ou des difficultés de lecture devant des animations. Il faut alors réduire ou supprimer les mouvements, sans supprimer l’information transmise.',
        'Dans l’exemple ci-dessous, la carte reste lisible et réagit au survol, mais sans mouvement pour les visiteurs qui le demandent.',
      ],
      code: '.carte {\n  transition: transform 0.3s ease, opacity 0.3s ease;\n}\n.carte:hover {\n  transform: translateY(-4px);\n}\n@media (prefers-reduced-motion: reduce) {\n  .carte {\n    transition: none;\n  }\n  .carte:hover {\n    transform: none;\n  }\n}',
    },
    {
      title: 'Quelles limites fixer pour rester rapide ?',
      paragraphs: [
        'Une animation ne doit pas retarder le premier affichage. Les effets lancés au chargement, sur l’image principale ou sur le titre, peuvent dégrader le LCP et donner une impression de lenteur. Gardez les animations d’entrée courtes et concentrez-les sur les éléments situés sous la ligne de flottaison.',
        'Sur un site vitrine, le plus gros risque reste l’effet d’accueil qui retarde la lecture. Un titre qui apparaît en fondu en une demi-seconde est acceptable ; un logo qui tourne pendant trois secondes avant de laisser place au contenu ne l’est pas.',
      ],
      items: [
        'Des durées courtes : quelques dixièmes de seconde pour une transition d’interface.',
        'Aucun effet bloquant pendant le chargement du titre et de l’offre.',
        'Un seul mouvement à la fois dans une même zone de la page.',
        'Un test sur un téléphone d’entrée de gamme avant la mise en ligne.',
      ],
    },
    {
      title: 'Animer sans nuire à l’accessibilité : les vérifications',
      paragraphs: [
        'Un contenu animé doit rester accessible au clavier et aux lecteurs d’écran. Un élément qui apparaît au défilement doit être présent dans le code et lisible, même avant son animation. Un clignotement rapide est à proscrire, car il peut déclencher des crises chez certaines personnes.',
      ],
      items: [
        'Tester la navigation au clavier sur les éléments animés.',
        'Vérifier qu’aucune information n’existe uniquement à travers l’animation.',
        'Respecter prefers-reduced-motion dans toutes les animations, y compris les défilements.',
      ],
    },
  ],
  takeaways: [
    'Une animation doit répondre à une question du visiteur, sinon elle ne sert pas la conversion.',
    'transform et opacity restent les propriétés les plus légères à animer.',
    'prefers-reduced-motion permet de respecter les visiteurs sensibles au mouvement.',
    'Les animations d’entrée doivent rester courtes et ne pas retarder le premier affichage.',
  ],
  faqs: [
    ['Les animations font-elles vraiment monter la conversion ?', 'Elles peuvent aider quand elles clarifient une étape ou attirent l’attention sur un bouton. Elles ne remplacent ni un message clair, ni une offre compréhensible. Mesurez le résultat avant et après.'],
    ['Quelle durée donner à une animation ?', 'Pour une interface, quelques dixièmes de seconde suffisent souvent. Une animation longue fatigue le visiteur qui attend la suite.'],
    ['Faut-il désactiver toutes les animations pour les visiteurs sensibles ?', 'Non. Il suffit de réduire ou de supprimer les mouvements grâce à prefers-reduced-motion, en gardant le sens de l’information.'],
    ['Les animations sont-elles compatibles avec un bon score de performance ?', 'Oui, si elles utilisent transform et opacity, restent courtes et ne bloquent pas le premier affichage. Le score baisse surtout avec les effets qui modifient la mise en page.'],
  ],
  sources: [],
  links: [
    ['Création de site internet', '/creation-site-internet'],
    ['Core Web Vitals pour site vitrine', '/blog/core-web-vitals-site-vitrine'],
    ['Refonte de site internet', '/refonte-site-internet'],
    ['Portfolio', '/portfolio'],
    ['Demander un devis', '/contact'],
  ],
};

export default article;
