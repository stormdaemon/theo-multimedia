import Link from 'next/link';

export default function RelatedLinks({ links, label = 'Pages liées' }) {
  if (!links?.length) return null;
  return (
    <nav className="related" aria-label={label}>
      {links.map(([text, href]) => (
        <Link key={href} href={href}>
          {text}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      ))}
    </nav>
  );
}
