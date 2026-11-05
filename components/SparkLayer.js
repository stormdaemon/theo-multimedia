import { useEffect, useRef } from 'react';

/**
 * Tiny 2D spark bursts when a call-to-action is pressed. One shared canvas,
 * animated only while sparks are alive. Disabled for reduced motion.
 */
export default function SparkLayer() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let last = 0;
    const sparks = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };

    const tick = (t) => {
      const dt = Math.min((t - last) / 1000, 0.033);
      last = t;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const s = sparks[i];
        s.life -= dt;
        if (s.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        s.vy += 900 * dt;
        s.vx *= 1 - 2.2 * dt;
        s.vy *= 1 - 1.2 * dt;
        const px = s.x;
        const py = s.y;
        s.x += s.vx * dt;
        s.y += s.vy * dt;
        const k = s.life / s.max;
        ctx.strokeStyle = k > 0.6 ? `rgba(255,236,200,${k})` : `rgba(255,${Math.round(90 + 120 * k)},0,${k})`;
        ctx.lineWidth = 1.6 * k + 0.4;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
      }
      if (sparks.length) {
        raf = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, w, h);
        raf = 0;
      }
    };

    const burst = (x, y, count) => {
      const n = count || 16 + Math.floor(Math.random() * 8);
      for (let i = 0; i < n; i += 1) {
        const a = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.5;
        const v = 180 + Math.random() * 380;
        const life = 0.35 + Math.random() * 0.45;
        sparks.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life, max: life });
      }
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const onDown = (e) => {
      const target = e.target instanceof Element ? e.target.closest('.btn, [data-spark]') : null;
      if (!target) return;
      burst(e.clientX, e.clientY);
    };

    const onSparks = (e) => burst(e.detail.x, e.detail.y, e.detail.n);

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('tm:sparks', onSparks);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('tm:sparks', onSparks);
    };
  }, []);

  return <canvas ref={ref} className="spark-layer" aria-hidden="true" />;
}
