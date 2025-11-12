import { motion } from 'framer-motion';
import Link from 'next/link';
import SEO, { createLocalBusinessSchema, createWebPageSchema } from '../components/SEO';
import { CrawlerPageContent } from '../components/CrawlerContent';
import { getSiteUrlFromHeaders } from '../lib/siteUrl';
import ConditionalMotion from '../components/ConditionalMotion';
import { isCrawler } from '../lib/isCrawler';

const values = [
  {
    icon: "💡",
    title: 'Innovation',
    description: "J'explore constamment les nouvelles technologies et les tendances design pour offrir des solutions modernes et performantes.",
  },
  {
    icon: "🎯",
    title: 'Excellence',
    description: "Chaque projet est traité avec le plus grand soin. Je ne livre que des solutions dont je suis fier.",
  },
  {
    icon: "❤️",
    title: 'Passion',
    description: "Le développement web est ma passion. J'aime créer des expériences numériques qui font la différence.",
  },
  {
    icon: "🤝",
    title: 'Collaboration',
    description: "Je travaille en étroite collaboration avec mes clients pour comprendre leurs besoins et dépasser leurs attentes.",
  }
];

const skills = [
  { name: 'Design & UX/UI', level: 95 },
  { name: 'Développement Web', level: 98 },
  { name: 'SEO & Performance', level: 92 },
  { name: 'Gestion de Projet', level: 90 },
];

