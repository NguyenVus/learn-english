/* Roadmap: 3 stages × 5 units, unlocking and unit tests */
import type { ContentKind, Level, Unit } from "../types";
import { DATA, LEVELS, findItem } from "../data";
import { $, h, put, levelChip, bar, viBox } from "../core/dom";
import { S, save } from "../core/state";
import { pct } from "../core/util";
import { SKILL_INFO } from "../core/progress";
import { go, registerPage, route } from "../core/router";
import { lockNote } from "../core/ui";

export interface UnitItem { kind: ContentKind; id: string; title: string }
export function unitItems(u: Unit): UnitItem[] {
  const kinds: ContentKind[] = ["grammar", "reading", "listening", "speaking", "writing"];
  return kinds.flatMap(kind => u[kind].map(id => ({ kind, id, title: findItem(kind, id)?.title || id })));
}
export const STAGE_COLORS: Record<Level, string> = { A2: "var(--A2)", B1: "var(--B1)", B2: "var(--B2)" };
const STAGE_NAMES = ["Stage 1 · Foundations (Nền tảng vững chắc)", "Stage 2 · Independent User (Tự tin giao tiếp)", "Stage 3 · Upper-intermediate (Chuyên sâu & Bứt phá)"];

registerPage("roadmap", "Learning roadmap", view => {
  put(view,
    h("div", { class: "card", style: "border-left: 5px solid var(--primary); background: linear-gradient(135deg, var(--primary-soft) 0%, var(--surface) 100%)" },
      h("h1", { style: "margin:0" }, "🗺️ Lộ trình tiếng Anh toàn diện A2 → B1 → B2"),
      h("p", { class: "muted", style: "margin-top:8px" },
        "Hệ thống lộ trình chuẩn khung tham chiếu Châu Âu (CEFR) gồm 3 giai đoạn, mỗi giai đoạn 5 Unit tích hợp cả 4 kỹ năng và ngữ pháp. Đạt từ 70% bài kiểm tra cuối giai đoạn để mở khoá giai đoạn tiếp theo."
      ),
      viBox("Bạn có thể tự do học bất kỳ giai đoạn nào bằng nút 'Học trình độ này' hoặc qua thanh chọn trình độ phía trên.")
    )
  );

  LEVELS.forEach((lv, li) => {
    const units = DATA.units[lv];
    const all = units.flatMap(unitItems);
    const doneN = all.filter(x => S.done[x.id]).length;
    const best = S.stageTests[lv]?.best ?? null;
    const stagePct = pct(doneN, all.length);

    put(view, h("div", { class: "card stage" + (S.unlocked[lv] ? "" : " locked"), style: "--c:" + STAGE_COLORS[lv] },
      h("div", { class: "row", style: "justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px" },
        h("div", { class: "row", style: "gap:10px" },
          levelChip(lv),
          h("h2", { style: "margin:0" }, STAGE_NAMES[li])
        ),
        h("div", { class: "row", style: "gap:8px" },
          h("span", { class: "chip" }, S.unlocked[lv] ? "Đã mở khoá" : "🔒 Chưa mở"),
          S.level === lv
            ? h("span", { class: "chip lv " + lv }, "Đang học")
            : h("button", { class: "btn sm", onclick: () => { S.level = lv; S.plan = null; save(); const sel = $<HTMLSelectElement>("#levelSelect"); if (sel) sel.value = lv; route(); } }, "Học trình độ này")
        )
      ),
      h("div", { class: "row small", style: "margin:12px 0 8px;gap:12px" },
        h("span", { style: "font-weight:600" }, `${doneN}/${all.length} hoạt động (${stagePct}%)`),
        h("div", { style: "flex:1;min-width:140px" }, bar(stagePct, STAGE_COLORS[lv])),
        h("span", { class: "muted" }, "Bài thi tổng kết: " + (best == null ? "Chưa làm" : best + "%" + (best >= 70 ? " ✅" : ""))),
        h("button", { class: "btn sm primary", onclick: () => go("tests/stage/" + lv) }, "Thi thử " + lv + " Stage Test")
      ),
      lockNote(lv),
      h("div", { class: "units" }, units.map((u, ui) => {
        const items = unitItems(u);
        const d = items.filter(x => S.done[x.id]).length;
        const ut = S.unitTests[u.id];
        return h("div", { class: "unit" },
          h("div", { class: "row", style: "justify-content:space-between;align-items:center" },
            h("span", { class: "small muted" }, `Unit ${ui + 1}`),
            h("span", { class: "chip sm" }, `${d}/${items.length}`)
          ),
          h("b", { style: "font-size:1.02rem;display:block;margin:4px 0 8px" }, u.title),
          bar(pct(d, items.length), STAGE_COLORS[lv]),
          h("ul", { style: "list-style:none;padding-left:0;margin:12px 0" },
            items.map(x => h("li", {
              class: S.done[x.id] ? "ok" : "",
              style: "padding:4px 0;display:flex;align-items:center;gap:6px"
            },
              h("a", { href: `#/${x.kind}/${lv}/${x.id}`, style: "color:inherit;flex:1" }, `${SKILL_INFO[x.kind].icon} ${x.title}`),
              S.done[x.id] ? h("span", { class: "done-badge", style: "font-size:0.75rem" }, "✓") : null
            ))
          ),
          h("div", { class: "small muted", style: "margin-bottom:10px" }, "🗂️ Từ vựng: " + u.vocab.join(", ")),
          h("div", { class: "row", style: "justify-content:space-between;align-items:center" },
            h("button", { class: "btn sm", onclick: () => go("tests/unit/" + u.id) }, "📝 Unit test"),
            ut != null ? h("span", { class: "small " + (ut >= 70 ? "done-badge" : "muted") }, "Điểm cao nhất: " + ut + "%") : null
          )
        );
      }))
    ));
  });
});
