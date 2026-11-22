// Contact form. Posts to a Google Apps Script web app that emails the message to the press inbox
// (setup in Docs/WEBSITE.md). Until ENDPOINT is set, it opens the visitor's mail app instead.
(function () {
  var ENDPOINT = "";
  var INBOX = "contact@nightstargambit.com";

  var form = document.getElementById("contact-form");
  if (!form) return;
  var status = form.querySelector(".status");
  var button = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    if (data.get("website")) return; // honeypot: bots fill every field
    var name = (data.get("name") || "").trim();
    var email = (data.get("email") || "").trim();
    var message = (data.get("message") || "").trim();
    if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      status.textContent = "Fill in your name, a valid email and a message.";
      status.className = "status ember";
      return;
    }
    if (!ENDPOINT) {
      var subject = "[" + data.get("topic") + "] from " + name;
      location.href = "mailto:" + INBOX + "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(message + "\n\n" + name + " <" + email + ">");
      return;
    }
    button.disabled = true;
    status.textContent = "Transmitting...";
    status.className = "status";
    fetch(ENDPOINT, { method: "POST", mode: "no-cors", body: new URLSearchParams(data) })
      .then(function () {
        form.reset();
        status.textContent = "Transmission received. We'll hail you back.";
        status.className = "status";
        status.style.color = "var(--cyan)";
      })
      .catch(function () {
        status.textContent = "That didn't go through. Email " + INBOX + " instead.";
        status.className = "status ember";
      })
      .then(function () { button.disabled = false; });
  });
})();
