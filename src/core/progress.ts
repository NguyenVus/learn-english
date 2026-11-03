/* Scores, activity completion, study-time tracking, plan and badges */
import type { ContentKind, Level, Plan, PlanItem, ScoreSkill, Skill } from "../types";
import { DATA } from "../data";
import { S, save, touchStreak, totalSeconds, learnedCount } from "./state";
import { pct, todayKey } from "./util";
import { toast } from "./dom";

export const SKILLS: Skill[] = ["reading", "listening", "speaking", "writing"];
export const SKILL_INFO: Record<ScoreSkill, { icon: string; name: string }> = {
  reading: { icon: "📖", name: "Reading" }, listening: { icon: "🎧", name: "Listening" }, speaking: { icon: "🎤", name: "Speaking" },
  writing: { icon: "✍️", name: "Writing" }, grammar: { icon: "🧩", name: "Grammar" }, vocab: { icon: "🗂️", name: "Vocabulary" }, tests: { icon: "🏆", name: "Tests" }
};

/** Record a score for a skill. id = activity id (optional). */
export function recordScore(skill: ScoreSkill, score: number, id?: string | null): void {
  score = Math.max(0, Math.min(100, Math.round(score)));
  S.scores.push({ d: Date.now(), skill, s: score, id: id || null });
  if (id) {
    const prev = S.done[id];
    S.done[id] = { score: Math.max(score, prev ? prev.score : 0), last: score, date: Date.now(), n: (prev ? prev.n : 0) + 1, skill };
  }
  touchStreak(); planTick(id, skill); checkBadges(); save();
}

/* ---------- Activities & skill progress ---------- */
export const activitiesFor = (kind: ContentKind, lv: Level): { id: string; title: string }[] =>
  DATA[kind][lv].map(x => ({ id: x.id, title: x.title }));

export interface SkillStat { total: number; done: number; progress: number; avg: number | null }
export function skillStats(lv: Level): Record<Skill | "grammar", SkillStat> {
  const out = {} as Record<Skill | "grammar", SkillStat>;
  for (const sk of [...SKILLS, "grammar"] as const) {
    const acts = activitiesFor(sk, lv); const done = acts.filter(a => S.done[a.id]);
    const avg = done.length ? Math.round(done.reduce((s, a) => s + S.done[a.id].score, 0) / done.length) : null;
    out[sk] = { total: acts.length, done: done.length, progress: pct(done.length, acts.length), avg };
  }
  return out;
}
export function weakestSkill(lv: Level): Skill {
  const st = skillStats(lv); let best: Skill = "reading", bestVal = Infinity;
  SKILLS.forEach((sk, i) => { const v = st[sk].progress * 0.5 + (st[sk].avg ?? 0) * 0.5 + i * 0.01; if (v < bestVal) { bestVal = v; best = sk; } });
  return best;
}

/* ---------- Study time (active, visible tab only) ---------- */
let lastActivity = Date.now();
export function startTimeTracking(isBusy: () => boolean): void {
  (["click", "keydown", "scroll", "touchstart", "mousemove"] as const).forEach(e => addEventListener(e, () => { lastActivity = Date.now(); }, { passive: true }));
  setInterval(() => {
    if (document.visibilityState === "visible" && (Date.now() - lastActivity < 90000 || isBusy())) {
      const t = todayKey(); S.days[t] = (S.days[t] || 0) + 15;
      if (S.days[t] >= 300) touchStreak();
      checkBadges(); save();
    }
  }, 15000);
}

/* ---------- Today's plan (~30 minutes, focused on the weakest skill) ---------- */
function nextActivity(kind: ContentKind, lv: Level) {
  const list = activitiesFor(kind, lv); if (!list.length) return null;
  const notDone = list.filter(a => !S.done[a.id]);
  return notDone.length ? notDone[0] : [...list].sort((a, b) => S.done[a.id].score - S.done[b.id].score)[0];
}
export function getPlan(): Plan {
  const t = todayKey(), lv = S.level;
  if (S.plan && S.plan.date === t && S.plan.level === lv) return S.plan;
  const weakest = weakestSkill(lv);
  const others = SKILLS.filter(s => s !== weakest); const second = others[new Date().getDate() % others.length];
  const items: PlanItem[] = [{ kind: "vocab", title: "Flashcard review (spaced repetition)", min: 5, route: "vocabulary/review" }];
  const a1 = nextActivity(weakest, lv); if (a1) items.push({ kind: weakest, id: a1.id, title: SKILL_INFO[weakest].name + ": " + a1.title, min: 10, route: `${weakest}/${lv}/${a1.id}` });
  const a2 = nextActivity(second, lv); if (a2) items.push({ kind: second, id: a2.id, title: SKILL_INFO[second].name + ": " + a2.title, min: 7, route: `${second}/${lv}/${a2.id}` });
  const g = nextActivity("grammar", lv); if (g) items.push({ kind: "grammar", id: g.id, title: "Grammar: " + g.title, min: 8, route: `grammar/${lv}/${g.id}` });
  S.plan = { date: t, level: lv, weakest, items, done: [] }; save();
  return S.plan;
}
function planTick(id: string | null | undefined, skill: ScoreSkill): void {
  const plan = S.plan;
  if (!plan || plan.date !== todayKey()) return;
  plan.items.forEach((it, i) => { if (!plan.done.includes(i) && ((id && it.id === id) || (it.kind === "vocab" && skill === "vocab"))) plan.done.push(i); });
}

