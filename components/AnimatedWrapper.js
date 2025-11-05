'use client';

import { motion } from 'framer-motion';

/**
 * AnimatedWrapper - Wraps content with framer-motion animations
 * This component is loaded client-side only (ssr: false) to preserve SSR
 */
export default function AnimatedWrapper({
  children,
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  viewport = { once: true },
  className = "",
  ...props
}) {
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={viewport}
      transition={transition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
