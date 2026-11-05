const article = {
  slug: 'mesurer-trafic-ia-chatgpt-perplexity',
  publishedAt: '2026-11-05',
  updatedAt: '2026-11-05',
  title: 'Comment mesurer le trafic venu de ChatGPT et de Perplexity ?',
  metaTitle: 'Mesurer trafic ChatGPT et Perplexity avec GA4',
  description: 'Mesurer le trafic ChatGPT : sites référents, utm_source=chatgpt.com, canal GA4 dédié et journaux serveur. Méthode pas à pas, avec ses limites.',
  keyword: 'mesurer trafic ChatGPT',
  category: 'GEO & IA',
  city: null,
  readingMinutes: 6,
  answer: 'Pour mesurer le trafic venu de ChatGPT, repérez dans Google Analytics 4 les sources chatgpt.com, perplexity.ai, gemini.google.com et copilot.microsoft.com, ainsi que le paramètre utm_source=chatgpt.com. Regroupez-les dans un canal personnalisé, puis recoupez avec vos journaux serveur. Le résultat reste une estimation : certaines visites arrivent sans aucune source.',
  intro: [
    'Vous avez retravaillé vos pages pour être cité par les moteurs de réponse IA. Reste une question de bon sens : est-ce que cela amène des visiteurs ? La réponse se trouve dans vos statistiques, à condition de savoir où regarder.',
    'Cet article reste volontairement factuel. Il distingue ce que vous pouvez observer avec certitude de ce qui relève de l’interprétation.',
  ],
  sections: [
    {
      title: 'Quelles sources de trafic IA chercher dans Google Analytics 4 ?',
      paragraphs: [
        'Dans GA4, ouvrez Rapports, Acquisition, puis Acquisition de trafic, et choisissez la dimension « Session : source / support ». Cherchez ensuite les domaines des assistants IA les plus courants.',
      ],
      items: [
        'chatgpt.com',
        'perplexity.ai',
        'gemini.google.com',
        'copilot.microsoft.com',
      ],
    },
    {
      title: 'À quoi sert utm_source=chatgpt.com ?',
      paragraphs: [
        'Lorsque ChatGPT affiche un lien vers votre site, l’adresse peut comporter le paramètre utm_source=chatgpt.com. GA4 le lit comme n’importe quel paramètre UTM et attribue la session à la source chatgpt.com.',
        'Ce marquage est un cas concret du terrain : CBD Impact, boutique en ligne réalisée par Théo Multimédia, a vu arriver ses premières commandes depuis ChatGPT, dans des liens marqués utm_source=chatgpt.com. C’est précisément cette trace qui permet de relier une vente à son origine.',
      ],
    },
    {
      title: 'Comment créer un canal « Moteurs IA » dans GA4 ?',
      paragraphs: [
        'Plutôt que de traquer chaque domaine, regroupez-les. Dans Admin, ouvrez Groupes de canaux, créez un groupe personnalisé, puis ajoutez un canal « Moteurs IA ». Placez-le au-dessus de « Referral » : GA4 applique les règles dans l’ordre, la première qui correspond l’emporte.',
        'La condition à renseigner est : « Source de la session » correspond à l’expression régulière suivante. Attention, GA4 exige que l’expression corresponde à la valeur entière. Vérifiez ensuite le résultat sur une période récente, en comparant avec le rapport « Source / support ».',
      ],
      code: '# Condition : Source de la session — correspond à l’expression régulière\n^(chatgpt\\.com|perplexity\\.ai|gemini\\.google\\.com|copilot\\.microsoft\\.com)$\n\n# Variante plus large si vous voyez des sous-domaines ou des variantes\n^(.*\\.)?(chatgpt\\.com|perplexity\\.ai|gemini\\.google\\.com|copilot\\.microsoft\\.com)$\n\n# Les points sont échappés (\\.) : sinon ils signifient « n\'importe quel caractère »',
    },
    {
      title: 'Que montrent les journaux serveur que GA4 ne voit pas ?',
      paragraphs: [
        'GA4 compte des visiteurs humains. Les journaux de votre hébergeur, eux, enregistrent aussi le passage des robots. Vous pouvez y rechercher les user-agents documentés par les éditeurs : OAI-SearchBot, GPTBot, ChatGPT-User, PerplexityBot et Perplexity-User.',
        'Ce que cela prouve : ces robots sont venus lire telle page, à telle date. Ce que cela ne prouve pas : que la page a été citée dans une réponse, ni qu’un humain l’a ouverte ensuite. Un passage de robot est un signal de lisibilité, pas un résultat commercial.',
      ],
    },
    {
      title: 'Quelles sont les limites de cette mesure ?',
      paragraphs: [
        'Une partie des visites venues d’un assistant IA apparaît dans « Direct » ou « Non attribué », par exemple lorsqu’un lien est copié, ouvert dans une application ou privé de son référent. Le trafic réellement issu de l’IA est donc probablement sous-estimé, sans qu’on puisse dire de combien.',
        'Autre limite : les noms de domaine et les paramètres peuvent évoluer. Revérifiez votre liste de sources tous les trimestres dans le rapport « Source / support ». Pensez aussi au bandeau de consentement : si un visiteur refuse les cookies de mesure, sa visite n’apparaît pas dans GA4, ce qui accentue encore l’écart avec la réalité. Enfin, un volume faible n’a rien d’anormal pour une entreprise locale : un petit nombre de visites bien qualifiées, comme une demande de devis, peut compter davantage que des centaines de lectures.',
      ],
    },
    {
      title: 'Quel tableau de suivi mettre en place chaque mois ?',
      paragraphs: [
        'Prenez un rendez-vous fixe, le premier lundi du mois par exemple, et notez vos relevés dans un simple tableur partagé avec la personne qui gère votre site. Relevez trois chiffres : les sessions du canal « Moteurs IA », les pages d’arrivée de ces sessions, et les conversions associées (formulaire, appel, devis). Ajoutez un quatrième relevé hors GA4 : les passages de robots dans les journaux. Comparez d’un mois à l’autre plutôt que de chercher une valeur absolue. Si une page d’arrivée revient souvent, c’est un signe que son contenu répond bien à une question posée aux assistants : renforcez-la, mettez-la à jour et vérifiez que son téléphone et son formulaire de contact fonctionnent, car c’est là que la visite devient une demande.',
      ],
    },
  ],
  takeaways: [
    'Surveillez chatgpt.com, perplexity.ai, gemini.google.com et copilot.microsoft.com dans « Source / support ».',
    'utm_source=chatgpt.com permet d’attribuer une session, et parfois une commande, à ChatGPT.',
    'Un canal GA4 personnalisé avec une expression régulière évite de suivre chaque domaine à la main.',
    'Les journaux serveur montrent les robots, pas les citations : ne confondez pas passage et résultat.',
  ],
  faqs: [
    ['Pourquoi mon trafic IA semble-t-il très faible ?', 'Parce que les assistants envoient encore peu de clics, et qu’une partie arrive sans source identifiable. Suivez la tendance et les conversions plutôt que le volume brut.'],
    ['Faut-il ajouter moi-même utm_source=chatgpt.com à mes liens ?', 'Non. Ce paramètre est ajouté dans les liens affichés par ChatGPT. Vous n’avez qu’à le retrouver dans vos rapports.'],
    ['Le canal personnalisé modifie-t-il mes anciennes données ?', 'Pas nécessairement. Testez sur une période récente et comparez avec le rapport « Source / support » pour vérifier que les totaux concordent.'],
  ],
  sources: [],
  links: [
    ['Robots.txt et robots IA à autoriser', '/blog/robots-txt-crawlers-ia'],
    ['Être cité par ChatGPT', '/blog/comment-etre-cite-par-chatgpt'],
    ['Le cas CBD Impact', '/portfolio/cbd-impact'],
    ['Référencement IA (GEO)', '/geo-referencement-ia'],
  ],
};

export default article;
