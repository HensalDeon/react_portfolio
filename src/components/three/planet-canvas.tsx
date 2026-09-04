"use client";

import { Float, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import { Suspense, useEffect, useRef } from "react";
import type { Group } from "three";

const MODEL_URL = "/models/planet.glb";
const DRACO_PATH = "/draco/";

type PlanetProps = { animate: boolean; onReady?: () => void };

function Planet({ animate, onReady }: PlanetProps) {
  const { scene } = useGLTF(MODEL_URL, DRACO_PATH);
  const group = useRef<Group>(null);

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  useFrame((_, delta) => {
    if (!group.current || !animate) return;
    group.current.rotation.y += delta * 0.18;
  });

  return (
    <group ref={group}>
      <primitive object={scene} scale={2.2} />
    </group>
  );
}

export function PlanetCanvas({ onReady }: { onReady?: () => void }) {
  const reduced = useReducedMotion();
  const animate = !reduced;

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={animate ? "always" : "demand"}
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

useGLTF.preload(MODEL_URL, DRACO_PATH);
