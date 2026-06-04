import Link from 'next/link';
import SEO, { createBreadcrumbSchema, createLocalBusinessSchema } from '../../components/SEO';
import { buildArticleSections, blogPosts, getBlogPost } from '../../lib/blog-data';
import { absoluteUrl, business } from '../../lib/business';

export default function BlogPostPage({ post, sections }) {
  const canonical = `/blog/${post.slug}`;
  const ogImage = `/api/og?type=${encodeURIComponent(`Blog • ${post.category}`)}&title=${encodeURIComponent(post.title)}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      createLocalBusinessSchema(),
      createBreadcrumbSchema([
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: canonical },
      ]),
      {
        '@type': 'Article',
        '@id': `${absoluteUrl(canonical)}#article`,
        headline: post.title,
        description: post.summary,
        inLanguage: 'fr-FR',
        author: {
          '@type': 'Person',
          name: business.founder,
        },
        publisher: {
          '@type': 'Organization',
          name: business.brandName,
          logo: {
            '@type': 'ImageObject',
            url: absoluteUrl('/assets/logo-theo-multimedia-orange-v2.webp'),
          },
        },
        mainEntityOfPage: absoluteUrl(canonical),
        image: absoluteUrl('/images/og/blog.svg'),
      },
    ],
  };

  return (
    <>
      <SEO
        title={`${post.title} | Blog`}
        description={post.summary}
        canonical={canonical}
        ogImage={ogImage}
        ogType="article"
        schema={schema}
        keywords={[post.keyword, post.category, post.city]}
      />

      <article className="bg-background">
        <header className="tm-subpage-hero relative overflow-hidden px-6 pb-16 pt-24 md:pb-24 md:pt-32">
          <div className="tm-subpage-art" style={{ backgroundImage: "url('/assets/services-audit-seo-diagnostics.webp')" }} />
          <div className="mx-auto max-w-4xl relative">
            <nav aria-label="Fil d’Ariane" className="mb-6 text-xs text-slate-400">
              <Link href="/" className="hover:text-accent">Accueil</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-accent">Blog</Link>
            </nav>
            <span className="tm-badge">{post.category}</span>
            <h1 className="tm-title mt-5 text-4xl leading-[1.06] md:text-6xl">{post.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{post.summary}</p>
            <p className="mt-5 text-sm text-slate-500">Mot-clé cible : {post.keyword}</p>
          </div>
        </header>

        <div className="px-6 py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="tm-thick-glass rounded-3xl p-6 md:p-10">
              <p className="text-base leading-8 text-slate-200">
                {post.summary} Ce guide est pensé pour {post.audience}. Il reste volontairement concret : ce qu’il faut clarifier, ce qu’il faut éviter et les pages à relier pour obtenir un site plus utile.
              </p>

              {sections.map((section) => (
                <section key={section.title} className="mt-10">
                  <h2 className="tm-title text-2xl md:text-3xl">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-sm leading-7 text-slate-300">{paragraph}</p>
                  ))}
                  {section.items?.length > 0 && (
                    <ul className="mt-5 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-200">
                          <img src="/assets/icon-check-green.webp" alt="" className="mt-1 h-4 w-4 shrink-0 object-contain" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section className="mt-10 rounded-2xl border border-accent/30 bg-accent/10 p-5">
                <h2 className="tm-title text-2xl">Conclusion</h2>
                <p className="mt-4 text-sm leading-7 text-slate-200">
                  Une bonne page ne cherche pas à tout dire. Elle répond à une intention, donne confiance, reste rapide et propose une action claire. Pour {post.keyword}, le plus important est de relier le contenu au besoin réel du visiteur.
                </p>
              </section>
            </div>

            <aside className="space-y-4">
              <div className="tm-glass-soft rounded-2xl p-5">
                <p className="tm-kicker">Liens internes</p>
                <div className="mt-4 space-y-3">
                  {post.links.map(([label, href]) => (
                    <Link key={`${label}-${href}`} href={href} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 text-sm font-bold text-slate-200 hover:text-accent">
                      {label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="tm-audit tm-glass-soft rounded-2xl p-5">
                <p className="tm-kicker">Audit offert</p>
                <h2 className="mt-2 text-xl font-bold">Besoin d’un avis sur votre site ?</h2>
                <p className="mt-3 text-sm leading-6 text-slate-200">Envoyez votre URL et recevez les priorités SEO à traiter.</p>
                <Link href="/contact?service=audit-seo" className="tm-button tm-button-white mt-5 w-full text-sm">Demander l’audit</Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: blogPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
      sections: buildArticleSections(post),
    },
  };
}
