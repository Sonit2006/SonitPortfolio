export function renderBackground(glow: HTMLElement, progress: number): void { glow.style.transform = `translate(${-25 + progress * 85}vw,${-30 + progress * 70}vh)`; }
