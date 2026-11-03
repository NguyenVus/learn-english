/* Reading and Listening pages */
import type { Level, ListeningItem } from "../types";
import { DATA, LEVELS } from "../data";
import { $$, h, put, levelChip, viBox } from "../core/dom";
import { S, save } from "../core/state";
import { alignWords, countWords } from "../core/util";
import { TTS, say, speakLines, stopSpeech, voicePanel } from "../core/speech";
import { recordScore } from "../core/progress";
import { go, registerPage, setViewLevel } from "../core/router";
import { backLink, doneMark, lockNote, levelTabs, renderDiff } from "../core/ui";
import { clickableText, showWordPopup } from "../core/dictionary";
import { quiz } from "../core/quiz";
import { guideBox } from "./guides";

const asLevel = (lv: string | undefined): Level => (LEVELS.includes(lv as Level) ? (lv as Level) : S.level);
const TYPE_NAMES: Record<string, string> = { mc: "multiple choice", tf: "true/false", tfng: "true/false/not given", gap: "gap-fill", match: "matching", head: "matching headings", gaptext: "gap-fill" };

/* ===================== READING ===================== */
registerPage("reading", "Reading", (view, lvArg, id) => {
  const lv = asLevel(lvArg); setViewLevel(lv);
  if (id) return readingItem(view, lv, id);
  put(view, levelTabs("reading", lv), lockNote(lv),
    h("p", { class: "muted" }, { A2: "Short texts (100–200 words) about everyday topics.", B1: "Longer texts (250–400 words) about work, study, health, technology and experiences.", B2: "Complex texts (400–600 words) about society, media, education, science and opinions." }[lv]),
    viBox("Mẹo: Nhấn vào bất kỳ từ nào trong bài để xem nghĩa, nghe phát âm và lưu vào danh sách từ vựng."));
  put(view, h("div", { class: "grid g2" }, DATA.reading[lv].map(p => h("div", { class: "list-item", onclick: () => go(`reading/${lv}/${p.id}`) },
    h("span", { style: "font-size:1.5rem" }, "📖"), h("div", { style: "flex:1" }, h("b", {}, p.title), h("div", { class: "small muted" }, `${p.topic} · ${countWords(p.text)} words · ${p.q.length} questions`)), doneMark(p.id)))));
});

function readingItem(view: HTMLElement, lv: Level, id: string): void {
  const p = DATA.reading[lv].find(x => x.id === id); if (!p) { put(view, h("p", {}, "Not found.")); return; }
  const hasHead = p.q.some(q => q.t === "head");
  const passage = h("div", { class: "passage" });
  p.text.split(/\n\s*\n/).forEach((para, i) => passage.append(h("p", {}, hasHead ? h("span", { class: "plabel" }, String.fromCharCode(65 + i)) : null, clickableText(para.trim()))));
  const types = [...new Set(p.q.map(q => TYPE_NAMES[q.t]))].join(", ");
  put(view, backLink("reading/" + lv, `All ${lv} reading`),
    h("div", { class: "card" }, h("div", { class: "row" }, levelChip(lv), h("span", { class: "chip" }, p.topic), h("span", { class: "chip" }, countWords(p.text) + " words"), h("span", { class: "spacer" }),
      h("button", { class: "btn sm", onclick: () => void say(p.text.replace(/\n+/g, " ")) }, "🔊 Listen"), h("button", { class: "btn sm", onclick: stopSpeech }, "⏹")),
      h("h1", {}, p.title), viBox("Đọc lướt để nắm ý chính trước, sau đó đọc kỹ. Nhấn vào từ mới để tra nghĩa."), passage),
    h("div", { class: "card" }, h("h2", {}, "Questions"), h("p", { class: "small muted" }, "Question types: " + types),
      hasHead ? viBox("Matching headings: chọn tiêu đề phù hợp nhất cho mỗi đoạn (A, B, C...). Có tiêu đề thừa.") : null,
      p.q.some(q => q.t === "tfng") ? viBox("True = đúng theo bài; False = trái với bài; Not Given = bài không đề cập.") : null,
      guideBox(["gd-read-skills", ...p.q.map(q => DATA.guideMap.reading[q.t])]),
      quiz(p.q, { source: p.text, onDone: s => recordScore("reading", s, p.id) })),
    h("div", { class: "card" }, h("h3", {}, "Key words"), h("div", { class: "row" }, Object.entries(p.g || {}).map(([w, [vi]]) =>
      h("span", { class: "chip", style: "cursor:pointer", title: vi, onclick: (e: MouseEvent) => showWordPopup(w, "", e.target as Element) }, w)))));
}

