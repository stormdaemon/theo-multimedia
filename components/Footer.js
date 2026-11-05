import Link from 'next/link';
import { business } from '../lib/business';

const columns = [
  {
    title: 'Services',
    links: [
      ['GEO · référencement IA', '/geo-referencement-ia'],
      ['SEO local & Google Maps', '/referencement-local'],
      ['Création de site internet', '/creation-site-internet'],
      ['Refonte de site', '/refonte-site-internet'],
      ['E-commerce sur mesure', '/ecommerce-sur-mesure'],
      ['CRM & LMS sur mesure', '/solutions'],
      ['Maintenance', '/maintenance-site-web'],
      ['Préversion express 24 h', '/preversion-express-24h'],
    ],
  },
  {
    title: 'Ressources',
    links: [
      ['Audit SEO & GEO offert', '/audit-seo-gratuit'],
      ['Guides et articles', '/blog'],
      ['Qu’est-ce que le GEO ?', '/blog/geo-definition-referencement-ia'],
      ['SEO & GEO : le hub', '/seo'],
      ['Réalisations', '/portfolio'],
    ],
  },
  {
    title: 'Zones',
    links: [
      ['Agence web à Cognac', '/creation-site-internet-cognac'],
      ['Angoulême', '/creation-site-internet-angouleme'],
      ['Saintes', '/creation-site-internet-saintes'],
      ['Toutes les zones', '/zones-intervention'],
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <img className="footer-mark" src="/brand/logo-mark-512.webp" width="512" height="512" alt="" aria-hidden="true" loading="lazy" />
      <div className="container">
        <div className="top">
          <p className="statement">
            Votre métier, votre ville&nbsp;: <span className="accent">la réponse évidente.</span>
          </p>
          <div style={{ display: 'grid', gap: 14, justifyItems: 'start' }}>
            <p style={{ margin: 0, maxWidth: '34rem' }}>
              Un audit SEO &amp; GEO offert pour savoir où vous en êtes sur Google, Google Maps et dans les réponses des IA.
            </p>
            <Link href="/contact?service=audit-geo" className="btn btn-primary">
              Demander mon audit <span className="arrow">→</span>
            </Link>
          </div>
        </div>
        <div className="cols">
          <div>
            <h2>Théo Multimédia</h2>
            <address>
              <span>{business.legalAddress.streetAddress}</span>
              <span>
                {business.legalAddress.postalCode} {business.legalAddress.city}, {business.legalAddress.department}
              </span>
              <a className="tel" href={`tel:${business.phoneE164}`}>
                {business.phone}
              </a>
              <span>{business.openingHours.label}</span>
              <span>Par téléphone et en visio</span>
            </address>
          </div>
          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2>{col.title}</h2>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="bottom">
          <span>
            © {year} {business.brandName} · SIRET {business.siret} · Conçu et développé à Cognac
          </span>
          <span style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 18px' }}>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-confidentialite">Confidentialité</Link>
            <Link href="/cgv">CGV</Link>
            <Link href="/cgu">CGU</Link>
            <Link href="/contact">Contact</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
