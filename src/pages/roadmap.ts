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
const STAGE_NAMES = ["Stage 1 · Foundations", "Stage 2 · Independent user", "Stage 3 · Upper-intermediate"];

registerPage("roadmap", "Learning roadmap", view => {
  put(view, h("p", { class: "muted" }, "Three stages, five units each. Pass a stage test with 70% or more to unlock the next stage. You can always choose any level freely from the level menu."),
    viBox("Lộ trình 3 giai đoạn A2 → B1 → B2. Mỗi giai đoạn có 5 unit; hoàn thành bài kiểm tra cuối giai đoạn (≥70%) để mở khóa giai đoạn tiếp theo."));
  LEVELS.forEach((lv, li) => {
    const units = DATA.units[lv]; const all = units.flatMap(unitItems); const doneN = all.filter(x => S.done[x.id]).length;
    const best = S.stageTests[lv]?.best ?? null;
    put(view, h("div", { class: "card stage" + (S.unlocked[lv] ? "" : " locked"), style: "--c:" + STAGE_COLORS[lv] },
      h("div", { class: "row" }, levelChip(lv), h("h2", { style: "margin:0" }, STAGE_NAMES[li]), h("span", { class: "spacer" }),
        h("span", { class: "chip" }, S.unlocked[lv] ? "Unlocked" : "🔒 Locked"),
        S.level === lv ? h("span", { class: "chip lv " + lv }, "Current")
          : h("button", { class: "btn sm", onclick: () => { S.level = lv; S.plan = null; save(); const sel = $<HTMLSelectElement>("#levelSelect"); if (sel) sel.value = lv; route(); } }, "Study this level")),
      h("div", { class: "row small", style: "margin:8px 0" }, h("span", {}, `${doneN}/${all.length} activities`), h("div", { style: "flex:1;min-width:120px" }, bar(pct(doneN, all.length), STAGE_COLORS[lv])),
        h("span", {}, "Stage test: " + (best == null ? "not taken" : best + "%" + (best >= 70 ? " ✅" : ""))),
        h("button", { class: "btn sm primary", onclick: () => go("tests/stage/" + lv) }, "Take " + lv + " stage test")),
      lockNote(lv),
      h("div", { class: "units" }, units.map((u, ui) => {
        const items = unitItems(u); const d = items.filter(x => S.done[x.id]).length; const ut = S.unitTests[u.id];
        return h("div", { class: "unit" },
          h("div", { class: "small muted" }, "Unit " + (ui + 1)), h("b", {}, u.title), bar(pct(d, items.length), STAGE_COLORS[lv]),
          h("ul", {}, items.map(x => h("li", { class: S.done[x.id] ? "ok" : "" }, h("a", { href: `#/${x.kind}/${lv}/${x.id}`, style: "color:inherit" }, SKILL_INFO[x.kind].icon + " " + x.title), S.done[x.id] ? " ✓" : ""))),
          h("div", { class: "small" }, "🗂️ Vocabulary: " + u.vocab.join(", ")),
          h("div", { class: "row", style: "margin-top:8px" }, h("button", { class: "btn sm", onclick: () => go("tests/unit/" + u.id) }, "📝 Unit test"),
            ut != null ? h("span", { class: "small " + (ut >= 70 ? "done-badge" : "muted") }, "Best: " + ut + "%") : null));
      }))));
  });
});
