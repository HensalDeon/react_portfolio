"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

import { SceneFrame } from "@/components/three/scene-frame";

const PlanetCanvas = dynamic(
  () => import("@/components/three/planet-canvas").then((mod) => mod.PlanetCanvas),
  { ssr: false },
);

export function PlanetScene() {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <SceneFrame ready={ready} className="mx-auto aspect-square max-w-md lg:max-w-none">
      <PlanetCanvas onReady={handleReady} />
    </SceneFrame>
  );
}
