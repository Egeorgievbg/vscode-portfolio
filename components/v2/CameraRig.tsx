import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { getSystemProgress } from '@/lib/v2/systemMotion';

export default function CameraRig() {
  const { camera } = useThree();

  useFrame(() => {
    const p = getSystemProgress();

    const push = THREE.MathUtils.smoothstep(p, 0.38, 0.92);
    const drift = THREE.MathUtils.smoothstep(p, 0.56, 1);

    const targetZ = THREE.MathUtils.lerp(9.1, 6.65, push);
    const targetX = THREE.MathUtils.lerp(0, -0.42, drift);
    const targetY = THREE.MathUtils.lerp(0, 0.18, drift);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.055);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.055);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.055);

    camera.lookAt(0, 0, 0);
  });

  return null;
}
