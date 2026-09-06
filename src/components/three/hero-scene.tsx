"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

import { DESKTOP_MODEL_URL } from "@/components/three/models";
import { SceneFrame } from "@/components/three/scene-frame";

const DesktopCanvas = dynamic(
  () => import("@/components/three/desktop-canvas").then((mod) => mod.DesktopCanvas),
  { ssr: false },
);

export function HeroScene() {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  // Prefetch the 1 MB model while the intro curtain is up. It is added from
  // an effect rather than server HTML so the request starts after the first
  // paint: Lighthouse counts any request in flight before the largest
  // contentful paint against it, whatever its priority. A prefetch is lowest
  // priority, so it never competes with fonts and scripts, and browsers skip
  // it when the user has asked to save data. SceneFrame then mounts the
  // scene (which reads the model from cache) once the curtain has lifted.
  useEffect(() => {
    let link: HTMLLinkElement | undefined;
    let timer: number | undefined;
    // A frame callback followed by a macrotask runs after the next paint, so
    // the request cannot precede the hero's first paint even if hydration
    // happens to run before the browser has painted.
    const frame = requestAnimationFrame(() => {
      timer = window.setTimeout(() => {
        link = document.createElement("link");
        link.rel = "prefetch";
        link.href = DESKTOP_MODEL_URL;
        document.head.append(link);
      }, 0);
    });
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      link?.remove();
    };
  }, []);

  return (
    <SceneFrame
      ready={ready}
      className="mx-auto aspect-[4/3] max-w-xl lg:aspect-square lg:max-w-none"
    >
      <DesktopCanvas onReady={handleReady} />
    </SceneFrame>
  );
}
