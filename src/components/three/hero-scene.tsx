"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

import { SceneErrorBoundary } from "@/components/three/scene-error-boundary";
import { cn } from "@/lib/utils";

const DesktopCanvas = dynamic(
  () => import("@/components/three/desktop-canvas").then((mod) => mod.DesktopCanvas),
  { ssr: false },
);

export function HeroScene() {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:aspect-square lg:max-w-none">
      <div aria-hidden className="hero-glow absolute inset-0 rounded-[2.5rem]" />
      <div
        aria-hidden
        className={cn(
          "absolute inset-6 animate-pulse rounded-[2rem] bg-subtle/70 transition-opacity duration-700",
          ready ? "opacity-0" : "opacity-100",
        )}
      />
      <SceneErrorBoundary>
        <DesktopCanvas onReady={handleReady} />
      </SceneErrorBoundary>
    </div>
  );
}
