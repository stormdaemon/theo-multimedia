import Link from 'next/link';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import AnswerBox, { Disclaimer } from '../components/AnswerBox';
import Heat from '../components/Heat';
import Faq from '../components/Faq';
import RelatedLinks from '../components/RelatedLinks';
import Resonance from '../components/Resonance';
import { business } from '../lib/business';
import { faqNode, itemListNode, serviceNode } from '../lib/schema';
import { accentTitle, formatDate, frenchSpacing, slugify } from '../lib/text';
import { contentPages, getContentPage, localPages } from '../lib/services-data';

const paragraphs = (body) => [].concat(body || []).filter(Boolean);

function Block({ id, index, title, body, items, cols = false }) {
  return (
    <section className="block" aria-labelledby={id}>
      <span className="idx" aria-hidden="true">
        {String(index).padStart(2, '0')}
      </span>
      <h2 id={id}>{frenchSpacing(title)}</h2>
      {paragraphs(body).map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
      {items?.length ? (
        <ul className={cols ? 'ticks cols' : 'ticks'}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

/** The blocks of the main column, for both page types. */
function blocksOf(page) {
  if (page.type !== 'local') return page.sections.map((s) => ({ title: s.title, body: s.body, items: s.items }));
  return [
    { title: `Pour qui, à ${page.city}`, items: page.professionals },
    { title: `Le SEO local à ${page.city}`, body: page.localSeo },
    ...page.detailSections.map((s) => ({ title: s.title, body: s.body })),
    { title: 'Ce que comprend votre site', items: page.siteIncludes, cols: true },
  ];
}

export default function ContentPage({ page, updatedLabel, locals }) {
  const path = page.canonical || `/${page.slug}`;
  const isLocal = page.type === 'local';
  const short = isLocal ? page.city : page.title.split(' : ')[0];
  const crumbs = isLocal
    ? [
        ['Accueil', '/'],
        ['Zones d’intervention', '/zones-intervention'],
        [short, path],
      ]
    : page.slug === 'zones-intervention'
      ? [
          ['Accueil', '/'],
          ['Zones d’intervention', path],
        ]
      : [
          ['Accueil', '/'],
          ['Services', '/services'],
          [short, path],
        ];
  const cta = page.cta || { label: `Parler de mon site à ${page.city}`, href: '/contact?service=creation-site-internet' };
  const secondary = page.secondaryCta || (isLocal ? { label: 'Voir le SEO local', href: '/referencement-local' } : null);
  const blocks = blocksOf(page).map((b, i) => ({ ...b, id: slugify(b.title) || `bloc-${i + 1}` }));
  const [disclaimerLead, ...disclaimerRest] = (page.disclaimer || '').split(/(?<=\.)\s/);

  const schema = [
    page.slug === 'zones-intervention'
      ? itemListNode(
          path,
          locals.map((l) => [`Création de site internet à ${l.city}`, `/${l.slug}`]),
        )
      : serviceNode(page),
    faqNode(path, page.faqs),
  ];

  return (
    <>
      <SEO
        title={page.metaTitle}
        description={page.metaDescription}
        path={path}
        crumbs={crumbs}
        dateModified={page.updatedAt}
        schema={schema}
      />

      <PageHero eyebrow={page.eyebrow} title={accentTitle(page.title)} lede={page.intro} crumbs={crumbs}>
        <div className="hero-ctas">
          <Link href={cta.href} className="btn btn-primary">
            {cta.label} <span className="arrow">→</span>
          </Link>
          {secondary && (
            <Link href={secondary.href} className="link-arrow">
              {secondary.label} <span className="arrow">→</span>
            </Link>
          )}
        </div>
        <p className="page-meta">
          Mis à jour le <time dateTime={page.updatedAt}>{updatedLabel}</time> · {business.founder}, {business.brandName}
        </p>
      </PageHero>

      <AnswerBox text={page.answer}>
        {page.disclaimer && (
          <Disclaimer>
            <strong>{disclaimerLead}</strong> {disclaimerRest.join(' ')}
          </Disclaimer>
        )}
      </AnswerBox>

      <section className="section">
        <div className="container content-grid">
          <div className="content-main">
            {blocks.map((b, i) => (
              <Block key={b.id} {...b} index={i + 1} />
            ))}
          </div>
          <aside className="aside-col" aria-label="Sur cette page et contact">
            <nav className="page-toc" aria-label="Sur cette page">
              <p>Sur cette page</p>
              <ol>
                {blocks.map((b) => (
                  <li key={b.id}>
                    <a href={`#${b.id}`}>{b.title}</a>
                  </li>
                ))}
                <li>
                  <a href="#faq-title">Questions fréquentes</a>
                </li>
              </ol>
            </nav>
            <div className="aside-card">
              <h2>Parlons de votre projet</h2>
              <p>Un premier échange, par téléphone ou à Cognac, pour cadrer votre besoin et vos priorités.</p>
              <Link href={cta.href} className="btn btn-primary">
                {cta.label} <span className="arrow">→</span>
              </Link>
              <a className="tel" href={`tel:${business.phoneE164}`}>
                {business.phone}
              </a>
              <p className="muted">{business.openingHours.label}</p>
            </div>
          </aside>
        </div>
      </section>

      {page.steps?.length ? (
        <section className="section section--navy on-dark grain" aria-labelledby="steps-title">
          <div className="container split split--top">
            <div className="section-head">
              <p className="eyebrow on-dark">Méthode</p>
              <Heat id="steps-title" className="h2" text="Cinq étapes, [[dans cet ordre.]]" />
              <p className="lede">
                Chaque étape s’appuie sur la précédente : on ne cherche pas à être cité avant d’être lisible.
              </p>
            </div>
            <ol className="steps">
              {page.steps.map(([title, text]) => (
                <li key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {page.pillar ? (
        <section className="section" aria-labelledby="engines-title">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Les moteurs</p>
              <Heat id="engines-title" className="h2" text="Sept moteurs, [[sept façons de lire un site.]]" />
              <p className="lede">
                Google, Google Maps, les AI Overviews, ChatGPT, Perplexity, Gemini et Copilot ne lisent pas le web de la
                même façon. Choisissez un moteur pour voir ce qu’il consulte et les leviers qui comptent.
              </p>
            </div>
            <Resonance />
          </div>
        </section>
      ) : null}

      {isLocal ? (
        <section className="section section--navy on-dark grain" aria-labelledby="method-title">
          <div className="container split split--top">
            <div className="section-head">
              <p className="eyebrow on-dark">À {page.city}</p>
              <Heat id="method-title" className="h2" text="Quatre temps, [[un interlocuteur.]]" />
              <ul className="ticks">
                {page.uniqueAngles.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
            <ol className="steps steps--plain">
              {page.method.map((m) => (
                <li key={m}>
                  <p>{m}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {page.slug === 'zones-intervention' ? (
        <section className="section section-tight" aria-labelledby="cities-title">
          <div className="container">
            <h2 id="cities-title" className="h3">
              Les pages locales
            </h2>
            <div className="cards">
              {locals.map((l) => (
                <Link key={l.slug} href={`/${l.slug}`} className="card-link">
                  <span className="k">{l.city}</span>
                  <h3>Création de site internet à {l.city}</h3>
                  <p>{l.answer}</p>
                  <span className="arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--tint" aria-labelledby="faq-title">
        <div className="container split split--top">
          <div className="section-head">
            <p className="eyebrow">Questions fréquentes</p>
            <Heat id="faq-title" className="h2" text="Ce qu’on me demande [[le plus souvent.]]" />
          </div>
          <Faq items={page.faqs} />
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="related-title">
        <div className="container">
          <h2 id="related-title" className="h3">
            Pour aller plus loin
          </h2>
          <RelatedLinks links={page.relatedLinks} />
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: contentPages.map((p) => ({ params: { slug: p.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const page = getContentPage(params.slug);
  if (!page) return { notFound: true };
  return {
    props: {
      page,
      updatedLabel: formatDate(page.updatedAt),
      locals:
        page.slug === 'zones-intervention' ? localPages.map((l) => ({ slug: l.slug, city: l.city, answer: l.answer })) : [],
    },
  };
}
