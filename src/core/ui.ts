/* Small shared UI pieces used by several pages */
import type { Level } from "../types";
import { DATA, LEVELS, findItem } from "../data";
import { h } from "./dom";
import { S } from "./state";
import { go } from "./router";
import type { AlignOp } from "./util";

export function levelTabs(page: string, active: Level): HTMLElement {
  return h("div", { class: "tabs" }, LEVELS.map(lv => h("button", { class: lv === active ? "active" : "", onclick: () => go(page + "/" + lv) }, lv, !S.unlocked[lv] ? " 🔒" : "")));
}
export function lockNote(lv: Level): HTMLElement | null {
  if (S.unlocked[lv]) return null;
  const prev = LEVELS[LEVELS.indexOf(lv) - 1];
  return h("div", { class: "notice warn small" }, `🔒 ${lv} is locked on your roadmap. Pass the ${prev} stage test (70%+) to unlock it – but you can still study ${lv} freely.`);
}
export const backLink = (path: string, label: string) => h("a", { href: "#/" + path, class: "small" }, "← " + label);
export function doneMark(id: string): HTMLElement | null { const d = S.done[id]; return d ? h("span", { class: "done-badge" }, "✓ " + d.score + "%") : null; }

export function renderDiff(ops: AlignOp[], { showExtra = true } = {}): HTMLElement {
  const d = h("div", { class: "diff passage" });
  ops.forEach(o => { if (o.t === "extra" && !showExtra) return; d.append(h("span", { class: o.t, title: o.t === "miss" ? "missed / wrong" : o.t === "extra" ? "extra word" : "correct" }, o.w), " "); });
  return d;
}

export function titleOf(id: string | null): string {
  if (!id) return "";
  for (const k of ["reading", "listening", "speaking", "writing", "grammar"] as const) { const it = findItem(k, id); if (it) return it.title; }
  const g = DATA.guides.find(x => x.id === id); if (g) return g.title;
  return id;
}
