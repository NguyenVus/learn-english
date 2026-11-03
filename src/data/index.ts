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
import type { ContentKind, Level } from "../types";

export const LEVELS: Level[] = ["A2", "B1", "B2"];

export const DATA = { reading, listening, speaking, better, pron, writing, linkers, grammar, vocab, phrasal, collocations, mistakes, units, placement, stageWriting, stageSpeaking, guides, guideMap };

/* Keep every list in numeric id order (r-b2-2 before r-b2-11) */
const num = (id: string) => Number(id.split("-").pop());
for (const kind of ["reading", "listening", "speaking", "writing", "grammar"] as const)
  for (const lv of LEVELS) (DATA[kind][lv] as { id: string }[]).sort((a, b) => num(a.id) - num(b.id));

/* Tag every grammar question with its lesson, so explanations can link back to the rule */
for (const lv of LEVELS) DATA.grammar[lv].forEach(g => g.q.forEach(q => { q._g = g.id; }));

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