/* ===================== LISTENING ===================== */
/** Play / pause / stop + accent and speed + voice status */
export function playerControls(getLines: () => [string, string][], speakers: Record<string, string>, onLine?: (i: number) => void): HTMLElement {
  const accent = h("select", {}, h("option", { value: "US" }, "🇺🇸 US accent"), h("option", { value: "UK" }, "🇬🇧 UK accent"));
  accent.value = S.settings.accent;
  const rate = h("select", {}, [0.75, 1, 1.25].map(r => h("option", { value: r }, r + "x")));
  rate.value = String(S.settings.rate);
  const note = h("span", { class: "small muted" });
  const upd = () => { note.textContent = !("speechSynthesis" in window) ? "Speech synthesis not supported in this browser." : TTS.hasAccent(S.settings.accent) ? "" : `(${S.settings.accent} voice not available – using another English voice)`; };
  accent.onchange = () => { S.settings.accent = accent.value === "UK" ? "UK" : "US"; save(); upd(); };
  rate.onchange = () => { S.settings.rate = Number(rate.value); save(); };
  setTimeout(upd, 300);
  const pauseBtn = h("button", { class: "btn", onclick: () => {
    if (speechSynthesis.paused) { speechSynthesis.resume(); pauseBtn.textContent = "⏸ Pause"; } else { speechSynthesis.pause(); pauseBtn.textContent = "▶ Resume"; }
  } }, "⏸ Pause");
  return h("div", {}, h("div", { class: "player" },
    h("button", { class: "btn primary", onclick: () => { pauseBtn.textContent = "⏸ Pause"; void speakLines(getLines(), speakers, onLine); } }, "▶ Play"),
    pauseBtn, h("button", { class: "btn", onclick: () => { stopSpeech(); onLine?.(-1); } }, "⏹ Stop"),
    accent, rate, note), voicePanel());
}
export const transcriptText = (L: ListeningItem) => L.lines.map(x => x[1]).join(" ");

registerPage("listening", "Listening", (view, lvArg, id) => {
  const lv = asLevel(lvArg); setViewLevel(lv);
  if (id) return listeningItem(view, lv, id);
  put(view, levelTabs("listening", lv), lockNote(lv),
    h("p", { class: "muted" }, { A2: "Short, simple dialogues, messages and announcements.", B1: "Everyday conversations, advice and radio programmes.", B2: "Discussions, interviews and talks with complex ideas." }[lv]),
    viBox("Bài nghe được đọc bằng giọng máy (Web Speech API). Hãy dùng Chrome để có giọng đọc tự nhiên hơn. Lời thoại (transcript) chỉ hiện sau khi bạn trả lời."),
    !("speechSynthesis" in window) ? h("div", { class: "notice bad" }, "Your browser does not support speech synthesis. Please use Chrome or Edge.") : null,
    h("div", { class: "grid g2" }, DATA.listening[lv].map(l => h("div", { class: "list-item", onclick: () => go(`listening/${lv}/${l.id}`) },
      h("span", { style: "font-size:1.5rem" }, "🎧"), h("div", { style: "flex:1" }, h("b", {}, l.title), h("div", { class: "small muted" }, `${l.type} · ${countWords(transcriptText(l))} words`)), doneMark(l.id)))));
});

