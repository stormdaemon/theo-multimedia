"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Effet pour éviter l'hydratation non concordante
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-10 h-10 rounded-full flex items-center justify-center">
        <div className="w-5 h-5 rounded-full border-2 border-transparent" />
      </button>
    );
  }


  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-accent/10 transition-colors duration-200"
      aria-label="Basculer entre le mode clair et sombre"
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5 text-foreground" />
      ) : (
        <FiMoon className="w-5 h-5 text-foreground" />
      )}
    </button>
  );
}
