"use client";

import { Float, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import type { Group } from "three";

import { useSceneVisible } from "@/components/three/scene-frame";
import { DRACO_PATH, PLANET_MODEL_URL } from "@/components/three/models";
import "@/components/three/three-console";
import { useStagedScene } from "@/components/three/use-staged-scene";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type PlanetProps = { animate: boolean; onReady?: () => void };

function Planet({ animate, onReady }: PlanetProps) {
  const { scene } = useGLTF(PLANET_MODEL_URL, DRACO_PATH);
  const ready = useStagedScene(scene, onReady);
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current || !animate) return;
    group.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={group} visible={ready}>
      <primitive object={scene} scale={2.2} />
    </group>
  );
}

export function PlanetCanvas({ onReady }: { onReady?: () => void }) {
  const reduced = useReducedMotion();
  const visible = useSceneVisible();
  const animate = !reduced;
  const running = animate && visible;

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={running ? "always" : "demand"}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[5, 6, 4]} intensity={2.2} />
        <Suspense fallback={null}>
          <Float speed={animate ? 1 : 0} rotationIntensity={0} floatIntensity={animate ? 0.5 : 0}>
            <Planet animate={animate} onReady={onReady} />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(PLANET_MODEL_URL, DRACO_PATH);
