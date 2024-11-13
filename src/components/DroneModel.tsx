import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import DroneBody from './drone/DroneBody';
import Propeller from './drone/Propeller';
import Lights from './drone/Lights';

function Drone() {
  const propellerPositions: [number, number, number][] = [
    [-0.6, 0, -0.6],
    [0.6, 0, -0.6],
    [-0.6, 0, 0.6],
    [0.6, 0, 0.6],
  ];

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.5}
      floatingRange={[0, 0.2]}
    >
      <group scale={[1.2, 1.2, 1.2]}>
        <DroneBody />
        {propellerPositions.map((position, index) => (
          <Propeller key={index} position={position} />
        ))}
      </group>
    </Float>
  );
}

export default function DroneModel() {
  return (
    <Canvas
      camera={{ position: [2, 1.5, 2], fov: 50 }}
      style={{
        background: 'transparent',
        width: '100%',
        height: '100%',
        minHeight: '400px',
      }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Lights />
        <Drone />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Suspense>
    </Canvas>
  );
}