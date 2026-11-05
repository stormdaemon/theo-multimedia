import Link from 'next/link';
import Heat from './Heat';

/**
 * Dark hero of inner pages: breadcrumbs, eyebrow, forged H1, lede and actions.
 * `crumbs`: [['Accueil', '/'], ['Services', '/services'], ['Page', '/page']]
 */
export default function PageHero({ eyebrow, title, lede, crumbs, children, className = '' }) {
  return (
    <section className={`page-hero on-dark grain ${className}`.trim()}>
      <span className="strike-line" aria-hidden="true" />
      <div className="container">
        {crumbs?.length > 1 && (
          <nav aria-label="Fil d’Ariane">
            <ol className="crumbs">
              {crumbs.map(([label, href], i) => (
                <li key={`${i}-${href}`}>
                  {i < crumbs.length - 1 ? (
                    <Link href={href}>{label}</Link>
                  ) : (
                    <span aria-current="page">{label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <p className="eyebrow on-dark">{eyebrow}</p>}
        <Heat as="h1" text={title} threshold={0} />
        {lede && <p className="lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
