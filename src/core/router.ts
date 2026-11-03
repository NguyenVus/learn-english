/* Hash router, header controls (level, Vietnamese toggle, theme) and page timers */
import type { Level } from "../types";
import { $, $$ } from "./dom";
import { S } from "./state";
import { stopRecognition, stopSpeech } from "./speech";

export type PageRenderer = (view: HTMLElement, ...args: string[]) => void;
const ROUTES: Record<string, { title: string; render: PageRenderer }> = {};
/** Pages call this once, when their module is imported */
export function registerPage(name: string, title: string, render: PageRenderer): void { ROUTES[name] = { title, render }; }

/** Level of the content currently on screen (controls the Vietnamese toggle) */
export let viewLevel: Level = S.level;
export function setViewLevel(lv: Level): void { viewLevel = lv; applyVi(); }

let timers: number[] = [];
/** Register an interval that is cleared automatically when the page changes */
export function addTimer(id: number): number { timers.push(id); return id; }
function clearTimers(): void { timers.forEach(t => clearInterval(t)); timers = []; }

let beforeRoute: (() => void)[] = [];
export function onBeforeRoute(fn: () => void): void { beforeRoute.push(fn); }

export function go(path: string): void { location.hash = "#/" + path; }
export function currentPage(): string { return (location.hash.replace(/^#\/?/, "") || "dashboard").split("/")[0]; }

export function route(): void {
  stopSpeech(); stopRecognition(); clearTimers(); beforeRoute.forEach(f => f());
  const parts = (location.hash.replace(/^#\/?/, "") || "dashboard").split("/").map(decodeURIComponent);
  const page = ROUTES[parts[0]] ? parts[0] : "dashboard";
  viewLevel = S.level;
  $$<HTMLAnchorElement>(".nav a").forEach(a => a.classList.toggle("active", a.dataset.page === page || (page === "placement" && a.dataset.page === "tests")));
  const title = $("#pageTitle"); if (title) title.textContent = ROUTES[page]?.title || "";
  const view = $("#view"); if (!view) return;
  view.innerHTML = "";
  ROUTES[page]?.render(view, ...parts.slice(1));
  applyVi(); closeSidebar(); window.scrollTo(0, 0);
}

export function applyVi(): void {
  const on = S.settings.vi[viewLevel] !== false;
  document.body.classList.toggle("vi-off", !on);
  const t = $<HTMLInputElement>("#viToggle"); if (t) t.checked = on;
}
export function applyTheme(): void {
  document.documentElement.setAttribute("data-theme", S.settings.theme);
  const b = $("#themeBtn"); if (b) b.textContent = S.settings.theme === "dark" ? "☀️" : "🌙";
}
export function closeSidebar(): void { $("#sidebar")?.classList.remove("open"); $("#overlay")?.classList.remove("show"); }
