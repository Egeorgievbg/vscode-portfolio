export type DeviceQuality = {
  mode: 'high' | 'medium' | 'low' | 'static';
  dpr: number;
  particles: number;
  animate: boolean;
};

export function getDeviceQuality(): DeviceQuality {
  if (typeof window === 'undefined') {
    return { mode: 'static', dpr: 1, particles: 0, animate: false };
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) {
    return { mode: 'static', dpr: 1, particles: 0, animate: false };
  }

  const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;
  const width = window.innerWidth;

  if (coarsePointer || width < 760 || cores <= 4 || memory <= 4) {
    return { mode: 'low', dpr: 1, particles: 10, animate: true };
  }

  if (cores <= 8 || memory <= 8 || width < 1200) {
    return { mode: 'medium', dpr: 1.2, particles: 22, animate: true };
  }

  return { mode: 'high', dpr: 1.5, particles: 38, animate: true };
}

export function degradeQuality(current: DeviceQuality): DeviceQuality {
  if (current.mode === 'high') {
    return { mode: 'medium', dpr: 1.2, particles: 22, animate: true };
  }

  if (current.mode === 'medium') {
    return { mode: 'low', dpr: 1, particles: 10, animate: true };
  }

  return current;
}
