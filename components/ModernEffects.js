import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

// Composant pour les effets de parallaxe 3D
export const ParallaxCard = ({ children, className = '', intensity = 0.1, ...props }) => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = (e.clientY - centerY) * intensity;
    const rotateYValue = (centerX - e.clientX) * intensity;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateX: rotateX * 0.3,
        rotateY: rotateY * 0.3,
        scale: isHovered ? 1.02 : 1,
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
      {...props}
    >
      {/* Effet de brillance 3D */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg pointer-events-none"
        animate={{
          opacity: isHovered ? 0.6 : 0,
          background: `linear-gradient(${rotateY + 45}deg, rgba(255,255,255,0.2) 0%, transparent 50%, transparent 100%)`
        }}
        transition={{ duration: 0.3 }}
      />
      
      {children}
    </motion.div>
  );
};

// Composant pour les effets de flou et grain (tendance 2025)
export const BlurGrainEffect = ({ children, className = '', blurIntensity = 'sm', grainOpacity = 0.03 }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Effet de grain */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='${grainOpacity}'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Effet de flou en arrière-plan */}
      <div className={`absolute inset-0 backdrop-blur-${blurIntensity} pointer-events-none`} />
      
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Composant pour la typographie cinétique
export const KineticText = ({ text, className = '', delay = 0, ...props }) => {
  const letters = text.split('');
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay
      }
    }
  };
  
  const child = {
    hidden: { 
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={child}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Composant pour les grilles Bento (tendance 2025)
export const BentoGrid = ({ children, className = '', columns = 3 }) => {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {children}
    </div>
  );
};

export const BentoCard = ({ children, className = '', size = 'normal', ...props }) => {
  const sizes = {
    small: 'col-span-1 row-span-1',
    normal: 'col-span-1 row-span-1',
    wide: 'col-span-1 md:col-span-2 row-span-1',
    tall: 'col-span-1 row-span-2',
    large: 'col-span-1 md:col-span-2 row-span-2'
  };

  return (
    <motion.div
      className={`
        ${sizes[size]}
        bg-card border border-border rounded-xl p-6
        hover:shadow-md transition-all duration-200
        min-h-[280px] flex flex-col
        ${className}
      `}
      whileHover={{ 
        y: -4,
        boxShadow: '0 8px 25px rgba(0,0,0,0.08)'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Composant pour les curseurs personnalisés avec effets
export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-accent/20 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

// Composant pour les indicateurs de progression avec micro-animations
export const AnimatedProgress = ({ value, max = 100, className = '', showValue = true }) => {
  const progress = (value / max) * 100;
  
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        {showValue && (
          <motion.span 
            className="text-sm font-medium text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {value}%
          </motion.span>
        )}
      </div>
      
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full relative"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Effet de brillance animée */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: 'linear',
              delay: 1
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default {
  ParallaxCard,
  BlurGrainEffect,
  KineticText,
  BentoGrid,
  BentoCard,
  CustomCursor,
  AnimatedProgress
};