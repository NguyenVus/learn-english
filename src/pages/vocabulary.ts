/* Grammar lessons and Vocabulary (flashcards, word banks, phrasal verbs, collocations, mistakes) */
import type { Level, MCQuestion, VocabCard } from "../types";
import { DATA, LEVELS } from "../data";
import { h, put, levelChip, toast, viBox } from "../core/dom";
import { S, save, dueCards, learnedCount } from "../core/state";
import { pct, sample, shuffle } from "../core/util";
import { say } from "../core/speech";
import { recordScore } from "../core/progress";
import { go, registerPage, route, setViewLevel } from "../core/router";
import { backLink, doneMark, levelTabs, lockNote } from "../core/ui";
import { addWord, gradeCard } from "../core/dictionary";
import { quiz } from "../core/quiz";

const asLevel = (lv: string | undefined): Level => (LEVELS.includes(lv as Level) ? (lv as Level) : S.level);

/* ===================== GRAMMAR ===================== */
registerPage("grammar", "Grammar", (view, lvArg, id) => {
  const lv = asLevel(lvArg); setViewLevel(lv);
  if (id) {
    const G = DATA.grammar[lv].find(x => x.id === id); if (!G) return;
    put(view, backLink("grammar/" + lv, "Grammar " + lv),
      h("div", { class: "card" }, levelChip(lv), h("h1", {}, G.title), h("div", { html: G.ex }), viBox(G.vi),
        h("h3", {}, "Examples"), h("ul", {}, G.eg.map(e => h("li", {}, e, " ", h("button", { class: "btn sm", style: "padding:1px 6px", onclick: () => void say(e) }, "🔊"))))),
      h("div", { class: "card" }, h("h2", {}, "Practice · 10 questions"), quiz(G.q, { lessonId: G.id, onDone: s => recordScore("grammar", s, G.id) })));
    return;
  }
  put(view, levelTabs("grammar", lv), lockNote(lv), viBox("Mỗi bài có giải thích đơn giản, ghi chú tiếng Việt, ví dụ và 10 câu luyện tập."),
    DATA.grammar[lv].map((g, i) => h("div", { class: "list-item", onclick: () => go(`grammar/${lv}/${g.id}`) },
      h("span", { class: "chip lv " + lv }, i + 1), h("div", { style: "flex:1" }, h("b", {}, g.title)), doneMark(g.id))));
});

/* ===================== VOCABULARY ===================== */
const TABS: [string, () => string][] = [["review", () => "🃏 Review"], ["mywords", () => `⭐ My words (${Object.keys(S.vocab).length})`], ["banks", () => "📚 Word banks"], ["phrasal", () => "🔗 Phrasal verbs & collocations"], ["mistakes", () => "⚠️ Common mistakes"]];
registerPage("vocabulary", "Vocabulary", (view, tabArg, lvArg) => {
  const tab = tabArg || "review"; const lv = asLevel(lvArg); setViewLevel(lv);
  put(view, h("div", { class: "tabs" }, TABS.map(([k, l]) => h("button", { class: k === tab ? "active" : "", onclick: () => go("vocabulary/" + k) }, l()))));
  if (tab === "review") flashcards(view, lv);
  else if (tab === "mywords") myWords(view);
  else if (tab === "banks") wordBanks(view, lv);
  else if (tab === "phrasal") phrasalPage(view);
  else mistakesPage(view);
});

function addTopicWords(lv: Level, limit = Infinity, topicName?: string): number {
  let n = 0;
  for (const t of DATA.vocab[lv]) {
    if (topicName && t.topic !== topicName) continue;
    for (const [w, pos, vi, en, ex] of t.words) { if (n >= limit) return n; if (addWord({ w, pos, vi, en, ex, level: lv })) n++; }
  }
  return n;
}