function listeningItem(view: HTMLElement, lv: Level, id: string): void {
  const L = DATA.listening[lv].find(x => x.id === id); if (!L) return;
  const transcript = h("div", { class: "transcript card hidden" }, h("h3", {}, "Transcript"),
    L.lines.map(([k, t]) => h("div", { class: "line" }, h("b", {}, (L.speakers[k] || k) + ": "), t)));
  const onLine = (i: number) => $$(".line", transcript).forEach((el, j) => el.classList.toggle("speaking", i === j));
  const parts: Record<string, number> = {};
  const finish = (part: string, s: number) => { parts[part] = s; const vals = Object.values(parts); recordScore("listening", vals.reduce((a, b) => a + b, 0) / vals.length, L.id); };
  const showT = () => transcript.classList.remove("hidden");
  const source = transcriptText(L);

  const dictIn = h("textarea", { style: "min-height:80px", placeholder: "Type what you hear…" });
  const dictOut = h("div");
  const checkDictation = () => {
    const r = alignWords(L.dict, dictIn.value); dictOut.innerHTML = "";
    put(dictOut, h("div", { class: "score-box notice " + (r.score >= 80 ? "ok" : "warn") }, `Accuracy: ${r.score}% (${r.correct}/${r.total} words)`), renderDiff(r.ops),
      h("div", { class: "small muted" }, h("b", {}, "Correct sentence: "), L.dict),
      h("div", { class: "small" }, h("span", { class: "diff" }, h("span", { class: "ok" }, "green"), " = correct · ", h("span", { class: "miss" }, "red"), " = missed/wrong · ", h("span", { class: "extra" }, "orange"), " = extra")));
    finish("dict", r.score);
  };
  put(view, backLink("listening/" + lv, `All ${lv} listening`),
    h("div", { class: "card" }, h("div", { class: "row" }, levelChip(lv), h("span", { class: "chip" }, L.type)), h("h1", {}, L.title),
      h("p", { class: "small muted" }, "Speakers: " + Object.values(L.speakers).join(", ")),
      playerControls(() => L.lines, L.speakers, onLine),
      viBox("Nghe 1–2 lần trước khi trả lời. Có thể chỉnh tốc độ 0.75x nếu thấy khó."),
      h("button", { class: "btn sm", onclick: () => transcript.classList.toggle("hidden") }, "📄 Show / hide transcript")),
    h("div", { class: "card" }, h("h2", {}, "Part 1 · Multiple choice"), guideBox(["gd-listen-general", "gd-listen-mc"]),
      quiz(L.q, { source, listening: true, onDone: s => { finish("mc", s); showT(); } })),
    h("div", { class: "card" }, h("h2", {}, "Part 2 · Gap-fill while listening"), h("p", { class: "small muted" }, "Play the recording again and complete the sentences."), guideBox(["gd-listen-gap"]),
      quiz([{ t: "gaptext", text: L.gap }], { source, listening: true, onDone: s => { finish("gap", s); showT(); } })),
    h("div", { class: "card" }, h("h2", {}, "Part 3 · Dictation"), h("p", { class: "small muted" }, "Listen to one sentence and type exactly what you hear."),
      viBox("Chính tả: nghe và gõ lại chính xác. Từ sai/thiếu sẽ được tô đỏ, từ thừa gạch ngang."), guideBox(["gd-listen-dict"]),
      h("div", { class: "row", style: "margin-bottom:8px" }, h("button", { class: "btn", onclick: () => void say(L.dict) }, "▶ Play sentence"), h("button", { class: "btn", onclick: () => void say(L.dict, 0.7) }, "🐢 Slow")),
      dictIn, h("div", { class: "row", style: "margin-top:8px" }, h("button", { class: "btn primary", onclick: checkDictation }, "Check dictation")), dictOut),
    transcript);
}
