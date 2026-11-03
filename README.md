# EnglishPath · A2 → B1 → B2

An English learning website for Vietnamese learners, from **A2 to B2 (CEFR)**, covering **Reading, Listening, Speaking and Writing**.
Written in **plain TypeScript** (strict mode, no UI framework) and built with Vite into **one self-contained `dist/index.html`**. It needs no server-side code and no external APIs.

## Getting started

```bash
npm install
npm run dev        # development server with hot reload → http://localhost:5173
npm run build      # type-check + build → dist/index.html (single file)
npm run preview    # serve the built file (also on your LAN)
npm run typecheck  # TypeScript check only
```

You can open `dist/index.html` directly in Chrome or Edge. To share it on a local network, serve the `dist` folder, for example:

```bash
python -m http.server 8080 --bind 0.0.0.0 --directory dist
```

## Project structure

```
index.html              page shell (sidebar, header) – loads src/main.ts
src/
  main.ts               entry point: header controls, page registration, router start
  types.ts              all types: questions, content items, saved learner state
  styles.css            design system (light/dark, responsive)
  data/                 learning content, grouped by level
    reading.ts listening.ts speaking.ts writing.ts grammar.ts
    vocab.ts units.ts tests.ts guides.ts index.ts
  core/
    dom.ts              typed h() element helper, toast, small UI atoms
    util.ts             pure helpers (normalising answers, word alignment…)
    state.ts            learner state in localStorage
    progress.ts         scores, skill progress, study time, today's plan, badges
    speech.ts           speech synthesis (with voice fallback) and recognition
    dictionary.ts       offline dictionary, word popup, flashcards (spaced repetition)
    quiz.ts             quiz engine and automatic answer explanations
    writingCheck.ts     automatic writing checks and rubric
    router.ts ui.ts     hash router and shared UI pieces
  pages/                dashboard, roadmap, reading (and listening), speaking, writing,
                        vocabulary (and grammar), guides, tests (placement, unit, stage, chart, badges)
tools/smoke-test.mjs    headless Chrome test of the built site
```

## Features

- **Placement test** (25 questions) → A2, A2+, B1, B1+ or B2
- **Roadmap**: 3 stages × 5 units; a stage unlocks after its stage test (≥ 70%), and any level can still be chosen freely
- **Dashboard**: level, skill progress, streak, study time, words learned, weekly goal and "Today's plan" (~30 min, focused on the weakest skill)
- **Reading**: 15 passages per level, with multiple choice, True/False/Not Given, gap-fill, matching and matching headings; click any word for its meaning, pronunciation and an example
- **Listening**: 9 recordings per level (Web Speech API), US/UK accent, 0.75×/1×/1.25×; multiple choice, gap-fill and dictation with highlighted differences
- **Speaking**: speech recognition, word-by-word pronunciation feedback, timed tasks with transcript, WPM and useful phrases; self-review recording when recognition is not available
- **Writing**: 8 tasks per level with model answers, an estimated rubric and automatic checks; all answers are saved
- **Grammar**: 9 lessons per level with Vietnamese notes and 10 questions each
- **Vocabulary**: word banks, phrasal verbs, collocations, common mistakes and spaced-repetition flashcards
- **Guides**: 25 strategy guides covering every exercise type, plus a "How to do this" box next to each exercise
- **Answer explanations**: evidence from the text or recording, grammar rules and Vietnamese notes
- **Tests & progress**: unit and stage tests, a chart, badges, and export/import of progress

## Adding content

Add items to the arrays in `src/data/*.ts`. The types in `src/types.ts` (for example `Question`, `ReadingPassage`, `ListeningItem`) describe every field, so the TypeScript compiler reports mistakes. To include a new item on the roadmap, add its id to a unit in `src/data/units.ts`.

## Testing

```bash
npm run build && node tools/smoke-test.mjs
```

The test opens every page in headless Chrome, completes the main flows and fails if any runtime error occurs.

## Notes

- Audio comes from the browser's own speech engine. Use "🔈 Test audio" and "Audio not working?" on any listening page if you hear nothing.
- Speech recognition and the microphone need Chrome or Edge on `localhost` or HTTPS.
- All texts are original content written for this project.
