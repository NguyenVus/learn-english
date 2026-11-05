/* =====================================================================
   Shared types for content data and the saved learner state
   ===================================================================== */

export type Level = "A2" | "B1" | "B2";
export type ByLevel<T> = Record<Level, T>;
export type Skill = "reading" | "listening" | "speaking" | "writing";
/** Anything that can appear in the score history / chart */
export type ScoreSkill = Skill | "grammar" | "vocab" | "tests";

/* ---------------- Questions (used by the quiz engine) ----------------
   Optional on every question:
     ctx  – text shown above the question (mini reading)
     say  – text read aloud with a play button (mini listening)
     x    – hand-written explanation shown after checking
     lv   – difficulty (placement test weighting)
     _g   – id of the grammar lesson the question belongs to (set at start-up)
     id   – stable unique identifier across the app */
interface QuestionBase { id?: string; ctx?: string; say?: string; x?: string; lv?: Level; _g?: string; title?: string }
export interface MCQuestion extends QuestionBase { t: "mc"; q: string; o: string[]; a: number }
export interface TFQuestion extends QuestionBase { t: "tf"; q: string; a: boolean }
export interface TFNGQuestion extends QuestionBase { t: "tfng"; q: string; a: "T" | "F" | "NG" }
/** One gap marked with ___ ; a = accepted answer(s) */
export interface GapQuestion extends QuestionBase { t: "gap"; q: string; a: string | string[] }
/** Several gaps written as [answer|alternative] inside the text */
export interface GapTextQuestion extends QuestionBase { t: "gaptext"; text: string }
export interface MatchQuestion extends QuestionBase { t: "match"; q: string; p: [string, string][] }
/** Matching headings: a = index of the right heading for each paragraph */
export interface HeadingQuestion extends QuestionBase { t: "head"; q: string; h: string[]; a: number[] }
/** Sentence transformation: rewrite orig sentence using key word into q (marked with ___) */
export interface RewriteQuestion extends QuestionBase { t: "rewrite"; orig: string; key?: string; q: string; a: string | string[] }
/** Error identification: find the underlined incorrect part (0..parts.length-1) */
export interface ErrorQuestion extends QuestionBase { t: "error"; q: string; parts: string[]; a: number; corr?: string }
export type Question = MCQuestion | TFQuestion | TFNGQuestion | GapQuestion | GapTextQuestion | MatchQuestion | HeadingQuestion | RewriteQuestion | ErrorQuestion;
export type QuestionType = Question["t"];

/* ---------------- Content ---------------- */
export interface ReadingPassage {
  id: string; title: string; topic: string; text: string;
  /** glossary: word → [Vietnamese, English definition] */
  g: Record<string, [string, string]>;
  q: Question[];
}
export interface ListeningItem {
  id: string; title: string; type: string;
  speakers: Record<string, string>;
  /** [speaker key, text] */
  lines: [string, string][];
  q: Question[];
  /** gap-fill text with [answer|alternative] blanks */
  gap: string;
  /** dictation sentence */
  dict: string;
}
export interface SpeakingTask {
  id: string; title: string; prompt: string; vi: string; qs: string[];
  /** seconds */ prep: number; time: number;
  /** rough number of words expected */ target: number;
  phrases: string[]; pic?: string; caption?: string;
}
export interface PronunciationSet { id: string; title: string; icon: string; tip: string; vi: string; items: (string | { t: string; s: string })[] }
export interface WritingTaskBase { prompt: string; min: number; max: number; /** keywords that show task points are covered */ k?: string[] }
export interface WritingTask extends WritingTaskBase { id: string; type: string; title: string; vi: string; model: string }
export interface GrammarLesson { id: string; title: string; /** HTML */ ex: string; vi: string; eg: string[]; q: Question[] }
/** [word, part of speech, Vietnamese, English definition, example] */
export type VocabEntry = [string, string, string, string, string];
export interface VocabTopic { topic: string; words: VocabEntry[] }
/** [phrasal verb, Vietnamese, example, level] */
export type PhrasalVerb = [string, string, string, Level];
/** [collocation, Vietnamese, level] */
export type Collocation = [string, string, Level];
/** [wrong, right, why] */
export type Mistake = [string, string, string];
export interface Unit { id: string; title: string; grammar: string[]; vocab: string[]; reading: string[]; listening: string[]; speaking: string[]; writing: string[] }
export interface Guide {
  id: string; skill: Skill; icon: string; title: string; /** HTML */ intro: string;
  steps: string[]; traps?: string[]; vi: string;
  example?: { ctx?: string; q: string; a: string; why?: string };
  phrases?: string[]; structure?: string[];
  practice: Question[];
}
export interface GuideMap { reading: Record<string, string>; writing: Record<string, string>; speaking: Record<string, string> }

/** Item kinds that can be opened on their own page */
export type ContentKind = "reading" | "listening" | "speaking" | "writing" | "grammar";

/* ---------------- Learner state (localStorage) ---------------- */
export interface DoneEntry { score: number; last: number; date: number; n: number; skill: ScoreSkill }
export interface ScoreEntry { d: number; skill: ScoreSkill; s: number; id: string | null }
export interface VocabCard { w: string; vi: string; en: string; ex: string; pos: string; level: Level; box: number; due: number; added: number; right: number; wrong: number }
export interface WritingRecord { id: number; taskId: string; level: Level; title: string; text: string; words: number; score: number; date: number }
export interface SpeakingRecord { id: string; text: string; secs: number; wpm: number; date: number }
export interface StageTestRecord { best: number; attempts: number; history: { d: number; total: number; parts: Record<string, number> }[] }
export type PlanKind = Skill | "vocab" | "grammar";
export interface PlanItem { kind: PlanKind; id?: string; title: string; min: number; route: string }
export interface Plan { date: string; level: Level; weakest: Skill; items: PlanItem[]; done: number[] }
export interface Placement { result: string; score?: number; date: number; skipped?: boolean }
export interface Settings { theme: "light" | "dark"; accent: "US" | "UK"; rate: number; vi: ByLevel<boolean>; voiceName?: string }
export interface ErrorItem {
  id: string;
  q: Question;
  source?: string;
  lessonId?: string;
  title?: string;
  skill?: ScoreSkill | "grammar";
  added: number;
  wrongCount: number;
  lastSeen: number;
}

export interface MockTest {
  id: string;
  level: Level;
  title: string;
  desc: string;
  timeLimit: number; // in minutes
  category?: "toeic" | "ielts" | "cefr";
  target?: string;
  testType?: "full" | "mini";
  startNumber?: number; // e.g. 101 for TOEIC Part 5-7
  sections?: { name: string; startIndex: number; count: number }[];
  questions: Question[];
}

export interface AppState {
  version: number; created: number;
  level: Level; subLevel: string | null; placement: Placement | null;
  unlocked: ByLevel<boolean>;
  stageTests: Partial<Record<Level, StageTestRecord>>;
  unitTests: Record<string, number>;
  mockTests: Record<string, number>;
  done: Record<string, DoneEntry>;
  scores: ScoreEntry[];
  vocab: Record<string, VocabCard>;
  writings: WritingRecord[];
  speakings: SpeakingRecord[];
  streak: { count: number; best: number; last: string | null };
  /** seconds studied per day (YYYY-MM-DD) */
  days: Record<string, number>;
  weeklyGoal: number;
  settings: Settings;
  plan: Plan | null;
  badges: Record<string, number>;
  selfChecks: Record<string, number[]>;
  errorBank: Record<string, ErrorItem>;
}
