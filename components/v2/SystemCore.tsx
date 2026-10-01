import { Html, Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

import type { DeviceQuality } from '@/lib/v2/deviceQuality';
import { getSystemProgress } from '@/lib/v2/systemMotion';

const NODES = [
  { label: 'WEB', position: [3.3, 1.45, 0.2] as [number, number, number] },
  { label: 'ERP', position: [-3.2, 1.2, -0.3] as [number, number, number] },
  { label: 'API', position: [-2.7, -1.7, 0.5] as [number, number, number] },
  { label: 'AI', position: [2.65, -1.75, -0.15] as [number, number, number] },
  { label: 'DATA', position: [0.1, 3.05, -0.55] as [number, number, number] },
  { label: 'COMMERCE', position: [0.15, -3.0, 0.35] as [number, number, number] },
];

function DataPulse({
  end,
  offset,
}: {
  end: [number, number, number];
  offset: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const progress = getSystemProgress();
    const t = (clock.elapsedTime * 0.24 + offset) % 1;
    const eased = t * t * (3 - 2 * t);

    ref.current.position.set(
      end[0] * eased,
      end[1] * eased,
      end[2] * eased,
    );
    ref.current.scale.setScalar(0.55 + Math.sin(t * Math.PI) * 0.55);

    if (material.current) {
      material.current.opacity = THREE.MathUtils.lerp(
        0.95,
        0.18,
        THREE.MathUtils.smoothstep(progress, 0.62, 1),
      );
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.055, 12, 12]} />
      <meshBasicMaterial
        ref={material}
        color="#baff2a"
        transparent
        opacity={0.95}
        toneMapped={false}
      />
    </mesh>
  );
}

export default function SystemCore({ quality }: { quality: DeviceQuality }) {
  const group = useRef<THREE.Group>(null);
  const network = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const coreMaterial = useRef<THREE.MeshStandardMaterial>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const ringAMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const ringBMaterial = useRef<THREE.MeshBasicMaterial>(null);
  const spin = useRef(0);

  const particles = useMemo(() => {
    return Array.from({ length: quality.particles }, (_, index) => {
      const a = (index / Math.max(1, quality.particles)) * Math.PI * 2;
      const ring = 4.2 + (index % 5) * 0.22;
      return [
        Math.cos(a) * ring,
        Math.sin(a * 1.7) * 1.8,
        Math.sin(a) * ring * 0.32,
      ] as [number, number, number];
    });
  }, [quality.particles]);

  useFrame((state, delta) => {
    if (!group.current) return;

    const p = getSystemProgress();
    const decompose = THREE.MathUtils.smoothstep(p, 0.28, 0.86);
    const resolve = THREE.MathUtils.smoothstep(p, 0.55, 1);
    const idle = 1 - decompose;

    if (quality.animate) {
      spin.current += delta * 0.055 * idle;
    }

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      spin.current + decompose * 0.16 + state.pointer.x * 0.08 * idle,
      0.045,
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.075 * idle - decompose * 0.08,
      0.045,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -state.pointer.x * 0.05 * idle,
      0.045,
    );

    if (network.current) {
      network.current.scale.x = THREE.MathUtils.lerp(1, 1.34, decompose);
      network.current.scale.y = THREE.MathUtils.lerp(1, 0.84, resolve);
      network.current.scale.z = THREE.MathUtils.lerp(1, 0.7, resolve);
      network.current.position.y = THREE.MathUtils.lerp(0, -0.08, resolve);
    }

    if (core.current) {
      const pulse = quality.animate
        ? 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.035 * idle
        : 1;
      const resolvedScale = THREE.MathUtils.lerp(1, 0.48, resolve) * pulse;
      core.current.scale.setScalar(resolvedScale);
    }

    if (coreMaterial.current) {
      coreMaterial.current.emissiveIntensity = THREE.MathUtils.lerp(0.58, 1.15, resolve);
      coreMaterial.current.opacity = THREE.MathUtils.lerp(1, 0.78, resolve);
    }

    if (ringA.current) {
      ringA.current.rotation.z += delta * 0.12 * idle;
      ringA.current.scale.setScalar(THREE.MathUtils.lerp(1, 1.72, decompose));
    }
    if (ringB.current) {
      ringB.current.rotation.x += delta * 0.08 * idle;
      ringB.current.scale.setScalar(THREE.MathUtils.lerp(1, 1.38, decompose));
    }
    if (ringAMaterial.current) {
      ringAMaterial.current.opacity = THREE.MathUtils.lerp(0.55, 0.08, resolve);
    }
    if (ringBMaterial.current) {
      ringBMaterial.current.opacity = THREE.MathUtils.lerp(0.25, 0.035, resolve);
    }
  });

  return (
    <group ref={group}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.12, quality.mode === 'low' ? 2 : 5]} />
        <meshStandardMaterial
          ref={coreMaterial}
          color="#111812"
          emissive="#baff2a"
          emissiveIntensity={0.58}
          metalness={0.78}
          roughness={0.26}
          transparent
          opacity={1}
          wireframe
        />
      </mesh>

      <mesh ref={ringA} rotation={[Math.PI / 2.8, 0.35, 0]}>
        <torusGeometry args={[1.68, 0.014, 8, 96]} />
        <meshBasicMaterial
          ref={ringAMaterial}
          color="#baff2a"
          transparent
          opacity={0.55}
        />
      </mesh>

      <mesh ref={ringB} rotation={[0.15, Math.PI / 2.4, 0.65]}>
        <torusGeometry args={[2.08, 0.01, 8, 96]} />
        <meshBasicMaterial
          ref={ringBMaterial}
          color="#d7ff78"
          transparent
          opacity={0.25}
        />
      </mesh>

      <group ref={network}>
        {NODES.map((node, index) => (
          <group key={node.label}>
            <Line
              points={[[0, 0, 0], node.position]}
              color="#7b9f32"
              lineWidth={0.65}
              transparent
              opacity={0.48}
            />
            <mesh position={node.position}>
              <sphereGeometry args={[0.11, 20, 20]} />
              <meshStandardMaterial
                color="#172010"
                emissive="#baff2a"
                emissiveIntensity={0.95}
              />
            </mesh>

            {quality.mode !== 'low' && (
              <Html
                position={node.position}
                center
                distanceFactor={8.5}
                style={{ pointerEvents: 'none' }}
              >
                <span
                  style={{
                    display: 'block',
                    transform: 'translateY(-24px)',
                    font: '600 10px/1 JetBrains Mono, monospace',
                    letterSpacing: '0.16em',
                    color: 'rgba(235,255,196,.82)',
                    textShadow: '0 0 14px rgba(186,255,42,.42)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {node.label}
                </span>
              </Html>
            )}

            {quality.animate && (
              <DataPulse end={node.position} offset={index * 0.14} />
            )}
          </group>
        ))}
      </group>

      {particles.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.016 + (index % 3) * 0.006, 6, 6]} />
          <meshBasicMaterial
            color={index % 4 === 0 ? '#baff2a' : '#dfe8cf'}
            transparent
            opacity={index % 4 === 0 ? 0.75 : 0.28}
          />
        </mesh>
      ))}
    </group>
  );
}
