import { Environment, PerformanceMonitor } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMemo, useState } from 'react';

import CameraRig from '@/components/v2/CameraRig';
import SystemCore from '@/components/v2/SystemCore';
import { degradeQuality, getDeviceQuality } from '@/lib/v2/deviceQuality';

export default function SystemCanvas() {
  const initial = useMemo(() => getDeviceQuality(), []);
  const [quality, setQuality] = useState(initial);

  if (quality.mode === 'static') {
    return (
      <div
        aria-hidden="true"
        style={{
          width: 'min(62vw, 720px)',
          aspectRatio: '1',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(186,255,42,.22) 0%, rgba(186,255,42,.055) 34%, transparent 70%)',
          border: '1px solid rgba(186,255,42,.18)',
          boxShadow: '0 0 120px rgba(186,255,42,.08)',
        }}
      />
    );
  }

  return (
    <Canvas
      dpr={quality.dpr}
      gl={{
        antialias: quality.mode !== 'low',
        alpha: true,
        powerPreference: 'high-performance',
      }}
      camera={{ position: [0, 0, 9.1], fov: 42, near: 0.1, far: 40 }}
      style={{ width: '100%', height: '100%' }}
    >
      <PerformanceMonitor
        onDecline={() => setQuality((current) => degradeQuality(current))}
      />

      <CameraRig />

      <ambientLight intensity={0.42} />
      <directionalLight position={[5, 5, 6]} intensity={1.35} color="#f3ffd6" />
      <pointLight
        position={[-4, -2, 4]}
        intensity={18}
        color="#9dff00"
        distance={11}
      />

      <SystemCore quality={quality} />

      {quality.mode === 'high' && (
        <Environment preset="city" environmentIntensity={0.24} />
      )}
    </Canvas>
  );
}
