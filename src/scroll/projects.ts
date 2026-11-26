import { content } from '../data/content';
import { animateElement } from './slides';
type ProjectRow = { name: HTMLElement; details: HTMLElement; height: number };
export function renderProjects(root: HTMLElement): { render: (step: number) => void; measure: () => void } {
  root.innerHTML = '<div class="eb r">Projects</div>' + content.projects.map((project) => `<div class="pr r"><div class="prh"><span class="yr">${project.year}</span><span class="pn">${project.name}</span><span class="ps">${project.stack}</span></div><div class="dt"><div class="dti"><div class="stk">${project.stack}</div><ul>${project.bullets.map((bullet) => `<li class="b">${bullet}</li>`).join('')}</ul></div></div></div>`).join('');
  const reveals = [...root.querySelectorAll<HTMLElement>('.r')]; const rows: ProjectRow[] = [...root.querySelectorAll<HTMLElement>('.pr')].map((row) => ({ name: row.querySelector<HTMLElement>('.pn')!, details: row.querySelector<HTMLElement>('.dt')!, height: 0 }));
  const measure = (): void => rows.forEach((row) => { row.height = row.details.querySelector<HTMLElement>('.dti')?.offsetHeight ?? 0; });
  window.addEventListener('resize', measure); document.fonts?.ready.then(measure); measure();
  return { measure, render: (step) => { const visible = step > 4.2 && step < 8.7; root.style.visibility = visible ? 'visible' : 'hidden'; if (!visible) return; reveals.forEach((element, index) => animateElement(element, index, step - 5, step - 8)); rows.forEach((row, index) => { const active = 1 - Math.min(1, Math.max(0, (Math.abs(step - (5 + index)) - .1) / .55)); row.name.style.opacity = (.38 + .62 * active).toFixed(2); row.details.style.height = `${active * row.height}px`; row.details.style.opacity = active.toFixed(2); }); } };
}
