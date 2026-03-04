import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Zap, Target, Search, Leaf, ShoppingCart, Headphones, Check, Clock } from 'lucide-react';
import SEO, { createLocalBusinessSchema, createWebPageSchema, createHowToSchema } from '../components/SEO';
import { CrawlerPageContent } from '../components/CrawlerContent';
import { getSiteUrlFromHeaders } from '../lib/siteUrl';

const services = [
  {
    icon: Zap,
    title: 'Sites ultra-rapides',
    description: "Vos visiteurs partent si votre site met plus de 3 secondes a charger. Je cree des sites 3x plus rapides que la moyenne. Resultat : plus de visiteurs qui restent, plus de ventes.",
    features: [
      'Temps de chargement < 1 seconde',
      'Optimise pour mobile et tablette',
      'Score Google 95/100 garanti',
      'Livraison express en 24h'
    ],
    highlight: true
  },
  {
    icon: Target,
    title: 'Design qui convertit',
    description: "Un beau site c'est bien. Un site qui transforme vos visiteurs en clients, c'est mieux. J'applique les techniques de design persuasif pour maximiser vos conversions.",
    features: [
      '+40% de conversions en moyenne',
      'Parcours utilisateur optimise',
      "Boutons d'action strategiques",
      'A/B testing inclus'
    ]
  },
  {
    icon: Search,
    title: 'Visible sur Google',
    description: "Etre en premiere page Google, ca change tout. J'optimise votre site pour qu'il apparaisse quand vos clients vous cherchent. Sans jargon technique.",
    features: [
      'Audit complet de visibilite',
      'Mots-cles strategiques trouves',
      'Contenu optimise pour Google',
      'Suivi mensuel de position'
    ]
  },
  {
    icon: Leaf,
    title: 'Eco-responsable',
    description: "Internet pollue autant que l'aviation. Je concois des sites legers qui consomment 60% d'energie en moins. Bon pour la planete, et pour votre image.",
    features: [
      "-60% d'empreinte carbone",
      'Code optimise et leger',
      'Images compressees intelligemment',
      'Hebergement vert disponible'
    ]
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce performant',
    description: "Vendez en ligne sans complications. Boutique rapide, paiement securise, gestion simple. Tout est pense pour que vous vendiez plus.",
    features: [
      "Panier optimise (moins d'abandons)",
      'Paiements securises multiples',
      'Gestion de stock automatique',
      'Integration livraison'
    ]
  },
  {
    icon: Headphones,
    title: 'Support & Evolution',
    description: "Votre site vit et evolue. Je reste disponible pour l'ameliorer, le mettre a jour, et repondre a vos questions. Sans langue de bois.",
    features: [
      'Reponse < 24h garantie',
      'Mises a jour securite',
      'Sauvegardes quotidiennes',
      'Evolutions sur demande'
    ]
  }
];

const processSteps = [
  {
    step: "01",
    title: "Decouverte",
    description: "Je prends le temps de comprendre votre projet, vos objectifs et votre audience pour proposer la meilleure solution."
  },
  {
    step: "02",
    title: "Conception",
    description: "Je cree des maquettes et prototypes pour valider ensemble la direction creative avant le developpement."
  },
  {
    step: "03",
    title: "Developpement",
    description: "Je developpe votre projet avec les dernieres technologies, en assurant qualite et performance."
  },
  {
    step: "04",
    title: "Lancement",
    description: "Je deploie votre projet et vous accompagne pour un lancement reussi avec formation et documentation."
  }
];

