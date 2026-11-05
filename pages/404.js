import Link from 'next/link';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page introuvable" description="Cette page n’existe pas ou plus." path="/404" noindex />
      <section className="lost grain">
        <div>
          <div className="lost-mark" aria-hidden="true">
            <img className="mark-m" src="/brand/logo-m.webp" width="790" height="780" alt="" />
            <img className="mark-t" src="/brand/logo-t.webp" width="790" height="780" alt="" />
          </div>
          <p className="eyebrow on-dark">Erreur 404</p>
          <h1>Le T a raté le M.</h1>
          <p className="lede">Cette page n’existe pas ou plus. Le reste du site, lui, est bien en place.</p>
          <div className="hero-ctas lost-links">
            <Link href="/" className="btn btn-primary">
              Retour à l’accueil <span className="arrow">→</span>
            </Link>
            <Link href="/services" className="link-arrow">
              Services <span className="arrow">→</span>
            </Link>
            <Link href="/blog" className="link-arrow">
              Guides <span className="arrow">→</span>
            </Link>
            <Link href="/contact" className="link-arrow">
              Contact <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
