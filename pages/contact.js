import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { Disclaimer } from '../components/AnswerBox';
import { business, fullAddress, mapsUrl } from '../lib/business';

const SERVICES = [
  ['audit-geo', 'Audit SEO & GEO offert'],
  ['geo-referencement-ia', 'GEO : être cité par les IA'],
  ['referencement-local', 'SEO local & Google Maps'],
  ['creation-site-internet', 'Création de site internet'],
  ['refonte-site-internet', 'Refonte de site'],
  ['ecommerce-sur-mesure', 'E-commerce sur mesure'],
  ['crm-sur-mesure', 'CRM sur mesure'],
  ['lms-elearning', 'LMS & e-learning'],
  ['maintenance-site-web', 'Maintenance'],
  ['preversion-express-24h', 'Préversion express 24 h (urgence)'],
  ['autre', 'Autre demande'],
];
const ALIASES = {
  'audit-seo': 'audit-geo',
  'audit-seo-gratuit': 'audit-geo',
  'site-vitrine-24h': 'preversion-express-24h',
  'zones-intervention': 'autre',
};
const KNOWN = new Set(SERVICES.map(([v]) => v));

export default function Contact() {
  const router = useRouter();
  // The ?service= of the link that led here preselects the request type, until
  // the visitor picks another one (the query is only known after hydration).
  const [choice, setChoice] = useState(null);
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const raw = String(router.query.service || '');
  const fromQuery = ALIASES[raw] || raw;
  const service = choice ?? (KNOWN.has(fromQuery) ? fromQuery : 'audit-geo');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus({ state: 'sending', message: 'Envoi en cours…' });
    try {
      const res = await fetch(business.formEndpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setChoice(null);
      setStatus({ state: 'ok', message: 'Merci, votre message est bien parti. Je reviens vers vous rapidement.' });
    } catch (err) {
      setStatus({
        state: 'ko',
        message: `L’envoi n’a pas abouti. Réessayez dans un instant, ou appelez le ${business.phone}.`,
      });
    }
  };

  const crumbs = [
    ['Accueil', '/'],
    ['Contact', '/contact'],
  ];

  return (
    <>
      <SEO
        title="Contact : audit offert et projet web à Cognac"
        description={`Contactez Théo Multimédia à Cognac : audit SEO & GEO offert, création ou refonte de site, outil sur mesure. Téléphone ${business.phone}, du lundi au vendredi.`}
        path="/contact"
        pageType="ContactPage"
        dateModified="2026-11-05"
        crumbs={crumbs}
      />
      <PageHero
        eyebrow="Contact"
        title="Parlons de [[votre visibilité.]]"
        lede="Quelques lignes suffisent : votre activité, votre site s’il existe, ce qui vous bloque. Vous recevez une première lecture et les prochaines étapes, sans engagement."
        crumbs={crumbs}
      />

      <section className="section">
        <div className="container content-grid">
          <form
            className="form"
            action={business.formEndpoint}
            method="POST"
            onSubmit={onSubmit}
            noValidate={false}
            aria-describedby="form-note"
          >
            <input type="hidden" name="_subject" value="Nouvelle demande depuis le site Théo Multimédia" />
            <div className="hp" aria-hidden="true">
              <label htmlFor="f-gotcha">Ne pas remplir</label>
              <input id="f-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="f-name">Nom et prénom</label>
                <input id="f-name" name="nom" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="f-company">
                  Entreprise <span className="hint">(facultatif)</span>
                </label>
                <input id="f-company" name="entreprise" type="text" autoComplete="organization" />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="f-email">E-mail</label>
                <input id="f-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="f-phone">
                  Téléphone <span className="hint">(facultatif)</span>
                </label>
                <input id="f-phone" name="telephone" type="tel" autoComplete="tel" />
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label htmlFor="f-service">Votre demande</label>
                <select id="f-service" name="service" value={service} onChange={(e) => setChoice(e.target.value)}>
                  {SERVICES.map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="f-site">
                  Site actuel <span className="hint">(facultatif)</span>
                </label>
                <input id="f-site" name="site" type="url" inputMode="url" placeholder="https://" />
              </div>
            </div>
            {service === 'preversion-express-24h' && (
              <Disclaimer>
                <strong>Une préversion n’est pas un site définitif.</strong> Elle sert à être en ligne vite, en urgence ou pour
                lancer l’indexation ; le site est ensuite enrichi et finalisé.
              </Disclaimer>
            )}
            <div className="field">
              <label htmlFor="f-message">Votre message</label>
              <textarea
                id="f-message"
                name="message"
                required
                minLength={10}
                placeholder="Votre activité, votre zone, ce que vous voulez améliorer…"
              />
            </div>
            <label className="check" htmlFor="f-consent">
              <input id="f-consent" name="consentement" type="checkbox" value="oui" required />
              <span>
                J’accepte que ces informations soient utilisées pour répondre à ma demande.{' '}
                <Link href="/politique-confidentialite" className="text-link">
                  Politique de confidentialité
                </Link>
              </span>
            </label>
            <p id="form-note" className="muted form-note">
              Le formulaire est transmis par Formspree. Aucune donnée n’est utilisée à d’autres fins.
            </p>
            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={status.state === 'sending'}>
                {status.state === 'sending' ? 'Envoi…' : 'Envoyer ma demande'} <span className="arrow">→</span>
              </button>
            </div>
            <div role="status" aria-live="polite">
              {status.state !== 'idle' && (
                <p className={`form-status ${status.state === 'ok' ? 'ok' : status.state === 'ko' ? 'ko' : ''}`}>
                  {status.message}
                </p>
              )}
            </div>
          </form>

          <aside className="aside-col" aria-label="Coordonnées">
            <div className="aside-card">
              <h2>Par téléphone</h2>
              <a className="tel" href={`tel:${business.phoneE164}`}>
                {business.phone}
              </a>
              <p>{business.openingHours.label}</p>
            </div>
            <div className="contact-block">
              <h2 className="h3">À Cognac</h2>
              <address>
                {business.brandName}
                <br />
                {fullAddress}
              </address>
              <a href={mapsUrl} className="link-arrow" target="_blank" rel="noopener">
                Itinéraire <span className="arrow">↗</span>
              </a>
              <p className="muted">Rendez-vous sur place ou en visio, à Cognac, Jarnac, Angoulême, Saintes et alentours.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
