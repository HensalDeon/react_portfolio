"use client";

import type { ReactNode } from "react";

import { useInView } from "@/hooks/use-in-view";
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
 * text is visible (and counts as LCP) before any JavaScript runs; it waits on
 * `--intro-delay` so it plays once the preloader curtain lifts. The in-view
 * variant fades and lifts through a CSS transition once an IntersectionObserver
 * sees it. Both render statically when reduced motion is preferred.
 */
export function Reveal({ children, delay = 0, className, inView = false }: RevealProps) {
  const [ref, visible] = useInView<HTMLDivElement>({ once: true, amount: 0.2 });

  if (!inView) {
    return (
      <div
        className={cn("animate-reveal motion-reduce:animate-none", className)}
        style={{ animationDelay: `calc(var(--intro-delay, 0s) + ${delay}s)` }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-800 ease-out-expo motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
