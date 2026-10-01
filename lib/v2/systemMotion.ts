type MotionState = {
  progress: number;
};

const state: MotionState = {
  progress: 0,
};

export function setSystemProgress(progress: number) {
  state.progress = Math.min(1, Math.max(0, progress));
}

export function getSystemProgress() {
  return state.progress;
}
