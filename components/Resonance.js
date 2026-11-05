import { useEffect, useRef, useState } from 'react';
import { engines } from '../lib/geo';

// Geometry of the diagram (SVG user units).
const C = 300;
const CORE = 64;
const R = 232;
const NODE_W = 132;
const NODE_H = 42;
const CUT = 9;

const chamfer = (w, h, c) => {
  const x = w / 2;
  const y = h / 2;
  return `${-x + c},${-y} ${x},${-y} ${x},${y - c} ${x - c},${y} ${-x},${y} ${-x},${-y + c}`;
};

const nodes = engines.map((e, i) => {
  const a = -Math.PI / 2 + (i * 2 * Math.PI) / engines.length;
  const x = C + R * Math.cos(a);
  const y = C + R * Math.sin(a);
  // A ray that leaves the core and bends slightly: the "resonance" swirl.
  const sx = C + CORE * Math.cos(a);
  const sy = C + CORE * Math.sin(a);
  const mid = (CORE + R) / 2;
  const cx = C + mid * Math.cos(a + 0.34);
  const cy = C + mid * Math.sin(a + 0.34);
  return { ...e, x, y, d: `M${sx.toFixed(1)} ${sy.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}` };
});

const easeInOut = (k) => (k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2);

/**
 * "Your site" at the centre, the engines around it. When the figure enters the
 * viewport one wave of pulses leaves the core and lights every engine, then the
 * diagram goes quiet. The tabs are the accessible control; the SVG nodes mirror
 * them for pointer users.
 */
export default function Resonance() {
  const [active, setActive] = useState(0);
  const figRef = useRef(null);
  const pathRefs = useRef([]);
  const pulseRefs = useRef([]);
  const nodeRefs = useRef([]);
  const waveRef = useRef(null);
  const tabRefs = useRef([]);
  const anims = useRef(new Set());
  const reduced = useRef(false);

  const run = (duration, delay, frame, done) => {
    const start = performance.now() + delay;
    let raf = 0;
    const step = (t) => {
      if (t < start) {
        raf = requestAnimationFrame(step);
        return;
      }
      const k = Math.min(1, (t - start) / duration);
      frame(k);
      if (k < 1) raf = requestAnimationFrame(step);
      else {
        anims.current.delete(cancel);
        done?.();
      }
    };
    const cancel = () => cancelAnimationFrame(raf);
    anims.current.add(cancel);
    raf = requestAnimationFrame(step);
  };

  const pulse = (i, delay = 0) => {
    const path = pathRefs.current[i];
    const dot = pulseRefs.current[i];
    const node = nodeRefs.current[i];
    if (!path || !dot) return;
    const len = path.getTotalLength();
    path.classList.add('is-on');
    run(
      820,
      delay,
      (k) => {
        const p = path.getPointAtLength(len * easeInOut(k));
        dot.setAttribute('cx', p.x.toFixed(1));
        dot.setAttribute('cy', p.y.toFixed(1));
        dot.setAttribute('opacity', k < 0.92 ? '1' : String((1 - k) / 0.08));
      },
      () => {
        node?.classList.add('is-lit');
        run(900, 0, () => {}, () => {
          node?.classList.remove('is-lit');
          path.classList.remove('is-on');
        });
      },
    );
  };

  const wave = () => {
    const w = waveRef.current;
    if (!w) return;
    run(1500, 0, (k) => {
      const e = 1 - (1 - k) ** 3;
      w.setAttribute('r', (CORE + (R + 70 - CORE) * e).toFixed(1));
      w.setAttribute('opacity', (0.7 * (1 - k)).toFixed(3));
    });
  };

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fig = figRef.current;
    const running = anims.current;
    if (reduced.current || !fig || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        wave();
        nodes.forEach((_, i) => pulse(i, 160 + i * 130));
      },
      { threshold: 0.45 },
    );
    io.observe(fig);
    return () => {
      io.disconnect();
      running.forEach((cancel) => cancel());
      running.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const select = (i, focus = false) => {
    setActive(i);
    if (focus) tabRefs.current[i]?.focus();
    if (!reduced.current) pulse(i);
  };

  const onKeyDown = (e) => {
    const n = nodes.length;
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (active + 1) % n;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (active - 1 + n) % n;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = n - 1;
    if (next === null) return;
    e.preventDefault();
    select(next, true);
  };

  return (
    <div className="reso">
      <div className="reso-figure" ref={figRef}>
        <svg viewBox="-20 -20 640 640" aria-hidden="true" focusable="false">
          {[CORE + 52, CORE + 110, R].map((r) => (
            <circle key={r} className="reso-ring" cx={C} cy={C} r={r} strokeDasharray={r === R ? '2 6' : undefined} />
          ))}
          {nodes.map((n, i) => (
            <path
              key={n.id}
              ref={(el) => {
                pathRefs.current[i] = el;
              }}
              className={`reso-path${i === active ? ' is-on' : ''}`}
              d={n.d}
            />
          ))}
          <circle ref={waveRef} className="reso-wave" cx={C} cy={C} r={CORE} />
          {nodes.map((n, i) => (
            <circle
              key={n.id}
              ref={(el) => {
                pulseRefs.current[i] = el;
              }}
              className="reso-pulse"
              cx={C}
              cy={C}
              r="5"
              opacity="0"
            />
          ))}
          {nodes.map((n, i) => (
            <g
              key={n.id}
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
              className={`reso-node${i === active ? ' is-active' : ''}`}
              transform={`translate(${n.x.toFixed(1)} ${n.y.toFixed(1)})`}
              onClick={() => select(i)}
            >
              <polygon className="bg" points={chamfer(NODE_W, NODE_H, CUT)} />
              <text textAnchor="middle" dominantBaseline="central">
                {n.name}
              </text>
            </g>
          ))}
          <g className="reso-core" transform={`translate(${C} ${C})`}>
            <polygon points={chamfer(CORE * 2, CORE * 2, 18)} />
            <text textAnchor="middle" y="-9" fill="#ffffff">
              Votre
            </text>
            <text textAnchor="middle" y="15" fill="#ff5a00">
              site
            </text>
          </g>
        </svg>
      </div>

      <div className="reso-panel">
        <div className="reso-tabs" role="tablist" aria-label="Moteurs de recherche et de réponse">
          {nodes.map((n, i) => (
            <button
              key={n.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`reso-tab-${n.id}`}
              aria-selected={i === active}
              aria-controls={`reso-panel-${n.id}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={onKeyDown}
            >
              {n.name}
            </button>
          ))}
        </div>
        {nodes.map((n, i) => (
          <div
            key={n.id}
            role="tabpanel"
            id={`reso-panel-${n.id}`}
            aria-labelledby={`reso-tab-${n.id}`}
            className={`reso-tabpanel${i === active ? ' is-active' : ''}`}
            tabIndex={0}
          >
            <p className="reads">
              Ce qu’il lit : <b>{n.reads}</b>
            </p>
            <h3 className="engine">{n.label}</h3>
            <p>{n.text}</p>
            <ul className="ticks">
              {n.levers.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
