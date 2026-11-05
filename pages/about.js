import Link from 'next/link';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import AnswerBox from '../components/AnswerBox';
import Heat from '../components/Heat';
import { business, fullAddress, mapsUrl } from '../lib/business';

const principles = [
  [
    'Pas de promesse de classement',
    'Personne ne contrôle Google ni ChatGPT. L’engagement porte sur le travail : des fondations techniques propres, des contenus clairs, une mesure honnête des résultats.',
  ],
  [
    'Un seul interlocuteur',
    'Design, développement, SEO et GEO : la même personne, du premier audit au suivi après la mise en ligne. Vous savez qui décide et qui livre.',
  ],
  [
    'Du code, pas un thème',
    'Des pages construites pour votre activité : rapides, accessibles, lisibles par les robots, et faciles à faire évoluer.',
  ],
  [
    'Des pages utiles, rien d’autre',
    'Pas de pages locales clonées ni de bourrage de mots-clés. Une page existe quand elle répond vraiment à une question de vos clients.',
  ],
];

export default function About() {
  const crumbs = [
    ['Accueil', '/'],
    ['L’agence', '/about'],
  ];
  return (
    <>
      <SEO
        title="L’agence : Théo Lafont, web et GEO à Cognac"
        description="Théo Multimédia, c’est Théo Lafont : développeur web et consultant GEO installé à Cognac. Un seul interlocuteur, des sites rapides et une visibilité construite sans promesse intenable."
        path="/about"
        pageType="AboutPage"
        dateModified="2026-11-05"
        crumbs={crumbs}
      />
      <PageHero
        eyebrow="L’agence"
        title="Un interlocuteur, [[du premier audit à la mise en ligne.]]"
        lede="Théo Multimédia est née à Cognac d’une conviction simple : un site doit d’abord être trouvé, compris et choisi. Le design, le code et la visibilité se décident ensemble."
        crumbs={crumbs}
      >
        <div className="hero-ctas">
          <Link href="/contact" className="btn btn-primary">
            Prendre contact <span className="arrow">→</span>
          </Link>
          <Link href="/portfolio" className="link-arrow">
            Voir les réalisations <span className="arrow">→</span>
          </Link>
        </div>
      </PageHero>
      <AnswerBox
        label="Qui est derrière l’agence"
        text={`Théo Multimédia est une entreprise individuelle installée au ${fullAddress} (Charente), fondée par ${business.founder}, développeur web et consultant GEO. L’agence crée des sites rapides et rend les entreprises visibles sur Google, sur Google Maps et dans les réponses des IA comme ChatGPT, Perplexity ou Gemini.`}
      />

      <section className="section" aria-labelledby="why-title">
        <div className="container split split--top">
          <div className="section-head">
            <p className="eyebrow">Ma façon de travailler</p>
            <Heat id="why-title" className="h2" text="Quatre principes, [[tenus sur chaque projet.]]" />
            <p className="lede">
              Le web local a vu passer beaucoup de promesses. Ici, on parle de ce qui se mesure, et on dit quand une idée ne
              vaut pas l’investissement.
            </p>
          </div>
          <ol className="steps">
            {principles.map(([title, text]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--navy on-dark grain" aria-labelledby="geo-title">
        <div className="container split">
          <div className="section-head">
            <p className="eyebrow on-dark">Pourquoi le GEO</p>
            <Heat id="geo-title" className="h2" text="Vos clients posent [[leurs questions aux IA.]]" />
            <p className="lede">
              Une partie des recherches passe désormais par ChatGPT, Perplexity, Gemini ou les AI Overviews de Google. Être
              cité dans ces réponses demande les mêmes fondations qu’un bon SEO, plus une écriture qui répond d’abord. C’est
              le cœur du travail de l’agence, et la boutique CBD Impact en a reçu ses premières commandes.
            </p>
            <div className="hero-ctas">
              <Link href="/geo-referencement-ia" className="btn btn-primary">
                Le GEO en détail <span className="arrow">→</span>
              </Link>
              <Link href="/portfolio/cbd-impact" className="link-arrow">
                Le cas CBD Impact <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <ul className="ticks ticks--lg">
            <li>Sites rapides développés sur mesure, sans thème générique</li>
            <li>SEO local : Google Business Profile, pages par service et par ville</li>
            <li>GEO : contenus citables, données structurées, robots d’IA autorisés</li>
            <li>Outils métier : e-commerce, CRM, plateformes de formation</li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="id-title">
        <div className="container split split--top">
          <div className="section-head">
            <p className="eyebrow">Identité</p>
            <Heat id="id-title" className="h2" text="Installée à Cognac, [[joignable en semaine.]]" />
            <div className="hero-ctas">
              <a href={`tel:${business.phoneE164}`} className="btn btn-dark">
                {business.phone} <span className="arrow">→</span>
              </a>
              <a href={mapsUrl} className="link-arrow" target="_blank" rel="noopener">
                Itinéraire <span className="arrow">↗</span>
              </a>
            </div>
          </div>
          <dl className="facts">
            <div>
              <dt>Entreprise</dt>
              <dd>
                {business.brandName} ({business.legalName}, {business.legalForm.toLowerCase()})
              </dd>
            </div>
            <div>
              <dt>Fondateur</dt>
              <dd>
                {business.founder}, {business.founderRole.charAt(0).toLowerCase() + business.founderRole.slice(1)}
              </dd>
            </div>
            <div>
              <dt>Adresse</dt>
              <dd>{fullAddress}</dd>
            </div>
            <div>
              <dt>Horaires</dt>
              <dd>{business.openingHours.label}</dd>
            </div>
            <div>
              <dt>Zones</dt>
              <dd>Cognac, Jarnac, Angoulême, Saintes, Charente et Charente-Maritime, et à distance</dd>
            </div>
            <div>
              <dt>SIRET</dt>
              <dd>{business.siret}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
