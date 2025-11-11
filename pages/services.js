import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO, { createOrganizationSchema, createWebPageSchema } from '../components/SEO';
import { getSiteUrlFromHeaders } from '../lib/siteUrl'

const services = [
  {
    icon: "⚡",
    title: 'Sites ultra-rapides',
    description: "Vos visiteurs partent si votre site met plus de 3 secondes à charger. Je crée des sites 3x plus rapides que la moyenne. Résultat : plus de visiteurs qui restent, plus de ventes.",
    features: [
      'Temps de chargement < 1 seconde',
      'Optimisé pour mobile et tablette',
      'Score Google 95/100 garanti',
      'Livraison express en 24h'
    ],
    highlight: true
  },
  {
    icon: "🎯",
    title: 'Design qui convertit',
    description: "Un beau site c'est bien. Un site qui transforme vos visiteurs en clients, c'est mieux. J'applique les techniques de design persuasif pour maximiser vos conversions.",
    features: [
      '+40% de conversions en moyenne',
      'Parcours utilisateur optimisé',
      "Boutons d'action stratégiques",
      'A/B testing inclus'
    ]
  },
  {
    icon: "🔍",
    title: 'Visible sur Google',
    description: "Être en première page Google, ça change tout. J'optimise votre site pour qu'il apparaisse quand vos clients vous cherchent. Sans jargon technique.",
    features: [
      'Audit complet de visibilité',
      'Mots-clés stratégiques trouvés',
      'Contenu optimisé pour Google',
      'Suivi mensuel de position'
    ]
  },
  {
    icon: "🌱",
    title: 'Éco-responsable',
    description: "Internet pollue autant que l'aviation. Je conçois des sites légers qui consomment 60% d'énergie en moins. Bon pour la planète, et pour votre image.",
    features: [
      "-60% d'empreinte carbone",
      'Code optimisé et léger',
      'Images compressées intelligemment',
      'Hébergement vert disponible'
    ]
  },
  {
    icon: "🛠️",
    title: 'E-commerce performant',
    description: "Vendez en ligne sans complications. Boutique rapide, paiement sécurisé, gestion simple. Tout est pensé pour que vous vendiez plus.",
    features: [
      "Panier optimisé (moins d'abandons)",
      'Paiements sécurisés multiples',
      'Gestion de stock automatique',
      'Intégration livraison'
    ]
  },
  {
    icon: "🤝",
    title: 'Support & Évolution',
    description: "Votre site vit et évolue. Je reste disponible pour l'améliorer, le mettre à jour, et répondre à vos questions. Sans langue de bois.",
    features: [
      'Réponse < 24h garantie',
      'Mises à jour sécurité',
      'Sauvegardes quotidiennes',
      'Évolutions sur demande'
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

const ServicesPage = ({ baseUrl }) => {
  const organizationSchema = createOrganizationSchema();
  const servicesPageSchema = createWebPageSchema(
    'Mes Services',
    'Je crée votre site internet en 24h. Design, développement, SEO et maintenance. Services web professionnels à Angoulême.',
    `${baseUrl}/services`
  );
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, servicesPageSchema]
  };

  return (
    <>
      <SEO
        title="Mes Services - Création de sites web en 24h"
        description="Je crée votre site internet en 24h. Design, développement, SEO et maintenance. Services web professionnels à Angoulême."
        canonical="/services"
        schema={schema}
      />

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
                Des sites qui<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-500 to-accent">
                  cartonnent vraiment
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
                Rapides, optimisés pour Google, et éco-conçus. Mes sites sont conçus
                pour transformer vos visiteurs en clients fidèles.
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
                Votre site en ligne demain
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Lancement urgent ? Opportunité business ? Je livre votre site professionnel,
                rapide et optimisé en 24 heures chrono.
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
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-accent rounded-full text-lg font-medium hover:scale-105 transition-transform">
                    Parler de mon projet
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full text-lg font-medium hover:bg-white/20 transition-all">
                    Voir mon portfolio
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

/**
 * Enable Server-Side Rendering
 * Ensures AI crawlers and search engines see server-rendered HTML
 */
export async function getServerSideProps({ req }) {
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl')
  const baseUrl = getSiteUrlFromHeaders(req)
  return {
    props: { baseUrl },
  };
}

export default ServicesPage;
