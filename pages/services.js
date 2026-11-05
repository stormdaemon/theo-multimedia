import Link from 'next/link';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import AnswerBox from '../components/AnswerBox';
import Heat from '../components/Heat';
import Faq from '../components/Faq';
import ServiceCards from '../components/ServiceCards';
import { faqNode, itemListNode } from '../lib/schema';
import { localPages, serviceIndex } from '../lib/services-data';

const families = [
  {
    id: 'visibilite',
    eyebrow: 'Visibilité',
    title: 'Être trouvé, [[être cité.]]',
    text: 'Google, Google Maps et les moteurs de réponse IA : trois vitrines, des fondations communes.',
    slugs: ['geo-referencement-ia', 'referencement-local', 'audit-seo-gratuit'],
  },
  {
    id: 'sites',
    eyebrow: 'Sites internet',
    title: 'Créer, refondre, [[faire durer.]]',
    text: 'Des sites rapides et clairs, pensés pour transformer une visite en demande, puis suivis dans le temps.',
    slugs: ['creation-site-internet', 'refonte-site-internet', 'maintenance-site-web', 'preversion-express-24h'],
  },
  {
    id: 'sur-mesure',
    eyebrow: 'Sur mesure',
    title: 'Des outils [[à votre mesure.]]',
    text: 'Boutique en ligne, CRM ou plateforme de formation : construits autour de vos usages.',
    slugs: ['ecommerce-sur-mesure', 'crm-sur-mesure', 'lms-elearning'],
    more: ['Toutes les solutions sur mesure', '/solutions'],
  },
];

const faqs = [
  [
    'Par quoi commencer ?',
    'Par l’audit SEO & GEO offert : il montre ce qui freine votre visibilité sur Google, sur Google Maps et dans les réponses des IA, et dans quel ordre le corriger. Vous décidez ensuite, sans engagement.',
  ],
  [
    'Travaillez-vous uniquement en Charente ?',
    'L’agence est installée à Cognac et travaille surtout avec des entreprises de Charente et de Charente-Maritime. Tous les échanges se font à distance, par téléphone et en visio : un projet mené ailleurs en France se déroule donc de la même façon.',
  ],
  [
    'Qui réalise le travail ?',
    'Théo Lafont, fondateur de Théo Multimédia, du cadrage à la mise en ligne : un seul interlocuteur pour le design, le développement, le SEO et le GEO.',
  ],
];

export default function Services({ services, locals }) {
  const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
  return (
    <>
      <SEO
        title="Services web à Cognac : GEO, SEO local, sites sur mesure"
        description="GEO, SEO local, création et refonte de site, e-commerce, CRM et LMS sur mesure, maintenance et préversion express : les services de Théo Multimédia à Cognac."
        path="/services"
        dateModified="2026-11-06"
        crumbs={[
          ['Accueil', '/'],
          ['Services', '/services'],
        ]}
        schema={[itemListNode('/services', services.map((s) => [s.title, `/${s.slug}`])), faqNode('/services', faqs)]}
      />
      <PageHero
        eyebrow="Services"
        title="Tout ce qu’il faut pour être trouvé, [[compris et choisi.]]"
        lede="Visibilité sur Google et dans les IA, sites rapides, outils sur mesure et suivi : chaque service répond à une étape du même objectif, que vos futurs clients vous trouvent et vous contactent."
        crumbs={[
          ['Accueil', '/'],
          ['Services', '/services'],
        ]}
      >
        <div className="hero-ctas">
          <Link href="/contact?service=audit-geo" className="btn btn-primary">
            Commencer par l’audit offert <span className="arrow">→</span>
          </Link>
        </div>
      </PageHero>
      <AnswerBox text="Théo Multimédia, agence installée à Cognac, propose trois familles de services : la visibilité (GEO pour être cité par les IA, SEO local et Google Maps, audit offert), les sites internet (création, refonte sans perte de SEO, maintenance, et une préversion express en cas d’urgence) et les outils sur mesure (e-commerce, CRM, LMS)." />

      {families.map((f, i) => (
        <section key={f.id} className={i % 2 ? 'section section--tint' : 'section'} aria-labelledby={`${f.id}-title`}>
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{f.eyebrow}</p>
              <Heat id={`${f.id}-title`} className="h2" text={f.title} />
              <p className="lede">{f.text}</p>
            </div>
            <ServiceCards items={f.slugs.map((s) => bySlug[s]).filter(Boolean)} />
            {f.more && (
              <p className="section-foot">
                <Link href={f.more[1]} className="link-arrow">
                  {f.more[0]} <span className="arrow">→</span>
                </Link>
              </p>
            )}
          </div>
        </section>
      ))}

      <section className="section section--dark on-dark grain" aria-labelledby="local-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow on-dark">Près de chez vous</p>
            <Heat id="local-title" className="h2" text="Cognac, Angoulême, Saintes [[et alentours.]]" />
            <p className="lede">
              Des pages locales seulement là où elles apportent un vrai contenu : le contexte de la ville, ses métiers, ses
              recherches.
            </p>
          </div>
          <nav className="related" aria-label="Pages locales">
            {locals.map((l) => (
              <Link key={l.slug} href={`/${l.slug}`}>
                Création de site internet à {l.city}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
            <Link href="/zones-intervention">
              Toutes les zones d’intervention
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </nav>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="container split split--top">
          <div className="section-head">
            <p className="eyebrow">Questions fréquentes</p>
            <Heat id="faq-title" className="h2" text="Avant de [[se lancer.]]" />
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
      services: serviceIndex,
      locals: localPages.map((l) => ({ slug: l.slug, city: l.city })),
    },
  };
}
