"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

type SplitLinesProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Seconds between each line starting. */
  stagger?: number;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Reveals text one line at a time, each line sliding up from behind a mask.
 * Line breaks are measured from an invisible copy of the words at the real
 * width, so the split follows the browser's own wrapping and re-measures on
 * resize. Renders plain text when reduced motion is preferred.
 */
export function SplitLines({ text, as: Tag = "h2", className, stagger = 0.08 }: SplitLinesProps) {
  // Only honour the preference after mount so the client's first render matches the server.
  const mounted = useMounted();
  const reduced = useReducedMotion() === true && mounted;
  const ref = useRef<HTMLHeadingElement>(null);
  const [lines, setLines] = useState<string[] | null>(null);
  // Observe the heading, not the sliding spans: those sit fully clipped behind
  // their masks until revealed, so they would never intersect the viewport.
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  useEffect(() => {
    const element = ref.current;
    if (!element || reduced) return;

    const measure = () => {
      const spans = element.querySelectorAll<HTMLSpanElement>("[data-word]");
      const next: string[] = [];
      let top: number | null = null;
      spans.forEach((span) => {
        if (span.offsetTop !== top) {
          top = span.offsetTop;
          next.push(span.textContent ?? "");
        } else {
          next[next.length - 1] += ` ${span.textContent ?? ""}`;
        }
      });
      setLines((current) => (current?.join("\n") === next.join("\n") ? current : next));
    };

    // ResizeObserver reports once on observe, which doubles as the first measurement.
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, [reduced, words]);

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag ref={ref} className={cn("relative flex flex-col", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="pointer-events-none invisible absolute inset-x-0 top-0">
        {words.map((word, index) => (
          <span key={`${word}-${index}`}>
            <span data-word className="inline-block">
              {word}
            </span>
            {index < words.length - 1 ? " " : null}
          </span>
        ))}
      </span>
      {lines ? (
        lines.map((line, index) => (
          <span
            key={`${line}-${index}`}
            aria-hidden
            className="-my-[0.15em] block overflow-hidden py-[0.15em]"
          >
            <motion.span
              className="block"
              initial={inView ? false : { y: "110%" }}
              animate={{ y: inView ? 0 : "110%" }}
              transition={{ duration: 0.9, ease: EASE, delay: index * stagger }}
            >
              {line}
            </motion.span>
          </span>
        ))
      ) : (
        <span aria-hidden>{text}</span>
      )}
    </Tag>
  );
}