function flashcards(view: HTMLElement, lv: Level): void {
  let queue: VocabCard[] = dueCards(); const total0 = queue.length; let right = 0, answered = 0;
  const wrap = h("div");
  put(view, h("p", { class: "muted small" }, "Spaced repetition: words you know come back later (1, 3, 7, 14, 30 days); words you get wrong come back within minutes."),
    viBox("Lặp lại ngắt quãng: từ bạn nhớ sẽ xuất hiện lại sau vài ngày, từ bạn quên sẽ quay lại sớm hơn."), wrap);
  if (!Object.keys(S.vocab).length) {
    put(wrap, h("div", { class: "card center" }, h("h2", {}, "Your deck is empty"), h("p", {}, "Add words from the word banks or click words in reading passages."),
      h("button", { class: "btn primary", onclick: () => { toast(addTopicWords(lv, 10) + " words added"); route(); } }, `＋ Add 10 ${lv} words`)));
    return;
  }
  const show = (): void => {
    wrap.innerHTML = "";
    if (!queue.length) {
      if (answered) recordScore("vocab", pct(right, answered));
      const next = Object.values(S.vocab).sort((a, b) => a.due - b.due)[0];
      put(wrap, h("div", { class: "card center" }, h("h2", {}, answered ? "🎉 Review finished!" : "✅ Nothing to review now"),
        answered ? h("p", {}, `You answered ${answered} cards · ${pct(right, answered)}% remembered.`) : null,
        next ? h("p", { class: "muted" }, "Next card due: " + new Date(next.due).toLocaleString()) : null,
        h("div", { class: "row", style: "justify-content:center" }, h("button", { class: "btn", onclick: () => go("vocabulary/banks") }, "Add more words"),
          h("button", { class: "btn", onclick: () => { queue = shuffle(Object.values(S.vocab)).slice(0, 15); show(); } }, "Practise anyway (15 random)"))));
      return;
    }
    const c = queue[0];
    const back = h("div", { class: "hidden" }, h("div", { style: "font-size:1.2rem;margin-top:10px" }, "🇻🇳 ", h("b", {}, c.vi || "—")), h("div", { class: "muted" }, c.en), c.ex ? h("div", { class: "small", style: "margin-top:8px" }, "“" + c.ex + "”") : null);
    const hint = h("p", { class: "center muted small" }, "Think of the meaning, then click the card to check.");
    const grade = (g: 0 | 1 | 2 | 3) => { answered++; if (g >= 2) right++; gradeCard(c, g); queue.shift(); if (g === 0) queue.splice(Math.min(3, queue.length), 0, c); show(); };
    const btns = h("div", { class: "row hidden", style: "justify-content:center;margin-top:12px" },
      h("button", { class: "btn danger", onclick: () => grade(0) }, "✗ Again"), h("button", { class: "btn", onclick: () => grade(1) }, "😐 Hard"),
      h("button", { class: "btn ok", onclick: () => grade(2) }, "✓ Good"), h("button", { class: "btn primary", onclick: () => grade(3) }, "⚡ Easy"));
    const card = h("div", { class: "flash", onclick: () => { back.classList.remove("hidden"); btns.classList.remove("hidden"); hint.classList.add("hidden"); } },
      h("div", { class: "small muted" }, `${c.level || ""} · box ${c.box}`), h("div", { class: "word" }, c.w), c.pos ? h("div", { class: "small muted" }, c.pos) : null, back);
    put(wrap, h("div", { class: "row small muted" }, `Card ${answered + 1} · ${queue.length} left in this session (${total0} were due)`, h("span", { class: "spacer" }),
      h("button", { class: "btn sm", onclick: (e: MouseEvent) => { e.stopPropagation(); void say(c.w); } }, "🔊")), card, hint, btns);
    void say(c.w);
  };
  show();
}

function myWords(view: HTMLElement): void {
  const list = Object.values(S.vocab).sort((a, b) => b.added - a.added);
  const w = h("input", { type: "text", placeholder: "word" }), vi = h("input", { type: "text", placeholder: "Vietnamese meaning" }), ex = h("input", { type: "text", placeholder: "example (optional)" });
  put(view, h("div", { class: "card" }, h("h3", {}, "Add a word"), h("div", { class: "row" }, w, vi, ex,
    h("button", { class: "btn primary", onclick: () => { if (addWord({ w: w.value, vi: vi.value, ex: ex.value })) { toast("Added"); route(); } else toast("Already in list or empty", "bad"); } }, "Add"))));
  if (!list.length) { put(view, h("p", { class: "muted" }, "No words yet.")); return; }
  put(view, h("div", { class: "card" }, h("p", { class: "small muted" }, `${list.length} words · ${learnedCount()} learned (box 3+) · ${dueCards().length} due now`),
    h("table", {}, h("tr", {}, h("th", {}, "Word"), h("th", {}, "Meaning"), h("th", {}, "Box"), h("th", {}, "Next review"), h("th", {})),
      list.map(c => h("tr", {}, h("td", {}, h("b", {}, c.w), " ", h("button", { class: "btn sm", style: "padding:0 5px", onclick: () => void say(c.w) }, "🔊")),
        h("td", {}, c.vi, h("div", { class: "small muted" }, c.en)), h("td", {}, c.box), h("td", { class: "small" }, c.due <= Date.now() ? "now" : new Date(c.due).toLocaleDateString()),
        h("td", {}, h("button", { class: "btn sm danger", onclick: () => { delete S.vocab[c.w.toLowerCase()]; save(); route(); } }, "✕")))))));
}

