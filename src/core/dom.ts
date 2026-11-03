/* Tiny typed DOM helpers – no framework */
import type { Level } from "../types";

export type Child = Node | string | number | null | undefined | false | Child[];
type Handler = (ev: any) => void;
export type Attrs = Record<string, string | number | boolean | null | undefined | Handler>;

export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

function flatten(children: Child[], out: (Node | string)[] = []): (Node | string)[] {
  for (const c of children) {
    if (c == null || c === false) continue;
    if (Array.isArray(c)) flatten(c, out);
    else out.push(typeof c === "number" ? String(c) : c);
  }
  return out;
}
/** Append children, ignoring null / false (handy for optional parts) */
export function put(parent: ParentNode, ...children: Child[]): void { parent.append(...flatten(children)); }

/** Create an element: h("button", {class: "btn", onclick: fn}, "Text") */
export function h<K extends keyof HTMLElementTagNameMap>(tag: K, attrs?: Attrs | null, ...children: Child[]): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === "class") el.className = String(v);
    else if (k === "html") el.innerHTML = String(v);
    else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v as EventListener);
    else if (k === "style") el.style.cssText = String(v);
    else el.setAttribute(k, v === true ? "" : String(v));
  }
  put(el, ...children);
  return el;
}

export function toast(msg: string, type?: "bad"): void {
  const t = h("div", { style: type === "bad" ? "background:var(--bad);color:#fff" : "" }, msg);
  $("#toast")?.append(t);
  setTimeout(() => t.remove(), 3200);
}
export const levelChip = (lv: Level) => h("span", { class: "chip lv " + lv }, lv);
export const bar = (p: number, color?: string) => h("div", { class: "bar" }, h("i", { style: `width:${Math.max(0, Math.min(100, p))}%;${color ? "background:" + color : ""}` }));
/** Vietnamese explanation box (hidden when Vietnamese is switched off) */
export const viBox = (text?: string | null) => (text ? h("div", { class: "vi" }, text) : null);
