import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/Footer';

const services = [
  {
    icon: "💻",
    title: 'Sites web professionnels',
    description: "Je crée des sites internet modernes, rapides et optimisés qui représentent parfaitement votre marque et convertissent vos visiteurs en clients.",
    features: [
      'Design sur mesure et responsive',
      'Performance et référencement optimisés',
      'E-commerce et sites vitrines',
      'Livraison en 24h disponible'
    ],
    highlight: true
  },
  {
    icon: "✨",
    title: 'Design & Expérience utilisateur',
    description: "Je conçois des interfaces intuitives et élégantes qui offrent une expérience utilisateur exceptionnelle sur tous les appareils.",
    features: [
      'Interface moderne et intuitive',
      'Prototypes interactifs',
      'Design system cohérent',
      'Tests utilisateurs'
    ]
  },
  {
    icon: "🚀",
    title: 'Référencement SEO',
    description: "J'optimise votre visibilité sur Google pour attirer plus de clients qualifiés et développer votre activité en ligne.",
    features: [
      'Audit SEO complet',
      'Optimisation technique',
      'Stratégie de contenu',
      'Suivi et rapports mensuels'
    ]
  },
  {
    icon: "⚡",
    title: 'Applications web',
    description: "Je développe des applications web performantes et évolutives, adaptées à vos besoins spécifiques et à votre croissance.",
    features: [
      'Architecture moderne',
      'API et intégrations',
      'Sécurité renforcée',
      'Scalabilité garantie'
    ]
  },
  {
    icon: "🎨",
    title: 'Identité visuelle',
    description: "Je crée des identités visuelles mémorables qui vous démarquent de la concurrence et renforcent votre image de marque.",
    features: [
      'Logo et charte graphique',
      'Supports de communication',
      'Brand guidelines',
      'Assets numériques'
    ]
  },
  {
    icon: "🛡️",
    title: 'Support & Maintenance',
    description: "Je vous accompagne au quotidien avec un support réactif, des mises à jour régulières et un hébergement sécurisé.",
    features: [
      'Support technique prioritaire',
      'Mises à jour de sécurité',
      'Sauvegardes automatiques',
      'Monitoring 24/7'
    ]
  }
];

const process = [
  {
    step: "01",
    title: "Découverte",
    description: "Je prends le temps de comprendre votre projet, vos objectifs et votre audience pour proposer la meilleure solution."
  },
  {
    step: "02",
    title: "Conception",
    description: "Je crée des maquettes et prototypes pour valider ensemble la direction créative avant le développement."
  },
  {
    step: "03",
    title: "Développement",
    description: "Je développe votre projet avec les dernières technologies, en assurant qualité et performance."
  },
  {
    step: "04",
    title: "Lancement",
    description: "Je déploie votre projet et vous accompagne pour un lancement réussi avec formation et documentation."
  }
];

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Mes Services - Création de sites web en 24h | Théo Multimédia</title>
        <meta name="description" content="Je crée votre site internet en 24h. Design, développement, SEO et maintenance. Services web professionnels à Angoulême." />
        <meta name="author" content="Théo LAFONT" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theomultimedia.com/services" />
        <meta property="og:title" content="Mes Services - Création de sites web | Théo Multimédia" />
        <meta property="og:description" content="Je crée votre site internet en 24h. Design, développement, SEO et maintenance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/services" />
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
                <span className="text-sm font-medium text-accent">Mes services</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                Des solutions digitales<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-500 to-accent">
                  qui font la différence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
                Je vous accompagne de A à Z dans la création de votre présence en ligne,
                avec une approche personnalisée et des résultats mesurables.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 24h Highlight Banner */}
        <section className="py-16 px-6 bg-gradient-to-r from-accent/10 via-blue-500/10 to-accent/10 border-y border-accent/20">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-500">
                24h
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Livraison express disponible
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Besoin d'un site rapidement ? Je peux livrer votre projet en 24 heures
                avec la même qualité et le même professionnalisme.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                Comment je peux vous aider
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light">
                Une expertise complète pour tous vos besoins digitaux
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative ${service.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className={`h-full p-8 rounded-3xl border transition-all duration-500 ${
                    service.highlight
                      ? 'bg-gradient-to-br from-accent/5 to-blue-500/5 border-accent/30 hover:border-accent/50'
                      : 'bg-card border-border hover:border-accent/30'
                  } hover:shadow-2xl hover:shadow-accent/10`}>
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    {service.highlight && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-4">
                        ⚡ Livraison 24h disponible
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-foreground/60 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/60">
                          <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                Ma méthodologie
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light">
                Un processus éprouvé pour des résultats garantis
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-accent/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {item.description}
                  </p>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-accent/20" />
                  )}
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
                  Prêt à démarrer ?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto font-light mb-10">
                  Discutons de votre projet et voyons comment je peux vous aider
                  à atteindre vos objectifs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-4 sm:py-5 bg-white text-accent rounded-full text-base sm:text-lg font-medium hover:scale-105 transition-transform">
                    Discuter du projet
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-6 sm:px-10 py-4 sm:py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full text-base sm:text-lg font-medium hover:bg-white/20 transition-all">
                    Voir le portfolio
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

export default ServicesPage;