const ServicesPage = ({ baseUrl, isCrawler }) => {
  const localBusinessSchema = createLocalBusinessSchema();
  const servicesPageSchema = createWebPageSchema(
    'Mes Services - Creation de sites web en 24h',
    'Je cree votre site internet en 24h. Design, developpement, SEO et maintenance. Services web professionnels a Angouleme.',
    `${baseUrl}/services`
  );
  const howToSchema = createHowToSchema(processSteps);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, servicesPageSchema, howToSchema]
  };

  return (
    <>
      <SEO
        title="Mes Services - Creation de sites web en 24h"
        description="Je cree votre site internet en 24h. Design, developpement, SEO et maintenance. Services web professionnels a Angouleme."
        canonical="/services"
        schema={schema}
      />

      <CrawlerPageContent
        isCrawler={isCrawler}
        title="Mes Services - Creation de sites web en 24h"
        description="Je cree votre site internet en 24h. Design, developpement, SEO et maintenance. Services web professionnels a Angouleme."
        sections={[
          {
            title: "Votre site en ligne demain - Livraison 24h",
            content: "Lancement urgent ? Opportunite business ? Je livre votre site professionnel, rapide et optimise en 24 heures chrono.",
          },
          {
            title: "Comment je peux vous aider",
            items: services.map(s => ({
              title: s.title,
              description: `${s.description} Inclus : ${s.features.join(', ')}`,
            })),
          },
          {
            title: "Ma methodologie",
            items: processSteps.map(p => `${p.step}. ${p.title}: ${p.description}`),
          },
          {
            title: "Pret a demarrer ?",
            content: "Discutons de votre projet et voyons comment je peux vous aider a atteindre vos objectifs. Contactez-moi pour parler de votre projet ou consultez mon portfolio.",
          },
        ]}
      />

      <div className="bg-background">
        {/* ─── HERO ─── */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 border border-accent/20 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-medium text-accent uppercase tracking-wider">Mes services</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-[var(--font-heading)] leading-[1.1] mb-6">
                Des sites qui<br />
                <span className="text-accent">cartonnent vraiment.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Rapides, optimises pour Google, et eco-concus. Mes sites sont concus
                pour transformer vos visiteurs en clients fideles.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Demarrer mon projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Voir le portfolio
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── 24H HIGHLIGHT ─── */}
        <section className="py-16 px-6 bg-card border-y border-border">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-xl bg-accent/10 border border-accent/20">
                <Clock className="w-10 h-10 text-accent" />
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-accent font-[var(--font-heading)]">24h</span>
                  <h2 className="text-2xl md:text-3xl font-bold font-[var(--font-heading)] tracking-tight">
                    Votre site en ligne demain
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Lancement urgent ? Opportunite business ? Je livre votre site professionnel,
                  rapide et optimise en 24 heures chrono.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── SERVICES GRID ─── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Comment je peux vous aider
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Une expertise complete pour tous vos besoins digitaux.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`group relative ${service.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <div className={`h-full p-6 rounded-xl border transition-colors ${
                    service.highlight
                      ? 'bg-accent/5 border-accent/30 hover:border-accent/50'
                      : 'bg-card border-border hover:border-accent/30'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                        <service.icon className="w-5 h-5" />
                      </div>
                      {service.highlight && (
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20">
                          <Zap className="w-3 h-3 text-accent" />
                          <span className="text-xs font-medium text-accent">Express 24h</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 font-[var(--font-heading)]">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS ─── */}
        <section className="py-24 md:py-32 px-6 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Ma methodologie
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Un processus eprouve pour des resultats garantis.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-xl border border-border bg-background"
                >
                  <span className="text-5xl font-extrabold text-accent/15 font-[var(--font-heading)] leading-none select-none">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-2 font-[var(--font-heading)]">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-px bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-10 md:p-16 rounded-xl border border-border bg-card text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Pret a demarrer ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Discutons de votre projet et voyons comment je peux vous aider
                a atteindre vos objectifs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg text-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Parler de mon projet
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background border border-border text-foreground rounded-lg text-lg font-medium hover:bg-muted transition-colors"
                >
                  Voir mon portfolio
                </Link>
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
  const { isCrawler } = await import('../lib/isCrawler')
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl')
  const baseUrl = getSiteUrlFromHeaders(req)
  const userAgent = req.headers['user-agent'] || '';
  const isBot = isCrawler(userAgent);
  return {
    props: {
      baseUrl,
      isCrawler: isBot
    },
  };
}

export default ServicesPage;
