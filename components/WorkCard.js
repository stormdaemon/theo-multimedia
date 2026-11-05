import Link from 'next/link';
import Picture from './Picture';

/** Portfolio card. `project`: { slug, title, category, online, image, shortDescription } */
export default function WorkCard({ project: p, headingLevel = 'h3', priority = false }) {
  const H = headingLevel;
  return (
    <Link href={`/portfolio/${p.slug}`} className="work-card">
      <span className={p.online ? 'pill' : 'pill archive'}>{p.online ? 'En ligne' : 'Archive'}</span>
      <div className="frame">
        <Picture
          src={p.image}
          width={800}
          height={500}
          alt={`Aperçu du site ${p.title}`}
          sizes="(min-width: 1200px) 380px, (min-width: 720px) 45vw, 92vw"
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
      <div className="info">
        <span className="k">{p.category}</span>
        <H>{p.title}</H>
        <p>{p.shortDescription}</p>
      </div>
    </Link>
  );
}
