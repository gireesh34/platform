import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function DroneBody() {
  const bodyRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    if (glowRef.current) {
      glowRef.current.intensity = 0.5 + Math.sin(state.clock.getElapsedTime() * 2) * 0.3;
    }
  });

  return (
    <group ref={bodyRef}>
      {/* Central Hub */}
      <mesh receiveShadow castShadow>
        <cylinderGeometry args={[0.3, 0.35, 0.12, 8]} />
        <meshPhongMaterial
          color="#1e293b"
          shininess={100}
          specular={new THREE.Color('#ffffff')}
        />
      </mesh>

      {/* Top Cover */}
      <mesh position={[0, 0.07, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[0.25, 0.3, 0.05, 8]} />
        <meshPhongMaterial
          color="#334155"
          shininess={100}
          specular={new THREE.Color('#ffffff')}
        />
      </mesh>

      {/* Frame Arms */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((rotation, i) => (
        <group key={i} rotation={[0, rotation, 0]}>
          {/* Main Arm */}
          <mesh position={[0.4, 0, 0]} rotation={[0, 0, Math.PI * 0.03]} receiveShadow castShadow>
            <boxGeometry args={[0.8, 0.05, 0.08]} />
            <meshPhongMaterial
              color="#475569"
              shininess={100}
              specular={new THREE.Color('#ffffff')}
            />
          </mesh>
          
          {/* Arm Support */}
          <mesh position={[0.4, -0.03, 0]} rotation={[0, 0, -Math.PI * 0.1]} receiveShadow castShadow>
            <boxGeometry args={[0.6, 0.02, 0.12]} />
            <meshPhongMaterial
              color="#334155"
              shininess={100}
              specular={new THREE.Color('#ffffff')}
            />
          </mesh>
        </group>
      ))}

      {/* Camera Gimbal */}
      <group position={[0, -0.05, 0.2]}>
        {/* Gimbal Base */}
        <mesh receiveShadow castShadow>
          <cylinderGeometry args={[0.1, 0.12, 0.08, 16]} />
          <meshPhongMaterial
            color="#334155"
            shininess={100}
            specular={new THREE.Color('#ffffff')}
          />
        </mesh>
        
        {/* Camera Housing */}
        <mesh position={[0, -0.08, 0]} receiveShadow castShadow>
          <sphereGeometry args={[0.08, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
          <meshPhongMaterial
            color="#1e293b"
            shininess={200}
            specular={new THREE.Color('#ffffff')}
          />
        </mesh>
        
        {/* Lens */}
        <mesh position={[0, -0.08, 0.04]} receiveShadow castShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.04, 16]} />
          <meshPhongMaterial
            color="#0f172a"
            shininess={200}
            specular={new THREE.Color('#ffffff')}
          />
        </mesh>
      </group>

      {/* Status LEDs */}
      {[0, Math.PI].map((rotation, i) => (
        <group key={i} rotation={[0, rotation, 0]}>
          <pointLight
            ref={i === 0 ? glowRef : undefined}
            position={[0.25, 0, 0]}
            color={i === 0 ? "#22d3ee" : "#ef4444"}
            intensity={0.5}
            distance={0.5}
          />
          <mesh position={[0.25, 0, 0]}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshBasicMaterial color={i === 0 ? "#22d3ee" : "#ef4444"} />
          </mesh>
        </group>
      ))}

      {/* Battery Compartment */}
      <mesh position={[0, -0.02, -0.15]} receiveShadow castShadow>
        <boxGeometry args={[0.3, 0.04, 0.2]} />
        <meshPhongMaterial
          color="#334155"
          shininess={100}
          specular={new THREE.Color('#ffffff')}
        />
      </mesh>

      {/* Cooling Vents */}
      {[-1, 1].map((x, i) => (
        <group key={i} position={[x * 0.15, 0.06, 0]}>
          {[0, 1, 2].map((j) => (
            <mesh key={j} position={[0, 0, j * 0.06 - 0.06]} receiveShadow castShadow>
              <boxGeometry args={[0.02, 0.01, 0.02]} />
              <meshPhongMaterial
                color="#0f172a"
                shininess={100}
                specular={new THREE.Color('#ffffff')}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}