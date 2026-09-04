"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type SplitLinesProps = {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  /** Seconds between each line starting. */
  stagger?: number;
};

/**
 * Reveals text one line at a time, each line sliding up from behind a mask.
 * Line breaks are measured from an invisible copy of the words at the real
 * width, so the split follows the browser's own wrapping and re-measures on
 * resize. Renders plain text when reduced motion is preferred.
 */
export function SplitLines({ text, as: Tag = "h2", className, stagger = 0.08 }: SplitLinesProps) {
  const reduced = useReducedMotion();
  const measureRef = useRef<HTMLSpanElement>(null);
  // Observe the heading, not the sliding spans: those sit fully clipped behind
  // their masks until revealed, so they would never intersect the viewport.
  const [ref, inView] = useInView<HTMLHeadingElement>({ once: true, amount: 0.5 });
  const [lines, setLines] = useState<string[] | null>(null);
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  useEffect(() => {
    const element = measureRef.current;
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
      <span
        ref={measureRef}
        aria-hidden
        className="pointer-events-none invisible absolute inset-x-0 top-0"
      >
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
            <span
              className={cn(
                "block transition-transform duration-900 ease-out-expo motion-reduce:transition-none",
                inView ? "translate-y-0" : "translate-y-[110%]",
              )}
              style={{ transitionDelay: `${index * stagger}s` }}
            >
              {line}
            </span>
          </span>
        ))
      ) : (
        <span aria-hidden>{text}</span>
      )}
    </Tag>
  );
}
