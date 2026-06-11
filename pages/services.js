import { motion } from 'motion/react';
import Link from 'next/link';
import SEO, { createLocalBusinessSchema, createWebPageSchema, createHowToSchema } from '../components/SEO';
import { absoluteUrl } from '../lib/business';
import PageFeatureBand from '../components/PageFeatureBand';

const services = [
  {
    icon: '/assets/icon-design-orange.webp',
    preview: '/assets/services-site-vitrine-workstation.webp',
    title: 'Sites ultra-rapides',
    description: "Un site rapide rassure et facilite la prise de contact. Je crée des interfaces légères et soignées pour que vos visiteurs accèdent immédiatement à l’essentiel.",
    features: [
      'Chargement rapide et mesurable',
      'Optimisé pour mobile et tablette',
      'Performance technique optimisée',
      'Livraison express en 24h'
    ],
    href: '/site-vitrine-24h',
    highlight: true
  },
  {
    icon: '/assets/icon-target-orange.webp',
    preview: '/assets/service-card-site-vitrine-preview.webp',
    title: 'Design qui convertit',
    description: "Un beau site, c’est bien. Un site qui transforme vos visiteurs en clients, c’est mieux. J’applique les techniques de design persuasif pour maximiser vos conversions.",
    features: [
      'Parcours de conversion travaillé',
      'Parcours utilisateur optimisé',
      "Boutons d’action stratégiques",
      'Optimisation itérative possible'
    ],
    href: '/creation-site-internet'
  },
  {
    icon: '/assets/icon-seo-local-orange.webp',
    preview: '/assets/services-seo-local-map-dashboard.webp',
    title: 'Visible sur Google',
    description: "Être visible quand vos clients cherchent, ça change tout. J’optimise votre site pour renforcer sa lisibilité locale, sans jargon technique ni promesse abusive.",
    features: [
      'Audit complet de visibilité',
      'Mots-clés stratégiques trouvés',
      'Contenu optimisé pour Google',
      'Suivi mensuel de position'
    ],
    href: '/referencement-local'
  },
  {
    icon: '/assets/icon-rocket-orange.webp',
    preview: '/assets/services-audit-seo-diagnostics.webp',
    title: 'Éco-responsable',
    description: "Je conçois des sites légers et efficaces, avec des images compressées et un code maîtrisé. Une approche sobre qui profite aussi aux performances.",
    features: [
      "Conception numérique plus sobre",
      'Code optimisé et léger',
      'Images compressées intelligemment',
      'Hébergement vert disponible'
    ],
    href: '/maintenance-site-web'
  },
  {
    icon: '/assets/icon-ecommerce-orange.webp',
    preview: '/assets/services-ecommerce-cart-dashboard.webp',
    title: 'E-commerce performant',
    description: "Vendez en ligne sans complications. Boutique rapide, paiement sécurisé, gestion simple. Tout est pensé pour que vous vendiez plus.",
    features: [
      "Panier optimisé (moins d’abandons)",
      'Paiements sécurisés multiples',
      'Gestion de stock automatique',
      'Intégration livraison'
    ],
    href: '/ecommerce-sur-mesure'
  },
  {
    icon: '/assets/icon-crm-orange.webp',
    preview: '/assets/services-crm-pipeline-dashboard.webp',
    title: 'Support & Évolution',
    description: "Votre site vit et évolue. Je reste disponible pour l’améliorer, le mettre à jour, et répondre à vos questions. Sans langue de bois.",
    features: [
      'Réponse sous 24h ouvrées',
      'Mises à jour sécurité',
      'Sauvegardes quotidiennes',
      'Évolutions sur demande'
    ],
    href: '/maintenance-site-web'
  }
];

