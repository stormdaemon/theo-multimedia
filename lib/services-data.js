import { contactUrl } from './business';

export const homepageServices = [
  {
    icon: '/assets/icon-design-orange.webp',
    preview: '/assets/service-card-site-vitrine-preview.webp',
    title: 'Site vitrine en 24h',
    description: 'Un site professionnel, moderne et rapide, livré en 24h maximum quand le périmètre est clair.',
    href: '/site-vitrine-24h',
    ariaLabel: 'Découvrir le service site vitrine en 24h',
  },
  {
    icon: '/assets/icon-seo-local-orange.webp',
    preview: '/assets/service-card-seo-local-preview.webp',
    title: 'SEO Local & Référencement',
    description: 'Structure, contenus et données enrichies pour améliorer votre visibilité locale.',
    href: '/referencement-local',
    ariaLabel: 'Découvrir le service SEO local et référencement',
  },
  {
    icon: '/assets/icon-seo-audit-orange.webp',
    preview: '/assets/service-card-audit-seo-preview.webp',
    title: 'Audit SEO gratuit',
    description: 'Un diagnostic clair des blocages, priorités et opportunités de visibilité.',
    href: '/audit-seo-gratuit',
    ariaLabel: 'Demander un audit SEO gratuit',
  },
  {
    icon: '/assets/icon-crm-orange.webp',
    preview: '/assets/service-card-crm-preview.webp',
    title: 'CRM sur mesure',
    description: 'Clients, devis, relances et suivi dans un outil vraiment adapté à vos usages.',
    href: '/crm-sur-mesure',
    ariaLabel: 'Découvrir le service CRM sur mesure',
  },
  {
    icon: '/assets/icon-lms-orange.webp',
    preview: '/assets/service-card-lms-preview.webp',
    title: 'LMS / E-learning',
    description: 'Plateformes de formation pour organismes, écoles et équipes internes.',
    href: '/lms-elearning',
    ariaLabel: 'Découvrir le service LMS et e-learning',
  },
  {
    icon: '/assets/icon-ecommerce-orange.webp',
    preview: '/assets/service-card-ecommerce-preview.webp',
    title: 'E-commerce sur mesure',
    description: 'Boutiques rapides et évolutives, sans dépendre d’un thème générique.',
    href: '/ecommerce-sur-mesure',
    ariaLabel: 'Découvrir le service e-commerce sur mesure',
  },
];

const sharedProcess = [
  'Cadrage rapide de votre activité, de vos publics et de vos objectifs.',
  'Structure des pages, messages clés, CTA et parcours de conversion.',
  'Design sombre premium, développement responsive et optimisation performance.',
  'Mise en ligne, vérifications SEO, suivi et prochaines priorités.',
];

const sharedSiteIncludes = [
  'Une direction artistique adaptée à votre métier.',
  'Des pages rapides et lisibles sur mobile.',
  'Des textes orientés conversion, pas du remplissage.',
  'Les bases SEO techniques : title, description, canonical, schema et maillage.',
  'Un formulaire de contact clair et des liens mail/téléphone cliquables.',
];

