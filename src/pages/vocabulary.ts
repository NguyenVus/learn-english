/* Grammar lessons and Vocabulary (flashcards, word banks, phrasal verbs, collocations, mistakes) */
import type { Level, MCQuestion, VocabCard } from "../types";
import { DATA, LEVELS } from "../data";
import { h, put, levelChip, toast, viBox } from "../core/dom";
import { S, save, dueCards, learnedCount } from "../core/state";
import { alignWords, escapeRx, norm, pct, sample, shuffle } from "../core/util";
import { say } from "../core/speech";
import { recordScore } from "../core/progress";
import { go, registerPage, route, setViewLevel } from "../core/router";
import { backLink, doneMark, levelTabs, lockNote, renderDiff } from "../core/ui";
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
const TABS: [string, () => string][] = [
  ["review", () => "🃏 Review"],
  ["mywords", () => `⭐ My words (${Object.keys(S.vocab).length})`],
  ["toeic", () => "🎯 600 Từ TOEIC (12 chủ đề)"],
  ["banks", () => "📚 Word banks (CEFR)"],
  ["phrasal", () => "🔗 Phrasal & Collocations"],
  ["mistakes", () => "⚠️ Common mistakes"]
];
registerPage("vocabulary", "Vocabulary", (view, tabArg, arg2) => {
  const tab = tabArg || "review"; const lv = asLevel(arg2); setViewLevel(lv);
  put(view, h("div", { class: "tabs" }, TABS.map(([k, l]) => h("button", { class: k === tab ? "active" : "", onclick: () => go("vocabulary/" + k) }, l()))));
  if (tab === "review") flashcards(view, lv);
  else if (tab === "mywords") myWords(view);
  else if (tab === "toeic") toeicPage(view, arg2);
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
  let mode: "cards" | "spelling" = (localStorage.getItem("vocab_review_mode") as "cards" | "spelling") || "cards";
  const wrap = h("div");

  const modeBar = h("div", { class: "row", style: "margin-bottom:12px;gap:8px" },
    h("span", { class: "small muted" }, "Chế độ ôn tập:"),
    h("button", {
      class: `btn sm ${mode === "cards" ? "primary" : ""}`,
      onclick: () => { mode = "cards"; localStorage.setItem("vocab_review_mode", mode); modeBarUpd(); show(); }
    }, "🃏 Thẻ ghi nhớ (Flip)"),
    h("button", {
      class: `btn sm ${mode === "spelling" ? "primary" : ""}`,
      onclick: () => { mode = "spelling"; localStorage.setItem("vocab_review_mode", mode); modeBarUpd(); show(); }
    }, "✍️ Luyện gõ từ (Spelling)"),
    h("span", { class: "spacer" }),
    h("span", { class: "chip" }, `${queue.length} từ đến hạn ôn`)
  );

  const modeBarUpd = () => {
    modeBar.querySelectorAll("button").forEach((b, i) => {
      b.className = `btn sm ${((i === 0 && mode === "cards") || (i === 1 && mode === "spelling")) ? "primary" : ""}`;
    });
  };

  put(view, modeBar,
    h("p", { class: "muted small" }, "Spaced repetition: words you know come back later (1, 3, 7, 14, 30 days); words you get wrong come back within minutes."),
    viBox("Lặp lại ngắt quãng: chuyển đổi linh hoạt giữa Lật thẻ (Flip) và Gõ chính tả (Spelling) để nhớ từ vựng sâu hơn."),
    wrap);

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
        h("div", { class: "row", style: "justify-content:center" },
          h("button", { class: "btn", onclick: () => go("vocabulary/banks") }, "Add more words"),
          h("button", { class: "btn primary", onclick: () => { queue = shuffle(Object.values(S.vocab)).slice(0, 15); show(); } }, "Practise anyway (15 random)"))));
      return;
    }

    const c = queue[0];

    if (mode === "spelling") {
      let hintShown = false;
      const maskedEx = c.ex ? c.ex.replace(new RegExp("\\b" + escapeRx(c.w) + "\\b", "gi"), "_______") : "";
      const hintEl = h("div", { class: "small muted", style: "margin-top:6px;min-height:18px" });
      const hintBtn = h("button", { class: "btn sm", onclick: () => {
        hintShown = true;
        hintEl.textContent = `💡 Gợi ý: bắt đầu bằng '${c.w[0]}' (${c.w.length} chữ cái)`;
      } }, "💡 Gợi ý");

      const inp = h("input", {
        type: "text",
        class: "gapin",
        placeholder: "Gõ từ tiếng Anh...",
        style: "font-size:1.25rem;width:100%;max-width:320px;text-align:center;padding:8px 12px;margin:14px auto;display:block",
        autocomplete: "off",
        spellcheck: "false"
      });

      const fb = h("div", { style: "margin-top:10px;text-align:center" });
      const nextBtn = h("button", { class: "btn primary", style: "display:none;margin:12px auto" }, "Tiếp tục (Enter) →");

      let submitted = false;
      const submit = () => {
        if (submitted) {
          queue.shift();
          show();
          return;
        }
        const val = inp.value.trim();
        if (!val) { toast("Hãy gõ từ tiếng Anh trước", "bad"); return; }
        submitted = true;
        inp.disabled = true;
        const ok = norm(val) === norm(c.w);
        answered++;
        void say(c.w);

        if (ok) {
          right++;
          inp.classList.add("correct");
          gradeCard(c, hintShown ? 1 : 2);
          put(fb, h("div", { class: "notice ok", style: "font-weight:700" }, `✓ Chính xác! “${c.w}”`));
        } else {
          inp.classList.add("wrong");
          gradeCard(c, 0);
          queue.splice(Math.min(3, queue.length), 0, c);
          put(fb,
            h("div", { class: "notice bad" },
              h("div", { style: "font-weight:700;font-size:1.15rem" }, `✗ Đáp án đúng: ${c.w}`),
              h("div", { class: "small muted" }, `Bạn đã gõ: “${val}”`),
              renderDiff(alignWords(c.w, val).ops, { showExtra: false })
            )
          );
        }
        checkBtn.style.display = "none";
        nextBtn.style.display = "inline-flex";
        nextBtn.focus();
      };

      inp.onkeydown = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
          e.preventDefault();
          submit();
        }
      };
      nextBtn.onclick = submit;
      const checkBtn = h("button", { class: "btn primary", onclick: submit }, "Kiểm tra");

      const card = h("div", { class: "flash", style: "cursor:default;min-height:260px" },
        h("div", { class: "small muted" }, `${c.level || ""} · box ${c.box}`),
        h("div", { style: "font-size:1.8rem;font-weight:800;color:var(--text);margin:6px 0" }, "🇻🇳 " + (c.vi || "—")),
        c.pos ? h("div", { class: "chip", style: "margin-bottom:6px" }, c.pos) : null,
        c.en ? h("div", { class: "small muted", style: "max-width:440px;margin:4px 0" }, c.en) : null,
        maskedEx ? h("div", { class: "ctx small", style: "margin-top:10px;font-style:italic" }, `“${maskedEx}”`) : null,
        inp,
        h("div", { class: "row", style: "justify-content:center;gap:8px" },
          c.ex ? h("button", { class: "btn sm", onclick: () => void say(c.ex) }, "🔊 Nghe ví dụ") : null,
          hintBtn,
          checkBtn
        ),
        hintEl,
        fb,
        nextBtn
      );

      put(wrap,
        h("div", { class: "row small muted" },
          `Từ ${answered + 1} · còn ${queue.length} từ (${total0} từ đến hạn)`,
          h("span", { class: "spacer" }),
          h("button", { class: "btn sm", onclick: () => void say(c.w) }, "🔊 Nghe phát âm")
        ),
        card
      );
      setTimeout(() => inp.focus(), 50);
      return;
    }

    // Classic Flip card mode
    const back = h("div", { class: "hidden" },
      h("div", { style: "font-size:1.2rem;margin-top:10px" }, "🇻🇳 ", h("b", {}, c.vi || "—")),
      h("div", { class: "muted" }, c.en),
      c.ex ? h("div", { class: "small", style: "margin-top:8px" }, "“" + c.ex + "”") : null
    );
    const hint = h("p", { class: "center muted small" }, "Think of the meaning, then click the card to check.");
    const grade = (g: 0 | 1 | 2 | 3) => {
      answered++; if (g >= 2) right++;
      gradeCard(c, g); queue.shift();
      if (g === 0) queue.splice(Math.min(3, queue.length), 0, c);
      show();
    };
    const btns = h("div", { class: "row hidden", style: "justify-content:center;margin-top:12px" },
      h("button", { class: "btn danger", onclick: () => grade(0) }, "✗ Again"),
      h("button", { class: "btn", onclick: () => grade(1) }, "😐 Hard"),
      h("button", { class: "btn ok", onclick: () => grade(2) }, "✓ Good"),
      h("button", { class: "btn primary", onclick: () => grade(3) }, "⚡ Easy")
    );
    const card = h("div", { class: "flash", onclick: () => { back.classList.remove("hidden"); btns.classList.remove("hidden"); hint.classList.add("hidden"); } },
      h("div", { class: "small muted" }, `${c.level || ""} · box ${c.box}`),
      h("div", { class: "word" }, c.w),
      c.pos ? h("div", { class: "small muted" }, c.pos) : null,
      back
    );
    put(wrap,
      h("div", { class: "row small muted" },
        `Card ${answered + 1} · ${queue.length} left in this session (${total0} were due)`,
        h("span", { class: "spacer" }),
        h("button", { class: "btn sm", onclick: (e: MouseEvent) => { e.stopPropagation(); void say(c.w); } }, "🔊")
      ),
      card, hint, btns
    );
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

