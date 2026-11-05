const article = {
  slug: 'seo-site-web-radio-podcast',
  publishedAt: '2026-06-05',
  updatedAt: '2026-11-05',
  title: 'SEO web radio et podcast : structurer les épisodes pour être trouvé',
  metaTitle: 'SEO web radio et podcast : épisodes et transcriptions',
  description: 'Pages d’épisodes, transcriptions, données structurées et lecteur rapide : les bases du SEO pour une web radio ou un podcast, étape par étape.',
  keyword: 'SEO web radio podcast',
  category: 'GEO & IA',
  city: null,
  readingMinutes: 5,
  answer: 'Le SEO d’une web radio ou d’un podcast repose sur du texte. Chaque épisode doit avoir sa propre page, avec un titre clair, un résumé, les invités et les thèmes, ainsi qu’une transcription lisible. Ces éléments donnent aux moteurs de recherche et aux assistants IA de quoi comprendre et citer le contenu audio.',
  intro: [
    'Un moteur de recherche n’écoute pas un épisode. Il lit le titre, la page, le texte qui l’accompagne et les données structurées. Une web radio qui publie seulement un lecteur audio sur une page vide reste donc invisible, même avec un contenu excellent.',
    'Cet article s’adresse aux médias audio qui veulent être trouvés : émissions, thèmes, invités, archives. Il se concentre sur la structure des pages et sur les textes, pas sur la diffusion dans les plateformes d’écoute.',
  ],
  sections: [
    {
      title: 'Quelle page pour chaque épisode ?',
      paragraphs: [
        'Chaque épisode doit avoir une adresse propre et stable, ainsi qu’une page qui lui est dédiée. Un épisode enfoui dans une liste, ou joué dans un lecteur sans adresse, n’a pas de raison d’être trouvé. La page d’épisode est l’unité de base du référencement audio.',
      ],
      items: [
        'Un titre qui nomme le sujet, et l’invité si c’est pertinent.',
        'La date de publication et la durée de l’épisode.',
        'Un résumé de quelques phrases, rédigé pour être lu sans écouter.',
        'Des liens vers l’émission et vers les épisodes voisins par le sujet.',
      ],
    },
    {
      title: 'Comment rédiger le résumé et la transcription ?',
      paragraphs: [
        'Le résumé répond à la question « de quoi parle cet épisode ? ». Il tient en deux ou trois phrases précises, sans formule vague comme « un moment unique ». La transcription donne le texte intégral : elle permet de retrouver une phrase exacte et de citer une idée avec précision.',
        'Une transcription se relit. Les noms propres doivent être corrects, les intertitres marquent les changements de sujet, et les passages inaudibles se signalent plutôt que d’être devinés.',
      ],
    },
    {
      title: 'Quelles données structurées ajouter ?',
      paragraphs: [
        'Les données structurées décrivent la page dans un format lisible par les machines. Pour un épisode, les types les plus courants sont PodcastEpisode et PodcastSeries, selon le cas. Renseignez uniquement les informations exactes : pas de fausse date, pas d’auteur inventé, pas de note fabriquée.',
        'Voici un exemple fictif, à adapter aux données réelles de votre émission. Il ne remplace pas le texte visible sur la page.',
      ],
      code: '{\n  "@context": "https://schema.org",\n  "@type": "PodcastEpisode",\n  "name": "Épisode 12 : le marché du samedi",\n  "datePublished": "2026-10-03",\n  "description": "Résumé de l’épisode en deux phrases.",\n  "partOfSeries": {\n    "@type": "PodcastSeries",\n    "name": "Émission Exemple"\n  }\n}',
    },
    {
      title: 'Comment garder un lecteur rapide ?',
      paragraphs: [
        'Le lecteur audio se trouve souvent en haut de page. Il doit charger sans bloquer le texte : privilégiez un lecteur léger, chargez les scripts tiers après le contenu et évitez les intégrations lourdes au-dessus de la ligne de flottaison.',
        'Le texte de l’épisode doit être présent dans le HTML, même si le lecteur charge plus tard. Un visiteur qui arrive sur mobile lit d’abord le titre et le résumé, puis décide d’écouter. Les indicateurs Core Web Vitals, LCP et INP en tête, mesurent cette expérience.',
      ],
    },
    {
      title: 'Comment relier émissions et épisodes ?',
      paragraphs: [
        'Une page d’émission regroupe les épisodes, présente l’équipe et explique les thèmes. Les épisodes renvoient vers l’émission et vers les épisodes proches par le sujet. Une archive bien reliée donne aux moteurs une carte claire du contenu.',
        'Pensez aussi aux anciens épisodes. Un épisode ancien mais toujours utile mérite une page à jour, avec un résumé récent et un lien vers les sujets proches. Il vaut mieux enrichir une archive pertinente que d’en créer une nouvelle qui répète la même chose.',
      ],
      items: [
        'Une page par émission, avec la liste des épisodes.',
        'Une page par thème, si les sujets reviennent régulièrement.',
        'Une page par invité, seulement si sa présence est régulière et documentée.',
      ],
    },
    {
      title: 'Quelles erreurs éviter ?',
      paragraphs: [
        'Les erreurs les plus fréquentes viennent d’une publication rapide, sans relecture ni structure. Elles se corrigent vite si elles sont repérées tôt.',
      ],
      items: [
        'Publier seulement des fichiers audio, sans aucun texte.',
        'Copier la même description sur chaque épisode.',
        'Ajouter des données structurées qui ne correspondent pas au contenu de la page.',
        'Créer des pages d’épisode vides pour gonfler le nombre de pages.',
      ],
    },
  ],
  takeaways: [
    'Chaque épisode doit avoir sa propre page, avec une adresse stable.',
    'Le résumé et la transcription rendent le contenu audio lisible par les moteurs et les assistants IA.',
    'Les données structurées doivent décrire exactement la page, sans rien inventer.',
    'Un lecteur léger et un texte présent dans le HTML protègent la vitesse et la compréhension.',
  ],
  faqs: [
    ['Faut-il transcrire tous les épisodes ?', 'Ce n’est pas obligatoire, mais la transcription est le moyen le plus direct de rendre un épisode lisible. Commencez par les épisodes les plus écoutés ou les plus durables.'],
    ['Un résumé suffit-il sans transcription ?', 'Il suffit pour indiquer le sujet. Pour retrouver une phrase précise ou une citation, la transcription apporte beaucoup plus de matière.'],
    ['Les données structurées garantissent-elles un affichage dans Google ?', 'Non. Elles aident à décrire la page, mais elles ne garantissent ni un affichage enrichi ni une place dans les résultats.'],
    ['Faut-il changer d’hébergeur audio pour mieux référencer ?', 'Non. On peut conserver son hébergeur audio et publier les pages sur son propre site, à condition que le texte et les adresses soient maîtrisés.'],
  ],
  sources: [],
  links: [
    ['Création site internet', '/creation-site-internet'],
    ['SEO IA (GEO)', '/geo-referencement-ia'],
    ['Audit SEO gratuit', '/audit-seo-gratuit'],
    ['Voir nos réalisations', '/portfolio'],
    ['Demander un devis', '/contact'],
  ],
};

export default article;
