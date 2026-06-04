import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SEO, { createLocalBusinessSchema, createWebPageSchema, createBreadcrumbSchema } from '../components/SEO';
import { CrawlerPageContent } from '../components/CrawlerContent';
import { getSiteUrlFromHeaders } from '../lib/siteUrl';
import PageFeatureBand from '../components/PageFeatureBand';

const projects = [
  {
    title: 'SOS Chrétiens d’Occident',
    category: 'Site vitrine',
    description: 'Site vitrine associatif avec message fort, hiérarchie éditoriale claire, appels à l’action visibles et parcours optimisé pour informer, rassurer et convertir.',
    imageUrl: '/assets/portfolio-live/sos-chretiens-occident.png',
    url: 'https://soschretiensdoccident.fr/',
    tags: ['Associatif', 'SEO', 'Conversion']
  },
  {
    title: 'Institut Irénée',
    category: 'Application web',
    description: 'Plateforme de formation avec présentation institutionnelle, parcours d’inscription, contenus structurés et interface pensée pour la crédibilité académique.',
    imageUrl: '/assets/portfolio-live/institut-irenee.png',
    url: 'https://www.irenee-institut.org/',
    tags: ['E-learning', 'Institution', 'Formation']
  },
  {
    title: 'OnlyPrompt',
    category: 'Application web',
    description: 'Produit IA en bêta testing, pensé comme une alternative aux outils de création type Bolt ou Lovable. Interface encore en évolution, orientée prompt, génération et productivité.',
    imageUrl: '/assets/portfolio-live/onlyprompt.png',
    url: null,
    tags: ['IA', 'SaaS', 'Bêta']
  },
  {
    title: 'CelAssistPro',
    category: 'Application web',
    description: 'Service digital d’assistance professionnelle avec interface claire, promesse directe et parcours conçu pour guider rapidement vers la prise de contact.',
    imageUrl: '/assets/portfolio-live/celassistpro.png',
    url: 'https://celassistpro.fr/',
    tags: ['Service', 'Conversion', 'Interface']
  },
  {
    title: 'Heaven Radio',
    category: 'Web radio',
    description: 'Web radio avec écoute en ligne, identité visuelle assumée, contenus mis en avant et expérience pensée pour une consultation rapide sur mobile comme desktop.',
    imageUrl: '/assets/portfolio-live/heaven-radio.png',
    url: 'https://heavenradio.fr/',
    tags: ['Audio', 'Streaming', 'Web radio']
  },
  {
    title: 'WikiBible',
    category: 'Application web',
    description: 'Bibliothèque numérique autour des textes bibliques, avec une interface de consultation sobre, structurée et pensée pour rendre le contenu accessible.',
    imageUrl: '/assets/portfolio-live/wikibible.png',
    url: 'https://wikibible.fr/',
    tags: ['Contenu', 'Recherche', 'Culture']
  },
  {
    title: 'Ultreia Event',
    category: 'Site vitrine',
    description: 'Site vitrine événementiel pour présenter une offre de diffusion, mettre en avant les services et donner une image professionnelle dès la première visite.',
    imageUrl: '/assets/portfolio-live/ultreia-event.png',
    url: 'https://ultreiaevent.com/',
    tags: ['Événementiel', 'Streaming', 'Design']
  },
  {
    title: 'Révélation Radio',
    category: 'Site vitrine',
    description: 'Site vitrine pour une web radio avec présentation des émissions, univers éditorial identifiable et expérience de lecture simple.',
    imageUrl: '/revelation.png',
    url: null,
    tags: ['Design', 'Audio', 'Responsive']
  },
  {
    title: 'Fesch 2025',
    category: 'Site vitrine',
    description: 'Site promotionnel pour le documentaire « Fesch 2025, du non-sens au Mystère ». Design cinématographique et immersif, optimisé pour le partage social.',
    imageUrl: '/fesch.png',
    url: null,
    tags: ['Design', 'Marketing', 'Vidéo']
  },
  {
    title: 'BR16 Bâtiment',
    category: 'Site vitrine',
    description: 'Site vitrine local pour un artisan du bâtiment, avec présentation des services, preuves visuelles et parcours de contact rapide.',
    imageUrl: '/assets/portfolio-live/br16-batiment.png',
    url: 'https://br16batiment.netlify.app/',
    tags: ['Vitrine', 'SEO Local', 'Responsive']
  },
  {
    title: 'Le Baptême Catholique',
    category: 'Landing page',
    description: 'Landing page de génération de leads avec design épuré, structure pédagogique et parcours de conversion travaillé.',
    imageUrl: '/assets/portfolio-live/bapteme-catholique.png',
    url: 'https://lebaptemecatholique.fr/',
    tags: ['Landing', 'Conversion', 'SEO']
  },
  {
    title: 'TRACKWARS',
    category: 'Application web',
    description: 'Jeu de blind test musical pour professionnels de l’événementiel. Interface ludique, rythme rapide et expérience pensée pour l’animation en direct.',
    imageUrl: '/trackwars.png',
    url: null,
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
    'Portfolio - Réalisations Web à Angoulême',
    'Découvrez les sites internet, applications web et projets digitaux créés par Théo Multimédia. Sites ultra-rapides, éco-conçus et optimisés pour Google et les IA.',
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
        description="Découvrez mes réalisations : sites internet ultra-rapides, applications web et projets digitaux optimisés pour Google et les IA. Angoulême, Charente."
        canonical="/portfolio"
        schema={schema}
      />

      <CrawlerPageContent
        isCrawler={isCrawlerBot}
        title="Portfolio - Réalisations de Théo Multimédia"
        description="Découvrez les sites internet, applications web et projets digitaux créés par Théo Multimédia, agence web à Angoulême. Chaque projet est ultra-rapide, éco-conçu et optimisé pour le référencement Google et les moteurs de recherche IA."
        sections={[
          {
            title: "Nos réalisations web",
            content: "Chaque projet est conçu pour performer : temps de chargement inférieur à 1 seconde, score Google PageSpeed 95+/100, design responsive, éco-conception, et optimisation SEO complète pour Google et les intelligences artificielles.",
          },
          {
            title: "Projets clients",
            items: projects.filter(p => p.url).map(p => `${p.title} - ${p.category}: ${p.description} (${p.url})`),
          },
          {
            title: "Technologies utilisées",
            items: [
              "Next.js avec rendu serveur (SSR) pour performance et SEO optimal",
              "React pour interfaces modernes et réactives",
              "Tailwind CSS pour design sur-mesure et responsive",
              "Optimisation SEO avancée Google et IA (ChatGPT, Perplexity, Gemini)",
              "Éco-conception web: images compressées et code maîtrisé",
            ],
          },
          {
            title: "Résultats obtenus",
            items: [
              "Temps de chargement inférieur à 1 seconde",
              "Score Google PageSpeed 95+/100",
              "Design responsive mobile, tablette et desktop",
              "Approche numérique sobre et optimisée",
              "Parcours de conversion travaillé selon chaque activité",
            ],
          },
        ]}
      />

      <div className="bg-background">
        {/* ─── HERO ─── */}
        <section className="tm-subpage-hero relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden">
          <div className="tm-subpage-art" style={{ backgroundImage: "url('/assets/portfolio-hero-project-wall.webp')" }} />
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
                <span className="text-xs font-medium text-accent uppercase tracking-wider">Portfolio</span>
              </div>

              <h1 className="text-[42px] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-[var(--font-heading)] leading-[1.04] sm:leading-[1.1] mb-6" data-speakable="true">
                Des sites qui<br />
                <span className="text-accent">génèrent des<span className="sm:hidden"><br /></span><span className="hidden sm:inline"> </span>résultats.</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Ultra-rapides, éco-conçus, optimisés pour convertir.
                Chaque projet est pensé pour performer sur Google et les IA.
              </p>
            </motion.div>
          </div>
        </section>

        <PageFeatureBand
          eyebrow="Des projets avec une identite"
          title="Une vitrine différente pour chaque activité."
          description="Chaque réalisation part du contexte client : audience, message, rythme de lecture et action attendue. Le portfolio montre des univers, pas un template décliné."
          artwork="/assets/portfolio-case-study-orange-glow.webp"
          items={[
            { icon: '/assets/icon-design-orange.webp', title: 'Univers distincts', text: 'Association, formation, radio, événementiel ou artisanat : chaque interface change de langage.' },
            { icon: '/assets/icon-laptop-orange.webp', title: 'Responsive travaillé', text: 'Les parcours restent lisibles sur ordinateur, tablette et mobile sans perte de densité.' },
            { icon: '/assets/icon-target-orange.webp', title: 'Objectif visible', text: 'Chaque écran conduit vers une action claire : contact, inscription, écoute ou conversion.' },
          ]}
        />

        {/* ─── FILTERS ─── */}
        <section className="py-6 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
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
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="tm-glass-soft group rounded-xl p-3"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted mb-4">
                    {project.imageUrl && (
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} - ${project.category} par Théo Multimédia`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg text-sm font-medium transition-transform"
                        >
                          Voir le projet
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-white rounded-lg text-sm font-medium backdrop-blur-sm">
                          Lien indisponible
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
        <section className="py-16 px-6 border-y border-border">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { value: "24h", label: "Option express pour votre site vitrine" },
                { value: "SEO", label: "Visibilité locale pensée dès la conception" },
                { value: "Sur mesure", label: "Une interface adaptée à votre activité" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="tm-glass-soft text-center p-4 rounded-xl"
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
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="tm-audit tm-glass p-6 sm:p-10 md:p-16 rounded-2xl text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground font-[var(--font-heading)] tracking-tight mb-4">
                  Votre projet sera le prochain ?
                </h2>
                <p className="text-accent-foreground/80 text-lg mb-8 max-w-lg mx-auto">
                  Discutons de votre vision. Devis gratuit, réponse en moins de 24h.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-accent rounded-lg font-medium hover:bg-white/90 transition-colors"
                  >
                    Démarrer mon projet
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
