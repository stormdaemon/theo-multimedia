const article = {
  slug: 'refonte-site-internet-cognac-sans-perdre-seo',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'Refonte de site internet à Cognac sans perdre le SEO : la méthode',
  metaTitle: 'Refonte site Cognac sans perdre le SEO : la méthode',
  description: 'Migrer sans perdre vos positions : inventaire des URL, redirections 301, balises, suivi dans Search Console. La méthode pas à pas pour une refonte à Cognac.',
  keyword: 'refonte site internet Cognac sans perdre le SEO',
  category: 'Refonte & performance',
  city: 'Cognac',
  readingMinutes: 6,
  answer: 'Une refonte sans perte de SEO repose sur une règle : chaque ancienne URL importante doit mener à une page équivalente, par une redirection 301, et les balises, le sitemap et les données structurées doivent être vérifiés avant la bascule. On suit ensuite l’indexation dans Google Search Console pendant plusieurs semaines pour corriger les erreurs.',
  intro: [
    'À Cognac comme ailleurs, une refonte donne souvent un site plus clair, plus rapide et mieux pensé. Mais un site qui change d’adresses sans plan peut perdre en quelques semaines des positions construites pendant des années.',
    'Le problème vient rarement du nouveau design. Il vient d’un oubli : une page non redirigée, un titre effacé, un sitemap resté à l’ancienne version. Cet article décrit la méthode qui évite ces pertes, étape par étape.',
  ],
  sections: [
    {
      title: 'Étape 1 : inventorier toutes les URL de l’ancien site',
      paragraphs: [
        'Le point de départ est la liste complète des adresses du site actuel. Un crawl et l’export des pages indexées dans Google Search Console donnent une vue fiable. Il faut y ajouter les pages qui reçoivent des visites ou des liens externes, même si elles n’apparaissent pas dans le menu.',
      ],
      items: [
        'Crawler l’ancien site et exporter toutes les URL accessibles.',
        'Exporter les pages indexées et les requêtes qui génèrent des clics.',
        'Repérer les URL qui reçoivent des liens externes, avec un outil de suivi des backlinks.',
        'Classer chaque URL : conserver, fusionner, rediriger ou retirer.',
      ],
    },
    {
      title: 'Étape 2 : construire le plan de redirections 301',
      paragraphs: [
        'Une redirection 301 indique à Google et aux navigateurs qu’une page a changé d’adresse de façon définitive. Elle transmet l’essentiel des signaux de l’ancienne page à la nouvelle. Chaque ancienne URL importante doit pointer vers la page la plus proche par son sujet, et jamais systématiquement vers l’accueil.',
        'L’exemple ci-dessous, purement fictif, montre la syntaxe d’un serveur nginx. Adaptez-le à votre hébergement et testez-le en préproduction, car une boucle de redirections ou une chaîne de deux redirections ralentit l’exploration.',
      ],
      code: '# Redirections 301 : anciennes URL vers nouvelles URL\nlocation = /boulangerie-exemple/nos-produits.html {\n    return 301 /produits/;\n}\nlocation = /boulangerie-exemple/contact.php {\n    return 301 /contact/;\n}\nlocation ~ ^/actualites/([0-9]{4})/(.*)$ {\n    return 301 /blog/$2;\n}',
    },
    {
      title: 'Étape 3 : garder les balises, les données structurées et le sitemap',
      paragraphs: [
        'Une refonte ne doit pas effacer ce qui fonctionne. Chaque page conservée garde son titre et sa meta description, ou une version améliorée qui reprend le même sujet. Les balises H1 restent cohérentes avec le contenu, et les données structurées de type LocalBusiness sont réimplantées.',
      ],
      items: [
        'Un title et une meta description uniques pour chaque page.',
        'Une seule balise H1 par page, en accord avec le sujet traité.',
        'Un sitemap XML généré à partir des nouvelles URL uniquement.',
        'Des données structurées revues et testées avant la bascule.',
      ],
    },
    {
      title: 'Étape 4 : contrôler le jour de la bascule',
      paragraphs: [
        'Le jour de la mise en ligne, vérifiez les redirections par échantillon, les pages clés et les formulaires. Un test manuel sur les vingt pages les plus visitées révèle souvent les erreurs. Pensez aussi à retirer les protections d’indexation posées pendant le développement.',
        'Ce contrôle prend du temps, mais il évite l’essentiel des mauvaises surprises. Pour chaque page supprimée, vérifiez qu’elle est remplacée par un contenu équivalent. Une page de prestation retirée sans équivalent envoie un signal de rupture, aux moteurs comme aux visiteurs.',
      ],
      items: [
        'Vérifier que la version de travail n’est plus bloquée à l’indexation.',
        'Soumettre le nouveau sitemap dans Google Search Console.',
        'Contrôler les redirections sur les pages les plus visitées.',
      ],
    },
    {
      title: 'Que surveiller dans Search Console après la bascule ?',
      paragraphs: [
        'Les premières semaines montrent les erreurs. Le rapport d’indexation signale les pages en erreur 404, les redirections non suivies et les pages exclues. Les performances, comparées à la période précédente, indiquent si les requêtes principales sont toujours visibles.',
        'Il faut parfois plusieurs mois pour qu’un site retrouve son niveau. Une baisse ponctuelle n’est pas un échec si elle se corrige. Une baisse durable sur les pages clés, en revanche, appelle une vérification des redirections.',
      ],
    },
  ],
  takeaways: [
    'Une refonte sans perte de SEO commence par un inventaire complet des URL existantes.',
    'Chaque ancienne page importante doit être redirigée en 301 vers la page la plus proche.',
    'Balises, données structurées et sitemap se vérifient avant la mise en ligne.',
    'Search Console sert à détecter les erreurs pendant plusieurs semaines après la bascule.',
  ],
  faqs: [
    ['Une refonte fait-elle toujours perdre du référencement ?', 'Non. Une refonte bien préparée conserve ses positions. Les pertes viennent presque toujours de redirections manquantes, de pages supprimées sans remplacement ou d’un site resté bloqué à l’indexation.'],
    ['Combien de temps faut-il attendre après la bascule ?', 'Les premiers effets apparaissent en quelques jours dans Search Console. La stabilisation peut prendre plusieurs semaines, parfois davantage pour un site très volumineux.'],
    ['Faut-il rediriger toutes les anciennes pages ?', 'Non. Les pages sans trafic, sans lien externe et sans utilité peuvent être retirées, à condition de le décider par écrit. Les autres méritent une redirection vers la page la plus proche.'],
    ['Faut-il refaire tous les textes pendant la refonte ?', 'Pas nécessairement. Garder les contenus qui fonctionnent limite les risques. Améliorer un texte sans changer le sujet de la page reste sans danger ; changer le sujet d’une page revient, en revanche, à créer une nouvelle page.'],
  ],
  sources: [],
  links: [
    ['Refonte de site internet', '/refonte-site-internet'],
    ['Création de site internet à Cognac', '/creation-site-internet-cognac'],
    ['Audit SEO gratuit', '/audit-seo-gratuit'],
    ['Refonte WordPress à Angoulême', '/blog/refonte-site-wordpress-angouleme'],
    ['Référencement local', '/referencement-local'],
  ],
};

export default article;
