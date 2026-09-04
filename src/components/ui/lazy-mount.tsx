"use client";

import type { ReactNode } from "react";

import { useInView } from "@/hooks/use-in-view";

type LazyMountProps = {
  children: ReactNode;
  className?: string;
  /** How far outside the viewport to start rendering. */
  margin?: string;
};

/**
 * Renders its children only once the wrapper is near the viewport. Use it for
 * small below-the-fold assets whose requests would otherwise compete with
 * fonts and scripts during the first paint.
 */
export function LazyMount({ children, className, margin = "400px" }: LazyMountProps) {
  const [ref, inView] = useInView<HTMLSpanElement>({ once: true, margin });
  return (
    <span ref={ref} className={className}>
      {inView ? children : null}
    </span>
  );
}
