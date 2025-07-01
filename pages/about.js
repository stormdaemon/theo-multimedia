import { motion } from 'framer-motion';
import { Emoji } from 'react-apple-emojis';


const values = [
  {
    icon: <Emoji name="light-bulb" width={48} />,
    title: 'Innovation web & digitale',
    description: "J’innove sans cesse pour proposer des solutions web, sites internet, branding et expériences digitales à la pointe, adaptées aux besoins des entreprises, PME et entrepreneurs à Angoulême et partout en France.",
  },
  {
    icon: <Emoji name="busts-in-silhouette" width={48} />,
    title: 'Collaboration & accompagnement',
    description: "Chaque projet web, site vitrine, e-commerce ou refonte est co-construit avec vous : écoute, conseils, accompagnement digital personnalisé, pour un résultat sur-mesure qui valorise votre activité et votre image de marque.",
  },
  {
    icon: <Emoji name="red-heart" width={48} />,
    title: 'Passion du webdesign',
    description: "Le webdesign, la création de sites internet, l’UX/UI, le référencement naturel (SEO) et la performance digitale sont ma passion. J’apporte un soin extrême à chaque détail pour garantir un site moderne, intuitif, performant et visible sur Google.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>À Propos | Théo Multimédia - Développeur Web Angoulême</title>
        <meta name="description" content="Découvrez Théo, développeur web passionné à Angoulême. Spécialisé en création de sites modernes, SEO et solutions digitales sur-mesure pour entreprises." />

        <meta name="author" content="Théo LAFONT" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theomultimedia.com/about" />
        <meta property="og:title" content="À Propos | Théo Multimédia - Développeur Web Angoulême" />
        <meta property="og:description" content="Découvrez Théo, développeur web passionné à Angoulême. Spécialisé en création de sites modernes, SEO et solutions digitales sur-mesure pour entreprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/about" />
        <meta property="og:image" content="https://www.theomultimedia.com/og-about.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Théo Multimédia - Agence Web Angoulême" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À Propos | Théo Multimédia - Développeur Web Angoulême" />
        <meta name="twitter:description" content="Découvrez Théo, développeur web passionné à Angoulême. Spécialisé en création de sites modernes, SEO et solutions digitales sur-mesure pour entreprises." />
        <meta name="twitter:image" content="https://www.theomultimedia.com/og-about.jpg" />
        <meta name="ai-summary" content="À propos de Théo Multimédia : agence web à Angoulême, expert création site internet, webdesign, SEO, branding, accompagnement digital pour entreprises et entrepreneurs." />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "À propos Théo Multimédia",
          "author": {
            "@type": "Person",
            "name": "Théo LAFONT"
          },
          "description": "À propos de Théo Multimédia : agence web à Angoulême, expert création site internet, webdesign, SEO, branding, accompagnement digital pour entreprises et entrepreneurs.",
          "inLanguage": "fr-FR"
        }
        `}</script>
      </Head>
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        variants={containerVariants}
        className="container mx-auto px-4 py-24"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
              Qui suis-<span className="text-accent">je</span> ?
            </h1>
            <p className="text-lg text-foreground/80 mb-6">
              Je suis Théo, créateur de Théo Multimédia, agence web à Angoulême spécialisée en création de site internet, webdesign, SEO, branding, UX/UI, e-commerce, identité visuelle et solutions digitales sur-mesure. Ma mission : booster la visibilité, la performance et la notoriété des entreprises, PME, associations et entrepreneurs en Charente et Nouvelle-Aquitaine grâce à des sites modernes, performants, sécurisés et optimisés pour Google.
            </p>
            <p className="text-gray-400">
              Je crois en un web ouvert, accessible, rapide et innovant. Chaque projet est conçu pour offrir une expérience utilisateur optimale, un référencement naturel efficace, une identité forte et une présence digitale durable. Mon expertise couvre le développement web, le design interactif, la stratégie digitale, la maintenance et l’accompagnement personnalisé.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="w-full flex items-center justify-center">
            <img src="/theo_multimedia.png" alt="Théo Multimédia" className="rounded-xl shadow-lg border-2 border-accent w-full max-w-xs object-cover" />
          </motion.div>
        </div>
      <motion.div variants={containerVariants} className="mt-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Mes Valeurs Fondamentales</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center p-6">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default AboutPage;
