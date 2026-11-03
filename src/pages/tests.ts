/* Tests & progress: placement test, unit tests, stage tests, chart, badges, export / import */
import type { AppState, Level, MCQuestion, Question } from "../types";
import { DATA, LEVELS, findItem } from "../data";
import { $, h, put, levelChip, bar, toast, viBox } from "../core/dom";
import { S, STORE_KEY, defaultState, deepMerge, replaceState, save } from "../core/state";
import { DAY, countWords, pct, sample, shuffle, todayKey, alignWords } from "../core/util";
import { SR, recognize, say, srNotice, voicePanel } from "../core/speech";
import { BADGES, SKILL_INFO, checkBadges, recordScore } from "../core/progress";
import { applyTheme, go, registerPage, route, setViewLevel } from "../core/router";
import { backLink, renderDiff } from "../core/ui";
import { quiz } from "../core/quiz";
import { analyseWriting, writingFeedback } from "../core/writingCheck";
import { playerControls, transcriptText } from "./reading";

const isLevel = (v: string | undefined): v is Level => LEVELS.includes(v as Level);
const setLevelSelect = (lv: Level) => { const sel = $<HTMLSelectElement>("#levelSelect"); if (sel) sel.value = lv; };

/** Vocabulary questions generated from the word banks: definition → word */
function vocabQuestions(topics: string[] | null, lv: Level, n: number): MCQuestion[] {
  const pool = DATA.vocab[lv].filter(t => !topics || topics.includes(t.topic)).flatMap(t => t.words);
  const all = DATA.vocab[lv].flatMap(t => t.words);
  return sample(pool, n).map(w => { const o = shuffle([w[0], ...sample(all.filter(x => x[0] !== w[0]), 3).map(x => x[0])]); return { t: "mc", q: `Which word matches this meaning: “${w[3]}”?`, o, a: o.indexOf(w[0]) }; });
}

/* ===================== PLACEMENT TEST ===================== */
const PLACEMENT_ADVICE: Record<string, string> = {
  A2: "Start with Stage 1 (A2) to build a strong foundation.", "A2+": "You are a strong A2 learner. Finish Stage 1 quickly and take the A2 stage test.",
  B1: "Start Stage 2 (B1). Stage 1 is unlocked for review.", "B1+": "You are a strong B1 learner. Work through Stage 2 and aim for the B1 stage test.",
  B2: "Start Stage 3 (B2). Earlier stages are unlocked for review."
};
registerPage("placement", "Placement test", view => {
  setViewLevel("A2");
  const res = h("div");
  put(view, h("div", { class: "card" }, h("h1", {}, "🧭 Placement test"),
    h("p", {}, "25 questions: grammar, vocabulary, reading and listening. They get harder as you go. Don't guess wildly – it's fine to leave a question if you really don't know."),
    viBox("Bài kiểm tra xếp lớp gồm 25 câu (ngữ pháp, từ vựng, đọc, nghe). Câu hỏi khó dần. Câu nghe có nút ▶ Play. Kết quả: A2, A2+, B1, B1+ hoặc B2."),
    !("speechSynthesis" in window) ? h("div", { class: "notice bad" }, "Speech synthesis is not supported – listening questions can't be played.") : null, voicePanel()),
    h("div", { class: "card" }, h("h3", {}, "Grammar (1–10) · Vocabulary (11–16) · Reading (17–21) · Listening (22–25)"),
      quiz(DATA.placement, { checkLabel: "Finish test", onDone: (_p, results) => {
        const W: Record<Level, number> = { A2: 1, B1: 2, B2: 3 }; let got = 0, tot = 0;
        const by: Record<Level, [number, number]> = { A2: [0, 0], B1: [0, 0], B2: [0, 0] };
        results.forEach(r => { const lv = r.q.lv || "A2"; got += r.got * W[lv]; tot += r.total * W[lv]; by[lv][0] += r.got; by[lv][1] += r.total; });
        const sc = pct(got, tot);
        const result = sc < 35 ? "A2" : sc < 50 ? "A2+" : sc < 65 ? "B1" : sc < 80 ? "B1+" : "B2";
        const stage = result.replace("+", "") as Level;
        S.placement = { result, score: sc, date: Date.now() }; S.subLevel = result; S.level = stage;
        LEVELS.forEach((l, i) => { if (i <= LEVELS.indexOf(stage)) S.unlocked[l] = true; });
        S.plan = null; recordScore("tests", sc); setLevelSelect(stage);
        res.innerHTML = "";
        put(res, h("div", { class: "card", style: "border:2px solid var(--primary)" }, h("h2", {}, "Your level: ", levelChip(stage), " ", h("span", { style: "font-size:1.6rem" }, result)),
          h("p", {}, `Weighted score: ${sc}% · A2 questions ${by.A2[0]}/${by.A2[1]} · B1 ${by.B1[0]}/${by.B1[1]} · B2 ${by.B2[0]}/${by.B2[1]}`),
          h("p", {}, PLACEMENT_ADVICE[result]),
          h("div", { class: "row" }, h("button", { class: "btn primary", onclick: () => go("dashboard") }, "Go to dashboard"), h("button", { class: "btn", onclick: () => go("roadmap") }, "View roadmap"))));
        res.scrollIntoView({ behavior: "smooth" }); save();
      } })), res);
});

