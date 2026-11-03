/* Speech synthesis (listening) and speech recognition (speaking) – Web Speech API */
import { S, save } from "./state";
import { $$, h, put, viBox } from "./dom";

/* ---------- Speech synthesis ---------- */
const hasTTS = typeof window !== "undefined" && "speechSynthesis" in window;
export const TTS = {
  voices: [] as SpeechSynthesisVoice[],
  bad: new Set<string>(),
  lastError: "",
  init(): void {
    if (!hasTTS) return;
    const load = () => { this.voices = speechSynthesis.getVoices().filter(v => /^en[-_]/i.test(v.lang)); refreshVoicePanels(); };
    load(); speechSynthesis.onvoiceschanged = load;
    setTimeout(load, 600); setTimeout(load, 2500); // some browsers fill the list late
  },
  usable(): SpeechSynthesisVoice[] { return this.voices.filter(v => !this.bad.has(v.name)); },
  /** Offline voices first: online voices need Google/Microsoft servers and fail silently on some networks */
  rank(v: SpeechSynthesisVoice): number { return (v.localService ? 4 : 0) + (/natural|neural/i.test(v.name) ? 1 : 0); },
  list(accent: "US" | "UK"): SpeechSynthesisVoice[] {
    const rx = accent === "UK" ? /en[-_]GB/i : /en[-_]US/i;
    return this.usable().filter(v => rx.test(v.lang)).sort((a, b) => this.rank(b) - this.rank(a));
  },
  hasAccent(accent: "US" | "UK"): boolean { return this.list(accent).length > 0; },
  ordered(): SpeechSynthesisVoice[] {
    const acc = this.list(S.settings.accent);
    const rest = this.usable().filter(v => !acc.includes(v)).sort((a, b) => this.rank(b) - this.rank(a));
    let l = [...acc, ...rest];
    const chosen = l.find(v => v.name === S.settings.voiceName);
    if (chosen) l = [chosen, ...l.filter(v => v !== chosen)];
    return l;
  },
  pick(idx: number): SpeechSynthesisVoice | null { const l = this.ordered(); return l.length ? l[idx % l.length] : null; }
};

