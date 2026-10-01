import { Html, Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

import type { DeviceQuality } from '@/lib/v2/deviceQuality';

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

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = (clock.elapsedTime * 0.24 + offset) % 1;
    const eased = t * t * (3 - 2 * t);
    ref.current.position.set(
      end[0] * eased,
      end[1] * eased,
      end[2] * eased,
    );
    ref.current.scale.setScalar(0.55 + Math.sin(t * Math.PI) * 0.55);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.055, 12, 12]} />
      <meshBasicMaterial color="#baff2a" toneMapped={false} />
    </mesh>
  );
}

export default function SystemCore({ quality }: { quality: DeviceQuality }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

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
    if (!quality.animate || !group.current) return;

    group.current.rotation.y += delta * 0.055;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      state.pointer.y * 0.08,
      0.035,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -state.pointer.x * 0.055,
      0.035,
    );

    if (core.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.035;
      core.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={group}>
      <mesh ref={core}>
        <icosahedronGeometry args={[1.12, quality.mode === 'low' ? 2 : 5]} />
        <meshStandardMaterial
          color="#111812"
          emissive="#baff2a"
          emissiveIntensity={0.58}
          metalness={0.78}
          roughness={0.26}
          wireframe
        />
      </mesh>

      <mesh rotation={[Math.PI / 2.8, 0.35, 0]}>
        <torusGeometry args={[1.68, 0.014, 8, 96]} />
        <meshBasicMaterial color="#baff2a" transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[0.15, Math.PI / 2.4, 0.65]}>
        <torusGeometry args={[2.08, 0.01, 8, 96]} />
        <meshBasicMaterial color="#d7ff78" transparent opacity={0.25} />
      </mesh>

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
          {quality.animate && <DataPulse end={node.position} offset={index * 0.14} />}
        </group>
      ))}

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
