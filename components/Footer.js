import Link from 'next/link';
import BrandLogo from './BrandLogo';

const footerIcon = (src) => <img src={src} alt="" className="h-4 w-4 object-contain" />;

const Footer = () => (
  <footer className="tm-footer py-8">
    <div className="tm-container tm-thick-glass rounded-[26px] px-7 py-7 md:px-9">
      <div className="grid gap-8 md:grid-cols-[1.35fr_.8fr_.9fr_.9fr_1.05fr]">
        <div>
          <Link href="/" className="mb-3 flex items-center gap-2">
            <BrandLogo compact />
          </Link>
          <p className="text-[12px] leading-5 text-slate-300">Sites vitrines en 24h, SEO local, CRM, LMS et e-commerce sur mesure.</p>
        </div>
        <div>
          <b className="text-sm">Navigation</b>
          {[
            ['Accueil', '/'],
            ['Sites vitrines', '/services'],
            ['SEO & Visibilité', '/seo'],
            ['Solutions sur mesure', '/solutions'],
            ['Réalisations', '/portfolio'],
            ['À propos', '/about'],
          ].map(([label, href]) => <p key={href} className="mt-1.5 text-[12px] text-slate-400"><Link href={href}>{label}</Link></p>)}
        </div>
        <div>
          <b className="text-sm">Services</b>
          {['Site vitrine en 24h', 'SEO Local & Audit', 'CRM sur mesure', 'LMS / E-learning', 'E-commerce'].map((item) => <p key={item} className="mt-1.5 text-[12px] text-slate-400">{item}</p>)}
        </div>
        <div>
          <b className="text-sm">Zone d’intervention</b>
          {['Cognac', 'Angoulême', 'Saintes', 'Jarnac', 'Toute la Charente'].map((item) => <p key={item} className="mt-1.5 flex items-center gap-1.5 text-[12px] text-slate-400">{footerIcon('/assets/icon-footer-location-orange.webp')}{item}</p>)}
        </div>
        <div>
          <b className="text-sm">Contact</b>
          <p className="mt-3 flex items-center gap-2 text-[12px] text-slate-300">{footerIcon('/assets/icon-footer-mail-orange.webp')}contact@theo-multimedia.com</p>
          <p className="mt-3 flex items-center gap-2 text-[12px] text-slate-300">{footerIcon('/assets/icon-footer-phone-orange.webp')}07 68 51 95 68</p>
          <p className="mt-3 flex items-center gap-2 text-[12px] text-slate-300">{footerIcon('/assets/icon-footer-location-orange.webp')}Cognac, Charente</p>
          <Link href="/contact" className="tm-button tm-button-dark mt-5 min-h-10 px-4 text-xs">Accéder au contact</Link>
        </div>
      </div>
    </div>
    <div className="tm-container mt-4 flex flex-wrap justify-between gap-3 text-[10px] text-slate-500">
      <span>© {new Date().getFullYear()} Théo Multimédia - Tous droits réservés.</span>
      <span className="flex gap-4"><Link href="/mentions-legales">Mentions légales</Link><Link href="/politique-confidentialite">Confidentialité</Link><Link href="/cgv">CGV</Link></span>
    </div>
  </footer>
);

export default Footer;
