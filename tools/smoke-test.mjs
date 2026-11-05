// @ts-nocheck
// Headless smoke test of the built site (dist/index.html) using the Chrome DevTools Protocol.
// Usage: node tools/smoke-test.mjs [path-to-chrome]
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const chrome = process.argv[2] || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const page = pathToFileURL(path.resolve("dist/index.html")).href;
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "ep-test-"));
const port = 9334;
const proc = spawn(chrome, ["--headless=new", `--remote-debugging-port=${port}`, "--user-data-dir=" + profile, "--no-first-run", "about:blank"], { stdio: "ignore" });
const sleep = ms => new Promise(r => setTimeout(r, ms));
let targets;
for (let i = 0; i < 40 && !targets; i++) { try { targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); } catch { await sleep(250); } }
const ws = new WebSocket(targets.find(t => t.type === "page").webSocketDebuggerUrl);
await new Promise(r => (ws.onopen = r));
let id = 0; const pending = {}; const errors = [];
ws.onmessage = ev => {
  const m = JSON.parse(ev.data);
  if (m.id && pending[m.id]) { pending[m.id](m); delete pending[m.id]; }
  if (m.method === "Runtime.exceptionThrown") errors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
  if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") errors.push("console.error: " + m.params.args.map(a => a.value || a.description).join(" "));
};
const send = (method, params = {}) => new Promise(r => { const i = ++id; pending[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
const evaluate = async expr => (await send("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise: true, userGesture: true })).result?.result?.value;
await send("Runtime.enable"); await send("Page.enable");
await send("Page.navigate", { url: page }); await sleep(1500);

const routes = ["home", "dashboard", "roadmap", "reading/A2", "reading/A2/r-a2-1", "reading/B2/r-b2-1", "reading/B2/r-b2-15", "listening/B1", "listening/B2/l-b2-1",
  "speaking/A2", "speaking/pron/p-th", "speaking/B1/s-b1-3", "writing/B2", "writing/B2/w-b2-7", "writing/saved", "guides", "guides/gd-read-tfng", "guides/gd-write-report",
  "grammar/B1", "grammar/B2/g-b2-8", "vocabulary/review", "vocabulary/mywords", "vocabulary/toeic", "vocabulary/toeic/1", "vocabulary/banks/B2", "vocabulary/phrasal", "vocabulary/mistakes",
  "tests", "tests/unit/A2-U3", "tests/stage/B1", "tests/mock/mock-a2-1", "tests/mock/mock-a2-3", "tests/mock/mock-b1-1", "tests/mock/mock-b1-3", "tests/mock/mock-b2-1", "tests/mock/mock-b2-4", "tests/mock/toeic-full-1", "tests/mock/ielts-full-1", "tests/mock/toeic-2hours-full-1", "placement", "mistakes"];
for (const r of routes) {
  const before = errors.length;
  await evaluate(`location.hash = "#/${r}"`); await sleep(200);
  const info = await evaluate(`(() => { const t = document.querySelector("#view").innerText; return { len: t.length, bad: (t.match(/\\b(null|undefined|NaN)\\b|\\[object/g) || []).length, guides: document.querySelectorAll("#view details.notice").length }; })()`);
  if (info.bad) errors.push(r + ": found null/undefined/NaN/[object text");
  console.log((errors.length > before ? "ERR " : "ok  ") + r.padEnd(24) + " text=" + info.len + (info.guides ? " guides=" + info.guides : ""));
}
const wait = "await new Promise(r => setTimeout(r, 200));";
const result = await evaluate(`(async () => {
  const E = window.EnglishPath, out = {};
  try {
    location.hash = "#/reading/B1/r-b1-1"; ${wait}
    document.querySelectorAll(".q").forEach(q => { const r = q.querySelectorAll("input[type=radio]"); if (r.length) r[r.length - 1].checked = true; const g = q.querySelector(".gapin"); if (g) g.value = "abroads"; });
    document.querySelector(".quiz .btn.primary").click();
    out.reading = document.querySelector(".score-box").innerText.split("\\n")[0];
    out.explanations = [...document.querySelectorAll(".explain")].filter(d => d.open).length + " open";
    out.evidence = document.querySelectorAll(".explain mark").length + " highlighted words";
    document.querySelector(".w").click(); out.popup = !document.querySelector("#popup").classList.contains("hidden");
    location.hash = "#/writing/B1/w-b1-1"; ${wait}
    const ta = document.querySelector("textarea"); ta.value = E.data.writing.B1.find(w => w.id === "w-b1-1").model; ta.dispatchEvent(new Event("input"));
    [...document.querySelectorAll(".btn.primary")].find(b => b.textContent.includes("Submit")).click();
    out.writingScore = E.state().writings[0]?.score;
    location.hash = "#/vocabulary/banks/A2"; ${wait}
    document.querySelector(".btn.sm.primary").click(); ${wait}
    out.vocab = Object.keys(E.state().vocab).length;
    location.hash = "#/vocabulary/review"; ${wait}
    document.querySelector(".flash").click(); document.querySelector(".btn.ok").click();
    out.cardGraded = Object.values(E.state().vocab).some(c => c.box === 2);
    location.hash = "#/placement"; ${wait}
    const qs = [...document.querySelectorAll(".q")];
    qs.forEach((q, i) => { q.querySelectorAll("input[type=radio]")[E.data.placement[i].a].checked = true; });
    [...document.querySelectorAll(".btn.primary")].find(b => b.textContent.includes("Finish")).click();
    out.placement = E.state().placement.result + " " + E.state().placement.score + "% level=" + E.state().level;
    location.hash = "#/guides/gd-read-tfng"; ${wait}
    const P = E.data.guides.find(g => g.id === "gd-read-tfng").practice;
    document.querySelectorAll(".quiz .q").forEach((q, i) => { q.querySelectorAll("input[type=radio]")[["T", "F", "NG"].indexOf(P[i].a)].checked = true; });
    document.querySelector(".quiz .btn.primary").click();
    out.guide = document.querySelector(".score-box").innerText.split("\\n")[0];
    location.hash = "#/tests/stage/A2"; ${wait}
    [...document.querySelectorAll(".btn.primary")].find(b => b.textContent.includes("Submit stage")).click(); ${wait}
    out.stage = JSON.stringify(E.state().stageTests.A2 && E.state().stageTests.A2.attempts);
    location.hash = "#/dashboard"; ${wait}
    out.plan = E.state().plan.items.length + " plan items";
    location.hash = "#/tests"; ${wait}
    out.badges = Object.keys(E.state().badges).join(",");
    location.hash = "#/mistakes"; ${wait}
    const redoBtn = [...document.querySelectorAll("button")].find(b => b.textContent.includes("Làm lại câu"));
    if (redoBtn) {
      redoBtn.click(); ${wait}
      out.mistakeSingleHash = location.hash;
      const backBtn = [...document.querySelectorAll("button")].find(b => b.textContent.includes("Quay lại danh sách"));
      if (backBtn) {
        backBtn.click(); ${wait}
        out.mistakeBackHash = location.hash;
      }
    }
    out.saved = !!localStorage.getItem("englishpath_v1");
  } catch (err) {
    out.err = err.stack || String(err);
  }
  return out;
})()`);
console.log(JSON.stringify(result, null, 1));
console.log("Total errors:", errors.length, errors.slice(0, 10));
ws.close(); proc.kill();
process.exit(errors.length ? 1 : 0);
