// Gameplay loops. Each <video class="loop" data-src> loads when it scrolls near the screen and
// plays while it is in view. Browsers only allow autoplay muted, so every loop gets a sound button.
// Once a visitor turns sound on, it stays on for the page: the loop most in view plays with sound
// and the others stay muted, so two clips never talk over each other.
// With reduced motion the loops show their poster and player controls instead of autoplaying.
(function () {
  var videos = Array.prototype.slice.call(document.querySelectorAll("video.loop"));
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var soundOn = false;
  var ratio = new Map();

  function load(v) {
    if (!v.src && v.dataset.src) { v.src = v.dataset.src; v.preload = "auto"; }
  }

  var chosen = null; // the loop whose button was last clicked keeps the sound while it is in view

  function loudest() {
    if (chosen && (ratio.get(chosen) || 0) > 0.2) return chosen;
    chosen = null;
    var best = null, top = 0;
    videos.forEach(function (v) {
      var r = ratio.get(v) || 0;
      if (r > top) { top = r; best = v; }
    });
    return top > 0.5 ? best : null;
  }

  function refreshSound() {
    var lead = soundOn ? loudest() : null;
    videos.forEach(function (v) {
      v.muted = v !== lead;
      var b = v._snd;
      if (b) {
        var live = soundOn && v === lead;
        b.classList.toggle("on", live);
        b.setAttribute("aria-pressed", soundOn ? "true" : "false");
        b.setAttribute("aria-label", soundOn ? "Turn sound off" : "Turn sound on");
        b.querySelector("span").textContent = live ? "Sound on" : soundOn ? "Muted" : "Sound";
      }
    });
  }

  function addButton(v) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "snd";
    b.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/>' +
      '<path class="wave" d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/>' +
      '<path class="x" d="M16 9l6 6M22 9l-6 6"/></svg><span>Sound</span>';
    b.addEventListener("click", function () {
      // Clicking the button on a loop that is not the one with sound gives it the sound;
      // clicking the one that has it turns sound off for the page.
      if (soundOn && !v.muted) { soundOn = false; chosen = null; }
      else { soundOn = true; chosen = v; load(v); v.play().catch(function () {}); }
      refreshSound();
    });
    v.parentNode.appendChild(b);
    v._snd = b;
  }

  if (still || !("IntersectionObserver" in window)) {
    videos.forEach(function (v) { v.controls = true; v.muted = false; load(v); });
    return;
  }

  videos.forEach(addButton);

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      ratio.set(v, e.isIntersecting ? e.intersectionRatio : 0);
      if (e.isIntersecting && e.intersectionRatio >= 0.35) {
        load(v);
        v.play().catch(function () { v.muted = true; v.play().catch(function () {}); });
      } else if (!e.isIntersecting || e.intersectionRatio < 0.2) {
        if (!v.paused) v.pause();
      }
    });
    refreshSound();
  }, { threshold: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1] });

  videos.forEach(function (v) { io.observe(v); });
})();
