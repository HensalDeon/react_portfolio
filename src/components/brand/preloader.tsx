"use client";

import { useEffect, useState, type AnimationEvent } from "react";

import { Monogram } from "@/components/brand/monogram";
import { site } from "@/content/site";

/** Hard stop in case the exit animation never fires (e.g. animations disabled). */
const FALLBACK_MS = 4000;

const EXIT_ANIMATIONS = new Set(["preloader-exit", "preloader-fade"]);

/**
 * Full-screen curtain shown on first paint. The monogram draws itself stroke
 * by stroke, the name rises in, then the curtain lifts off the top of the
 * viewport with a curved trailing edge. Everything is server-rendered and
 * driven by CSS so it appears before hydration; React only removes it once
 * the exit animation has finished.
 */
export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const id = window.setTimeout(() => setDone(true), FALLBACK_MS);
    return () => {
      root.style.overflow = "";
      window.clearTimeout(id);
    };
  }, [done]);

  if (done) return null;

  const onAnimationEnd = (event: AnimationEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && EXIT_ANIMATIONS.has(event.animationName)) {
      setDone(true);
    }
  };

  return (
    <div
      aria-hidden
      onAnimationEnd={onAnimationEnd}
      className="preloader fixed inset-x-0 top-0 z-[100] bg-background text-foreground"
    >
      <div className="preloader-content relative flex h-svh flex-col items-center justify-center gap-7">
        <div className="hero-glow absolute h-[28rem] w-[28rem] rounded-full" />
        <Monogram className="preloader-mark relative h-24 w-24 sm:h-28 sm:w-28" />
        <p className="relative overflow-hidden font-mono text-[11px] tracking-[0.25em] text-muted uppercase">
          <span className="preloader-line block">{site.name}</span>
        </p>
      </div>
    </div>
  );
}
