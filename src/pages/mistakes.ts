/* Sổ tay lỗi sai (Mistake Bank): review questions you got wrong across all skills */
import type { ErrorItem, Level } from "../types";
import { h, put, levelChip, toast, viBox } from "../core/dom";
import { S, clearMistakes, resolveMistake } from "../core/state";
import { sample, shuffle } from "../core/util";
import { go, registerPage, route, setViewLevel } from "../core/router";
import { quiz } from "../core/quiz";

registerPage("mistakes", "Mistake Bank", (view, modeArg, filterArg) => {
  setViewLevel(S.level);
  const items = Object.values(S.errorBank || {}).sort((a, b) => b.lastSeen - a.lastSeen);
  const total = items.length;

  if (modeArg === "practice") {
    practiceView(view, items, filterArg);
    return;
  }

  if (modeArg === "single" && filterArg) {
    const targetItem = items.find(it => it.id === filterArg) || (S.errorBank && S.errorBank[filterArg]);
    if (targetItem) {
      practiceSingle(view, targetItem);
      return;
    } else {
      go("mistakes");
      return;
    }
  }

  // Main list view
  put(view,
    h("div", { class: "card", style: "border-left:4px solid var(--warn)" },
      h("div", { class: "row" },
        h("h1", { style: "margin:0" }, "📓 Mistake Bank (Sổ tay câu sai)"),
        h("span", { class: "spacer" }),
        h("span", { class: "chip", style: "font-size:.95rem" }, `${total} câu cần ôn`)),
      h("p", { class: "muted", style: "margin-top:8px" },
        "Tự động lưu lại tất cả các câu bạn trả lời sai trong Reading, Listening, Grammar và các bài Tests. Hãy làm lại cho đến khi trả lời đúng để khắc phục hoàn toàn lỗ hổng kiến thức."),
      viBox("Mẹo: Khi làm đúng trong chế độ ôn tập, câu hỏi sẽ tự động được gỡ khỏi sổ tay lỗi sai."),
      total > 0 ? h("div", { class: "row", style: "margin-top:14px" },
        h("button", { class: "btn primary", onclick: () => go("mistakes/practice/all") }, `⚡ Ôn tập tất cả (${total} câu)`),
        total > 5 ? h("button", { class: "btn", onclick: () => go("mistakes/practice/5") }, "⚡ Ôn nhanh 5 câu") : null,
        total > 10 ? h("button", { class: "btn", onclick: () => go("mistakes/practice/10") }, "⚡ Ôn 10 câu") : null,
        h("span", { class: "spacer" }),
        h("button", { class: "btn danger sm", onclick: () => {
          if (confirm("Bạn có chắc chắn muốn xoá toàn bộ câu hỏi trong sổ tay lỗi sai?")) {
            clearMistakes();
            toast("Đã làm sạch sổ tay lỗi sai");
            route();
          }
        } }, "🗑️ Xoá tất cả")
      ) : null
    )
  );

  if (!total) {
    put(view, h("div", { class: "card center", style: "padding:40px 20px" },
      h("div", { style: "font-size:3rem;margin-bottom:10px" }, "🎉"),
      h("h2", {}, "Sổ tay của bạn đang trống!"),
      h("p", { class: "muted" }, "Bạn không có câu hỏi nào bị sai cần ôn tập. Hãy tiếp tục luyện tập các bài học mới."),
      h("div", { class: "row", style: "justify-content:center;margin-top:14px" },
        h("button", { class: "btn primary", onclick: () => go("dashboard") }, "Về Dashboard"),
        h("button", { class: "btn", onclick: () => go("grammar") }, "Luyện ngữ pháp"),
        h("button", { class: "btn", onclick: () => go("reading") }, "Luyện đọc")
      )
    ));
    return;
  }

  // Filter tabs
  const grammarCount = items.filter(it => it.id.startsWith("g-") || it.lessonId).length;
  const readingCount = items.filter(it => it.id.startsWith("r-")).length;
  const listeningCount = items.filter(it => it.id.startsWith("l-")).length;
  const testCount = items.filter(it => it.id.startsWith("placement") || it.skill === "tests").length;

  const currentFilter = filterArg || "all";
  const tabs = [
    { k: "all", label: `Tất cả (${total})` },
    { k: "grammar", label: `Ngữ pháp (${grammarCount})` },
    { k: "reading", label: `Đọc (${readingCount})` },
    { k: "listening", label: `Nghe (${listeningCount})` },
    { k: "tests", label: `Kiểm tra (${testCount})` }
  ];

  put(view,
    h("div", { class: "tabs" }, tabs.map(t =>
      h("button", {
        class: t.k === currentFilter ? "active" : "",
        onclick: () => go("mistakes/list/" + t.k)
      }, t.label)
    ))
  );

  const filtered = items.filter(it => {
    if (currentFilter === "grammar") return it.id.startsWith("g-") || it.lessonId;
    if (currentFilter === "reading") return it.id.startsWith("r-");
    if (currentFilter === "listening") return it.id.startsWith("l-");
    if (currentFilter === "tests") return it.id.startsWith("placement") || it.skill === "tests";
    return true;
  });

  if (!filtered.length) {
    put(view, h("p", { class: "muted" }, "Không có câu hỏi nào trong mục này."));
    return;
  }

  // List of mistakes
  put(view, h("div", {}, filtered.map(item => {
    const q = item.q;
    const qText = "q" in q ? q.q : "text" in q ? q.text : "Question";
    const lv = q.lv || (item.id.includes("b1") ? "B1" : item.id.includes("b2") ? "B2" : "A2");
    return h("div", { class: "card", style: "margin-bottom:12px" },
      h("div", { class: "row small", style: "margin-bottom:8px" },
        levelChip(lv as Level),
        h("span", { class: "chip" }, item.title || "Luyện tập"),
        item.wrongCount > 1 ? h("span", { class: "chip", style: "background:var(--bad-soft);color:var(--bad)" }, `Sai ${item.wrongCount} lần`) : null,
        h("span", { class: "spacer" }),
        h("span", { class: "muted" }, new Date(item.lastSeen).toLocaleDateString())
      ),
      h("div", { style: "font-weight:600;font-size:1.05rem;margin-bottom:10px" }, qText),
      q.ctx ? h("div", { class: "ctx small", style: "margin-bottom:10px" }, q.ctx) : null,
      h("div", { class: "row" },
        h("button", { class: "btn sm primary", onclick: () => go("mistakes/single/" + encodeURIComponent(item.id)) }, "✍️ Làm lại câu này"),
        h("button", { class: "btn sm", onclick: () => {
          resolveMistake(item.id);
          toast("Đã gỡ câu hỏi khỏi sổ tay ✓");
          route();
        } }, "✓ Đã hiểu (Gỡ câu này)")
      )
    );
  })));
});

