import Link from 'next/link';
import SEO, {
  createBreadcrumbSchema,
  createFAQSchema,
  createLocalBusinessSchema,
  createWebPageSchema,
} from './SEO';
import { CrawlerPageContent } from './CrawlerContent';

const icon = (src, className = 'h-5 w-5') => <img src={src} alt="" className={`${className} object-contain`} />;

export default function ContentPageLayout({ page, baseUrl, isCrawler = false }) {
  const isLocal = page.type === 'local';
  const ogImage = `/api/og?type=${encodeURIComponent(isLocal ? 'Création de site internet local' : 'Service web')}&title=${encodeURIComponent(page.metaTitle)}`;
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: isLocal ? page.city : page.eyebrow, url: page.canonical },
  ]);
  const faqSchema = page.faqs?.length ? createFAQSchema(page.faqs.map(([question, answer]) => ({ question, answer }))) : null;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      createLocalBusinessSchema(),
      createWebPageSchema(page.title, page.metaDescription, `${baseUrl}${page.canonical}`),
      breadcrumbSchema,
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  const crawlerSections = [
    { title: 'Introduction', content: page.intro },
    ...(page.sections || []).map((section) => ({
      title: section.title,
      content: section.body?.join(' '),
      items: section.items,
    })),
    ...(isLocal
      ? [
          { title: `Pour quels professionnels à ${page.city} ?`, items: page.professionals },
          { title: `SEO local à ${page.city}`, content: page.localSeo },
          ...(page.detailSections || []).map((section) => ({
            title: section.title,
            content: section.body.join(' '),
          })),
        ]
      : []),
  ];

  return (
    <>
      <SEO
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={page.canonical}
        ogImage={ogImage}
        schema={schema}
        keywords={page.keywords}
      />
      <CrawlerPageContent isCrawler={isCrawler} title={page.title} description={page.metaDescription} sections={crawlerSections} />

      <div className="bg-background">
        <section className="tm-subpage-hero relative overflow-hidden px-6 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="tm-subpage-art" style={{ backgroundImage: `url('${page.heroImage}')` }} />
          <div className="mx-auto max-w-6xl relative">
            <nav aria-label="Fil d’Ariane" className="mb-6 text-xs text-slate-400">
              <Link href="/" className="hover:text-accent">Accueil</Link>
              <span className="mx-2">/</span>
              <span>{isLocal ? page.city : page.eyebrow}</span>
            </nav>
            <div className="max-w-3xl">
              <span className="tm-badge">{page.eyebrow}</span>
              <h1 className="tm-title mt-5 text-4xl leading-[1.05] md:text-6xl" data-speakable="true">{page.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{page.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {page.cta && <Link href={page.cta.href} className="tm-button tm-button-primary">{page.cta.label}</Link>}
                {page.secondaryCta && <Link href={page.secondaryCta.href} className="tm-button tm-button-dark">{page.secondaryCta.label}</Link>}
              </div>
            </div>
          </div>
        </section>

        {isLocal && (
          <>
            <section className="px-6 py-16 md:py-24">
              <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <p className="tm-kicker">Contexte local</p>
                  <h2 className="tm-title mt-2 text-3xl md:text-4xl">Pour quels professionnels à {page.city} ?</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    Le contenu local est rédigé pour refléter la réalité de la ville, pas pour remplacer seulement le nom d’une commune.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {page.professionals.map((item) => (
                    <article key={item} className="tm-glass-soft rounded-2xl p-5 text-sm leading-6 text-slate-200">
                      {icon('/assets/icon-check-orange.webp', 'mb-3 h-5 w-5')}
                      {item}
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-6 pb-16 md:pb-24">
              <div className="tm-thick-glass mx-auto max-w-6xl rounded-3xl p-6 md:p-10">
                <p className="tm-kicker">SEO local à {page.city}</p>
                <h2 className="tm-title mt-2 text-3xl md:text-4xl">Une page locale utile, sans fausse implantation.</h2>
                <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-300">{page.localSeo}</p>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {page.uniqueAngles.map((angle) => (
                    <div key={angle} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 text-sm text-slate-200">
                      {angle}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="px-6 pb-16 md:pb-24">
              <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
                {page.detailSections?.map((section) => (
                  <article key={section.title} className="tm-glass-soft rounded-2xl p-6">
                    <h2 className="tm-title text-2xl">{section.title}</h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-300">{paragraph}</p>
                    ))}
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-5 md:grid-cols-2">
              {(isLocal
                ? [
                    {
                      title: 'Ce que contient votre site',
                      body: ['Un site local efficace doit être clair dès le premier écran et rester utile après le premier contact.'],
                      items: page.siteIncludes,
                    },
                    { title: 'Méthode', body: ['La production avance vite, mais avec une structure propre.'], items: page.method },
                  ]
                : page.sections
              ).map((section) => (
                <article id={section.title === 'Zones secondaires' ? 'jarnac' : undefined} key={section.title} className="tm-thick-glass scroll-mt-24 rounded-2xl p-6 md:p-7">
                  <h2 className="tm-title text-2xl">{section.title}</h2>
                  {section.body?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-300">{paragraph}</p>
                  ))}
                  {section.items?.length > 0 && (
                    <ul className="mt-5 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                          {icon('/assets/icon-check-green.webp', 'mt-1 h-4 w-4 shrink-0')}
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 md:pb-24">
          <div className="tm-audit tm-thick-glass mx-auto grid max-w-5xl gap-6 rounded-3xl p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div>
              <p className="tm-kicker">Audit offert</p>
              <h2 className="tm-title mt-2 text-3xl">Un premier regard clair sur votre projet.</h2>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Envoyez votre URL ou votre idée. Vous recevez une réponse directe, avec les priorités à traiter.
              </p>
            </div>
            <Link href="/contact?service=audit-seo" className="tm-button tm-button-white">Demander mon audit</Link>
          </div>
        </section>

        {page.faqs?.length > 0 && (
          <section className="border-y border-border px-6 py-16 md:py-24">
            <div className="mx-auto max-w-4xl">
              <p className="tm-kicker">FAQ</p>
              <h2 className="tm-title mt-2 text-3xl md:text-4xl">Questions fréquentes</h2>
              <div className="mt-8 space-y-4">
                {page.faqs.map(([question, answer]) => (
                  <details key={question} className="tm-glass-soft rounded-2xl p-5">
                    <summary className="cursor-pointer text-base font-bold text-white">{question}</summary>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="tm-kicker">Maillage utile</p>
            <h2 className="tm-title mt-2 text-3xl">Continuer naturellement</h2>
            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {page.relatedLinks?.map(([label, href]) => (
                <Link key={`${label}-${href}`} href={href} className="tm-glass-soft flex min-h-24 items-center justify-between rounded-2xl p-5 text-sm font-bold text-slate-100 transition-colors hover:text-accent">
                  <span>{label}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
