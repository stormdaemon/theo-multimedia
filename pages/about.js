import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

const values = [
  {
    icon: "⚡",
    title: 'Performance',
    description: "Sites 3x plus rapides que la moyenne. Chaque milliseconde compte : vos visiteurs restent, Google vous aime, vous vendez plus.",
  },
  {
    icon: "🌱",
    title: 'Écologie',
    description: "Internet pollue. Je code léger pour réduire de 60% l'empreinte carbone de vos sites. Bon pour la planète, bon pour votre image.",
  },
  {
    icon: "📈",
    title: 'Conversion',
    description: "Des sites qui transforment vos visiteurs en clients. Design persuasif, parcours optimisés : +40% de conversions en moyenne.",
  },
  {
    icon: "💬",
    title: 'Clarté',
    description: "Zéro jargon technique. Je vous explique tout simplement, vous comprenez parfaitement, vous décidez en confiance.",
  }
];

const skills = [
  { name: 'Sites ultra-rapides', level: 98 },
  { name: 'Design qui convertit', level: 95 },
  { name: 'Visible sur Google', level: 93 },
  { name: 'Éco-conception', level: 90 },
];

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>À Propos - Qui suis-je ? | Théo Multimédia</title>
        <meta name="description" content="Je suis Théo, développeur web passionné à Angoulême. Je crée des expériences digitales exceptionnelles depuis plus de 10 ans." />
        <meta name="author" content="Théo LAFONT" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.theomultimedia.com/about" />
        <meta property="og:title" content="À Propos - Qui suis-je ? | Théo Multimédia" />
        <meta property="og:description" content="Je suis Théo, développeur web passionné à Angoulême." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.theomultimedia.com/about" />
      </Head>

      <div className="bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-5xl">
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
                <span className="text-sm font-medium text-accent">À propos</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
                Sites qui chargent en 1s<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-blue-500 to-accent">
                  et qui cartonnent
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
                Basé à Angoulême, je crée des sites ultra-rapides, éco-responsables,
                et optimisés pour convertir depuis plus de 10 ans.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Salut ! Je suis <span className="text-foreground font-semibold">Théo</span>, et je crée des sites web
                  qui cartonnent. Pas juste des sites "jolis" — des sites qui <span className="text-accent font-semibold">génèrent des résultats business</span>.
                </p>
                <p>
                  Ma spécialité ? <span className="text-accent font-semibold">Sites 3x plus rapides</span> que la moyenne,
                  qui convertissent 40% mieux, tout en réduisant de 60% l'empreinte carbone.
                  Performance + Conversion + Écologie = Sites qui durent et qui rapportent.
                </p>
                <p>
                  J'ai arrêté de parler "code" et "techno". Je parle <span className="text-foreground font-semibold">résultats</span> :
                  plus de visiteurs qui restent, plus de clients qui achètent, moins d'énergie gaspillée.
                  Simple, clair, efficace.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div
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
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
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
            </motion.div>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
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
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>
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
                <motion.div
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
                <Link href="/contact" className="btn btn-primary text-lg px-10 py-5">
                  Parlons de votre projet
                </Link>
                <Link href="/portfolio" className="btn btn-secondary text-lg px-10 py-5">
                  Voir mon travail
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