function practiceView(view: HTMLElement, items: ErrorItem[], countArg?: string): void {
  let list = items;
  if (countArg === "5") list = sample(items, Math.min(5, items.length));
  else if (countArg === "10") list = sample(items, Math.min(10, items.length));
  else list = shuffle(items);

  const qs = list.map(it => it.q);
  put(view,
    h("div", { class: "row", style: "margin-bottom:14px;align-items:center;gap:12px;flex-wrap:wrap" },
      h("button", { class: "btn sm", onclick: () => go("mistakes") }, "← Quay lại danh sách"),
      h("h2", { style: "margin:0" }, `⚡ Luyện tập ${qs.length} câu đã từng làm sai`),
      h("span", { class: "spacer" })
    ),
    viBox("Làm bài cẩn thận. Khi bạn chọn đúng, câu hỏi đó sẽ tự động được gỡ bỏ khỏi sổ tay lỗi sai!"),
    h("div", { class: "card" },
      quiz(qs, {
        isReview: true,
        checkLabel: "Kiểm tra kết quả",
        onDone: (_pct, results) => {
          const resolved = results.filter(r => r.got >= r.total).length;
          if (resolved > 0) {
            toast(`🎉 Đã sửa đúng ${resolved} câu!`);
          }
        }
      }),
      h("div", { class: "row", style: "margin-top:18px;padding-top:14px;border-top:1px solid var(--border-subtle)" },
        h("button", { class: "btn primary", onclick: () => go("mistakes") }, "← Quay lại danh sách câu sai")
      )
    )
  );
}

function practiceSingle(view: HTMLElement, item: ErrorItem): void {
  view.innerHTML = "";
  put(view,
    h("div", { class: "row", style: "margin-bottom:14px;align-items:center;gap:12px;flex-wrap:wrap" },
      h("button", { class: "btn sm", onclick: () => go("mistakes") }, "← Quay lại danh sách câu sai"),
      h("h2", { style: "margin:0" }, "Làm lại câu hỏi"),
      h("span", { class: "spacer" }),
      item.title ? h("span", { class: "chip" }, item.title) : null
    ),
    h("div", { class: "card" },
      quiz([item.q], {
        source: item.source,
        lessonId: item.lessonId,
        isReview: true,
        checkLabel: "Kiểm tra đáp án",
        onDone: (_p, results) => {
          if (results[0]?.got >= results[0]?.total) {
            toast("🎉 Chính xác! Đã gỡ câu này khỏi sổ tay.");
          }
        }
      }),
      h("div", { class: "row", style: "margin-top:18px;padding-top:14px;border-top:1px solid var(--border-subtle)" },
        h("button", { class: "btn primary", onclick: () => go("mistakes") }, "← Quay lại danh sách câu sai")
      )
    )
  );
}
