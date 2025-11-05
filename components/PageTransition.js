import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const PageTransition = ({ children }) => {
  const router = useRouter();

  return (
    <motion.div
      key={router.asPath}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ position: 'absolute', top: 0, left: 0, right: 0, pointerEvents: 'none' }}
    >
      {/* This is just for transition overlay effect */}
    </motion.div>
  );
};

export default PageTransition;
