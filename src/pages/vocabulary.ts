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
  let queue: VocabCard[] = dueCards();
  const total0 = queue.length;
  let right = 0, answered = 0;
  let mode: "cards" | "spelling" = (localStorage.getItem("vocab_review_mode") as "cards" | "spelling") || "cards";
  const stage = h("div", { class: "flashcard-stage" });

  const modeBar = h("div", { class: "card", style: "display:flex;justify-content:space-between;align-items:center;padding:12px 18px;margin-bottom:12px;flex-wrap:wrap;gap:10px" },
    h("div", { class: "row", style: "gap:8px;align-items:center" },
      h("span", { class: "small muted", style: "font-weight:700" }, "CHẾ ĐỘ:"),
      h("button", {
        class: `btn sm ${mode === "cards" ? "primary" : ""}`,
        onclick: () => { mode = "cards"; localStorage.setItem("vocab_review_mode", mode); modeBarUpd(); show(); }
      }, "🃏 Thẻ ghi nhớ (Flip)"),
      h("button", {
        class: `btn sm ${mode === "spelling" ? "primary" : ""}`,
        onclick: () => { mode = "spelling"; localStorage.setItem("vocab_review_mode", mode); modeBarUpd(); show(); }
      }, "✍️ Luyện gõ từ (Spelling)")
    ),
    h("div", { class: "row", style: "gap:8px;align-items:center" },
      h("span", { class: "chip" }, `🎯 ${queue.length} từ đến hạn ôn`),
      h("button", { class: "btn sm", onclick: () => go("vocabulary/banks/" + lv) }, "＋ Thêm từ mới")
    )
  );

  const modeBarUpd = () => {
    modeBar.querySelectorAll("button").forEach((b, i) => {
      if (i <= 1) {
        b.className = `btn sm ${((i === 0 && mode === "cards") || (i === 1 && mode === "spelling")) ? "primary" : ""}`;
      }
    });
  };

  put(view, modeBar, stage);

  if (!Object.keys(S.vocab).length) {
    put(stage, h("div", { class: "card center", style: "padding:36px 20px" },
      h("span", { style: "font-size:3rem" }, "🗂️"),
      h("h2", { style: "margin:10px 0" }, "Bộ thẻ Flashcard của bạn đang trống"),
      h("p", { class: "muted small", style: "max-width:440px;margin:0 auto 16px" }, "Hãy thêm từ vựng từ 600 từ TOEIC, ngân hàng từ vựng A2/B1/B2 hoặc nhấp vào bất kỳ từ nào trong bài đọc."),
      h("button", { class: "btn primary", onclick: () => { toast(addTopicWords(lv, 10) + " từ đã được thêm"); route(); } }, `＋ Thêm ngay 10 từ trình độ ${lv}`)
    ));
    return;
  }

  const show = (): void => {
    stage.innerHTML = "";
    if (!queue.length) {
      if (answered) recordScore("vocab", pct(right, answered));
      const next = Object.values(S.vocab).sort((a, b) => a.due - b.due)[0];
      put(stage, h("div", { class: "card center", style: "padding:36px 20px" },
        h("span", { style: "font-size:3.2rem" }, answered ? "🎉" : "✅"),
        h("h2", { style: "margin:12px 0 6px" }, answered ? "Hoàn thành phiên ôn tập!" : "Chưa có từ nào đến hạn ôn"),
        answered ? h("p", { style: "font-size:1.1rem;font-weight:600;color:var(--ok)" }, `Bạn đã ôn tập ${answered} từ · Tỷ lệ ghi nhớ: ${pct(right, answered)}%`) : null,
        next ? h("p", { class: "small muted" }, "Lần ôn tiếp theo: " + new Date(next.due).toLocaleString()) : null,
        h("div", { class: "row", style: "justify-content:center;gap:10px;margin-top:16px" },
          h("button", { class: "btn", onclick: () => go("vocabulary/toeic") }, "🎯 600 Từ TOEIC"),
          h("button", { class: "btn primary", onclick: () => { queue = shuffle(Object.values(S.vocab)).slice(0, 15); show(); } }, "Luyện tập ngẫu nhiên (15 từ)")
        )
      ));
      return;
    }

    const c = queue[0];
    const totalRemaining = queue.length;
    const progressPct = pct(answered, (answered + totalRemaining) || 1);

    // Session Progress Header
    const progressHeader = h("div", { class: "flashcard-header" },
      h("div", { class: "row", style: "justify-content:space-between;align-items:center" },
        h("span", { style: "font-weight:700;font-size:0.9rem" }, `Thẻ ${answered + 1} / ${Math.max(total0, answered + totalRemaining)} · Còn ${totalRemaining} thẻ`),
        h("div", { class: "row", style: "gap:8px" },
          h("button", { class: "btn sm", onclick: () => void say(c.w), title: "Phát âm" }, "🔊 Nghe từ")
        )
      ),
      h("div", { class: "flashcard-progress-bar" },
        h("div", { class: "flashcard-progress-fill", style: `width:${progressPct}%` })
      )
    );

    if (mode === "spelling") {
      let hintShown = false;
      const maskedEx = c.ex ? c.ex.replace(new RegExp("\\b" + escapeRx(c.w) + "\\b", "gi"), "_______") : "";
      const hintEl = h("div", { class: "small muted", style: "margin-top:8px;min-height:20px;text-align:center" });
      const hintBtn = h("button", { class: "btn sm", onclick: () => {
        hintShown = true;
        hintEl.textContent = `💡 Gợi ý: bắt đầu bằng '${c.w[0]}' (${c.w.length} chữ cái)`;
      } }, "💡 Xem gợi ý");

      const inp = h("input", {
        type: "text",
        class: "gapin",
        placeholder: "Gõ từ tiếng Anh tại đây...",
        style: "font-size:1.35rem;font-weight:700;width:100%;max-width:360px;text-align:center;padding:10px 14px;margin:16px auto;display:block;border-radius:12px;border:2px solid var(--border)",
        autocomplete: "off",
        spellcheck: "false"
      });

      const fb = h("div", { style: "margin-top:12px;text-align:center;width:100%" });
      const nextBtn = h("button", { class: "btn primary", style: "display:none;margin:14px auto" }, "Tiếp tục (Enter) →");

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

      const card = h("div", { class: "flash flash-pro", style: "cursor:default;min-height:360px" },
        h("div", { class: "flash-pro-top" },
          levelChip(c.level || lv),
          h("span", { class: "flash-meta-pill" }, `📦 Hộp Leitner ${c.box}/5`),
          h("button", { class: "flash-speaker-btn", onclick: () => void say(c.w) }, "🔊 Nghe từ")
        ),
        h("div", { class: "flash-body" },
          h("div", { class: "flash-meaning-vi", style: "margin:10px 0" }, "🇻🇳 " + (c.vi || "—")),
          c.pos ? h("span", { class: "flash-pos-pill" }, c.pos) : null,
          c.en ? h("div", { class: "flash-meaning-en", style: "margin-bottom:8px" }, c.en) : null,
          maskedEx ? h("div", { class: "flash-example-box" },
            h("span", {}, `“${maskedEx}”`),
            h("button", { class: "btn sm", onclick: () => void say(c.ex) }, "🔊")
          ) : null,
          inp,
          h("div", { class: "row", style: "justify-content:center;gap:10px;margin-top:6px" },
            hintBtn,
            checkBtn
          ),
          hintEl,
          fb,
          nextBtn
        )
      );

      put(stage, progressHeader, card);
      setTimeout(() => inp.focus(), 60);
      return;
    }

    // Classic Flip card mode
    let isFlipped = false;
    const grade = (g: 0 | 1 | 2 | 3) => {
      answered++; if (g >= 2) right++;
      gradeCard(c, g); queue.shift();
      if (g === 0) queue.splice(Math.min(3, queue.length), 0, c);
      show();
    };

    const back = h("div", { class: "flash-back-wrap hidden" },
      h("div", { class: "flash-divider" }),
      h("div", { class: "flash-meaning-vi" }, "🇻🇳 " + (c.vi || "—")),
      c.en ? h("div", { class: "flash-meaning-en" }, c.en) : null,
      c.ex ? h("div", { class: "flash-example-box" },
        h("span", {}, `“${c.ex}”`),
        h("button", { class: "btn sm", onclick: (e: MouseEvent) => { e.stopPropagation(); void say(c.ex); } }, "🔊")
      ) : null
    );

    const hint = h("div", { class: "flash-flip-hint" }, "💡 Chạm vào thẻ hoặc bấm phím Space để xem nghĩa");

    const btns = h("div", { class: "row hidden flash-rating-grid" },
      h("button", { class: "btn danger btn-grade btn-grade-again", onclick: () => grade(0) },
        h("span", { class: "btn-grade-name" }, "✕ Again"),
        h("span", { class: "btn-grade-time" }, "< 1p · [1]")
      ),
      h("button", { class: "btn btn-grade btn-grade-hard", onclick: () => grade(1) },
        h("span", { class: "btn-grade-name" }, "😐 Hard"),
        h("span", { class: "btn-grade-time" }, "1 ngày · [2]")
      ),
      h("button", { class: "btn ok btn-grade btn-grade-good", onclick: () => grade(2) },
        h("span", { class: "btn-grade-name" }, "✓ Good"),
        h("span", { class: "btn-grade-time" }, "3 ngày · [3]")
      ),
      h("button", { class: "btn primary btn-grade btn-grade-easy", onclick: () => grade(3) },
        h("span", { class: "btn-grade-name" }, "⚡ Easy"),
        h("span", { class: "btn-grade-time" }, "7 ngày · [4]")
      )
    );

    const flipCard = () => {
      if (isFlipped) return;
      isFlipped = true;
      back.classList.remove("hidden");
      btns.classList.remove("hidden");
      hint.textContent = "Đánh giá mức độ nhớ của bạn bên dưới:";
      hint.style.background = "transparent";
    };

    const card = h("div", { class: "flash flash-pro", onclick: flipCard },
      h("div", { class: "flash-pro-top" },
        levelChip(c.level || lv),
        h("span", { class: "flash-meta-pill" }, `📦 Hộp Leitner ${c.box}/5`),
        h("button", { class: "flash-speaker-btn", onclick: (e: MouseEvent) => { e.stopPropagation(); void say(c.w); } }, "🔊 Nghe từ")
      ),
      h("div", { class: "flash-body" },
        h("div", { class: "flash-main-word word" }, c.w),
        c.pos ? h("span", { class: "flash-pos-pill" }, c.pos) : null,
        back
      ),
      hint
    );

    // Keyboard controls (Space to flip, 1-4 to grade)
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === "Space" || e.key === "Enter") {
        e.preventDefault();
        flipCard();
      } else if (isFlipped) {
        if (e.key === "1") { e.preventDefault(); grade(0); }
        else if (e.key === "2") { e.preventDefault(); grade(1); }
        else if (e.key === "3") { e.preventDefault(); grade(2); }
        else if (e.key === "4") { e.preventDefault(); grade(3); }
      }
    };
    window.addEventListener("keydown", handleKey, { once: true });

    put(stage, progressHeader, card, btns);
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
  const flipSlot = h("div");
  put(view,
    flipSlot,
    h("div", { class: "card" },
      h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px" },
        h("p", { class: "small muted", style: "margin:0" }, `${list.length} words · ${learnedCount()} learned (box 3+) · ${dueCards().length} due now`),
        h("div", { class: "row", style: "gap:6px" },
          h("button", { class: "btn sm primary", onclick: () => {
            flipSlot.innerHTML = "";
            renderTopicFlip(flipSlot, list.map(c => ({ w: c.w, pos: c.pos, vi: c.vi, en: c.en, ex: c.ex, level: c.level })), "Sổ từ vựng của tôi (My Words)", () => { flipSlot.innerHTML = ""; });
          } }, "🃏 Lật thẻ toàn bộ từ (Flip)"),
          h("button", { class: "btn sm", onclick: () => go("vocabulary/review") }, "🎯 Ôn tập đến hạn (Review)")
        )
      ),
      h("table", {}, h("tr", {}, h("th", {}, "Word"), h("th", {}, "Meaning"), h("th", {}, "Box"), h("th", {}, "Next review"), h("th", {})),
        list.map(c => h("tr", {}, h("td", {}, h("b", {}, c.w), " ", h("button", { class: "btn sm", style: "padding:0 5px", onclick: () => void say(c.w) }, "🔊")),
          h("td", {}, c.vi, h("div", { class: "small muted" }, c.en)), h("td", {}, c.box), h("td", { class: "small" }, c.due <= Date.now() ? "now" : new Date(c.due).toLocaleDateString()),
          h("td", {}, h("button", { class: "btn sm danger", onclick: () => { delete S.vocab[c.w.toLowerCase()]; save(); route(); } }, "✕"))))))
  );
}