const processSteps = [
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
  const localBusinessSchema = createLocalBusinessSchema();
  const servicesPageSchema = createWebPageSchema(
    'Services web - Site vitrine, SEO local et sur mesure',
    'Site vitrine en 24h, SEO local, audit SEO, CRM, LMS, e-commerce et maintenance pour entreprises en Charente.',
    absoluteUrl('/services')
  );
  const howToSchema = createHowToSchema(processSteps);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, servicesPageSchema, howToSchema]
  };

  return (
    <>
      <SEO
        title="Services web - Site vitrine, SEO local et sur mesure"
        description="Site vitrine en 24h, SEO local, audit SEO, CRM, LMS, e-commerce et maintenance pour entreprises en Charente."
        canonical="/services"
        schema={schema}
      />


      <div className="bg-background">
        {/* ─── HERO ─── */}
        <section className="tm-subpage-hero relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden">
          <div className="tm-subpage-art" style={{ backgroundImage: "url('/assets/services-hero-solutions.webp')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          <div className="max-w-6xl mx-auto relative">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
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
                Rapides, optimisés pour Google, et éco-conçus. Mes sites sont conçus
                pour transformer vos visiteurs en clients fidèles.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Démarrer mon projet
                  <img src="/assets/icon-arrow-right-white.webp" alt="" className="w-4 h-4 object-contain" />
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

        <PageFeatureBand
          eyebrow="Une production complète"
          title="Chaque site est pensé comme un outil de travail."
          description="Direction artistique, performance, visibilité et suivi: les briques ne sont pas juxtaposées, elles sont composées ensemble."
          artwork="/assets/services-process-orange-orbit.webp"
          items={[
            { icon: '/assets/icon-design-orange.webp', title: 'Direction artistique', text: 'Une interface sur mesure avec une vraie hiérarchie visuelle et des points de conversion lisibles.' },
            { icon: '/assets/icon-seo-local-orange.webp', title: 'Visibilité locale', text: 'Structure technique, contenus et signaux locaux sont prévus dès la conception.' },
            { icon: '/assets/icon-crm-orange.webp', title: 'Évolution durable', text: 'Le site peut recevoir de nouvelles fonctions sans repartir de zéro.' },
          ]}
        />

        {/* ─── 24H HIGHLIGHT ─── */}
        <section className="py-16 px-6 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8"
            >
              <div className="tm-glass-soft flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-xl">
                <img src="/assets/icon-clock-orange.webp" alt="" className="w-11 h-11 object-contain" />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-accent font-[var(--font-heading)]">24h</span>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-[var(--font-heading)] tracking-tight">
                    Votre site en ligne demain
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  Lancement urgent ? Opportunité business ? Je livre votre site professionnel,
                  rapide et optimisé en 24 heures chrono.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── SERVICES GRID ─── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Comment puis-je vous aider ?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Voici les solutions que je conçois pour répondre à chaque besoin digital.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`group relative ${service.highlight ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <Link href={service.href} className={`tm-subpage-card block h-full rounded-xl border transition-colors overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    service.highlight
                      ? 'bg-accent/5 border-accent/30 hover:border-accent/50'
                      : 'bg-card border-border hover:border-accent/30'
                  }`}>
                    <img src={service.preview} alt="" className="w-full h-32 object-cover" />
                    <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                        <img src={service.icon} alt="" className="w-6 h-6 object-contain" />
                      </div>
                      {service.highlight && (
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-accent/10 border border-accent/20">
                          <img src="/assets/icon-rocket-orange.webp" alt="" className="w-3.5 h-3.5 object-contain" />
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
                          <img src="/assets/icon-check-green.webp" alt="" className="w-4 h-4 mt-0.5 flex-shrink-0 object-contain" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROCESS ─── */}
        <section className="py-24 md:py-32 px-6 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Ma methodologie
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Un processus clair pour avancer sans flou.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="tm-glass-soft relative p-6 rounded-xl"
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
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="tm-glass p-6 sm:p-10 md:p-16 rounded-xl text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Prêt à démarrer ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Discutons de votre projet et voyons comment je peux vous aider
                a atteindre vos objectifs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-accent text-accent-foreground rounded-lg text-base sm:text-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Parler de mon projet
                  <img src="/assets/icon-arrow-right-white.webp" alt="" className="w-5 h-5 object-contain" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-background border border-border text-foreground rounded-lg text-base sm:text-lg font-medium hover:bg-muted transition-colors"
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

export default ServicesPage;
