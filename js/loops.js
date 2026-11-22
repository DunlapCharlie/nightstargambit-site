// Silent gameplay loops. Each <video class="loop" data-src> loads only when it scrolls near the
// screen, plays while visible and pauses when not. With reduced motion it shows the poster and
// player controls instead of autoplaying.
(function () {
  var videos = document.querySelectorAll("video.loop");
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function load(v) {
    if (!v.src && v.dataset.src) { v.src = v.dataset.src; v.preload = "auto"; }
  }

  if (still || !("IntersectionObserver" in window)) {
    videos.forEach(function (v) { v.controls = still; load(v); if (!still) v.play().catch(function () {}); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) { load(v); v.play().catch(function () {}); }
      else if (!v.paused) v.pause();
    });
  }, { rootMargin: "200px 0px", threshold: 0.15 });

  videos.forEach(function (v) { io.observe(v); });
})();
