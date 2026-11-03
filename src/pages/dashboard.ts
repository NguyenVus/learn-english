/* Dashboard: level, streak, time, words, weekly goal, skills and today's plan */
import { h, put, levelChip, bar, viBox } from "../core/dom";
import { S, save, currentStreak, totalSeconds, weekSeconds, learnedCount, dueCards } from "../core/state";
import { DAY, fmtMin, pct, todayKey } from "../core/util";
import { SKILLS, SKILL_INFO, getPlan, skillStats } from "../core/progress";
import { go, registerPage, route, setViewLevel } from "../core/router";
import { titleOf } from "../core/ui";

function weekBars(): HTMLElement {
  const now = new Date(); const dow = (now.getDay() + 6) % 7; const names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const vals = names.map((_, i) => (i <= dow ? fmtMin(S.days[todayKey(new Date(now.getTime() - (dow - i) * DAY))] || 0) : 0));
  const max = Math.max(30, ...vals);
  return h("div", { style: "display:flex;gap:6px;align-items:flex-end;height:80px;margin-top:14px" }, names.map((n, i) =>
    h("div", { style: "flex:1;text-align:center" },
      h("div", { title: vals[i] + " min", style: `height:${Math.round((vals[i] / max) * 56) + 2}px;background:${i === dow ? "var(--primary)" : "var(--border)"};border-radius:6px 6px 0 0` }),
      h("div", { class: "small muted" }, n))));
}

registerPage("dashboard", "Dashboard", view => {
  const lv = S.level; setViewLevel(lv);
  if (!S.placement) put(view, h("div", { class: "card", style: "border:2px solid var(--primary)" },
    h("h2", {}, "👋 Welcome to EnglishPath!"),
    h("p", {}, "Your path from A2 to B2 in all four skills. Start with a 25-question placement test to find your level, or begin at A2."),
    viBox("Chào mừng bạn! Hãy làm bài kiểm tra xếp lớp (25 câu, khoảng 15 phút) để biết trình độ, hoặc bắt đầu ngay từ A2."),
    h("div", { class: "row" },
      h("button", { class: "btn primary", onclick: () => go("placement") }, "🧭 Take the placement test"),
      h("button", { class: "btn", onclick: () => { S.placement = { skipped: true, result: "A2", date: Date.now() }; save(); route(); } }, "Start at A2"),
      h("a", { class: "btn", href: "#/guides" }, "📘 How to study with this site"))));

  const st = skillStats(lv);
  const wk = fmtMin(weekSeconds()), goal = S.weeklyGoal;
  put(view, h("div", { class: "grid g4" },
    h("div", { class: "card" }, h("div", { class: "muted small" }, "Current level"), h("div", { class: "stat" }, levelChip(lv), " ", S.subLevel && S.subLevel !== lv ? h("span", { class: "small muted" }, "(placement: " + S.subLevel + ")") : ""), h("a", { href: "#/roadmap", class: "small" }, "View roadmap →")),
    h("div", { class: "card" }, h("div", { class: "muted small" }, "Daily streak"), h("div", { class: "stat" }, "🔥 " + currentStreak()), h("div", { class: "small muted" }, "Best: " + S.streak.best + " days")),
    h("div", { class: "card" }, h("div", { class: "muted small" }, "Study time"), h("div", { class: "stat" }, fmtMin(S.days[todayKey()] || 0) + " min"), h("div", { class: "small muted" }, "today · " + (totalSeconds() / 3600).toFixed(1) + " h total")),
    h("div", { class: "card" }, h("div", { class: "muted small" }, "Words learned"), h("div", { class: "stat" }, "📚 " + learnedCount()), h("div", { class: "small muted" }, Object.keys(S.vocab).length + " saved · " + dueCards().length + " due"))));

  const plan = getPlan();
  const planCard = h("div", { class: "card" },
    h("div", { class: "row" }, h("h2", {}, "📅 Today's plan"), h("span", { class: "spacer" }), h("span", { class: "chip" }, "≈ " + plan.items.reduce((s, i) => s + i.min, 0) + " min")),
    h("p", { class: "small muted" }, "Focus: ", h("b", {}, SKILL_INFO[plan.weakest].icon + " " + SKILL_INFO[plan.weakest].name), ` (your weakest skill at ${lv})`),
    viBox("Kế hoạch khoảng 30 phút, ưu tiên kỹ năng yếu nhất của bạn."),
    plan.items.map((it, i) => {
      const done = plan.done.includes(i);
      return h("div", { class: "list-item", onclick: () => go(it.route) },
        h("span", { style: "font-size:1.4rem" }, done ? "✅" : SKILL_INFO[it.kind].icon),
        h("div", { style: "flex:1" }, h("div", { style: "font-weight:600" + (done ? ";text-decoration:line-through" : "") }, it.title), h("div", { class: "small muted" }, it.min + " min · " + SKILL_INFO[it.kind].name)),
        h("span", { class: "btn sm" }, done ? "Review" : "Start"));
    }),
    plan.done.length === plan.items.length ? h("div", { class: "notice ok" }, "🎉 You finished today's plan. Great work!") : null);

  const skillsCard = h("div", { class: "card" }, h("h2", {}, "Skills at " + lv),
    [...SKILLS, "grammar" as const].map(sk => h("div", { style: "margin:10px 0" },
      h("div", { class: "row small" }, h("b", {}, SKILL_INFO[sk].icon + " " + SKILL_INFO[sk].name), h("span", { class: "spacer" }), h("span", { class: "muted" }, `${st[sk].done}/${st[sk].total} done · avg ${st[sk].avg == null ? "–" : st[sk].avg + "%"}`)),
      bar(st[sk].progress))));

  const goalIn = h("input", { type: "number", min: 30, max: 1500, step: 10, value: goal, style: "width:90px" });
  const goalCard = h("div", { class: "card" }, h("h2", {}, "🎯 Weekly goal"),
    h("div", { class: "stat" }, wk + " / " + goal + " min"), bar(pct(wk, goal), "var(--ok)"),
    h("div", { class: "row small", style: "margin-top:10px" }, "Goal (minutes/week):", goalIn, h("button", { class: "btn sm", onclick: () => { S.weeklyGoal = Math.max(30, Number(goalIn.value) || 150); save(); route(); } }, "Save")),
    weekBars());
  put(view, h("div", { class: "grid g2" }, planCard, h("div", {}, skillsCard, goalCard)));

  const recent = S.scores.slice(-6).reverse();
  if (recent.length) put(view, h("div", { class: "card" }, h("h3", {}, "Recent activity"),
    h("table", {}, recent.map(r => h("tr", {}, h("td", {}, SKILL_INFO[r.skill].icon + " " + SKILL_INFO[r.skill].name), h("td", {}, titleOf(r.id)), h("td", {}, r.s + "%"), h("td", { class: "muted small" }, new Date(r.d).toLocaleString()))))));
});
