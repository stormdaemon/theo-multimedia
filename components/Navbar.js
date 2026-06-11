import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BrandLogo from './BrandLogo';

const navItems = [
  { name: 'Accueil', path: '/', exact: true },
  { name: 'Services', path: '/services', exact: true },
  { name: 'Site 24h', path: '/site-vitrine-24h', exact: true },
  { name: 'SEO local', path: '/referencement-local', exact: true },
  { name: 'Sur mesure', path: '/solutions', exact: true },
  { name: 'Réalisations', path: '/portfolio', exact: true },
  { name: 'Blog', path: '/blog', exact: true },
  { name: 'Contact', path: '/contact', exact: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { asPath, events } = useRouter();

  // On compare le chemin réel (asPath) et non `pathname` : les pages comme
  // /site-vitrine-24h ou /referencement-local sont rendues par [slug].js,
  // donc `pathname` vaut "/[slug]" et l'onglet actif ne s'allumerait jamais.
  const currentPath = asPath.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  const isActive = (item) => currentPath === item.path;

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    events.on('routeChangeComplete', closeMenu);
    return () => events.off('routeChangeComplete', closeMenu);
  }, [events]);

  return (
    <header className="tm-navbar fixed inset-x-0 top-0 z-50">
      <div className="tm-container flex h-[76px] items-center justify-between gap-5">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <BrandLogo compact />
        </Link>

        <nav className="hidden h-full items-center gap-0.5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`tm-nav-link flex h-full items-center px-3 ${isActive(item) ? 'tm-nav-link-active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Link href="/audit-seo-gratuit" className="tm-desktop-audit tm-button tm-button-primary shrink-0 px-7">
          <img src="/assets/icon-seo-audit-orange.webp" alt="" className="h-5 w-5 brightness-0 invert" />
          Audit gratuit
        </Link>

        <button className="ml-auto xl:hidden" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
          <span className="mt-1.5 block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {open && (
        <nav className="tm-thick-glass border-x-0 border-b px-5 py-5 xl:hidden">
          <div className="tm-container flex flex-col gap-1">
            {navItems.map((item) => (
              <Link key={`${item.path}-mobile`} href={item.path} className="py-3 text-sm text-slate-200" onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            ))}
            <Link href="/audit-seo-gratuit" className="tm-button tm-button-primary mt-3" onClick={() => setOpen(false)}>
              Audit gratuit
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
