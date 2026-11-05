/* Tests & progress: placement test, unit tests, stage tests, chart, badges, export / import */
import type { AppState, Level, MCQuestion, Question, MockTest } from "../types";
import { DATA, LEVELS, findItem } from "../data";
import { $, h, put, levelChip, bar, toast, viBox } from "../core/dom";
import { S, STORE_KEY, defaultState, deepMerge, replaceState, save } from "../core/state";
import { DAY, countWords, pct, sample, shuffle, todayKey, alignWords } from "../core/util";
import { SR, recognize, say, srNotice, voicePanel } from "../core/speech";
import { BADGES, SKILL_INFO, checkBadges, recordScore } from "../core/progress";
import { applyTheme, go, registerPage, route, setViewLevel, addTimer } from "../core/router";
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
  if (kind === "mock") return mockTestView(view, arg);
  setViewLevel(S.level);
  const taken = S.placement?.score != null;
  put(view, h("div", { class: "grid g4" },
    h("div", { class: "card", style: "display:flex;flex-direction:column;justify-content:space-between;margin-bottom:0" },
      h("div", {},
        h("div", { class: "chip sm", style: "margin-bottom:8px;background:var(--primary-soft);color:var(--primary);font-weight:700" }, "🧭 Phân loại xuất phát"),
        h("h3", { style: "margin:0 0 6px" }, "Placement test"),
        h("p", { class: "small muted", style: "margin:0;line-height:1.4" }, taken && S.placement ? `Kết quả: ${S.placement.result} (${S.placement.score}%) ngày ${new Date(S.placement.date).toLocaleDateString()}` : "25 câu hỏi tổng hợp xác định xuất phát điểm chuẩn A2, B1 hay B2.")
      ),
      h("div", { style: "margin-top:14px;padding-top:10px;border-top:1px solid var(--border-subtle)" },
        h("button", { class: "btn primary sm", style: "width:100%", onclick: () => go("placement") }, taken ? "Làm lại ↺" : "Bắt đầu thi →")
      )
    ),
    LEVELS.map(lv => {
      const st = S.stageTests[lv];
      return h("div", { class: "card", style: "display:flex;flex-direction:column;justify-content:space-between;margin-bottom:0" },
        h("div", {},
          h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-bottom:8px" },
            levelChip(lv),
            st ? h("span", { class: "done-badge", style: "font-size:0.75rem" }, `Best: ${st.best}%`) : h("span", { class: "small muted" }, "Chưa thi")
          ),
          h("h3", { style: "margin:0 0 6px" }, `${lv} Stage test`),
          h("p", { class: "small muted", style: "margin:0;line-height:1.4" }, "Đọc hiểu, Nghe, Ngữ pháp & Từ vựng, Viết và Nói (Đạt từ 70% để pass).")
        ),
        h("div", { style: "margin-top:14px;padding-top:10px;border-top:1px solid var(--border-subtle)" },
          h("button", { class: "btn sm", style: "width:100%", onclick: () => go("tests/stage/" + lv) }, st ? "Thi lại ↺" : "Làm bài thi →")
        )
      );
    })
  ));
  const allTests = LEVELS.flatMap(lv => DATA.mockTests[lv]);
  let activeTab: "all" | "toeic" | "ielts" | "cefr" = "all";
  let activeFilter: "all" | "full" | "mini" = "all";
  const gridContainer = h("div", { class: "grid g3", style: "margin-top:14px" });

  function renderMockGrid() {
    gridContainer.innerHTML = "";
    const filtered = allTests.filter(t => {
      const isToeic = t.category === "toeic" || t.id.includes("toeic") || t.title.toLowerCase().includes("toeic");
      const isIelts = t.category === "ielts" || t.id.includes("ielts") || t.title.toLowerCase().includes("ielts");
      if (activeTab === "toeic" && !isToeic) return false;
      if (activeTab === "ielts" && !isIelts) return false;
      if (activeTab === "cefr" && (isToeic || isIelts)) return false;

      const isFull = t.testType === "full" || t.timeLimit >= 60;
      if (activeFilter === "full" && !isFull) return false;
      if (activeFilter === "mini" && isFull) return false;
      return true;
    });

    filtered.sort((a, b) => {
      const aFull = a.testType === "full" || a.timeLimit >= 60;
      const bFull = b.testType === "full" || b.timeLimit >= 60;
      if (aFull !== bFull) return aFull ? -1 : 1;
      if (aFull && bFull) {
        if (b.timeLimit !== a.timeLimit) return b.timeLimit - a.timeLimit;
      }
      return 0;
    });

    put(gridContainer, filtered.map(t => {
      const best = S.mockTests[t.id];
      const isToeic = t.category === "toeic" || t.id.includes("toeic") || t.title.toLowerCase().includes("toeic");
      const isIelts = t.category === "ielts" || t.id.includes("ielts") || t.title.toLowerCase().includes("ielts");
      const isFull = t.testType === "full" || t.timeLimit >= 60;
      const badgeStyle = isToeic ? "background:#e0e7ff;color:#4338ca" : isIelts ? "background:#fce7f3;color:#be185d" : "background:#ecfdf5;color:#047857";
      const badgeIcon = isToeic ? "🏢 TOEIC ETS" : isIelts ? "🎓 IELTS" : "📘 CEFR";

      return h("div", { class: "card", style: `display:flex;flex-direction:column;justify-content:space-between;border:${isFull ? "2px solid var(--primary)" : "1.5px solid var(--border)"};border-radius:14px;box-shadow:${isFull ? "0 4px 16px rgba(79,70,229,0.12)" : "var(--shadow-sm)"};margin-bottom:0` },
        h("div", {},
          h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:4px" },
            h("div", { class: "row", style: "gap:6px;align-items:center" },
              levelChip(t.level),
              h("span", { class: "chip", style: `font-weight:700;font-size:0.75rem;${badgeStyle}` }, badgeIcon),
              isFull ? h("span", { class: "chip sm", style: "background:#fef3c7;color:#92400e;font-weight:800;border:1px solid #fcd34d" }, "🏆 FULL CHUẨN") : null
            ),
            h("span", { class: "chip sm" }, `⏱️ ${t.timeLimit}m · ${t.questions.length} câu`)
          ),
          t.target ? h("div", { style: "display:inline-block;font-size:0.8rem;font-weight:800;color:var(--primary);margin-bottom:4px" }, `🎯 ${t.target}`) : null,
          h("b", { style: "display:block;font-size:1.05rem;margin-bottom:6px;line-height:1.35" }, t.title),
          h("p", { class: "small muted", style: "margin:0;line-height:1.45" }, t.desc)
        ),
        h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-top:14px;padding-top:10px;border-top:1px solid var(--border-subtle)" },
          best != null
            ? h("span", { class: best >= 70 ? "done-badge" : "small", style: "font-weight:700" }, `Best: ${best}%`)
            : h("span", { class: "small muted" }, "Chưa làm"),
          h("button", { class: `btn sm ${isFull ? "primary" : ""}`, onclick: () => go("tests/mock/" + t.id) }, best != null ? "Làm lại ↺" : "Bắt đầu thi →")
        )
      );
    }));
  }

  const toeicCount = allTests.filter(t => t.category === "toeic" || t.id.includes("toeic") || t.title.toLowerCase().includes("toeic")).length;
  const ieltsCount = allTests.filter(t => t.category === "ielts" || t.id.includes("ielts") || t.title.toLowerCase().includes("ielts")).length;
  const cefrCount = allTests.filter(t => !t.category && !t.title.toLowerCase().includes("toeic") && !t.title.toLowerCase().includes("ielts")).length;

  const tabsRow = h("div", { class: "tab-group", style: "display:flex;gap:8px;flex-wrap:wrap;margin:14px 0 8px" },
    [
      { id: "all", label: `Tất cả (${allTests.length} đề)` },
      { id: "toeic", label: `🏢 TOEIC ETS (${toeicCount} đề)` },
      { id: "ielts", label: `🎓 IELTS Academic (${ieltsCount} đề)` },
      { id: "cefr", label: `📘 CEFR (${cefrCount} đề)` }
    ].map(tb => {
      const btn = h("button", {
        class: `btn sm ${activeTab === tb.id ? "primary" : ""}`,
        onclick: () => {
          activeTab = tb.id as any;
          tabsRow.querySelectorAll("button").forEach(b => b.classList.remove("primary"));
          btn.classList.add("primary");
          renderMockGrid();
        }
      }, tb.label);
      return btn;
    })
  );

  const filterRow = h("div", { class: "row", style: "gap:6px;align-items:center;margin-bottom:12px;flex-wrap:wrap" },
    h("span", { class: "small muted", style: "font-weight:700" }, "LỌC THEO THỜI LƯỢNG:"),
    [
      { id: "all", label: "Tất cả đề thi" },
      { id: "full", label: "🏆 Đề Chuẩn Full-Length (60–120 phút)" },
      { id: "mini", label: "⚡ Luyện tập nhanh (20–30 phút)" }
    ].map(f => {
      const btn = h("button", {
        class: `btn sm ${activeFilter === f.id ? "primary" : ""}`,
        style: "font-size:0.8rem",
        onclick: () => {
          activeFilter = f.id as any;
          filterRow.querySelectorAll("button").forEach(b => b.classList.remove("primary"));
          btn.classList.add("primary");
          renderMockGrid();
        }
      }, f.label);
      return btn;
    })
  );

  renderMockGrid();

  put(view, h("div", { class: "card" },
    h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px" },
      h("h2", { style: "margin:0" }, "🏆 Online Mock Exam Portal (Thi thử TOEIC & IELTS chuẩn Quốc Tế)"),
      h("span", { class: "chip", style: "background:var(--primary-soft);color:var(--primary);font-weight:700" }, "Chuẩn format ETS & Cambridge")
    ),
    h("p", { class: "small muted", style: "line-height:1.5" },
      "Hệ thống phòng thi chuẩn quốc tế: Đề thi Full-Length 120 phút (2 tiếng) TOEIC Complete (Listening 100 câu + Reading 100 câu = 200 câu thang điểm 990), Đề thi 75 phút TOEIC Reading (100 câu 101–200), Đề thi 60 phút IELTS Academic Reading (40 câu qua 3 Passages chuẩn Cambridge) cùng các đề Mini-Test luyện kỹ năng. Tự động đếm ngược thời gian, chấm điểm và quy đổi điểm số chính thức."),
    tabsRow,
    filterRow,
    gridContainer
  ));
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

