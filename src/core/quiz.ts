/* Quiz engine: renders any list of questions, scores them and explains every answer */
import type { Question } from "../types";
import { findItem } from "../data";
import { h, put, viBox, type Child } from "./dom";
import { norm, pct, shuffle } from "./util";
import { say } from "./speech";

export interface QuizOptions {
  onDone?: (pct: number, results: QuizResult[]) => void;
  noButton?: boolean;
  checkLabel?: string;
  /** reading passage or transcript – used to find evidence for explanations */
  source?: string;
  listening?: boolean;
  /** grammar lesson currently open (don't link back to it) */
  lessonId?: string;
}
export interface QuizResult { q: Question; got: number; total: number }
export type QuizElement = HTMLDivElement & { _check: () => number };

interface Detail { left?: string; correct?: string; user?: string | null; ans?: string; alts?: string[]; ok: boolean }
interface Item {
  total: number; check: () => number; exEl: HTMLDivElement;
  ok?: boolean; user?: string | null; correctText?: string; details?: Detail[];
}

export function answerOk(input: string, ans: string | string[]): boolean {
  const list = Array.isArray(ans) ? ans : String(ans).split("|");
  const v = norm(input);
  return list.some(a => norm(a) === v);
}
const firstAnswer = (a: string | string[]) => (Array.isArray(a) ? a[0] : String(a).split("|")[0]);

