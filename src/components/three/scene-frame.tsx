"use client";

import type { ReactNode } from "react";

import { SceneErrorBoundary } from "@/components/three/scene-error-boundary";
import { cn } from "@/lib/utils";

type SceneFrameProps = {
  ready: boolean;
  className?: string;
  children: ReactNode;
};

/** Glow backdrop, loading skeleton and error boundary shared by the 3D scenes. */
export function SceneFrame({ ready, className, children }: SceneFrameProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div aria-hidden className="hero-glow absolute inset-0 rounded-[2.5rem]" />
      <div
        aria-hidden
        className={cn(
          "absolute inset-6 animate-pulse rounded-[2rem] bg-subtle/70 transition-opacity duration-700",
          ready ? "opacity-0" : "opacity-100",
        )}
      />
      <SceneErrorBoundary>{children}</SceneErrorBoundary>
    </div>
  );
}
