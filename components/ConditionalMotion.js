/**
 * Conditional Motion Component for AI Crawler Optimization (Nov 2025)
 *
 * This component wraps Framer Motion to disable animations for crawlers
 * ensuring content is immediately visible in SSR HTML for better indexing.
 *
 * For users: Full animations
 * For bots/crawlers: Static content, no hidden initial states
 */

import { motion } from 'framer-motion';

export const ConditionalMotion = ({ children, disableAnimations, ...motionProps }) => {
  // If animations are disabled (crawler detected), render a static div
  if (disableAnimations) {
    const { initial, animate, whileInView, viewport, transition, ...divProps } = motionProps;
    return <div {...divProps}>{children}</div>;
  }

  // For normal users, render full Framer Motion experience
  return <motion.div {...motionProps}>{children}</motion.div>;
};

export default ConditionalMotion;
