"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Animate when scrolled into view instead of on mount. */
  inView?: boolean;
};

/** Fades and lifts content in. Renders statically when reduced motion is preferred. */
export function Reveal({ children, delay = 0, className, inView = false }: RevealProps) {
  const reduced = useReducedMotion();
  const transition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  if (inView) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
