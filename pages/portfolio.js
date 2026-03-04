import { motion } from 'motion/react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Lock } from 'lucide-react';
import SEO, { createLocalBusinessSchema, createWebPageSchema, createBreadcrumbSchema } from '../components/SEO';
import { CrawlerPageContent } from '../components/CrawlerContent';
import { getSiteUrlFromHeaders } from '../lib/siteUrl';

const projects = [
  {
    title: 'SOS Chretiens d\'Occident',
    category: 'Site vitrine',
    description: "Site vitrine pour une association de defense de la liberte religieuse. Veille, systeme d'adhesion et formulaire de contact. Design engageant et impactant, optimise SEO.",
    imageUrl: '/sos_chretien_d_occident.png',
    url: 'https://soschretiensdoccident.fr/',
    tags: ['Associatif', 'SEO', 'Conversion']
  },
  {
    title: 'Institut Irenee',
    category: 'Application web',
    description: "Plateforme de formation en ligne avec systeme d'inscription, espace etudiant et gestion de formations diplomantes. Interface pedagogique et performante.",
    imageUrl: '/irenee_institut.png',
    url: 'https://www.irenee-institut.org/',
    tags: ['E-learning', 'React', 'Authentication']
  },
  {
    title: 'Ultreia Event',
    category: 'Site vitrine',
    description: "Agence de communication specialisee en diffusion multi-stream et evenementiel. Site vitrine professionnel avec presentation des services et portfolio de partenaires.",
    imageUrl: '/ultreia_event.png',
    url: 'https://ultreiaevent.com/',
    tags: ['Agence', 'Marketing', 'Design']
  },
  {
    title: 'Revelation Radio',
    category: 'Site vitrine',
    description: "Site vitrine pour une web radio avec presentation des emissions et lecteur audio integre. Design moderne et experience utilisateur optimisee.",
    imageUrl: '/revelation.png',
    url: null,
    tags: ['Design', 'Audio', 'Responsive']
  },
  {
    title: 'Fesch 2025',
    category: 'Site vitrine',
    description: 'Site promotionnel pour le documentaire "Fesch 2025, du non-sens au Mystere". Design cinematographique et immersif, optimise pour le partage social.',
    imageUrl: '/fesch.png',
    url: 'https://fesch2025.fr/',
    tags: ['Design', 'Marketing', 'Video']
  },
  {
    title: 'Heaven Radio',
    category: 'Web radio',
    description: "Web radio avec experience audio enrichie et design repense. Interface moderne, intuitive, streaming en temps reel et navigation fluide.",
    imageUrl: '/heavenradio.png',
    url: 'https://heavenradio.fr/',
    tags: ['Audio', 'Streaming', 'Design']
  },
  {
    title: 'BR16BATIMENT',
    category: 'Site vitrine',
    description: "Site vitrine professionnel pour un artisan batiment. Presentation des services, portfolio de realisations et formulaire de contact. SEO local optimise.",
    imageUrl: '/BR16BAPTIMENT.png',
    url: 'https://br16batiment.netlify.app/',
    tags: ['Vitrine', 'SEO Local', 'Responsive']
  },
  {
    title: "Le Bapteme Catholique",
    category: "Landing page",
    description: "Landing page de generation de leads avec design epure et parcours utilisateur optimise pour la conversion. Taux de conversion ameliore de +40%.",
    imageUrl: "/baptemecatholique.png",
    url: "https://lebaptemecatholique.fr/",
    tags: ['Landing', 'Conversion', 'SEO']
  },
  {
    title: "TRACKWARS",
    category: "Application web",
    description: "Jeu de blind test musical innovant pour les professionnels de l'evenementiel. Interface ludique, temps reel et performante.",
    imageUrl: "/trackwars.png",
    url: "https://trackwars.fr/",
    tags: ['Gaming', 'React', 'Audio']
  }
];