/* ===================== TESTS OVERVIEW ===================== */
registerPage("tests", "Tests & progress", (view, kind, arg) => {
  if (kind === "unit") return unitTest(view, arg);
  if (kind === "stage") return stageTest(view, arg);
  setViewLevel(S.level);
  const taken = S.placement?.score != null;
  put(view, h("div", { class: "grid g3" },
    h("div", { class: "card" }, h("h3", {}, "🧭 Placement test"), h("p", { class: "small muted" }, taken && S.placement ? `Result: ${S.placement.result} (${S.placement.score}%) on ${new Date(S.placement.date).toLocaleDateString()}` : "Not taken yet"),
      h("button", { class: "btn primary", onclick: () => go("placement") }, taken ? "Retake" : "Start")),
    LEVELS.map(lv => { const st = S.stageTests[lv]; return h("div", { class: "card" }, h("h3", {}, levelChip(lv), " Stage test"), h("p", { class: "small muted" }, "Reading, listening, grammar & vocabulary, writing and speaking. Pass mark 70%."),
      h("p", { class: "small" }, st ? `Best: ${st.best}% · ${st.attempts} attempt(s)` : "Not taken"), h("button", { class: "btn", onclick: () => go("tests/stage/" + lv) }, "Take test")); })));
  put(view, h("div", { class: "card" }, h("h2", {}, "📝 Unit tests"), h("div", { class: "grid g3" }, LEVELS.flatMap(lv => DATA.units[lv].map((u, i) =>
    h("div", { class: "list-item", onclick: () => go("tests/unit/" + u.id) }, levelChip(lv), h("div", { style: "flex:1" }, h("b", {}, "Unit " + (i + 1)), h("div", { class: "small muted" }, u.title)),
      S.unitTests[u.id] != null ? h("span", { class: S.unitTests[u.id] >= 70 ? "done-badge" : "small" }, S.unitTests[u.id] + "%") : null))))));
  const canvas = h("canvas", { height: 260 }); const legend = h("div", { class: "row small" });
  put(view, h("div", { class: "card" }, h("h2", {}, "📈 Scores over time"), S.scores.length ? canvas : h("p", { class: "muted" }, "Complete some activities to see your progress chart."), legend));
  if (S.scores.length) requestAnimationFrame(() => drawChart(canvas, legend));
  put(view, h("div", { class: "card" }, h("h2", {}, `🏅 Badges (${Object.keys(S.badges).length}/${BADGES.length})`),
    h("div", { class: "grid g4" }, BADGES.map(b => h("div", { class: "badge" + (S.badges[b.id] ? "" : " off"), title: b.desc }, h("div", { class: "bi" }, b.icon), h("b", {}, b.name), h("div", { class: "small muted" }, b.desc),
      S.badges[b.id] ? h("div", { class: "small" }, new Date(S.badges[b.id]).toLocaleDateString()) : null)))));
  const file = h("input", { type: "file", accept: "application/json,.json", class: "hidden", onchange: (e: Event) => { const f = (e.target as HTMLInputElement).files?.[0]; if (f) importData(f); } });
  put(view, h("div", { class: "card" }, h("h2", {}, "💾 Your data"), h("p", { class: "small muted" }, "All progress is saved in this browser (localStorage). Export a file to back it up or move it to another device."),
    h("div", { class: "row" }, h("button", { class: "btn primary", onclick: exportData }, "⬇ Export progress"), h("button", { class: "btn", onclick: () => file.click() }, "⬆ Import progress"), file,
      h("button", { class: "btn danger", onclick: () => { if (confirm("Delete ALL progress? This cannot be undone.")) { localStorage.removeItem(STORE_KEY); replaceState(defaultState()); applyTheme(); setLevelSelect(S.level); go("dashboard"); route(); } } }, "Reset everything"))));
});

