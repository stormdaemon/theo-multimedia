import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/Footer';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      title: "Sites web sur mesure",
      description: "Je crée des sites internet qui reflètent votre identité et convertissent vos visiteurs en clients. Design moderne, responsive et optimisé.",
      icon: "💻"
    },
    {
      title: "Design & Expérience",
      description: "J'accorde une attention particulière à chaque détail pour créer des interfaces intuitives et des expériences utilisateur mémorables.",
      icon: "✨"
    },
    {
      title: "Référencement naturel",
      description: "J'optimise votre présence en ligne pour vous rendre visible sur Google. Des résultats mesurables et durables.",
      icon: "🚀"
    },
    {
      title: "Support & Maintenance",
      description: "Je vous accompagne sur le long terme avec un support réactif et des mises à jour régulières pour votre tranquillité d'esprit.",
      icon: "🛡️"
    }
  ];

  const projects = [
    { name: "E-commerce Mode", category: "Boutique en ligne" },
    { name: "Portfolio Architecte", category: "Site vitrine" },
    { name: "Application SaaS", category: "Web app" },
    { name: "Restaurant", category: "Site vitrine" }
  ];

  return (
    <>
      <Head>
        <title>Théo Multimédia - Votre site web en 24h | Création de sites internet à Angoulême</title>
        <meta name="description" content="Je crée votre site internet professionnel en 24h. Agence web à Angoulême spécialisée en création de sites, design et référencement SEO." />
        <meta name="author" content="Théo LAFONT" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theomultimedia.com/" />
        <meta property="og:title" content="Théo Multimédia - Votre site web en 24h" />
        <meta property="og:description" content="Je crée votre site internet professionnel en 24h. Agence web à Angoulême." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/" />
        <meta property="og:image" content="https://www.theomultimedia.com/og-image.jpg" />
      </Head>

      <div className="overflow-hidden bg-background">
        {/* Hero Section - Apple Style */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />

          {/* Animated cursor follower */}
          <motion.div
            className="pointer-events-none fixed inset-0 z-0"
            animate={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--accent) / 0.05), transparent 40%)`
            }}
            transition={{ type: "tween", ease: "linear", duration: 0.2 }}
          />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-8"
            >
              {/* 24h Badge - Super prominent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                  <span className="text-sm font-medium text-accent">Livraison en 24 heures</span>
                </div>
              </motion.div>

              {/* Main Heading - Large Apple-style typography */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none"
              >
                Votre site web.
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-500 to-accent">
                  En 24 heures.
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Je transforme vos idées en expériences digitales exceptionnelles.
                Design moderne, développement rapide, résultats garantis.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <Link href="/contact" className="btn btn-primary text-base px-8 py-4">
                  Démarrer mon projet
                </Link>
                <Link href="/portfolio" className="btn btn-secondary text-base px-8 py-4">
                  Voir mes créations
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex items-center justify-center gap-8 pt-12 text-sm text-foreground/50"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span>Rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎨</span>
                  <span>Design moderne</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span>Sécurisé</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-2"
            >
              <div className="w-1 h-2 bg-foreground/40 rounded-full" />
            </motion.div>
          </motion.div>
        </section>

        {/* Large 24h Delivery Section */}
        <section className="py-32 px-6 bg-gradient-to-br from-accent via-blue-500 to-accent relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>

          <div className="container mx-auto max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center text-white space-y-8"
            >
              <div className="text-7xl md:text-9xl font-bold mb-4">24h</div>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                De l'idée au site en ligne
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                Vous avez besoin d'un site rapidement ? Je m'engage à livrer votre projet
                en 24 heures. Sans compromis sur la qualité.
              </p>
              <div className="pt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-accent rounded-full text-lg font-medium hover:scale-105 transition-transform">
                  Je veux mon site en 24h
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                Ce que je fais
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light">
                Des solutions complètes pour propulser votre présence en ligne
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-3xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-12">
              {[
                { value: "50+", label: "Projets livrés" },
                { value: "24h", label: "Délai de livraison" },
                { value: "100%", label: "Satisfaction client" },
                { value: "10+", label: "Années d'expertise" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
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

        {/* Recent Work Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-between items-end mb-16"
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
                  Mes derniers projets
                </h2>
                <p className="text-xl text-foreground/60 font-light">
                  Des réalisations qui parlent d'elles-mêmes
                </p>
              </div>
              <Link href="/portfolio" className="hidden md:inline-flex items-center gap-2 text-accent hover:gap-4 transition-all">
                Voir tous les projets
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-blue-500/20 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🖥️</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-foreground/60">{project.category}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12 md:hidden"
            >
              <Link href="/portfolio" className="btn btn-secondary">
                Voir tous les projets
              </Link>
            </motion.div>
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
              className="text-center space-y-10 p-16 rounded-[3rem] bg-gradient-to-br from-muted/50 to-muted/30 border border-border"
            >
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
                Prêt à lancer<br />votre projet ?
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light">
                Discutons de votre projet et voyons comment je peux vous aider
                à atteindre vos objectifs en ligne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contact" className="btn btn-primary text-lg px-10 py-5">
                  Me contacter
                </Link>
                <Link href="/about" className="btn btn-secondary text-lg px-10 py-5">
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
