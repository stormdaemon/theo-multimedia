import { useState } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';
import AnswerBox from '../../components/AnswerBox';
import Heat from '../../components/Heat';
import { itemListNode } from '../../lib/schema';
import { articles, categories, featuredSlugs, getArticle, summarize } from '../../lib/blog';

export default function Blog({ posts, featured, cats }) {
  const [cat, setCat] = useState('Tous');
  const crumbs = [
    ['Accueil', '/'],
    ['Guides', '/blog'],
  ];
  const count = (c) => (c === 'Tous' ? posts.length : posts.filter((p) => p.category === c).length);

  return (
    <>
      <SEO
        title="Guides GEO, SEO local et création de site"
        description={`${posts.length} guides pratiques pour être visible sur Google, sur Google Maps et dans les réponses des IA : GEO, SEO local, création et refonte de site, outils sur mesure.`}
        path="/blog"
        pageType="CollectionPage"
        dateModified={posts[0]?.updatedAt}
        crumbs={crumbs}
        schema={[
          itemListNode(
            '/blog',
            posts.map((p) => [p.title, `/blog/${p.slug}`]),
          ),
        ]}
      />
      <PageHero
        eyebrow="Ressources"
        title="Des guides clairs, [[sans jargon ni promesse.]]"
        lede="GEO, SEO local, création de site, refonte, outils sur mesure : chaque guide commence par une réponse courte, puis détaille la méthode, avec des exemples concrets."
        crumbs={crumbs}
      />
      <AnswerBox
        label="En bref"
        text={`Le blog de Théo Multimédia rassemble ${posts.length} guides pratiques pour les entreprises de Charente et d’ailleurs : être cité par ChatGPT, Perplexity ou Gemini, apparaître sur Google Maps, réussir une création ou une refonte de site, et choisir un outil sur mesure.`}
      />

      <section className="section" aria-labelledby="featured-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Pour commencer</p>
            <Heat id="featured-title" className="h2" text="Trois guides [[pour tout comprendre au GEO.]]" />
          </div>
          <div className="featured-posts">
            {featured.map((g) => (
              <Link key={g.slug} href={`/blog/${g.slug}`}>
                <span className="k">{g.category}</span>
                <h3>{g.title}</h3>
                <span className="rt">{g.readingMinutes} min de lecture →</span>
              </Link>
            ))}
          </div>

          <h2 id="all-title" className="h3 all-title">
            Tous les guides
          </h2>
          <div className="cat-nav" role="group" aria-label="Filtrer les guides par thème">
            {['Tous', ...cats].map((c) => (
              <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}>
                {c} <span className="n">{count(c)}</span>
              </button>
            ))}
          </div>
          <div className="post-list">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="post-row"
                hidden={cat !== 'Tous' && p.category !== cat}
              >
                <span className="cat">{p.category}</span>
                <div>
                  <h3 className="post-title">{p.title}</h3>
                  <p>{p.description}</p>
                </div>
                <span className="rt">{p.readingMinutes} min</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: articles.map(summarize),
      featured: featuredSlugs.map((s) => summarize(getArticle(s))),
      cats: categories,
    },
  };
}
