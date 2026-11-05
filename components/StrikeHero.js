import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { business } from '../lib/business';

// Where the T wedge meets the M notch, as a fraction of the .hero-mark box
// (crop 790 x 780 px starting at x 232, y 190 of the original logo).
const CONTACT_FX = (627.5 - 232) / 790;
const CONTACT_FY = (650 - 190) / 780;

function contactPoint(markEl) {
  const r = markEl.getBoundingClientRect();
  return { x: r.left + r.width * CONTACT_FX, y: r.top + r.height * CONTACT_FY };
}

export default function StrikeHero() {
  const heroRef = useRef(null);
  const stageRef = useRef(null);
  const markRef = useRef(null);
  const copyRef = useRef(null);
  const sceneRef = useRef(null);

  // --- the strike ---------------------------------------------------------------
  useEffect(() => {
    const hero = heroRef.current;
    const mark = markRef.current;
    let struck = false;
    let cancelled = false;
    const timers = [];

    const strike = () => {
      if (struck) return;
      struck = true;
      hero.classList.add('is-struck');
      window.dispatchEvent(new CustomEvent('tm:impact'));
    };

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowPower =
      navigator.connection?.saveData === true || (navigator.hardwareConcurrency || 8) <= 2 || (navigator.deviceMemory || 8) < 2;

    if (reduced) {
      mark.dataset.mode = 'static';
      strike();
      return undefined;
    }

    const play2D = () => {
      if (cancelled) return;
      cancelled = true;
      mark.dataset.mode = 'play';
      timers.push(
        setTimeout(() => {
          strike();
          const p = contactPoint(mark);
          window.dispatchEvent(new CustomEvent('tm:sparks', { detail: { x: p.x, y: p.y, n: 42 } }));
        }, 600),
      );
    };

    // Safety nets: the copy never stays in its "cold" state.
    timers.push(setTimeout(strike, 3600));

    if (lowPower) {
      timers.push(setTimeout(play2D, 250));
      return () => timers.forEach(clearTimeout);
    }

    // The 3D scene gets 1.8 s to be ready, otherwise the 2D version plays.
    timers.push(setTimeout(play2D, 1800));

    (async () => {
      try {
        const mod = await import('./strike/scene');
        if (cancelled) return;
        if (!mod.hasWebGL()) {
          play2D();
          return;
        }
        const scene = await mod.createStrikeScene(stageRef.current, { markEl: mark, onImpact: strike });
        if (cancelled) {
          scene.destroy();
          return;
        }
        cancelled = true; // the 2D fallback must not run anymore
        sceneRef.current = scene;
        if (process.env.NODE_ENV !== 'production') window.__tmStrike = scene;
        hero.classList.add('has-3d');
        scene.play();
      } catch (err) {
        play2D();
      }
    })();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      sceneRef.current?.destroy();
      sceneRef.current = null;
    };
  }, []);

  // --- scrolling away: the mark sinks back, the copy lifts and fades (no pin) ----
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    let ctx;
    let killed = false;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ ignoreMobileResize: true });
      const hero = heroRef.current;
      ctx = gsap.context(() => {
        gsap
          .timeline({
            defaults: { ease: 'none' },
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.4,
              onUpdate: (self) => sceneRef.current?.setActive(self.progress < 0.99),
            },
          })
          .to(copyRef.current, { yPercent: -8, opacity: 0, ease: 'power1.in' }, 0)
          .to(stageRef.current, { yPercent: 22, scale: 0.92, transformOrigin: '50% 30%' }, 0);
      }, hero);
    })();
    return () => {
      killed = true;
      ctx?.revert();
    };
  }, []);

  const onStageClick = (e) => {
    const scene = sceneRef.current;
    if (scene && !scene.isPlaying() && scene.hitTest(e.clientX, e.clientY)) scene.replay();
  };

  return (
    <section ref={heroRef} className="hero grain" aria-labelledby="hero-title" onClick={onStageClick}>
      <div ref={stageRef} className="hero-stage" />
      <div className="hero-glow" aria-hidden="true" />
      <div ref={markRef} className="hero-mark" data-mode="idle" aria-hidden="true">
        <img className="mark-m" src="/brand/logo-m.webp" width="790" height="780" alt="" fetchPriority="low" />
        <img className="mark-t" src="/brand/logo-t.webp" width="790" height="780" alt="" fetchPriority="low" />
      </div>
      <div ref={copyRef} className="hero-copy container">
        <p className="eyebrow on-dark">Cognac · Charente · GEO, SEO &amp; sites rapides</p>
        <h1 id="hero-title" className="hero-title display">
          <span className="h1-kicker">Agence GEO &amp; web à Cognac.</span>{' '}
          <span className="h1-main">
            Soyez <span className="strike-word">la réponse</span> que citent les IA.
          </span>
        </h1>
        <p className="hero-sub">
          Je rends votre entreprise visible sur Google et Google Maps, et citable par ChatGPT, Gemini, Perplexity et les AI
          Overviews. Sites rapides, SEO local et GEO, pour Cognac, Angoulême, Saintes et toute la Charente.
        </p>
        <div className="hero-ctas">
          <Link href="/contact?service=audit-geo" className="btn btn-primary">
            Audit SEO &amp; GEO offert <span className="arrow">→</span>
          </Link>
          <Link href="/geo-referencement-ia" className="link-arrow">
            Comprendre le GEO <span className="arrow">→</span>
          </Link>
        </div>
        <p className="hero-meta">
          <span>
            <b>{business.legalAddress.streetAddress}</b>, {business.legalAddress.city}
          </span>
          <a href={`tel:${business.phoneE164}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            <b>{business.phone}</b>
          </a>
          <span>Cognac · Jarnac · Angoulême · Saintes</span>
        </p>
      </div>
      <button type="button" className="hero-replay" onClick={() => sceneRef.current?.replay()}>
        <span aria-hidden="true">↻</span> Rejouer l’impact
      </button>
    </section>
  );
}
