import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { business } from '../lib/business';

export const mainNav = [
  { href: '/geo-referencement-ia', label: 'GEO', hint: 'Être cité par les IA' },
  { href: '/services', label: 'Services', hint: 'Tout ce que je fais' },
  { href: '/portfolio', label: 'Réalisations', hint: 'Sites en ligne et archives' },
  { href: '/blog', label: 'Ressources', hint: 'Guides GEO, SEO et web' },
  { href: '/about', label: 'L’agence', hint: 'Qui est derrière' },
];

function isCurrent(asPath, href) {
  const path = asPath.split(/[?#]/)[0];
  return path === href || (href !== '/' && path.startsWith(`${href}/`));
}

export default function Header() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      setHidden(goingDown && y > 280);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router.events]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className={`site-header${hidden && !open ? ' is-hidden' : ''}`}>
        <div className="container">
          <Link href="/" className="brand" aria-label="Théo Multimédia, retour à l’accueil">
            <img src="/brand/logo-mark-96.webp" width="34" height="34" alt="" />
            <span className="brand-name">
              Théo <span>Multimédia</span>
            </span>
          </Link>
          <nav className="nav" aria-label="Navigation principale">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isCurrent(router.asPath, item.href) ? 'page' : undefined}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact?service=audit-geo" className="btn btn-primary">
              Audit offert
            </Link>
          </nav>
          <button
            ref={btnRef}
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Fermer' : 'Menu'}
            <span className="bars" aria-hidden="true" />
          </button>
        </div>
      </header>
      <div id="menu-mobile" className="mobile-menu" hidden={!open}>
        <nav aria-label="Navigation mobile">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="big" aria-current={isCurrent(router.asPath, item.href) ? 'page' : undefined}>
              {item.label}
              <small>{item.hint}</small>
            </Link>
          ))}
          <Link href="/contact" className="big">
            Contact
            <small>Un projet, une question</small>
          </Link>
        </nav>
        <div className="mobile-contact">
          <Link href="/contact?service=audit-geo" className="btn btn-primary">
            Demander l’audit SEO &amp; GEO offert
          </Link>
          <a href={`tel:${business.phoneE164}`} className="link-arrow" style={{ color: '#fff' }}>
            {business.phone} <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </>
  );
}
