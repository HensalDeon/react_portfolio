"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export type SceneStatus = "waiting" | "mounted" | "skipped";

type DeferredScene = {
  ref: RefObject<HTMLDivElement | null>;
  /** True while the element is within `rootMargin` of the viewport. */
  nearViewport: boolean;
  status: SceneStatus;
};

const IDLE_TIMEOUT_MS = 2000;

function prefersLightweight(): boolean {
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  return nav.connection?.saveData === true;
}

/**
 * Keeps a WebGL scene (and the Three.js bundle behind it) off the critical
 * path: the scene mounts once its container is near the viewport and the
 * browser has gone idle after hydration. Users who opted into data saving
 * never load it. `nearViewport` keeps tracking so callers can pause the
 * render loop while the scene is scrolled away.
 */
export function useDeferredScene(rootMargin = "200px"): DeferredScene {
  const ref = useRef<HTMLDivElement | null>(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [status, setStatus] = useState<SceneStatus>("waiting");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      const id = window.setTimeout(() => setNearViewport(true), 0);
      return () => window.clearTimeout(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setNearViewport(entry?.isIntersecting ?? false),
      { rootMargin },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    if (!nearViewport || status !== "waiting") return;

    const mount = () => setStatus(prefersLightweight() ? "skipped" : "mounted");
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(mount, { timeout: IDLE_TIMEOUT_MS });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(mount, 300);
    return () => window.clearTimeout(id);
  }, [nearViewport, status]);

  return { ref, nearViewport, status };
}
