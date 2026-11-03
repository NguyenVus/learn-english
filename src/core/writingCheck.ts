/* Automatic writing checks (no external API) and the feedback table */
import type { Level, WritingTaskBase } from "../types";
import { DATA, LEVELS } from "../data";
import { h, bar, viBox } from "./dom";
import { countWords, escapeRx } from "./util";

const STOP = new Set("the a an and or but so to of in on at for with is are was were be been am i you he she it we they my your his her its our their this that these those there here have has had do does did not no yes very can will would could should from by as if then than about into up down out over just also me him us them what which who when where why how all some any more most much many one two get got go went like".split(" "));
/** Typical mistakes of Vietnamese learners: [pattern, advice] */
const MISTAKE_RX: [RegExp, string][] = [
  [/\bi am agree\b/i, "Say “I agree”, not “I am agree”."],
  [/\bdiscuss about\b/i, "“discuss” is used without “about”."],
  [/\bmore (better|worse|easier|bigger|cheaper|faster|happier)\b/i, "Don't use “more” with -er comparatives."],
  [/\b(he|she|it) (don't|go|do|like|want|live|work|have|study|play)\b/i, "Check the third-person -s: he/she/it goes, doesn't, has…"],
  [/\bpeople is\b/i, "“people” is plural: people are."],
  [/\bexplain me\b/i, "Say “explain to me” / “explain something to someone”."],
  [/\bsince \d+ (years|months|days|weeks)\b/i, "Use “for” with a period of time: for 3 years."],
  [/\bmake (my |the |your )?homework\b/i, "We say “do homework”."],
  [/\bvery like\b/i, "Say “really like” or “like … very much”."],
  [/\bdespite of\b/i, "“despite” has no “of” (or use “in spite of”)."],
  [/\b(an? )(information|advice|furniture|news|homework|luggage|equipment)\b/i, "This noun is uncountable – no “a/an”."],
  [/\b(informations|advices|furnitures|homeworks|luggages|equipments)\b/i, "Uncountable nouns have no plural -s."],
  [/\bdidn'?t (went|saw|had|did|came|bought|ate|was)\b/i, "After “didn't” use the base verb (didn't go)."],
  [/\bdepend of\b/i, "Say “depend on”."],
  [/\bmarried with\b/i, "Say “married to”."],
  [/\b(can|must|should|will) to\b/i, "No “to” after modal verbs (can go, must go)."],
  [/\bif \w+ will\b/i, "Don't use “will” in the if-clause: If it rains, …"],
  [/\blook forward to (see|meet|hear)\b/i, "look forward to + -ing: look forward to seeing."],
  [/(^|[\s"(])i(?=[\s',.!?])/, "Write the pronoun “I” as a capital letter."]
];
export const linkersUpTo = (lv: Level) => LEVELS.slice(0, LEVELS.indexOf(lv) + 1).flatMap(l => DATA.linkers[l]);
function levelWordSet(lv: Level): Set<string> { const set = new Set<string>(); DATA.vocab[lv].forEach(t => t.words.forEach(w => set.add(w[0].toLowerCase()))); return set; }

export interface Rubric { task: number; organisation: number; vocabulary: number; grammar: number }
export interface WritingAnalysis {
  words: number; paragraphs: number; sentences: number; longSent: string[]; linkers: string[];
  repeated: [string, number][]; levelWords: string[]; keys: string[]; mistakes: string[]; rub: Rubric; total: number;
}
export function analyseWriting(text: string, task: WritingTaskBase, lv: Level): WritingAnalysis {
  const words = countWords(text);
  const paragraphs = text.split(/\n+/).filter(p => p.trim()).length;
  const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim());
  const longLimit = lv === "A2" ? 20 : lv === "B1" ? 28 : 35;
  const longSent = sentences.filter(s => countWords(s) > longLimit);
  const lower = " " + text.toLowerCase().replace(/[’]/g, "'") + " ";
  const linkers = [...new Set(linkersUpTo(lv).filter(k => new RegExp("\\b" + k.replace(/ /g, "\\s+") + "\\b", "i").test(lower)))];
  const freq: Record<string, number> = {};
  (text.toLowerCase().match(/[a-z']+/g) || []).forEach(w => { if (w.length > 3 && !STOP.has(w)) freq[w] = (freq[w] || 0) + 1; });
  const repeated = Object.entries(freq).filter(([, n]) => n >= (lv === "A2" ? 3 : 4)).sort((a, b) => b[1] - a[1]);
  const levelWords = [...levelWordSet(lv)].filter(w => new RegExp("\\b" + escapeRx(w) + "\\b", "i").test(lower));
  const keys = (task.k || []).filter(k => lower.includes(k.toLowerCase()));
  const mistakes = MISTAKE_RX.filter(([rx]) => rx.test(text)).map(m => m[1]);
  const capsOk = sentences.filter(s => /^["'(]?[A-Z0-9]/.test(s.trim())).length;
  const unique = new Set(text.toLowerCase().match(/[a-z']+/g) || []).size; const ttr = words ? unique / words : 0;
  // Rubric estimates (0–5)
  const inRange = words >= task.min && words <= task.max ? 1 : words >= task.min * 0.8 && words <= task.max * 1.25 ? 0.6 : words >= task.min * 0.5 ? 0.3 : 0;
  const keyCov = task.k?.length ? keys.length / task.k.length : 1;
  const expPara = lv === "A2" ? 1 : lv === "B1" ? 2 : 3, expLink = lv === "A2" ? 2 : lv === "B1" ? 3 : 5;
  const rub: Rubric = {
    task: Math.round(5 * (0.55 * inRange + 0.45 * keyCov)),
    organisation: Math.round(5 * (0.45 * Math.min(1, paragraphs / expPara) + 0.55 * Math.min(1, linkers.length / expLink))),
    vocabulary: Math.max(0, Math.round(5 * (0.5 * Math.min(1, ttr / (lv === "A2" ? 0.55 : 0.5)) + 0.5 * Math.min(1, levelWords.length / (lv === "A2" ? 3 : 4)))) - (repeated.length > 2 ? 1 : 0)),
    grammar: Math.max(0, Math.round(5 * (sentences.length ? capsOk / sentences.length : 0)) - Math.min(3, mistakes.length) - (longSent.length > 1 ? 1 : 0))
  };
  if (!words) (Object.keys(rub) as (keyof Rubric)[]).forEach(k => { rub[k] = 0; });
  const total = Math.round(((rub.task + rub.organisation + rub.vocabulary + rub.grammar) / 20) * 100);
  return { words, paragraphs, sentences: sentences.length, longSent, linkers, repeated, levelWords, keys, mistakes, rub, total };
}

const RUBRIC_DESC: Record<keyof Rubric, string> = { task: "Covers the task, right length", organisation: "Paragraphs and linking words", vocabulary: "Range of words, level vocabulary", grammar: "Accuracy, punctuation, sentences" };
export function writingFeedback(a: WritingAnalysis, task: WritingTaskBase, lv: Level): HTMLElement {
  const row = (ok: boolean, label: string, detail: string | Node) => h("tr", {}, h("td", {}, ok ? "✅" : "⚠️"), h("td", {}, h("b", {}, label)), h("td", {}, detail));
  const kLen = task.k?.length || 0;
  return h("div", {},
    h("h3", {}, "Automatic checks"),
    h("table", { class: "wfb" },
      row(a.words >= task.min && a.words <= task.max, "Word count", `${a.words} words (target ${task.min}–${task.max})`),
      row(a.paragraphs >= (lv === "A2" ? 1 : lv === "B1" ? 2 : 3), "Paragraphs", String(a.paragraphs)),
      row(a.linkers.length >= (lv === "A2" ? 2 : lv === "B1" ? 3 : 5), "Linking words", a.linkers.length ? a.linkers.join(", ") : "none found"),
      row(!a.repeated.length, "Repeated words", a.repeated.length ? a.repeated.map(([w, n]) => `${w} ×${n}`).join(", ") + " – try synonyms" : "no obvious repetition"),
      row(!a.longSent.length, "Very long sentences", a.longSent.length ? a.longSent.length + " sentence(s) are very long – consider splitting them" : "none"),
      row(a.levelWords.length >= 3, lv + " vocabulary", a.levelWords.length ? a.levelWords.slice(0, 12).join(", ") : "none from the " + lv + " word banks"),
      row(a.keys.length >= Math.ceil(kLen * 0.6), "Task points (keywords)", `${a.keys.length}/${kLen} found`),
      row(!a.mistakes.length, "Common mistakes", a.mistakes.length ? h("ul", {}, a.mistakes.map(m => h("li", {}, m))) : "none detected")),
    h("h3", {}, "Rubric (estimate) · " + a.total + "%"),
    h("table", {}, (Object.keys(a.rub) as (keyof Rubric)[]).map(k => h("tr", {}, h("td", {}, h("b", {}, k[0].toUpperCase() + k.slice(1))), h("td", { class: "small muted" }, RUBRIC_DESC[k]), h("td", { style: "width:40%" }, bar(a.rub[k] * 20)), h("td", {}, a.rub[k] + "/5")))),
    viBox("Điểm tự động chỉ mang tính tham khảo (máy không hiểu nội dung như giáo viên). Hãy so sánh với bài mẫu và dùng bảng tự đánh giá bên dưới."));
}
