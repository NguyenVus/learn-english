/* All learning content in one typed object. Add content in the files of this folder. */
import { reading } from "./reading";
import { listening } from "./listening";
import { speaking, better, pron } from "./speaking";
import { writing, linkers } from "./writing";
import { grammar } from "./grammar";
import { vocab, phrasal, collocations, mistakes } from "./vocab";
import { units } from "./units";
import { placement, stageWriting, stageSpeaking } from "./tests";
import { guides, guideMap } from "./guides";
import { mockTests } from "./mockTests";
import { toeic600 } from "./toeic600";
import type { ContentKind, Level } from "../types";

export const LEVELS: Level[] = ["A2", "B1", "B2"];

export const DATA = { reading, listening, speaking, better, pron, writing, linkers, grammar, vocab, phrasal, collocations, mistakes, units, placement, stageWriting, stageSpeaking, guides, guideMap, mockTests, toeic600 };

/* Keep every list in numeric id order (r-b2-2 before r-b2-11) */
const num = (id: string) => Number(id.split("-").pop());
for (const kind of ["reading", "listening", "speaking", "writing", "grammar"] as const)
  for (const lv of LEVELS) (DATA[kind][lv] as { id: string }[]).sort((a, b) => num(a.id) - num(b.id));

/* Tag every question with an ID and metadata so explanations and Mistake Bank can reference it */
for (const lv of LEVELS) {
  DATA.grammar[lv].forEach(g => g.q.forEach((q, i) => {
    q._g = g.id;
    q.id ||= `${g.id}-q${i + 1}`;
    q.lv ||= lv;
    q.title ||= `Grammar (${lv}): ${g.title}`;
  }));
  DATA.reading[lv].forEach(p => p.q.forEach((q, i) => {
    q.id ||= `${p.id}-q${i + 1}`;
    q.lv ||= lv;
    q.title ||= `Reading (${lv}): ${p.title}`;
  }));
  DATA.listening[lv].forEach(l => l.q.forEach((q, i) => {
    q.id ||= `${l.id}-q${i + 1}`;
    q.lv ||= lv;
    q.title ||= `Listening (${lv}): ${l.title}`;
  }));
  DATA.mockTests[lv].forEach(t => t.questions.forEach((q, i) => {
    q.id ||= `${t.id}-q${i + 1}`;
    q.lv ||= lv;
    q.title ||= `${t.title} (Q${i + 1})`;
  }));
}
DATA.placement.forEach((q, i) => {
  q.id ||= `placement-q${i + 1}`;
  q.title ||= `Placement test (Q${i + 1})`;
});
DATA.guides.forEach(g => g.practice.forEach((q, i) => {
  q.id ||= `${g.id}-q${i + 1}`;
  q.title ||= `Guide: ${g.title}`;
}));

type ItemOf<K extends ContentKind> = (typeof DATA)[K][Level][number];
/** Find an item of any level by id */
export function findItem<K extends ContentKind>(kind: K, id: string | null | undefined): (ItemOf<K> & { level: Level }) | null {
  if (!id) return null;
  for (const lv of LEVELS) {
    const it = (DATA[kind][lv] as ItemOf<K>[]).find(x => x.id === id);
    if (it) return { ...it, level: lv };
  }
  return null;
}
