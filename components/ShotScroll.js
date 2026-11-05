import { useEffect, useRef } from 'react';
import Picture from './Picture';

/**
 * A full-page screenshot inside a browser frame. Without JS (or with reduced
 * motion) the frame is a plain scrollable box; otherwise the screenshot scrolls
 * by itself as the frame crosses the viewport.
 */
export default function ShotScroll({ src, alt, width, height }) {
  const frameRef = useRef(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const img = frame.querySelector('img');
    let ctx;
    let killed = false;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (killed || !img) return;
      gsap.registerPlugin(ScrollTrigger);
      frame.classList.add('is-driven');
      ctx = gsap.context(() => {
        gsap.fromTo(
          img,
          { y: 0 },
          {
            y: () => -Math.max(0, img.offsetHeight - frame.clientHeight),
            ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top 70%', end: 'bottom 20%', scrub: 0.6, invalidateOnRefresh: true },
          },
        );
      }, frame);
    })();
    return () => {
      killed = true;
      ctx?.revert();
      frame.classList.remove('is-driven');
    };
  }, [src]);

  return (
    <div ref={frameRef} className="shot-scroll" tabIndex={0} role="group" aria-label={alt}>
      <Picture src={src} alt={alt} width={width} height={height} sizes="(min-width: 1100px) 780px, 92vw" />
    </div>
  );
}