export const servicePages = [
  {
    slug: 'site-vitrine-24h',
    updatedAt: '2026-06-05',
    type: 'service',
    eyebrow: 'Service express',
    title: 'Site vitrine en 24h : un site rapide, propre et prêt à convertir',
    metaTitle: 'Site vitrine en 24h | Création rapide & SEO inclus',
    metaDescription:
      'Besoin d’un site professionnel rapidement ? Théo Multimédia crée votre site vitrine en 24h avec design soigné, performance et SEO local.',
    keywords: ['site vitrine 24h', 'site internet rapide', 'site vitrine professionnel'],
    canonical: '/site-vitrine-24h',
    heroImage: '/assets/services-site-vitrine-workstation.webp',
    intro:
      'Un site vitrine en 24h n’est pas un site bâclé. C’est un format court, cadré et efficace pour lancer une présence professionnelle, rassurer vos prospects et capter les premières demandes sans attendre trois mois.',
    cta: { label: 'Demander mon site en 24h', href: contactUrl('site-vitrine-24h') },
    secondaryCta: { label: 'Recevoir mon audit SEO gratuit', href: contactUrl('audit-seo') },
    sections: [
      {
        title: 'Quand le format 24h est pertinent',
        body: [
          'Ce format convient aux artisans, commerces, indépendants, associations et petites équipes qui ont besoin d’une vitrine claire : activité, services, preuves, coordonnées et appel à l’action.',
          'Le périmètre doit rester concentré. Une page longue ou quelques sections bien structurées peuvent suffire pour démarrer vite, puis évoluer vers un site multipage si le SEO local demande plus de profondeur.',
        ],
        items: ['Lancement d’activité', 'Événement ou offre urgente', 'Remplacement d’une page obsolète', 'Landing page pour campagne locale'],
      },
      {
        title: 'Ce que contient votre site',
        body: ['Le site est construit pour être utile dès sa mise en ligne : lisible, rapide, responsive et indexable.'],
        items: sharedSiteIncludes,
      },
      {
        title: 'SEO inclus dès la structure',
        body: [
          'Même en express, le site doit parler clairement à Google : une intention par section, des titres propres, des textes visibles dans le HTML, une description unique et un maillage vers les services ou zones utiles.',
        ],
        items: ['Title et meta description', 'Canonical', 'Open Graph', 'Schema WebPage/Service', 'Maillage vers contact, SEO local et portfolio'],
      },
      { title: 'Méthode', body: ['Le cadrage reste simple et direct.'], items: sharedProcess },
    ],
    faqs: [
      ['Un vrai site peut-il être livré en 24h ?', 'Oui si le périmètre est cadré : site vitrine, landing page ou page de lancement. Les contenus et accès doivent être disponibles rapidement.'],
      ['Le SEO est-il possible sur un site express ?', 'Oui pour les bases techniques et locales. Une stratégie de contenu plus large peut ensuite être ajoutée.'],
      ['Est-ce un template ?', 'Non. Le format est rapide, mais l’identité, les textes et les priorités sont adaptés à votre activité.'],
    ],
    relatedLinks: [
      ['SEO local', '/referencement-local'],
      ['Audit SEO gratuit', '/audit-seo-gratuit'],
      ['Création site internet', '/creation-site-internet'],
      ['Contact', contactUrl('site-vitrine-24h')],
    ],
  },
  {
    slug: 'creation-site-internet',
    updatedAt: '2026-06-05',
    type: 'service',
    eyebrow: 'Hub création web',
    title: 'Création de site internet en Charente : design, code, contenu et conversion',
    metaTitle: 'Création site internet Charente | Vitrine, SEO & sur mesure',
    metaDescription:
      'Création de sites internet rapides et élégants en Charente : site vitrine, refonte, SEO local, e-commerce et outils sur mesure.',
    keywords: ['création site internet Charente', 'agence web Charente', 'site vitrine Charente'],
    canonical: '/creation-site-internet',
    heroImage: '/assets/hero-devices-electricien-restaurant.webp',
    intro:
      'Créer un site internet utile, ce n’est pas empiler des blocs graphiques. Chaque page doit expliquer, rassurer et guider vers une action mesurable. L’objectif : un site rapide, crédible et capable de soutenir votre acquisition locale.',
    cta: { label: 'Créer mon site internet', href: contactUrl('creation-site-internet') },
    secondaryCta: { label: 'Voir les réalisations', href: '/portfolio' },
    sections: [
      {
        title: 'Pour quels projets ?',
        body: ['Le travail peut partir d’une page urgente, d’un site multipage ou d’une application plus ambitieuse.'],
        items: ['Site vitrine', 'Landing page', 'Site multipage SEO', 'Refonte', 'E-commerce', 'Outil métier connecté'],
      },
      {
        title: 'Une structure pensée pour vos prospects',
        body: [
          'Un visiteur doit comprendre vite ce que vous faites, pour qui, pourquoi vous choisir et comment vous contacter. La structure éditoriale sert autant la conversion que le référencement.',
        ],
        items: sharedSiteIncludes,
      },
      {
        title: 'Maillage naturel',
        body: ['Le hub création relie les services spécialisés et les zones locales sans créer de pages interchangeables.'],
        items: ['Site vitrine en 24h', 'Création à Cognac', 'Création à Angoulême', 'Création à Saintes', 'Refonte et maintenance'],
      },
      { title: 'Méthode', body: ['Le projet avance avec des validations simples et des priorités claires.'], items: sharedProcess },
    ],
    faqs: [
      ['Combien coûte un site internet ?', 'Le prix dépend du périmètre, du nombre de pages, des contenus et des fonctionnalités. Un cadrage rapide permet de chiffrer sans inventer un forfait artificiel.'],
      ['Faut-il un site one page ou multipage ?', 'Le one page suffit parfois pour démarrer. Le multipage devient préférable si plusieurs services, zones ou intentions SEO doivent être travaillés.'],
      ['Puis-je faire évoluer le site ensuite ?', 'Oui. La structure peut démarrer simple puis accueillir de nouvelles pages, un blog, un CRM ou une boutique.'],
    ],
    relatedLinks: [
      ['Site vitrine en 24h', '/site-vitrine-24h'],
      ['Création site internet Cognac', '/creation-site-internet-cognac'],
      ['Refonte site internet', '/refonte-site-internet'],
      ['Audit SEO gratuit', '/audit-seo-gratuit'],
    ],
  },
  {
    slug: 'referencement-local',
    updatedAt: '2026-06-05',
    type: 'service',
    eyebrow: 'SEO local',
    title: 'SEO local : être visible quand vos prospects cherchent près de vous',
    metaTitle: 'SEO local & visibilité Google | Cognac, Angoulême, Saintes',
    metaDescription:
      'Audit, contenus locaux, structure technique et données enrichies pour améliorer votre visibilité Google à Cognac, Angoulême et Saintes.',
    keywords: ['SEO local', 'référencement Google local', 'visibilité Google Maps'],
    canonical: '/referencement-local',
    heroImage: '/assets/services-seo-local-map-dashboard.webp',
    intro:
      'Le SEO local efficace ne consiste pas à répéter des noms de villes. Il s’agit de clarifier votre offre, votre zone réelle, vos preuves et les problèmes que vos clients cherchent à résoudre.',
    cta: { label: 'Recevoir mon audit SEO gratuit', href: contactUrl('audit-seo') },
    secondaryCta: { label: 'Lire le guide Google Maps', href: '/blog/comment-etre-visible-google-maps-cognac' },
    sections: [
      {
        title: 'Ce que j’analyse',
        body: ['L’audit commence par les éléments qui bloquent souvent les entreprises locales.'],
        items: ['Indexation', 'Titles et descriptions', 'Pages locales', 'Maillage interne', 'Fiche Google Business Profile', 'Données structurées'],
      },
      {
        title: 'Contenu local utile',
        body: [
          'Une page locale doit parler du contexte réel de la ville, des métiers concernés, du parcours client et des questions fréquentes. Le contenu visible reste dans le HTML rendu.',
        ],
        items: ['Angles locaux uniques', 'FAQ utile', 'Liens internes naturels', 'Aucune fausse adresse', 'Aucune promesse de première place garantie'],
      },
      {
        title: 'Google et assistants IA',
        body: [
          'Les assistants IA s’appuient sur des informations claires, cohérentes et bien structurées. Le site doit exposer les services, zones, coordonnées et preuves de manière lisible.',
        ],
        items: ['Schema.org', 'llms.txt', 'FAQ', 'Pages de services', 'Portfolio structuré'],
      },
      { title: 'Méthode', body: ['Le SEO se travaille par priorités, pas par agitation.'], items: sharedProcess },
    ],
    faqs: [
      ['Le SEO local garantit-il une première place ?', 'Non. Personne ne peut garantir une première place durable. L’objectif est d’améliorer les signaux, la structure et la pertinence.'],
      ['Faut-il créer une page par ville ?', 'Seulement si chaque page apporte un contenu réellement utile et distinct. Sinon, mieux vaut une page zones d’intervention sobre.'],
      ['La fiche Google Business Profile compte-t-elle ?', 'Oui. Elle doit être cohérente avec le site, les services et le NAP réel.'],
    ],
    relatedLinks: [
      ['Audit SEO gratuit', '/audit-seo-gratuit'],
      ['SEO IA', '/seo-ia'],
      ['Création site Angoulême', '/creation-site-internet-angouleme'],
      ['Zones d’intervention', '/zones-intervention'],
    ],
  },
  {
    slug: 'audit-seo-gratuit',
    updatedAt: '2026-06-05',
    type: 'service',
    eyebrow: 'Diagnostic offert',
    title: 'Audit SEO gratuit : un plan d’action clair pour votre visibilité',
    metaTitle: 'Audit SEO gratuit | Plan d’action clair en 24h',
    metaDescription:
      'Recevez un audit SEO gratuit de votre site : blocages, priorités, visibilité locale, performance et recommandations concrètes.',
    keywords: ['audit SEO gratuit', 'audit référencement', 'audit visibilité Google'],
    canonical: '/audit-seo-gratuit',
    heroImage: '/assets/audit-seo-target-rocket.webp',
    intro:
      'Un audit utile ne doit pas noyer une entreprise sous cent recommandations. Il doit identifier ce qui bloque vraiment : technique, contenu, structure, maillage, performance ou incohérence locale.',
    cta: { label: 'Demander mon audit gratuit', href: contactUrl('audit-seo') },
    secondaryCta: { label: 'Voir le SEO local', href: '/referencement-local' },
    sections: [
      {
        title: 'Ce que vous recevez',
        body: ['L’objectif est de repartir avec une lecture exploitable, même si vous ne connaissez pas le jargon SEO.'],
        items: ['Blocages prioritaires', 'Opportunités locales', 'Recommandations de titles', 'Pages à créer ou consolider', 'Actions rapides et actions de fond'],
      },
      {
        title: 'Pour qui ?',
        body: ['L’audit est pertinent si votre site existe déjà, si votre visibilité stagne ou si vous préparez une refonte.'],
        items: ['Artisans', 'Commerces', 'PME', 'Associations', 'Organismes de formation', 'Prestataires B2B'],
      },
      {
        title: 'Ce que l’audit ne promet pas',
        body: [
          'Il ne promet pas une première place garantie. Il donne une base honnête pour comprendre les priorités et éviter de dépenser du temps sur les mauvais sujets.',
        ],
        items: ['Pas de volumes inventés', 'Pas de fausses garanties', 'Pas de recommandations génériques copiées-collées'],
      },
      { title: 'Méthode', body: ['Le diagnostic suit un ordre simple.'], items: sharedProcess },
    ],
    faqs: [
      ['L’audit est-il vraiment gratuit ?', 'Oui, il permet d’identifier les priorités et de voir si un accompagnement plus complet est pertinent.'],
      ['Combien de temps faut-il ?', 'Le premier retour vise un délai court, généralement sous 24h ouvrées selon la demande.'],
      ['Dois-je donner un accès à mon site ?', 'Une URL suffit pour un premier regard. Des accès peuvent être utiles ensuite pour vérifier la Search Console ou le CMS.'],
    ],
    relatedLinks: [
      ['Référencement local', '/referencement-local'],
      ['Refonte SEO', '/refonte-site-internet'],
      ['Core Web Vitals', '/blog/core-web-vitals-site-vitrine'],
      ['Contact', contactUrl('audit-seo')],
    ],
  },
  {
    slug: 'seo-ia',
    updatedAt: '2026-06-05',
    type: 'service',
    eyebrow: 'GEO / visibilité IA',
    title: 'SEO IA : rendre votre site compréhensible par Google, ChatGPT et Perplexity',
    metaTitle: 'SEO IA & GEO | Être lisible par ChatGPT et Perplexity',
    metaDescription:
      'Optimisation SEO IA pour PME locales : contenus structurés, schema.org, llms.txt et informations claires pour moteurs génératifs.',
    keywords: ['SEO IA', 'référencement IA', 'GEO', 'llms.txt'],
    canonical: '/seo-ia',
    heroImage: '/assets/about-expertise-dashboard.webp',
    intro:
      'Le SEO IA ne remplace pas le SEO classique. Il ajoute une exigence : rendre votre activité facile à comprendre, citer et vérifier par des moteurs qui synthétisent des réponses.',
    cta: { label: 'Optimiser ma visibilité IA', href: contactUrl('seo-ia') },
    secondaryCta: { label: 'Lire le guide llms.txt', href: '/blog/llms-txt-site-entreprise' },
    sections: [
      {
        title: 'Ce qui compte vraiment',
        body: ['Les assistants IA privilégient les informations claires, sourcées, cohérentes et structurées.'],
        items: ['Pages services explicites', 'FAQ utiles', 'Données structurées', 'llms.txt', 'Maillage interne', 'Absence de fausses preuves'],
      },
      {
        title: 'Pour une PME locale',
        body: [
          'L’enjeu n’est pas de “hacker” ChatGPT. Il est de rendre l’offre, la zone, les coordonnées et les services lisibles sans ambiguïté.',
        ],
        items: ['Description d’activité', 'Zones d’intervention', 'Pages locales uniques', 'Portfolio clair', 'Contact vérifiable'],
      },
      {
        title: 'Limites à respecter',
        body: ['Aucune optimisation sérieuse ne garantit une citation automatique par une IA. On améliore les signaux et la compréhension.'],
        items: ['Pas de promesse abusive', 'Pas de faux avis', 'Pas de chiffres inventés', 'Pas de contenu caché'],
      },
      { title: 'Méthode', body: ['Le travail rejoint le SEO technique, éditorial et local.'], items: sharedProcess },
    ],
    faqs: [
      ['Qu’est-ce que le GEO ?', 'Le Generative Engine Optimization vise à rendre un site plus lisible par les moteurs de réponse et assistants IA.'],
      ['Faut-il un fichier llms.txt ?', 'Il peut aider à présenter les pages et informations clés aux robots IA, mais il ne remplace pas un site bien structuré.'],
      ['Peut-on garantir d’être cité par ChatGPT ?', 'Non. On peut améliorer la clarté, la structure et les signaux, pas contrôler les réponses des modèles.'],
    ],
    relatedLinks: [
      ['llms.txt pour entreprise', '/blog/llms-txt-site-entreprise'],
      ['Schema LocalBusiness', '/blog/schema-localbusiness-seo-local'],
      ['Audit SEO gratuit', '/audit-seo-gratuit'],
      ['Contact', contactUrl('seo-ia')],
    ],
  },
  {
    slug: 'crm-sur-mesure',
    updatedAt: '2026-06-05',
    type: 'service',
    eyebrow: 'Outil métier',
    title: 'CRM sur mesure : gérer clients, devis et relances sans usine à gaz',
    metaTitle: 'CRM sur mesure PME | Devis, relances & suivi client',
    metaDescription:
      'CRM sur mesure pour PME : gestion clients, devis, relances, pipeline et tableaux de bord adaptés à votre manière de travailler.',
    keywords: ['CRM sur mesure', 'outil gestion clients', 'devis relances'],
    canonical: '/crm-sur-mesure',
    heroImage: '/assets/services-crm-pipeline-dashboard.webp',
    intro:
      'Un CRM utile ne doit pas forcer votre entreprise à adopter le vocabulaire d’un logiciel trop lourd. Il doit accompagner vos devis, relances, priorités et suivis réels.',
    cta: { label: 'Cadrer mon CRM', href: contactUrl('crm-sur-mesure') },
    secondaryCta: { label: 'Lire le guide devis et relances', href: '/blog/crm-gerer-devis-relances' },
    sections: [
      {
        title: 'Fonctions possibles',
        body: ['Le CRM est construit autour des actions quotidiennes.'],
        items: ['Fiches clients', 'Pipeline', 'Devis', 'Relances', 'Notes internes', 'Tableaux de bord', 'Exports'],
      },
      {
        title: 'Pourquoi du sur mesure ?',
        body: [
          'Parce qu’un outil trop complet finit souvent inutilisé. Le sur mesure permet de garder la bonne densité : assez puissant pour suivre l’activité, assez simple pour être adopté.',
        ],
        items: ['Interface claire', 'Rôles utilisateurs', 'Données utiles seulement', 'Évolutions progressives'],
      },
      {
        title: 'Connexion au site',
        body: ['Le CRM peut recevoir les demandes du formulaire, qualifier les prospects et préparer les relances.'],
        items: ['Formulaire de contact', 'Tags service', 'Ville', 'Budget', 'Délai', 'Statut de suivi'],
      },
      { title: 'Méthode', body: ['On commence par vos usages, pas par une liste infinie de fonctionnalités.'], items: sharedProcess },
    ],
    faqs: [
      ['Un CRM sur mesure remplace-t-il HubSpot ou Pipedrive ?', 'Il peut remplacer un outil trop lourd pour des besoins ciblés. Si un logiciel existant suffit, il vaut mieux l’utiliser.'],
      ['Peut-on commencer petit ?', 'Oui. Un MVP avec clients, devis et relances peut déjà apporter beaucoup de valeur.'],
      ['Le CRM peut-il évoluer ?', 'Oui, les modules peuvent être ajoutés progressivement selon les usages observés.'],
    ],
    relatedLinks: [
      ['Solutions sur mesure', '/solutions'],
      ['CRM devis relances', '/blog/crm-gerer-devis-relances'],
      ['Contact', contactUrl('crm-sur-mesure')],
    ],
  },
  {
    slug: 'lms-elearning',
    updatedAt: '2026-06-05',
    type: 'service',
    eyebrow: 'Formation en ligne',
    title: 'LMS et e-learning sur mesure pour organismes de formation',
    metaTitle: 'LMS sur mesure | Plateforme e-learning organisme formation',
    metaDescription:
      'Création de LMS sur mesure : parcours, ressources, espace apprenant, suivi et interface adaptée aux organismes de formation.',
    keywords: ['LMS sur mesure', 'plateforme e-learning', 'organisme formation'],
    canonical: '/lms-elearning',
    heroImage: '/assets/services-lms-course-dashboard.webp',
    intro:
      'Une plateforme e-learning doit être simple pour l’apprenant et fiable pour l’équipe qui administre les contenus. Le sur mesure permet d’adapter les parcours au réel, sans empiler des plugins.',
    cta: { label: 'Créer ma plateforme LMS', href: contactUrl('lms-elearning') },
    secondaryCta: { label: 'Lire le guide LMS', href: '/blog/lms-elearning-organisme-formation' },
    sections: [
      {
        title: 'Fonctions possibles',
        body: ['Le périmètre dépend de votre modèle pédagogique.'],
        items: ['Parcours', 'Ressources', 'Quiz', 'Suivi progression', 'Espace apprenant', 'Gestion formateurs', 'Certificats si requis'],
      },
      {
        title: 'Pour quels organismes ?',
        body: ['Le LMS peut servir une école, un organisme privé, une association ou une entreprise qui forme ses équipes.'],
        items: ['Organismes de formation', 'Écoles', 'Associations', 'Entreprises', 'Programmes internes'],
      },
      {
        title: 'SEO et acquisition',
        body: [
          'Le site public peut présenter les formations et capter les demandes, pendant que l’espace LMS reste réservé aux apprenants.',
        ],
        items: ['Pages formations', 'FAQ', 'Formulaire qualifié', 'Articles pédagogiques', 'Données structurées'],
      },
      { title: 'Méthode', body: ['On sépare le marketing, l’administration et l’expérience apprenant.'], items: sharedProcess },
    ],
    faqs: [
      ['Faut-il partir d’un LMS existant ?', 'Si Moodle ou un autre outil répond déjà au besoin, il peut être pertinent. Le sur mesure se justifie quand les parcours ou interfaces sont spécifiques.'],
      ['Peut-on intégrer des paiements ?', 'Oui, si le modèle économique le demande. Le cadrage détermine le niveau de complexité nécessaire.'],
      ['Le LMS est-il accessible ?', 'L’accessibilité doit être pensée dès la structure : labels, contrastes, navigation clavier et contenus lisibles.'],
    ],
    relatedLinks: [
      ['LMS organisme formation', '/blog/lms-elearning-organisme-formation'],
      ['Accessibilité RGAA', '/blog/accessibilite-rgaa-site-pme'],
      ['Contact', contactUrl('lms-elearning')],
    ],
  },
  {
    slug: 'ecommerce-sur-mesure',
    updatedAt: '2026-06-05',
    type: 'service',
    eyebrow: 'Boutique en ligne',
    title: 'E-commerce sur mesure : vendre en ligne sans subir un thème générique',
    metaTitle: 'E-commerce sur mesure Charente | Alternative Shopify PME',
    metaDescription:
      'Création de boutique en ligne sur mesure : parcours d’achat rapide, SEO, catalogue, paiement et alternative à Shopify pour PME.',
    keywords: ['e-commerce sur mesure', 'boutique en ligne rapide', 'alternative Shopify'],
    canonical: '/ecommerce-sur-mesure',
    heroImage: '/assets/services-ecommerce-cart-dashboard.webp',
    intro:
      'Une boutique performante ne se résume pas à un catalogue. Elle doit rassurer, guider, réduire les frictions et rester rapide, surtout sur mobile.',
    cta: { label: 'Créer ma boutique sur mesure', href: contactUrl('ecommerce-sur-mesure') },
    secondaryCta: { label: 'Lire alternative Shopify', href: '/blog/alternative-shopify-sur-mesure' },
    sections: [
      {
        title: 'Ce que peut contenir la boutique',
        body: ['Le périmètre se définit selon vos produits, vos stocks et vos contraintes de vente.'],
        items: ['Catalogue', 'Fiches produits', 'Panier', 'Paiement', 'Gestion commandes', 'Emails transactionnels', 'SEO produits'],
      },
      {
        title: 'Pourquoi une alternative sur mesure ?',
        body: [
          'Si vos besoins dépassent le thème standard ou si la performance mobile est centrale, une architecture sur mesure peut offrir plus de contrôle.',
        ],
        items: ['Design maîtrisé', 'Performance', 'Parcours d’achat spécifique', 'Intégrations métier', 'SEO technique propre'],
      },
      {
        title: 'Pour les PME locales',
        body: ['La boutique peut relier vente en ligne, retrait local, demande de devis ou catalogue premium.'],
        items: ['Commerces', 'Artisans', 'Producteurs', 'Maisons de cognac', 'Marques locales'],
      },
      { title: 'Méthode', body: ['On valide le modèle de vente avant de développer.'], items: sharedProcess },
    ],
    faqs: [
      ['Shopify est-il toujours insuffisant ?', 'Non. Shopify peut être très pertinent. Le sur mesure se justifie quand les contraintes de design, performance ou métier deviennent fortes.'],
      ['Peut-on démarrer avec peu de produits ?', 'Oui, une boutique courte et bien structurée peut être plus efficace qu’un catalogue trop vaste.'],
      ['Le SEO produit est-il prévu ?', 'Oui : structure, fiches, métadonnées, maillage et performance sont intégrés.'],
    ],
    relatedLinks: [
      ['E-commerce sans Shopify', '/blog/ecommerce-sans-shopify-pme'],
      ['Alternative Shopify', '/blog/alternative-shopify-sur-mesure'],
      ['Contact', contactUrl('ecommerce-sur-mesure')],
    ],
  },
  {
    slug: 'refonte-site-internet',
    updatedAt: '2026-06-05',
    type: 'service',
    eyebrow: 'Modernisation',
    title: 'Refonte de site internet : moderniser sans perdre le SEO',
    metaTitle: 'Refonte site internet | Refonte SEO & modernisation',
    metaDescription:
      'Refonte de site internet avec reprise SEO : structure, redirections, performance, design moderne et parcours de conversion clair.',
    keywords: ['refonte site internet', 'refonte SEO', 'moderniser site web'],
    canonical: '/refonte-site-internet',
    heroImage: '/assets/about-expertise-dashboard.webp',
    intro:
      'Une refonte réussie améliore l’image du site sans casser ce qui fonctionne déjà. Les URLs, contenus utiles, redirections et signaux SEO doivent être traités avant la mise en ligne.',
    cta: { label: 'Préparer ma refonte', href: contactUrl('refonte-site-internet') },
    secondaryCta: { label: 'Demander un audit SEO', href: contactUrl('audit-seo') },
    sections: [
      {
        title: 'Ce qu’il faut sécuriser',
        body: ['La refonte commence par un inventaire, pas par une maquette.'],
        items: ['URLs existantes', 'Pages qui rankent', 'Backlinks', 'Contenus à conserver', 'Redirections 301', 'Canonical et sitemap'],
      },
      {
        title: 'Ce que la refonte améliore',
        body: ['Le nouveau site doit être plus clair, plus rapide et plus convaincant.'],
        items: ['Design', 'Performance', 'Mobile', 'Copywriting', 'Formulaires', 'Maillage interne'],
      },
      {
        title: 'Sans perdre le référencement',
        body: [
          'Les anciennes pages importantes ne doivent pas disparaître sans équivalent. Les redirections et le sitemap évitent les ruptures inutiles.',
        ],
        items: ['Plan de redirection', 'Audit post-mise en ligne', 'Contrôle Search Console', 'Vérification liens cassés'],
      },
      { title: 'Méthode', body: ['La refonte se déroule par étapes validées.'], items: sharedProcess },
    ],
    faqs: [
      ['Une refonte peut-elle faire baisser le trafic ?', 'Oui si elle est mal préparée. C’est pour cela que l’audit des URLs, contenus et redirections est prioritaire.'],
      ['Faut-il garder WordPress ?', 'Cela dépend des usages. Une refonte peut rester sur WordPress ou passer vers une stack plus légère si le besoin le justifie.'],
      ['Quand lancer la refonte ?', 'Quand le site actuel freine la conversion, la performance, la maintenance ou le SEO.'],
    ],
    relatedLinks: [
      ['Refonte sans perdre le SEO', '/blog/refonte-site-internet-cognac-sans-perdre-seo'],
      ['Audit SEO gratuit', '/audit-seo-gratuit'],
      ['Maintenance site web', '/maintenance-site-web'],
      ['Contact', contactUrl('refonte-site-internet')],
    ],
  },
  {
    slug: 'maintenance-site-web',
    updatedAt: '2026-06-05',
    type: 'service',
    eyebrow: 'Suivi',
    title: 'Maintenance de site web : garder un site rapide, fiable et à jour',
    metaTitle: 'Maintenance site web | Suivi, sécurité & évolutions',
    metaDescription:
      'Maintenance de site web : mises à jour, surveillance, corrections, optimisation continue et évolutions pour sites vitrines et outils sur mesure.',
    keywords: ['maintenance site web', 'support site internet', 'évolution site web'],
    canonical: '/maintenance-site-web',
    heroImage: '/assets/process-section-developer-working.webp',
    intro:
      'Un site n’est jamais vraiment terminé. Il doit rester sécurisé, rapide, compatible avec les navigateurs, cohérent avec votre offre et capable d’évoluer au rythme de votre activité.',
    cta: { label: 'Maintenir mon site', href: contactUrl('maintenance-site-web') },
    secondaryCta: { label: 'Voir la refonte', href: '/refonte-site-internet' },
    sections: [
      {
        title: 'Ce qui peut être suivi',
        body: ['La maintenance dépend de la stack et de la criticité du site.'],
        items: ['Mises à jour', 'Corrections', 'Sauvegardes', 'Performance', 'Petites évolutions', 'Vérification formulaires', 'Monitoring'],
      },
      {
        title: 'Pour éviter les dérives',
        body: [
          'Un site lent, cassé ou obsolète perd des demandes. La maintenance limite les surprises et garde une base saine pour le SEO.',
        ],
        items: ['Images trop lourdes', 'Liens cassés', 'Formulaires muets', 'Dépendances obsolètes', 'Contenus dépassés'],
      },
      {
        title: 'Amélioration continue',
        body: ['Le suivi peut aussi intégrer des ajustements de conversion et de référencement.'],
        items: ['CTA', 'FAQ', 'Pages services', 'Articles', 'Maillage', 'Données structurées'],
      },
      { title: 'Méthode', body: ['On distingue maintenance corrective, préventive et évolutive.'], items: sharedProcess },
    ],
    faqs: [
      ['La maintenance est-elle obligatoire ?', 'Elle est fortement recommandée dès qu’un site sert à générer des demandes ou à vendre.'],
      ['Peut-on maintenir un site existant non créé par Théo Multimédia ?', 'Oui, après audit technique pour comprendre la stack et les risques.'],
      ['La maintenance inclut-elle le SEO ?', 'Elle peut inclure des ajustements SEO, mais une stratégie de contenu large se cadre séparément.'],
    ],
    relatedLinks: [
      ['Refonte site internet', '/refonte-site-internet'],
      ['Audit SEO gratuit', '/audit-seo-gratuit'],
      ['Contact', contactUrl('maintenance-site-web')],
    ],
  },
];

