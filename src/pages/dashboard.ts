/* Dashboard: clean, modern, spacious learning dashboard */
import type { Skill } from "../types";
import { h, put, levelChip, bar, viBox } from "../core/dom";
import { S, save, currentStreak, totalSeconds, weekSeconds, learnedCount, dueCards, mistakesCount } from "../core/state";
import { DAY, fmtMin, pct, todayKey } from "../core/util";
import { SKILLS, SKILL_INFO, getPlan, skillStats } from "../core/progress";
import { go, registerPage, route, setViewLevel } from "../core/router";
import { titleOf } from "../core/ui";

function weekBars(): HTMLElement {
  const now = new Date();
  const dow = (now.getDay() + 6) % 7;
  const names = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];
  const vals = names.map((_, i) => (i <= dow ? fmtMin(S.days[todayKey(new Date(now.getTime() - (dow - i) * DAY))] || 0) : 0));
  const max = Math.max(30, ...vals);
  return h("div", { class: "week-bars-wrap" },
    names.map((n, i) => {
      const isToday = i === dow;
      const height = Math.round((vals[i] / max) * 60) + 4;
      return h("div", { class: "week-bar-col" + (isToday ? " is-today" : "") },
        h("div", { class: "week-bar-tooltip" }, `${vals[i]} phút`),
        h("div", { class: "week-bar-track" },
          h("div", {
            class: "week-bar-fill" + (isToday ? " active" : ""),
            style: `height:${height}px`
          })
        ),
        h("div", { class: "week-bar-label" }, n)
      );
    })
  );
}

