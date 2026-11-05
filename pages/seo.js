import Link from 'next/link';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import AnswerBox from '../components/AnswerBox';
import Heat from '../components/Heat';
import Faq from '../components/Faq';
import ServiceCards from '../components/ServiceCards';
import { faqNode, itemListNode } from '../lib/schema';
import { serviceIndex } from '../lib/services-data';
import { articles, summarize } from '../lib/blog';

const SLUGS = ['geo-referencement-ia', 'referencement-local', 'audit-seo-gratuit', 'refonte-site-internet'];
const GUIDE_CATEGORIES = ['GEO & IA', 'SEO local'];

const compare = [
  ['Objectif', 'Être bien classé dans les résultats et sur Google Maps.', 'Être repris et cité dans les réponses des IA.'],
  [
    'Où ça se voit',
    'Résultats de Google et de Bing, Google Maps.',
    'ChatGPT, Perplexity, Gemini, Copilot, AI Overviews et AI Mode de Google.',
  ],
  [
    'Ce qui compte',
    'Indexation, pertinence des pages, liens, fiche Google Business Profile, avis.',
    'Pages lisibles par les robots, réponses nettes, faits vérifiables, informations identiques partout.',
  ],
  [
    'Comment on mesure',
    'Search Console, positions, appels et demandes d’itinéraire.',
    'Visites venues des IA dans les statistiques (utm_source=chatgpt.com, sites référents), relevés de citations.',
  ],
];

const faqs = [
  [
    'Comment savoir si une IA cite mon site ?',
    'En posant à ChatGPT, Perplexity ou Gemini les questions de vos clients, et en regardant vos statistiques : les visites venues de ces outils y apparaissent, par exemple avec la mention utm_source=chatgpt.com. L’audit offert fait ce relevé pour vous.',
  ],
  [
    'Faut-il bloquer les robots des IA ?',
    'Pas si vous voulez être cité : un robot bloqué ne peut pas lire vos pages. On peut choisir finement, en autorisant les robots de recherche (OAI-SearchBot, PerplexityBot) et en décidant à part pour ceux qui servent à l’entraînement des modèles (GPTBot, Google-Extended).',
  ],
  [
    'Le SEO local suffit-il pour une entreprise de Charente ?',
    'C’est la base : une fiche Google complète, des pages claires par service et des coordonnées identiques partout. Le GEO s’ajoute ensuite, car de plus en plus de clients posent leur question directement à une IA.',
  ],
];

export default function SeoHub({ services, guides }) {
  return (
    <>
      <SEO
        title="SEO et GEO : être trouvé sur Google et cité par les IA"
        description="Le hub SEO et GEO de Théo Multimédia à Cognac : référencement local, Google Maps, visibilité dans ChatGPT, Perplexity et Gemini, audit offert et guides pratiques."
        path="/seo"
        dateModified="2026-11-05"
        crumbs={[
          ['Accueil', '/'],
          ['SEO & GEO', '/seo'],
        ]}
        schema={[
          itemListNode(
            '/seo',
            services.map((s) => [s.title, `/${s.slug}`]),
          ),
          faqNode('/seo', faqs),
        ]}
      />
      <PageHero
        eyebrow="SEO & GEO"
        title="Être trouvé sur Google, [[cité par les IA.]]"
        lede="Deux vitrines, les mêmes fondations. Le SEO vous place dans les résultats et sur Google Maps ; le GEO vous fait reprendre dans les réponses de ChatGPT, Perplexity, Gemini et des AI Overviews."
        crumbs={[
          ['Accueil', '/'],
          ['SEO & GEO', '/seo'],
        ]}
      >
        <div className="hero-ctas">
          <Link href="/contact?service=audit-geo" className="btn btn-primary">
            Audit SEO &amp; GEO offert <span className="arrow">→</span>
          </Link>
          <Link href="/geo-referencement-ia" className="link-arrow">
            Comprendre le GEO <span className="arrow">→</span>
          </Link>
        </div>
      </PageHero>
      <AnswerBox text="Le SEO rend un site trouvable dans Google et Google Maps ; le GEO (Generative Engine Optimization) l’aide à être repris et cité dans les réponses des IA comme ChatGPT, Perplexity, Gemini ou les AI Overviews. Les deux reposent sur les mêmes fondations : des pages accessibles aux robots, des réponses claires et des informations cohérentes partout." />

      <section className="section" aria-labelledby="svc-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <Heat id="svc-title" className="h2" text="Du diagnostic [[à la citation.]]" />
          </div>
          <ServiceCards items={services} />
        </div>
      </section>

      <section className="section section--navy on-dark grain" aria-labelledby="cmp-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow on-dark">SEO ou GEO ?</p>
            <Heat id="cmp-title" className="h2" text="Ce qui change, [[ce qui reste.]]" />
          </div>
          <div className="compare-wrap">
            <table className="compare">
              <caption className="sr-only">Comparaison entre le SEO et le GEO</caption>
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Critère</span>
                  </th>
                  <th scope="col">SEO</th>
                  <th scope="col">GEO</th>
                </tr>
              </thead>
              <tbody>
                {compare.map(([k, seo, geo]) => (
                  <tr key={k}>
                    <th scope="row">{k}</th>
                    <td>{seo}</td>
                    <td>{geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="guides-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Guides</p>
            <Heat id="guides-title" className="h2" text="Comprendre, [[puis décider.]]" />
          </div>
          {GUIDE_CATEGORIES.map((cat) => (
            <div key={cat} className="guide-group">
              <h3 className="guide-cat">{cat}</h3>
              <div className="post-list">
                {guides
                  .filter((g) => g.category === cat)
                  .map((g) => (
                    <Link key={g.slug} href={`/blog/${g.slug}`} className="post-row">
                      <span className="cat">{g.readingMinutes} min</span>
                      <div>
                        <h4 className="post-title">{g.title}</h4>
                        <p>{g.description}</p>
                      </div>
                      <span className="rt" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="faq-title">
        <div className="container split split--top">
          <div className="section-head">
            <p className="eyebrow">Questions fréquentes</p>
            <Heat id="faq-title" className="h2" text="SEO, GEO : [[vos questions.]]" />
          </div>
          <Faq items={faqs} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      services: SLUGS.map((s) => serviceIndex.find((x) => x.slug === s)).filter(Boolean),
      guides: articles.filter((a) => GUIDE_CATEGORIES.includes(a.category)).map(summarize),
    },
  };
}