/* ===================== MOCK TESTS ===================== */
function formatTime(sec: number): string {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function isQAnswered(box: Element): boolean {
  const radios = box.querySelectorAll<HTMLInputElement>('input[type="radio"]');
  if (radios.length) return Array.from(radios).some(r => r.checked);
  const inputs = box.querySelectorAll<HTMLInputElement>("input.gapin");
  if (inputs.length) return Array.from(inputs).some(i => i.value.trim().length > 0);
  const selects = box.querySelectorAll<HTMLSelectElement>("select");
  if (selects.length) return Array.from(selects).some(s => s.value !== "");
  return false;
}

function toToeicListeningScore(raw: number): number {
  if (raw >= 93) return 495;
  if (raw >= 88) return 465 + (raw - 88) * 6;
  if (raw >= 83) return 435 + (raw - 83) * 6;
  if (raw >= 78) return 405 + (raw - 78) * 6;
  if (raw >= 73) return 375 + (raw - 73) * 6;
  if (raw >= 68) return 345 + (raw - 68) * 6;
  if (raw >= 63) return 315 + (raw - 63) * 6;
  if (raw >= 58) return 285 + (raw - 58) * 6;
  if (raw >= 53) return 255 + (raw - 53) * 6;
  if (raw >= 48) return 225 + (raw - 48) * 6;
  if (raw >= 43) return 195 + (raw - 43) * 6;
  if (raw >= 38) return 165 + (raw - 38) * 6;
  if (raw >= 33) return 135 + (raw - 33) * 6;
  if (raw >= 28) return 105 + (raw - 28) * 6;
  if (raw >= 23) return 80 + (raw - 23) * 5;
  return Math.max(15, raw * 3);
}

function toToeicReadingScore(raw: number): number {
  if (raw >= 96) return 495;
  if (raw >= 91) return 465 + (raw - 91) * 6;
  if (raw >= 86) return 435 + (raw - 86) * 6;
  if (raw >= 81) return 405 + (raw - 81) * 6;
  if (raw >= 76) return 375 + (raw - 76) * 6;
  if (raw >= 71) return 345 + (raw - 71) * 6;
  if (raw >= 66) return 315 + (raw - 66) * 6;
  if (raw >= 61) return 285 + (raw - 61) * 6;
  if (raw >= 56) return 255 + (raw - 56) * 6;
  if (raw >= 51) return 225 + (raw - 51) * 6;
  if (raw >= 46) return 195 + (raw - 46) * 6;
  if (raw >= 41) return 165 + (raw - 41) * 6;
  if (raw >= 36) return 135 + (raw - 36) * 6;
  if (raw >= 31) return 105 + (raw - 31) * 6;
  if (raw >= 26) return 80 + (raw - 26) * 5;
  return Math.max(15, raw * 3);
}

function toIeltsReadingBand(raw: number): string {
  if (raw >= 39) return "Band 9.0 (Thông thạo xuất sắc - Expert)";
  if (raw >= 37) return "Band 8.5 (Rất tốt xuất sắc - Very Good +)";
  if (raw >= 35) return "Band 8.0 (Rất tốt - Very Good)";
  if (raw >= 33) return "Band 7.5 (Tốt vững vàng - Good +)";
  if (raw >= 30) return "Band 7.0 (Tốt - Good)";
  if (raw >= 27) return "Band 6.5 (Khá thành thạo - Competent +)";
  if (raw >= 23) return "Band 6.0 (Khá - Competent)";
  if (raw >= 19) return "Band 5.5 (Trung bình khá - Modest +)";
  if (raw >= 15) return "Band 5.0 (Trung bình - Modest)";
  if (raw >= 13) return "Band 4.5 (Hạn chế vừa)";
  if (raw >= 10) return "Band 4.0 (Hạn chế)";
  return "Band 3.5 trở xuống";
}

function mockTestView(view: HTMLElement, testId?: string): void {
  let test: MockTest | undefined;
  for (const lv of LEVELS) {
    const found = DATA.mockTests[lv].find(t => t.id === testId);
    if (found) { test = found; break; }
  }
  if (!test) {
    put(view, backLink("tests", "Tests & progress"), h("div", { class: "card" }, h("p", {}, "Mock test not found.")));
    return;
  }
  setViewLevel(test.level);

  const isToeic = test.category === "toeic" || test.id.includes("toeic") || test.title.toLowerCase().includes("toeic");
  const isIelts = test.category === "ielts" || test.id.includes("ielts") || test.title.toLowerCase().includes("ielts");
  const isFull = test.testType === "full" || test.timeLimit >= 60;
  const startNum = test.startNumber ?? 1;

  const headerCard = h("div", { class: "card", style: isFull ? "border-left: 5px solid var(--primary)" : "" },
    h("div", { class: "row", style: "gap:6px;align-items:center;margin-bottom:8px;flex-wrap:wrap" },
      levelChip(test.level),
      isFull ? h("span", { class: "chip", style: "background:#fef3c7;color:#92400e;font-weight:800;border:1px solid #fcd34d" }, "🏆 ĐỀ THI CHUẨN QUỐC TẾ") : null,
      test.target ? h("span", { class: "chip", style: "font-weight:800;color:var(--primary);background:var(--primary-soft)" }, `🎯 ${test.target}`) : null
    ),
    h("h1", { style: "margin:4px 0 8px" }, test.title),
    h("p", { class: "muted", style: "line-height:1.45" }, test.desc),
    viBox(isFull
      ? `Đề thi chuẩn quốc tế thời lượng ${test.timeLimit} phút gồm ${test.questions.length} câu hỏi. Hệ thống tự động đếm ngược và nộp bài khi hết giờ. Hãy làm bài nghiêm túc để hệ thống tính điểm và quy đổi chính xác.`
      : `Bài thi thử gồm ${test.questions.length} câu hỏi thuộc các dạng: Ngữ pháp, Từ vựng, Tìm lỗi sai, Viết lại câu và Đọc hiểu. Thời gian làm bài: ${test.timeLimit} phút. Đạt từ 70% trở lên để hoàn thành tốt.`)
  );

  let remainingSec = test.timeLimit * 60;
  const timeDisplay = h("b", { style: "font-variant-numeric:tabular-nums;font-size:1.15rem" }, formatTime(remainingSec));
  const timeBadge = h("div", { class: "chip", style: "display:inline-flex;align-items:center;gap:6px;padding:6px 12px;font-size:.92rem;background:var(--primary-soft);color:var(--primary)" },
    "⏱️ Thời gian còn lại: ", timeDisplay
  );

  const paletteBox = h("div", {
    style: "display:flex;gap:6px;flex-wrap:wrap;margin-top:10px;max-height:110px;overflow-y:auto;padding:4px 2px"
  });
  const palBtns: HTMLButtonElement[] = [];

  let paletteExpanded = false;
  const togglePaletteBtn = test.questions.length > 30 ? h("button", {
    class: "btn sm",
    style: "font-size:0.75rem;padding:2px 8px;border-radius:6px;margin-left:8px",
    onclick: (e: MouseEvent) => {
      paletteExpanded = !paletteExpanded;
      paletteBox.style.maxHeight = paletteExpanded ? "none" : "110px";
      (e.currentTarget as HTMLElement).textContent = paletteExpanded ? "Thu gọn ▲" : "Xem tất cả ▼";
    }
  }, "Xem tất cả ▼") : null;

  const ctrlBar = h("div", { class: "mock-bar" },
    h("div", { class: "row", style: "justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px" },
      timeBadge,
      h("div", { class: "row", style: "gap:6px;align-items:center" },
        h("span", { class: "small muted" }, `Tổng số: ${test.questions.length} câu hỏi`),
        togglePaletteBtn
      )
    ),
    paletteBox
  );

  const sectionBar = (test.sections && test.sections.length) ? h("div", { class: "card", style: "padding:10px 14px;margin-bottom:12px;background:var(--surface2);border:1px solid var(--border);border-radius:12px" },
    h("div", { class: "row", style: "gap:8px;align-items:center;flex-wrap:wrap" },
      h("span", { class: "small muted", style: "font-weight:700" }, "CHUYỂN NHANH ĐẾN PHẦN THI:"),
      test.sections.map(sec => h("button", {
        class: "btn sm",
        style: "font-weight:700;font-size:0.8rem;padding:4px 12px;border-radius:999px",
        onclick: () => {
          const qBoxes = quizCard.querySelectorAll(".q");
          if (qBoxes[sec.startIndex]) {
            qBoxes[sec.startIndex].scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, `📍 ${sec.name}`))
    )
  ) : null;

  const scoreResultCard = h("div", { class: "score-result-wrap" });
  const quizCard = h("div", { class: "card" });
  let isSubmitted = false;

  function updatePaletteState() {
    const qBoxes = quizCard.querySelectorAll(".q");
    qBoxes.forEach((box, i) => {
      const btn = palBtns[i];
      if (!btn) return;
      if (isSubmitted) {
        const ok = box.querySelector(".fb.ok") !== null;
        btn.className = "palette-btn " + (ok ? "palette-correct" : "palette-wrong");
      } else {
        const answered = isQAnswered(box);
        btn.className = "palette-btn" + (answered ? " palette-answered" : "");
      }
    });
  }

  test.questions.forEach((_q, i) => {
    const qNum = startNum + i;
    const btn = h("button", { class: "palette-btn", title: `Câu ${qNum}`, onclick: () => {
      const qBoxes = quizCard.querySelectorAll(".q");
      if (qBoxes[i]) qBoxes[i].scrollIntoView({ behavior: "smooth", block: "center" });
    } }, String(qNum)) as HTMLButtonElement;
    palBtns.push(btn);
    paletteBox.append(btn);
  });

  const timerInterval = window.setInterval(() => {
    if (isSubmitted) return;
    remainingSec--;
    if (remainingSec <= 0) {
      clearInterval(timerInterval);
      timeDisplay.textContent = "00:00";
      timeBadge.style.background = "var(--bad-soft)";
      timeBadge.style.color = "var(--bad)";
      toast("⏰ Hết giờ làm bài! Đang tự động nộp bài...", "bad");
      const btn = quizCard.querySelector<HTMLButtonElement>("button.btn.primary");
      if (btn) btn.click();
    } else {
      timeDisplay.textContent = formatTime(remainingSec);
      if (remainingSec <= 180) {
        timeBadge.style.background = "var(--bad-soft)";
        timeBadge.style.color = "var(--bad)";
      }
    }
  }, 1000);
  addTimer(timerInterval);

  const quizEl = quiz(test.questions, {
    title: test.title,
    skill: "tests",
    checkLabel: "Nộp bài thi",
    startNumber: test.startNumber,
    onDone: (score, results) => {
      isSubmitted = true;
      clearInterval(timerInterval);
      timeDisplay.textContent = "Đã nộp bài";
      S.mockTests[test.id] = Math.max(S.mockTests[test.id] || 0, score);
      recordScore("tests", score, test.id);
      checkBadges();
      save();
      updatePaletteState();

      scoreResultCard.innerHTML = "";
      const rawCorrect = results ? results.filter(r => r.got >= r.total).length : Math.round((score / 100) * test.questions.length);
      let estScore = "";
      let advice = "";

      if (isToeic) {
        if (test.questions.length === 200) {
          const lCorrect = results ? results.slice(0, 100).filter(r => r.got >= r.total).length : Math.round(rawCorrect / 2);
          const rCorrect = results ? results.slice(100, 200).filter(r => r.got >= r.total).length : Math.round(rawCorrect / 2);
          const lScore = toToeicListeningScore(lCorrect);
          const rScore = toToeicReadingScore(rCorrect);
          const totalToeic = lScore + rScore;
          estScore = `🏢 TỔNG ĐIỂM TOEIC OFFICIAL: ${totalToeic}/990\n🎧 Listening: ${lScore}/495 (${lCorrect}/100 câu đúng)\n📖 Reading:   ${rScore}/495 (${rCorrect}/100 câu đúng)\n🎯 Đánh giá năng lực: ${totalToeic >= 850 ? "Trình độ C1 / Professional working proficiency" : totalToeic >= 750 ? "Trình độ B2+ / Xuất sắc chuẩn doanh nghiệp đa quốc gia" : totalToeic >= 600 ? "Trình độ B1-B2 / Chuẩn đầu ra đại học & giao tiếp công sở tốt" : "Cần củng cố thêm từ vựng và phản xạ nghe"}`;
          advice = totalToeic >= 750 ? "Thành tích tuyệt vời! Bạn có khả năng giao tiếp và xử lý văn bản công sở bằng tiếng Anh rất trôi chảy." : "Hãy xem kỹ các câu sai trong Sổ tay lỗi sai và luyện thêm phản xạ nghe Part 3, 4.";
        } else if (test.questions.length === 100) {
          const rScore = toToeicReadingScore(rawCorrect);
          const estMin = Math.max(100, Math.min(990, rScore * 2 - 25));
          const estMax = Math.min(990, rScore * 2 + 15);
          estScore = `🏢 Điểm TOEIC Reading: ${rScore}/495 · Điểm thô: ${rawCorrect}/100 câu đúng\n🎯 Dự đoán điểm tổng TOEIC (Listening + Reading): ~${estMin}–${estMax}/990`;
          advice = rScore >= 400 ? "Xuất sắc! Nắm rất vững toàn bộ cấu trúc Part 5, 6 và đọc hiểu Part 7 đơn/đôi/ba." : rScore >= 300 ? "Khá tốt! Đạt chuẩn đầu ra đại học và các tập đoàn quốc tế. Hãy ôn kỹ các câu Part 7 đọc kép/ba trong sổ lỗi sai." : "Cần tăng tốc độ đọc và củng cố ngữ pháp Part 5 để không bị thiếu giờ.";
        } else {
          const rScore = Math.min(495, Math.max(115, Math.round((score * 4.95) / 5) * 5));
          const estMin = Math.max(200, rScore * 2 - 30);
          const estMax = Math.min(990, rScore * 2 + 20);
          estScore = `🏢 Ước tính TOEIC Reading: ${rScore}/495 · Dự đoán Overall: ~${estMin}–${estMax}/990`;
          advice = score >= 80 ? "Xuất sắc! Bạn nắm rất vững cấu trúc Part 5 & đọc hiểu Part 6." : score >= 60 ? "Khá tốt! Hãy ôn kỹ các câu sai trong Sổ tay lỗi sai để bứt phá điểm số." : "Cần củng cố thêm từ vựng 600 TOEIC và ngữ pháp cơ bản.";
        }
      } else if (isIelts) {
        if (test.questions.length === 40) {
          const band = toIeltsReadingBand(rawCorrect);
          estScore = `🎓 Kết quả IELTS Academic Reading: ${band}\n🎯 Điểm thô: ${rawCorrect}/40 câu đúng (Tỉ lệ: ${score}%)`;
          advice = rawCorrect >= 30 ? "Xuất sắc! Kỹ năng đọc hiểu học thuật, scanning, skimming và phân tích bẫy T/F/NG đạt chuẩn Band 7.0+ quốc tế." : rawCorrect >= 23 ? "Đạt mục tiêu Band 6.0 - 6.5! Chú ý các cặp từ đồng nghĩa paraphrasing và bẫy Not Given." : "Cần tăng cường vốn từ vựng học thuật Academic Word List và phương pháp gạch chân từ khóa.";
        } else {
          const band = score >= 90 ? "Band 8.5" : score >= 82 ? "Band 8.0" : score >= 75 ? "Band 7.5" : score >= 68 ? "Band 7.0" : score >= 60 ? "Band 6.5" : score >= 52 ? "Band 6.0" : score >= 45 ? "Band 5.5" : score >= 38 ? "Band 5.0" : "Band 4.0 - 4.5";
          estScore = `🎓 Dự đoán IELTS Reading: ${band} Academic`;
          advice = score >= 75 ? "Kỹ năng định vị từ khóa và đọc hiểu học thuật rất vững vàng!" : "Hãy chú ý bẫy True/False/Not Given và các cặp từ đồng nghĩa (paraphrasing).";
        }
      } else {
        estScore = `📘 Đạt chuẩn: ${test.level} (${score}%)`;
        advice = score >= 70 ? "Bạn đã vượt qua bài thi tiêu chuẩn này!" : "Cần luyện tập thêm các chủ điểm ngữ pháp trọng tâm.";
      }

      put(scoreResultCard, h("div", { class: "card", style: "border:2px solid var(--primary);background:var(--primary-soft);margin-bottom:18px" },
        h("div", { class: "row", style: "justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px" },
          h("div", { style: "flex:1;min-width:240px" },
            h("div", { style: "font-size:0.85rem;font-weight:700;color:var(--muted);text-transform:uppercase" }, "BẢNG TỔNG KẾT BÀI THI"),
            h("h2", { style: "margin:4px 0 2px" }, `Điểm số: ${score}% (${rawCorrect}/${test.questions.length} câu đúng)`),
            h("div", { style: "font-weight:800;font-size:1.1rem;color:var(--primary);white-space:pre-line;line-height:1.4" }, estScore),
            h("div", { class: "small muted", style: "margin-top:6px" }, advice)
          ),
          h("div", { class: "row", style: "gap:8px" },
            h("button", { class: "btn sm", onclick: () => go("tests") }, "Danh sách đề thi"),
            h("button", { class: "btn sm primary", onclick: () => { const fst = quizCard.querySelector(".q"); if (fst) fst.scrollIntoView({ behavior: "smooth" }); } }, "Xem giải thích câu sai ↓")
          )
        )
      ));
      scoreResultCard.scrollIntoView({ behavior: "smooth" });
      toast(score >= 70 ? `🎉 Xuất sắc! Bạn đạt ${score}%` : `Đã hoàn thành: ${score}%. Hãy xem lại các câu sai!`);
    }
  });

  quizCard.append(quizEl);
  quizCard.addEventListener("change", () => updatePaletteState());
  quizCard.addEventListener("input", () => updatePaletteState());

  put(view, backLink("tests", "Tests & progress"), headerCard, ctrlBar, sectionBar, scoreResultCard, quizCard);
}