export function quiz(questions: Question[], opts: QuizOptions = {}): QuizElement {
  const wrap = h("div", { class: "quiz" }) as QuizElement;
  const items: { q: Question; item: Item }[] = [];
  questions.forEach((q, qi) => {
    const box = h("div", { class: "q" }); const name = "q" + Math.random().toString(36).slice(2);
    if (q.ctx) box.append(h("div", { class: "ctx" }, q.ctx));
    if (q.say) { const text = q.say; box.append(h("div", { class: "row", style: "margin-bottom:6px" }, h("button", { class: "btn sm", onclick: () => void say(text) }, "▶ Play"), h("button", { class: "btn sm", onclick: () => void say(text, 0.75) }, "🐢 Slow"))); }
    const fb = h("div", { class: "fb" }); const exEl = h("div");
    const num = qi + 1 + ". ";
    const setFb = (ok: boolean, text: string) => { fb.className = "fb " + (ok ? "ok" : "bad"); fb.textContent = text; };
    let item: Item;

    if (q.t === "mc" || q.t === "tf" || q.t === "tfng") {
      const options = q.t === "mc" ? q.o : q.t === "tf" ? ["True", "False"] : ["True", "False", "Not Given"];
      const correctIdx = q.t === "mc" ? q.a : q.t === "tf" ? (q.a ? 0 : 1) : ["T", "F", "NG"].indexOf(q.a);
      box.append(h("div", { class: "qt" }, num + q.q));
      const labels = options.map((o, i) => h("label", { class: "opt" }, h("input", { type: "radio", name, value: i }), o));
      put(box, labels);
      item = { total: 1, exEl, check() {
        const sel = labels.findIndex(l => l.querySelector("input")!.checked);
        labels.forEach((l, i) => { l.classList.toggle("correct", i === correctIdx); l.classList.toggle("wrong", i === sel && sel !== correctIdx); });
        const ok = sel === correctIdx;
        item.ok = ok; item.user = sel >= 0 ? options[sel] : null; item.correctText = options[correctIdx];
        setFb(ok, ok ? "✓ Correct." : "✗ Answer: " + options[correctIdx] + ".");
        return ok ? 1 : 0;
      } };
    } else if (q.t === "gap") {
      const parts = q.q.split(/_{3,}/); const inp = h("input", { type: "text", class: "gapin", autocomplete: "off", spellcheck: "false" });
      box.append(h("div", { class: "qt" }, num + parts[0], inp, parts.slice(1).join("___")));
      item = { total: 1, exEl, check() {
        const ok = answerOk(inp.value, q.a); inp.classList.toggle("correct", ok); inp.classList.toggle("wrong", !ok);
        item.ok = ok; item.user = inp.value; item.correctText = firstAnswer(q.a);
        setFb(ok, ok ? "✓ Correct." : "✗ Answer: " + item.correctText + ".");
        return ok ? 1 : 0;
      } };
    } else if (q.t === "gaptext") {
      const line = h("div", { class: "qt", style: "line-height:2.2" }, num); const inputs: { el: HTMLInputElement; ans: string }[] = [];
      q.text.split(/(\[[^\]]+\])/).forEach(part => {
        const m = /^\[([^\]]+)\]$/.exec(part);
        if (m) { const el = h("input", { type: "text", class: "gapin", autocomplete: "off", spellcheck: "false" }); inputs.push({ el, ans: m[1] }); line.append(el); }
        else line.append(part);
      });
      box.append(line);
      item = { total: inputs.length, exEl, check() {
        let c = 0; const wrongs: string[] = [];
        item.details = inputs.map(({ el, ans }) => {
          const ok = answerOk(el.value, ans); el.classList.toggle("correct", ok); el.classList.toggle("wrong", !ok);
          if (ok) c++; else wrongs.push(ans.split("|")[0]);
          return { ans: ans.split("|")[0], alts: ans.split("|"), user: el.value, ok };
        });
        item.ok = !wrongs.length;
        setFb(item.ok, wrongs.length ? "Answers: " + wrongs.join(", ") : "✓ All correct.");
        return c;
      } };
    } else {
      box.append(h("div", { class: "qt" }, num + q.q));
      const rights = q.t === "match" ? shuffle(q.p.map(p => p[1])) : q.h;
      const lefts = q.t === "match" ? q.p.map(p => p[0]) : q.a.map((_, i) => "Paragraph " + String.fromCharCode(65 + i));
      const rows = lefts.map(left => {
        const sel = h("select", {}, h("option", { value: "" }, "— choose —"), rights.map((r, ri) => h("option", { value: ri }, r)));
        box.append(h("div", { class: "match-row" }, h("span", { class: "ml" }, left), sel));
        return sel;
      });
      item = { total: rows.length, exEl, check() {
        let c = 0;
        item.details = rows.map((sel, i) => {
          const correctText = q.t === "match" ? q.p[i][1] : q.h[q.a[i]];
          const user = sel.value !== "" ? rights[Number(sel.value)] : null;
          const ok = user === correctText;
          sel.style.borderColor = ok ? "var(--ok)" : "var(--bad)"; if (ok) c++;
          return { left: lefts[i], correct: correctText, user, ok };
        });
        item.ok = c === rows.length;
        setFb(item.ok, item.ok ? "✓ All correct." : `✗ ${c}/${rows.length} correct – see the explanation below.`);
        return c;
      } };
    }
    put(box, fb, exEl); wrap.append(box); items.push({ q, item });
  });

  const scoreBox = h("div");
  let checked = false;
  const check = (): number => {
    let got = 0, total = 0; const results: QuizResult[] = [];
    items.forEach(({ q, item }) => {
      const g = item.check(); got += g; total += item.total; results.push({ q, got: g, total: item.total });
      item.exEl.innerHTML = "";
      try { item.exEl.append(h("details", { class: "explain", open: !item.ok }, h("summary", {}, item.ok ? "💡 Explanation" : "💡 Why? See the explanation"), explainQ(q, item, opts))); }
      catch (e) { console.warn(e); }
    });
    const p = pct(got, total); checked = true;
    const wrongN = items.filter(x => !x.item.ok).length;
    scoreBox.innerHTML = "";
    scoreBox.append(h("div", { class: "score-box notice " + (p >= 70 ? "ok" : p >= 50 ? "warn" : "bad") },
      `Score: ${got}/${total} (${p}%) ` + (p >= 90 ? "🌟 Excellent!" : p >= 70 ? "👍 Well done!" : p >= 50 ? "🙂 Not bad – review the mistakes." : "💪 Keep practising."),
      wrongN ? h("div", { class: "small", style: "font-weight:500;margin-top:6px" }, `${wrongN} question(s) to review. Explanations are open under each wrong answer. `,
        h("button", { class: "btn sm", onclick: () => items.find(x => !x.item.ok)?.item.exEl.scrollIntoView({ behavior: "smooth", block: "center" }) }, "Go to first mistake")) : null));
    opts.onDone?.(p, results);
    return p;
  };
  if (!opts.noButton) {
    const btn = h("button", { class: "btn primary", onclick: () => {
      if (checked) { wrap.replaceWith(quiz(questions, opts)); return; }
      check(); btn.textContent = "↻ Try again";
    } }, opts.checkLabel || "Check answers");
    put(wrap, h("div", { class: "row", style: "margin-top:12px" }, btn), scoreBox);
  } else wrap.append(scoreBox);
  wrap._check = check;
  return wrap;
}

