/* Pure helpers (no DOM, no state) */
export const DAY = 864e5;

export const todayKey = (d: Date = new Date()): string =>
  d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");

export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
export const sample = <T>(arr: readonly T[], n: number): T[] => shuffle(arr).slice(0, n);

/** Lower-case, unify apostrophes, strip punctuation – used to compare answers */
export const norm = (s: unknown): string =>
  String(s).toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9' -]/g, " ").replace(/-/g, " ").replace(/\s+/g, " ").trim();
export const countWords = (s: string): number => (String(s).trim().match(/[A-Za-zÀ-ỹ0-9'’-]+/g) || []).length;
export const fmtMin = (sec: number): number => Math.round(sec / 60);
export const pct = (a: number, b: number): number => (b ? Math.round((a / b) * 100) : 0);
export const escapeRx = (s: string): string => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/* ---------- Word alignment (pronunciation & dictation feedback) ---------- */
const NUMS: Record<string, string> = { "0": "zero", "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten", "11": "eleven", "12": "twelve", "15": "fifteen", "20": "twenty", "30": "thirty", "50": "fifty", "100": "hundred" };
const tokens = (s: string) => norm(s).split(" ").filter(Boolean).map(w => NUMS[w] || w);
export interface AlignOp { t: "ok" | "miss" | "extra"; w: string }
export interface AlignResult { ops: AlignOp[]; correct: number; total: number; score: number }
/** Longest-common-subsequence alignment of target words vs. what was said / typed */
export function alignWords(target: string, said: string): AlignResult {
  const a = tokens(target), b = tokens(said), n = a.length, m = b.length;
  const dp = Array.from({ length: n + 1 }, () => new Array<number>(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const ops: AlignOp[] = []; let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { ops.push({ t: "ok", w: a[i] }); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { ops.push({ t: "miss", w: a[i] }); i++; }
    else { ops.push({ t: "extra", w: b[j] }); j++; }
  }
  while (i < n) ops.push({ t: "miss", w: a[i++] });
  while (j < m) ops.push({ t: "extra", w: b[j++] });
  const correct = ops.filter(o => o.t === "ok").length;
  return { ops, correct, total: n, score: pct(correct, n) };
}
