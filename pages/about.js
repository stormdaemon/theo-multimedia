import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SEO, { createLocalBusinessSchema, createWebPageSchema, createBreadcrumbSchema } from '../components/SEO';
import { absoluteUrl } from '../lib/business';
import PageFeatureBand from '../components/PageFeatureBand';

const values = [
  {
    icon: '/assets/icon-rocket-orange.webp',
    title: 'Innovation',
    description: "Technologies de pointe et veille permanente pour des solutions web toujours à la pointe du marché.",
  },
  {
    icon: '/assets/icon-target-orange.webp',
    title: 'Excellence',
    description: "Chaque projet est traité avec exigence. Je ne livre que des sites dont je suis fier et qui performent.",
  },
  {
    icon: '/assets/icon-star-rating-orange.webp',
    title: 'Clarté',
    description: "Chaque écran doit aider le visiteur à comprendre, comparer et passer à l’action sans friction inutile.",
  },
  {
    icon: '/assets/icon-users-orange.webp',
    title: 'Collaboration',
    description: "Travail en étroite collaboration pour comprendre vos besoins et dépasser vos attentes à chaque étape.",
  },
];

const skills = [
  { icon: '/assets/icon-design-orange.webp', name: 'Design & UX/UI', detail: 'Interfaces modernes, responsive, accessibles' },
  { icon: '/assets/icon-crm-orange.webp', name: 'Développement Web', detail: 'Next.js, React, Node.js, API' },
  { icon: '/assets/icon-seo-audit-orange.webp', name: 'SEO Google & IA', detail: 'Référencement Google, ChatGPT, Perplexity' },
  { icon: '/assets/icon-target-orange.webp', name: 'Stratégie digitale', detail: 'Conversion, analytics, accompagnement' },
];

