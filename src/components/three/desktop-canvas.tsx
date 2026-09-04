"use client";

import { ContactShadows, Float, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useCallback, useRef, useState } from "react";
import { MathUtils, type Group } from "three";

import { useSceneVisible } from "@/components/three/scene-frame";
import { useStagedScene } from "@/components/three/use-staged-scene";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const MODEL_URL = "/models/desktop-pc.glb";
const DRACO_PATH = "/draco/";
const REST_ROTATION_Y = -0.35;

type DesktopProps = { animate: boolean; onReady?: () => void };

function Desktop({ animate, onReady }: DesktopProps) {
  const { scene } = useGLTF(MODEL_URL, DRACO_PATH);
  const ready = useStagedScene(scene, onReady);
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current || !animate) return;
    const targetY = REST_ROTATION_Y + state.pointer.x * 0.2;
    const targetX = -state.pointer.y * 0.06;
    group.current.rotation.y = MathUtils.damp(group.current.rotation.y, targetY, 3, delta);
    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, targetX, 3, delta);
  });

  return (
    <group ref={group} rotation={[0, REST_ROTATION_Y, 0]} visible={ready}>
      <primitive object={scene} scale={0.82} position={[0, -1.7, -1.4]} />
    </group>
  );
}

export function DesktopCanvas({ onReady }: { onReady?: () => void }) {
  const reduced = useReducedMotion();
  const visible = useSceneVisible();
  const animate = !reduced;
  const running = animate && visible;

  // The shadow is baked in a single pass, so it must wait for the model to show.
  const [modelReady, setModelReady] = useState(false);
  const handleReady = useCallback(() => {
    setModelReady(true);
    onReady?.();
  }, [onReady]);

  return (
    <div className="absolute inset-0">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [24, 5, 6], fov: 27 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={running ? "always" : "demand"}
      >
        <hemisphereLight intensity={2.5} groundColor="black" />
        <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1.2} />
        <pointLight intensity={1.5} position={[0, -0.3, 0]} />
        <Suspense fallback={null}>
          <Float
            speed={animate ? 1.2 : 0}
            rotationIntensity={animate ? 0.15 : 0}
            floatIntensity={animate ? 0.4 : 0}
          >
            <Desktop animate={animate} onReady={handleReady} />
          </Float>
          {modelReady && (
            <ContactShadows
              position={[0, -1.75, 0]}
              opacity={0.45}
              scale={22}
              blur={2.6}
              far={5}
              frames={1}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload(MODEL_URL, DRACO_PATH);
