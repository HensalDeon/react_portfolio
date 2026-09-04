"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type Options = {
  /** Stop observing after the first time the element is visible. */
  once?: boolean;
  /** Fraction of the element that must be visible, 0 to 1. */
  amount?: number;
  /** IntersectionObserver rootMargin. */
  margin?: string;
};

/** Tracks whether an element intersects the viewport. */
export function useInView<T extends Element>({
  once = true,
  amount = 0,
  margin = "0px",
}: Options = {}): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setInView(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry?.isIntersecting ?? false;
        if (visible) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: amount, rootMargin: margin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [once, amount, margin]);

  return [ref, inView];
}
