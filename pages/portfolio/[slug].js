import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import SEO, { createBreadcrumbSchema, createLocalBusinessSchema } from '../../components/SEO';
import { absoluteUrl, business } from '../../lib/business';
import { getProject, projects } from '../../lib/projects';

export default function ProjectPage({ project }) {
  const canonical = `/portfolio/${project.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      createLocalBusinessSchema(),
      createBreadcrumbSchema([
        { name: 'Accueil', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
        { name: project.title, url: canonical },
      ]),
      {
        '@type': 'CreativeWork',
        '@id': `${absoluteUrl(canonical)}#creativework`,
        name: project.title,
        description: project.longDescription,
        creator: {
          '@type': 'Organization',
          name: business.brandName,
        },
        image: absoluteUrl(project.imageDesktop),
        url: absoluteUrl(canonical),
        dateModified: project.updatedAt,
      },
    ],
  };

  return (
    <>
      <SEO
        title={`${project.title} | Réalisation web`}
        description={project.shortDescription}
        canonical={canonical}
        ogImage={project.imageDesktop}
        schema={schema}
        keywords={project.tags}
      />

      <div className="bg-background">
        <section className="tm-subpage-hero relative overflow-hidden px-6 pb-16 pt-24 md:pb-24 md:pt-32">
          <div className="tm-subpage-art" style={{ backgroundImage: `url('${project.imageDesktop}')` }} />
          <div className="mx-auto max-w-6xl relative">
            <nav aria-label="Fil d’Ariane" className="mb-6 text-xs text-slate-400">
              <Link href="/" className="hover:text-accent">Accueil</Link>
              <span className="mx-2">/</span>
              <Link href="/portfolio" className="hover:text-accent">Portfolio</Link>
            </nav>
            <span className="tm-badge">{project.category}</span>
            <h1 className="tm-title mt-5 max-w-4xl text-4xl leading-[1.05] md:text-6xl">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{project.shortDescription}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="tm-button tm-button-primary">
                  Voir le projet <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <Link href="/contact?service=projet-similaire" className="tm-button tm-button-dark">Créer un projet similaire</Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div className="tm-thick-glass overflow-hidden rounded-3xl">
              <img src={project.imageDesktop} alt={`${project.title} - aperçu de réalisation web`} className="aspect-video w-full object-cover" />
              <div className="p-6 md:p-8">
                <p className="tm-kicker">Contexte et mission</p>
                <h2 className="tm-title mt-2 text-3xl">Un projet construit autour d’un besoin concret.</h2>
                <p className="mt-5 text-sm leading-7 text-slate-300">{project.longDescription}</p>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="tm-glass-soft rounded-2xl p-5">
                <p className="tm-kicker">Tags</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="tm-glass-soft rounded-2xl p-5">
                <p className="tm-kicker">Technologies</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
                </ul>
              </div>
              <div className="tm-glass-soft rounded-2xl p-5">
                <p className="tm-kicker">Objectifs</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {project.objectives.map((objective) => <li key={objective}>{objective}</li>)}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="px-6 pb-20 md:pb-28">
          <div className="mx-auto max-w-6xl">
            <p className="tm-kicker">Services liés</p>
            <h2 className="tm-title mt-2 text-3xl">Construire une base similaire</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.services.map((href) => (
                <Link key={href} href={href} className="tm-glass-soft flex min-h-24 items-center justify-between rounded-2xl p-5 text-sm font-bold text-slate-100 hover:text-accent">
                  <span>{href.replace('/', '').replaceAll('-', ' ')}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
              <Link href="/contact?service=projet-similaire" className="tm-glass-soft flex min-h-24 items-center justify-between rounded-2xl p-5 text-sm font-bold text-slate-100 hover:text-accent">
                <span>Créer un projet similaire</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProject(params.slug);

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
}
