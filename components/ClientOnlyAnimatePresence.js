import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

// Client-only wrapper for AnimatePresence that doesn't block SSR
const ClientOnlyAnimatePresence = ({ children }) => {
  const router = useRouter();

  // On server, render children directly without AnimatePresence
  // This ensures content is in the initial HTML for crawlers
  if (typeof window === 'undefined') {
    return children;
  }

  // On client, use AnimatePresence for smooth transitions
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      {children}
    </AnimatePresence>
  );
};

export default ClientOnlyAnimatePresence;
