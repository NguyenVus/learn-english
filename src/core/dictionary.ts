/* Offline dictionary (word banks + reading glossaries), saved words and spaced repetition */
import type { Level, VocabCard } from "../types";
import { DATA, LEVELS } from "../data";
import { $, $$, h, put, toast } from "./dom";
import { S, save } from "./state";
import { DAY } from "./util";
import { say } from "./speech";
import { checkBadges } from "./progress";

interface DictEntry { w: string; vi: string; en: string; pos?: string; ex?: string; level: Level }
const DICT: Record<string, DictEntry> = {};
export function buildDict(): void {
  for (const lv of LEVELS) {
    DATA.vocab[lv].forEach(t => t.words.forEach(([w, pos, vi, en, ex]) => { const k = w.toLowerCase(); DICT[k] ??= { w, pos, vi, en, ex, level: lv }; }));
    DATA.reading[lv].forEach(p => Object.entries(p.g || {}).forEach(([w, [vi, en]]) => { const k = w.toLowerCase(); DICT[k] ??= { w, vi, en, level: lv }; }));
  }
  DATA.phrasal.forEach(([w, vi, ex, lv]) => { DICT[w] ??= { w, vi, en: "phrasal verb", ex, level: lv }; });
  DATA.toeic600.forEach(t => t.words.forEach(([w, pos, vi, en, ex]) => { const k = w.toLowerCase(); DICT[k] ??= { w, pos, vi, en, ex, level: "B1" }; }));
}
/** Look a word up, trying simple English endings (-s, -ed, -ing, -ies…) */
export function lookup(word: string): DictEntry | null {
  const w = word.toLowerCase().replace(/[’']s$/, "").replace(/[’']/g, "'");
  const c = [w, w.replace(/ies$/, "y"), w.replace(/es$/, ""), w.replace(/s$/, ""), w.replace(/ied$/, "y"), w.replace(/ed$/, ""), w.replace(/ed$/, "e"), w.replace(/(.)\1ed$/, "$1"),
    w.replace(/ing$/, ""), w.replace(/ing$/, "e"), w.replace(/(.)\1ing$/, "$1"), w.replace(/ier$/, "y"), w.replace(/er$/, ""), w.replace(/est$/, ""), w.replace(/ly$/, ""), w.replace(/ves$/, "f")];
  for (const k of c) if (DICT[k]) return DICT[k];
  return null;
}

/* ---------- Saved words / flashcards ---------- */
const BOX_DAYS: Record<number, number> = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 14, 6: 30 };
export interface NewWord { w: string; vi?: string; en?: string; ex?: string; pos?: string; level?: Level }
export function addWord(e: NewWord): boolean {
  const key = e.w.toLowerCase().trim(); if (!key || S.vocab[key]) return false;
  S.vocab[key] = { w: e.w.trim(), vi: e.vi || "", en: e.en || "", ex: e.ex || "", pos: e.pos || "", level: e.level || S.level, box: 1, due: Date.now(), added: Date.now(), right: 0, wrong: 0 };
  checkBadges(); save(); return true;
}
/** 0 = again, 1 = hard, 2 = good, 3 = easy. Wrong cards come back within a minute. */
export function gradeCard(card: VocabCard, g: 0 | 1 | 2 | 3): void {
  if (g === 0) { card.box = 1; card.wrong++; card.due = Date.now() + 60 * 1000; }
  else if (g === 1) { card.due = Date.now() + (card.box <= 1 ? 10 * 60 * 1000 : DAY); card.right++; }
  else { card.box = Math.min(6, card.box + (g === 3 ? 2 : 1)); card.right++; card.due = Date.now() + BOX_DAYS[card.box] * DAY; }
  save();
}

/* ---------- Word popup ---------- */
export function hidePopup(): void { $("#popup")?.classList.add("hidden"); }
export function showWordPopup(word: string, sentence: string, anchor: Element): void {
  const pop = $("#popup"); if (!pop) return;
  const info = lookup(word); const key = info ? info.w : word;
  const example = info?.ex || sentence;
  const viIn = h("input", { type: "text", placeholder: "Your Vietnamese meaning…", style: "width:100%;margin-top:6px" });
  pop.innerHTML = "";
  put(pop,
    h("div", { class: "row" }, h("h4", {}, key), h("button", { class: "btn sm", onclick: () => void say(key, 0.85) }, "🔊"), h("span", { class: "spacer" }), h("button", { class: "btn sm", onclick: hidePopup }, "✕")),
    info?.pos ? h("div", { class: "small muted" }, info.pos) : null,
    info ? h("div", {}, h("div", {}, "🇻🇳 ", h("b", {}, info.vi)), h("div", { class: "small" }, "🇬🇧 ", info.en))
      : h("div", { class: "small muted" }, "No offline definition for this word. ", h("a", { href: "https://dictionary.cambridge.org/dictionary/english-vietnamese/" + encodeURIComponent(word.toLowerCase()), target: "_blank", rel: "noopener" }, "Open Cambridge Dictionary ↗"), viIn),
    example ? h("div", { class: "ctx small", style: "margin-top:8px" }, h("b", {}, "Example: "), example) : null,
    h("div", { class: "row", style: "margin-top:8px" },
      S.vocab[key.toLowerCase()] ? h("span", { class: "done-badge" }, "✓ In your word list")
        : h("button", { class: "btn primary sm", onclick: () => {
          addWord({ w: key, vi: info ? info.vi : viIn.value, en: info?.en, ex: example, pos: info?.pos, level: info?.level });
          toast("Saved: " + key); hidePopup();
          $$(".w").forEach(s => { if (s.textContent?.toLowerCase() === word.toLowerCase()) s.classList.add("saved"); });
        } }, "＋ Save to my words"),
      example ? h("button", { class: "btn sm", onclick: () => void say(example) }, "🔊 Example") : null));
  pop.classList.remove("hidden");
  const r = anchor.getBoundingClientRect(); const pw = Math.min(320, innerWidth * 0.92);
  pop.style.left = Math.max(8, Math.min(innerWidth - pw - 8, r.left)) + "px";
  const top = r.bottom + 8; pop.style.top = (top + 260 > innerHeight ? Math.max(8, r.top - 270) : top) + "px";
}

/** Turn a paragraph into clickable words */
export function clickableText(text: string): DocumentFragment {
  const frag = document.createDocumentFragment();
  const sentences = text.match(/[^.!?]+[.!?]*["”]?\s*/g) || [text];
  sentences.forEach(sent => {
    sent.split(/([A-Za-z][A-Za-z'’-]*)/).forEach(part => {
      if (/^[A-Za-z]/.test(part)) {
        const span = h("span", { class: "w" + (S.vocab[part.toLowerCase()] ? " saved" : "") }, part);
        span.addEventListener("click", ev => { ev.stopPropagation(); showWordPopup(part.replace(/[’']s$/, ""), sent.trim(), span); });
        frag.append(span);
      } else frag.append(part);
    });
  });
  return frag;
}