/* ===================== UNIT TEST ===================== */
function unitTest(view: HTMLElement, uid?: string): void {
  const lv = (uid || "").slice(0, 2); if (!isLevel(lv)) { put(view, h("p", {}, "Unit not found.")); return; }
  const u = DATA.units[lv].find(x => x.id === uid); if (!u) { put(view, h("p", {}, "Unit not found.")); return; }
  setViewLevel(lv);
  const grammarQs = sample(u.grammar.flatMap(id => findItem("grammar", id)?.q || []), 6);
  const qs: Question[] = [...grammarQs, ...vocabQuestions(u.vocab, lv, 4)];
  put(view, backLink("roadmap", "Roadmap"), h("div", { class: "card" }, levelChip(lv), h("h1", {}, "Unit test: " + u.title), h("p", { class: "muted" }, "10 questions: grammar and vocabulary from this unit. Pass mark: 70%."),
    quiz(qs, { checkLabel: "Finish unit test", onDone: s => { S.unitTests[u.id] = Math.max(S.unitTests[u.id] || 0, s); recordScore("tests", s); if (s >= 70) toast("✅ Unit passed!"); } })));
}

/* ===================== STAGE TEST ===================== */
function stageTest(view: HTMLElement, lvArg?: string): void {
  const lv: Level = isLevel(lvArg) ? lvArg : S.level; setViewLevel(lv);
  const fresh = DATA.reading[lv].filter(p => !S.done[p.id]);
  const passage = sample(fresh.length ? fresh : DATA.reading[lv], 1)[0];
  const lis = sample(DATA.listening[lv], 1)[0];
  const gv: Question[] = [...sample(DATA.grammar[lv].flatMap(x => x.q), 8), ...vocabQuestions(null, lv, 4)];
  const W = { ...DATA.stageWriting[lv] }; const sents = DATA.stageSpeaking[lv];
  const qR = quiz(passage.q, { noButton: true, source: passage.text });
  const qL = quiz(lis.q, { noButton: true, source: transcriptText(lis), listening: true });
  const qG = quiz(gv, { noButton: true });
  const ta = h("textarea", { placeholder: "Write your answer…" }); const wc = h("span", { class: "small muted" }, "0 words"); ta.oninput = () => { wc.textContent = countWords(ta.value) + " words"; };
  const spk: (number | null)[] = sents.map(() => null);
  const spkBox = h("div");
  sents.forEach((s, i) => {
    const out = h("div", { class: "small" });
    const sel = h("select", {}, h("option", { value: "" }, "Rate yourself…"), [100, 75, 50, 25].map(v => h("option", { value: v }, v + "%")));
    sel.onchange = () => { spk[i] = sel.value === "" ? null : Number(sel.value); };
    const btn = h("button", { class: "btn", disabled: !SR }, "🎙️ Read aloud");
    btn.onclick = () => { btn.textContent = "Listening…"; recognize({ onEnd: said => { btn.textContent = "🎙️ Again"; const r = alignWords(s, said); spk[i] = r.score; out.innerHTML = ""; put(out, renderDiff(r.ops, { showExtra: false }), "Accuracy: " + r.score + "%"); } }); };
    put(spkBox, h("div", { class: "ctx" }, h("b", {}, `${i + 1}. ${s}`), h("div", { class: "row", style: "margin-top:6px" }, h("button", { class: "btn", onclick: () => void say(s) }, "🔊"), btn, !SR ? sel : null), out));
  });
  const res = h("div");
  const submit = () => {
    const r = qR._check(), l = qL._check(), g = qG._check();
    const a = analyseWriting(ta.value, W, lv);
    const sp = spk.filter((x): x is number => x != null);
    const spS = sp.length ? Math.round(sp.reduce((x, y) => x + y, 0) / sents.length) : 0;
    const parts: Record<string, number> = { Reading: r, Listening: l, "Grammar & vocabulary": g, Writing: a.total, Speaking: spS };
    const total = Math.round(Object.values(parts).reduce((x, y) => x + y, 0) / 5);
    const st = S.stageTests[lv] || { best: 0, attempts: 0, history: [] };
    st.best = Math.max(st.best, total); st.attempts++; st.history.push({ d: Date.now(), total, parts }); S.stageTests[lv] = st;
    recordScore("reading", r); recordScore("listening", l); recordScore("writing", a.total); if (sp.length) recordScore("speaking", spS); recordScore("tests", total);
    const next = LEVELS[LEVELS.indexOf(lv) + 1] as Level | undefined;
    if (total >= 70 && next && !S.unlocked[next]) { S.unlocked[next] = true; toast("🔓 " + next + " unlocked!"); }
    checkBadges(); save();
    res.innerHTML = "";
    put(res, h("div", { class: "card", style: "border:2px solid " + (total >= 70 ? "var(--ok)" : "var(--warn)") },
      h("h2", {}, (total >= 70 ? "✅ Passed! " : "Not yet – ") + total + "%"),
      h("table", {}, Object.entries(parts).map(([k, v]) => h("tr", {}, h("td", {}, k), h("td", { style: "width:50%" }, bar(v)), h("td", {}, v + "%")))),
      total >= 70 && next ? h("button", { class: "btn primary", onclick: () => { S.level = next; S.plan = null; save(); setLevelSelect(next); go("roadmap"); } }, "Move to " + next + " →")
        : h("p", {}, total >= 70 ? "🏆 Congratulations – you have completed the B2 stage!" : "You need 70% to pass. Review the weakest section and try again."),
      h("details", {}, h("summary", {}, "Writing feedback"), writingFeedback(a, W, lv))));
    res.scrollIntoView({ behavior: "smooth" });
  };
  const hasHead = passage.q.some(q => q.t === "head");
  put(view, backLink("roadmap", "Roadmap"),
    h("div", { class: "card" }, levelChip(lv), h("h1", {}, lv + " stage test"), h("p", {}, "Five sections, each worth 20%. Pass mark: 70%. Take your time – about 40 minutes."),
      viBox("Bài kiểm tra cuối giai đoạn gồm 5 phần: Đọc, Nghe, Ngữ pháp & Từ vựng, Viết, Nói. Đạt từ 70% để mở khóa giai đoạn tiếp theo.")),
    h("div", { class: "card" }, h("h2", {}, "1 · Reading: " + passage.title), h("div", { class: "passage" }, passage.text.split(/\n\s*\n/).map((p, i) => h("p", {}, hasHead ? h("span", { class: "plabel" }, String.fromCharCode(65 + i)) : null, p))), qR),
    h("div", { class: "card" }, h("h2", {}, "2 · Listening: " + lis.title), playerControls(() => lis.lines, lis.speakers), qL),
    h("div", { class: "card" }, h("h2", {}, "3 · Grammar & vocabulary"), qG),
    h("div", { class: "card" }, h("h2", {}, "4 · Writing"), h("p", {}, W.prompt), h("p", { class: "small muted" }, `${W.min}–${W.max} words`), ta, wc),
    h("div", { class: "card" }, h("h2", {}, "5 · Speaking: read aloud"), !SR ? srNotice() : null, spkBox),
    h("div", { class: "card center" }, h("button", { class: "btn primary", style: "font-size:1.1rem;padding:12px 24px", onclick: submit }, "Submit stage test")), res);
}

