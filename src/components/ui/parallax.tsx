"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

import { useMounted } from "@/hooks/use-mounted";

type ScrollOffset = NonNullable<Parameters<typeof useScroll>[0]>["offset"];

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Pixel offset at the start and end of the scroll range. */
  range?: [number, number];
  /** Scroll range relative to the viewport; defaults to the element's full pass through it. */
  offset?: ScrollOffset;
};

/**
 * Nudges its children along the scroll axis as they pass through the viewport.
 * Native scrolling is untouched: motion reads the scroll position and applies
 * a transform, and reduced-motion users get a static element.
 */
export function Parallax({
  children,
  className,
  range = [24, -24],
  offset = ["start end", "end start"],
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Only honour the preference after mount so the client's first render matches the server.
  const mounted = useMounted();
  const reduced = useReducedMotion() === true && mounted;
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const y = useTransform(scrollYProgress, [0, 1], range);

  if (reduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
