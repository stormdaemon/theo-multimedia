import Link from 'next/link';
import SEO, { createFAQSchema, createLocalBusinessSchema, createWebPageSchema } from '../components/SEO';
import { CrawlerPageContent } from '../components/CrawlerContent';

const icon = (src, className = 'h-6 w-6') => <img src={src} alt="" className={`${className} object-contain`} />;

const serviceStrip = [
  ['/assets/icon-design-orange.webp', 'Site Vitrine', 'En 24h'],
  ['/assets/icon-seo-local-orange.webp', 'SEO Local', 'Google & IA'],
  ['/assets/icon-seo-audit-orange.webp', 'Audit SEO', 'Gratuit'],
  ['/assets/icon-crm-orange.webp', 'CRM sur mesure', 'Gestion clients'],
  ['/assets/icon-lms-orange.webp', 'LMS & E-learning', 'Universités'],
  ['/assets/icon-ecommerce-orange.webp', 'E-commerce', 'Sans Shopify'],
];

const services = [
  ['/assets/icon-design-orange.webp', 'Site vitrine en 24h', 'Un site professionnel, moderne et rapide, livré en 24h maximum.', '/assets/service-card-site-vitrine-preview.webp'],
  ['/assets/icon-seo-local-orange.webp', 'SEO Local & Référencement', 'Soyez visible sur Google à Cognac, en Charente et alentours.', '/assets/service-card-seo-local-preview.webp'],
  ['/assets/icon-seo-audit-orange.webp', 'Audit SEO gratuit', 'J’analyse votre site et vous donne un plan d’action clair.', '/assets/service-card-audit-seo-preview.webp'],
  ['/assets/icon-crm-orange.webp', 'CRM sur mesure', 'Gérez vos clients, devis, relances et suivi dans un outil adapté.', '/assets/service-card-crm-preview.webp'],
  ['/assets/icon-lms-orange.webp', 'LMS / E-learning', 'Plateformes de formation pour écoles, universités et organismes.', '/assets/service-card-lms-preview.webp'],
  ['/assets/icon-ecommerce-orange.webp', 'E-commerce sur mesure', 'Boutiques rapides, sécurisées, sans les limites de Shopify.', '/assets/service-card-ecommerce-preview.webp'],
];

const projects = [
  ["SOS Chrétiens d’Occident", 'Site vitrine', '/assets/project-sos-chretiens-occident-preview.webp'],
  ['Institut Irénée', 'Site vitrine', '/assets/project-institut-irenee-preview.webp'],
  ['Heaven Radio', 'Web Radio', '/assets/project-heaven-radio-preview.webp'],
  ['TRACKWARS', 'Application web', '/assets/project-trackwars-preview.webp'],
];

const stats = [
  ['/assets/icon-clock-orange.webp', '24h', 'Délai max de livraison'],
  ['/assets/icon-target-orange.webp', 'SEO', 'Optimisation locale incluse'],
  ['/assets/icon-users-orange.webp', 'Local', 'Accompagnement direct'],
  ['/assets/icon-star-rating-orange.webp', 'Sur mesure', 'Aucun template générique'],
];

const steps = [
  ['1', 'On échange', 'Vous me parlez de votre projet (10 min).'],
  ['2', 'Je conçois', 'Je crée votre site ou solution sur mesure.'],
  ['3', 'Je livre en 24h', 'Votre site est en ligne, prêt à performer.'],
  ['4', 'Vous développez votre activité', 'Grâce au SEO et à une stratégie efficace.'],
];