const localPageBase = {
  siteIncludes: sharedSiteIncludes,
  method: [
    'Échange rapide sur votre activité, vos concurrents et vos priorités locales.',
    'Structure de page et textes pensés pour votre audience dans la ville ciblée.',
    'Design, développement, optimisation mobile et bases SEO locales.',
    'Mise en ligne, vérification des liens, schema, sitemap et CTA.',
  ],
};

export const localPages = [
  {
    slug: 'creation-site-internet-angouleme',
    updatedAt: '2026-06-05',
    type: 'local',
    city: 'Angoulême',
    eyebrow: 'Angoulême / Grand Angoulême',
    title: 'Création de site internet à Angoulême pour les entreprises qui veulent être vues et choisies',
    metaTitle: 'Création site internet Angoulême | Site vitrine & SEO',
    metaDescription:
      'Agence web en Charente pour créer un site rapide, clair et optimisé SEO à Angoulême. Site vitrine, refonte, audit et visibilité locale.',
    keywords: ['création site internet Angoulême', 'agence web Angoulême', 'développeur web Angoulême'],
    canonical: '/creation-site-internet-angouleme',
    heroImage: '/assets/background-office-agency-dark.webp',
    intro:
      'Angoulême a une identité forte : image, création, BD, animation, culture, commerces, artisans et PME. Un site web local doit refléter cette exigence visuelle tout en restant clair, rapide et orienté contact.',
    professionals: [
      'Studios créatifs, graphistes, acteurs culturels et structures liées à l’image.',
      'Artisans et entreprises du bâtiment qui veulent montrer leur savoir-faire.',
      'Commerces, restaurants et services de proximité du Grand Angoulême.',
      'PME B2B qui ont besoin d’un site crédible pour leurs prospects.',
    ],
    localSeo:
      'Pour Angoulême, le contenu doit éviter la page locale interchangeable. On travaille plutôt le contexte créatif de la ville, les usages mobiles, la lisibilité des offres et les liens vers les pages utiles : site vitrine, refonte, SEO local et audit.',
    uniqueAngles: [
      'Narration visuelle et identité de marque.',
      'Pages conçues pour rassurer vite un prospect local.',
      'Structure adaptée aux recherches “création site internet Angoulême” sans bourrage.',
      'Maillage vers les services et les contenus SEO liés à la Charente.',
    ],
    detailSections: [
      {
        title: 'Un site qui respecte l’identité créative d’Angoulême',
        body: [
          'À Angoulême, l’image compte. Une entreprise locale peut travailler dans le bâtiment, la restauration, le service B2B ou la culture : dans tous les cas, son site doit montrer une vraie personnalité sans devenir difficile à lire. La direction artistique sert donc la compréhension. Les couleurs, les visuels, les rythmes de section et les appels à l’action doivent aider le visiteur à comprendre qui vous êtes et pourquoi vous contacter.',
          'La ville a un rapport naturel à la création visuelle avec la bande dessinée, l’animation, l’image et les événements culturels. Une page locale crédible peut utiliser cet angle sans caricature : narration, hiérarchie, identité, preuves et mise en scène du savoir-faire. Le but n’est pas de faire “joli” pour faire joli, mais de créer un site qui donne envie d’aller plus loin.',
        ],
      },
      {
        title: 'Une structure claire pour les artisans, commerces et PME',
        body: [
          'Un prospect local arrive souvent avec une question simple : est-ce que cette entreprise comprend mon besoin, travaille dans ma zone et peut me répondre vite ? Le site doit répondre avant même que la personne ne fasse défiler longtemps. Les services principaux, la zone d’intervention, les preuves réelles disponibles et le formulaire doivent être visibles et cohérents.',
          'Pour un artisan à Angoulême, les pages peuvent mettre l’accent sur les prestations et la demande de devis. Pour un commerce, les horaires, l’adresse, les photos et l’offre sont prioritaires. Pour une PME, la crédibilité, les cas d’usage et la qualité de présentation deviennent plus importants. Le site doit adapter son rythme à ces attentes.',
        ],
      },
      {
        title: 'SEO local sans page clonée',
        body: [
          'Une page “création site internet Angoulême” ne doit pas être la copie d’une page Cognac avec un nom remplacé. Elle doit aborder le contexte local, les métiers concernés, les questions fréquentes et les liens utiles. C’est ce qui rend la page plus utile pour un visiteur et plus cohérente pour Google.',
          'Le maillage interne relie ensuite cette page aux services : site vitrine en 24h, refonte, audit SEO gratuit, SEO local et portfolio. Les ancres restent naturelles. On évite les répétitions lourdes et on garde un contenu lisible, parce qu’une page locale efficace doit d’abord être une bonne page de vente.',
        ],
      },
      {
        title: 'Après la mise en ligne : mesurer et enrichir',
        body: [
          'Le lancement n’est pas la fin du travail. Pour une entreprise d’Angoulême, les premières semaines servent à observer les demandes reçues, les pages consultées, les formulaires utilisés et les questions qui reviennent. Ces signaux permettent d’ajuster les titres, d’ajouter une FAQ, de renforcer une page service ou de créer un article ciblé.',
          'Cette logique évite de tout produire d’un coup sans savoir ce qui sert vraiment. On peut commencer par un site vitrine rapide, puis enrichir avec une page refonte, un guide prix, une page artisan ou un article sur le SEO local. Le site garde ainsi une trajectoire claire : lancement rapide, amélioration utile, contenu validé par les besoins réels.',
          'Pour les entreprises créatives ou culturelles, cette phase permet aussi de préciser le ton, les visuels et les contenus qui méritent d’être mis en avant. Pour les artisans et PME, elle sert souvent à mieux qualifier les demandes : type de chantier, urgence, budget, zone, disponibilité. Le site devient alors un support vivant plutôt qu’une vitrine figée.',
        ],
      },
    ],
    faqs: [
      ['Travaillez-vous physiquement à Angoulême ?', 'J’accompagne les entreprises d’Angoulême et du Grand Angoulême, sans revendiquer une adresse physique locale non confirmée.'],
      ['Un site créatif peut-il rester rapide ?', 'Oui. L’esthétique ne doit pas sacrifier la performance : images optimisées, structure légère et animations maîtrisées.'],
      ['Quelle page créer pour une entreprise angoumoisine ?', 'Souvent une page service claire, une page à propos crédible, des réalisations et un contact visible suffisent pour démarrer.'],
    ],
    relatedLinks: [
      ['Création de site internet', '/creation-site-internet'],
      ['Refonte de site internet', '/refonte-site-internet'],
      ['SEO local', '/referencement-local'],
      ['Audit SEO gratuit', '/audit-seo-gratuit'],
      ['Contact', contactUrl('creation-site-internet-angouleme')],
    ],
    ...localPageBase,
  },
  {
    slug: 'creation-site-internet-cognac',
    updatedAt: '2026-06-05',
    type: 'local',
    city: 'Cognac',
    eyebrow: 'Cognac / Charente',
    title: 'Agence web à Cognac : un site rapide, élégant et pensé pour générer des contacts',
    metaTitle: 'Agence web Cognac | Création site internet & SEO local',
    metaDescription:
      'Création de sites internet à Cognac : site vitrine, refonte, SEO local, design sur mesure et accompagnement direct avec Théo Multimédia.',
    keywords: ['agence web Cognac', 'création site internet Cognac', 'SEO local Cognac'],
    canonical: '/creation-site-internet-cognac',
    heroImage: '/assets/background-cognac-local-night.webp',
    intro:
      'Cognac demande une image soignée : maisons de négoce, spiritueux, tourisme, artisans, restaurants, prestataires B2B. Le site doit inspirer confiance, rester rapide sur mobile et soutenir la visibilité locale sans surjouer le premium.',
    professionals: [
      'Maisons de cognac, marques, activités liées aux spiritueux et au tourisme.',
      'Restaurants, commerces, artisans et indépendants de Cognac.',
      'Prestataires B2B qui veulent une présence locale crédible.',
      'Entreprises qui visent aussi une clientèle hors Charente ou internationale.',
    ],
    localSeo:
      'À Cognac, le SEO local gagne à relier l’image premium, la confiance et la recherche mobile. La page doit expliquer l’offre, clarifier les coordonnées, relier Google Business Profile et éviter les textes génériques.',
    uniqueAngles: [
      'Design élégant, sobre et crédible.',
      'Parcours mobile clair pour demandes rapides.',
      'SEO local Cognac intégré dès la structure.',
      'Possibilité de contenus bilingues ou premium si le marché le demande.',
    ],
    detailSections: [
      {
        title: 'Une image premium qui reste rapide',
        body: [
          'À Cognac, beaucoup d’activités ont besoin d’une image soignée : spiritueux, tourisme, restauration, commerce, artisanat ou services B2B. Le site doit inspirer confiance, mais il ne doit pas devenir lourd. Un visuel premium mal optimisé peut ralentir la page, gêner le mobile et faire perdre des demandes.',
          'Le design doit donc être précis : contraste, espaces, visuels compressés, typographies lisibles, animations légères et CTA visibles. L’objectif n’est pas de copier les codes du luxe partout, mais de créer une impression de sérieux adaptée à votre activité. Une entreprise locale peut être accessible tout en ayant une présentation haut de gamme.',
        ],
      },
      {
        title: 'Cognac : tourisme, maisons, commerces et B2B',
        body: [
          'Une maison de cognac n’a pas les mêmes besoins qu’un restaurant, un commerce ou un prestataire professionnel. Certains sites doivent raconter une histoire, d’autres doivent pousser vers la réservation, la demande de devis ou le contact commercial. Le cadrage commence donc par la décision que le visiteur doit pouvoir prendre rapidement.',
          'Pour une activité liée au tourisme, la page doit être claire sur l’expérience proposée. Pour un commerce, elle doit rassurer sur l’offre, les horaires et le contact. Pour une PME B2B, elle doit montrer la compétence, expliquer les services et faciliter une prise de rendez-vous. Le SEO local vient soutenir cette structure, pas la remplacer.',
        ],
      },
      {
        title: 'SEO local à Cognac avec des signaux cohérents',
        body: [
          'La visibilité locale à Cognac dépend d’un ensemble de signaux : page claire, fiche Google Business Profile cohérente, coordonnées vérifiables, services bien nommés, contenus utiles et maillage interne. Il ne sert à rien d’accumuler le mot “Cognac” si la page ne répond pas aux questions du visiteur.',
          'La stratégie consiste à relier la page locale aux services utiles, aux articles de blog et au portfolio. On peut par exemple lier une page sur les maisons de cognac, une page e-commerce ou un guide Google Maps. Chaque lien doit aider le visiteur à avancer, sinon il devient décoratif.',
        ],
      },
      {
        title: 'Faire évoluer le site avec l’activité',
        body: [
          'À Cognac, une activité peut changer de saison, lancer une nouvelle offre, préparer un événement, ouvrir une boutique en ligne ou vouloir mieux qualifier ses demandes. Le site doit pouvoir suivre cette évolution. Une architecture propre permet d’ajouter une page service, un article, une landing page ou un module métier sans repartir de zéro.',
          'La maintenance et le suivi ont donc une vraie valeur : vérifier les formulaires, garder les images optimisées, corriger les liens, enrichir les contenus et contrôler les données structurées. Un site local ne gagne pas seulement à être lancé vite ; il gagne à rester fiable, clair et aligné avec l’offre réelle de l’entreprise.',
          'Cette approche convient particulièrement aux activités premium ou touristiques, où l’offre évolue avec les saisons, les événements et les temps forts commerciaux. Une page peut d’abord présenter l’essentiel, puis recevoir une section dédiée aux visites, une FAQ, une page produit, une demande de devis ou une landing page de campagne. Le site reste cohérent au lieu de s’éparpiller. Pour une entreprise cognaçaise, cette cohérence est précieuse : elle protège l’image de marque tout en gardant un parcours simple pour les visiteurs qui veulent seulement comprendre l’offre et prendre contact rapidement.',
        ],
      },
    ],
    faqs: [
      ['Théo Multimédia est-il basé à Cognac ?', 'Le positionnement commercial du site présente Cognac comme base en Charente. Le NAP exact reste à confirmer et à harmoniser avec Google Business Profile.'],
      ['Un site à Cognac doit-il être premium ?', 'Il doit surtout être cohérent avec l’image de l’activité : confiance, clarté, performance et conversion.'],
      ['Puis-je demander une refonte sans perdre le SEO ?', 'Oui, avec inventaire des URLs, contenus à conserver, redirections et contrôle post-lancement.'],
    ],
    relatedLinks: [
      ['Site vitrine en 24h', '/site-vitrine-24h'],
      ['SEO local à Cognac', '/referencement-local'],
      ['Site internet maison de cognac', '/blog/site-internet-maison-de-cognac'],
      ['Refonte SEO', '/refonte-site-internet'],
      ['Contact', contactUrl('creation-site-internet-cognac')],
    ],
    ...localPageBase,
  },
  {
    slug: 'creation-site-internet-saintes',
    updatedAt: '2026-06-05',
    type: 'local',
    city: 'Saintes',
    eyebrow: 'Saintes / Charente-Maritime',
    title: 'Création de site internet à Saintes pour gagner en visibilité locale',
    metaTitle: 'Création site internet Saintes | Site vitrine & SEO local',
    metaDescription:
      'Création de site internet à Saintes pour commerces, artisans et PME : site rapide, responsive, SEO local et pensé pour convertir.',
    keywords: ['création site internet Saintes', 'agence web Saintes', 'référencement local Saintes'],
    canonical: '/creation-site-internet-saintes',
    heroImage: '/assets/background-restaurant-local.webp',
    intro:
      'Saintes réunit commerce local, tourisme, patrimoine, services et artisanat. Un site efficace doit être très lisible sur mobile, faciliter le contact et donner à Google des informations locales cohérentes.',
    professionals: [
      'Commerces, restaurants, hébergements et activités liées au tourisme.',
      'Artisans et services de proximité en Charente-Maritime.',
      'Associations, acteurs culturels et structures locales.',
      'PME qui veulent renforcer leur visibilité entre Saintes, Cognac et la côte.',
    ],
    localSeo:
      'Pour Saintes, la visibilité locale passe par une page claire, des contenus utiles pour les recherches de proximité, une fiche Google Business Profile cohérente et des CTA adaptés aux usages mobiles.',
    uniqueAngles: [
      'Conversion mobile et contact rapide.',
      'Contenu local orienté commerces, tourisme et services.',
      'Référencement local Saintes sans prétendre à une implantation physique non confirmée.',
      'Maillage vers les services utiles et les guides SEO local.',
    ],
    detailSections: [
      {
        title: 'Saintes : commerce local, patrimoine et services',
        body: [
          'Saintes a un tissu local où le commerce, le tourisme, les services et l’artisanat se croisent. Un site internet doit donc être utile à des visiteurs qui cherchent souvent une information immédiate : quoi, où, quand, combien, comment contacter. La page doit éviter les longs discours abstraits et aller vers les réponses concrètes.',
          'Pour une activité touristique ou patrimoniale, les visuels et la clarté du parcours sont importants. Pour un commerce ou un artisan, les horaires, les services, les photos réelles et le téléphone cliquable peuvent faire la différence. Pour une PME, la page doit surtout prouver la fiabilité et rendre le premier échange simple.',
        ],
      },
      {
        title: 'Un parcours mobile pensé pour la demande locale',
        body: [
          'Une grande partie des recherches locales se fait sur mobile. Si le bouton de contact est trop discret, si la page bouge pendant le chargement ou si le formulaire demande trop d’informations, le visiteur peut partir avant même d’avoir comparé votre offre. La performance n’est donc pas seulement technique : elle influence directement la conversion.',
          'La structure recommandée reste simple : une promesse claire, des services compréhensibles, des preuves réelles si elles existent, une zone d’intervention honnête, un CTA intermédiaire et un CTA final. Le site doit permettre une prise de contact rapide, mais aussi rassurer ceux qui veulent lire davantage.',
        ],
      },
      {
        title: 'Référencement local à Saintes sans fausse adresse',
        body: [
          'La page Saintes accompagne les entreprises de la ville sans prétendre à une implantation physique non confirmée. Cette nuance est importante : le SEO local durable repose sur la cohérence. Si le site, la fiche Google et les citations locales disent des choses différentes, le signal devient confus.',
          'Le contenu local doit donc être précis mais sobre : métiers concernés, contexte de la ville, services adaptés, FAQ utile et liens vers les pages pertinentes. La page peut aussi relier un guide Google Business Profile ou un article sur les commerces locaux pour approfondir sans répéter le même texte.',
        ],
      },
      {
        title: 'Transformer la visibilité en demandes concrètes',
        body: [
          'Être visible ne suffit pas si la page ne donne pas envie de contacter l’entreprise. Pour Saintes, le travail de conversion doit rester très pratique : bouton téléphone, formulaire court, message clair, horaires, zone d’intervention et éléments de confiance. Les visiteurs doivent pouvoir agir sans chercher longtemps.',
          'Après la mise en ligne, les contenus peuvent être enrichis selon les demandes reçues : une FAQ sur les tarifs, une page service plus détaillée, une page événementielle ou un article sur la fiche Google Business Profile. Cette progression permet de développer le SEO local avec des contenus utiles plutôt que de multiplier des pages faibles.',
          'Cette logique est importante pour les commerces et services de proximité, car les besoins changent vite : nouvelle offre, saison touristique, horaires, zone desservie, événement local ou campagne publicitaire. Le site doit pouvoir accueillir ces informations sans casser son équilibre. Une base propre permet d’ajouter du contenu utile tout en gardant une lecture simple pour les visiteurs mobiles. Pour une entreprise saintaise, cette simplicité est souvent décisive : elle transforme une recherche locale en appel, message ou demande de devis sans friction inutile, même lors d’une consultation rapide entre deux rendez-vous.',
        ],
      },
    ],
    faqs: [
      ['Avez-vous une adresse à Saintes ?', 'La page accompagne les entreprises de Saintes sans revendiquer une adresse physique dans la ville.'],
      ['Quel type de site pour un commerce à Saintes ?', 'Un site vitrine clair avec horaires, services, photos, avis réels si disponibles et CTA mobile peut déjà générer des demandes.'],
      ['Le SEO local fonctionne-t-il hors Charente ?', 'Oui, à condition de traiter la ville avec un contenu distinct, utile et cohérent avec la zone réellement desservie.'],
    ],
    relatedLinks: [
      ['Création de site internet', '/creation-site-internet'],
      ['Référencement local', '/referencement-local'],
      ['Google Business Profile à Saintes', '/blog/optimiser-fiche-google-business-profile-saintes'],
      ['Zones d’intervention', '/zones-intervention'],
      ['Contact', contactUrl('creation-site-internet-saintes')],
    ],
    ...localPageBase,
  },
];

