/* Speaking tasks (timers, transcript, WPM, phrases) and pronunciation practice */
import type { Level, SpeakingTask } from "../types";
import { DATA, LEVELS } from "../data";
import { h, put, levelChip, toast, viBox } from "../core/dom";
import { S, save } from "../core/state";
import { alignWords, countWords, escapeRx, norm } from "../core/util";
import { SR, isRecognising, recognize, say, srNotice, stopRecognition, stopSpeech } from "../core/speech";
import { recordScore } from "../core/progress";
import { addTimer, go, registerPage, setViewLevel } from "../core/router";
import { backLink, doneMark, levelTabs, lockNote, renderDiff } from "../core/ui";
import { linkersUpTo } from "../core/writingCheck";
import { guideBox } from "./guides";

registerPage("speaking", "Speaking", (view, lvArg, id) => {
  if (lvArg === "pron") return pronunciationPage(view, id);
  const lv: Level = LEVELS.includes(lvArg as Level) ? (lvArg as Level) : S.level; setViewLevel(lv);
  if (id) return speakingTask(view, lv, id);
  put(view, levelTabs("speaking", lv), lockNote(lv), !SR ? srNotice() : null,
    h("div", { class: "card" }, h("h2", {}, "🗣️ Pronunciation practice"),
      h("p", { class: "small muted" }, "Read words and sentences aloud and get word-by-word feedback. Focus on sounds that are difficult for Vietnamese learners."),
      h("div", { class: "grid g3" }, DATA.pron.map(p => h("div", { class: "list-item", onclick: () => go("speaking/pron/" + p.id) }, h("span", { style: "font-size:1.4rem" }, p.icon), h("div", { style: "flex:1" }, h("b", {}, p.title)), doneMark(p.id))))),
    h("h2", {}, "Speaking tasks · " + lv),
    viBox({ A2: "A2: giới thiệu bản thân, mô tả một ngày, trả lời câu hỏi cá nhân.", B1: "B1: kể trải nghiệm, nói về kế hoạch, mô tả tranh, nêu ý kiến đơn giản.", B2: "B2: so sánh, bảo vệ quan điểm với lý do, thảo luận ưu và nhược điểm." }[lv]),
    DATA.speaking[lv].map(t => h("div", { class: "list-item", onclick: () => go(`speaking/${lv}/${t.id}`) },
      h("span", { style: "font-size:1.5rem" }, t.pic ? "🖼️" : "🎤"), h("div", { style: "flex:1" }, h("b", {}, t.title), h("div", { class: "small muted" }, `Prepare ${t.prep}s · Speak ${t.time}s`)), doneMark(t.id))));
});

function pronunciationPage(view: HTMLElement, id?: string): void {
  const P = DATA.pron.find(p => p.id === id) || DATA.pron[0];
  put(view, backLink("speaking", "Speaking"),
    h("div", { class: "tabs", style: "margin-top:10px" }, DATA.pron.map(p => h("button", { class: p.id === P.id ? "active" : "", onclick: () => go("speaking/pron/" + p.id) }, p.icon + " " + p.title))),
    h("div", { class: "card" }, h("h1", {}, P.icon + " " + P.title), h("p", {}, P.tip), viBox(P.vi), guideBox(["gd-speak-fluency"]), !SR ? srNotice() : null));
  const scores: Record<number, number> = {};
  P.items.forEach((raw, i) => {
    const item = typeof raw === "string" ? { t: raw, s: "" } : raw;
    const text = item.t.replace(/·/g, " ");
    const out = h("div"); const live = h("div", { class: "small muted" });
    const recBtn = h("button", { class: "btn primary", disabled: !SR }, "🎙️ Record");
    recBtn.onclick = () => {
      if (isRecognising()) { stopRecognition(); return; }
      stopSpeech(); recBtn.innerHTML = '<span class="rec-dot"></span> Listening… (click to stop)'; out.innerHTML = "";
      recognize({ onInterim: t => { live.textContent = "“" + t + "”"; }, onEnd: (said, err) => {
        recBtn.textContent = "🎙️ Record again"; live.textContent = "";
        if (err && !said) { out.append(h("div", { class: "notice bad small" }, err === "not-allowed" ? "Microphone access was blocked. Allow the microphone in your browser settings (it only works on localhost or HTTPS)." : err === "no-speech" ? "No speech detected. Try again and speak clearly." : "Recognition error: " + err)); return; }
        const r = alignWords(text, said); scores[i] = r.score;
        put(out, h("div", { class: "small" }, "You said: “" + said + "”"), renderDiff(r.ops, { showExtra: false }),
          h("div", { class: "notice " + (r.score >= 80 ? "ok" : "warn") + " small" }, `Accuracy: ${r.score}%. ` + (r.score >= 90 ? "Excellent!" : r.score >= 70 ? "Good – practise the red words." : "Listen to the model again and repeat slowly.")));
        const vals = Object.values(scores); recordScore("speaking", vals.reduce((a, b) => a + b, 0) / vals.length, P.id);
      } });
    };
    put(view, h("div", { class: "card" },
      h("div", { class: "passage", style: "font-weight:600" }, item.t), item.s ? h("div", { class: "small", style: "color:var(--primary)" }, "Stress: " + item.s) : null,
      h("div", { class: "row", style: "margin:8px 0" }, h("button", { class: "btn", onclick: () => void say(text, 0.85) }, "🔊 Listen"), h("button", { class: "btn", onclick: () => void say(text, 0.65) }, "🐢 Slow"), recBtn), live, out));
  });
}