/* ---------- Badges ---------- */
const countDone = (prefix: string) => Object.keys(S.done).filter(k => k.startsWith(prefix)).length;
export interface Badge { id: string; icon: string; name: string; desc: string; test: () => boolean }
export const BADGES: Badge[] = [
  { id: "first", icon: "👣", name: "First step", desc: "Complete your first activity", test: () => Object.keys(S.done).length >= 1 },
  { id: "placement", icon: "🧭", name: "Know your level", desc: "Finish the placement test", test: () => S.placement?.score != null },
  { id: "streak3", icon: "🔥", name: "On fire", desc: "3-day streak", test: () => S.streak.best >= 3 },
  { id: "streak7", icon: "📆", name: "One week strong", desc: "7-day streak", test: () => S.streak.best >= 7 },
  { id: "streak30", icon: "💎", name: "Unstoppable", desc: "30-day streak", test: () => S.streak.best >= 30 },
  { id: "words50", icon: "📚", name: "Word collector", desc: "Save 50 words", test: () => Object.keys(S.vocab).length >= 50 },
  { id: "learned100", icon: "🧠", name: "Memory master", desc: "Learn 100 words (box 3+)", test: () => learnedCount() >= 100 },
  { id: "act10", icon: "🚀", name: "Getting going", desc: "Complete 10 activities", test: () => Object.keys(S.done).length >= 10 },
  { id: "act50", icon: "🏃", name: "Marathon learner", desc: "Complete 50 activities", test: () => Object.keys(S.done).length >= 50 },
  { id: "reader", icon: "📖", name: "Bookworm", desc: "Finish 10 reading passages", test: () => countDone("r-") >= 10 },
  { id: "listener", icon: "🎧", name: "Good listener", desc: "Finish 5 listening tasks", test: () => countDone("l-") >= 5 },
  { id: "speaker", icon: "🎤", name: "Brave speaker", desc: "Finish 5 speaking tasks", test: () => countDone("s-") + countDone("p-") >= 5 },
  { id: "writer", icon: "✍️", name: "Writer", desc: "Submit 5 pieces of writing", test: () => S.writings.length >= 5 },
  { id: "grammar10", icon: "🧩", name: "Grammar guru", desc: "Finish 10 grammar lessons", test: () => countDone("g-") >= 10 },
  { id: "guides5", icon: "📘", name: "Strategist", desc: "Practise 5 strategy guides", test: () => countDone("gd-") >= 5 },
  { id: "perfect", icon: "🌟", name: "Perfect!", desc: "Get 100% in any activity", test: () => S.scores.some(s => s.s === 100) },
  { id: "hour", icon: "⏱️", name: "First hour", desc: "Study for 1 hour in total", test: () => totalSeconds() >= 3600 },
  { id: "hours10", icon: "⌛", name: "Dedicated", desc: "Study for 10 hours in total", test: () => totalSeconds() >= 36000 },
  { id: "A2done", icon: "🟢", name: "A2 complete", desc: "Pass the A2 stage test", test: () => (S.stageTests.A2?.best ?? 0) >= 70 },
  { id: "B1done", icon: "🔵", name: "B1 complete", desc: "Pass the B1 stage test", test: () => (S.stageTests.B1?.best ?? 0) >= 70 },
  { id: "B2done", icon: "🟣", name: "B2 complete", desc: "Pass the B2 stage test", test: () => (S.stageTests.B2?.best ?? 0) >= 70 }
];
export function checkBadges(): void {
  for (const b of BADGES) {
    if (!S.badges[b.id] && b.test()) { S.badges[b.id] = Date.now(); toast("🏅 Badge earned: " + b.name); }
  }
}