const AboutPage = () => {
  const localBusinessSchema = createLocalBusinessSchema();
  const aboutPageSchema = createWebPageSchema(
    'À propos - Théo Lafont, développeur web en Charente',
    'Théo Lafont, développeur web full-stack et consultant SEO en Charente. Création de sites internet rapides, SEO local et visibilité IA.',
    absoluteUrl('/about')
  );
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'À propos', url: '/about' },
  ]);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, aboutPageSchema, breadcrumbSchema]
  };

  return (
    <>
      <SEO
        title="À propos - Développeur web full-stack en Charente"
        description="Théo Lafont, développeur web full-stack et consultant SEO en Charente. Sites rapides, SEO local, visibilité IA et outils sur mesure."
        canonical="/about"
        schema={schema}
        enableLocalSEO={true}
      />


      <div className="bg-background">
        {/* ─── HERO ─── */}
        <section className="tm-subpage-hero relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden">
          <div className="tm-subpage-art" style={{ backgroundImage: "url('/assets/about-developer-studio.webp')" }} />
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
                <span className="text-xs font-medium text-accent uppercase tracking-wider">À propos</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-[var(--font-heading)] leading-[1.1] mb-6" data-speakable="true">
                Créateur de sites web<br />
                <span className="text-accent">qui performent.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Basé commercialement en Charente, j’accompagne Cognac, Angoulême et Saintes avec des sites rapides,
                lisibles pour Google et mieux structurés pour les assistants IA.
              </p>
            </motion.div>
          </div>
        </section>

        <PageFeatureBand
          eyebrow="Atelier web indépendant"
          title="Un interlocuteur unique, du cadrage au lancement."
          description="Le design, la technique et la visibilité sont traités dans la même direction. Vous savez qui décide, qui conçoit et qui livre."
          artwork="/assets/about-expertise-dashboard.webp"
          items={[
            { icon: '/assets/icon-users-orange.webp', title: 'Échange direct', text: 'Pas de chaîne de validation opaque: les décisions avancent rapidement avec le bon niveau de détail.' },
            { icon: '/assets/icon-design-orange.webp', title: 'Exigence graphique', text: 'Chaque page reçoit une composition, une hiérarchie et des visuels adaptés à son rôle.' },
            { icon: '/assets/icon-seo-audit-orange.webp', title: 'Vision complète', text: 'Le site doit être beau, rapide, compréhensible par Google et facile à faire évoluer.' },
          ]}
        />

        {/* ─── STORY ─── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Mon parcours
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                10 ans d'expérience, une passion intacte.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-muted-foreground leading-relaxed"
              >
                <p>
                  Je suis <span className="text-foreground font-semibold">Théo Lafont</span>,
                  développeur web full-stack et designer. Mon parcours dans le digital a commencé
                  il y a plus de 10 ans, et depuis, je n’ai cessé d’apprendre, d’innover et de créer.
                </p>
                <p>
                  Ce qui me distingue ? <span className="text-accent font-semibold">Mon engagement total</span> dans
                  chaque projet. Je ne me contente pas de créer des sites web — je crée des outils de croissance
                  qui captivent, engagent et convertissent vos visiteurs en clients.
                </p>
                <p>
                  Que ce soit pour une startup qui lance son premier site ou une entreprise établie
                  qui souhaite se réinventer, j’apporte la même exigence et la même
                  passion pour l’excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: '10+', label: 'Annees d\'expérience' },
                  { value: '24h', label: 'Option express vitrine' },
                  { value: 'SEO', label: 'Visibilité locale incluse' },
                  { value: 'IA', label: 'Contenus structurés' },
                ].map((stat, i) => (
                  <div key={i} className="tm-glass-soft p-5 rounded-xl text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent font-[var(--font-heading)]">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── AI SEO EXPERTISE ─── */}
        <section className="py-24 md:py-32 px-6 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 border border-accent/20 mb-4">
                <img src="/assets/icon-seo-audit-orange.webp" alt="" className="w-4 h-4 object-contain" />
                <span className="text-xs font-medium text-accent uppercase tracking-wider">Expertise unique</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4" data-speakable="true">
                Visible sur Google ET sur ChatGPT
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Vos clients vous cherchent sur Google, mais aussi sur ChatGPT, Perplexity et Gemini.
                Je maîtrise les deux pour maximiser votre visibilité.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="tm-glass-soft p-6 rounded-xl"
              >
                <img src="/assets/icon-seo-local-orange.webp" alt="" className="w-9 h-9 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-3 font-[var(--font-heading)]">Référencement Google</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Audit technique, stratégie de mots-clés, contenu optimisé, netlinking. Résultats mesurables et suivi mensuel de vos positions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Structure pensée pour vos recherches prioritaires</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Core Web Vitals optimisés</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Trafic qualifié et mesurable</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="tm-glass p-6 rounded-xl"
              >
                <img src="/assets/icon-seo-audit-orange.webp" alt="" className="w-9 h-9 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-3 font-[var(--font-heading)]">
                  Référencement IA <span className="text-xs font-normal text-accent">(GEO)</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Optimisation pour les moteurs IA : un site structuré et lisible par ChatGPT, Perplexity et Gemini, pour que les IA recommandent votre activité.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> ChatGPT recommande votre entreprise</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Perplexity cite votre site</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Structured data pour faciliter les citations IA</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {[
                { value: 'SEO', label: 'optimisation Google locale' },
                { value: 'GEO', label: 'contenus lisibles par les IA' },
                { value: 'Schema', label: 'données structurées enrichies' },
              ].map((stat, i) => (
                <div key={i} className="tm-glass-soft p-4 rounded-xl text-center">
                  <div className="text-xl md:text-2xl font-bold text-accent font-[var(--font-heading)]">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── VALUES ─── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Mes valeurs
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Ce qui guide chaque projet et chaque décision.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="tm-glass-soft p-6 rounded-xl hover:border-accent/60 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <img src={value.icon} alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-[var(--font-heading)]">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section className="py-24 md:py-32 px-6 border-y border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Mon expertise
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Des compétences affûtées par 10 ans d’expérience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="tm-glass-soft p-6 rounded-xl"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                        <img src={skill.icon} alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <div>
                        <h3 className="font-semibold font-[var(--font-heading)]">{skill.name}</h3>
                        <p className="text-xs text-muted-foreground">{skill.detail}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="tm-audit tm-glass p-6 sm:p-10 md:p-16 rounded-2xl text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground font-[var(--font-heading)] tracking-tight mb-4">
                  Travaillons ensemble
                </h2>
                <p className="text-accent-foreground/80 text-lg mb-8 max-w-lg mx-auto">
                  Vous avez un projet web ? Discutons de votre vision.
                  Devis gratuit, réponse en moins de 24h.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-accent rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    Discuter du projet
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-accent-foreground border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors"
                  >
                    Voir le portfolio
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

export default AboutPage;