const fmt = (s: number) => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");

function speakingTask(view: HTMLElement, lv: Level, id: string): void {
  const T = DATA.speaking[lv].find(x => x.id === id); if (!T) return;
  const timerEl = h("div", { class: "timer" }, "0:00"); const phase = h("div", { class: "small muted" }, "Ready");
  const placeholder = () => h("span", { class: "muted" }, "Your words will appear here while you speak…");
  const liveT = h("div", { class: "ctx", style: "min-height:60px" }, placeholder());
  const result = h("div");
  const startBtn = h("button", { class: "btn primary" }, "▶ Start (preparation)");
  const skipBtn = h("button", { class: "btn hidden" }, "⏭ Skip preparation");
  const stopBtn = h("button", { class: "btn hidden" }, "⏹ Finish speaking");
  let tick = 0, speakStart = 0, transcript = "", running = false;
  let mediaRec: MediaRecorder | null = null; let chunks: Blob[] = [];

  const startSpeaking = async () => {
    clearInterval(tick); skipBtn.classList.add("hidden"); stopBtn.classList.remove("hidden");
    phase.innerHTML = '<span class="rec-dot"></span> Speaking – recording now'; running = true; speakStart = Date.now(); transcript = "";
    let left = T.time; timerEl.textContent = fmt(left);
    tick = addTimer(window.setInterval(() => { left--; timerEl.textContent = fmt(Math.max(0, left)); if (left <= 0) finish(); }, 1000));
    if (SR) {
      // recognition stops after silences: restart it while the speaking time is running
      const run = () => recognize({ continuous: true, onInterim: t => { liveT.textContent = (transcript + " " + t).trim(); },
        onEnd: said => { transcript = (transcript + " " + said).trim(); if (running && document.body.contains(timerEl)) run(); else running = false; } });
      run();
    } else if (navigator.mediaDevices && "MediaRecorder" in window) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); chunks = [];
        mediaRec = new MediaRecorder(stream); mediaRec.ondataavailable = e => chunks.push(e.data); mediaRec.start();
      } catch (e) { liveT.textContent = "Microphone not available: " + (e as Error).message; }
    }
  };
  const finish = () => {
    if (!running) return; running = false; clearInterval(tick);
    stopBtn.classList.add("hidden"); startBtn.classList.remove("hidden"); startBtn.textContent = "↻ Try again";
    const secs = Math.max(1, Math.round((Date.now() - speakStart) / 1000)); phase.textContent = "Finished";
    if (SR) { stopRecognition(); setTimeout(() => showResult(transcript || (liveT.querySelector(".muted") ? "" : liveT.textContent || ""), secs), 700); }
    else if (mediaRec) {
      const rec = mediaRec;
      rec.onstop = () => { showSelfReview(URL.createObjectURL(new Blob(chunks, { type: "audio/webm" })), secs); rec.stream.getTracks().forEach(t => t.stop()); };
      rec.stop();
    } else showSelfReview(null, secs);
  };
  const showResult = (rawText: string, secs: number) => {
    const text = rawText.trim(); const words = countWords(text); const wpm = Math.round(words / (secs / 60));
    const lowered = norm(text);
    const used = T.phrases.filter(p => { const core = norm(p.split("...")[0]); return core && lowered.includes(core); });
    const unused = T.phrases.filter(p => !used.includes(p));
    const sugg = DATA.better[lv].filter(([b]) => new RegExp("\\b" + escapeRx(b) + "\\b", "i").test(text));
    const linkers = linkersUpTo(lv).filter(k => new RegExp("\\b" + escapeRx(k) + "\\b", "i").test(text));
    const score = Math.round(Math.min(1, words / T.target) * 55 + (Math.min(used.length, 4) / 4) * 25 + (wpm >= 90 ? 20 : wpm >= 70 ? 15 : wpm >= 50 ? 10 : 5));
    recordScore("speaking", score, T.id); S.speakings.push({ id: T.id, text, secs, wpm, date: Date.now() }); save();
    const tips: string[] = [];
    if (words < T.target * 0.6) tips.push("Try to say more. Add reasons and examples (because…, for example…).");
    if (wpm < 70) tips.push("Your speed is quite slow. Practise the useful phrases so they come out automatically.");
    if (wpm > 170) tips.push("You are speaking very fast. Slow down a little and pronounce final sounds clearly.");
    if (linkers.length < (lv === "A2" ? 2 : lv === "B1" ? 3 : 4)) tips.push("Use more linking words to connect your ideas.");
    const stat = (label: string, value: string | number) => h("div", {}, h("div", { class: "small muted" }, label), h("div", { class: "stat" }, value));
    result.innerHTML = "";
    put(result, h("div", { class: "card" }, h("h2", {}, "Your answer"),
      h("div", { class: "grid g4" }, stat("Score (estimate)", score + "%"), stat("Speaking time", secs + "s"), stat("Words", words), stat("Words per minute", wpm)),
      h("h3", {}, "Transcript"), h("div", { class: "ctx" }, text || "(nothing recognised – check your microphone)"),
      h("h3", {}, "Useful phrases for " + lv), h("div", {}, used.map(p => h("span", { class: "chip", style: "background:var(--ok-soft);color:var(--ok);margin:2px" }, "✓ " + p)), unused.map(p => h("span", { class: "chip", style: "margin:2px" }, p))),
      linkers.length ? h("p", { class: "small" }, "Linking words you used: ", h("b", {}, linkers.join(", "))) : null,
      sugg.length ? [h("h3", {}, "Try better words"), h("ul", {}, sugg.map(([b, alt]) => h("li", {}, `Instead of “${b}”, try: `, h("b", {}, alt))))] : null,
      tips.length ? h("div", { class: "notice warn" }, h("b", {}, "Tips: "), h("ul", {}, tips.map(t => h("li", {}, t)))) : h("div", { class: "notice ok" }, "Great fluency and length! 🎉"),
      viBox("Điểm chỉ là ước tính dựa trên độ dài, tốc độ và cụm từ hữu ích. Hãy nghe lại câu mẫu và luyện nói các cụm từ chưa dùng.")));
  };
  const showSelfReview = (url: string | null, secs: number) => {
    const checks = ["I answered all the questions", "I spoke for most of the time", "I used some of the useful phrases", "I used linking words", "My pronunciation was clear (final sounds!)"];
    const boxes = checks.map(c => h("label", { class: "opt" }, h("input", { type: "checkbox" }), c));
    result.innerHTML = "";
    put(result, h("div", { class: "card" }, h("h2", {}, "Self-review"), h("p", {}, "Speaking time: " + secs + "s"),
      url ? h("audio", { controls: true, src: url, style: "width:100%" }) : h("p", { class: "muted" }, "Recording was not possible – try to answer aloud anyway."),
      h("p", { class: "small" }, "Listen to your recording and tick what you did well:"), boxes,
      h("button", { class: "btn primary", onclick: () => {
        const n = boxes.filter(b => b.querySelector("input")!.checked).length; const s = Math.round((n / checks.length) * 100);
        recordScore("speaking", s, T.id); toast("Saved: " + s + "%");
      } }, "Save self-assessment")));
  };
  startBtn.onclick = () => {
    stopSpeech(); result.innerHTML = ""; startBtn.classList.add("hidden"); skipBtn.classList.remove("hidden");
    liveT.innerHTML = ""; liveT.append(placeholder());
    let left = T.prep; phase.textContent = "Preparation time – think about what you will say"; timerEl.textContent = fmt(left);
    clearInterval(tick); tick = addTimer(window.setInterval(() => { left--; timerEl.textContent = fmt(Math.max(0, left)); if (left <= 0) void startSpeaking(); }, 1000));
  };
  skipBtn.onclick = () => void startSpeaking(); stopBtn.onclick = finish;

  put(view, backLink("speaking/" + lv, "Speaking " + lv), taskCard(T, lv), !SR ? srNotice() : null,
    h("div", { class: "card center" }, phase, timerEl, h("div", { class: "row", style: "justify-content:center" }, startBtn, skipBtn, stopBtn), h("div", { style: "margin-top:12px;text-align:left" }, liveT)),
    result);
}
function taskCard(T: SpeakingTask, lv: Level): HTMLElement {
  return h("div", { class: "card" }, h("div", { class: "row" }, levelChip(lv), h("span", { class: "chip" }, `Prepare ${T.prep}s · Speak ${T.time}s`)),
    h("h1", {}, T.title), h("p", { style: "font-size:1.1rem" }, T.prompt),
    h("button", { class: "btn sm", onclick: () => void say(T.prompt + " " + T.qs.join(" ")) }, "🔊 Hear the task"),
    T.pic ? h("div", { style: "margin:12px 0" }, h("div", { class: "picture" }, T.pic), h("p", { class: "small muted" }, T.caption)) : null,
    h("ul", {}, T.qs.map(q => h("li", {}, q))), viBox(T.vi), guideBox([DATA.guideMap.speaking[T.id], "gd-speak-fluency"]),
    h("details", {}, h("summary", { style: "cursor:pointer;font-weight:600" }, "💡 Useful phrases"), h("ul", {}, T.phrases.map(p => h("li", {}, p)))));
}
