import { content, sections, sectionOffsets, totalSteps } from './data/content';
import { startEngine } from './scroll/engine';
import { renderSlides } from './scroll/slides';
import { renderTimeline } from './scroll/timeline';
import { renderProjects } from './scroll/projects';
import { setupNav } from './scroll/nav';
import { renderBackground } from './scroll/background';
import './styles/tokens.css';
import './styles/base.css';
import './styles/nav.css';
import './styles/slides.css';
import './styles/timeline.css';
import './styles/projects.css';

type SlideItem = { element: HTMLElement; reveals: HTMLElement[]; numbers: HTMLElement[] };
const figureMarkup = (figures: readonly { value: number; suffix: string; label: string }[]): string => `<div class="figs">${figures.map((figure) => `<div class="fig r"><div class="n" data-value="${figure.value}" data-suffix="${figure.suffix}">0${figure.suffix}</div><div class="l">${figure.label}</div></div>`).join('')}</div>`;
const roleMarkup = (role: (typeof content.roles)[number]): string => `<div class="col"><h2 class="r">${role.company}</h2><div class="role r">${role.title}, ${role.start} to ${role.end}</div><ul>${role.bullets.map((bullet) => `<li class="b r">${bullet}</li>`).join('')}</ul></div><div class="col nm">${figureMarkup(role.figures)}</div>`;
const solo = (eyebrow: string, body: string): string => `<div class="col"><div class="eb r">${eyebrow}</div>${body}</div>`;
const slidesMarkup: Array<string | null> = [
  solo(content.about.eyebrow, `<div class="about-layout"><div class="about-copy"><h1 class="r">${content.name}</h1><div class="lead r">${content.about.lead}</div><p class="dim r">${content.about.education}</p><div class="btns r">${content.links.map((link) => `<a href="${link.href}"${link.external ? ' target="_blank" rel="noopener"' : ''}>${link.label}</a>`).join('')}</div></div><div class="portrait-frame"><img class="portrait r" src="${content.about.profileImage}" alt="${content.about.profileImageAlt}" /></div></div>`),
  ...content.roles.map((role) => roleMarkup(role)),
  null, null, null, null,
  solo(sections[3], `<h2 class="r">What I work with</h2><div class="sk">${content.skills.map((skill) => `<div class="g r"><div class="t">${skill.name}</div><div>${skill.items}</div></div>`).join('')}</div>`),
  solo(sections[4], `<h2 class="r" style="margin-bottom:1.6rem">Credentials</h2>${content.certifications.map((certification) => `<div class="ct r"><div>${certification.name}<div class="iss">${certification.issuer}</div></div>${certification.url ? `<a href="${certification.url}" target="_blank" rel="noopener">Verify</a>` : ''}</div>`).join('')}`),
  solo(sections[5], `<h2 class="r" style="margin-bottom:1.4rem">Get in touch</h2><a class="mail r" href="mailto:${content.email}">${content.email}</a><div class="cl r" style="margin-top:1.6rem">${content.links.filter((link) => link.external).map((link) => `<a href="${link.href}" target="_blank" rel="noopener">${link.label}</a>`).join('')}</div>`),
];

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root is missing');
app.innerHTML = '<div id="bgfix"></div><div id="glow"></div><nav id="nav"><span class="mark">' + content.name + '</span><div id="links"></div><div id="prog"></div></nav><div id="stage"></div><div id="tl" aria-hidden="true"></div><div id="pl" aria-hidden="true"></div>';
const stage = document.querySelector<HTMLElement>('#stage')!;
const items: Array<SlideItem | null> = [];
slidesMarkup.forEach((markup, index) => { if (!markup) { items.push(null); return; } const element = document.createElement('section'); element.className = `slide${index === 0 || index >= 9 ? ' solo' : ''}${index >= 1 && index <= 4 ? ' exp' : ''}`; element.innerHTML = markup; stage.appendChild(element); items.push({ element, reveals: [...element.querySelectorAll<HTMLElement>('.r')], numbers: [...element.querySelectorAll<HTMLElement>('.n')] }); });

const timeline = renderTimeline(document.querySelector<HTMLElement>('#tl')!);
const projects = renderProjects(document.querySelector<HTMLElement>('#pl')!);
let engine: ReturnType<typeof startEngine> | undefined;
const nav = setupNav(document.querySelector<HTMLElement>('#links')!, document.querySelector<HTMLElement>('#prog')!, (progress) => engine?.jumpTo(progress));
const glow = document.querySelector<HTMLElement>('#glow')!;
const track = document.createElement('div'); track.style.height = `${(totalSteps - 1) * 75 + 100}vh`; document.body.appendChild(track);

const portrait = document.querySelector<HTMLImageElement>('.portrait');
portrait?.addEventListener('error', () => portrait.style.display = 'none');

const screenReader = document.createElement('main'); screenReader.className = 'sr'; screenReader.innerHTML = `<h1>${content.name}</h1><p>${content.about.lead} ${content.about.education}</p><h2>${sections[1]}</h2><p>${content.roles.map((role) => `${role.company}, ${role.title}, ${role.start} to ${role.end}. ${role.bullets.join(' ')}`).join(' ')}</p><h2>${sections[2]}</h2><p>${content.projects.map((project) => `${project.name}: ${project.bullets.join(' ')}`).join(' ')}</p><h2>${sections[3]}</h2><p>${content.skills.map((skill) => `${skill.name}: ${skill.items}`).join('. ')}</p><h2>${sections[4]}</h2><p>${content.certifications.map((certification) => `${certification.name}, ${certification.issuer}`).join('. ')}</p><h2>${sections[5]}</h2><p><a href="mailto:${content.email}">${content.email}</a>, ${content.links.filter((link) => link.external).map((link) => `<a href="${link.href}">${link.label}</a>`).join(', ')}</p>`; document.body.appendChild(screenReader);

engine = startEngine(totalSteps, (progress, step) => { renderSlides(items, step); timeline.render(step); projects.render(step); nav.render(step, progress); renderBackground(glow, progress); });
