import { motion } from 'framer-motion';
import StatNumber from '../components/StatNumber';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaCode, FaMobileAlt, FaChartLine, FaServer } from 'react-icons/fa';
import Head from 'next/head';
import Footer from '../components/Footer';

const Home = () => {
  const ref = useRef(null);
  const heroRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState('100vh');

  useEffect(() => {
    const calculateHeroHeight = () => {
      const header = document.querySelector('header');
      if (header && heroRef.current) {
        const headerHeight = header.getBoundingClientRect().height;
        // On soustrait 1px pour éviter tout débordement dû aux arrondis de calcul
        setHeroHeight(`calc(100vh - ${headerHeight}px - 1px)`);
        
        // Ajustement du padding top pour que le contenu soit collé à la navbar
        const heroContent = heroRef.current.firstElementChild;
        if (heroContent) {
          heroContent.style.paddingTop = '0';
        }
      }
    };

    // On attend que le DOM soit complètement chargé
    const timer = setTimeout(calculateHeroHeight, 0);
    
    // On réajuste lors du redimensionnement
    window.addEventListener('resize', calculateHeroHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', calculateHeroHeight);
    };
  }, []);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const features = [
    {
      title: "Création de site internet à Angoulême",
      description: "Développement de sites vitrines, e-commerce, applications web sur-mesure, refonte, responsive design, accessibilité, performance, sécurité, optimisation SEO, Google, WordPress, solutions digitales pour PME, entreprises, associations et entrepreneurs à Angoulême et partout en France.",
      icon: <FaCode className="w-6 h-6 text-accent" />
    },
    {
      title: "Webdesign & UX/UI professionnel",
      description: "Design web créatif, identité visuelle, branding, expérience utilisateur (UX), interface intuitive (UI), maquettes interactives, charte graphique, animation web, mobile first, design moderne et attractif pour booster la visibilité de votre marque à Angoulême.",
      icon: <FaMobileAlt className="w-6 h-6 text-accent" />
    },
    {
      title: "Référencement naturel (SEO) & Performance",
      description: "Optimisation SEO avancée, audit, stratégie de contenu, rédaction web optimisée, référencement local, Google My Business, netlinking, rapidité de chargement, Core Web Vitals, visibilité sur Google et moteurs de recherche.",
      icon: <FaChartLine className="w-6 h-6 text-accent" />
    },
    {
      title: "Hébergement sécurisé & Maintenance",
      description: "Hébergement web haute disponibilité, maintenance proactive, sauvegardes automatiques, mises à jour de sécurité, support technique, SSL, monitoring, solutions cloud, protection des données, accompagnement digital à Angoulême et partout en France.",
      icon: <FaServer className="w-6 h-6 text-accent" />
    }
  ];
  
  const stats = [
    { value: "50+", label: "Sites internet, e-commerce & webdesign réalisés à Angoulême" },
    { value: "95%", label: "Clients satisfaits (SEO, branding, UX/UI, digital)" },
    { value: "99.9%", label: "Taux de disponibilité (hébergement sécurisé, maintenance)" },
    { value: "+10", label: "ans d’expertises en création digitale, SEO, web à Angoulême" }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <Head>
        <title>Agence webdesign Angoulême | Création site internet, SEO, branding, e-commerce | Théo Multimédia</title>
        <meta name="description" content="Théo Multimédia, agence web à Angoulême : création de site internet, webdesign, SEO, refonte, site vitrine, e-commerce, identité visuelle, référencement naturel, maintenance, hébergement, UX/UI, communication digitale, solutions sur-mesure pour entreprises, PME, associations et entrepreneurs en Charente et Nouvelle-Aquitaine." />
        <meta name="keywords" content="agence web Angoulême, webdesign Angoulême, création site internet Angoulême, agence digitale Angoulême, développement web Angoulême, refonte site internet, site vitrine Angoulême, site e-commerce Angoulême, référencement naturel Angoulême, SEO Angoulême, UX design Angoulême, UI design Angoulême, identité visuelle Angoulême, graphisme Angoulême, communication digitale Angoulême, stratégie digitale Angoulême, webdesigner Angoulême, développeur web Angoulême, site responsive Angoulême, site WordPress Angoulême, site sur-mesure Angoulême, maintenance site internet Angoulême, hébergement web Angoulême, audit SEO Angoulême, optimisation SEO Angoulême, Google My Business Angoulême, réseaux sociaux Angoulême, community management Angoulême, marketing digital Angoulême, création logo Angoulême, charte graphique Angoulême, print Angoulême, flyers Angoulême, carte de visite Angoulême, agence communication Angoulême, landing page Angoulême, newsletter Angoulême, emailing Angoulême, boutique en ligne Angoulême, site mobile Angoulême, web app Angoulême, application web Angoulême, web responsive Angoulême, site rapide Angoulême, site sécurisé Angoulême, SSL Angoulême, Google Analytics Angoulême, Google Ads Angoulême, campagne publicitaire Angoulême, rédaction web Angoulême, contenu optimisé SEO Angoulême, storytelling Angoulême, site professionnel Angoulême, site entreprise Angoulême, site association Angoulême, site événementiel Angoulême, portfolio Angoulême, site créatif Angoulême, site moderne Angoulême, site performant Angoulême, site intuitif Angoulême, expérience utilisateur Angoulême, accessibilité web Angoulême, design mobile first Angoulême, design interactif Angoulême, animation web Angoulême, Framer Motion Angoulême, React Angoulême, Next.js Angoulême, Tailwind CSS Angoulême, JavaScript Angoulême, HTML Angoulême, CSS Angoulême, site rapide au chargement Angoulême, site optimisé Google Angoulême, site internet pas cher Angoulême, site internet professionnel Angoulême, site internet clé en main Angoulême, site internet personnalisé Angoulême, agence webdesign Angoulême, agence web Théo Multimédia, Théo Multimédia Angoulême, créateur site internet Angoulême, freelance web Angoulême, expert web Angoulême, accompagnement digital Angoulême, conseil digital Angoulême, digitalisation entreprise Angoulême, solutions digitales Angoulême, innovation web Angoulême, transformation digitale Angoulême, visibilité internet Angoulême, présence en ligne Angoulême, référencement Google Angoulême, web agency Angoulême, web agency France, web agency Nouvelle-Aquitaine, agence web Nouvelle-Aquitaine" />
        <meta name="author" content="Théo LAFONT" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theomultimedia.com/" />
        <meta property="og:title" content="Agence webdesign Angoulême | Création site internet, SEO, branding, e-commerce | Théo Multimédia" />
        <meta property="og:description" content="Agence web à Angoulême spécialisée en création de site internet, webdesign, référencement naturel (SEO), identité visuelle, e-commerce, UX/UI, maintenance, hébergement et solutions digitales sur-mesure pour les entreprises et entrepreneurs en Charente. Contactez Théo Multimédia pour booster votre visibilité et transformer votre présence digitale !" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/" />
        <meta property="og:image" content="https://www.theomultimedia.com/og-image.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Théo Multimédia - Agence Web Angoulême" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agence webdesign Angoulême | Création site internet, SEO, branding, e-commerce | Théo Multimédia" />
        <meta name="twitter:description" content="Agence web à Angoulême : création de site internet, webdesign, SEO, identité visuelle, e-commerce, UX/UI, maintenance, solutions digitales sur-mesure. Demandez un devis gratuit !" />
        <meta name="twitter:image" content="https://www.theomultimedia.com/og-image.jpg" />
      
        <meta name="twitter:title" content="Création de sites web et solutions digitales sur-mesure | Théo Multimédia" />
        <meta name="twitter:description" content="Je conçois et développe des solutions web innovantes, performantes et accessibles. Contactez-moi pour donner vie à vos idées !" />
        <meta name="twitter:image" content="https://www.theomultimedia.com/og-image.jpg" />
        <meta name="ai-summary" content="Développeur web freelance à Silicon Valley, j'accompagne les entreprises et entrepreneurs dans la création de sites internet, applications web et solutions digitales performantes, accessibles et orientées résultats." />
        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Théo Multimédia",
          "url": "https://www.theomultimedia.com/",
          "author": {
            "@type": "Person",
            "name": "Théo LAFONT"
          },
          "description": "Je conçois et développe des sites internet, applications web et solutions digitales innovantes pour entrepreneurs, PME et associations.",
          "inLanguage": "fr-FR"
        }
        `}</script>
      </Head>
      <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex items-start justify-center px-4 overflow-hidden"
        style={{ minHeight: heroHeight, height: heroHeight }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-accent">Je suis actuellement disponible pour de nouveaux projets</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
                Agence web située à Angoulême : création de sites internet & SEO
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
Spécialiste en création de sites internet, webdesign et référencement (SEO) à Angoulême. Développement sur-mesure, responsive et optimisé pour Google.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <Link 
                href="/contact" 
                className="btn btn-primary group"
              >
                <span>Démarrer un projet</span>
                <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/portfolio" 
                className="btn btn-secondary group"
              >
                <span>Voir mes réalisations</span>
                <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated grid background */}
          <div className="absolute inset-0 -z-10 opacity-20">
            <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,black,transparent)]" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 mb-4" style={{bottom: '2rem'}}>
          <div className="animate-bounce w-8 h-12 border-2 border-foreground/20 rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-3 bg-foreground/70 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent mb-4">
              Mes expertises
            </span>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Je conçois et développe des solutions web sur mesure pour vous aider à vous démarquer en ligne et à atteindre vos objectifs numériques.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Des solutions complètes pour votre présence en ligne
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Je combine créativité et technologie pour vous offrir des solutions numériques sur mesure qui répondent à vos objectifs business.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            ref={ref}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-card p-6 rounded-xl border border-border/20 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                variants={item}
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <StatNumber key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-accent/5 to-purple-500/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                Prêt à donner vie à votre projet ?
              </motion.h2>
              <motion.p 
                className="text-foreground/70 mb-8 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Contactez-moi dès aujourd'hui pour discuter de votre projet et voir comment je peux vous aider à atteindre vos objectifs numériques.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <Link href="/contact" className="btn btn-primary group">
                  <span>Me contacter</span>
                  <FaArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  </>
  );
};

export default Home;