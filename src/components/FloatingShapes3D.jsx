import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, SoftShadows } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({ position, rotation, speed, color, geometry }) => {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.x += speed * 0.01;
    mesh.current.rotation.y += speed * 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <mesh ref={mesh} rotation={rotation} castShadow receiveShadow>
        <primitive object={geometry} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.2} 
          metalness={0.1} 
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <SoftShadows size={40} samples={16} focus={0.5} />
      <ambientLight intensity={0.5} />
      <directionalLight 
        castShadow 
        position={[10, 20, 10]} 
        intensity={1.5} 
        shadow-mapSize={[1024, 1024]}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <Environment preset="city" />

      {/* Pastel Geometric Shapes */}
      <FloatingShape 
        position={[-4, 2, -5]} 
        rotation={[0, 0, 0]} 
        speed={1} 
        color="#fbcfe8" // pink-200
        geometry={new THREE.IcosahedronGeometry(1.5, 0)} 
      />
      <FloatingShape 
        position={[5, 4, -8]} 
        rotation={[1, 0, 0]} 
        speed={1.5} 
        color="#bfdbfe" // blue-200
        geometry={new THREE.TorusGeometry(1.2, 0.4, 16, 100)} 
      />
      <FloatingShape 
        position={[3, -3, -4]} 
        rotation={[0, 1, 0]} 
        speed={0.8} 
        color="#e9d5ff" // purple-200
        geometry={new THREE.OctahedronGeometry(1, 0)} 
      />
      <FloatingShape 
        position={[-5, -2, -6]} 
        rotation={[0.5, 0.5, 0]} 
        speed={1.2} 
        color="#bbf7d0" // green-200
        geometry={new THREE.SphereGeometry(1.2, 32, 32)} 
      />
    </>
  );
};

const FloatingShapes3D = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-20 pointer-events-none">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 40 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default FloatingShapes3D;
