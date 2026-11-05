import Link from 'next/link';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';
import AnswerBox from '../../components/AnswerBox';
import Heat from '../../components/Heat';
import Picture from '../../components/Picture';
import ShotScroll from '../../components/ShotScroll';
import { projectNode } from '../../lib/schema';
import { projects, getProject } from '../../lib/projects';
import { serviceIndex } from '../../lib/services-data';
import { formatDate } from '../../lib/text';

const host = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

export default function Project({ p, services, prev, next, updatedLabel }) {
  const path = `/portfolio/${p.slug}`;
  const crumbs = [
    ['Accueil', '/'],
    ['Réalisations', '/portfolio'],
    [p.title, path],
  ];
  const cover = `${p.shots?.desktop || p.image}.webp`;

  return (
    <>
      <SEO
        title={`${p.title} : ${p.category.toLowerCase()} | Réalisation`}
        description={p.shortDescription}
        path={path}
        image={p.shots ? cover : undefined}
        imageSize={p.shots ? [1440, 900] : undefined}
        crumbs={crumbs}
        dateModified={p.updatedAt}
        schema={[projectNode(p, cover)]}
      />
      <PageHero
        eyebrow={`${p.category} · ${p.online ? 'En ligne' : 'Archive'}`}
        title={p.online ? `${p.title} [[en ligne.]]` : p.title}
        lede={p.shortDescription}
        crumbs={crumbs}
      >
        <div className="hero-ctas">
          {p.online && p.url ? (
            <a href={p.url} className="btn btn-primary" target="_blank" rel="noopener">
              Visiter {host(p.url)} <span className="arrow">↗</span>
            </a>
          ) : null}
          <Link href={`/contact?service=${services[0]?.slug || 'creation-site-internet'}`} className="link-arrow">
            Un projet similaire ? <span className="arrow">→</span>
          </Link>
        </div>
        <p className="page-meta">
          Fiche mise à jour le <time dateTime={p.updatedAt}>{updatedLabel}</time>
        </p>
      </PageHero>
      <AnswerBox label="Le projet en bref" text={p.longDescription} />

      <section className="section" aria-label="Captures du site">
        <div className="container">
          {p.shots ? (
            <div className="device-pair">
              <figure className="browser">
                <div className="chrome" aria-hidden="true">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="url">{host(p.url)}</span>
                </div>
                <ShotScroll src={p.shots.full} width={1200} height={4600} alt={`Page d’accueil complète du site ${p.title}`} />
              </figure>
              <figure className="phone">
                <Picture src={p.shots.mobile} width={585} height={1266} alt={`Le site ${p.title} sur mobile`} sizes="260px" />
              </figure>
            </div>
          ) : (
            <figure className="browser archive-shot">
              <div className="chrome" aria-hidden="true">
                <span className="dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="url">Archive · {p.title}</span>
              </div>
              <Picture src={p.image} width={800} height={500} alt={`Capture du projet ${p.title}`} sizes="(min-width: 1100px) 1000px, 92vw" />
              <figcaption>Ce site n’est plus en ligne : la capture montre le projet tel qu’il a été livré.</figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="details-title">
        <div className="container split split--top">
          <div className="section-head">
            <p className="eyebrow">Le projet</p>
            <Heat id="details-title" className="h2" text="Objectifs [[et réponses.]]" />
            <dl className="facts">
              <div>
                <dt>Type</dt>
                <dd>{p.category}</dd>
              </div>
              <div>
                <dt>Statut</dt>
                <dd>
                  {p.online && p.url ? (
                    <a className="text-link" href={p.url} target="_blank" rel="noopener">
                      En ligne · {host(p.url)}
                    </a>
                  ) : (
                    'Archive, plus en ligne'
                  )}
                </dd>
              </div>
              <div>
                <dt>Techniques</dt>
                <dd>{p.technologies.join(', ')}</dd>
              </div>
              <div>
                <dt>Réalisé par</dt>
                <dd>Théo Multimédia, Cognac</dd>
              </div>
            </dl>
          </div>
          <div className="project-notes">
            <h3>Objectifs</h3>
            <ul className="ticks">
              {p.objectives.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
            {p.results.length > 0 && (
              <>
                <h3>Résultats</h3>
                <ul className="ticks">
                  {p.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </>
            )}
            {services.length > 0 && (
              <>
                <h3>Services mobilisés</h3>
                <nav className="related" aria-label="Services liés au projet">
                  {services.map((s) => (
                    <Link key={s.slug} href={`/${s.slug}`}>
                      {s.title}
                      <span className="arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  ))}
                </nav>
              </>
            )}
          </div>
        </div>
      </section>

      <nav className="section section-tight project-nav" aria-label="Autres réalisations">
        <div className="container">
          <Link href={`/portfolio/${prev.slug}`} className="prev">
            <span className="k">Projet précédent</span>
            <span className="t">← {prev.title}</span>
          </Link>
          <Link href={`/portfolio/${next.slug}`} className="next">
            <span className="k">Projet suivant</span>
            <span className="t">{next.title} →</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: projects.map((p) => ({ params: { slug: p.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const p = getProject(params.slug);
  if (!p) return { notFound: true };
  const i = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const services = (p.services || [])
    .map((href) => serviceIndex.find((s) => `/${s.slug}` === href))
    .filter(Boolean)
    .map((s) => ({ slug: s.slug, title: s.title }));
  return {
    props: {
      p: {
        ...p,
        url: p.url || null,
        shots: p.shots || null,
        results: p.results || [],
        objectives: p.objectives || [],
        technologies: p.technologies || [],
      },
      services,
      prev: { slug: prev.slug, title: prev.title },
      next: { slug: next.slug, title: next.title },
      updatedLabel: formatDate(p.updatedAt),
    },
  };
}
