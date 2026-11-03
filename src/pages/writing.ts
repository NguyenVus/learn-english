/* Writing tasks: live word count, automatic checks, model answer, checklist, saved texts */
import type { Level } from "../types";
import { DATA, LEVELS } from "../data";
import { h, put, levelChip, toast, viBox } from "../core/dom";
import { S, save } from "../core/state";
import { countWords } from "../core/util";
import { recordScore } from "../core/progress";
import { go, registerPage, route, setViewLevel } from "../core/router";
import { backLink, doneMark, levelTabs, lockNote } from "../core/ui";
import { analyseWriting, linkersUpTo, writingFeedback } from "../core/writingCheck";
import { guideBox } from "./guides";

registerPage("writing", "Writing", (view, lvArg, id) => {
  if (lvArg === "saved") return savedWritings(view);
  const lv: Level = LEVELS.includes(lvArg as Level) ? (lvArg as Level) : S.level; setViewLevel(lv);
  if (id) return writingTask(view, lv, id);
  put(view, levelTabs("writing", lv), lockNote(lv),
    h("div", { class: "row" }, h("p", { class: "muted", style: "flex:1" }, { A2: "Short messages, notes and simple emails (30–60 words).", B1: "Informal emails, short stories, articles and reviews (80–120 words).", B2: "Formal and informal emails, essays, reviews, reports and proposals (140–250 words)." }[lv]),
      h("a", { href: "#/writing/saved", class: "btn sm" }, `📁 My saved writing (${S.writings.length})`)),
    DATA.writing[lv].map(t => h("div", { class: "list-item", onclick: () => go(`writing/${lv}/${t.id}`) },
      h("span", { style: "font-size:1.5rem" }, "✍️"), h("div", { style: "flex:1" }, h("b", {}, t.title), h("div", { class: "small muted" }, `${t.type} · ${t.min}–${t.max} words`)), doneMark(t.id))));
});

const CHECKLIST = ["I answered every part of the task", "I used paragraphs", "I used linking words", "I checked verb tenses and -s endings", "I checked spelling and punctuation", "I used some new vocabulary", "The style (formal/informal) is right for the reader"];

function writingTask(view: HTMLElement, lv: Level, id: string): void {
  const T = DATA.writing[lv].find(x => x.id === id); if (!T) return;
  const draftKey = "draft_" + T.id;
  const ta = h("textarea", { placeholder: "Write your answer here…", spellcheck: "true" }); ta.value = localStorage.getItem(draftKey) || "";
  const counter = h("div", { class: "small muted" });
  const upd = () => { const n = countWords(ta.value); counter.textContent = `${n} words · target ${T.min}–${T.max}`; counter.style.color = n >= T.min && n <= T.max ? "var(--ok)" : ""; localStorage.setItem(draftKey, ta.value); };
  ta.oninput = upd; upd();
  const out = h("div");
  const submit = () => {
    if (countWords(ta.value) < 5) { toast("Please write your answer first.", "bad"); return; }
    const a = analyseWriting(ta.value, T, lv);
    S.writings.unshift({ id: Date.now(), taskId: T.id, level: lv, title: T.title, text: ta.value, words: a.words, score: a.total, date: Date.now() });
    recordScore("writing", a.total, T.id); localStorage.removeItem(draftKey);
    const saved = S.selfChecks[T.id] || [];
    out.innerHTML = "";
    put(out, h("div", { class: "card" }, writingFeedback(a, T, lv)),
      h("div", { class: "card" }, h("h3", {}, "📝 Model answer"), h("div", { class: "ctx", style: "white-space:pre-line" }, T.model), h("p", { class: "small muted" }, `Model: ${countWords(T.model)} words. Notice the paragraphs, linking words and useful phrases.`)),
      h("div", { class: "card" }, h("h3", {}, "✅ Self-assessment checklist"),
        CHECKLIST.map((c, i) => {
          const cb = h("input", { type: "checkbox" }); cb.checked = saved.includes(i);
          cb.onchange = () => { const s = new Set(S.selfChecks[T.id] || []); if (cb.checked) s.add(i); else s.delete(i); S.selfChecks[T.id] = [...s]; save(); };
          return h("label", { class: "opt" }, cb, c);
        }),
        viBox("Tự kiểm tra bài viết theo danh sách này trước khi nộp lần sau."), h("a", { href: "#/writing/saved" }, "View all saved writing →")));
    out.scrollIntoView({ behavior: "smooth" });
  };
  put(view, backLink("writing/" + lv, "Writing " + lv),
    h("div", { class: "card" }, h("div", { class: "row" }, levelChip(lv), h("span", { class: "chip" }, T.type), h("span", { class: "chip" }, `${T.min}–${T.max} words`)),
      h("h1", {}, T.title), h("p", { style: "font-size:1.08rem" }, T.prompt), viBox(T.vi), guideBox([DATA.guideMap.writing[T.type], "gd-write-basics"]),
      h("details", {}, h("summary", { style: "cursor:pointer;font-weight:600" }, "💡 Useful linking words for " + lv), h("p", { class: "small" }, linkersUpTo(lv).join(" · ")))),
    h("div", { class: "card" }, ta, h("div", { class: "row", style: "margin-top:8px" }, counter, h("span", { class: "spacer" }), h("button", { class: "btn primary", onclick: submit }, "Submit & get feedback"))),
    out);
}

function savedWritings(view: HTMLElement): void {
  put(view, backLink("writing", "Writing"), h("h2", {}, "📁 My saved writing"));
  if (!S.writings.length) { put(view, h("p", { class: "muted" }, "No saved writing yet.")); return; }
  S.writings.forEach(w => put(view, h("div", { class: "card" },
    h("div", { class: "row" }, levelChip(w.level), h("b", {}, w.title), h("span", { class: "spacer" }), h("span", { class: "small muted" }, `${new Date(w.date).toLocaleString()} · ${w.words} words · ${w.score}%`),
      h("button", { class: "btn sm danger", onclick: () => { if (confirm("Delete this text?")) { S.writings = S.writings.filter(x => x.id !== w.id); save(); route(); } } }, "Delete")),
    h("details", {}, h("summary", { style: "cursor:pointer" }, "Show text"), h("div", { class: "ctx", style: "white-space:pre-line;margin-top:8px" }, w.text)))));
}
