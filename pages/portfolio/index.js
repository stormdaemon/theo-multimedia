import { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';
import AnswerBox from '../../components/AnswerBox';
import Heat from '../../components/Heat';
import Picture from '../../components/Picture';
import WorkCard from '../../components/WorkCard';
import { itemListNode } from '../../lib/schema';
import { projects } from '../../lib/projects';

const host = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');

export default function Portfolio({ online, archives }) {
  const categories = ['Tous', ...Array.from(new Set(archives.map((p) => p.category)))];
  const [filter, setFilter] = useState('Tous');
  const crumbs = [
    ['Accueil', '/'],
    ['Réalisations', '/portfolio'],
  ];

  return (
    <>
      <SEO
        title="Réalisations : boutiques, sites et applications web"
        description="Les réalisations de Théo Multimédia : CBD Impact, CelAssistPro et BR16 Bâtiment en ligne, et les archives de projets passés. Boutiques, sites vitrines, applications web."
        path="/portfolio"
        dateModified="2026-11-05"
        crumbs={crumbs}
        schema={[
          itemListNode(
            '/portfolio',
            [...online, ...archives].map((p) => [p.title, `/portfolio/${p.slug}`]),
          ),
        ]}
      />
      <PageHero
        eyebrow="Réalisations"
        title="Des projets réels, [[en ligne ou en archive.]]"
        lede="Trois sites sont en ligne aujourd’hui. Les autres sont des projets passés, montrés tels qu’ils ont été livrés : c’est indiqué sur chacun."
        crumbs={crumbs}
      />
      <AnswerBox text="Théo Multimédia conçoit des boutiques en ligne, des sites vitrines et des applications web. Trois réalisations sont en ligne : CBD Impact, une boutique sur mesure dont les premières commandes sont arrivées depuis ChatGPT, CelAssistPro et BR16 Bâtiment. Les autres projets sont présentés comme archives." />

      <section className="section" aria-labelledby="online-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">En ligne</p>
            <Heat id="online-title" className="h2" text="Visitez-les, [[ils tournent.]]" />
          </div>
          {online.map((p, i) => (
            <article key={p.slug} className="showcase" aria-labelledby={`p-${p.slug}`}>
              <figure className="browser">
                <div className="chrome" aria-hidden="true">
                  <span className="dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="url">{host(p.url)}</span>
                </div>
                <Picture
                  src={p.shots.desktop}
                  width={1440}
                  height={900}
                  alt={`Page d’accueil du site ${p.title}`}
                  sizes="(min-width: 1100px) 640px, 92vw"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </figure>
              <div className="showcase-text">
                <p className="k">{p.category}</p>
                <h2 id={`p-${p.slug}`}>{p.title}</h2>
                <p>{p.shortDescription}</p>
                {p.results.length > 0 && (
                  <ul className="ticks">
                    {p.results.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                )}
                <div className="hero-ctas">
                  <Link href={`/portfolio/${p.slug}`} className="btn btn-dark">
                    Voir le projet <span className="arrow">→</span>
                  </Link>
                  <a href={p.url} className="link-arrow" target="_blank" rel="noopener">
                    {host(p.url)} <span className="arrow">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="archives-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Archives</p>
            <Heat id="archives-title" className="h2" text="Ce qui a été [[construit avant.]]" />
            <p className="lede">Ces sites ne sont plus en ligne : les captures montrent les projets tels qu’ils ont été livrés.</p>
          </div>
          <div className="filters" role="group" aria-label="Filtrer les archives par type de projet">
            {categories.map((c) => (
              <button key={c} type="button" aria-pressed={filter === c} onClick={() => setFilter(c)}>
                {c}
              </button>
            ))}
          </div>
          <div className="work-grid">
            {archives.map((p) => (
              <div key={p.slug} hidden={filter !== 'Tous' && p.category !== filter} className="work-cell">
                <WorkCard project={p} headingLevel="h3" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const slim = (p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    online: p.online,
    url: p.url,
    image: p.image,
    shots: p.shots || null,
    shortDescription: p.shortDescription,
    results: p.results || [],
  });
  return {
    props: {
      online: projects.filter((p) => p.online && p.shots).map(slim),
      archives: projects.filter((p) => !p.online).map(slim),
    },
  };
}
