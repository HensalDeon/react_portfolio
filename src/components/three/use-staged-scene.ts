"use client";

import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import type { Object3D, Texture } from "three";

const TEXTURES_PER_FRAME = 4;

function collectTextures(root: Object3D): Texture[] {
  const textures = new Set<Texture>();
  root.traverse((object) => {
    const material = (object as { material?: unknown }).material;
    const materials = Array.isArray(material) ? material : [material];
    for (const candidate of materials) {
      if (!candidate || typeof candidate !== "object") continue;
      for (const value of Object.values(candidate)) {
        if ((value as Texture | null)?.isTexture) textures.add(value as Texture);
      }
    }
  });
  return [...textures];
}

const nextFrame = () => new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

/**
 * Warms a loaded model before it is shown: shaders compile through the
 * parallel-compile extension and textures upload a few per frame, so the
 * first visible frame does not stall the main thread. Returns true once the
 * model can be displayed; `onReady` fires at the same moment.
 */
export function useStagedScene(model: Object3D, onReady?: () => void): boolean {
  const gl = useThree((state) => state.gl);
  const camera = useThree((state) => state.camera);
  const root = useThree((state) => state.scene);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const warm = async () => {
      await gl.compileAsync(model, camera, root);
      const textures = collectTextures(model);
      for (let index = 0; index < textures.length; index += TEXTURES_PER_FRAME) {
        if (cancelled) return;
        for (const texture of textures.slice(index, index + TEXTURES_PER_FRAME)) {
          gl.initTexture(texture);
        }
        await nextFrame();
      }
      if (cancelled) return;
      setReady(true);
      onReady?.();
    };

    warm().catch(() => {
      // Compilation failures surface on the normal render path instead.
      if (cancelled) return;
      setReady(true);
      onReady?.();
    });

    return () => {
      cancelled = true;
    };
  }, [gl, camera, root, model, onReady]);

  return ready;
}
