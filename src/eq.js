/*!
 * eq-visualizer - the 8-bar sensory equalizer
 * Zero dependencies. This file is an OPTIONAL ~1 KB injector: it scans for
 * [data-eq] elements and renders the bars. Prefer writing the eight spans
 * by hand? Skip this file entirely - eq.css does all the work.
 * https://github.com/bryanhamiltondev/eq-visualizer
 * MIT licensed.
 */
(function () {
  "use strict";

  var BARS = 8;

  function applyKnobs(el) {
    var color  = el.getAttribute("data-eq-color");
    var height = el.getAttribute("data-eq-height");
    var width  = el.getAttribute("data-eq-width");
    var speed  = el.getAttribute("data-eq-speed");
    if (color)  { el.style.setProperty("--eq-color", color); }
    if (height) { el.style.setProperty("--eq-height", height + "px"); }
    if (width)  { el.style.setProperty("--eq-width", width + "px"); }
    if (speed)  { el.style.setProperty("--eq-speed", speed + "s"); }
  }

  function render(el) {
    if (el.getAttribute("data-eq-ready")) { return; }
    el.setAttribute("data-eq-ready", "1");
    el.classList.add("eq");
    applyKnobs(el);
    for (var i = 0; i < BARS; i++) {
      var bar = document.createElement("span");
      bar.className = "eq__bar";
      bar.setAttribute("aria-hidden", "true");
      el.appendChild(bar);
    }
  }

  function init(root) {
    var scope = root || document;
    var nodes = scope.querySelectorAll("[data-eq]");
    for (var i = 0; i < nodes.length; i++) { render(nodes[i]); }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { init(); });
  } else {
    init();
  }

  /* Manual mode: window.eqVisualizer.init(container) after dynamic inserts. */
  window.eqVisualizer = { init: init, bars: BARS };
})();
