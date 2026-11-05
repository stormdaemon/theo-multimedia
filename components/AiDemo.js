import { useEffect, useRef } from 'react';
import Link from 'next/link';

const QUESTION = 'Qui peut rendre mon entreprise visible dans ChatGPT, près de Cognac ?';

// Paragraphs made of text and citation numbers.
const ANSWER = [
  [
    'Pour qu’un assistant comme ChatGPT cite une entreprise locale, il lui faut des pages qu’il peut lire, des réponses nettes et des informations identiques d’une source à l’autre.',
    1,
  ],
  [
    'À Cognac, Théo Multimédia travaille sur ce terrain : SEO local et fiche Google pour être trouvé près de chez soi',
    2,
    ', puis un audit SEO & GEO offert pour savoir ce qui bloque aujourd’hui.',
    3,
  ],
];

const SOURCES = [
  ['GEO et référencement IA', '/geo-referencement-ia'],
  ['SEO local et Google Maps', '/referencement-local'],
  ['Audit SEO & GEO offert', '/audit-seo-gratuit'],
];

function Tokens({ text }) {
  return text
    .split(/(\s+)/)
    .filter(Boolean)
    .map((chunk, i) =>
      /^\s+$/.test(chunk) ? (
        ' '
      ) : (
        <span key={i} className="tok w-tok">
          {chunk}
        </span>
      ),
    );
}

/**
 * A simulated answer engine reply that streams in and cites three pages of this
 * site. Clearly labelled as a simulation; the full text is in the HTML.
 */
export default function AiDemo() {
  const ref = useRef(null);
  const replayRef = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }
    const toks = Array.from(root.querySelectorAll('.tok'));
    const sources = Array.from(root.querySelectorAll('.ai-sources li'));
    let timers = [];
    const at = (ms, fn) => timers.push(setTimeout(fn, ms));
    const setState = (s) => {
      root.classList.remove('is-thinking', 'is-typing', 'is-done');
      if (s) root.classList.add(s);
    };

    const play = () => {
      timers.forEach(clearTimeout);
      timers = [];
      toks.forEach((t) => t.classList.remove('on', 'is-last'));
      sources.forEach((li) => li.classList.remove('on'));
      setState('is-thinking');
      let t = 900;
      at(t, () => setState('is-typing'));
      let last = null;
      toks.forEach((tok) => {
        t += tok.classList.contains('cite') ? 140 : 24 + Math.random() * 34;
        at(t, () => {
          tok.classList.add('on');
          if (!tok.classList.contains('cite')) {
            last?.classList.remove('is-last');
            tok.classList.add('is-last');
            last = tok;
          }
        });
      });
      t += 260;
      sources.forEach((li, i) => at(t + i * 150, () => li.classList.add('on')));
      at(t + sources.length * 150 + 250, () => {
        last?.classList.remove('is-last');
        setState('is-done');
      });
    };

    root.classList.add('is-armed');
    replayRef.current = play;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        play();
      },
      { threshold: 0.5 },
    );
    io.observe(root);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <figure className="ai-demo" ref={ref} aria-label="Exemple simulé de réponse d’IA qui cite ses sources">
      <div className="bar">
        <span>Moteur de réponse</span>
        <span className="bar-end">
          <button type="button" className="replay" onClick={() => replayRef.current?.()}>
            <span aria-hidden="true">↻</span> Rejouer
          </button>
          <span className="tag">Simulation</span>
        </span>
      </div>
      <p className="ai-q">{QUESTION}</p>
      <div className="ai-a">
        <p className="ai-thinking" aria-hidden="true">
          <span className="dots">
            <i />
            <i />
            <i />
          </span>
          Recherche de sources sur le web
        </p>
        {ANSWER.map((para, p) => (
          <p key={p}>
            {para.map((part, i) =>
              typeof part === 'number' ? (
                <Link
                  key={i}
                  href={SOURCES[part - 1][1]}
                  className="cite tok"
                  aria-label={`Source ${part} : ${SOURCES[part - 1][0]}`}
                >
                  {part}
                </Link>
              ) : (
                <Tokens key={i} text={part} />
              ),
            )}
          </p>
        ))}
        <ol className="ai-sources" aria-label="Sources citées">
          {SOURCES.map(([label, href], i) => (
            <li key={href}>
              <span className="n">{i + 1}</span>
              <Link href={href}>{label}</Link>
              <span className="src-other">theo-multimedia.netlify.app</span>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="ai-note">
        Simulation illustrative : voici à quoi ressemble une réponse qui cite ses sources. Personne ne peut garantir une
        citation ; le travail consiste à réunir les conditions pour en obtenir.
      </figcaption>
    </figure>
  );
}
