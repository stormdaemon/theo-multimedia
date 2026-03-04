import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Target, Heart, Users, Code, Palette, Search, BarChart3, Bot, Globe } from 'lucide-react';
import SEO, { createLocalBusinessSchema, createWebPageSchema, createBreadcrumbSchema } from '../components/SEO';
import { CrawlerPageContent } from '../components/CrawlerContent';
import { getSiteUrlFromHeaders } from '../lib/siteUrl';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: "Technologies de pointe et veille permanente pour des solutions web toujours a la pointe du marche.",
  },
  {
    icon: Target,
    title: 'Excellence',
    description: "Chaque projet est traite avec exigence. Je ne livre que des sites dont je suis fier et qui performent.",
  },
  {
    icon: Heart,
    title: 'Passion',
    description: "Le web est ma passion depuis plus de 10 ans. Cette energie se retrouve dans chaque pixel de vos projets.",
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: "Travail en etroite collaboration pour comprendre vos besoins et depasser vos attentes a chaque etape.",
  },
];

const skills = [
  { icon: Palette, name: 'Design & UX/UI', level: 95, detail: 'Interfaces modernes, responsive, accessibles' },
  { icon: Code, name: 'Developpement Web', level: 98, detail: 'Next.js, React, Node.js, API' },
  { icon: Search, name: 'SEO Google & IA', level: 92, detail: 'Referencement Google, ChatGPT, Perplexity' },
  { icon: BarChart3, name: 'Strategie Digitale', level: 90, detail: 'Conversion, analytics, accompagnement' },
];

