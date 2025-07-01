import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Emoji } from 'react-apple-emojis';
import { FaArrowRight } from 'react-icons/fa';
import Head from 'next/head';
import Footer from '../components/Footer';

// Import des nouveaux composants UX/UI 2025
import { InteractiveButton, InteractiveCard } from '../components/MicroInteractions';
import { ParallaxCard, KineticText, BentoGrid, BentoCard, AnimatedProgress } from '../components/ModernEffects';
import { AccessibleButton } from '../components/AccessibilityEnhanced';
import { OptimizedImage, LazyContent, PerformanceMonitor } from '../components/PerformanceOptimized';

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
      icon: <Emoji name="laptop" width={28} />
    },
    {
      title: "Webdesign & UX/UI professionnel",
      description: "Design web créatif, identité visuelle, branding, expérience utilisateur (UX), interface intuitive (UI), maquettes interactives, charte graphique, animation web, mobile first, design moderne et attractif pour booster la visibilité de votre marque à Angoulême.",
      icon: <Emoji name="mobile-phone" width={28} />
    },
    {
      title: "Référencement naturel (SEO) & Performance",
      description: "Optimisation SEO avancée, audit, stratégie de contenu, rédaction web optimisée, référencement local, Google My Business, netlinking, rapidité de chargement, Core Web Vitals, visibilité sur Google et moteurs de recherche.",
      icon: <Emoji name="bar-chart" width={28} />
    },
    {
      title: "Hébergement sécurisé & Maintenance",
      description: "Hébergement web haute disponibilité, maintenance proactive, sauvegardes automatiques, mises à jour de sécurité, support technique, SSL, monitoring, solutions cloud, protection des données, accompagnement digital à Angoulême et partout en France.",
      icon: <Emoji name="desktop-computer" width={28} />
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
      {/* Moniteur de performance pour le développement */}
      <PerformanceMonitor onMetrics={(metrics) => {
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', metrics);
        }
      }} />
      
      <Head>
        <title>Théo Multimédia | Agence Web Angoulême - Sites Internet & SEO</title>
        <meta name="description" content="Agence web à Angoulême spécialisée en création de sites internet, webdesign moderne, SEO et e-commerce. Solutions digitales sur-mesure pour PME et entrepreneurs." />
        <meta name="author" content="Théo LAFONT" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theomultimedia.com/" />
        <meta property="og:title" content="Théo Multimédia | Agence Web Angoulême - Sites Internet & SEO" />
        <meta property="og:description" content="Agence web à Angoulême spécialisée en création de sites internet, webdesign moderne, SEO et e-commerce. Solutions digitales sur-mesure pour PME et entrepreneurs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/" />
        <meta property="og:image" content="https://www.theomultimedia.com/og-image.jpg" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Théo Multimédia - Agence Web Angoulême" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Théo Multimédia | Agence Web Angoulême - Sites Internet & SEO" />
        <meta name="twitter:description" content="Agence web à Angoulême spécialisée en création de sites internet, webdesign moderne, SEO et e-commerce. Solutions digitales sur-mesure pour PME et entrepreneurs." />
        <meta name="twitter:image" content="https://www.theomultimedia.com/og-image.jpg" />
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
        className="relative flex items-start justify-center px-4 py-32 overflow-hidden"
        style={{ minHeight: heroHeight, height: heroHeight }}
        aria-label="Section d'accueil principale"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-background to-background" />
        </div>

        <div className="container mx-auto relative z-10 max-w-6xl">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
              >
                <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-accent">Je suis actuellement disponible pour de nouveaux projets</span>
              </motion.div>
            </div>
            
            <h1 className="sr-only">Théo Multimédia - Agence web à Angoulême spécialisée en création de sites internet et SEO</h1>
            <KineticText 
              text="Agence web à Angoulême"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 leading-tight bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent"
              as="h2"
            />
            <KineticText 
              text="Création de sites web & SEO"
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent block"
              delay={0.5}
              as="h3"
            />
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
Spécialiste en création de sites internet, webdesign et référencement (SEO) à Angoulême. Développement sur-mesure, responsive et optimisé pour Google.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              <Link href="/contact" className="w-full sm:w-64">
                <div className="w-full h-12 px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer group">
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Démarrer un projet</span>
                </div>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-64">
                <div className="w-full h-12 px-6 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-lg font-medium text-lg flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer group">
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Voir mes réalisations</span>
                </div>
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

      {/* Section Fonctionnalités avec Bento Grid */}
      <LazyContent className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-accent/10 text-accent">
                Mes expertises
              </span>
            </div>
            <KineticText 
              text="Des solutions complètes pour votre présence en ligne"
              className="text-3xl md:text-4xl font-bold mb-4"
            />
            <motion.p 
              className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Je conçois et développe des solutions web sur mesure pour vous aider à vous démarquer en ligne et à atteindre vos objectifs numériques.
            </motion.p>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Je combine créativité et technologie pour vous offrir des solutions numériques sur mesure qui répondent à vos objectifs business.
            </p>
          </motion.div>

          <BentoGrid columns={4} className="max-w-6xl mx-auto">
            {features.map((feature, index) => {
              return (
                <BentoCard
                  key={index}
                  size="normal"
                  className="group h-full"
                >
                  <ParallaxCard intensity={0.05} className="h-full flex flex-col">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-foreground/60 flex-grow">{feature.description}</p>
                  </ParallaxCard>
                </BentoCard>
              );
            })}
          </BentoGrid>
        </div>
      </LazyContent>

      {/* Stats Section avec effets modernes */}
      <LazyContent className="py-20 bg-gradient-to-br from-accent via-accent/90 to-purple-600 text-white relative overflow-hidden">
        {/* Effet de grain et texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <KineticText 
              text="Résultats concrets"
              className="text-3xl md:text-4xl font-bold mb-4"
            />
          </motion.div>
          
          <BentoGrid columns={4} className="max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <BentoCard
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
              >
                <ParallaxCard intensity={0.03}>
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 200, 
                      damping: 10,
                      delay: index * 0.1 
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <motion.div 
                    className="text-lg opacity-90"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 0.9, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {stat.label}
                  </motion.div>
                </ParallaxCard>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </LazyContent>

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
                  <Emoji name="right-arrow" width={16} className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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