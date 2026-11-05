import Link from 'next/link';

/** The services as a list of hot rows: the title melts when hovered or focused. */
export default function ServiceList({ items }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--hx', `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
  };
  return (
    <ul className="svc-list">
      {items.map((s) => (
        <li key={s.slug} className="svc-row">
          <Link href={`/${s.slug}`} onPointerMove={onMove}>
            <span className="h">
              <span className="tag">{s.tag}</span>
              <span className="t">{s.title}</span>
            </span>
            <span className="d">{s.text}</span>
            <span className="go" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M3 11h15M12 5l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
              </svg>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
