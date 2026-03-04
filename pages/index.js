import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Search, Palette, Leaf, Bot, Globe } from 'lucide-react';
import SEO, { createLocalBusinessSchema, createWebPageSchema, createFAQSchema } from '../components/SEO';
import { CrawlerPageContent } from '../components/CrawlerContent';
import { getSiteUrlFromHeaders } from '../lib/siteUrl';

const features = [
  {
    icon: Zap,
    title: 'Ultra-rapide',
    stat: '< 1s',
    description: 'Temps de chargement inferieur a 1 seconde. 3x plus rapide que la moyenne. Vos visiteurs restent, Google vous recompense.',
  },
  {
    icon: Palette,
    title: 'Design qui convertit',
    stat: '+40%',
    description: 'Design persuasif qui transforme vos visiteurs en clients. Chaque element est pense pour la conversion.',
  },
  {
    icon: Search,
    title: 'SEO Google & IA',
    stat: 'Top 3',
    description: 'Visible sur Google ET sur ChatGPT, Perplexity, Gemini. Double optimisation pour capter 100% du trafic.',
  },
  {
    icon: Leaf,
    title: 'Eco-responsable',
    stat: '-60%',
    description: "Sites legers qui consomment 60% d'energie en moins. Bon pour la planete, bon pour votre image.",
  },
];

const portfolioHighlights = [
  { title: "SOS Chretiens d'Occident", category: 'Site vitrine', imageUrl: '/sos_chretien_d_occident.png', url: 'https://soschretiensdoccident.fr/' },
  { title: 'Institut Irenee', category: 'Application web', imageUrl: '/irenee_institut.png', url: 'https://www.irenee-institut.org/' },
  { title: 'Heaven Radio', category: 'Web radio', imageUrl: '/heavenradio.png', url: 'https://heavenradio.fr/' },
  { title: 'TRACKWARS', category: 'Application web', imageUrl: '/trackwars.png', url: 'https://trackwars.fr/' },
];