interface SimpleCard {
  w: string;
  pos?: string;
  vi: string;
  en?: string;
  ex?: string;
  level?: Level;
}

function renderTopicFlip(container: HTMLElement, list: SimpleCard[], title: string, onExit: () => void): void {
  let cards = [...list];
  let cur = 0;
  let isFlipped = false;
  let isShuffled = false;

  const renderCard = () => {
    container.innerHTML = "";
    if (!cards.length) return;
    const c = cards[cur];
    const progressPct = pct(cur + 1, cards.length);

    const header = h("div", { class: "flashcard-header" },
      h("div", { class: "row", style: "justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px" },
        h("div", { class: "row", style: "gap:8px;align-items:center" },
          h("b", { style: "font-size:1.05rem" }, `🃏 ${title}`),
          h("span", { class: "chip sm" }, `${cur + 1} / ${cards.length}`)
        ),
        h("div", { class: "row", style: "gap:6px" },
          h("button", {
            class: `btn sm ${isShuffled ? "primary" : ""}`,
            onclick: () => {
              isShuffled = !isShuffled;
              cards = isShuffled ? shuffle([...list]) : [...list];
              cur = 0;
              isFlipped = false;
              renderCard();
              toast(isShuffled ? "🔀 Đã xáo trộn thứ tự từ vựng" : "Đã đặt lại thứ tự ban đầu");
            }
          }, isShuffled ? "🔀 Đang xáo trộn" : "🔀 Xáo trộn"),
          h("button", { class: "btn sm", onclick: onExit }, "✕ Đóng (Quay lại)")
        )
      ),
      h("div", { class: "flashcard-progress-bar" },
        h("div", { class: "flashcard-progress-fill", style: `width:${progressPct}%` })
      )
    );

    const back = h("div", { class: "flash-back-wrap" + (isFlipped ? "" : " hidden") },
      h("div", { class: "flash-divider" }),
      h("div", { class: "flash-meaning-vi" }, "🇻🇳 " + (c.vi || "—")),
      c.en ? h("div", { class: "flash-meaning-en" }, c.en) : null,
      c.ex ? h("div", { class: "flash-example-box" },
        h("span", {}, `“${c.ex}”`),
        h("button", { class: "btn sm", onclick: (e: MouseEvent) => { e.stopPropagation(); void say(c.ex || ""); } }, "🔊")
      ) : null
    );

    const hint = h("div", { class: "flash-flip-hint" },
      isFlipped ? "Đang xem mặt sau · Bấm để lật lại" : "💡 Chạm vào thẻ hoặc bấm phím Space để xem nghĩa"
    );

    const flip = () => {
      isFlipped = !isFlipped;
      back.classList.toggle("hidden", !isFlipped);
      hint.textContent = isFlipped ? "Đang xem mặt sau · Bấm để lật lại" : "💡 Chạm vào thẻ hoặc bấm phím Space để xem nghĩa";
    };

    const card = h("div", { class: "flash flash-pro", onclick: flip },
      h("div", { class: "flash-pro-top" },
        c.level ? levelChip(c.level) : h("span", { class: "chip sm" }, "Flashcard"),
        h("span", { class: "flash-meta-pill" }, `Từ ${cur + 1} của ${cards.length}`),
        h("button", { class: "flash-speaker-btn", onclick: (e: MouseEvent) => { e.stopPropagation(); void say(c.w); } }, "🔊 Nghe từ")
      ),
      h("div", { class: "flash-body" },
        h("div", { class: "flash-main-word word" }, c.w),
        c.pos ? h("span", { class: "flash-pos-pill" }, c.pos) : null,
        back
      ),
      hint
    );

    const isAdded = !!S.vocab[c.w.toLowerCase()];
    const addBtn = h("button", {
      class: `btn sm ${isAdded ? "ok" : ""}`,
      onclick: () => {
        addWord({ w: c.w, pos: c.pos, vi: c.vi, en: c.en, ex: c.ex, level: c.level || "B1" });
        toast(`Đã lưu "${c.w}" vào Deck cá nhân`);
        renderCard();
      }
    }, isAdded ? "✓ Đã có trong Deck" : "＋ Lưu vào Deck ôn tập");

    const navControls = h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-top:14px;gap:8px;flex-wrap:wrap" },
      h("div", { class: "row", style: "gap:6px" },
        h("button", {
          class: "btn sm",
          disabled: cur === 0,
          onclick: () => { if (cur > 0) { cur--; isFlipped = false; renderCard(); } }
        }, "← Trước (←)"),
        h("button", { class: "btn sm primary", onclick: flip }, "🔄 Lật thẻ (Space)"),
        h("button", {
          class: "btn sm",
          disabled: cur >= cards.length - 1,
          onclick: () => { if (cur < cards.length - 1) { cur++; isFlipped = false; renderCard(); } }
        }, "Tiếp → (→)")
      ),
      addBtn
    );

    const stageWrap = h("div", { class: "flashcard-stage", style: "margin:10px auto 20px" },
      header,
      card,
      navControls
    );

    put(container, stageWrap);
    void say(c.w);
  };

  renderCard();
  container.scrollIntoView({ behavior: "smooth", block: "start" });
}

