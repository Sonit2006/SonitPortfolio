import { content } from '../data/content';
import { animateElement, } from './slides';
import { lerp, reducedMotion, smoothstep } from './engine';
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const span = 24; const playStops = [3, 8, 10.5, 19];
export function renderTimeline(root: HTMLElement): { render: (step: number) => void } {
  let html = '<div class="eb r">Experience</div><div class="tlg"><div class="tw"><div class="axis r">';
  for (let k = 0; k <= span; k += 3) html += `<span class="tk${k % 12 === 0 ? ' y' : ''}" style="left:${k / span * 100}%"></span>`;
  html += '<span class="yl" style="left:0">2025</span><span class="yl" style="left:50%">2026</span></div>';
  const lanes = [...new Map(content.roles.map((role) => [role.lane, content.roles.filter((item) => item.lane === role.lane)])).entries()];
  lanes.forEach(([lane, roles]) => { html += `<div class="lane r"><div class="ll"><span class="fu">${lane === 'Research' ? 'Forward Data Lab' : lane}</span><span class="sh">${lane}</span></div>`; roles.forEach((role) => { html += `<div class="bar" style="left:${role.startMonth / span * 100}%;width:${(role.endMonth - role.startMonth) / span * 100}%"><div class="fill" data-a="${role.startMonth}" data-b="${role.endMonth}"></div></div>`; }); if (roles.some((role) => role.present)) html += '<span class="nw">present</span>'; html += '</div>'; });
  html += '<div class="ph"><span class="pd"></span></div></div></div>'; root.innerHTML = html;
  const reveals = [...root.querySelectorAll<HTMLElement>('.r')]; const fillEls = [...root.querySelectorAll<HTMLElement>('.fill')]; const playhead = root.querySelector<HTMLElement>('.ph'); const date = root.querySelector<HTMLElement>('.pd');
  if (!playhead || !date) throw new Error('Timeline markup could not be initialized');
  return { render: (step) => { const visible = step > .2 && step < 4.0; root.style.visibility = visible ? 'visible' : 'hidden'; if (!visible) return; reveals.forEach((element, index) => animateElement(element, index, step - 1, step - 4)); const position = Math.min(Math.max(step - 1, 0), 2.9999); const stopIndex = Math.floor(position); const playMonth = step <= 1 ? playStops[0] : step >= 4 ? playStops[3] : lerp(playStops[stopIndex], playStops[stopIndex + 1], reducedMotion ? (position - stopIndex) : smoothstep(.2, .8, position - stopIndex)); playhead.style.left = `${playMonth / span * 100}%`; date.textContent = `${months[Math.floor(playMonth) % 12]} ${2025 + Math.floor(playMonth / 12)}`; fillEls.forEach((fill) => { const a = Number(fill.dataset.a); const b = Number(fill.dataset.b); fill.style.width = `${Math.min(1, Math.max(0, (playMonth - a) / (b - a))) * 100}%`; }); } };
}
