import Link from 'next/link';
import SEO from '../components/SEO';
import StrikeHero from '../components/StrikeHero';
import Heat from '../components/Heat';
import Resonance from '../components/Resonance';
import AiDemo from '../components/AiDemo';
import ServiceList from '../components/ServiceList';
import Drum from '../components/Drum';
import Faq from '../components/Faq';
import Picture from '../components/Picture';
import { business } from '../lib/business';
import { faqNode, itemListNode } from '../lib/schema';
import { getContentPage, serviceIndex } from '../lib/services-data';
import { projects } from '../lib/projects';
import { featuredSlugs, getArticle, summarize } from '../lib/blog';

const homeFaqs = [
  [
    'Qu’est-ce que le GEO ?',
    'Le GEO (Generative Engine Optimization) regroupe les actions qui aident les moteurs de réponse IA, comme ChatGPT, Perplexity, Gemini ou les AI Overviews de Google, à comprendre une entreprise, à reprendre ses informations et à citer son site comme source. Il prolonge le SEO, il ne le remplace pas.',
  ],
  [
    'Le GEO remplace-t-il le SEO ?',
    'Non. Un moteur de réponse s’appuie sur des pages qu’il peut trouver, lire et vérifier : sans indexation ni contenu clair, rien ne peut être cité. Le travail commence par les fondations SEO, puis par l’écriture de réponses nettes.',
  ],
  [
    'Peut-on garantir d’être cité par ChatGPT ?',
    'Non, et personne ne peut le garantir honnêtement. On améliore les signaux qui comptent (accès des robots, clarté, cohérence des informations, preuves), puis on mesure les visites venues des IA et on ajuste.',
  ],
  [
    'Où intervenez-vous ?',
    'L’agence est installée à Cognac et travaille avec des entreprises de Cognac, Jarnac, Angoulême, Saintes et de toute la Charente. Tout se fait à distance, par téléphone et en visio : il n’y a pas de rendez-vous sur place.',
  ],
  [
    'Que contient l’audit SEO & GEO offert ?',
    'Une analyse de votre site, de votre fiche Google et de votre présence dans les réponses des IA (ChatGPT, Perplexity, Gemini, AI Overviews). Vous recevez les blocages prioritaires et un plan d’action ordonné, sans jargon et sans promesse de classement.',
  ],
  [
    'Et si j’ai besoin d’être en ligne en urgence ?',
    'La préversion express 24 h publie une première version propre quand le délai l’impose, ou pour lancer l’indexation plus tôt. Ce n’est pas un site définitif : il est ensuite enrichi et finalisé.',
  ],
];

