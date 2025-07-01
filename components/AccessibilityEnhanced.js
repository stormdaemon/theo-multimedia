import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Hook pour la détection des préférences d'accessibilité
export const useAccessibilityPreferences = () => {
  const [preferences, setPreferences] = useState({
    reducedMotion: false,
    highContrast: false,
    largeText: false
  });

  useEffect(() => {
    // Détection des préférences système
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const highContrast = window.matchMedia('(prefers-contrast: high)').matches;
    
    setPreferences(prev => ({
      ...prev,
      reducedMotion,
      highContrast
    }));
  }, []);

  return preferences;
};

// Composant bouton accessible avec états visuels clairs
export const AccessibleButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  loading = false,
  className = '',
  ariaLabel,
  onClick,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const { reducedMotion } = useAccessibilityPreferences();

  const variants = {
    primary: 'bg-accent text-accent-foreground hover:bg-accent/90 focus:ring-accent',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground focus:ring-accent',
    ghost: 'text-accent hover:bg-accent/10 focus:ring-accent'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const animationProps = reducedMotion ? {} : {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  };

  return (
    <motion.button
      className={`
        relative inline-flex items-center justify-center
        font-medium rounded-lg transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${isFocused ? 'ring-2 ring-offset-2' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onClick={onClick}
      {...animationProps}
      {...props}
    >
      {loading && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}
      
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
    </motion.button>
  );
};

// Composant de navigation accessible avec indicateurs visuels
export const AccessibleNavigation = ({ items, currentPath, className = '' }) => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const navRef = useRef(null);

  const handleKeyDown = (e, index) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % items.length);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + items.length) % items.length);
        break;
      case 'Home':
        e.preventDefault();
        setFocusedIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setFocusedIndex(items.length - 1);
        break;
    }
  };

  useEffect(() => {
    if (focusedIndex >= 0 && navRef.current) {
      const focusedElement = navRef.current.children[focusedIndex];
      focusedElement?.focus();
    }
  }, [focusedIndex]);

  return (
    <nav 
      ref={navRef}
      className={`flex space-x-1 ${className}`}
      role="navigation"
      aria-label="Navigation principale"
    >
      {items.map((item, index) => {
        const isActive = currentPath === item.href;
        
        return (
          <motion.a
            key={item.href}
            href={item.href}
            className={`
              relative px-3 py-2 rounded-md text-sm font-medium
              transition-all duration-200 focus:outline-none
              focus:ring-2 focus:ring-accent focus:ring-offset-2
              ${isActive 
                ? 'bg-accent text-accent-foreground' 
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
              }
            `}
            aria-current={isActive ? 'page' : undefined}
            onKeyDown={(e) => handleKeyDown(e, index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
            
            {/* Indicateur visuel pour l'élément actif */}
            {isActive && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-foreground"
                layoutId="activeIndicator"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </motion.a>
        );
      })}
    </nav>
  );
};

// Composant de formulaire accessible avec validation en temps réel
export const AccessibleForm = ({ children, onSubmit, className = '' }) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  return (
    <form 
      className={`space-y-6 ${className}`}
      onSubmit={onSubmit}
      noValidate
    >
      {children}
    </form>
  );
};

export const AccessibleInput = ({ 
  label, 
  type = 'text', 
  required = false, 
  error, 
  helpText,
  className = '',
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputId = `input-${Math.random().toString(36).substr(2, 9)}`;
  const errorId = `${inputId}-error`;
  const helpId = `${inputId}-help`;

  return (
    <div className={`space-y-2 ${className}`}>
      <label 
        htmlFor={inputId}
        className="block text-sm font-medium text-foreground"
      >
        {label}
        {required && (
          <span className="text-destructive ml-1" aria-label="requis">
            *
          </span>
        )}
      </label>
      
      <div className="relative">
        <input
          id={inputId}
          type={type}
          className={`
            w-full px-3 py-2 border rounded-md
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent
            ${error 
              ? 'border-destructive focus:ring-destructive focus:border-destructive' 
              : 'border-border'
            }
            ${isFocused ? 'ring-2' : ''}
          `}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={`${error ? errorId : ''} ${helpText ? helpId : ''}`.trim()}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {/* Indicateur visuel pour les champs requis */}
        {required && !props.value && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-muted-foreground rounded-full" />
          </div>
        )}
      </div>
      
      {/* Message d'aide */}
      {helpText && (
        <p id={helpId} className="text-sm text-muted-foreground">
          {helpText}
        </p>
      )}
      
      {/* Message d'erreur */}
      <AnimatePresence>
        {error && (
          <motion.p
            id={errorId}
            className="text-sm text-destructive flex items-center space-x-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="alert"
          >
            <XMarkIcon className="w-4 h-4" />
            <span>{error}</span>
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// Composant de notification accessible
export const AccessibleNotification = ({ 
  type = 'info', 
  title, 
  message, 
  onClose, 
  autoClose = true,
  duration = 5000 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onClose]);

  const typeStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`
            fixed top-4 right-4 max-w-md p-4 border rounded-lg shadow-lg z-50
            ${typeStyles[type]}
          `}
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          role="alert"
          aria-live="polite"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1">
              {title && (
                <h4 className="font-medium mb-1">{title}</h4>
              )}
              <p className="text-sm">{message}</p>
            </div>
            
            <button
              onClick={() => {
                setIsVisible(false);
                setTimeout(onClose, 300);
              }}
              className="ml-4 text-current hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-current rounded"
              aria-label="Fermer la notification"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
          
          {/* Barre de progression pour l'auto-fermeture */}
          {autoClose && (
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-current opacity-30"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: duration / 1000, ease: 'linear' }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default {
  useAccessibilityPreferences,
  AccessibleButton,
  AccessibleNavigation,
  AccessibleForm,
  AccessibleInput,
  AccessibleNotification
};