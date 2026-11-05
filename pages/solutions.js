import Link from 'next/link';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import AnswerBox from '../components/AnswerBox';
import Heat from '../components/Heat';
import Faq from '../components/Faq';
import ServiceCards from '../components/ServiceCards';
import WorkCard from '../components/WorkCard';
import { faqNode, itemListNode } from '../lib/schema';
import { serviceIndex } from '../lib/services-data';
import { projects } from '../lib/projects';

const SLUGS = ['ecommerce-sur-mesure', 'crm-sur-mesure', 'lms-elearning'];

const faqs = [
  [
    'Combien de temps faut-il pour un outil sur mesure ?',
    'Cela dépend du périmètre. On commence par une première version utile, centrée sur l’usage principal, puis on ajoute les fonctions par étapes, une fois l’outil éprouvé par votre équipe.',
  ],
  [
    'Mes données restent-elles à moi ?',
    'Oui. Les données vous appartiennent et restent exportables. L’outil est documenté pour pouvoir évoluer, avec Théo Multimédia ou un autre prestataire.',
  ],
  [
    'Qui assure la maintenance ?',
    'Théo Multimédia peut assurer les mises à jour, les sauvegardes, la surveillance et les évolutions. Le niveau de suivi est défini ensemble selon l’usage de l’outil.',
  ],
];

export default function Solutions({ services, work }) {
  return (
    <>
      <SEO
        title="Solutions sur mesure : e-commerce, CRM et LMS"
        description="E-commerce, CRM et plateformes LMS développés sur mesure à Cognac : des outils web construits autour de vos usages, rapides, sécurisés et faciles à faire évoluer."
        path="/solutions"
        dateModified="2026-11-05"
        crumbs={[
          ['Accueil', '/'],
          ['Services', '/services'],
          ['Solutions sur mesure', '/solutions'],
        ]}
        schema={[itemListNode('/solutions', services.map((s) => [s.title, `/${s.slug}`])), faqNode('/solutions', faqs)]}
      />
      <PageHero
        eyebrow="Solutions sur mesure"
        title="Votre activité mérite [[mieux qu’un modèle.]]"
        lede="Une boutique, un CRM ou une plateforme de formation construits pour vos usages réels : seulement les écrans utiles, des pages rapides, et un outil qui peut évoluer avec l’activité."
        crumbs={[
          ['Accueil', '/'],
          ['Services', '/services'],
          ['Solutions sur mesure', '/solutions'],
        ]}
      >
        <div className="hero-ctas">
          <Link href="/contact?service=crm-sur-mesure" className="btn btn-primary">
            Parler de mon outil <span className="arrow">→</span>
          </Link>
          <Link href="/portfolio" className="link-arrow">
            Voir les réalisations <span className="arrow">→</span>
          </Link>
        </div>
      </PageHero>
      <AnswerBox text="Une solution sur mesure est un outil web développé pour une entreprise précise : une boutique en ligne, un CRM pour suivre clients, devis et relances, ou une plateforme de formation (LMS). On part des besoins réels, on construit seulement ce qui sert, et l’outil peut évoluer avec l’activité." />

      <section className="section" aria-labelledby="sol-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Trois familles d’outils</p>
            <Heat id="sol-title" className="h2" text="Vendre, suivre, [[former.]]" />
          </div>
          <ServiceCards items={services} />
        </div>
      </section>

      <section className="section section--navy on-dark grain" aria-labelledby="when-title">
        <div className="container split split--top">
          <div className="section-head">
            <p className="eyebrow on-dark">Le bon choix</p>
            <Heat id="when-title" className="h2" text="Le sur mesure, [[quand il se justifie.]]" />
            <p className="lede">
              Le sur mesure n’est pas toujours la bonne réponse. Si un outil existant fait déjà l’essentiel, mieux vaut le
              paramétrer : vous le saurez dès le premier échange.
            </p>
          </div>
          <ul className="ticks ticks--lg">
            <li>Vos outils actuels imposent des contournements : tableurs, doubles saisies, relances oubliées.</li>
            <li>Un thème ou un logiciel standard ne couvre pas votre parcours client.</li>
            <li>Vos pages doivent rester rapides et lisibles par Google et par les IA, ce que beaucoup de plateformes compliquent.</li>
            <li>Vous voulez garder la main sur vos données et pouvoir les exporter.</li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Réalisations</p>
            <Heat id="work-title" className="h2" text="Boutiques et [[applications web.]]" />
          </div>
          <div className="work-grid">
            {work.map((p) => (
              <WorkCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="faq-title">
        <div className="container split split--top">
          <div className="section-head">
            <p className="eyebrow">Questions fréquentes</p>
            <Heat id="faq-title" className="h2" text="Avant de [[cadrer l’outil.]]" />
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
      work: projects
        .filter((p) => p.category === 'E-commerce' || p.category === 'Application web')
        .map((p) => ({
          slug: p.slug,
          title: p.title,
          category: p.category,
          online: p.online,
          image: p.image,
          shortDescription: p.shortDescription,
        })),
    },
  };
}
