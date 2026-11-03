/* Guides: theory and strategies for every exercise type, plus the inline "How to do this" box */
import type { Guide, Skill } from "../types";
import { DATA } from "../data";
import { h, put, viBox } from "../core/dom";
import { S } from "../core/state";
import { say } from "../core/speech";
import { SKILL_INFO, recordScore } from "../core/progress";
import { go, registerPage, setViewLevel } from "../core/router";
import { backLink, doneMark } from "../core/ui";
import { quiz } from "../core/quiz";

const GUIDE_SKILLS: [Skill, string][] = [["reading", "📖 Reading"], ["listening", "🎧 Listening"], ["speaking", "🎤 Speaking"], ["writing", "✍️ Writing"]];
export const findGuide = (id: string | undefined) => DATA.guides.find(g => g.id === id);

function guideBody(g: Guide, { compact = false } = {}): HTMLElement {
  const box = h("div", {});
  put(box, h("div", { html: g.intro }), viBox(g.vi),
    h("h3", {}, "🪜 Step by step"), h("ol", {}, g.steps.map(s => h("li", {}, s))),
    g.traps?.length ? [h("h3", {}, "⚠️ Common traps"), h("ul", {}, g.traps.map(s => h("li", {}, s)))] : null,
    g.structure && !compact ? [h("h3", {}, "🧱 Structure"), h("ol", {}, g.structure.map(s => h("li", {}, s)))] : null,
    g.phrases && !compact ? [h("h3", {}, "💬 Useful language"), h("div", { class: "row" }, g.phrases.map(p => h("span", { class: "chip", style: "cursor:pointer", title: "Listen", onclick: () => void say(p.replace(/…|\.\.\./g, "")) }, p)))] : null,
    g.example ? [h("h3", {}, "🔍 Worked example"), h("div", { class: "ctx" },
      g.example.ctx ? h("div", { style: "margin-bottom:6px" }, g.example.ctx) : null, h("div", {}, h("b", {}, g.example.q)),
      h("div", { style: "margin-top:6px;color:var(--ok)" }, "✓ ", g.example.a),
      g.example.why ? h("div", { class: "small muted", style: "margin-top:4px" }, "Why: " + g.example.why) : null)] : null);
  return box;
}

/** Collapsible guide shown next to an exercise ("learn while you practise") */
export function guideBox(ids: (string | undefined)[]): HTMLElement | null {
  const gs = [...new Set(ids)].map(findGuide).filter((g): g is Guide => !!g);
  if (!gs.length) return null;
  return h("div", {}, gs.map(g => h("details", { class: "notice", style: "margin:8px 0" },
    h("summary", { style: "cursor:pointer;font-weight:700" }, "📘 How to do this: " + g.title),
    h("div", { style: "margin-top:8px" }, guideBody(g, { compact: true }), h("a", { href: "#/guides/" + g.id }, "Open the full guide with practice →")))));
}

registerPage("guides", "Guides: theory & strategies", (view, id) => {
  setViewLevel(S.level);
  if (id) {
    const g = findGuide(id); if (!g) { put(view, h("p", {}, "Guide not found.")); return; }
    const same = DATA.guides.filter(x => x.skill === g.skill); const i = same.indexOf(g);
    put(view, backLink("guides", "All guides"),
      h("div", { class: "card" }, h("div", { class: "row" }, h("span", { class: "chip" }, SKILL_INFO[g.skill].icon + " " + SKILL_INFO[g.skill].name), doneMark(g.id)), h("h1", {}, g.icon + " " + g.title), guideBody(g)),
      h("div", { class: "card" }, h("h2", {}, "✍️ Try it now"), h("p", { class: "small muted" }, "Practise the strategy straight away. Read the explanation after each answer."),
        quiz(g.practice, { onDone: s => recordScore(g.skill, s, g.id) })),
      h("div", { class: "row" }, i > 0 ? h("a", { class: "btn", href: "#/guides/" + same[i - 1].id }, "← " + same[i - 1].title) : null, h("span", { class: "spacer" }),
        i < same.length - 1 ? h("a", { class: "btn primary", href: "#/guides/" + same[i + 1].id }, same[i + 1].title + " →") : h("a", { class: "btn primary", href: "#/" + g.skill }, "Practise " + SKILL_INFO[g.skill].name + " →")));
    return;
  }
  put(view, h("p", { class: "muted" }, "Theory and strategies for every type of exercise in this course. Read a guide, try the mini practice, then use it in real exercises – each exercise also shows its guide in a “📘 How to do this” box."),
    viBox("Lý thuyết và chiến lược làm từng dạng bài. Đọc hướng dẫn, làm thử vài câu ngay, rồi áp dụng vào bài thật. Mỗi bài tập cũng có ô “📘 How to do this” để xem nhanh."));
  GUIDE_SKILLS.forEach(([sk, label]) => {
    const list = DATA.guides.filter(g => g.skill === sk);
    put(view, h("div", { class: "card" }, h("h2", {}, `${label} (${list.length})`),
      h("div", { class: "grid g2" }, list.map(g => h("div", { class: "list-item", onclick: () => go("guides/" + g.id) }, h("span", { style: "font-size:1.4rem" }, g.icon), h("div", { style: "flex:1" }, h("b", {}, g.title)), doneMark(g.id))))));
  });
  put(view, h("div", { class: "card" }, h("h2", {}, "🧩 Grammar & 🗂️ Vocabulary"),
    h("p", {}, "Grammar theory is inside each grammar lesson (explanation, Vietnamese notes, examples and 10 questions). Vocabulary tips: learn words in phrases, review with flashcards every day, and study the common mistakes list."),
    h("div", { class: "row" }, h("a", { class: "btn", href: "#/grammar" }, "Grammar lessons"), h("a", { class: "btn", href: "#/vocabulary/mistakes" }, "Common mistakes"), h("a", { class: "btn", href: "#/vocabulary/phrasal" }, "Phrasal verbs"))));
});
