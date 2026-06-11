import Link from 'next/link';
import SEO, { createFAQSchema, createLocalBusinessSchema, createWebPageSchema } from '../components/SEO';
import { business } from '../lib/business';
import { homepageServices } from '../lib/services-data';
import { getFeaturedProjects } from '../lib/projects';

const icon = (src, className = 'h-6 w-6') => <img src={src} alt="" className={`${className} object-contain`} />;

const serviceStrip = [
  ['/assets/icon-design-orange.webp', 'Site Vitrine', 'En 24h'],
  ['/assets/icon-seo-local-orange.webp', 'SEO Local', 'Google & IA'],
  ['/assets/icon-seo-audit-orange.webp', 'Audit SEO', 'Gratuit'],
  ['/assets/icon-crm-orange.webp', 'CRM sur mesure', 'Gestion clients'],
  ['/assets/icon-lms-orange.webp', 'LMS & E-learning', 'Formation'],
  ['/assets/icon-ecommerce-orange.webp', 'E-commerce', 'Sur mesure'],
];

const services = homepageServices;
const projects = getFeaturedProjects(6);

const stats = [
  ['/assets/icon-clock-orange.webp', '24h', 'Option express cadrée'],
  ['/assets/icon-target-orange.webp', 'SEO', 'Structure locale incluse'],
  ['/assets/icon-users-orange.webp', 'Local', 'Cognac, Angoulême, Saintes'],
  ['/assets/icon-star-rating-orange.webp', 'Sur mesure', 'Aucun template générique'],
];

const steps = [
  ['1', 'On échange', 'Vous me parlez de votre projet, de vos priorités et de votre délai.'],
  ['2', 'Je structure', 'Pages, messages, maillage, CTA et SEO local sont cadrés avant le design.'],
  ['3', 'Je conçois', 'Design premium, développement rapide, performance et accessibilité.'],
  ['4', 'On lance', 'Mise en ligne, vérifications SEO et prochaines actions claires.'],
];

