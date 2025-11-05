'use client';

import { motion } from 'framer-motion';

/**
 * FloatingDots - Animated background dots
 * Client-side only component for decorative animations
 */
export default function FloatingDots({ count = 20 }) {
  return (
    <div className="absolute inset-0 opacity-20">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
}