export const zonesPage = {
  slug: 'zones-intervention',
  updatedAt: '2026-06-05',
  type: 'service',
  eyebrow: 'Zones d’intervention',
  title: 'Zones d’intervention : Cognac, Angoulême, Saintes et alentours',
  metaTitle: 'Zones intervention agence web | Cognac, Angoulême, Saintes',
  metaDescription:
    'Théo Multimédia accompagne les entreprises à Cognac, Angoulême, Saintes, Jarnac, en Charente et Charente-Maritime, sans pages locales artificielles.',
  keywords: ['agence web Charente', 'agence web Cognac', 'création site internet Charente'],
  canonical: '/zones-intervention',
  heroImage: '/assets/contact-map-charente.webp',
  intro:
    'La visibilité locale doit rester honnête. Les zones secondaires sont listées ici sans créer de pages pauvres ou interchangeables.',
  cta: { label: 'Parler de ma zone', href: contactUrl('zones-intervention') },
  secondaryCta: { label: 'Voir le SEO local', href: '/referencement-local' },
  sections: [
    {
      title: 'Zones prioritaires',
      body: ['Les pages dédiées existent uniquement quand un contenu distinct et utile peut être proposé.'],
      items: ['Cognac', 'Angoulême', 'Saintes'],
    },
    {
      title: 'Zones secondaires',
      body: ['Les zones secondaires restent mentionnées de façon sobre pour éviter les doorway pages.'],
      items: ['Jarnac', 'Charente', 'Charente-Maritime', 'Nouvelle-Aquitaine'],
    },
    {
      title: 'Principe SEO',
      body: ['Une page locale n’est utile que si elle apporte un angle différent, des réponses concrètes et un maillage naturel.'],
      items: ['Pas de duplication', 'Pas de fausse adresse', 'Pas de bourrage de mots-clés', 'Pas de résultats inventés'],
    },
  ],
  faqs: [
    ['Pourquoi pas une page pour chaque ville ?', 'Parce qu’une page locale sans contenu distinct ressemble à une doorway page. Les zones secondaires sont mieux traitées ici.'],
    ['Jarnac est-il couvert ?', 'Oui, Jarnac fait partie des zones d’intervention, mais sans page SEO dédiée faute de contenu local suffisant pour l’instant.'],
  ],
  relatedLinks: [
    ['Création site Cognac', '/creation-site-internet-cognac'],
    ['Création site Angoulême', '/creation-site-internet-angouleme'],
    ['Création site Saintes', '/creation-site-internet-saintes'],
    ['Contact', contactUrl('zones-intervention')],
  ],
};

export const contentPages = [...servicePages, ...localPages, zonesPage];

export function getContentPage(slug) {
  return contentPages.find((page) => page.slug === slug);
}
