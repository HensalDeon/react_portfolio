"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Animate when scrolled into view instead of on mount. */
  inView?: boolean;
};

/**
 * Eases content in. The mount variant is a pure CSS lift so server-rendered
 * text is visible (and counts as LCP) before any JavaScript runs; the in-view
 * variant fades and lifts through motion's viewport tracking. Both render
 * statically when reduced motion is preferred.
 */
export function Reveal({ children, delay = 0, className, inView = false }: RevealProps) {
  const reduced = useReducedMotion();

  if (!inView) {
    return (
      <div
        className={cn("animate-reveal motion-reduce:animate-none", className)}
        style={delay ? { animationDelay: `${delay}s` } : undefined}
      >
        {children}
      </div>
    );
  }

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
