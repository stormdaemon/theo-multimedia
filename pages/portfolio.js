import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Révélation Radio',
    category: 'Site vitrine',
    description: "Site vitrine pour une web radio catholique, présentation des émissions, lecteur audio intégré",
    imageUrl: '/revelation.png',
    url: null,
  },
  {
    title: 'Fesch 2025',
    category: 'Site promotionnel',
    description: 'Site promotionnel pour le documentaire "Fesch 2025, du non-sens au Mystère" réalisé par Samuel Armnius',
    imageUrl: '/fesch.png',
    url: 'https://fesch2025.fr/',
  },
  {
    title: 'Portfolio de Théo Lafont',
    category: 'Portfolio du Créateur de l\'agence',
    description: "Projet React, Design contemporain très animé, navigation moderne et expérience utilisateur impactante.",
    imageUrl: '/portfolio.png',
    url: 'https://theo-lafont-portfolio.netlify.app/',
  },
  {
    title: 'Heaven Radio',
    category: 'Web radio',
    description: "Successeur de Révélation Radio, nouvelle web radio de la même équipe, expérience audio enrichie et design repensé.",
    imageUrl: '/heavenradio.png',
    url: 'https://heavenradio.fr/',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

import Head from 'next/head';

const PortfolioPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Théo Multimédia - Réalisations Web Angoulême</title>
        <meta name="description" content="Portfolio Théo Multimédia : réalisations web, sites internet modernes et projets e-commerce créés pour nos clients Angoulême." />

        <meta name="author" content="Théo LAFONT" />
        <meta property="og:title" content="Portfolio | Théo Multimédia - Réalisations Web Angoulême" />
        <meta property="og:description" content="Découvrez nos réalisations web : sites internet modernes, e-commerce et projets digitaux créés pour nos clients à Angoulême. Portfolio Théo Multimédia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/portfolio" />
        <meta property="og:image" content="https://www.theomultimedia.com/og-portfolio.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Théo Multimédia - Réalisations Web Angoulême" />
        <meta name="twitter:description" content="Découvrez nos réalisations web : sites internet modernes, e-commerce et projets digitaux créés pour nos clients à Angoulême. Portfolio Théo Multimédia." />
        <meta name="twitter:image" content="https://www.theomultimedia.com/og-portfolio.jpg" />
        <meta name="ai-summary" content="Portfolio de Théo Multimédia : sites web, applications, branding, SEO. Découvrez des exemples concrets de mon expertise digitale." />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Portfolio Théo Multimédia",
          "author": {
            "@type": "Person",
            "name": "Théo LAFONT"
          },
          "description": "Portfolio de Théo Multimédia : sites web, applications, branding, SEO. Découvrez des exemples concrets de mon expertise digitale.",
          "inLanguage": "fr-FR"
        }
        `}</script>
      </Head>
      <motion.div
        initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-24"
    >
      <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-center text-foreground mb-4">
        Portfolio
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        Découvrez mes réalisations de sites internet, webdesign, branding, SEO, e-commerce, applications web, UX/UI et solutions digitales à Angoulême et en Nouvelle-Aquitaine. Chaque projet est conçu sur-mesure pour booster la visibilité, la performance et l’expérience utilisateur de mes clients (entreprises, PME, entrepreneurs, associations).
      </motion.p>

      <motion.div 
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.a 
            key={index} 
            href={project.url || '#'}
            target={project.url ? '_blank' : undefined}
            rel={project.url ? 'noopener noreferrer' : undefined}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 block"
          >
            <div className="overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
            </div>
            <div className="p-6">
              <p className="text-sm font-medium text-accent mb-1">{project.category}</p>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-foreground/70 mt-2 text-sm">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
    </>
  );
};

export default PortfolioPage;
