import Link from 'next/link';
import SEO, { createBreadcrumbSchema, createLocalBusinessSchema, createWebPageSchema } from '../../components/SEO';
import { blogPosts } from '../../lib/blog-data';

export default function BlogIndex({ baseUrl }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      createLocalBusinessSchema(),
      createWebPageSchema('Blog SEO, création de site et visibilité locale', 'Guides pratiques pour sites vitrines, SEO local, SEO IA, CRM, LMS, e-commerce et performance web.', `${baseUrl}/blog`),
      createBreadcrumbSchema([
        { name: 'Accueil', url: '/' },
        { name: 'Blog', url: '/blog' },
      ]),
    ],
  };
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <>
      <SEO
        title="Blog SEO local, création de site & visibilité IA"
        description="Guides pratiques pour créer un site rapide, améliorer le SEO local, préparer le référencement IA et transformer les visiteurs en demandes."
        canonical="/blog"
        schema={schema}
      />

      <div className="bg-background">
        <section className="tm-subpage-hero relative overflow-hidden px-6 pb-20 pt-24 md:pb-28 md:pt-32">
          <div className="tm-subpage-art" style={{ backgroundImage: "url('/assets/services-audit-seo-diagnostics.webp')" }} />
          <div className="mx-auto max-w-6xl relative">
            <span className="tm-badge">Blog SEO & acquisition locale</span>
            <h1 className="tm-title mt-5 max-w-4xl text-4xl leading-[1.05] md:text-6xl">
              Guides pratiques pour créer un site qui charge vite, se comprend vite et convertit mieux.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              SEO local, site vitrine en 24h, refonte, visibilité IA, CRM, LMS, e-commerce, performance et accessibilité.
            </p>
          </div>
        </section>

        <section className="px-6 py-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-bold text-accent">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 md:pb-28">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="tm-glass-soft flex min-h-[300px] flex-col rounded-2xl p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="tm-kicker">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.city}</span>
                </div>
                <h2 className="mt-4 text-xl font-bold leading-tight font-[var(--font-heading)]">
                  <Link href={`/blog/${post.slug}`} className="hover:text-accent">{post.title}</Link>
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">{post.summary}</p>
                <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-accent">
                  Lire l’article <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://theo-multimedia.com',
    },
  };
}
