import { motion } from 'framer-motion';
import { useState } from 'react';

// Composant pour les boutons avec micro-interactions avancées
export const InteractiveButton = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const variants = {
    primary: {
      base: 'bg-accent text-accent-foreground',
      hover: 'bg-accent/90',
    },
    secondary: {
      base: 'bg-secondary text-secondary-foreground border border-border',
      hover: 'bg-secondary/80',
    },
    ghost: {
      base: 'bg-transparent text-foreground hover:bg-muted',
      hover: 'bg-muted/50',
    }
  };

  return (
    <motion.button
      className={`
        relative px-6 py-3 rounded-lg font-medium transition-all duration-300
        ${variants[variant].base}
        ${className}
        overflow-hidden group
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={onClick}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }}
      whileTap={{ 
        scale: 0.98,
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {/* Effet de ripple */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-lg"
        initial={{ scale: 0, opacity: 0 }}
        animate={isPressed ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Effet de brillance au survol */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        animate={isHovered ? { x: '100%' } : { x: '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

// Composant pour les cartes avec micro-interactions
export const InteractiveCard = ({ children, className = '', ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`
        relative bg-card border border-border rounded-lg p-6
        transition-all duration-300 cursor-pointer group
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {/* Effet de gradient au survol */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Bordure animée */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-accent/20"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ 
          scale: isHovered ? 1.02 : 1,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

// Composant pour les icônes avec animations
export const AnimatedIcon = ({ icon: Icon, className = '', size = 24, ...props }) => {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      whileHover={{ 
        scale: 1.1,
        rotate: 5
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      <Icon size={size} />
    </motion.div>
  );
};

// Composant pour les liens avec micro-interactions
export const InteractiveLink = ({ children, href, className = '', ...props }) => {
  return (
    <motion.a
      href={href}
      className={`
        relative inline-block text-accent font-medium
        after:content-[''] after:absolute after:w-0 after:h-0.5
        after:bg-accent after:left-0 after:bottom-0
        after:transition-all after:duration-300
        hover:after:w-full
        ${className}
      `}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.a>
  );
};

// Composant pour les inputs avec micro-interactions
export const InteractiveInput = ({ label, type = 'text', className = '', ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <motion.input
        type={type}
        className="
          w-full px-4 py-3 bg-background border border-border rounded-lg
          focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
          transition-all duration-300
        "
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value.length > 0);
        }}
        onChange={(e) => setHasValue(e.target.value.length > 0)}
        whileFocus={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        {...props}
      />
      
      {label && (
        <motion.label
          className="
            absolute left-4 text-muted-foreground pointer-events-none
            transition-all duration-300
          "
          animate={{
            y: isFocused || hasValue ? -28 : 12,
            scale: isFocused || hasValue ? 0.85 : 1,
            color: isFocused ? 'hsl(var(--accent))' : 'hsl(var(--muted-foreground))'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {label}
        </motion.label>
      )}
    </div>
  );
};

export default {
  InteractiveButton,
  InteractiveCard,
  AnimatedIcon,
  InteractiveLink,
  InteractiveInput
};