const AboutPage = ({ baseUrl, disableAnimations, isCrawler }) => {
  // Create LOCAL SEO structured data schemas
  const localBusinessSchema = createLocalBusinessSchema();
  const aboutPageSchema = createWebPageSchema(
    'À Propos - Qui suis-je ?',
    'Je suis Théo, développeur web passionné à Angoulême. Je crée des expériences digitales exceptionnelles depuis plus de 10 ans.',
    `${baseUrl}/about`
  );

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, aboutPageSchema]
  };

  return (
    <>
      <SEO
        title="À Propos - Qui suis-je ?"
        description="Je suis Théo, développeur web passionné à Angoulême. Je crée des expériences digitales exceptionnelles depuis plus de 10 ans."
        canonical="/about"
        schema={schema}
        enableLocalSEO={true}
      />

      <CrawlerPageContent
        isCrawler={isCrawler}
        title="À Propos - Théo Multimédia"
        description="Je suis Théo, développeur web passionné à Angoulême. Je crée des expériences digitales exceptionnelles depuis plus de 10 ans."
        sections={[
          {
            title: "Mon histoire",
            content: "Je suis Théo, développeur web et designer passionné. Mon parcours dans le digital a commencé il y a plus de 10 ans, et depuis, je n'ai cessé d'apprendre, d'innover et de créer. Ce qui me distingue ? Mon engagement total dans chaque projet. Je ne me contente pas de créer des sites web, je crée des expériences qui captivent, engagent et convertissent. Que ce soit pour une startup qui lance son premier site ou une entreprise établie qui souhaite se réinventer, j'apporte la même attention aux détails et la même passion pour l'excellence.",
          },
          {
            title: "Mes valeurs",
            items: values.map(v => `${v.title}: ${v.description}`),
          },
          {
            title: "Mon expertise",
            items: skills.map(s => `${s.name} (${s.level}% de maîtrise)`),
          },
          {
            title: "Expérience",
            items: [
              "Plus de 10 années d'expérience",
              "Plus de 50 projets réalisés",
              "100% de clients satisfaits",
              "Livraison express en 24h disponible"
            ],
          },
        ]}
      />

      <div className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-5xl">
            <ConditionalMotion
              disableAnimations={disableAnimations}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6"
            >
              <ConditionalMotion
                disableAnimations={disableAnimations}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20"
              >
                <span className="text-sm font-medium text-accent">À propos</span>
              </ConditionalMotion>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                Créateur d'expériences<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-500 to-accent">
                  digitales mémorables
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
                Basé à Angoulême, je transforme des idées en sites web exceptionnels
                depuis plus de 10 ans.
              </p>
            </ConditionalMotion>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <ConditionalMotion
              disableAnimations={disableAnimations}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Bonjour ! Je suis <span className="text-foreground font-semibold">Théo</span>,
                  développeur web et designer passionné. Mon parcours dans le digital a commencé
                  il y a plus de 10 ans, et depuis, je n'ai cessé d'apprendre, d'innover et de créer.
                </p>
                <p>
                  Ce qui me distingue ? <span className="text-accent font-semibold">Mon engagement total</span> dans
                  chaque projet. Je ne me contente pas de créer des sites web, je crée des expériences
                  qui captivent, engagent et convertissent.
                </p>
                <p>
                  Que ce soit pour une startup qui lance son premier site ou une entreprise établie
                  qui souhaite se réinventer, j'apporte la même attention aux détails et la même
                  passion pour l'excellence.
                </p>
              </div>
            </ConditionalMotion>
          </div>
        </section>

        {/* AI SEO Expertise Section */}
        <section className="py-32 px-6 bg-gradient-to-br from-accent/5 via-background to-background">
          <div className="container mx-auto max-w-6xl">
            <ConditionalMotion
              disableAnimations={disableAnimations}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-sm font-medium text-accent">Expertise unique</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
                Visible sur <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-500 to-accent">ChatGPT</span> et Google
              </h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
                Aujourd'hui, vos clients vous cherchent sur Google... mais aussi sur ChatGPT, Perplexity et autres IA.
                Je maîtrise les deux pour que vous soyez trouvé partout.
              </p>
            </ConditionalMotion>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <ConditionalMotion
                disableAnimations={disableAnimations}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-card border border-border"
              >
                <div className="text-5xl mb-6">🔍</div>
                <h3 className="text-2xl font-semibold mb-4">Référencement Google classique</h3>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  C'est la base : mots-clés, contenu optimisé, structure technique parfaite.
                  Résultat : vous apparaissez quand vos clients tapent vos services sur Google.
                </p>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Première page Google sur vos mots-clés stratégiques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Trafic qualifié qui cherche exactement vos services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Suivi mensuel de vos positions et résultats</span>
                  </li>
                </ul>
              </ConditionalMotion>

              <ConditionalMotion
                disableAnimations={disableAnimations}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-blue-500/10 border-2 border-accent/30"
              >
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-semibold mb-4">
                  Référencement IA{' '}
                  <span className="text-sm font-normal text-accent">(ChatGPT, Perplexity)</span>
                </h3>
                <p className="text-foreground/60 leading-relaxed mb-6">
                  C'est l'avenir (et déjà le présent) : 800 millions de personnes utilisent ChatGPT chaque semaine.
                  J'optimise votre site pour que les IA vous recommandent à leurs utilisateurs.
                </p>
                <ul className="space-y-3 text-foreground/70">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>ChatGPT recommande votre entreprise quand on lui demande</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Perplexity cite votre site dans ses réponses (+527% de visibilité)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1">✓</span>
                    <span>Contenu structuré pour être compris et cité par les IA</span>
                  </li>
                </ul>
              </ConditionalMotion>
            </div>

            <ConditionalMotion
              disableAnimations={disableAnimations}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-3xl bg-muted/50 border border-border text-center"
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Pourquoi c'est important pour vous ?
              </h3>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-6">
                Imaginez : vos clients demandent à ChatGPT <span className="text-foreground font-semibold">"Trouve-moi un coiffeur à Angoulême"</span> ou
                <span className="text-foreground font-semibold"> "Je cherche un serrurier disponible la nuit"</span>.
              </p>
              <p className="text-xl font-semibold text-accent mb-6">
                Si votre site est optimisé pour l'IA, c'est VOUS que ChatGPT recommande. 🎯
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">800M</div>
                  <div className="text-sm text-foreground/60">utilisateurs ChatGPT/semaine</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">+527%</div>
                  <div className="text-sm text-foreground/60">de trafic venant des IA en 2025</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">10%</div>
                  <div className="text-sm text-foreground/60">du trafic web vient déjà des IA</div>
                </div>
              </div>
            </ConditionalMotion>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <ConditionalMotion
              disableAnimations={disableAnimations}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                Mes valeurs
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light">
                Ce qui guide mon travail au quotidien
              </p>
            </ConditionalMotion>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <ConditionalMotion
                  disableAnimations={disableAnimations}
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-card border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {value.description}
                  </p>
                </ConditionalMotion>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <ConditionalMotion
              disableAnimations={disableAnimations}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                Mon expertise
              </h2>
              <p className="text-xl text-foreground/60 font-light">
                Des compétences affûtées par des années d'expérience
              </p>
            </ConditionalMotion>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <ConditionalMotion
                  disableAnimations={disableAnimations}
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-sm text-foreground/60">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <ConditionalMotion
                      disableAnimations={disableAnimations}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full"
                    />
                  </div>
                </ConditionalMotion>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-accent via-blue-500 to-accent">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-4 gap-12 text-center text-white">
              {[
                { value: "3x", label: "Plus rapide" },
                { value: "+40%", label: "De conversions" },
                { value: "-60%", label: "De CO2" },
                { value: "24h", label: "Livraison express" }
              ].map((stat, index) => (
                <ConditionalMotion
                  disableAnimations={disableAnimations}
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-5xl md:text-6xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </ConditionalMotion>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <ConditionalMotion
              disableAnimations={disableAnimations}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-10 p-16 rounded-[3rem] bg-gradient-to-br from-muted/50 to-muted/30 border border-border"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Travaillons ensemble
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-light">
                Je suis toujours enthousiaste à l'idée de nouveaux projets
                et de rencontrer des entrepreneurs passionnés.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/contact" className="btn btn-primary text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 whitespace-nowrap">
                  Discuter du projet
                </Link>
                <Link href="/portfolio" className="btn btn-secondary text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-5 whitespace-nowrap">
                  Voir le portfolio
                </Link>
              </div>
            </ConditionalMotion>
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
  const userAgent = req.headers['user-agent'] || '';
  const isBot = isCrawler(userAgent);
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl')
  const baseUrl = getSiteUrlFromHeaders(req)
  return {
    props: { 
      baseUrl,
      disableAnimations: isBot,
      isCrawler: isBot
    },
  };
}

export default AboutPage;