const HomePage = ({ baseUrl, isCrawler }) => {
  const localBusinessSchema = createLocalBusinessSchema();
  const homePageSchema = createWebPageSchema(
    'Agence Web Angouleme - Sites ultra-rapides, SEO Google & IA',
    'Theo Multimedia cree des sites internet ultra-rapides, eco-responsables et optimises pour Google et les IA. Livraison express 24h. Angouleme, Charente.',
    baseUrl
  );
  const faqSchema = createFAQSchema([
    { question: 'Combien coute un site internet ?', answer: 'Les tarifs varient selon le projet. Un site vitrine demarre a partir de 1 000 euros. Contactez-moi pour un devis gratuit et personnalise.' },
    { question: 'Vous livrez vraiment en 24h ?', answer: 'Oui, pour les sites vitrines et landing pages. Parfait pour les lancements urgents. Qualite et performance garanties.' },
    { question: "Qu'est-ce que le SEO IA ?", answer: "C'est l'optimisation de votre site pour etre recommande par les IA comme ChatGPT et Perplexity. 800 millions de personnes utilisent ChatGPT chaque semaine." },
  ]);
  const schema = { '@context': 'https://schema.org', '@graph': [localBusinessSchema, homePageSchema, faqSchema] };

  return (
    <>
      <SEO
        title="Agence Web Angouleme - Sites ultra-rapides, SEO Google & IA"
        description="Theo Multimedia cree des sites internet ultra-rapides, eco-responsables et optimises pour Google et les IA (ChatGPT, Perplexity). Livraison express 24h. Angouleme."
        canonical="/"
        schema={schema}
        enableLocalSEO={true}
      />

      <CrawlerPageContent
        isCrawler={isCrawler}
        title="Theo Multimedia - Agence Web Angouleme"
        description="Creation de sites internet ultra-rapides, eco-responsables et optimises pour Google et les moteurs de recherche IA. Basee a Angouleme, Charente."
        sections={[
          { title: 'Votre site web professionnel en 24 heures', content: 'Theo Multimedia est une agence web basee a Angouleme specialisee dans la creation de sites internet ultra-rapides, eco-responsables et optimises pour convertir. Livraison express en 24h disponible.' },
          { title: 'Pourquoi choisir Theo Multimedia ?', items: features.map(f => `${f.title} (${f.stat}): ${f.description}`) },
          { title: 'Portfolio', items: portfolioHighlights.map(p => `${p.title} - ${p.category} (${p.url})`) },
          { title: 'Technologies', items: ['Next.js 16 avec SSR pour performance maximale', 'React 19 pour interfaces modernes', 'Tailwind CSS v4 pour design sur-mesure', 'Optimisation SEO Google + IA (ChatGPT, Perplexity, Gemini)'] },
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
                <span className="text-xs font-medium text-accent uppercase tracking-wider">Livraison 24h disponible</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-[var(--font-heading)] leading-[1.1] mb-6" data-speakable="true">
                Votre site web.<br />
                <span className="text-accent">En 24 heures.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Sites ultra-rapides, eco-responsables et optimises pour Google et les IA.
                Votre prochain client vous cherche en ce moment — soyez la.
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

        {/* ─── MARQUEE ─── */}
        <div className="border-y border-border py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 mr-8 text-sm font-medium text-muted-foreground uppercase tracking-widest">
                <span>Performance</span><span className="text-accent">&#9670;</span>
                <span>Design</span><span className="text-accent">&#9670;</span>
                <span>SEO Google</span><span className="text-accent">&#9670;</span>
                <span>SEO IA</span><span className="text-accent">&#9670;</span>
                <span>Eco-conception</span><span className="text-accent">&#9670;</span>
                <span>24h Express</span><span className="text-accent">&#9670;</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── FEATURES ─── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-4">
                Pourquoi ca marche
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Chaque site est concu avec 4 piliers non-negociables.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 rounded-xl border border-border bg-card hover:border-accent/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold text-accent font-[var(--font-heading)]">{feature.stat}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 font-[var(--font-heading)]">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── AI SEO ─── */}
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
                800 millions de personnes utilisent ChatGPT chaque semaine. Vos clients vous y cherchent deja.
                Je fais en sorte que les IA vous recommandent.
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
                <h3 className="text-xl font-semibold mb-3 font-[var(--font-heading)]">SEO Google classique</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Mots-cles, contenu optimise, structure technique parfaite. Vous apparaissez quand vos clients tapent vos services.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Premiere page Google</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Trafic qualifie cible</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Suivi mensuel des positions</li>
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
                  SEO IA <span className="text-xs font-normal text-accent">(ChatGPT, Perplexity, Gemini)</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  J'optimise votre site pour que les IA vous recommandent quand vos clients leur posent des questions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> ChatGPT vous recommande</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Perplexity cite votre site</li>
                  <li className="flex items-start gap-2"><span className="text-accent mt-0.5">&#10003;</span> Contenu structure pour les IA</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 grid grid-cols-3 gap-4"
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

        {/* ─── PORTFOLIO ─── */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-heading)] tracking-tight mb-2">
                  Projets recents
                </h2>
                <p className="text-muted-foreground">Des sites qui generent des resultats.</p>
              </div>
              <Link href="/portfolio" className="hidden md:inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
                Tout voir <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {portfolioHighlights.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-4">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={85}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.url && (
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                        >
                          Voir le projet
                        </a>
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg font-semibold mt-1 font-[var(--font-heading)] group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <Link href="/portfolio" className="inline-flex items-center gap-1.5 text-sm text-accent">
                Voir tous les projets <ArrowRight className="w-3.5 h-3.5" />
              </Link>
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
              className="p-10 md:p-16 rounded-2xl bg-accent text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground font-[var(--font-heading)] tracking-tight mb-4">
                  Pret a booster votre business ?
                </h2>
                <p className="text-accent-foreground/80 text-lg mb-8 max-w-lg mx-auto">
                  Discutons de votre projet. Devis gratuit, reponse en moins de 24h.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-accent rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    Parler de mon projet
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-accent-foreground border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors"
                  >
                    Voir les services
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
  return { props: { baseUrl, isCrawler: isCrawler(userAgent) } };
}

export default HomePage;
