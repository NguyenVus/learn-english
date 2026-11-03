/* EnglishPath – entry point. Wires the header controls, registers all pages and starts the router. */
import "./styles.css";
import type { Level } from "./types";
import { DATA, LEVELS } from "./data";
import { $ } from "./core/dom";
import { S, save } from "./core/state";
import { TTS, isRecognising, isSpeaking } from "./core/speech";
import { buildDict, hidePopup } from "./core/dictionary";
import { startTimeTracking } from "./core/progress";
import { applyTheme, applyVi, closeSidebar, currentPage, go, onBeforeRoute, route, viewLevel } from "./core/router";

// Pages register themselves when imported
import "./pages/dashboard";
import "./pages/roadmap";
import "./pages/reading";
import "./pages/speaking";
import "./pages/writing";
import "./pages/vocabulary";
import "./pages/guides";
import "./pages/tests";

function init(): void {
  buildDict(); TTS.init(); applyTheme();
  startTimeTracking(() => isSpeaking() || isRecognising());
  onBeforeRoute(hidePopup);

  const levelSelect = $<HTMLSelectElement>("#levelSelect")!;
  levelSelect.value = S.level;
  levelSelect.onchange = () => {
    const lv = levelSelect.value as Level; if (!LEVELS.includes(lv)) return;
    S.level = lv; S.plan = null; save();
    const p = currentPage();
    if (["reading", "listening", "speaking", "writing", "grammar"].includes(p)) go(p + "/" + lv); else route();
  };
  const viToggle = $<HTMLInputElement>("#viToggle")!;
  viToggle.onchange = () => { S.settings.vi[viewLevel] = viToggle.checked; save(); applyVi(); };
  $("#themeBtn")!.onclick = () => { S.settings.theme = S.settings.theme === "dark" ? "light" : "dark"; save(); applyTheme(); if (currentPage() === "tests") route(); };
  $("#menuBtn")!.onclick = () => { $("#sidebar")?.classList.add("open"); $("#overlay")?.classList.add("show"); };
  $("#overlay")!.onclick = closeSidebar;
  document.addEventListener("click", e => { const t = e.target as Element; if (!t.closest("#popup") && !t.classList.contains("w")) hidePopup(); });
  addEventListener("hashchange", route);
  // read-only hook for debugging in the browser console (and automated tests)
  Object.defineProperty(window, "EnglishPath", { value: Object.freeze({ data: DATA, state: () => S }) });
  route();
}
init();