function toeicPage(view: HTMLElement, topicArg?: string): void {
  const allTopics = DATA.toeic600 || [];
  const selectedIdx = topicArg && !isNaN(Number(topicArg)) ? Number(topicArg) - 1 : -1;
  const topicsToShow = selectedIdx >= 0 && selectedIdx < allTopics.length ? [allTopics[selectedIdx]] : allTopics;

  put(view,
    h("div", { class: "card", style: "border-left:5px solid var(--primary)" },
      h("div", { class: "row", style: "justify-content:space-between;align-items:center" },
        h("h1", { style: "margin:0" }, "🎯 600 Essential Words for the TOEIC"),
        h("span", { class: "chip lv B1" }, "12 chủ đề · 600 từ vựng")
      ),
      h("p", { class: "muted", style: "margin-top:8px" },
        "Bộ 600 từ vựng cốt lõi thường gặp nhất trong các đề thi TOEIC thực tế (Part 1 - Part 7), chia đều theo 12 nhóm chủ đề thương mại & công sở. Mỗi từ đều có phiên âm, loại từ, giải nghĩa tiếng Việt và câu ví dụ chuẩn format ETS."),
      viBox("Mẹo: Bấm '＋ Thêm cả 50 từ' ở từng chủ đề để nạp ngay vào bộ Flashcards lặp lại ngắt quãng (Spaced Repetition) và chế độ Gõ từ (Spelling Quiz)."),
      h("div", { class: "row", style: "gap:6px;margin-top:14px;flex-wrap:wrap" },
        h("button", { class: "btn sm" + (selectedIdx === -1 ? " primary" : ""), onclick: () => go("vocabulary/toeic") }, "Tất cả 12 chủ đề (600 từ)"),
        allTopics.map((t, i) =>
          h("button", { class: "btn sm" + (selectedIdx === i ? " primary" : ""), onclick: () => go(`vocabulary/toeic/${i + 1}`) }, `${i + 1}. ${t.titleVi}`)
        )
      )
    )
  );

  topicsToShow.forEach((t) => {
    const originalIndex = allTopics.indexOf(t);
    const quizCard = h("div");
    const topicCard = h("div", { class: "card" },
      h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-bottom:12px" },
        h("div", {},
          h("div", { class: "chip", style: "margin-bottom:4px" }, `Chủ đề ${originalIndex + 1}/12 · 50 từ`),
          h("h2", { style: "margin:0" }, `${t.topic} (${t.titleVi})`)
        ),
        h("div", { class: "row" },
          h("button", { class: "btn sm", onclick: () => {
            const sampleWords = sample(t.words, 8);
            const questions: MCQuestion[] = sampleWords.map(w => {
              const wrongOptions = sample(t.words.filter(x => x[0] !== w[0]), 3).map(x => x[2]);
              const o = shuffle([w[2], ...wrongOptions]);
              return {
                t: "mc",
                q: `What is the meaning of the word “${w[0]}” (${w[1]}) in TOEIC?`,
                o,
                a: o.indexOf(w[2]),
                x: `“${w[0]}” (${w[1]}): ${w[2]}. Ví dụ: “${w[4]}”`
              };
            });
            quizCard.innerHTML = "";
            put(quizCard, h("div", { class: "card", style: "margin-top:14px;border:2px solid var(--primary)" },
              h("h3", {}, `⚡ Quick Quiz: ${t.titleVi} (8 câu hỏi nhanh)`),
              quiz(questions, { onDone: s => recordScore("vocab", s) })
            ));
            quizCard.scrollIntoView({ behavior: "smooth" });
          } }, "⚡ Luyện Quiz 8 câu"),
          h("button", { class: "btn sm primary", onclick: () => {
            let addedCount = 0;
            t.words.forEach(([w, pos, vi, en, ex]) => {
              if (addWord({ w, pos, vi, en, ex, level: "B1" })) addedCount++;
            });
            toast(`🎉 Đã thêm ${addedCount} từ mới của chủ đề "${t.titleVi}" vào Flashcards!`);
            route();
          } }, "＋ Thêm cả 50 từ vào Flashcards")
        )
      ),
      h("table", {},
        h("tr", {},
          h("th", { style: "width:22%" }, "Từ vựng"),
          h("th", { style: "width:28%" }, "Nghĩa tiếng Việt"),
          h("th", {}, "Định nghĩa & Câu ví dụ TOEIC"),
          h("th", { style: "width:85px;text-align:center" }, "Thao tác")
        ),
        t.words.map(([w, pos, vi, en, ex]) => {
          const isAdded = !!S.vocab[w.toLowerCase()];
          const addBtn = h("button", { class: "btn sm", onclick: (e: MouseEvent) => {
            addWord({ w, pos, vi, en, ex, level: "B1" });
            (e.target as HTMLElement).replaceWith("✓");
            toast(`Đã thêm "${w}" vào Flashcards`);
          } }, isAdded ? "✓" : "＋");
          if (isAdded) addBtn.replaceWith("✓");
          return h("tr", {},
            h("td", {}, h("b", {}, w), " ", h("span", { class: "chip", style: "font-size:.72rem" }, pos)),
            h("td", {}, h("span", { style: "font-weight:600;color:var(--text)" }, vi)),
            h("td", { class: "small" },
              h("div", { class: "muted" }, en),
              h("div", { style: "margin-top:3px;font-style:italic" }, `“${ex}”`)
            ),
            h("td", { style: "text-align:center;white-space:nowrap" },
              h("button", { class: "btn sm", style: "padding:2px 7px;margin-right:4px", title: "Phát âm", onclick: () => void say(`${w}. ${ex}`) }, "🔊"),
              addBtn
            )
          );
        })
      ),
      quizCard
    );
    put(view, topicCard);
  });
}
