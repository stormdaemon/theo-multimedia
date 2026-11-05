import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

/** A thin burning fuse at the top of the screen while a page is loading. */
export default function RouteFuse() {
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    let timer;
    const start = (url, { shallow } = {}) => {
      if (shallow) return;
      clearTimeout(timer);
      el.classList.remove('is-done');
      // Only show the fuse when loading takes long enough to be noticed.
      timer = setTimeout(() => el.classList.add('is-on'), 120);
    };
    const done = () => {
      clearTimeout(timer);
      if (!el.classList.contains('is-on')) return;
      el.classList.add('is-done');
      setTimeout(() => el.classList.remove('is-on', 'is-done'), 600);
    };
    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', done);
    router.events.on('routeChangeError', done);
    return () => {
      clearTimeout(timer);
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', done);
      router.events.off('routeChangeError', done);
    };
  }, [router.events]);

  return <div ref={ref} className="route-fuse" aria-hidden="true" />;
}