const PortfolioPage = ({ baseUrl, isCrawler: isCrawlerBot }) => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'Site vitrine', 'Web radio', 'Application web', 'Landing page'];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const localBusinessSchema = createLocalBusinessSchema();
  const portfolioPageSchema = createWebPageSchema(
    'Portfolio - Realisations Web a Angouleme',
    'Decouvrez les sites internet, applications web et projets digitaux crees par Theo Multimedia. Sites ultra-rapides, eco-concus et optimises pour Google et les IA.',
    `${baseUrl}/portfolio`
  );
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
  ]);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [localBusinessSchema, portfolioPageSchema, breadcrumbSchema]
  };

  return (
    <>
      <SEO
        title="Portfolio - Sites Web et Applications sur Mesure"
        description="Decouvrez mes realisations : sites internet ultra-rapides, applications web et projets digitaux optimises pour Google et les IA. Angouleme, Charente."
        canonical="/portfolio"
        schema={schema}
      />

      <CrawlerPageContent
        isCrawler={isCrawlerBot}
        title="Portfolio - Realisations de Theo Multimedia"
        description="Decouvrez les sites internet, applications web et projets digitaux crees par Theo Multimedia, agence web a Angouleme. Chaque projet est ultra-rapide, eco-concu et optimise pour le referencement Google et les moteurs de recherche IA."
        sections={[
          {
            title: "Nos realisations web",
            content: "Chaque projet est concu pour performer : temps de chargement inferieur a 1 seconde, score Google PageSpeed 95+/100, design responsive, eco-conception, et optimisation SEO complete pour Google et les intelligences artificielles.",
          },
          {
            title: "Projets clients",
            items: projects.filter(p => p.url).map(p => `${p.title} - ${p.category}: ${p.description} (${p.url})`),
          },
          {
            title: "Technologies utilisees",
            items: [
              "Next.js avec rendu serveur (SSR) pour performance et SEO optimal",
              "React pour interfaces modernes et reactives",
              "Tailwind CSS pour design sur-mesure et responsive",
              "Optimisation SEO avancee Google et IA (ChatGPT, Perplexity, Gemini)",
              "Eco-conception web : sites 60% plus legers que la moyenne",
            ],
          },
          {
            title: "Resultats obtenus",
            items: [
              "Temps de chargement inferieur a 1 seconde",
              "Score Google PageSpeed 95+/100",
              "Design responsive mobile, tablette et desktop",
              "-60% d'empreinte carbone par rapport aux sites traditionnels",
              "+40% de taux de conversion en moyenne",
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
                <span className="text-xs font-medium text-accent uppercase tracking-wider">Portfolio</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-[var(--font-heading)] leading-[1.1] mb-6" data-speakable="true">
                Des sites qui<br />
                <span className="text-accent">generent des resultats.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Ultra-rapides, eco-concus, optimises pour convertir.
                Chaque projet est pense pour performer sur Google et les IA.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── FILTERS ─── */}
        <section className="py-6 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === cat
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-card border border-border text-muted-foreground hover:border-accent/30 hover:text-foreground'
                  }`}
                >
                  {cat === 'all' ? 'Tous les projets' : cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── PROJECTS GRID ─── */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div layout className="grid md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="group"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-4">
                    {project.imageUrl && (
                      <Image
                        src={project.imageUrl}
                        alt={`${project.title} - ${project.category} par Theo Multimedia`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={85}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:scale-105 transition-transform"
                        >
                          Voir le projet
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-lg text-sm font-medium backdrop-blur-sm">
                          <Lock className="w-3.5 h-3.5" />
                          Projet confidentiel
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-accent font-medium uppercase tracking-wider">{project.category}</span>
                      <div className="h-1 w-1 rounded-full bg-border" />
                      <div className="flex gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs text-muted-foreground">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold font-[var(--font-heading)] group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <section className="py-16 px-6 bg-card border-y border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { value: "3x", label: "Plus rapide que la moyenne" },
                { value: "+40%", label: "Taux de conversion" },
                { value: "-60%", label: "Empreinte carbone" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent font-[var(--font-heading)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
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
                  Votre projet sera le prochain ?
                </h2>
                <p className="text-accent-foreground/80 text-lg mb-8 max-w-lg mx-auto">
                  Discutons de votre vision. Devis gratuit, reponse en moins de 24h.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-accent rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    Demarrer mon projet
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
  return {
    props: {
      baseUrl,
      isCrawler: isCrawler(userAgent),
    },
  };
}

export default PortfolioPage;
