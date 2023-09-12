"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

const revealVariant = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 },
};

const Reveal = ({ children, delay = 0.25 }: { children: ReactNode, delay?: number }) => {
  const revealRef = useRef(null);

  const isInView = useInView(revealRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={revealRef} className="relative overflow-hidden">
      <motion.div
        variants={revealVariant}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
