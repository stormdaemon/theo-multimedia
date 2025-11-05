import { motion } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Link from 'next/link';

const projects = [
  {
    title: 'Révélation Radio',
    category: 'Site vitrine',
    description: "Site vitrine pour une web radio catholique avec présentation des émissions et lecteur audio intégré. Design moderne et expérience utilisateur optimisée.",
    imageUrl: '/revelation.png',
    url: null,
    tags: ['Design', 'Audio', 'Responsive']
  },
  {
    title: 'Fesch 2025',
    category: 'Site promotionnel',
    description: 'Site promotionnel pour le documentaire "Fesch 2025, du non-sens au Mystère" réalisé par Samuel Armnius. Design cinématographique et immersif.',
    imageUrl: '/fesch.png',
    url: 'https://fesch2025.fr/',
    tags: ['Design', 'Marketing', 'Vidéo']
  },
  {
    title: 'Portfolio Théo Lafont',
    category: 'Portfolio personnel',
    description: "Mon portfolio personnel avec React, design contemporain très animé, navigation moderne et expérience utilisateur impactante.",
    imageUrl: '/portfolio.png',
    url: 'https://theo-lafont-portfolio.netlify.app/',
    tags: ['React', 'Animations', 'Portfolio']
  },
  {
    title: 'Heaven Radio',
    category: 'Web radio',
    description: "Successeur de Révélation Radio, nouvelle web radio avec expérience audio enrichie et design repensé. Interface moderne et intuitive.",
    imageUrl: '/heavenradio.png',
    url: 'https://heavenradio.fr/',
    tags: ['Audio', 'Streaming', 'Design']
  },
  {
    title: 'BR16BATIMENT',
    category: 'Site vitrine',
    description: "Site vitrine professionnel pour un artisan bâtiment avec présentation des services, portfolio de réalisations et formulaire de contact.",
    imageUrl: '/BR16BAPTIMENT.png',
    url: 'https://br16batiment.netlify.app/',
    tags: ['Vitrine', 'SEO', 'Responsive']
  },
  {
    title: "Le Baptême Catholique",
    category: "Landing page",
    description: "Landing page de génération de leads pour accompagner les personnes vers le baptême. Design épuré et parcours utilisateur optimisé.",
    imageUrl: "/baptemecatholique.png",
    url: "https://lebaptemecatholique.fr/",
    tags: ['Landing', 'Conversion', 'SEO']
  },
  {
    title: "TRACKWARS",
    category: "Application web",
    description: "Jeu de blind test musical innovant conçu pour les professionnels de l'événementiel. Interface ludique et performante.",
    imageUrl: "/trackwars.png",
    url: "https://trackwars.fr/",
    tags: ['Gaming', 'React', 'Audio']
  }
];

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'Site vitrine', 'Web radio', 'Application web', 'Landing page'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <>
      <Head>
        <title>Mon Portfolio - Mes réalisations | Théo Multimédia</title>
        <meta name="description" content="Découvrez mes réalisations : sites internet modernes, applications web et projets digitaux que j'ai créés pour mes clients." />
        <meta name="author" content="Théo LAFONT" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theomultimedia.com/portfolio" />
        <meta property="og:title" content="Mon Portfolio | Théo Multimédia" />
        <meta property="og:description" content="Découvrez mes réalisations web et digitales." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/portfolio" />
      </Head>

      <div className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
              >
                <span className="text-sm font-medium text-accent">Portfolio</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                Mes réalisations<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-500 to-accent">
                  qui inspirent
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
                Une sélection de projets qui reflètent ma passion pour le design,
                le développement et l'innovation digitale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === cat
                      ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                      : 'bg-card border border-border hover:border-accent/30 text-foreground/70 hover:text-foreground'
                  }`}
                >
                  {cat === 'all' ? 'Tous les projets' : cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              layout
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-muted mb-6">
                    {project.imageUrl && (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        priority={false}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.url && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white text-accent rounded-full font-medium hover:scale-110 transition-transform"
                          >
                            Voir le projet
                          </a>
                        </div>
                      )}
                    </div>
                    {!project.url && (
                      <div className="absolute top-4 right-4 px-4 py-2 bg-black/50 backdrop-blur-sm text-white text-sm rounded-full">
                        Projet confidentiel
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-accent font-medium">{project.category}</span>
                      <div className="h-1 w-1 rounded-full bg-foreground/20" />
                      <div className="flex gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs text-foreground/50">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { value: `${projects.length}+`, label: "Projets réalisés" },
                { value: "100%", label: "Clients satisfaits" },
                { value: "24h", label: "Livraison possible" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-accent to-blue-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-10 p-16 rounded-[3rem] bg-gradient-to-br from-accent via-blue-500 to-accent relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 2 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                  Votre projet sera le prochain ?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto font-light mb-10">
                  Je suis prêt à créer quelque chose d'extraordinaire pour vous.
                  Discutons de votre vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-accent rounded-full text-lg font-medium hover:scale-105 transition-transform">
                    Démarrer mon projet
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full text-lg font-medium hover:bg-white/20 transition-all">
                    Voir mes services
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PortfolioPage;