function wordBanks(view: HTMLElement, lv: Level): void {
  put(view, h("div", { class: "tabs" }, LEVELS.map(l => h("button", { class: l === lv ? "active" : "", onclick: () => go("vocabulary/banks/" + l) }, l))));
  DATA.vocab[lv].forEach(t => {
    const flipSlot = h("div");
    put(view, h("div", { class: "card" },
      h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px" },
        h("h3", { style: "margin:0" }, t.topic),
        h("div", { class: "row", style: "gap:6px;flex-wrap:wrap" },
          h("button", { class: "btn sm primary", onclick: () => { toast(addTopicWords(lv, Infinity, t.topic) + " words added to flashcards"); route(); } }, "＋ Add all to flashcards"),
          h("button", { class: "btn sm", onclick: () => {
            const words = t.words.map(([w, pos, vi, en, ex]) => ({ w, pos, vi, en, ex, level: lv }));
            flipSlot.innerHTML = "";
            renderTopicFlip(flipSlot, words, `${t.topic} (${lv})`, () => { flipSlot.innerHTML = ""; });
          } }, "🃏 Lật thẻ chủ đề này (Flip)")
        )
      ),
      flipSlot,
      h("table", {}, t.words.map(([w, pos, vi, en, ex]) => h("tr", {},
        h("td", { style: "width:22%" }, h("b", {}, w), " ", h("span", { class: "small muted" }, pos)),
        h("td", {}, vi),
        h("td", { class: "small" }, en, h("div", { class: "muted" }, "“" + ex + "”")),
        h("td", { style: "white-space:nowrap" },
          h("button", { class: "btn sm", onclick: () => void say(w + ". " + ex) }, "🔊"),
          " ",
          S.vocab[w.toLowerCase()] ? "✓" : h("button", { class: "btn sm", onclick: (e: MouseEvent) => { addWord({ w, pos, vi, en, ex, level: lv }); (e.target as Element).replaceWith("✓"); } }, "＋")
        )
      )))
    ));
  });
}

