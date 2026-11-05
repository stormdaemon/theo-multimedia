import Link from 'next/link';

/** Grid of service cards. `items`: [{ slug, title, tag, text }] */
export default function ServiceCards({ items, headingLevel = 'h3' }) {
  const H = headingLevel;
  return (
    <div className="cards">
      {items.map((s) => (
        <Link key={s.slug} href={`/${s.slug}`} className="card-link">
          <span className="k">{s.tag}</span>
          <H>{s.title}</H>
          <p>{s.text}</p>
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