export default function Home({ services, steps, work, guides }) {
  return (
    <>
      <SEO
        title="Théo Multimédia : agence GEO & web à Cognac (Charente)"
        description="Agence GEO et web à Cognac : votre entreprise visible sur Google et Google Maps, et citée par ChatGPT, Perplexity et Gemini. SEO local, sites rapides, audit offert."
        path="/"
        dateModified="2026-11-06"
        schema={[faqNode('/', homeFaqs), itemListNode('/', services.map((s) => [s.title, `/${s.slug}`]))]}
      />

      <StrikeHero />

      <section className="section" aria-labelledby="geo-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Le GEO, en clair</p>
            <Heat id="geo-title" className="h2" text="On ne cherche plus seulement des liens. [[On demande une réponse.]]" />
            <p className="lede">
              ChatGPT, Perplexity, Gemini et les AI Overviews de Google rédigent des réponses et citent quelques sources. Le
              GEO consiste à faire de votre site l’une d’elles : des pages que les robots peuvent lire, des réponses nettes,
              des informations identiques partout.
            </p>
          </div>
          <Resonance />
          <p className="section-foot">
            <Link href="/geo-referencement-ia" className="link-arrow">
              Tout comprendre au GEO <span className="arrow">→</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--navy on-dark grain" aria-labelledby="cite-title">
        <div className="container split">
          <div className="section-head">
            <p className="eyebrow">À quoi ressemble une citation</p>
            <Heat id="cite-title" className="h2" text="Être cité, c’est apparaître [[dans la réponse]], lien compris." />
            <p className="lede">
              Quand une IA répond, elle s’appuie sur quelques pages et renvoie vers elles. Ces visites se mesurent : celles
              venues de ChatGPT, Perplexity ou Copilot apparaissent dans vos statistiques.
            </p>
            <ul className="ticks">
              <li>Des pages qui répondent d’abord, puis prouvent</li>
              <li>Des robots d’IA autorisés à lire le site</li>
              <li>Une adresse, une zone et des services identiques partout</li>
            </ul>
          </div>
          <AiDemo />
        </div>
      </section>

      <section className="section section--dark on-dark" aria-labelledby="svc-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <Heat id="svc-title" className="h2" text="Visible sur Google, [[cité par les IA]], choisi par vos clients." />
          </div>
          <ServiceList items={services} />
          <p className="section-foot">
            <Link href="/services" className="link-arrow">
              Tous les services en détail <span className="arrow">→</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="method-title">
        <div className="container split split--top">
          <div className="section-head">
            <p className="eyebrow">Méthode</p>
            <Heat id="method-title" className="h2" text="Cinq étapes, [[dans cet ordre.]]" />
            <p className="lede">
              Le GEO n’est pas une astuce posée sur un site existant. Chaque étape s’appuie sur la précédente : on ne
              cherche pas à être cité avant d’être lisible.
            </p>
            <Link href="/contact?service=audit-geo" className="btn btn-primary">
              Commencer par l’audit offert <span className="arrow">→</span>
            </Link>
          </div>
          <ol className="steps">
            {steps.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="proof-title">
        <div className="container proof">
          <div className="section-head">
            <p className="eyebrow">Cas concret · CBD Impact</p>
            <Heat id="proof-title" className="h2" text="Les premières commandes sont arrivées [[depuis ChatGPT.]]" />
            <p className="lede">
              CBD Impact est une boutique en ligne développée sur mesure. Ses premières commandes sont venues de liens
              ChatGPT, repérés dans les statistiques grâce à la mention utm_source=chatgpt.com.
            </p>
            <Link href="/portfolio/cbd-impact" className="link-arrow">
              Voir le projet <span className="arrow">→</span>
            </Link>
          </div>
          <figure className="browser">
            <div className="chrome" aria-hidden="true">
              <span className="dots">
                <i />
                <i />
                <i />
              </span>
              <span className="url">cbd-impact.com</span>
            </div>
            <Picture src="/assets/portfolio/cbd-impact-desktop" width={1440} height={900} alt="Page d’accueil de la boutique CBD Impact" />
          </figure>
        </div>
      </section>

      <section className="section section--dark on-dark drum-section" aria-labelledby="work-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Réalisations</p>
            <Heat id="work-title" className="h2" text="Des projets [[qui tournent.]]" />
            <p className="lede">
              Faites tourner le tambour : glissez, ou utilisez les flèches. Trois sites sont en ligne aujourd’hui, les autres
              sont des archives de projets passés.
            </p>
          </div>
        </div>
        <Drum items={work} />
        <div className="container">
          <p className="section-foot center">
            <Link href="/portfolio" className="link-arrow">
              Toutes les réalisations <span className="arrow">→</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="agency-title">
        <div className="container split">
          <div className="section-head">
            <p className="eyebrow">L’agence</p>
            <Heat id="agency-title" className="h2" text="Installée à Cognac, [[au service de la Charente.]]" />
            <p className="lede">
              Théo Multimédia, c’est {business.founder} : développeur web et consultant GEO. Un seul interlocuteur, du premier
              audit à la mise en ligne.
            </p>
            <div className="hero-ctas">
              <Link href="/about" className="btn btn-dark">
                Découvrir l’agence <span className="arrow">→</span>
              </Link>
              <Link href="/zones-intervention" className="link-arrow">
                Zones d’intervention <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <dl className="facts">
            <div>
              <dt>Adresse</dt>
              <dd>
                {business.legalAddress.streetAddress}, {business.legalAddress.postalCode} {business.legalAddress.city}
              </dd>
            </div>
            <div>
              <dt>Téléphone</dt>
              <dd>
                <a className="text-link" href={`tel:${business.phoneE164}`}>
                  {business.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt>Horaires</dt>
              <dd>{business.openingHours.label}</dd>
            </div>
            <div>
              <dt>Zones</dt>
              <dd>Cognac, Jarnac, Angoulême, Saintes, Charente et Charente-Maritime</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--tint" aria-labelledby="guides-title">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Guides</p>
            <Heat id="guides-title" className="h2" text="Comprendre avant [[d’investir.]]" />
          </div>
          <div className="featured-posts">
            {guides.map((g) => (
              <Link key={g.slug} href={`/blog/${g.slug}`}>
                <span className="k">{g.category}</span>
                <h3>{g.title}</h3>
                <span className="rt">{g.readingMinutes} min de lecture →</span>
              </Link>
            ))}
          </div>
          <p className="section-foot">
            <Link href="/blog" className="link-arrow">
              Tous les guides <span className="arrow">→</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-title">
        <div className="container split split--top">
          <div className="section-head">
            <p className="eyebrow">Questions</p>
            <Heat id="faq-title" className="h2" text="Les questions [[qu’on me pose.]]" />
          </div>
          <Faq items={homeFaqs} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      services: serviceIndex,
      steps: getContentPage('geo-referencement-ia').steps,
      work: projects.map((p) => ({ slug: p.slug, title: p.title, category: p.category, online: p.online, image: p.image })),
      guides: featuredSlugs.map((slug) => summarize(getArticle(slug))),
    },
  };
}