function phrasalPage(view: HTMLElement): void {
  const addBtn = (w: string, vi: string, en: string, lv: Level, ex?: string) => h("button", { class: "btn sm", onclick: (e: MouseEvent) => { addWord({ w, vi, en, ex, level: lv }); (e.target as Element).textContent = "✓"; } }, "＋");
  const check: MCQuestion[] = sample(DATA.phrasal, 5).map(([p, vi]) => {
    const o = shuffle([vi, ...sample(DATA.phrasal.filter(x => x[0] !== p), 2).map(x => x[1])]);
    return { t: "mc", q: `What does “${p}” mean?`, o, a: o.indexOf(vi) };
  });

  const phrasalSlot = h("div");
  const collocSlot = h("div");

  put(view,
    h("div", { class: "card" },
      h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px" },
        h("h2", { style: "margin:0" }, "🔗 Phrasal verbs (B1–B2)"),
        h("button", { class: "btn sm primary", onclick: () => {
          const pWords = DATA.phrasal.map(([p, vi, ex, l]) => ({ w: p, pos: "phrasal verb", vi, en: "", ex, level: l }));
          phrasalSlot.innerHTML = "";
          renderTopicFlip(phrasalSlot, pWords, "Phrasal Verbs (B1–B2)", () => { phrasalSlot.innerHTML = ""; });
        } }, "🃏 Lật thẻ Phrasal Verbs (Flip)")
      ),
      viBox("Cụm động từ rất phổ biến trong văn nói. Hãy học cả câu ví dụ, đừng chỉ học nghĩa."),
      phrasalSlot,
      h("table", {}, DATA.phrasal.map(([p, vi, ex, lv]) => h("tr", {}, h("td", {}, levelChip(lv)), h("td", {}, h("b", {}, p)), h("td", {}, vi), h("td", { class: "small" }, ex),
        h("td", {}, h("button", { class: "btn sm", onclick: () => void say(ex) }, "🔊"), " ", addBtn(p, vi, "phrasal verb", lv, ex)))))
    ),
    h("div", { class: "card" },
      h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px" },
        h("h2", { style: "margin:0" }, "🧲 Collocations"),
        h("button", { class: "btn sm primary", onclick: () => {
          const cWords = DATA.collocations.map(([c, vi, l]) => ({ w: c, pos: "collocation", vi, en: "", ex: "", level: l }));
          collocSlot.innerHTML = "";
          renderTopicFlip(collocSlot, cWords, "Collocations (B1–B2)", () => { collocSlot.innerHTML = ""; });
        } }, "🃏 Lật thẻ Collocations (Flip)")
      ),
      viBox("Collocation là những từ thường đi với nhau, ví dụ: make a decision (không phải do a decision)."),
      collocSlot,
      h("table", {}, DATA.collocations.map(([c, vi, lv]) => h("tr", {}, h("td", {}, levelChip(lv)), h("td", {}, h("b", {}, c)), h("td", {}, vi),
        h("td", {}, h("button", { class: "btn sm", onclick: () => void say(c) }, "🔊"), " ", addBtn(c, vi, "collocation", lv)))))
    ),
    h("div", { class: "card" }, h("h3", {}, "Quick check"), quiz(check, { onDone: s => recordScore("vocab", s) }))
  );
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
  const mainFlipSlot = h("div");

  put(view,
    h("div", { class: "card", style: "border-left:5px solid var(--primary)" },
      h("div", { class: "row", style: "justify-content:space-between;align-items:center" },
        h("h1", { style: "margin:0" }, "🎯 600 Essential Words for the TOEIC"),
        h("span", { class: "chip lv B1" }, "12 chủ đề · 600 từ vựng")
      ),
      h("p", { class: "muted", style: "margin-top:8px" },
        "Bộ 600 từ vựng cốt lõi thường gặp nhất trong các đề thi TOEIC thực tế (Part 1 - Part 7), chia đều theo 12 nhóm chủ đề thương mại & công sở. Mỗi từ đều có phiên âm, loại từ, giải nghĩa tiếng Việt và câu ví dụ chuẩn format ETS."),
      viBox("Mẹo: Bấm '🃏 Lật thẻ' ở từng chủ đề để học Flashcard ngay lập tức, hoặc bấm '＋ Thêm cả 50 từ' để nạp vào hệ thống ôn tập ngắt quãng Leitner."),
      h("div", { class: "row", style: "gap:6px;margin-top:14px;flex-wrap:wrap" },
        h("button", { class: "btn sm primary", onclick: () => {
          const allWords = allTopics.flatMap(tp => tp.words.map(([w, pos, vi, en, ex]) => ({ w, pos, vi, en, ex, level: "B1" as Level })));
          mainFlipSlot.innerHTML = "";
          renderTopicFlip(mainFlipSlot, allWords, "600 Từ TOEIC Toàn diện (12 chủ đề)", () => { mainFlipSlot.innerHTML = ""; });
        } }, "🃏 Lật thẻ toàn bộ 600 từ (Flip All)"),
        h("button", { class: "btn sm" + (selectedIdx === -1 ? " active" : ""), onclick: () => go("vocabulary/toeic") }, "Tất cả 12 chủ đề"),
        allTopics.map((t, i) =>
          h("button", { class: "btn sm" + (selectedIdx === i ? " active" : ""), onclick: () => go(`vocabulary/toeic/${i + 1}`) }, `${i + 1}. ${t.titleVi}`)
        )
      )
    ),
    mainFlipSlot
  );

  topicsToShow.forEach((t) => {
    const originalIndex = allTopics.indexOf(t);
    const quizCard = h("div");
    const topicCard = h("div", { class: "card" },
      h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px" },
        h("div", {},
          h("div", { class: "chip", style: "margin-bottom:4px" }, `Chủ đề ${originalIndex + 1}/12 · 50 từ`),
          h("h2", { style: "margin:0" }, `${t.topic} (${t.titleVi})`)
        ),
        h("div", { class: "row", style: "gap:6px;flex-wrap:wrap" },
          h("button", { class: "btn sm primary", onclick: () => {
            const tWords = t.words.map(([w, pos, vi, en, ex]) => ({ w, pos, vi, en, ex, level: "B1" as Level }));
            quizCard.innerHTML = "";
            renderTopicFlip(quizCard, tWords, `${t.topic} (${t.titleVi})`, () => { quizCard.innerHTML = ""; });
          } }, "🃏 Lật thẻ 50 từ (Flip)"),
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