const AboutPage = ({ baseUrl, isCrawler: isCrawlerBot }) => {
  const localBusinessSchema = createLocalBusinessSchema();
  const aboutPageSchema = createWebPageSchema(
    'A Propos - Theo Lafont, Developpeur Web a Angouleme',
    'Theo Lafont, developpeur web full-stack et expert SEO a Angouleme. Plus de 10 ans d\'experience en creation de sites internet performants, eco-responsables et optimises pour Google et les IA.',
    `${baseUrl}/about`
  );
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'A Propos', url: '/about' },
  ]);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, aboutPageSchema, breadcrumbSchema]
  };

  return (
    <>
      <SEO
        title="A Propos - Developpeur Web Full-Stack Angouleme"
        description="Theo Lafont, developpeur web full-stack et expert SEO a Angouleme. Creation de sites internet ultra-rapides, eco-responsables, optimises pour Google et les IA (ChatGPT, Perplexity)."
        canonical="/about"
        schema={schema}
        enableLocalSEO={true}
      />

      <CrawlerPageContent
        isCrawler={isCrawlerBot}
        title="A Propos de Theo Multimedia - Developpeur Web a Angouleme"
        description="Theo Lafont est un developpeur web full-stack et expert en referencement SEO base a Angouleme, en Charente. Specialise dans la creation de sites internet ultra-rapides, eco-responsables et optimises pour les moteurs de recherche Google et les intelligences artificielles comme ChatGPT, Perplexity et Gemini."
        sections={[
          {
            title: "Mon parcours",
            content: "Avec plus de 10 ans d'experience dans le developpement web et le design digital, je cree des experiences numeriques qui captivent, engagent et convertissent. Mon expertise couvre le developpement full-stack avec Next.js et React, le design UX/UI, le referencement SEO classique et le nouveau referencement IA (GEO - Generative Engine Optimization). Basee a Angouleme en Charente, mon agence Theo Multimedia accompagne les entreprises de toute la France dans leur transformation digitale.",
          },
          {
            title: "Expertise SEO Google et IA",
            content: "En 2026, la visibilite en ligne ne se limite plus a Google. 800 millions de personnes utilisent ChatGPT chaque semaine, et 10% du trafic web provient deja des IA. J'optimise chaque site pour etre visible sur Google ET recommande par les intelligences artificielles (ChatGPT, Perplexity, Gemini, Claude). Cela inclut le balisage schema.org enrichi, les contenus structures pour les LLM, et l'optimisation technique pour les AI crawlers.",
          },
          {
            title: "Mes valeurs",
            items: values.map(v => `${v.title}: ${v.description}`),
          },
          {
            title: "Competences techniques",
            items: skills.map(s => `${s.name} (${s.level}%): ${s.detail}`),
          },
          {
            title: "Chiffres cles",
            items: [
              "Plus de 10 annees d'experience en developpement web",
              "Plus de 50 projets web livres avec succes",
              "Sites 3x plus rapides que la moyenne du marche",
              "60% d'empreinte carbone en moins grace a l'eco-conception",
              "Livraison express en 24h disponible",
            ],
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
                <span className="text-xs font-medium text-accent uppercase tracking-wider">A propos</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-[var(--font-heading)] leading-[1.1] mb-6" data-speakable="true">
                Createur de sites web<br />
                <span className="text-accent">qui performent.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Base a Angouleme, je transforme vos idees en sites internet ultra-rapides,
                visibles sur Google et recommandes par les IA. Depuis plus de 10 ans.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── STORY ─── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Mon parcours
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                10 ans d'experience, une passion intacte.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6 text-muted-foreground leading-relaxed"
              >
                <p>
                  Je suis <span className="text-foreground font-semibold">Theo Lafont</span>,
                  developpeur web full-stack et designer. Mon parcours dans le digital a commence
                  il y a plus de 10 ans, et depuis, je n'ai cesse d'apprendre, d'innover et de creer.
                </p>
                <p>
                  Ce qui me distingue ? <span className="text-accent font-semibold">Mon engagement total</span> dans
                  chaque projet. Je ne me contente pas de creer des sites web — je cree des outils de croissance
                  qui captivent, engagent et convertissent vos visiteurs en clients.
                </p>
                <p>
                  Que ce soit pour une startup qui lance son premier site ou une entreprise etablie
                  qui souhaite se reinventer, j'apporte la meme exigence et la meme
                  passion pour l'excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: '10+', label: 'Annees d\'experience' },
                  { value: '50+', label: 'Projets livres' },
                  { value: '3x', label: 'Plus rapide' },
                  { value: '-60%', label: 'Empreinte CO2' },
                ].map((stat, i) => (
                  <div key={i} className="p-5 rounded-xl border border-border bg-card text-center">
                    <div className="text-2xl md:text-3xl font-bold text-accent font-[var(--font-heading)]">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── AI SEO EXPERTISE ─── */}
        <section className="py-24 md:py-32 px-6 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 border border-accent/20 mb-4">
                <Bot className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-medium text-accent uppercase tracking-wider">Expertise unique</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4" data-speakable="true">
                Visible sur Google ET sur ChatGPT
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Vos clients vous cherchent sur Google, mais aussi sur ChatGPT, Perplexity et Gemini.
                Je maitrise les deux pour maximiser votre visibilite.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-border bg-background"
              >
                <Globe className="w-8 h-8 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-3 font-[var(--font-heading)]">Referencement Google</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Audit technique, strategie de mots-cles, contenu optimise, netlinking. Resultats mesurables et suivi mensuel de vos positions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Premiere page Google sur vos mots-cles</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Core Web Vitals optimises</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Trafic qualifie et mesurable</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl border-2 border-accent/30 bg-background"
              >
                <Bot className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 font-[var(--font-heading)]">
                  Referencement IA <span className="text-xs font-normal text-accent">(GEO)</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Optimisation pour les moteurs IA : contenu structure, schema.org enrichi, FAQ strategiques, llms.txt. Les IA vous recommandent.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> ChatGPT recommande votre entreprise</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Perplexity cite votre site</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Structured data pour +40% de citations IA</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {[
                { value: '800M', label: 'utilisateurs ChatGPT/semaine' },
                { value: '+527%', label: 'trafic IA en 2025' },
                { value: '10%', label: 'du trafic web vient des IA' },
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl border border-border bg-background text-center">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Mes valeurs
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Ce qui guide chaque projet et chaque decision.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-[var(--font-heading)]">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SKILLS ─── */}
        <section className="py-24 md:py-32 px-6 bg-card border-y border-border">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Mon expertise
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Des competences affutees par 10 ans d'experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-6 rounded-xl border border-border bg-background"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                        <skill.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold font-[var(--font-heading)]">{skill.name}</h3>
                        <p className="text-xs text-muted-foreground">{skill.detail}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-accent font-[var(--font-heading)]">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-accent rounded-full"
                    />
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-10 md:p-16 rounded-2xl bg-accent text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground font-[var(--font-heading)] tracking-tight mb-4">
                  Travaillons ensemble
                </h2>
                <p className="text-accent-foreground/80 text-lg mb-8 max-w-lg mx-auto">
                  Vous avez un projet web ? Discutons de votre vision.
                  Devis gratuit, reponse en moins de 24h.
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

export async function getServerSideProps({ req }) {
  const { isCrawler } = await import('../lib/isCrawler');
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl');
  const baseUrl = getSiteUrlFromHeaders(req);
  const userAgent = req.headers['user-agent'] || '';
  return {
    props: {
      baseUrl,
      isCrawler: isCrawler(userAgent),
    },
  };
}

export default AboutPage;
