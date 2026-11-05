/* Learner state, saved in localStorage */
import type { AppState, Question, ScoreSkill, VocabCard } from "../types";
import { DAY, todayKey } from "./util";

export const STORE_KEY = "englishpath_v1";

export function defaultState(): AppState {
  const dark = typeof matchMedia !== "undefined" && matchMedia("(prefers-color-scheme: dark)").matches;
  return {
    version: 1, created: Date.now(), level: "A2", subLevel: null, placement: null,
    unlocked: { A2: true, B1: false, B2: false }, stageTests: {}, unitTests: {},
    done: {}, scores: [], vocab: {}, writings: [], speakings: [],
    streak: { count: 0, best: 0, last: null }, days: {}, weeklyGoal: 150,
    settings: { theme: dark ? "dark" : "light", accent: "US", rate: 1, vi: { A2: true, B1: true, B2: false } },
    plan: null, badges: {}, selfChecks: {}, errorBank: {}, mockTests: {}
  };
}

type Plain = Record<string, unknown>;
const isObj = (v: unknown): v is Plain => !!v && typeof v === "object" && !Array.isArray(v);
/** Merge saved data over the defaults so new fields always exist */
export function deepMerge<T>(base: T, obj: unknown): T {
  if (!isObj(base) || !isObj(obj)) return base;
  const b = base as Plain;
  for (const k of Object.keys(obj)) b[k] = isObj(b[k]) && isObj(obj[k]) ? deepMerge(b[k], obj[k]) : obj[k];
  return base;
}

function loadState(): AppState {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
    if (isObj(raw) && raw.version) return deepMerge(defaultState(), raw);
  } catch { /* corrupted storage → start fresh */ }
  return defaultState();
}

/** The current state. Other modules see updates through the live ES-module binding. */
export let S: AppState = loadState();
export function replaceState(next: AppState): void { S = next; save(); }
export function save(): void { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { console.warn(e); } }

/* ---------- Derived values ---------- */
export const totalSeconds = (): number => Object.values(S.days).reduce((a, b) => a + b, 0);
export function weekSeconds(): number {
  const now = new Date(); const dow = (now.getDay() + 6) % 7; let total = 0;
  for (let i = 0; i <= dow; i++) total += S.days[todayKey(new Date(now.getTime() - i * DAY))] || 0;
  return total;
}
export function currentStreak(): number {
  const t = todayKey(), y = todayKey(new Date(Date.now() - DAY));
  return S.streak.last === t || S.streak.last === y ? S.streak.count : 0;
}
export function touchStreak(): void {
  const t = todayKey(); if (S.streak.last === t) return;
  const y = todayKey(new Date(Date.now() - DAY));
  S.streak.count = S.streak.last === y ? S.streak.count + 1 : 1;
  S.streak.last = t; S.streak.best = Math.max(S.streak.best, S.streak.count);
}
export const dueCards = (): VocabCard[] => Object.values(S.vocab).filter(c => c.due <= Date.now()).sort((a, b) => a.due - b.due);
export const learnedCount = (): number => Object.values(S.vocab).filter(c => c.box >= 3).length;

/* ---------- Mistake Bank (Error Notebook) ---------- */
export function recordMistake(item: { id: string; q: Question; source?: string; lessonId?: string; title?: string; skill?: ScoreSkill | "grammar" }): void {
  S.errorBank ??= {};
  const prev = S.errorBank[item.id];
  S.errorBank[item.id] = {
    id: item.id,
    q: item.q,
    source: item.source || prev?.source,
    lessonId: item.lessonId || prev?.lessonId,
    title: item.title || prev?.title,
    skill: item.skill || prev?.skill,
    added: prev?.added || Date.now(),
    wrongCount: (prev?.wrongCount || 0) + 1,
    lastSeen: Date.now()
  };
  save();
}

export function resolveMistake(id: string): boolean {
  if (!S.errorBank || !S.errorBank[id]) return false;
  delete S.errorBank[id];
  save();
  return true;
}

export function clearMistakes(): void {
  S.errorBank = {};
  save();
}

export const mistakesCount = (): number => Object.keys(S.errorBank || {}).length;