/* ===================== CHART (canvas, no libraries) ===================== */
const CHART_COLORS: Record<string, string> = { reading: "#10b981", listening: "#3b82f6", speaking: "#f59e0b", writing: "#ec4899", grammar: "#8b5cf6", vocab: "#14b8a6", tests: "#64748b" };
function drawChart(canvas: HTMLCanvasElement, legend: HTMLElement): void {
  const dpr = devicePixelRatio || 1; const W = canvas.clientWidth, H = 260;
  canvas.width = W * dpr; canvas.height = H * dpr; const c = canvas.getContext("2d"); if (!c) return; c.scale(dpr, dpr);
  const css = getComputedStyle(document.documentElement); const muted = css.getPropertyValue("--muted"), border = css.getPropertyValue("--border");
  const pad = { l: 34, r: 10, t: 10, b: 26 }; const xs = S.scores.map(s => s.d); let x0 = Math.min(...xs), x1 = Math.max(...xs);
  if (x1 - x0 < DAY) { x0 -= DAY / 2; x1 += DAY / 2; }
  const X = (d: number) => pad.l + ((d - x0) / (x1 - x0)) * (W - pad.l - pad.r), Y = (v: number) => pad.t + ((100 - v) / 100) * (H - pad.t - pad.b);
  c.font = "11px system-ui"; c.fillStyle = muted; c.strokeStyle = border; c.lineWidth = 1;
  [0, 25, 50, 75, 100].forEach(v => { c.beginPath(); c.moveTo(pad.l, Y(v)); c.lineTo(W - pad.r, Y(v)); c.stroke(); c.fillText(String(v), 4, Y(v) + 4); });
  [x0, (x0 + x1) / 2, x1].forEach((d, i) => { const t = new Date(d).toLocaleDateString(undefined, { day: "numeric", month: "short" }); c.fillText(t, Math.min(W - 50, Math.max(pad.l, X(d) - (i === 1 ? 20 : i === 2 ? 45 : 0))), H - 8); });
  legend.innerHTML = "";
  Object.keys(CHART_COLORS).forEach(sk => {
    const pts = S.scores.filter(s => s.skill === sk); if (!pts.length) return;
    c.strokeStyle = CHART_COLORS[sk]; c.fillStyle = CHART_COLORS[sk]; c.lineWidth = 2; c.beginPath();
    pts.forEach((p, i) => (i ? c.lineTo(X(p.d), Y(p.s)) : c.moveTo(X(p.d), Y(p.s)))); c.stroke();
    pts.forEach(p => { c.beginPath(); c.arc(X(p.d), Y(p.s), 3, 0, 7); c.fill(); });
    const avg = Math.round(pts.reduce((a, b) => a + b.s, 0) / pts.length);
    legend.append(h("span", { class: "chip", style: `background:${CHART_COLORS[sk]};color:#fff` }, `${SKILL_INFO[sk as keyof typeof SKILL_INFO].name} · avg ${avg}%`));
  });
}

/* ===================== EXPORT / IMPORT ===================== */
function exportData(): void {
  const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
  const a = h("a", { href: URL.createObjectURL(blob), download: `englishpath-progress-${todayKey()}.json` }); document.body.append(a); a.click(); a.remove();
}
function importData(file: File): void {
  const r = new FileReader();
  r.onload = () => {
    try {
      const obj: unknown = JSON.parse(String(r.result));
      if (!obj || typeof obj !== "object" || !("version" in obj)) throw new Error("bad file");
      replaceState(deepMerge<AppState>(defaultState(), obj)); applyTheme(); setLevelSelect(S.level); route(); toast("Progress imported ✓");
    } catch { toast("This file is not a valid progress file.", "bad"); }
  };
  r.readAsText(file);
}
