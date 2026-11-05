const article = {
  slug: 'crm-gerer-devis-relances',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'CRM pour gérer devis et relances : les fonctions à prévoir',
  metaTitle: 'CRM devis et relances : statuts, rappels, modèles',
  description: 'Suivez chaque devis, de l’envoi à la signature : statuts, rappels datés, modèles de relance et tableau de bord. Le flux d’un CRM sur mesure, étape par étape.',
  keyword: 'CRM simple pour gérer devis et relances',
  category: 'Sur mesure',
  city: null,
  readingMinutes: 5,
  answer: 'Un CRM pour devis et relances suit chaque dossier dans un parcours court : brouillon, envoyé, à relancer, signé ou perdu. Des rappels datés indiquent la prochaine action, des modèles de messages accélèrent les relances et un tableau de bord montre les devis en attente. Le but est simple : savoir à tout moment qui relancer et quand.',
  intro: [
    'Beaucoup de prestataires envoient leurs devis par mail, puis oublient de relancer. Le document part, la réponse n’arrive pas, et l’affaire disparaît sans bruit. Un CRM règle ce problème précis, à condition d’être construit autour du geste quotidien : répondre, relancer, signer.',
    'Cet article suit le chemin d’un devis, du premier envoi jusqu’à la signature, tel qu’il peut être construit sur mesure. Il ne s’agit pas d’empiler des fonctions, mais de rendre visibles les étapes qui font gagner ou perdre un dossier.',
  ],
  sections: [
    {
      title: 'Quelles étapes un devis traverse-t-il dans le CRM ?',
      paragraphs: [
        'Un devis passe rarement directement de l’envoi à la signature. Le CRM doit représenter son cycle de vie avec peu de statuts. Au-delà de quelques étapes, l’équipe cesse de les renseigner correctement. Évitez les statuts vagues, du type « en discussion » : un statut doit déclencher une action précise, sinon personne ne le met à jour.',
      ],
      items: [
        'Brouillon : devis créé, pas encore envoyé.',
        'Envoyé : date d’envoi et version du document conservées.',
        'À relancer : échéance fixée automatiquement après l’envoi.',
        'Signé ou perdu : motif noté, utile pour les devis suivants.',
      ],
    },
    {
      title: 'Comment programmer les rappels sans les subir ?',
      paragraphs: [
        'Un rappel utile tient en une date et une action : « Relancer le client mardi pour le devis de rénovation ». Une alerte générique du type « devis en attente » ne dit pas quoi faire, et finit ignorée. Le CRM doit afficher en premier les rappels du jour, et non l’ensemble des dossiers.',
        'L’écart entre deux relances dépend du secteur et de la taille du projet. Fixez-le avec l’équipe, puis ajustez-le selon les réponses constatées pendant quelques mois.',
        'Concrètement, un lundi matin, la personne ouvre le CRM et voit trois rappels : deux relances à passer, un devis à clôturer. Elle traite la liste en quelques minutes, sans fouiller dans sa boîte mail.',
      ],
    },
    {
      title: 'Quels modèles de messages préparer pour relancer ?',
      paragraphs: [
        'Trois modèles couvrent la plupart des cas. Chacun reprend les champs du devis, numéro, montant et date de validité, pour éviter les copier-coller approximatifs.',
      ],
      items: [
        'Relance douce, quelques jours après l’envoi : rappel du devis et disponibilité pour répondre.',
        'Relance précise : question sur un point du devis, une option ou un délai.',
        'Message de clôture : le dossier est fermé, la porte reste ouverte pour plus tard.',
      ],
    },
    {
      title: 'Que doit montrer le tableau de bord ?',
      paragraphs: [
        'Le tableau de bord répond à trois questions : combien de devis attendent une réponse, quel montant est en jeu, et quelles relances sont en retard. Il sert à décider de la prochaine action, et non à produire des graphiques.',
        'Commencez avec cinq indicateurs au plus. Retirez ceux que personne ne consulte au bout de quelques semaines.',
        'Un indicateur utile répond à une question posée chaque matin. S’il ne change aucune décision, il n’a pas sa place sur l’écran d’accueil.',
      ],
    },
    {
      title: 'Comment passer de la signature à la facturation ?',
      paragraphs: [
        'À la signature, le statut change et la fiche client conserve la version acceptée du devis. La facturation reprend les mêmes lignes, sans ressaisie. En cas de désaccord, le devis d’origine reste retrouvable avec sa date et son auteur.',
        'Si vous utilisez une signature électronique, gardez le lien entre le document signé et la fiche, sans ressaisie.',
      ],
    },
    {
      title: 'Quels champs garder dans la fiche devis ?',
      paragraphs: [
        'La fiche devis ne doit pas tout contenir. Quelques champs suffisent à retrouver un dossier et à le relancer sans ouvrir le document.',
      ],
      items: [
        'Référence unique, date d’envoi et date de validité.',
        'Interlocuteur, moyen de contact préféré et adresse du chantier.',
        'Montant, conditions de paiement et version du document joint.',
        'Auteur de l’envoi, pour savoir à qui poser une question.',
      ],
    },
  ],
  takeaways: [
    'Un CRM de devis se résume à un parcours de statuts et à des rappels datés.',
    'Un rappel doit nommer une action et une échéance, sinon il est ignoré.',
    'Trois modèles de relance suffisent pour démarrer.',
    'Le tableau de bord doit aider à décider, avec peu d’indicateurs.',
  ],
  faqs: [
    ['Faut-il un CRM quand on envoie peu de devis ?', 'Pas forcément. Il devient utile quand les relances se perdent ou quand plusieurs personnes suivent les mêmes clients. Avant cela, une liste de rappels bien tenue peut suffire.'],
    ['Peut-on relancer automatiquement ?', 'Oui, à condition de garder une validation humaine pour les dossiers importants. L’automatisation envoie un rappel à la personne, qui décide ensuite du message.'],
    ['Combien de temps prend la mise en place ?', 'Cela dépend des statuts à définir et des outils à relier. Un cadrage court, suivi d’un test sur de vrais dossiers, évite la plupart des reprises.'],
    ['Faut-il former toute l’équipe ?', 'Oui, mais en peu de temps. Une session courte sur les statuts principaux suffit au départ, puis les questions se règlent au fil des usages.'],
  ],
  sources: [],
  links: [
    ['CRM sur mesure', '/crm-sur-mesure'],
    ['CRM simple pour PME en Charente', '/blog/crm-simple-pme-charente'],
    ['Demander un devis', '/contact'],
  ],
};

export default article;
