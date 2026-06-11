import { motion } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import SEO, { createBreadcrumbSchema, createLocalBusinessSchema, createWebPageSchema } from '../components/SEO';
import { absoluteUrl } from '../lib/business';
import PageFeatureBand from '../components/PageFeatureBand';
import { projectCategories, projects } from '../lib/projects';

const PortfolioPage = () => {
  const [filter, setFilter] = useState('Tous les projets');
  const filteredProjects = filter === 'Tous les projets'
    ? projects
    : projects.filter((project) => project.category === filter);

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      createLocalBusinessSchema(),
      createWebPageSchema(
        'Portfolio - Réalisations web en Charente',
        'Sites vitrines, applications web, web radios, landing pages et projets sur mesure créés par Théo Multimédia.',
        absoluteUrl('/portfolio')
      ),
      createBreadcrumbSchema([
        { name: 'Accueil', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
      ]),
    ],
  };

  return (
    <>
      <SEO
        title="Portfolio - Sites web, SEO local et applications"
        description="Découvrez les réalisations Théo Multimédia : sites vitrines, applications web, web radio, landing pages et projets sur mesure."
        canonical="/portfolio"
        schema={schema}
      />


      <div className="bg-background">
        <section className="tm-subpage-hero relative overflow-hidden px-6 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="tm-subpage-art" style={{ backgroundImage: "url('/assets/portfolio-hero-project-wall.webp')" }} />
          <div className="max-w-6xl mx-auto relative">
            <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <span className="tm-badge">Portfolio</span>
              <h1 className="tm-title mt-5 text-[42px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl" data-speakable="true">
                Des sites qui<br />
                <span className="text-accent">servent un vrai objectif.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Captures réelles quand elles sont disponibles, tags harmonisés et pages détail pour comprendre le contexte de chaque projet.
              </p>
            </motion.div>
          </div>
        </section>

        <PageFeatureBand
          eyebrow="Des projets avec une identité"
          title="Une vitrine différente pour chaque activité."
          description="Chaque réalisation part du contexte client : audience, message, rythme de lecture et action attendue."
          artwork="/assets/portfolio-case-study-orange-glow.webp"
          items={[
            { icon: '/assets/icon-design-orange.webp', title: 'Univers distincts', text: 'Association, formation, radio, événementiel ou artisanat : chaque interface change de langage.' },
            { icon: '/assets/icon-laptop-orange.webp', title: 'Adapté à tous les écrans', text: 'Les parcours restent lisibles sur ordinateur, tablette et mobile.' },
            { icon: '/assets/icon-target-orange.webp', title: 'Objectif visible', text: 'Chaque écran conduit vers une action claire : contact, inscription, écoute ou conversion.' },
          ]}
        />

        <section className="px-6 py-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2" role="list" aria-label="Filtres portfolio">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  aria-pressed={filter === cat}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === cat
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-card border border-border text-muted-foreground hover:border-accent/30 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div layout className="grid gap-6 md:grid-cols-2">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.slug}
                  layout
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  className="tm-glass-soft group rounded-xl p-3"
                >
                  <Link href={`/portfolio/${project.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl">
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-muted mb-4">
                      <img
                        src={project.imageDesktop}
                        alt={`${project.title} - ${project.category} par Théo Multimédia`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                      />
                      <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-100 md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} className="rounded-full border border-white/20 bg-black/45 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs text-accent font-medium uppercase tracking-wider">{project.category}</span>
                        {project.url && <span className="text-xs text-muted-foreground">Projet en ligne</span>}
                      </div>
                      <h2 className="text-xl font-semibold font-[var(--font-heading)] group-hover:text-accent transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.shortDescription}</p>
                    </div>
                  </Link>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link href={`/portfolio/${project.slug}`} className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white">
                      Étudier le cas <ArrowRight className="h-4 w-4" />
                    </Link>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-bold text-slate-200 hover:text-accent">
                        Voir le projet <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    <Link href="/contact?service=projet-similaire" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-bold text-slate-200 hover:text-accent">
                      Créer un projet similaire
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-6 pb-24 md:pb-32">
          <div className="max-w-3xl mx-auto">
            <div className="tm-audit tm-glass p-6 sm:p-10 md:p-16 rounded-2xl text-center relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground font-[var(--font-heading)] tracking-tight mb-4">
                  Votre projet sera le prochain ?
                </h2>
                <p className="text-accent-foreground/80 text-lg mb-8 max-w-lg mx-auto">
                  Discutons de votre vision. Devis gratuit, réponse sous 24h ouvrées.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact?service=projet-similaire" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-accent rounded-lg font-medium hover:bg-white/90 transition-colors">
                    Démarrer mon projet <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-accent-foreground border border-white/20 rounded-lg font-medium hover:bg-white/20 transition-colors">
                    Voir les services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;
