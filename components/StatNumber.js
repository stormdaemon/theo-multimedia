import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function StatNumber({ value, label, blurColor = "#a855f7" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const controls = useAnimation();
  const [display, setDisplay] = useState(0);
  const [blur, setBlur] = useState(16);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
      let start = 0;
      let end = parseFloat(value.replace(/[^\d.,]/g, '').replace(',', '.'));
      let duration = 1.2; // seconds
      let startTime = null;
      let blurStart = 16;
      let blurEnd = 0;

      function animateNum(ts) {
        if (!startTime) startTime = ts;
        const progress = Math.min((ts - startTime) / (duration * 1000), 1);
        setDisplay(Math.floor(start + (end - start) * progress));
        setBlur(blurStart + (blurEnd - blurStart) * progress);
        if (progress < 1) {
          requestAnimationFrame(animateNum);
        } else {
          setDisplay(end);
          setBlur(0);
        }
      }
      requestAnimationFrame(animateNum);
    }
  }, [isInView, value, controls]);

  // Format number with +, %, etc. if present
  const formatted = value.includes("+") ? `${display}+` : value.includes("%") ? `${display}%` : display;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <span
        style={{ filter: `blur(${blur}px)`, color: blur > 0 ? blurColor : undefined, transition: "filter 0.3s, color 0.3s" }}
        className="text-4xl font-bold bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent mb-2"
      >
        {formatted}
      </span>
      <span className="text-foreground/70">{label}</span>
    </motion.div>
  );
}
