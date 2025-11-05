import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const MouseCursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      animate={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--accent) / 0.05), transparent 40%)`
      }}
      transition={{ type: "tween", ease: "linear", duration: 0.2 }}
    />
  );
};

export default MouseCursorEffect;
