import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCode, FaPaintBrush, FaRocket, FaSearch, FaMobileAlt, FaChartLine, FaServer } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const services = [
  {
    icon: <FaPaintBrush className="w-8 h-8 text-accent" />,
    title: 'Webdesign & UX/UI à Angoulême',
    description: "Je conçois des interfaces web modernes, créatives et intuitives à Angoulême, optimisées pour l’expérience utilisateur, le branding, l’identité visuelle et la conversion. Responsive design, accessibilité, design mobile first et animations interactives.",
    features: [
      'Webdesign créatif et identité visuelle',
      'Maquettes interactives UX/UI',
      'Tests utilisateurs et accessibilité',
      'Design system et charte graphique'
    ]
  },
  {
    icon: <FaCode className="w-8 h-8 text-accent" />,
    title: 'Création de site internet à Angoulême',
    description: "Développement de sites vitrines, e-commerce, applications web sur-mesure, refonte, optimisation SEO, sécurité, rapidité, solutions digitales pour entreprises, PME, associations et entrepreneurs en Charente et Nouvelle-Aquitaine.",
    features: [
      'Site vitrine, site e-commerce',
      'Développement web sur-mesure',
      'Applications web et web app',
      'API, intégration WordPress, maintenance'
    ]
  },
  {
    icon: <FaMobileAlt className="w-8 h-8 text-accent" />,
    title: 'Applications mobiles & web app',
    description: "Création d’applications mobiles iOS/Android et web app performantes, ergonomiques et sécurisées. Solutions cloud, intégration API, design mobile first, expérience utilisateur optimale.",
    features: [
      'Applications mobiles iOS & Android',
      'Web app responsive',
      'Intégration API, cloud',
      'Publication sur stores et maintenance'
    ]
  },
  {
    icon: <FaSearch className="w-8 h-8 text-accent" />,
    title: 'SEO & Référencement naturel à Angoulême',
    description: "Optimisation SEO avancée, référencement local Angoulême, Google My Business, rédaction web, netlinking, stratégie de contenu, audit SEO, Core Web Vitals, visibilité Google et moteurs de recherche.",
    features: [
      'Audit SEO et optimisation technique',
      'Stratégie de contenu & rédaction SEO',
      'Netlinking, Google My Business',
      'Référencement local Angoulême'
    ]
  },
  {
    icon: <FaChartLine className="w-8 h-8 text-accent" />,
    title: 'Analyse & Performance digitale',
    description: "Analyse de données, Google Analytics, A/B testing, optimisation des performances web, tableaux de bord, suivi SEO, amélioration continue pour booster votre présence digitale à Angoulême.",
    features: [
      'Google Analytics, suivi SEO',
      'A/B Testing, reporting',
      'Optimisation des performances web',
      'Tableaux de bord personnalisés'
    ]
  },
  {
    icon: <FaServer className="w-8 h-8 text-accent" />,
    title: 'Hébergement sécurisé & Maintenance web',
    description: "Hébergement web haute disponibilité, maintenance proactive, sauvegardes automatiques, sécurité, monitoring, support technique, SSL, cloud, protection des données à Angoulême et partout en France.",
    features: [
      'Hébergement sécurisé, cloud',
      'Sauvegardes, mises à jour',
      'Maintenance et monitoring',
      'Support technique, SSL'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

import Head from 'next/head';

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Services agence web Angoulême | Création site internet, webdesign, SEO, branding, e-commerce | Théo Multimédia</title>
        <meta name="description" content="Découvrez tous les services de l'agence web Théo Multimédia à Angoulême : création de site internet, webdesign, référencement naturel (SEO), identité visuelle, branding, e-commerce, UX/UI, maintenance, hébergement, stratégie digitale, communication digitale, solutions sur-mesure pour entreprises, PME, associations et entrepreneurs en Charente et Nouvelle-Aquitaine." />
        <meta name="keywords" content="agence web Angoulême, webdesign Angoulême, création site internet Angoulême, agence digitale Angoulême, développement web Angoulême, refonte site internet, site vitrine Angoulême, site e-commerce Angoulême, référencement naturel Angoulême, SEO Angoulême, UX design Angoulême, UI design Angoulême, identité visuelle Angoulême, graphisme Angoulême, communication digitale Angoulême, stratégie digitale Angoulême, webdesigner Angoulême, développeur web Angoulême, site responsive Angoulême, site WordPress Angoulême, site sur-mesure Angoulême, maintenance site internet Angoulême, hébergement web Angoulême, audit SEO Angoulême, optimisation SEO Angoulême, Google My Business Angoulême, réseaux sociaux Angoulême, community management Angoulême, marketing digital Angoulême, création logo Angoulême, charte graphique Angoulême, print Angoulême, flyers Angoulême, carte de visite Angoulême, agence communication Angoulême, landing page Angoulême, newsletter Angoulême, emailing Angoulême, boutique en ligne Angoulême, site mobile Angoulême, web app Angoulême, application web Angoulême, web responsive Angoulême, site rapide Angoulême, site sécurisé Angoulême, SSL Angoulême, Google Analytics Angoulême, Google Ads Angoulême, campagne publicitaire Angoulême, rédaction web Angoulême, contenu optimisé SEO Angoulême, storytelling Angoulême, site professionnel Angoulême, site entreprise Angoulême, site association Angoulême, site événementiel Angoulême, portfolio Angoulême, site créatif Angoulême, site moderne Angoulême, site performant Angoulême, site intuitif Angoulême, expérience utilisateur Angoulême, accessibilité web Angoulême, design mobile first Angoulême, design interactif Angoulême, animation web Angoulême, Framer Motion Angoulême, React Angoulême, Next.js Angoulême, Tailwind CSS Angoulême, JavaScript Angoulême, HTML Angoulême, CSS Angoulême, site rapide au chargement Angoulême, site optimisé Google Angoulême, site internet pas cher Angoulême, site internet professionnel Angoulême, site internet clé en main Angoulême, site internet personnalisé Angoulême, agence webdesign Angoulême, agence web Théo Multimédia, Théo Multimédia Angoulême, créateur site internet Angoulême, freelance web Angoulême, expert web Angoulême, accompagnement digital Angoulême, conseil digital Angoulême, digitalisation entreprise Angoulême, solutions digitales Angoulême, innovation web Angoulême, transformation digitale Angoulême, visibilité internet Angoulême, présence en ligne Angoulême, référencement Google Angoulême, web agency Angoulême, web agency France, web agency Nouvelle-Aquitaine, agence web Nouvelle-Aquitaine" />
        <meta name="author" content="Théo LAFONT" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theomultimedia.com/services" />
        <meta property="og:title" content="Services agence web Angoulême | Création site internet, webdesign, SEO, branding, e-commerce | Théo Multimédia" />
        <meta property="og:description" content="Agence web à Angoulême : création de site internet, webdesign, SEO, identité visuelle, e-commerce, UX/UI, maintenance, hébergement, solutions digitales sur-mesure. Demandez un devis gratuit pour booster votre présence en ligne !" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/services" />
        <meta property="og:image" content="https://www.theomultimedia.com/og-services.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Théo Multimédia - Agence Web Angoulême" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services agence web Angoulême | Création site internet, webdesign, SEO, branding, e-commerce | Théo Multimédia" />
        <meta name="twitter:description" content="Découvrez tous les services de l'agence web Théo Multimédia à Angoulême : création de site internet, webdesign, SEO, identité visuelle, e-commerce, UX/UI, maintenance, solutions digitales sur-mesure. Demandez un devis gratuit !" />
        <meta name="twitter:image" content="https://www.theomultimedia.com/og-services.jpg" />
        <meta name="ai-summary" content="Services web sur-mesure : développement, design, SEO, hébergement, maintenance. J'accompagne les entreprises et entrepreneurs dans la réussite de leur projet digital." />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Développement web, Design UX/UI, SEO, Hébergement, Maintenance",
          "provider": {
            "@type": "Person",
            "name": "Théo LAFONT"
          },
          "areaServed": "France, International",
          "description": "Services web sur-mesure : développement, design, SEO, hébergement, maintenance. J'accompagne les entreprises et entrepreneurs dans la réussite de leur projet digital.",
          "inLanguage": "fr-FR"
        }
        `}</script>
      </Head>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-4 pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.span 
              variants={itemVariants}
              className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
            >
              Mes Services
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            >
              Des solutions sur mesure pour votre succès en ligne
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Je combine créativité et expertise technique pour vous offrir des solutions numériques qui vous permettent d'atteindre vos objectifs commerciaux.
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-accent/30"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <FiArrowRight className="w-4 h-4 mr-2 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="text-sm font-medium text-accent hover:text-accent/80 flex items-center transition-colors">
                  En savoir plus
                  <FiArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/5 to-purple-500/5">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à concrétiser votre projet ?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Notre équipe est à votre disposition pour discuter de vos besoins et vous proposer la solution la plus adaptée à vos objectifs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition-colors"
                >
                  Discuter de mon projet
                </Link>
                <Link 
                  href="/portfolio" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border font-medium hover:bg-accent/5 transition-colors"
                >
                  Voir nos réalisations
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ServicesPage;
