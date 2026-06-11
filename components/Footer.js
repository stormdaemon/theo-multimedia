import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { business } from '../lib/business';

const footerIcon = (src) => <img src={src} alt="" className="h-4 w-4 object-contain" />;

const serviceLinks = [
  ['Site vitrine en 24h', '/site-vitrine-24h'],
  ['Création site internet', '/creation-site-internet'],
  ['SEO local', '/referencement-local'],
  ['Audit SEO gratuit', '/audit-seo-gratuit'],
  ['SEO IA / GEO', '/seo-ia'],
  ['CRM sur mesure', '/crm-sur-mesure'],
  ['LMS / E-learning', '/lms-elearning'],
  ['E-commerce', '/ecommerce-sur-mesure'],
];

const zoneLinks = [
  ['Cognac', '/creation-site-internet-cognac'],
  ['Angoulême', '/creation-site-internet-angouleme'],
  ['Saintes', '/creation-site-internet-saintes'],
  ['Jarnac', '/zones-intervention#jarnac'],
  ['Zones d’intervention', '/zones-intervention'],
];

const Footer = () => (
  <footer className="tm-footer py-8">
    <div className="tm-container tm-thick-glass rounded-[26px] px-7 py-7 md:px-9">
      <div className="grid gap-8 md:grid-cols-[1.25fr_.75fr_1fr_.9fr_1fr]">
        <div>
          <Link href="/" className="mb-3 flex items-center gap-2">
            <BrandLogo compact />
          </Link>
          <p className="text-[12px] leading-5 text-slate-300">{business.publicPositioning}</p>
          <p className="mt-3 text-[12px] leading-5 text-slate-400">{business.commercialPositioning}</p>
        </div>
        <div>
          <b className="text-sm">Navigation</b>
          {[
            ['Accueil', '/'],
            ['Services', '/services'],
            ['Réalisations', '/portfolio'],
            ['Blog', '/blog'],
            ['À propos', '/about'],
            ['Contact', '/contact'],
          ].map(([label, href]) => <p key={href} className="mt-1.5 text-[12px] text-slate-400"><Link href={href}>{label}</Link></p>)}
        </div>
        <div>
          <b className="text-sm">Services</b>
          {serviceLinks.map(([label, href]) => <p key={href} className="mt-1.5 text-[12px] text-slate-400"><Link href={href}>{label}</Link></p>)}
        </div>
        <div>
          <b className="text-sm">Zone d’intervention</b>
          {zoneLinks.map(([label, href]) => (
            <p key={href} className="mt-1.5 flex items-center gap-1.5 text-[12px] text-slate-400">
              {footerIcon('/assets/icon-footer-location-orange.webp')}
              <Link href={href}>{label}</Link>
            </p>
          ))}
        </div>
        <div>
          <b className="text-sm">Contact</b>
          <p className="mt-3 flex items-center gap-2 text-[12px] text-slate-300">
            {footerIcon('/assets/icon-footer-mail-orange.webp')}
            <a href={`mailto:${business.email}`}>{business.email}</a>
          </p>
          <p className="mt-3 flex items-center gap-2 text-[12px] text-slate-300">
            {footerIcon('/assets/icon-footer-phone-orange.webp')}
            <a href={`tel:${business.phoneE164}`}>{business.phone}</a>
          </p>
          <p className="mt-3 flex items-center gap-2 text-[12px] text-slate-300">
            {footerIcon('/assets/icon-footer-location-orange.webp')}
            {business.baseArea}
          </p>
          <Link href="/contact" className="tm-button tm-button-dark mt-5 min-h-10 px-4 text-xs">Accéder au contact</Link>
        </div>
      </div>
    </div>
    <div className="tm-container mt-4 flex flex-wrap justify-between gap-3 text-[10px] text-slate-500">
      <span suppressHydrationWarning>© {new Date().getFullYear()} {business.brandName} - Tous droits réservés.</span>
      <span className="flex gap-4"><Link href="/mentions-legales">Mentions légales</Link><Link href="/politique-confidentialite">Confidentialité</Link><Link href="/cgv">CGV</Link></span>
    </div>
  </footer>
);

export default Footer;
