'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Refined math for the "Tangled Knot" look seen on Orfeo AI
const Rib = ({ index, total, time }: { index: number; total: number; time: React.MutableRefObject<number> }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;

    const count = total;
    const t = time.current;
    const progress = index / count;

    // TORUS KNOT PATH MATH
    // p and q define the "knots" 
    const p = 3;
    const q = 7;
    const phi = progress * Math.PI * 2;

    const r = (2 + Math.cos(q * phi)) * 2;
    const x = r * Math.cos(p * phi);
    const y = r * Math.sin(p * phi);
    const z = Math.sin(q * phi) * 3;

    // Add a bit of wave motion to the position
    const wave = Math.sin(t * 0.5 + progress * 10) * 0.5;
    meshRef.current.position.set(x + wave, y + wave, z);

    // Dynamic Rotation
    meshRef.current.rotation.set(
      t * 0.1 + index * 0.02,
      phi + t * 0.2,
      phi + Math.PI / 2
    );

    // Scale pulsing
    const s = 1 + Math.sin(t * 1.5 + index * 0.1) * 0.1;
    meshRef.current.scale.setScalar(s);
  });

  return (
    <mesh ref={meshRef}>
      {/* Ultra-thin metallic rings */}
      <torusGeometry args={[2.5, 0.005, 8, 100]} />
      <meshStandardMaterial
        color="#1e3a8a"
        metalness={1}
        roughness={1}
        transparent
        opacity={0.9}
        envMapIntensity={0.5}
      />
    </mesh>
  );
};

const TangledCore = () => {
  const groupRef = useRef<THREE.Group>(null);
  const time = useRef(0);
  const ribCount = 800; // Reduced density for clarity

  useFrame((state) => {
    if (!groupRef.current) return;
    time.current = state.clock.getElapsedTime();

    // Organic group rotation
    const mx = state.mouse.x * 0.4;
    const my = state.mouse.y * 0.4;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mx, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -my + 0.5, 0.05);
  });

  return (
    <group ref={groupRef} scale={0.65}>
      {Array.from({ length: ribCount }).map((_, i) => (
        <Rib
          key={i}
          index={i}
          total={ribCount}
          time={time}
        />
      ))}
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={35} />

      <ambientLight intensity={0.01} />

      {/* Clean lighting with a hint of warmth */}
      <pointLight position={[20, 20, 20]} intensity={100} color="#ffffff" />
      <pointLight position={[-20, -10, 15]} intensity={80} color="#fffdf6" />
      <pointLight position={[0, -25, 10]} intensity={50} color="#ffffff" />

      <TangledCore />

      <ContactShadows
        position={[0, -12, 0]}
        opacity={0.4}
        scale={60}
        blur={2}
        far={20}
      />

      <Environment preset="apartment" />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
