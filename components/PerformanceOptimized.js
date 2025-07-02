import { motion, useInView, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Image from 'next/image';

// Hook pour le lazy loading optimisé
export const useLazyLoad = (threshold = 0.1) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView, isLoaded, setIsLoaded };
};

// Composant d'image optimisée pour les Core Web Vitals
export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  className = '',
  placeholder = 'blur',
  quality = 85,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  onLoad,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { ref, isInView } = useLazyLoad(0.1);

  // Génération du placeholder blur automatique
  const blurDataURL = useMemo(() => {
    if (placeholder === 'blur') {
      return `data:image/svg+xml;base64,${Buffer.from(
        `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)" />
        </svg>`
      ).toString('base64')}`;
    }
    return undefined;
  }, [width, height, placeholder]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div 
        ref={ref}
        className={`flex items-center justify-center bg-muted text-muted-foreground ${className}`}
        style={{ width, height }}
      >
        <span className="text-sm">Image non disponible</span>
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {(isInView || priority) && (
        <>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            quality={quality}
            sizes={sizes}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            {...props}
          />
          
          {/* Skeleton loader pendant le chargement */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse" />
          )}
        </>
      )}
    </div>
  );
};

// Composant pour le chargement différé du contenu
export const LazyContent = ({ 
  children, 
  fallback = null, 
  threshold = 0.1,
  className = '',
  animateOnLoad = true 
}) => {
  const { ref, isInView } = useLazyLoad(threshold);
  const controls = useAnimation();

  useEffect(() => {
    if (isInView && animateOnLoad) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
      });
    }
  }, [isInView, controls, animateOnLoad]);

  return (
    <div ref={ref} className={className}>
      {isInView ? (
        animateOnLoad ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            {children}
          </motion.div>
        ) : (
          children
        )
      ) : (
        fallback
      )}
    </div>
  );
};

// Hook pour la mesure des Core Web Vitals
export const useWebVitals = () => {
  const [vitals, setVitals] = useState({
    lcp: null, // Largest Contentful Paint
    fid: null, // First Input Delay
    cls: null, // Cumulative Layout Shift
    inp: null, // Interaction to Next Paint (nouveau en 2024)
    ttfb: null // Time to First Byte
  });

  useEffect(() => {
    // Mesure LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      setVitals(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Mesure CLS
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      setVitals(prev => ({ ...prev, cls: clsValue }));
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Mesure TTFB
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0) {
      const navEntry = navigationEntries[0];
      setVitals(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
    }

    return () => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return vitals;
};

// Composant pour le préchargement intelligent des ressources
export const ResourcePreloader = ({ resources = [], priority = 'low' }) => {
  useEffect(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as || 'fetch';
      
      if (resource.type) {
        link.type = resource.type;
      }
      
      if (priority !== 'low') {
        link.fetchPriority = priority;
      }
      
      document.head.appendChild(link);
    });
  }, [resources, priority]);

  return null;
};

// Composant pour la gestion optimisée des polices
export const FontOptimizer = ({ fonts = [] }) => {
  useEffect(() => {
    fonts.forEach(font => {
      // Préchargement des polices critiques
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = font.href;
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
      
      // Utilisation de font-display: swap pour éviter le FOIT
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: '${font.family}';
          src: url('${font.href}') format('woff2');
          font-display: swap;
          font-weight: ${font.weight || 'normal'};
          font-style: ${font.style || 'normal'};
        }
      `;
      document.head.appendChild(style);
    });
  }, [fonts]);

  return null;
};

// Composant pour la compression et optimisation des animations
export const OptimizedAnimation = ({ 
  children, 
  reduceMotion = true, 
  useGPU = true,
  ...motionProps 
}) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const optimizedProps = useMemo(() => {
    if (prefersReducedMotion && reduceMotion) {
      return {
        initial: false,
        animate: false,
        transition: { duration: 0 }
      };
    }

    const baseProps = { ...motionProps };
    
    // Optimisation GPU
    if (useGPU && baseProps.animate) {
      baseProps.style = {
        ...baseProps.style,
        willChange: 'transform, opacity',
        transform: 'translateZ(0)' // Force GPU acceleration
      };
    }

    return baseProps;
  }, [prefersReducedMotion, reduceMotion, useGPU, motionProps]);

  return (
    <motion.div {...optimizedProps}>
      {children}
    </motion.div>
  );
};

// Composant pour la mesure et optimisation des performances
export const PerformanceMonitor = ({ onMetrics, interval = 5000 }) => {
  const vitals = useWebVitals();
  const [metrics, setMetrics] = useState({
    memoryUsage: null,
    timing: null,
    connection: null
  });

  useEffect(() => {
    const measurePerformance = () => {
      const timing = performance.timing;
      const navigation = performance.getEntriesByType('navigation')[0];
      
      const newMetrics = {
        memoryUsage: performance.memory ? {
          used: performance.memory.usedJSHeapSize,
          total: performance.memory.totalJSHeapSize,
          limit: performance.memory.jsHeapSizeLimit
        } : null,
        timing: {
          domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
          loadComplete: timing.loadEventEnd - timing.navigationStart,
          firstPaint: navigation?.loadEventEnd || null
        },
        connection: navigator.connection ? {
          effectiveType: navigator.connection.effectiveType,
          downlink: navigator.connection.downlink,
          rtt: navigator.connection.rtt
        } : null,
        vitals
      };
      
      setMetrics(newMetrics);
      onMetrics?.(newMetrics);
    };

    measurePerformance();
    const intervalId = setInterval(measurePerformance, interval);
    
    return () => clearInterval(intervalId);
  }, [vitals, onMetrics, interval]);

  // En mode développement, afficher les métriques
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs font-mono z-50">
        <div>LCP: {vitals.lcp ? `${Math.round(vitals.lcp)}ms` : 'N/A'}</div>
        <div>CLS: {vitals.cls ? vitals.cls.toFixed(3) : 'N/A'}</div>
        <div>TTFB: {vitals.ttfb ? `${Math.round(vitals.ttfb)}ms` : 'N/A'}</div>
        {metrics.memoryUsage && (
          <div>Memory: {Math.round(metrics.memoryUsage.used / 1024 / 1024)}MB</div>
        )}
      </div>
    );
  }

  return null;
};

export default {
  useLazyLoad,
  OptimizedImage,
  LazyContent,
  useWebVitals,
  ResourcePreloader,
  FontOptimizer,
  OptimizedAnimation,
  PerformanceMonitor
};