import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Propeller({ position }: { position: [number, number, number] }) {
  const propRef = useRef<THREE.Group>(null);
  const speedRef = useRef(0);

  useFrame((state, delta) => {
    if (propRef.current) {
      // Smooth acceleration/deceleration
      const targetSpeed = 15;
      speedRef.current += (targetSpeed - speedRef.current) * delta * 2;
      propRef.current.rotation.y += speedRef.current * delta;
    }
  });

  return (
    <group position={new THREE.Vector3(...position)}>
      {/* Motor Mount */}
      <mesh position={[0, 0.1, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[0.08, 0.1, 0.1, 8]} />
        <meshPhongMaterial
          color="#334155"
          shininess={100}
          specular={new THREE.Color('#ffffff')}
        />
      </mesh>

      {/* Motor Core */}
      <mesh position={[0, 0.15, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.05, 16]} />
        <meshPhongMaterial
          color="#0f172a"
          shininess={200}
          specular={new THREE.Color('#ffffff')}
        />
      </mesh>

      {/* Propeller group */}
      <group ref={propRef} position={[0, 0.17, 0]}>
        {/* Propeller blades with curved design */}
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((rotation, i) => (
          <group key={i} rotation={[0, rotation, 0]}>
            <mesh receiveShadow castShadow rotation={[0, 0, Math.PI * 0.05]}>
              <boxGeometry args={[0.35, 0.02, 0.05]} />
              <meshPhongMaterial
                color="#22d3ee"
                shininess={100}
                transparent
                opacity={0.9}
                specular={new THREE.Color('#ffffff')}
              />
            </mesh>
            {/* Blade tip */}
            <mesh position={[0.15, 0, 0]} rotation={[0, 0, Math.PI * 0.1]} receiveShadow castShadow>
              <boxGeometry args={[0.08, 0.015, 0.04]} />
              <meshPhongMaterial
                color="#0891b2"
                shininess={100}
                specular={new THREE.Color('#ffffff')}
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}