function wordBanks(view: HTMLElement, lv: Level): void {
  put(view, h("div", { class: "tabs" }, LEVELS.map(l => h("button", { class: l === lv ? "active" : "", onclick: () => go("vocabulary/banks/" + l) }, l))));
  DATA.vocab[lv].forEach(t => put(view, h("div", { class: "card" },
    h("div", { class: "row" }, h("h3", { style: "margin:0" }, t.topic), h("span", { class: "spacer" }),
      h("button", { class: "btn sm primary", onclick: () => { toast(addTopicWords(lv, Infinity, t.topic) + " words added to flashcards"); route(); } }, "＋ Add all to flashcards")),
    h("table", {}, t.words.map(([w, pos, vi, en, ex]) => h("tr", {},
      h("td", { style: "width:22%" }, h("b", {}, w), " ", h("span", { class: "small muted" }, pos)), h("td", {}, vi), h("td", { class: "small" }, en, h("div", { class: "muted" }, "“" + ex + "”")),
      h("td", { style: "white-space:nowrap" }, h("button", { class: "btn sm", onclick: () => void say(w + ". " + ex) }, "🔊"), " ",
        S.vocab[w.toLowerCase()] ? "✓" : h("button", { class: "btn sm", onclick: (e: MouseEvent) => { addWord({ w, pos, vi, en, ex, level: lv }); (e.target as Element).replaceWith("✓"); } }, "＋"))))))));
}

function phrasalPage(view: HTMLElement): void {
  const addBtn = (w: string, vi: string, en: string, lv: Level, ex?: string) => h("button", { class: "btn sm", onclick: (e: MouseEvent) => { addWord({ w, vi, en, ex, level: lv }); (e.target as Element).textContent = "✓"; } }, "＋");
  const check: MCQuestion[] = sample(DATA.phrasal, 5).map(([p, vi]) => {
    const o = shuffle([vi, ...sample(DATA.phrasal.filter(x => x[0] !== p), 2).map(x => x[1])]);
    return { t: "mc", q: `What does “${p}” mean?`, o, a: o.indexOf(vi) };
  });
  put(view,
    h("div", { class: "card" }, h("h2", {}, "🔗 Phrasal verbs (B1–B2)"), viBox("Cụm động từ rất phổ biến trong văn nói. Hãy học cả câu ví dụ, đừng chỉ học nghĩa."),
      h("table", {}, DATA.phrasal.map(([p, vi, ex, lv]) => h("tr", {}, h("td", {}, levelChip(lv)), h("td", {}, h("b", {}, p)), h("td", {}, vi), h("td", { class: "small" }, ex),
        h("td", {}, h("button", { class: "btn sm", onclick: () => void say(ex) }, "🔊"), " ", addBtn(p, vi, "phrasal verb", lv, ex)))))),
    h("div", { class: "card" }, h("h2", {}, "🧲 Collocations"), viBox("Collocation là những từ thường đi với nhau, ví dụ: make a decision (không phải do a decision)."),
      h("table", {}, DATA.collocations.map(([c, vi, lv]) => h("tr", {}, h("td", {}, levelChip(lv)), h("td", {}, h("b", {}, c)), h("td", {}, vi),
        h("td", {}, h("button", { class: "btn sm", onclick: () => void say(c) }, "🔊"), " ", addBtn(c, vi, "collocation", lv)))))),
    h("div", { class: "card" }, h("h3", {}, "Quick check"), quiz(check, { onDone: s => recordScore("vocab", s) })));
}

function mistakesPage(view: HTMLElement): void {
  const check: MCQuestion[] = sample(DATA.mistakes, 6).map(([w, r]) => { const right = r.split(" / ")[0]; const o = shuffle([w, right]); return { t: "mc", q: "Which sentence is correct?", o, a: o.indexOf(right) }; });
  put(view,
    h("div", { class: "card" }, h("h2", {}, "⚠️ Common mistakes Vietnamese learners make"), viBox("Những lỗi phổ biến của người Việt khi học tiếng Anh. Đọc to câu đúng vài lần để ghi nhớ."),
      h("table", {}, h("tr", {}, h("th", {}, "✗ Wrong"), h("th", {}, "✓ Right"), h("th", {}, "Why")),
        DATA.mistakes.map(([w, r, why]) => h("tr", {}, h("td", { style: "color:var(--bad);text-decoration:line-through" }, w),
          h("td", { style: "color:var(--ok);font-weight:600" }, r, " ", h("button", { class: "btn sm", style: "padding:0 5px", onclick: () => void say(r) }, "🔊")), h("td", { class: "small" }, why))))),
    h("div", { class: "card" }, h("h3", {}, "Find the correct sentence"), quiz(check, { onDone: s => recordScore("grammar", s) })));
}