const HomePage = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      createLocalBusinessSchema(),
      createWebPageSchema(
        'Site vitrine en 24h et SEO local',
        'Sites rapides, SEO local et solutions web sur mesure à Cognac, Angoulême, Saintes et en Charente.',
        business.siteUrl
      ),
      createFAQSchema([
        {
          question: 'Un site vitrine peut-il vraiment être livré en 24h ?',
          answer: 'Oui si le périmètre est cadré : offre claire, contenus disponibles et validations rapides.',
        },
      ]),
    ],
  };

  return (
    <>
      <SEO
        title="Site vitrine en 24h & SEO local à Cognac"
        description="Création de sites rapides, modernes et optimisés SEO à Cognac, Angoulême, Saintes et en Charente. Audit gratuit et contact direct."
        canonical="/"
        schema={schema}
        enableLocalSEO={true}
        keywords={['site vitrine en 24h', 'agence web Cognac', 'création site internet Charente', 'SEO local']}
      />

      <div className="tm-site-shell">
        <section className="tm-hero">
          <div className="tm-hero-rays" />
          <div className="tm-container tm-hero-container relative grid items-center">
            <div className="tm-hero-copy relative z-10">
              <span className="tm-badge">+ Agence web à Cognac, Angoulême & Saintes</span>
              <h1 className="tm-title mt-5 text-[44px] leading-[1.04] md:text-[60px] xl:text-[66px]">
                Votre site vitrine en 24h.<br />
                <span className="tm-orange tm-brush">Votre visibilité se construit dès le premier pixel.</span>
              </h1>
              <p className="mt-8 max-w-[620px] text-[18px] leading-8 text-slate-100">
                Théo Multimédia crée des sites rapides, élégants et optimisés pour capter des demandes qualifiées à Cognac, Angoulême, Saintes et en Charente. Design sur mesure, SEO local, copywriting et suivi clair.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Livraison express', 'SEO local inclus', 'Design sur mesure', 'Optimisé Google & IA'].map((label) => (
                  <span key={label} className="tm-chip">◉ <span>{label}</span></span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/contact?service=site-vitrine-24h" className="tm-button tm-button-primary tm-button-hero">
                  Demander mon site en 24h {icon('/assets/icon-arrow-right-white.webp', 'h-4 w-4')}
                </Link>
                <Link href="/audit-seo-gratuit" className="tm-button tm-button-dark">
                  Recevoir mon audit SEO gratuit {icon('/assets/icon-search-white.webp', 'h-4 w-4')}
                </Link>
              </div>
              <p className="mt-7 text-[13px] leading-6 text-slate-300">
                <b className="text-white">Agence web en Charente, basée à Cognac.</b><br />
                Un interlocuteur direct pour votre projet web.
              </p>
            </div>

            <div className="tm-hero-visual relative">
              <div className="tm-delivery-card">
                <span><i /> Livraison</span><b>24h</b><small>max</small>
              </div>
              {icon('/assets/icon-rocket-orange.webp', 'absolute left-[3%] top-[8%] h-12 w-12')}
              <img src="/assets/hero-curved-arrow-orange.webp" alt="" className="absolute left-[8%] top-[23%] h-32 w-28 object-contain" />
              <img src="/assets/hero-devices-electricien-restaurant.webp" alt="Aperçu de sites vitrines sur ordinateur et mobile" className="absolute inset-0 h-full w-full object-contain object-right-bottom" />
            </div>
          </div>
        </section>

        <section className="tm-container tm-thick-glass tm-service-strip">
          <div className="grid md:grid-cols-3 lg:grid-cols-6">
            {serviceStrip.map(([asset, title, text]) => (
              <div className="tm-service-strip-item flex items-center gap-4 px-5 py-4" key={title}>
                {icon(asset, 'h-10 w-10')}
                <span><b className="block text-sm">{title}</b><small className="text-[11px] text-slate-300">{text}</small></span>
              </div>
            ))}
          </div>
        </section>

        <section className="tm-section tm-container grid items-center gap-8 lg:grid-cols-[minmax(0,38%)_minmax(0,62%)]">
          <div>
            <h2 className="tm-title text-4xl">Un site beau, c’est bien.<br />Un site qui <span className="tm-orange">travaille pour vous</span>, c’est mieux.</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Chaque page doit avoir un rôle : rassurer, expliquer, prouver, convertir.
            </p>
          </div>
          <div className="tm-stats-grid tm-thick-glass grid min-w-0 grid-cols-2 rounded-[24px] md:grid-cols-4">
            {stats.map(([asset, value, label]) => (
              <div className="tm-stat tm-stat-card text-center" key={value}>
                {icon(asset, 'mx-auto h-9 w-9')}
                <b className="mt-2 block text-2xl text-orange-500 md:text-3xl">{value}</b>
                <small className="mt-1 block text-[11px] leading-4 text-slate-300">{label}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="tm-section tm-container">
          <h2 className="tm-title mb-3 text-center text-3xl">Ce que je peux faire pour vous</h2>
          <p className="mx-auto mb-7 max-w-2xl text-center text-sm leading-6 text-slate-300">
            Je construis votre site comme un outil d’acquisition, pas comme une brochure figée.
          </p>
          <div className="grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {services.map((service) => (
              <article className="tm-service-card tm-glass rounded-[22px]" key={service.title}>
                <Link href={service.href} className="tm-service-card-link" aria-label={service.ariaLabel}>
                  <img src={service.preview} alt="" />
                  <div className="p-5">
                    {icon(service.icon, 'mb-3 h-8 w-8')}
                    <h3 className="text-sm font-bold">{service.title}</h3>
                    <p className="mt-3 text-[12px] leading-5 text-slate-300">{service.description}</p>
                    <span className="tm-round-arrow" aria-hidden="true">{icon('/assets/icon-arrow-right-white.webp', 'h-3 w-3')}</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="tm-section tm-container">
          <h2 className="tm-title mb-7 text-center text-3xl">Réalisations récentes</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article className="tm-project-card tm-glass rounded-[22px] p-3" key={project.slug}>
                <Link href={`/portfolio/${project.slug}`} aria-label={`Voir la réalisation ${project.title}`}>
                  <div className="tm-project-media">
                    <img src={project.imageDesktop} alt={`${project.title} - aperçu de réalisation web`} />
                    <span className="tm-project-badge">{project.category}</span>
                    <div className="tm-project-tags">
                      {project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                  </div>
                  <h3 className="mt-3 text-sm font-bold">{project.title}</h3>
                  <p className="mt-1 text-[11px] leading-5 text-slate-300">{project.shortDescription}</p>
                </Link>
              </article>
            ))}
          </div>
          <Link href="/portfolio" className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-orange-500">
            Voir toutes les réalisations {icon('/assets/icon-arrow-right-white.webp', 'h-4 w-4')}
          </Link>
        </section>

        <section className="tm-process tm-container tm-thick-glass my-8 rounded-[28px] px-7 py-7 md:px-10" style={{ backgroundImage: "linear-gradient(90deg, rgba(5,9,14,.98), rgba(5,9,14,.92) 62%, rgba(5,9,14,.28)), url('/assets/process-section-developer-working.webp')" }}>
          <h2 className="tm-title mb-8 text-3xl">Comment ça marche ?</h2>
          <div className="tm-process-grid grid gap-4 md:grid-cols-4 lg:w-[72%]">
            {steps.map(([number, title, text]) => (
              <div className="tm-glass-soft relative rounded-[18px] px-5 py-8 text-center" key={number}>
                <b className="tm-step-number">{number}</b>
                <h3 className="mt-3 text-sm font-bold">{title}</h3>
                <p className="mt-3 text-[12px] leading-5 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="audit" className="tm-audit tm-container tm-thick-glass mb-8 grid items-center rounded-[28px] md:grid-cols-[22%_31%_28%_19%]">
          <div className="relative hidden min-h-[180px] md:block"><img src="/assets/audit-seo-target-rocket.webp" className="absolute inset-0 h-full w-full object-cover" alt="" /></div>
          <div className="relative z-10 p-6">
            <p className="tm-kicker">Offerte - sans engagement</p>
            <h2 className="tm-title mt-1 text-4xl">Audit SEO gratuit</h2>
            <p className="mt-3 text-sm leading-6 text-slate-200">Découvrez ce qui bloque votre visibilité sur Google et comment attirer plus de demandes qualifiées.</p>
          </div>
          <ul className="relative z-10 border-l border-white/10 px-6 py-5 text-[13px] leading-8 text-slate-100">
            {['Analyse de votre site', 'Points bloquants identifiés', 'Plan d’action priorisé', 'Recommandations SEO & IA'].map((x) => (
              <li key={x}>{icon('/assets/icon-check-green.webp', 'mr-2 inline h-4 w-4')}{x}</li>
            ))}
          </ul>
          <div className="relative z-10 p-5 text-center">
            <Link href="/contact?service=audit-seo" className="tm-button tm-button-white text-sm font-black">
              Demander mon audit {icon('/assets/icon-arrow-right-white.webp', 'h-4 w-4 brightness-0')}
            </Link>
            <p className="mt-4 text-[11px]">Réponse sous 24h ouvrées</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
