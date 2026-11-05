const article = {
  slug: 'comment-etre-cite-par-chatgpt',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'Comment être cité par ChatGPT ? Les leviers réalistes',
  metaTitle: 'Comment être cité par ChatGPT : leviers réels',
  description: 'Comment être cité par ChatGPT ? Robot OAI-SearchBot, pages accessibles et factuelles, sources tierces fiables : ce qui aide vraiment, sans fausse promesse.',
  keyword: 'comment être cité par ChatGPT',
  category: 'GEO & IA',
  city: null,
  readingMinutes: 6,
  answer: 'Personne ne peut garantir une citation par ChatGPT. Vous augmentez vos chances en autorisant le robot OAI-SearchBot, qui alimente la recherche de ChatGPT, en publiant des pages accessibles, factuelles et bien structurées, et en étant présent sur des sources tierces fiables qui confirment vos informations.',
  intro: [
    'ChatGPT peut chercher sur le web pour répondre, et affiche alors des liens vers ses sources. La question est : que pouvez-vous faire pour que votre site en fasse partie ?',
    'Voici les leviers qui dépendent de vous, dans l’ordre où il vaut mieux les traiter.',
  ],
  sections: [
    {
      title: 'Quel robot d’OpenAI faut-il autoriser pour la recherche ?',
      paragraphs: [
        'OpenAI décrit plusieurs robots, chacun avec son rôle. OAI-SearchBot sert la recherche : il permet d’afficher des sites dans les fonctions de recherche de ChatGPT. OpenAI recommande de l’autoriser dans le fichier robots.txt.',
        'GPTBot explore des contenus qui peuvent servir à entraîner ses modèles. ChatGPT-User intervient quand un utilisateur demande à ChatGPT de consulter une page, et ne détermine pas l’éligibilité à la recherche. Les réglages sont indépendants : autoriser l’un n’oblige pas à autoriser l’autre. OpenAI indique qu’un changement de robots.txt peut demander environ 24 heures pour être pris en compte.',
      ],
      code: 'User-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nSitemap: https://www.exemple.fr/sitemap.xml',
    },
    {
      title: 'À quoi ressemble une page facile à citer ?',
      paragraphs: [
        'Une page accessible est lisible sans connexion, rapide, avec le texte important dans le code HTML plutôt que dans des images ou des scripts lourds. Une page factuelle répond précisément à une question : tarifs expliqués par facteurs, délais, zones desservies, méthode.',
        'Placez la réponse en tête, avec un titre formulé comme la question d’un client. Ajoutez l’auteur et la date de mise à jour.',
        'Pensez enfin à une page « À propos » et à une page « Contact » complètes : raison sociale, adresse à Cognac ou ailleurs, téléphone, domaine d’activité. Un assistant qui doit présenter une entreprise cherche d’abord ces éléments d’identité, et un site qui les donne clairement évite les approximations.',
      ],
    },
    {
      title: 'Pourquoi les sources tierces comptent-elles autant ?',
      paragraphs: [
        'Un moteur de réponse recoupe ce qu’il lit. Si votre site dit une chose et que votre fiche Google, un annuaire ou un article de presse locale en disent une autre, la confiance baisse.',
        'Vérifiez donc la cohérence de votre nom, adresse, téléphone et description partout. Cherchez ensuite des mentions sérieuses : annuaires professionnels, associations, partenaires, presse locale.',
      ],
    },
    {
      title: 'Peut-on constater des retombées réelles ?',
      paragraphs: [
        'Oui, et on peut les repérer. CBD Impact, boutique en ligne réalisée par Théo Multimédia : ses premières commandes sont arrivées depuis ChatGPT (liens marqués utm_source=chatgpt.com).',
        'Ce marquage dans les statistiques montre qu’un assistant peut devenir une source de visites. Cela ne signifie pas que le résultat se reproduit à coup sûr.',
      ],
    },
    {
      title: 'Quelles erreurs éviter ?',
      paragraphs: [
        'Plusieurs pièges reviennent souvent :',
      ],
      items: [
        'Bloquer tous les robots par réflexe dans le fichier robots.txt.',
        'Publier des textes génériques copiés sur d’autres sites, qui ne disent rien de votre travail réel.',
        'Laisser en ligne d’anciennes informations (horaires, tarifs, adresse) qui contredisent les nouvelles.',
        'Acheter des avis ou des mentions : les moteurs recoupent.',
        'Promettre un rang ou une citation garantie.',
      ],
    },
    {
      title: 'Comment vérifier que ChatGPT parle correctement de vous ?',
      paragraphs: [
        'Posez à ChatGPT les questions que poserait un client : « Quel électricien intervient à Cognac ? », « Que propose cette entreprise ? ». Notez la date, la formulation exacte et les sources affichées. Refaites le test chaque mois : les réponses varient d’une session à l’autre, donc une seule observation ne prouve rien.',
        'Si une information est fausse, cherchez d’où elle vient : souvent une ancienne page, un annuaire non mis à jour ou une fiche incomplète. Corrigez la source plutôt que de multiplier les pages. Enfin, regardez dans vos statistiques les visites dont la source contient chatgpt.com, comme pour CBD Impact. Ce suivi simple suffit pour une PME.',
      ],
    },
  ],
  takeaways: [
    'Aucune citation ne se garantit : on améliore les signaux.',
    'OAI-SearchBot alimente la recherche de ChatGPT : autorisez-le dans le robots.txt.',
    'Pages accessibles, factuelles, avec réponse en tête, auteur et date.',
    'Cohérence des informations sur votre site et sur les sources tierces.',
    'Marquez vos visites pour repérer le trafic venu de ChatGPT.',
  ],
  faqs: [
    ['Autoriser GPTBot est-il obligatoire pour la recherche ?', 'Non. OpenAI présente des réglages indépendants : OAI-SearchBot concerne la recherche, GPTBot l’entraînement de modèles. À vous de décider pour chacun.'],
    ['Un fichier llms.txt suffit-il ?', 'Non. Il peut compléter un site clair, mais il ne remplace ni de bonnes pages ni un accès autorisé aux robots.'],
    ['Comment savoir si ChatGPT m’envoie des visiteurs ?', 'Regardez dans vos statistiques les visites dont la source contient chatgpt.com, puis testez régulièrement vos questions clés.'],
    ['Faut-il bloquer GPTBot pour protéger mes contenus ?', 'C’est un choix à faire en connaissance de cause. Bloquer GPTBot signale que vos contenus ne doivent pas servir à entraîner les modèles, sans empêcher OAI-SearchBot de faire apparaître votre site dans la recherche. Les deux réglages se décident séparément.'],
  ],
  sources: [
    ['OpenAI : robots et agents utilisateurs', 'https://platform.openai.com/docs/bots'],
  ],
  links: [
    ['Notre approche du GEO', '/geo-referencement-ia'],
    ['Écrire un contenu citable', '/blog/contenu-citable-par-ia'],
    ['Le fichier llms.txt', '/blog/llms-txt-site-entreprise'],
    ['Boutique CBD Impact', '/portfolio/cbd-impact'],
    ['Audit SEO et GEO offert', '/audit-seo-gratuit'],
  ],
};

export default article;