/* =====================================================================
   ANSWER EXPLANATIONS – built from the text/recording (evidence sentence),
   the grammar lesson the question belongs to, and the question's own note (x)
   ===================================================================== */
const EX_STOP = new Set("the a an and or but so to of in on at for with is are was were be been being it its this that these those there their they he she we you his her our your my me him them as by from not no do does did have has had will would can could should may might must than then very also just about into out up what which who when where why how all some any more most much many such only one two get got".split(" "));
const exWords = (s: string) => (String(s).toLowerCase().replace(/[’‘]/g, "'").match(/[a-z0-9']+/g) || []).filter(w => w.length > 2 && !EX_STOP.has(w));
const exStem = (w: string) => { w = w.replace(/'s$/, ""); return w.length <= 4 ? w : w.slice(0, Math.max(4, w.length - 3)); };
const exSentences = (text: string) => (String(text).replace(/\s*\n+\s*/g, " ").match(/[^.!?]+[.!?]+["”’)]*|[^.!?]+$/g) || []).map(s => s.trim()).filter(Boolean);
interface Evidence { sentence: string; keys: Set<string> }
/** Find the sentence that best matches the question; rare shared words count more (1 / document frequency) */
function findEvidence(source: string, query: string, must?: string | null): Evidence | null {
  const sents = exSentences(source); if (!sents.length) return null;
  const keys = new Set(exWords(query).map(exStem));
  const sentStems = sents.map(s => new Set(exWords(s).map(exStem)));
  const df: Record<string, number> = {};
  sentStems.forEach(set => set.forEach(w => { df[w] = (df[w] || 0) + 1; }));
  let best: string | null = null, bestScore = 0;
  sents.forEach((s, i) => {
    let sc = 0;
    sentStems[i].forEach(w => { if (keys.has(w)) sc += 1 / df[w]; });
    if (must && norm(s).includes(norm(must))) sc += 2;
    if (sc > bestScore) { bestScore = sc; best = s; }
  });
  return best && bestScore > 0.3 ? { sentence: best, keys } : null;
}
function exHighlight(sentence: string, keys: Set<string>): HTMLElement {
  const span = h("span");
  sentence.split(/([A-Za-z0-9'’]+)/).forEach(part => {
    if (/^[A-Za-z0-9]/.test(part) && part.length > 2 && keys.has(exStem(part.toLowerCase().replace(/[’]/g, "'")))) span.append(h("mark", {}, part));
    else span.append(part);
  });
  return span;
}
function editDistance(a: string, b: string): number {
  a = norm(a); b = norm(b); const m = a.length, n = b.length; if (Math.abs(m - n) > 3) return 9;
  const d = Array.from({ length: m + 1 }, (_, i) => [i, ...new Array<number>(n).fill(0)]); for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}
const TFNG_TEXT: Record<"T" | "F" | "NG", [string, string]> = {
  T: ["True – the text says the same idea, often with different words (a paraphrase).", "TRUE: bài nói cùng ý với câu này (thường được diễn đạt bằng từ khác)."],
  F: ["False – the text says something different or the opposite. Compare the highlighted words carefully.", "FALSE: bài nói khác hoặc ngược lại. Hãy so sánh các từ được tô màu."],
  NG: ["Not Given – the text does not give this information, so we cannot say if it is true or false.", "NOT GIVEN: bài không có thông tin này nên không thể kết luận đúng hay sai. Đừng dùng hiểu biết bên ngoài bài."]
};

function explainQ(q: Question, item: Item, opts: QuizOptions): HTMLElement {
  const src = q.ctx || q.say || opts.source || "";
  const isListening = !!(q.say || opts.listening);
  const out = h("div", { class: "explain-body" }); const vi: string[] = [];
  const add = (...c: Child[]) => out.append(h("div", { style: "margin:5px 0" }, ...c));
  const evidence = (ev: Evidence | null, label?: string) => { if (ev) add(h("b", {}, label || (isListening ? "🎧 In the recording: " : "📍 Evidence in the text: ")), "“", exHighlight(ev.sentence, ev.keys), "”"); };
  const fill = (text: string, ans: string) => text.replace(/_{3,}/, "【" + ans + "】");

  if (q.t === "mc" || q.t === "tf" || q.t === "tfng") {
    if (!item.ok) add(h("span", { class: "fb bad" }, item.user == null ? "You didn't choose an answer." : "Your answer: " + item.user));
    add(h("b", {}, "Correct answer: "), item.correctText);
    if (q.t === "tf" || q.t === "tfng") {
      const key = q.t === "tf" ? (q.a ? "T" : "F") : q.a;
      add(TFNG_TEXT[key][0]); vi.push(TFNG_TEXT[key][1]);
      if (src) {
        evidence(findEvidence(src, q.q), key === "NG" ? "🔎 Closest related part: " : undefined);
        if (key === "NG") add(h("span", { class: "small muted" }, "This part is about the same topic, but it does not say what the statement says."));
      }
      if (!item.ok && item.user === "False" && key === "NG") vi.push("Lưu ý: chọn False chỉ khi bài nói NGƯỢC LẠI; nếu bài không nhắc đến thì là Not Given.");
      if (!item.ok && item.user === "Not Given" && key === "F") vi.push("Lưu ý: bài có nhắc đến thông tin này nhưng nói khác đi, nên là False chứ không phải Not Given.");
    } else {
      const hasGap = /_{3,}/.test(q.q);
      const correct = item.correctText || "";
      if (hasGap) add(h("b", {}, "Complete sentence: "), fill(q.q, correct));
      if (src) evidence(findEvidence(src, q.q + " " + correct, correct));
      if (!item.ok && item.user != null) {
        vi.push(`Bạn chọn “${item.user}”, nhưng đáp án đúng là “${correct}”.`);
        if (src && !hasGap && norm(src).includes(norm(item.user))) {
          add(h("span", { class: "small muted" }, `Note: “${item.user}” appears in the ${isListening ? "recording" : "text"}, but it does not answer this question – a typical distractor.`));
          vi.push("Phương án bạn chọn có xuất hiện trong bài nhưng không trả lời đúng câu hỏi (phương án gây nhiễu).");
        }
      } else if (item.ok) vi.push(`Chính xác: “${correct}”.`);
    }
  } else if (q.t === "gap") {
    const alts = Array.isArray(q.a) ? q.a : String(q.a).split("|");
    const u = String(item.user || "").trim();
    if (!item.ok) add(h("span", { class: "fb bad" }, u ? "Your answer: " + u : "No answer given."));
    add(h("b", {}, "Correct answer: "), alts.join(" / "));
    add(h("b", {}, "Complete sentence: "), fill(q.q, alts[0]));
    if (src) evidence(findEvidence(src, q.q + " " + alts[0], alts[0]));
    if (!item.ok && u) {
      if (alts.some(a => norm(a).replace(/s$/, "") === norm(u).replace(/s$/, ""))) { add("💡 Almost! Check singular / plural (-s)."); vi.push("Gần đúng: kiểm tra số ít/số nhiều (-s)."); }
      else if (alts.some(a => editDistance(a, u) <= 2)) { add("💡 Very close – check your spelling."); vi.push("Gần đúng: kiểm tra lại chính tả."); }
      else if (alts.some(a => exStem(norm(a)) === exStem(norm(u)))) { add("💡 Right word, wrong form – check the tense or word form."); vi.push("Đúng từ nhưng sai dạng (thì/dạng từ)."); }
    }
    vi.push(item.ok ? "Chính xác." : `Đáp án: “${alts[0]}”.`);
  } else if (q.t === "gaptext") {
    (item.details || []).forEach(d => {
      const ans = d.ans || ""; const ev = src ? findEvidence(src, ans, ans) : null;
      add(d.ok ? "✓ " : "✗ ", h("b", {}, (d.alts || []).join(" / ")), d.ok ? "" : h("span", { class: "muted" }, "  (you wrote: " + ((d.user || "").trim() || "—") + ")"),
        ev ? h("div", { class: "small muted" }, (isListening ? "🎧 " : "📍 ") + "“", exHighlight(ev.sentence, new Set(exWords(ans).map(exStem))), "”") : null);
    });
    vi.push("Mỗi chỗ trống có câu gốc trong bài nghe/bài đọc (từ cần điền được tô màu). Nghe lại đoạn đó để kiểm tra.");
  } else if (q.t === "match") {
    (item.details || []).forEach(d => {
      const ev = src ? findEvidence(src, d.left + " " + d.correct, d.left) : null;
      add(d.ok ? "✓ " : "✗ ", h("b", {}, d.left), " → ", d.correct, !d.ok && d.user ? h("span", { class: "muted" }, "  (you chose: " + d.user + ")") : null,
        ev ? h("div", { class: "small muted" }, "📍 “", exHighlight(ev.sentence, ev.keys), "”") : null);
    });
    vi.push("Ghép theo Ý NGHĨA của cả câu, không chỉ vì trùng một từ.");
  } else {
    const paras = String(opts.source || "").split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    (item.details || []).forEach((d, i) => {
      const topic = paras[i] ? exSentences(paras[i])[0] : "";
      add(d.ok ? "✓ " : "✗ ", h("b", {}, "Paragraph " + String.fromCharCode(65 + i) + ": "), d.correct, !d.ok && d.user ? h("span", { class: "muted" }, "  (you chose: " + d.user + ")") : null,
        topic ? h("div", { class: "small muted" }, "Topic sentence: “", exHighlight(topic, new Set(exWords(d.correct || "").map(exStem))), "”") : null);
    });
    const unused = q.h.filter((_, i) => !q.a.includes(i));
    if (unused.length) add(h("span", { class: "small muted" }, "Extra headings (not used): " + unused.join(" · ")));
    vi.push("Tiêu đề đúng phải tóm tắt ý chính của cả đoạn – thường thể hiện ở câu đầu (câu chủ đề). Tiêu đề thừa thường chỉ khớp một chi tiết.");
  }
  if (q.x) add("💡 ", q.x);

  // Grammar questions: quote the most relevant rule from the lesson
  const lesson = findItem("grammar", q._g);
  if (lesson) {
    const ruleText = lesson.ex.replace(/<\/(p|li)>/g, ". ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").replace(/\.\s*\./g, ".");
    const correct = item.correctText || (q.t === "gap" ? firstAnswer(q.a) : "");
    const qText = "q" in q ? q.q : "";
    const rule = findEvidence(ruleText, qText + " " + correct);
    if (rule) add(h("b", {}, "📘 Rule: "), "“", exHighlight(rule.sentence, rule.keys), "”");
    if (opts.lessonId !== lesson.id) { add(h("b", {}, "📘 Grammar – " + lesson.title + ". "), h("a", { href: `#/grammar/${lesson.level}/${lesson.id}` }, "Review the lesson →")); vi.push(lesson.vi); }
    else if (!item.ok) vi.push("Xem lại phần giải thích ở đầu bài học này.");
  }
  if (vi.length) put(out, viBox(vi.join(" ")));
  return out;
}
