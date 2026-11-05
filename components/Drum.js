import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Picture from './Picture';

const facing = (deg) => Math.max(0, Math.cos((deg * Math.PI) / 180));
// Angle of a card relative to the front, in ]-180, 180].
const relAngle = (deg) => ((((deg % 360) + 540) % 360) - 180);

/**
 * The projects mounted on a 3D drum. Drag (with inertia), arrow buttons or
 * keyboard focus turn it. The layout itself is pure CSS (each card is rotated
 * around the drum axis), so it renders without JavaScript.
 */
export default function Drum({ items }) {
  const n = items.length;
  const step = 360 / n;
  const viewportRef = useRef(null);
  const drumRef = useRef(null);
  const apiRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const vp = viewportRef.current;
    const drum = drumRef.current;
    if (!vp || !drum) return undefined;
    const cards = Array.from(drum.querySelectorAll('.drum-card'));
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const state = { rot: 0 };
    let current = 0;
    let moved = false;
    let killed = false;
    let draggable = null;
    let gsap = null;
    let proxy = null;

    const render = () => {
      drum.style.setProperty('--rot', `${state.rot.toFixed(3)}deg`);
      cards.forEach((card, i) => {
        const f = facing(relAngle(i * step + state.rot));
        card.style.setProperty('--f', f.toFixed(3));
        card.style.pointerEvents = f < 0.08 ? 'none' : '';
      });
      const idx = (((Math.round(-state.rot / step) % n) + n) % n);
      if (idx !== current) {
        current = idx;
        setIndex(idx);
      }
    };

    const pxPerDeg = () => Math.max(2, vp.offsetWidth / 110);
    const syncProxy = () => {
      if (gsap && proxy && draggable) {
        gsap.set(proxy, { x: state.rot * pxPerDeg() });
        draggable.update();
      }
    };

    const turnTo = (target) => {
      if (!gsap || reduced) {
        state.rot = target;
        render();
        syncProxy();
        return;
      }
      gsap.killTweensOf(state);
      gsap.to(state, { rot: target, duration: 0.85, ease: 'power3.out', onUpdate: render, onComplete: syncProxy });
    };

    const nearest = (i) => {
      let target = -i * step;
      target += Math.round((state.rot - target) / 360) * 360;
      return target;
    };

    apiRef.current = {
      go: (delta) => turnTo(Math.round(state.rot / step) * step - delta * step),
      focus: (i) => turnTo(nearest(i)),
    };

    const onClickCapture = (e) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    vp.addEventListener('click', onClickCapture, true);

    (async () => {
      const [g, { Draggable }, { InertiaPlugin }] = await Promise.all([
        import('gsap'),
        import('gsap/Draggable'),
        import('gsap/InertiaPlugin'),
      ]);
      if (killed) return;
      gsap = g.gsap;
      gsap.registerPlugin(Draggable, InertiaPlugin);
      proxy = document.createElement('div');
      [draggable] = Draggable.create(proxy, {
        type: 'x',
        trigger: vp,
        inertia: !reduced,
        dragClickables: true,
        minimumMovement: 6,
        allowContextMenu: true,
        onPress() {
          moved = false;
          gsap.killTweensOf(state);
          gsap.set(proxy, { x: state.rot * pxPerDeg() });
          this.update();
        },
        onDragStart() {
          moved = true;
          vp.classList.add('is-dragging');
        },
        onDrag() {
          state.rot = this.x / pxPerDeg();
          render();
        },
        onThrowUpdate() {
          state.rot = this.x / pxPerDeg();
          render();
        },
        onRelease() {
          vp.classList.remove('is-dragging');
          if (reduced && moved) turnTo(Math.round(state.rot / step) * step);
        },
        snap: { x: (v) => Math.round(v / pxPerDeg() / step) * step * pxPerDeg() },
      });
    })();

    render();
    return () => {
      killed = true;
      vp.removeEventListener('click', onClickCapture, true);
      draggable?.kill();
      if (gsap) gsap.killTweensOf(state);
      apiRef.current = null;
    };
  }, [n, step]);

  return (
    <div className="drum-wrap" role="region" aria-roledescription="carrousel" aria-label="Réalisations">
      <div className="drum-viewport" ref={viewportRef}>
        <div className="drum" ref={drumRef} style={{ '--n': n }}>
          {items.map((p, i) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="drum-card"
              style={{ '--i': i, '--f': facing(relAngle(i * step)).toFixed(3) }}
              onFocus={(e) => {
                // Only keyboard focus turns the drum: a pointer press is a drag or a click.
                let keyboard = true;
                try {
                  keyboard = e.currentTarget.matches(':focus-visible');
                } catch {
                  keyboard = true;
                }
                if (keyboard) apiRef.current?.focus(i);
              }}
              draggable={false}
            >
              <Picture src={p.image} width={800} height={500} alt="" />
              <span className={p.online ? 'badge' : 'badge archive'}>{p.online ? 'En ligne' : 'Archive'}</span>
              <span className="meta">
                <b>{p.title}</b>
                <span>{p.category}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="drum-controls">
        <button type="button" onClick={() => apiRef.current?.go(-1)} aria-label="Projet précédent">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M17 10H4M9 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          </svg>
        </button>
        <p className="drum-count" aria-live="polite">
          <b>{String(index + 1).padStart(2, '0')}</b> / {String(n).padStart(2, '0')}
          <span className="sr-only"> : {items[index]?.title}</span>
        </p>
        <button type="button" onClick={() => apiRef.current?.go(1)} aria-label="Projet suivant">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 10h13M11 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          </svg>
        </button>
      </div>
    </div>
  );
}
