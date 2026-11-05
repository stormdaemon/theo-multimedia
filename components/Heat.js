import { Fragment, useEffect, useRef } from 'react';
import { frenchSpacing } from '../lib/text';

/**
 * Split a heading into words. `text` accepts [[accent words]] markers, rendered
 * in orange once cooled. Each word carries its rank `i` (for the stagger). Returns groups: words written without a space between
 * them (a word and the comma after an accent, for instance) stay in one group,
 * so a line never starts with punctuation. `null` stands for a space.
 */
export function splitHeat(text) {
  const parts = frenchSpacing(text).split(/(\[\[.*?\]\])/g).filter(Boolean);
  const groups = [];
  let current = null;
  let n = 0;
  parts.forEach((part) => {
    const accent = part.startsWith('[[');
    const clean = accent ? part.slice(2, -2) : part;
    // Only ordinary spaces separate words: a no-break space (before ":" or "?")
    // stays inside its word, so French punctuation never starts a line.
    clean.split(/([ \t\r\n]+)/).forEach((chunk) => {
      if (!chunk) return;
      if (/^[ \t\r\n]+$/.test(chunk)) {
        current = null;
        groups.push(null);
        return;
      }
      if (!current) {
        current = [];
        groups.push(current);
      }
      n += 1;
      current.push({ word: chunk, accent, i: n });
    });
  });
  return groups;
}

/**
 * Heading that is "forged" when it enters the viewport: each word arrives hot
 * (orange, soft, slanted) and cools down sharp and upright.
 */
export default function Heat({ as: Tag = 'h2', text, className = '', delay = 0, threshold = 0.35, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let timer;
    const cool = () => {
      timer = setTimeout(() => el.classList.add('is-cool'), delay);
    };
    if (typeof IntersectionObserver === 'undefined') {
      cool();
      return () => clearTimeout(timer);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          cool();
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, [delay, threshold]);

  const word = (t, key) => (
    <span key={key} className={t.accent ? 'w accent' : 'w'} style={{ '--i': t.i }}>
      {t.word}
    </span>
  );

  return (
    <Tag ref={ref} className={`heat ${className}`.trim()} {...rest}>
      {splitHeat(text).map((group, g) => {
        if (!group) return ' ';
        if (group.length === 1) return <Fragment key={g}>{word(group[0], g)}</Fragment>;
        return (
          <span key={g} className="wg">
            {group.map((t, k) => word(t, k))}
          </span>
        );
      })}
    </Tag>
  );
}
