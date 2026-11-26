export type RenderFrame = (scrollProgress: number, step: number) => void;
export const smoothstep = (a: number, b: number, value: number): number => { const x = Math.min(1, Math.max(0, (value - a) / (b - a))); return x * x * (3 - 2 * x); };
export const lerp = (a: number, b: number, amount: number): number => a + (b - a) * amount;
export const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

export type Engine = { jumpTo: (progress: number) => void };

export function startEngine(totalSteps: number, render: RenderFrame): Engine {
  let target = 0; let current = 0; let lastKey = '';
  const readScroll = (): void => { const max = document.documentElement.scrollHeight - window.innerHeight; target = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0; };
  window.addEventListener('scroll', readScroll, { passive: true }); readScroll(); current = target;
  const frame = (): void => { current += (target - current) * (reducedMotion ? 1 : .12); const step = Math.min(totalSteps - 1, current * (totalSteps - 1)); const key = current.toFixed(4); if (key !== lastKey) { render(current, step); lastKey = key; } requestAnimationFrame(frame); };
  render(0, 0); frame();
  return { jumpTo: (progress: number): void => { target = Math.min(1, Math.max(0, progress)); current = target; lastKey = ''; render(current, current * (totalSteps - 1)); } };
}
