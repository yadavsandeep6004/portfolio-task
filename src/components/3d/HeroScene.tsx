// src/components/3d/HeroScene.tsx
import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Float,
  MeshDistortMaterial,
  Environment,
  Stars,
} from '@react-three/drei';
import * as THREE from 'three';

// Floating 3D objects
function FloatingGeometry({
  position,
  geometry,
  color,
  speed = 1,
  distort = 0.3,
}: {
  position: [number, number, number];
  geometry: 'octahedron' | 'icosahedron' | 'torus' | 'sphere';
  color: string;
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
  });

  const GeoComponent = useMemo(() => {
    switch (geometry) {
      case 'octahedron':  return <octahedronGeometry args={[0.8, 0]} />;
      case 'icosahedron': return <icosahedronGeometry args={[0.7, 0]} />;
      case 'torus':       return <torusGeometry args={[0.6, 0.2, 16, 32]} />;
      case 'sphere':      return <sphereGeometry args={[0.7, 32, 32]} />;
    }
  }, [geometry]);

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {GeoComponent}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.85}
          distort={distort}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

// Animated particle field
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 1200;

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorOptions = [
      new THREE.Color('#6366f1'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#06b6d4'),
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      const c = colorOptions[Math.floor(Math.random() * colorOptions.length)];
      col[i * 3]     = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

// Central hero object
function CentralOrb() {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    if (innerRef.current) {
      innerRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      innerRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 4 + state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Inner sphere */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial
          color="#6366f1"
          transparent
          opacity={0.9}
          distort={0.4}
          speed={3}
          roughness={0}
          metalness={1}
          envMapIntensity={2}
        />
      </mesh>
      {/* Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.8, 0.04, 8, 80]} />
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.6}
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>
      {/* Outer ring */}
      <mesh rotation={[Math.PI / 3, 0.5, 0]}>
        <torusGeometry args={[2.2, 0.025, 8, 80]} />
        <meshStandardMaterial
          color="#a855f7"
          transparent
          opacity={0.4}
          emissive="#a855f7"
          emissiveIntensity={0.4}
          metalness={1}
          roughness={0}
        />
      </mesh>
    </group>
  );
}

// Camera parallax on mouse
function CameraRig() {
  const { camera, gl } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useMemo(() => {
    const canvas = gl.domElement;
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    canvas.addEventListener('mousemove', onMouseMove);
    return () => canvas.removeEventListener('mousemove', onMouseMove);
  }, [gl]);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 1.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.current.y * 0.8 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={Math.min(window.devicePixelRatio, 2)}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#6366f1" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#a855f7" />
      <pointLight position={[5, -3, 2]} intensity={0.6} color="#06b6d4" />

      <Environment preset="night" />
      <Stars radius={80} depth={50} count={3000} factor={3} fade speed={1} />

      <ParticleField />
      <CentralOrb />

      {/* Floating satellite objects */}
      <FloatingGeometry position={[-3.5, 1.5, -1]} geometry="octahedron"  color="#6366f1" speed={0.8} distort={0.4} />
      <FloatingGeometry position={[3.5, -1, -2]}   geometry="icosahedron" color="#a855f7" speed={1.2} distort={0.3} />
      <FloatingGeometry position={[-2.5, -2, 0]}   geometry="torus"       color="#06b6d4" speed={0.6} distort={0.2} />
      <FloatingGeometry position={[2.5, 2.5, -1]}  geometry="sphere"      color="#ec4899" speed={1.0} distort={0.5} />

      <CameraRig />
    </Canvas>
  );
}
