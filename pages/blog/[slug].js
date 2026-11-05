import { useEffect, useRef } from 'react';
import Link from 'next/link';
import SEO from '../../components/SEO';
import PageHero from '../../components/PageHero';
import AnswerBox from '../../components/AnswerBox';
import Faq from '../../components/Faq';
import RelatedLinks from '../../components/RelatedLinks';
import { business } from '../../lib/business';
import { articleNode, faqNode } from '../../lib/schema';
import { accentTitle, formatDate, slugify } from '../../lib/text';
import { articles, getArticle } from '../../lib/blog';

/** Reading progress drawn as a burning fuse under the header. */
function useFuse(articleRef, fuseRef) {
  useEffect(() => {
    const el = articleRef.current;
    const fuse = fuseRef.current;
    if (!el || !fuse) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight * 0.6;
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.25 - r.top) / Math.max(1, total)));
      fuse.style.setProperty('--p', p.toFixed(4));
      fuse.style.setProperty('--alive', p > 0 && p < 1 ? '1' : '0');
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [articleRef, fuseRef]);
}

/** Highlights the table-of-contents entry of the section being read. */
function useActiveToc(articleRef, tocRef, slug) {
  useEffect(() => {
    const el = articleRef.current;
    const toc = tocRef.current;
    if (!el || !toc || typeof IntersectionObserver === 'undefined') return undefined;
    const heads = Array.from(el.querySelectorAll('h2[id]'));
    const links = new Map(Array.from(toc.querySelectorAll('a')).map((a) => [a.getAttribute('href').slice(1), a]));
    const visible = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        const current = heads.find((h) => visible.has(h.id));
        if (!current) return;
        links.forEach((a, id) => a.classList.toggle('is-active', id === current.id));
      },
      { rootMargin: '-15% 0px -70% 0px' },
    );
    heads.forEach((h) => io.observe(h));
    return () => io.disconnect();
  }, [articleRef, tocRef, slug]);
}

export default function Article({ a, published, updated }) {
  const articleRef = useRef(null);
  const tocRef = useRef(null);
  const fuseRef = useRef(null);
  useFuse(articleRef, fuseRef);
  useActiveToc(articleRef, tocRef, a.slug);

  const path = `/blog/${a.slug}`;
  const crumbs = [
    ['Accueil', '/'],
    ['Guides', '/blog'],
    [a.title, path],
  ];
  const sections = a.sections.map((s) => ({ ...s, id: slugify(s.title) }));
  const toc = [
    ...sections.map((s) => [s.title, s.id]),
    ...(a.takeaways?.length ? [['À retenir', 'a-retenir']] : []),
    ...(a.faqs?.length ? [['Questions fréquentes', 'questions-frequentes']] : []),
  ];

  return (
    <>
      <SEO
        title={a.metaTitle || a.title}
        description={a.description}
        path={path}
        type="article"
        crumbs={crumbs}
        dateModified={a.updatedAt || a.publishedAt}
        article={{ publishedAt: a.publishedAt, updatedAt: a.updatedAt, category: a.category }}
        schema={[articleNode(a, business.socialImage), faqNode(path, a.faqs)]}
      />
      <div ref={fuseRef} className="fuse" aria-hidden="true">
        <span className="burnt" />
        <span className="spark" />
      </div>
      <PageHero eyebrow={a.category} title={accentTitle(a.title)} lede={a.description} crumbs={crumbs} className="article-head">
        <p className="meta">
          <span>
            Par <b>{business.founder}</b>
          </span>
          <span>
            Publié le <time dateTime={a.publishedAt}>{published}</time>
          </span>
          {a.updatedAt && a.updatedAt !== a.publishedAt && (
            <span>
              Mis à jour le <time dateTime={a.updatedAt}>{updated}</time>
            </span>
          )}
          <span>{a.readingMinutes} min de lecture</span>
        </p>
      </PageHero>
      <AnswerBox text={a.answer} />

      <div className="section">
        <div className="container article-layout">
          <nav ref={tocRef} className="toc" aria-label="Sommaire">
            <p>Sommaire</p>
            <ol>
              {toc.map(([title, id]) => (
                <li key={id}>
                  <a href={`#${id}`}>{title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article ref={articleRef} className="prose">
            {(a.intro || []).map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
            {sections.map((s) => (
              <section key={s.id} aria-labelledby={s.id}>
                <h2 id={s.id}>{s.title}</h2>
                {(s.paragraphs || []).map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
                {s.items?.length ? (
                  <ul>
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                ) : null}
                {s.code ? (
                  <pre tabIndex={0}>
                    <code>{s.code}</code>
                  </pre>
                ) : null}
              </section>
            ))}
            {a.takeaways?.length ? (
              <aside className="takeaways" aria-labelledby="a-retenir">
                <h2 id="a-retenir">À retenir</h2>
                <ul>
                  {a.takeaways.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </aside>
            ) : null}
            {a.faqs?.length ? (
              <section aria-labelledby="questions-frequentes">
                <h2 id="questions-frequentes">Questions fréquentes</h2>
                <Faq items={a.faqs} />
              </section>
            ) : null}
            {a.sources?.length ? (
              <section className="sources" aria-labelledby="sources">
                <h2 id="sources">Sources</h2>
                <ol>
                  {a.sources.map(([name, href]) => (
                    <li key={href}>
                      <a href={href} target="_blank" rel="noopener">
                        {name}
                      </a>
                    </li>
                  ))}
                </ol>
              </section>
            ) : null}
            <div className="author-box">
              <img src="/brand/logo-mark-96.webp" width="64" height="64" alt="" loading="lazy" />
              <p>
                <b>{business.founder}</b> a fondé {business.brandName} à Cognac : développeur web et consultant GEO, il écrit ces guides à partir de ses projets.{' '}
                <Link href="/about" className="text-link">
                  Qui est derrière l’agence
                </Link>
              </p>
            </div>
          </article>
        </div>
      </div>

      <section className="section section--tint section-tight" aria-labelledby="next-title">
        <div className="container">
          <h2 id="next-title" className="h3">
            Pour aller plus loin
          </h2>
          <RelatedLinks links={a.links} label="Pages liées à ce guide" />
          <div className="article-cta">
            <p>Vous voulez savoir où en est votre site ? L’audit SEO &amp; GEO est offert.</p>
            <Link href="/contact?service=audit-geo" className="btn btn-primary">
              Demander mon audit <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  return { paths: articles.map((a) => ({ params: { slug: a.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
  const a = getArticle(params.slug);
  if (!a) return { notFound: true };
  return {
    props: {
      a: JSON.parse(JSON.stringify({ ...a, updatedAt: a.updatedAt || null, city: a.city || null })),
      published: formatDate(a.publishedAt),
      updated: formatDate(a.updatedAt || a.publishedAt),
    },
  };
}
