const article = {
  slug: 'audit-technique-seo-checklist',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'Audit technique SEO : la checklist en 10 points pour votre site',
  metaTitle: 'Audit technique SEO : checklist en 10 points',
  description: 'Audit technique SEO : une checklist ordonnée, de l’indexation à l’accès des robots IA, avec pour chaque point l’outil gratuit pour le vérifier.',
  keyword: 'audit technique SEO checklist',
  category: 'Refonte & performance',
  city: null,
  readingMinutes: 6,
  answer: 'Un audit technique SEO vérifie dans cet ordre dix points : indexation, robots.txt, sitemap, balises canoniques, statuts HTTP, redirections, vitesse, affichage mobile, données structurées et accès des robots IA. Trois outils gratuits suffisent pour commencer : la Search Console, PageSpeed Insights et le test des résultats enrichis de Google.',
  intro: [
    'Un site bien écrit peut rester invisible à cause d’une seule ligne mal placée. Le plus souvent, le problème n’est pas le contenu, mais une porte fermée que personne n’a vérifiée.',
    'Cette checklist suit l’ordre logique : si l’étape 1 échoue, inutile de peaufiner l’étape 7. Pour chaque point, vous trouverez l’outil gratuit qui permet de contrôler vous-même.',
  ],
  sections: [
    {
      title: 'Vos pages sont-elles indexées, et robots.txt les laisse-t-il passer ?',
      paragraphs: [
        'Points 1 et 2. Dans la Search Console, le rapport « Indexation des pages » indique quelles URL sont dans l’index de Google et pourquoi les autres n’y sont pas. L’outil d’inspection d’URL montre l’état d’une page précise.',
        'Ouvrez ensuite votre-site.fr/robots.txt dans un navigateur. Une ligne Disallow: / sous User-agent: * ferme tout le site, et c’est un oubli classique après une mise en ligne depuis un environnement de test.',
      ],
    },
    {
      title: 'Le sitemap est-il à jour et déclaré ?',
      paragraphs: [
        'Point 3. Le sitemap liste les URL que vous voulez voir indexées. Vérifiez qu’il contient uniquement des pages réelles, en statut 200, sans redirection ni page bloquée.',
        'Pour contrôler : dans la Search Console, ouvrez « Sitemaps », envoyez l’adresse du fichier et lisez l’état. Un statut « Réussite » signifie que Google l’a lu, pas que toutes les pages sont indexées.',
      ],
    },
    {
      title: 'Canoniques, statuts HTTP et redirections : où sont les doublons et les impasses ?',
      paragraphs: [
        'Points 4, 5 et 6. La balise canonique indique la version de référence d’une page. Elle doit pointer vers l’URL propre, sans paramètre inutile. Dans l’inspection d’URL, comparez « URL canonique déclarée par l’utilisateur » et « sélectionnée par Google » : un écart mérite une enquête.',
        'Les statuts HTTP disent comment le serveur répond : 200 pour une page normale, 301 pour un déplacement définitif, 404 pour une page absente. Le rapport d’indexation de la Search Console signale les 404 et les redirections. Une chaîne de redirections, ou une redirection de toutes les anciennes pages vers l’accueil, fait perdre du temps aux robots et aux visiteurs.',
      ],
    },
    {
      title: 'Le site est-il rapide et lisible sur mobile ?',
      paragraphs: [
        'Points 7 et 8. Saisissez votre adresse dans PageSpeed Insights : l’outil affiche des mesures en conditions réelles quand elles existent, des mesures simulées sinon, et des pistes de correction. Testez la page d’accueil et une page de service, sur mobile en priorité. Les images trop lourdes, les polices mal chargées et les scripts tiers sont les causes les plus fréquentes de lenteur sur un site vitrine.',
        'Pour le mobile, regardez aussi votre site sur un vrai téléphone : texte lisible sans zoom, boutons assez espacés, numéro de téléphone cliquable. La Search Console conserve l’historique des problèmes détectés.',
      ],
    },
    {
      title: 'Les données structurées sont-elles valides ?',
      paragraphs: [
        'Point 9. Collez l’URL d’une page dans le test des résultats enrichis de Google : l’outil détecte les types de balisage reconnus et signale les erreurs. Pour une entreprise locale, voyez le détail dans l’article consacré à LocalBusiness. Vérifiez que le nom, l’adresse et le téléphone du balisage sont identiques à ceux affichés sur la page. Un balisage faux ou incohérent vaut moins que pas de balisage.',
      ],
    },
    {
      title: 'Les robots IA peuvent-ils lire votre site ?',
      paragraphs: [
        'Point 10. Relisez robots.txt en cherchant les user-agents des moteurs de réponse : OAI-SearchBot, PerplexityBot, et ceux d’entraînement comme GPTBot. Un blocage global de « tous les robots » coupe aussi la recherche IA.',
        'Les éditeurs distinguent les robots de recherche des robots d’entraînement : vous pouvez autoriser les premiers et refuser les seconds.',
        'Vérifiez ensuite que le contenu essentiel est présent dans le HTML reçu, pas uniquement chargé par JavaScript, et qu’aucun pare-feu ne rejette ces robots. C’est le chaînon que les audits classiques oublient et qui compte pour le GEO.',
        'Commencez par ce qui bloque : indexation, robots.txt, statuts d’erreur. Passez ensuite à ce qui dilue : canoniques, redirections, doublons. Terminez par ce qui améliore : vitesse, balisage, accessibilité aux robots IA. Corriger dans cet ordre évite de dépenser du temps sur un détail pendant qu’une porte reste fermée.',
        'Notez chaque constat avec la page concernée, la date et la correction prévue. Après chaque changement, refaites le contrôle avec le même outil : c’est la seule preuve que le problème est réglé.',
      ],
    },
  ],
  takeaways: [
    'Respectez l’ordre : accès d’abord, optimisation ensuite.',
    'La Search Console couvre indexation, sitemap, canoniques, statuts et mobile.',
    'PageSpeed Insights mesure la vitesse ; le test des résultats enrichis valide le balisage.',
    'Les robots IA se vérifient dans robots.txt et dans le HTML réellement livré.',
  ],
  faqs: [
    ['Combien de temps prend cet audit ?', 'Pour un petit site vitrine, une à deux heures suffisent pour parcourir les dix points. Les corrections, elles, dépendent de ce qui est trouvé.'],
    ['Ai-je besoin d’un outil payant ?', 'Pas pour démarrer. La Search Console, PageSpeed Insights et le test des résultats enrichis sont gratuits et couvrent l’essentiel.'],
    ['Faut-il refaire l’audit régulièrement ?', 'Oui, après chaque refonte ou migration, et au moins une fois par an. Une mise à jour peut modifier robots.txt ou les redirections sans prévenir.'],
  ],
  sources: [],
  links: [
    ['Schéma LocalBusiness', '/blog/schema-localbusiness-seo-local'],
    ['Robots.txt et robots IA', '/blog/robots-txt-crawlers-ia'],
    ['Core Web Vitals pour un site vitrine', '/blog/core-web-vitals-site-vitrine'],
    ['Maintenance de site web', '/maintenance-site-web'],
    ['Audit SEO et GEO offert', '/audit-seo-gratuit'],
  ],
};

export default article;