const HomePage = ({ baseUrl, isCrawler }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      createLocalBusinessSchema(),
      createWebPageSchema('Agence Web Cognac - Site vitrine en 24h', 'Sites vitrines, SEO local et solutions web sur mesure à Cognac et en Charente.', baseUrl),
      createFAQSchema([{ question: 'Combien coûte un site vitrine ?', answer: 'Chaque projet est chiffré gratuitement après un échange rapide.' }]),
    ],
  };

  return (
    <>
      <SEO title="Agence Web Cognac - Site vitrine en 24h" description="Théo Multimédia crée votre site vitrine en 24h à Cognac. SEO local, audit gratuit et solutions web sur mesure." canonical="/" schema={schema} enableLocalSEO={true} />
      <CrawlerPageContent isCrawler={isCrawler} title="Théo Multimédia - Agence Web Cognac" description="Sites vitrines, SEO local et solutions sur mesure." sections={services.map((s) => ({ title: s[1], content: s[2] }))} />

      <div className="tm-site-shell">
        <section className="tm-hero">
          <div className="tm-hero-rays" />
          <div className="tm-container tm-hero-container relative grid items-center">
            <div className="tm-hero-copy relative z-10">
              <span className="tm-badge">+ Agence web à Cognac & Charente</span>
              <h1 className="tm-title mt-5 text-[50px] leading-[1.01] md:text-[64px] xl:text-[68px]" aria-label="Votre site vitrine en 24h chrono.">
                <span className="hidden whitespace-nowrap sm:inline">Votre site vitrine</span><span className="sm:hidden">Votre site<br />vitrine</span><br /><span className="tm-orange tm-brush sm:whitespace-nowrap">en 24h<span className="sm:hidden"><br /></span><span className="hidden sm:inline"> </span>chrono.</span>
              </h1>
              <p className="mt-8 max-w-[560px] text-[19px] leading-7 text-slate-100">
                Sites rapides, modernes et optimisés SEO.<br /><b>Plus de visibilité. Plus de clients.</b>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Livraison en 24h', 'Design sur mesure', 'SEO inclus'].map((label) => <span key={label} className="tm-chip">◉ <span>{label}</span></span>)}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/contact" className="tm-button tm-button-primary tm-button-hero">Demander un site en 24h {icon('/assets/icon-arrow-right-white.webp', 'h-4 w-4')}</Link>
                <Link href="/contact" className="tm-button tm-button-dark">Audit SEO gratuit {icon('/assets/icon-search-white.webp', 'h-4 w-4')}</Link>
              </div>
              <p className="mt-7 text-[13px] leading-6 text-slate-300"><b className="text-white">Basé à Cognac, en Charente.</b><br />Un interlocuteur direct pour votre projet web.</p>
            </div>

            <div className="tm-hero-visual relative">
              <div className="tm-delivery-card">
                <span><i /> Livraison</span><b>24h</b><small>max</small>
              </div>
              {icon('/assets/icon-rocket-orange.webp', 'absolute left-[3%] top-[8%] h-12 w-12')}
              <img src="/assets/hero-curved-arrow-orange.webp" alt="" className="absolute left-[8%] top-[23%] h-32 w-28 object-contain" />
              <img src="/assets/hero-devices-electricien-restaurant.webp" alt="Site artisan électricien et restaurant sur ordinateur et mobile" className="absolute inset-0 h-full w-full object-contain object-right-bottom" />
            </div>
          </div>
        </section>

        <section className="tm-container tm-thick-glass tm-service-strip">
          <div className="grid md:grid-cols-3 lg:grid-cols-6">
            {serviceStrip.map(([asset, title, text]) => <div className="tm-service-strip-item flex items-center gap-4 px-5 py-4" key={title}>{icon(asset, 'h-10 w-10')}<span><b className="block text-sm">{title}</b><small className="text-[11px] text-slate-300">{text}</small></span></div>)}
          </div>
        </section>

        <section className="tm-section tm-container grid items-center gap-8 lg:grid-cols-[minmax(0,38%)_minmax(0,62%)]">
          <div><h2 className="tm-title text-4xl">Une agence locale,<br />des <span className="tm-orange">résultats concrets.</span></h2><p className="mt-4 text-sm leading-6 text-slate-300">Pas de template impersonnel.<br />Chaque interface répond à vos objectifs.</p></div>
          <div className="tm-thick-glass grid min-w-0 rounded-[24px] sm:grid-cols-4">
            {stats.map(([asset, value, label]) => <div className="tm-stat px-6 py-7 text-center" key={value}>{icon(asset, 'mx-auto h-9 w-9')}<b className="mt-2 block text-3xl text-orange-500">{value}</b><small className="text-[11px] text-slate-300">{label}</small></div>)}
          </div>
        </section>

        <section className="tm-section tm-container">
          <h2 className="tm-title mb-7 text-center text-3xl">Ce que je peux faire pour vous</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {services.map(([asset,title,text,image]) => <article className="tm-service-card tm-glass rounded-[22px]" key={title}><img src={image} alt="" /><div className="p-5">{icon(asset, 'mb-3 h-8 w-8')}<h3 className="text-sm font-bold">{title}</h3><p className="mt-3 text-[12px] leading-5 text-slate-300">{text}</p><span className="tm-round-arrow">{icon('/assets/icon-arrow-right-white.webp', 'h-3 w-3')}</span></div></article>)}
          </div>
        </section>

        <section className="tm-section tm-container">
          <h2 className="tm-title mb-7 text-center text-3xl">Ils m’ont fait confiance</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map(([title,category,image]) => (
              <article className="tm-project-card tm-glass rounded-[22px] p-3" key={title}>
                <div className="tm-project-media">
                  <img src={image} alt={title} />
                  <span className="tm-project-badge">{category}</span>
                </div>
                <h3 className="mt-3 text-sm font-bold">{title}</h3>
                <p className="text-[11px] text-slate-300">{category}</p>
              </article>
            ))}
          </div>
          <Link href="/portfolio" className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-orange-500">Voir toutes les réalisations {icon('/assets/icon-arrow-right-white.webp', 'h-4 w-4')}</Link>
        </section>

        <section className="tm-process tm-container tm-thick-glass my-8 rounded-[28px] px-7 py-7 md:px-10" style={{ backgroundImage: "linear-gradient(90deg, rgba(5,9,14,.98), rgba(5,9,14,.92) 62%, rgba(5,9,14,.28)), url('/assets/process-section-developer-working.webp')" }}>
          <h2 className="tm-title mb-8 text-3xl">Comment ça marche ?</h2>
          <div className="tm-process-grid grid gap-4 md:grid-cols-4 lg:w-[72%]">
            {steps.map(([number,title,text]) => <div className="tm-glass-soft relative rounded-[18px] px-5 py-8 text-center" key={number}><b className="tm-step-number">{number}</b><h3 className="mt-3 text-sm font-bold">{title}</h3><p className="mt-3 text-[12px] leading-5 text-slate-300">{text}</p></div>)}
          </div>
        </section>

        <section id="audit" className="tm-audit tm-container tm-thick-glass mb-8 grid items-center rounded-[28px] md:grid-cols-[22%_31%_28%_19%]">
          <div className="relative hidden min-h-[180px] md:block"><img src="/assets/audit-seo-target-rocket.webp" className="absolute inset-0 h-full w-full object-cover" alt="" /></div>
          <div className="relative z-10 p-6"><p className="tm-kicker">Offerte - sans engagement</p><h2 className="tm-title mt-1 text-4xl">Audit SEO gratuit</h2><p className="mt-3 text-sm leading-6 text-slate-200">Découvrez ce qui bloque votre visibilité sur Google et comment attirer plus de clients.</p></div>
          <ul className="relative z-10 border-l border-white/10 px-6 py-5 text-[13px] leading-8 text-slate-100">{['Analyse complète de votre site','Points bloquants identifiés','Plan d’action concret et priorisé','Recommandations SEO & IA'].map((x) => <li key={x}>{icon('/assets/icon-check-green.webp', 'mr-2 inline h-4 w-4')}{x}</li>)}</ul>
          <div className="relative z-10 p-5 text-center"><Link href="/contact" className="tm-button tm-button-white text-sm font-black">Demander mon audit {icon('/assets/icon-arrow-right-white.webp', 'h-4 w-4 brightness-0')}</Link><p className="mt-4 text-[11px]">Réponse sous 24h</p></div>
        </section>
      </div>
    </>
  );
};

export async function getServerSideProps({ req }) {
  const { isCrawler } = await import('../lib/isCrawler');
  const { getSiteUrlFromHeaders } = await import('../lib/siteUrl');
  return { props: { baseUrl: getSiteUrlFromHeaders(req), isCrawler: isCrawler(req.headers['user-agent'] || '') } };
}

export default HomePage;