let playId = 0;
const VOICE_ERRORS = ["network", "synthesis-failed", "synthesis-unavailable", "voice-unavailable", "language-unavailable"];
/** Speak one text (split into sentences). Falls back to another voice if one fails. */
export function speakOne(text: string, vIdx = 0, pitch = 1, rate?: number): Promise<void> {
  const myId = playId;
  return new Promise(res => {
    if (!hasTTS) return res();
    const parts = String(text).match(/[^.!?]+[.!?]*["\u201d\u2019]?\s*/g) || [String(text)];
    let i = 0, tries = 0;
    const next = (): void => {
      if (myId !== playId || i >= parts.length) return res();
      const u = new SpeechSynthesisUtterance(parts[i].trim());
      const v = TTS.pick(vIdx);
      if (v) { u.voice = v; u.lang = v.lang; } else u.lang = S.settings.accent === "UK" ? "en-GB" : "en-US";
      u.rate = rate || S.settings.rate; u.pitch = pitch;
      let started = false, retrying = false;
      const retryWithOtherVoice = (reason: string) => {
        TTS.lastError = reason + (v ? " – " + v.name : "");
        if (v) TTS.bad.add(v.name);
        tries++; retrying = true;
        try { speechSynthesis.cancel(); } catch { /* ignore */ }
        setTimeout(next, 80); refreshVoicePanels();
      };
      // watchdog: an online voice that cannot reach its server may never start
      const wd = setTimeout(() => { if (!started && myId === playId && tries < 3) retryWithOtherVoice("Voice did not start"); }, v && !v.localService ? 3500 : 6000);
      u.onstart = () => { started = true; clearTimeout(wd); TTS.lastError = ""; };
      u.onend = () => { clearTimeout(wd); if (retrying) return; i++; tries = 0; next(); };
      u.onerror = e => {
        clearTimeout(wd);
        if (retrying) return;
        if (myId !== playId || e.error === "interrupted" || e.error === "canceled") return res();
        if (e.error === "not-allowed") { TTS.lastError = "The browser blocked audio – click ▶ Play or 🔈 Test audio"; refreshVoicePanels(); return res(); }
        if (!started && VOICE_ERRORS.includes(e.error) && tries < 3) return retryWithOtherVoice("Error: " + e.error);
        TTS.lastError = "Error: " + e.error; i++; tries = 0; next();
      };
      try { speechSynthesis.resume(); } catch { /* ignore */ }
      speechSynthesis.speak(u);
    };
    setTimeout(next, 60); // Chrome may drop speak() called right after cancel()
  });
}
export function stopSpeech(): void { playId++; try { if (hasTTS) speechSynthesis.cancel(); } catch { /* ignore */ } }
export function say(text: string, rate?: number): Promise<void> { stopSpeech(); return speakOne(text, 0, 1, rate); }
export const isSpeaking = (): boolean => hasTTS && speechSynthesis.speaking;

/** Read a dialogue: each speaker gets a different voice (or pitch if only one voice exists) */
export async function speakLines(lines: [string, string][], speakers: Record<string, string>, onLine?: (i: number) => void): Promise<void> {
  stopSpeech(); const myId = playId;
  const keys = Object.keys(speakers);
  const nVoices = TTS.list(S.settings.accent).length || TTS.voices.length || 1;
  for (let i = 0; i < lines.length; i++) {
    if (myId !== playId) return;
    const idx = Math.max(0, keys.indexOf(lines[i][0]));
    const pitch = nVoices > idx ? 1 : [1, 0.75, 1.3][idx % 3];
    onLine?.(i);
    await speakOne(lines[i][1], idx, pitch);
  }
  if (myId === playId) onLine?.(-1);
}

/* ---------- Voice status panel ---------- */
type PanelEl = HTMLDivElement & { _refresh?: () => void };
function refreshVoicePanels(): void { $$<PanelEl>(".voice-status").forEach(el => el._refresh?.()); }
export function voicePanel(): HTMLElement {
  const status = h("div", { class: "small voice-status" }) as PanelEl;
  const sel = h("select", { class: "small", title: "Choose a voice" });
  sel.onchange = () => { S.settings.voiceName = sel.value; save(); TTS.bad.delete(sel.value); void say("Hello! This is a test of the selected voice.", 1); };
  status._refresh = () => {
    status.innerHTML = ""; sel.innerHTML = "";
    if (!hasTTS) { put(status, h("span", { style: "color:var(--bad)" }, "❌ This browser has no speech synthesis. Use Chrome or Edge.")); return; }
    const vs = TTS.voices;
    put(sel, h("option", { value: "" }, "Auto voice"), vs.map(v => h("option", { value: v.name }, `${v.name} (${v.lang})${v.localService ? "" : " · online"}${TTS.bad.has(v.name) ? " ⚠" : ""}`)));
    sel.value = S.settings.voiceName || "";
    if (!vs.length) put(status, h("span", { style: "color:var(--bad)" }, "❌ No English voice found on this device. "), "See “Audio not working?” below.");
    else put(status, h("span", { style: "color:var(--ok)" }, `✓ ${vs.length} English voice(s) found (${vs.filter(v => v.localService).length} offline)`),
      TTS.lastError ? h("span", { style: "color:var(--warn)" }, " · last problem: " + TTS.lastError) : null);
  };
  status._refresh();
  return h("div", {}, h("div", { class: "row" }, status, sel, h("button", { class: "btn sm", onclick: () => void say("Hello! If you can hear this, audio is working.", 1) }, "🔈 Test audio")), audioHelp());
}
function audioHelp(): HTMLElement {
  return h("details", { class: "small", style: "margin-top:6px" }, h("summary", { style: "cursor:pointer;font-weight:600" }, "Audio not working?"),
    h("ol", {},
      h("li", {}, "Check that the computer volume is on and the browser tab is not muted."),
      h("li", {}, "Use Google Chrome or Microsoft Edge (latest version)."),
      h("li", {}, "Click “🔈 Test audio”. If a voice marked “online” fails, choose a voice without “online” – online voices need internet access to Google or Microsoft, which some networks block."),
      h("li", {}, "If no English voice is found: on Windows open Settings → Time & language → Language & region → Add a language → English (United States) and tick Text-to-speech, then restart the browser. On macOS: System Settings → Accessibility → Spoken Content → System voice → Manage voices."),
      h("li", {}, "On phones, turn off silent mode and raise the media volume.")),
    viBox("Âm thanh do trình duyệt trên chính máy của bạn đọc (không tải từ server). Nếu không nghe được: bật loa, dùng Chrome/Edge, bấm “Test audio”, chọn giọng không có chữ “online”, hoặc cài giọng tiếng Anh trong Settings → Time & language → Language & region → thêm English (United States) có Text-to-speech."));
}

/* ---------- Speech recognition ---------- */
interface SRResult { isFinal: boolean; 0: { transcript: string } }
interface SREvent { resultIndex: number; results: ArrayLike<SRResult> }
interface SRInstance {
  lang: string; continuous: boolean; interimResults: boolean; maxAlternatives: number;
  onresult: ((e: SREvent) => void) | null; onerror: ((e: { error: string }) => void) | null; onend: (() => void) | null;
  start(): void; stop(): void;
}
type SRCtor = new () => SRInstance;
const w = (typeof window !== "undefined" ? window : {}) as unknown as { SpeechRecognition?: SRCtor; webkitSpeechRecognition?: SRCtor };
export const SR: SRCtor | undefined = w.SpeechRecognition || w.webkitSpeechRecognition;
let activeRec: SRInstance | null = null;
export const isRecognising = (): boolean => activeRec !== null;

export interface RecognizeOptions { continuous?: boolean; onInterim?: (text: string) => void; onEnd?: (text: string, err?: string) => void }
export function recognize({ continuous = false, onInterim, onEnd }: RecognizeOptions): void {
  if (!SR) { onEnd?.("", "not-supported"); return; }
  const r = new SR(); let err: string | undefined; let finalText = "";
  r.lang = S.settings.accent === "UK" ? "en-GB" : "en-US";
  r.continuous = continuous; r.interimResults = true; r.maxAlternatives = 1;
  r.onresult = e => {
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) finalText += t + " "; else interim += t;
    }
    onInterim?.((finalText + interim).trim());
  };
  r.onerror = e => { err = e.error; };
  r.onend = () => { if (activeRec === r) activeRec = null; onEnd?.(finalText.trim(), err); };
  try { r.start(); activeRec = r; } catch { onEnd?.("", "start-failed"); }
}
export function stopRecognition(): void { if (activeRec) { const r = activeRec; activeRec = null; try { r.stop(); } catch { /* ignore */ } } }
export function srNotice(): HTMLElement {
  return h("div", { class: "notice warn" }, h("b", {}, "Speech recognition is not available in this browser. "),
    "For automatic transcripts and feedback, please open this page in Google Chrome or Microsoft Edge on a computer (on localhost or HTTPS). You can still record yourself and review your answer.",
    viBox("Trình duyệt này không hỗ trợ nhận dạng giọng nói. Hãy dùng Chrome hoặc Edge (qua localhost hoặc HTTPS). Bạn vẫn có thể ghi âm và tự đánh giá."));
}
