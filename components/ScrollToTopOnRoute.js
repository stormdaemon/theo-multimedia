import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollToTopOnRoute = () => {
  const router = useRouter();

  useEffect(() => {
    const scrollToTop = () => {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;

      root.style.scrollBehavior = 'auto';
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

      requestAnimationFrame(() => {
        root.style.scrollBehavior = previousBehavior;
      });
    };

    router.events.on('routeChangeComplete', scrollToTop);
    return () => router.events.off('routeChangeComplete', scrollToTop);
  }, [router.events]);

  return null;
};

export default ScrollToTopOnRoute;