registerPage("dashboard", "Dashboard", view => {
  const lv = S.level;
  setViewLevel(lv);

  const hour = new Date().getHours();
  const greetingText = hour < 12 ? "Chào buổi sáng" : hour < 18 ? "Chào buổi chiều" : "Chào buổi tối";
  const greetingIcon = hour < 12 ? "🌅" : hour < 18 ? "☀️" : "🌙";
  const streak = currentStreak();
  const todayMin = fmtMin(S.days[todayKey()] || 0);
  const wk = fmtMin(weekSeconds());
  const goal = S.weeklyGoal;
  const goalPct = pct(wk, goal);
  const plan = getPlan();
  const nextTask = plan.items.find((_, i) => !plan.done.includes(i)) || plan.items[0];
  const st = skillStats(lv);

  // 1. Sleek Greeting Header
  const heroEl = h("div", { class: "dashboard-hero" },
    h("div", { class: "hero-badge-row" },
      h("span", { class: "hero-pill" }, `Lộ trình cá nhân hoá · CEFR ${lv}`),
      streak > 0 ? h("span", { class: "hero-streak-pill" }, `🔥 ${streak} ngày streak`) : null
    ),
    h("h1", { class: "hero-title" }, `${greetingText}! Sẵn sàng nâng trình tiếng Anh hôm nay? ${greetingIcon}`),
    h("p", { class: "hero-sub" },
      `Bạn đã học ${todayMin} phút hôm nay · Duy trì chuỗi ` +
      `${streak} ngày liên tục 🔥 · Tiến độ tuần: ${wk}/${goal} phút (${goalPct}%)`
    ),
    h("div", { class: "hero-actions" },
      nextTask
        ? h("button", { class: "btn primary", onclick: () => go(nextTask.route) }, `⚡ Tiếp tục: ${nextTask.title}`)
        : h("button", { class: "btn primary", onclick: () => go("reading/" + lv) }, "⚡ Bắt đầu bài học mới"),
      h("button", { class: "btn", onclick: () => go("tests") }, "🏆 12 Đề thi thử"),
      h("button", { class: "btn", onclick: () => go("vocabulary/toeic") }, "🎯 600 Từ TOEIC")
    )
  );
  put(view, heroEl);

  // 2. Placement test banner for new users
  if (!S.placement) {
    put(view, h("div", { class: "card placement-hero-card" },
      h("div", { class: "row", style: "gap:16px;align-items:center" },
        h("div", { style: "font-size:2.2rem;line-height:1" }, "🧭"),
        h("div", { style: "flex:1" },
          h("h3", { style: "margin:0" }, "Kiểm tra xếp lớp (Placement Test)"),
          h("p", { class: "muted small", style: "margin:4px 0" }, "25 câu hỏi trắc nghiệm (khoảng 15 phút) giúp hệ thống xác định chính xác trình độ xuất phát của bạn: A2, B1 hay B2.")
        ),
        h("div", { class: "row", style: "gap:8px" },
          h("button", { class: "btn primary sm", onclick: () => go("placement") }, "🧭 Bắt đầu kiểm tra"),
          h("button", { class: "btn sm", onclick: () => { S.placement = { skipped: true, result: "A2", date: Date.now() }; save(); route(); } }, "Bỏ qua · Bắt đầu A2")
        )
      )
    ));
  }

  // 3. Bento Stats Row (4 clean metric cards)
  const statsRow = h("div", { class: "stats-bento" },
    h("div", { class: "stat-card-modern", onclick: () => go("roadmap") },
      h("div", { class: "stat-top" },
        h("span", { class: "stat-label" }, "Trình độ CEFR"),
        h("span", { class: "stat-icon-badge" }, "🎯")
      ),
      h("div", { class: "stat-num" }, levelChip(lv), S.subLevel && S.subLevel !== lv ? h("span", { class: "stat-sub-chip" }, S.subLevel) : ""),
      h("div", { class: "stat-foot" }, "Xem chi tiết lộ trình →")
    ),
    h("div", { class: "stat-card-modern" },
      h("div", { class: "stat-top" },
        h("span", { class: "stat-label" }, "Chuỗi học liên tục"),
        h("span", { class: "stat-icon-badge" }, "🔥")
      ),
      h("div", { class: "stat-num" }, `${streak} ngày`),
      h("div", { class: "stat-foot" }, `Kỷ lục cao nhất: ${S.streak.best} ngày`)
    ),
    h("div", { class: "stat-card-modern" },
      h("div", { class: "stat-top" },
        h("span", { class: "stat-label" }, "Thời gian học"),
        h("span", { class: "stat-icon-badge" }, "⏱️")
      ),
      h("div", { class: "stat-num" }, `${todayMin} phút`),
      h("div", { class: "stat-foot" }, `Hôm nay · ${(totalSeconds() / 3600).toFixed(1)}h tích luỹ`)
    ),
    h("div", { class: "stat-card-modern", onclick: () => go("vocabulary/review") },
      h("div", { class: "stat-top" },
        h("span", { class: "stat-label" }, "Vốn từ ghi nhớ"),
        h("span", { class: "stat-icon-badge" }, "📚")
      ),
      h("div", { class: "stat-num" }, `${learnedCount()} từ`),
      h("div", { class: "stat-foot" }, `${Object.keys(S.vocab).length} đã lưu · ${dueCards().length} cần ôn`)
    )
  );
  put(view, statsRow);

  // 4. Mistake Bank Alert if any mistakes exist
  const errN = mistakesCount();
  if (errN > 0) {
    put(view, h("div", { class: "notice warn", style: "display:flex;align-items:center;gap:14px;margin:0 0 20px" },
      h("span", { style: "font-size:1.8rem" }, "📓"),
      h("div", { style: "flex:1" },
        h("div", { style: "font-weight:700;font-size:1.02rem" }, `Sổ tay lỗi sai: Có ${errN} câu bạn từng trả lời sai`),
        h("div", { class: "small muted" }, "Làm lại cho đến khi trả lời đúng để khắc phục hoàn toàn lỗ hổng kiến thức.")
      ),
      h("button", { class: "btn sm primary", onclick: () => go("mistakes") }, "⚡ Ôn tập ngay →")
    ));
  }

  // 5. Asymmetric Bento Grid
  // Left Column: Today's Mission & 4 Skills Hub
  const planTotalMin = plan.items.reduce((s, i) => s + i.min, 0);
  const planDoneCount = plan.done.length;
  const planCard = h("div", { class: "card bento-card" },
    h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-bottom:8px" },
      h("h3", { style: "margin:0" }, "📅 Nhiệm vụ học tập hôm nay"),
      h("div", { class: "row", style: "gap:6px" },
        h("span", { class: "chip" }, `≈ ${planTotalMin} phút`),
        h("span", { class: "done-badge" }, `${planDoneCount}/${plan.items.length} xong`)
      )
    ),
    h("p", { class: "small muted", style: "margin-bottom:10px" },
      "Trọng tâm: ",
      h("b", {}, SKILL_INFO[plan.weakest].icon + " " + SKILL_INFO[plan.weakest].name),
      ` (kỹ năng bạn cần đẩy mạnh nhất ở ${lv})`
    ),
    bar(pct(planDoneCount, plan.items.length)),
    viBox("Kế hoạch khoảng 30 phút, ưu tiên kỹ năng yếu nhất để tối ưu hiệu quả."),
    h("div", { style: "display:flex;flex-direction:column;gap:8px;margin-top:12px" },
      plan.items.map((it, i) => {
        const done = plan.done.includes(i);
        return h("div", { class: "list-item", onclick: () => go(it.route) },
          h("span", { style: "font-size:1.4rem" }, done ? "✅" : SKILL_INFO[it.kind].icon),
          h("div", { style: "flex:1" },
            h("div", { style: "font-weight:600" + (done ? ";text-decoration:line-through;opacity:.7" : "") }, it.title),
            h("div", { class: "small muted" }, `${it.min} phút · ${SKILL_INFO[it.kind].name}`)
          ),
          h("span", { class: `btn sm ${done ? "" : "primary"}` }, done ? "Xem lại" : "Làm ngay")
        );
      })
    ),
    planDoneCount === plan.items.length
      ? h("div", { class: "notice ok", style: "margin-top:14px" }, "🎉 Bạn đã hoàn thành 100% mục tiêu hôm nay! Quá xuất sắc.")
      : null
  );

  // Skill Hub Grid (Reading, Listening, Speaking, Writing, Grammar)
  const allCoreSkills: (Skill | "grammar")[] = [...SKILLS, "grammar"];
  const skillCardsGrid = h("div", { class: "card bento-card" },
    h("div", { class: "row", style: "justify-content:space-between;align-items:center" },
      h("h3", { style: "margin:0" }, `🚀 4 Kỹ năng & Ngữ pháp (${lv})`),
      h("a", { href: "#/roadmap", class: "small" }, "Xem lộ trình →")
    ),
    h("p", { class: "small muted", style: "margin:4px 0 14px" }, "Luyện tập theo từng kỹ năng với ngân hàng bài tập phong phú chuẩn format quốc tế."),
    h("div", { class: "skill-cards-grid" },
      allCoreSkills.map(sk => {
        const info = SKILL_INFO[sk];
        const s = st[sk];
        return h("div", { class: "skill-card-item", onclick: () => go(`${sk}/${lv}`) },
          h("div", { class: "row", style: "justify-content:space-between;align-items:center" },
            h("span", { style: "font-size:1.5rem" }, info.icon),
            h("span", { class: "chip sm" }, `${s.done}/${s.total} bài`)
          ),
          h("div", { style: "font-weight:700;font-size:1.02rem;margin-top:4px" }, info.name),
          bar(s.progress),
          h("div", { class: "row small muted", style: "justify-content:space-between;margin-top:4px" },
            h("span", {}, `${s.progress}% xong`),
            h("span", { style: "font-weight:600;color:var(--text)" }, s.avg == null ? "–" : `⭐ ${s.avg}%`)
          )
        );
      })
    )
  );

  const mainCol = h("div", { class: "bento-main" }, planCard, skillCardsGrid);

  // Right Column: Weekly Goal & Chart, 600 TOEIC Spotlight, Recent Activity
  const goalIn = h("input", { type: "number", min: 30, max: 1500, step: 10, value: goal, style: "width:85px" });
  const goalCard = h("div", { class: "card bento-card" },
    h("div", { class: "row", style: "justify-content:space-between;align-items:center" },
      h("h3", { style: "margin:0" }, "🎯 Mục tiêu tuần"),
      h("span", { class: "chip" }, `${wk} / ${goal} phút`)
    ),
    h("div", { class: "stat", style: "margin:8px 0" }, `${goalPct}%`),
    bar(goalPct, "var(--ok)"),
    h("div", { class: "row small", style: "margin:12px 0 6px;gap:8px" },
      h("span", { class: "muted" }, "Mục tiêu (phút/tuần):"),
      goalIn,
      h("button", { class: "btn sm", onclick: () => { S.weeklyGoal = Math.max(30, Number(goalIn.value) || 150); save(); route(); } }, "Lưu")
    ),
    weekBars()
  );

  const toeicSpotlight = h("div", { class: "card bento-card toeic-spotlight-card" },
    h("div", { class: "row", style: "justify-content:space-between;align-items:center" },
      h("span", { class: "chip lv B1" }, "TOEIC Mastery"),
      h("span", { class: "small muted" }, "12 chủ đề · 600 từ")
    ),
    h("h4", { style: "margin:8px 0 4px;font-size:1.1rem" }, "🎯 600 Essential Words"),
    h("p", { class: "small muted", style: "margin-bottom:12px;line-height:1.5" },
      "Bộ từ vựng cốt lõi thường gặp nhất trong các đề thi TOEIC thực tế, kèm chế độ Flashcards lặp lại ngắt quãng & Gõ chính tả."
    ),
    h("div", { class: "row", style: "gap:8px" },
      h("button", { class: "btn sm primary", onclick: () => go("vocabulary/toeic") }, "12 Chủ đề TOEIC →"),
      h("button", { class: "btn sm", onclick: () => go("vocabulary/review") }, "🃏 Lật thẻ ôn tập")
    )
  );

  const recent = S.scores.slice(-5).reverse();
  const recentCard = h("div", { class: "card bento-card" },
    h("h3", { style: "margin:0 0 12px" }, "📜 Hoạt động gần đây"),
    recent.length
      ? h("div", { class: "activity-feed" },
          recent.map(r => {
            const pillClass = r.s >= 80 ? "good" : r.s >= 60 ? "avg" : "low";
            return h("div", { class: "activity-item" },
              h("span", { class: "activity-icon" }, SKILL_INFO[r.skill].icon),
              h("div", { style: "flex:1;min-width:0" },
                h("div", { class: "activity-title" }, titleOf(r.id) || SKILL_INFO[r.skill].name),
                h("div", { class: "small muted" }, new Date(r.d).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) + " · " + new Date(r.d).toLocaleDateString())
              ),
              h("span", { class: `score-pill ${pillClass}` }, `${r.s}%`)
            );
          })
        )
      : h("p", { class: "small muted center", style: "padding:16px 0" }, "Chưa có hoạt động. Hãy bắt đầu bài học đầu tiên!")
  );

  const sideCol = h("div", { class: "bento-side" }, goalCard, toeicSpotlight, recentCard);

  // Combine into Bento Layout
  const bentoGrid = h("div", { class: "bento-layout" }, mainCol, sideCol);
  put(view, bentoGrid);
});
