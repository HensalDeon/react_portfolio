"use client";

import { createContext, useContext, type ReactNode } from "react";

import { SceneErrorBoundary } from "@/components/three/scene-error-boundary";
import { useDeferredScene } from "@/hooks/use-deferred-scene";
import { cn } from "@/lib/utils";

const SceneVisibilityContext = createContext(true);

/** True while the enclosing SceneFrame is near the viewport; use it to pause render loops. */
export function useSceneVisible(): boolean {
  return useContext(SceneVisibilityContext);
}

type SceneFrameProps = {
  ready: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Glow backdrop, loading skeleton and error boundary shared by the 3D scenes.
 * The scene itself only mounts once the frame is near the viewport and the
 * browser is idle, so the Three.js bundle never competes with first paint.
 */
export function SceneFrame({ ready, className, children }: SceneFrameProps) {
  const { ref, nearViewport, status } = useDeferredScene();
  const showSkeleton = status === "waiting" || (status === "mounted" && !ready);

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      <div aria-hidden className="hero-glow absolute inset-0 rounded-[2.5rem]" />
      <div
        aria-hidden
        className={cn(
          "absolute inset-6 animate-pulse rounded-[2rem] bg-subtle/70 transition-opacity duration-700",
          showSkeleton ? "opacity-100" : "opacity-0",
        )}
      />
      {status === "mounted" && (
        <SceneVisibilityContext.Provider value={nearViewport}>
          <SceneErrorBoundary>{children}</SceneErrorBoundary>
        </SceneVisibilityContext.Provider>
      )}
    </div>
  );
}
