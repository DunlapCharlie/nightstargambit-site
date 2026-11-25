// Crew cards: a play button that runs through a character's best lines, and a details panel
// (season teaser, best stations, voice actor, every line). The lines are the game's own VO.
// One voice plays at a time, and a voice takes the sound from any gameplay video:
// loops.js listens for "nightstar:voice" and fires "nightstar:sound" when a video gets sound.
// Built by Tools/presskit/make_crew_js.py; edit the data there.
(function () {
  var CREW = {
 "akane_tsurugi": {
  "name": "Akane Tsurugi",
  "voice": "Actually Maria",
  "stations": [
   "Gunnery",
   "Pilot"
  ],
  "season": 6,
  "teaser": "A rival from the academy is still out there somewhere. Akane is pretending she doesn't think about that, loudly.",
  "lines": [
   {
    "src": "assets/voice/akane_tsurugi_1.mp3",
    "text": "Because it has the biggest gun in the fleet, obviously! And they parked it at the back where it never fires! Are you an idiot, Captain?!"
   },
   {
    "src": "assets/voice/akane_tsurugi_2.mp3",
    "text": "It's not for you. The label says so. I wrote the label so there would be no confusion."
   },
   {
    "src": "assets/voice/akane_tsurugi_3.mp3",
    "text": "Get off the channel! This is a duel, not a sports broadcast!"
   }
  ]
 },
 "kaede_shiratori": {
  "name": "Kaede Shiratori",
  "voice": "Maganda Marie",
  "stations": [
   "Gunnery",
   "Damage Control",
   "Pilot"
  ],
  "season": 8,
  "teaser": "She defected mid-duel to fly under your colors. Her old academy squad would like her back, and they are extremely bad at asking.",
  "lines": [
   {
    "src": "assets/voice/kaede_shiratori_1.mp3",
    "text": "Ordinals ARE rankings! Unacceptable, unacceptable, unacceptable!"
   },
   {
    "src": "assets/voice/kaede_shiratori_2.mp3",
    "text": "It's lumbar support! For gunnery posture! It's medical!"
   },
   {
    "src": "assets/voice/kaede_shiratori_3.mp3",
    "text": "There is no melon in melon bread! It's named for the SHAPE! Unacceptable, unacceptable, unacceptable!"
   }
  ]
 },
 "kenzaki_yaiba": {
  "name": "Kenzaki Yaiba",
  "voice": "Kifinosi",
  "stations": [
   "Gunnery",
   "Pilot"
  ],
  "season": 8,
  "teaser": "Two swords, one black coat, a status window only he can see, and an origin story that changes every time he tells it. He calls it a layered backstory.",
  "lines": [
   {
    "src": "assets/voice/kenzaki_yaiba_1.mp3",
    "text": "Operationally, Captain, things that would kill anyone else miss me. Also, people keep falling in love with me for no reason."
   },
   {
    "src": "assets/voice/kenzaki_yaiba_2.mp3",
    "text": "I was crossing a freight lane when a cargo hauler hit me at full burn. Then there was a bright light, and a goddess, and she gave me a cheat skill."
   },
   {
    "src": "assets/voice/kenzaki_yaiba_3.mp3",
    "text": "The XO is level twelve, class Bureaucrat, affection zero."
   }
  ]
 },
 "rei_mukuchi": {
  "name": "Rei Mukuchi",
  "voice": "Beau Fitzgerald",
  "stations": [
   "Engineering",
   "Drones"
  ],
  "season": 8,
  "teaser": "Eleven ships, eleven secret upgrades. The Nightstar wants one for its main beam, and every part she needs is somewhere you would rather not be seen.",
  "lines": [
   {
    "src": "assets/voice/rei_mukuchi_1.mp3",
    "text": "The ship says it all the time, Captain. You just don't listen. Captain, you are a louse."
   },
   {
    "src": "assets/voice/rei_mukuchi_2.mp3",
    "text": "It does exactly what the ship wants, Captain. The last captain cried."
   },
   {
    "src": "assets/voice/rei_mukuchi_3.mp3",
    "text": "Blueprint copied, and you won the Audience Prize, Captain. It pays in scrap. You are a degenerate with a prize."
   }
  ]
 },
 "reo_oudou": {
  "name": "Reo Oudou",
  "voice": "River Cheshire",
  "stations": [
   "Helm",
   "Damage Control"
  ],
  "season": 8,
  "teaser": "Arrives late, holding a rose, with a speech. Says his work here is done. Somebody always points out he did nothing.",
  "lines": [
   {
    "src": "assets/voice/reo_oudou_1.mp3",
    "text": "Oh, Captain. I am Reo Oudou. Your helmsman, your prince, and, if destiny allows, your finest hour."
   },
   {
    "src": "assets/voice/reo_oudou_2.mp3",
    "text": "Fear not! When darkness falls, a prince will always... oh. It's out. Yay."
   },
   {
    "src": "assets/voice/reo_oudou_3.mp3",
    "text": "The note card? Captain, that's a list of my many virtues. Alphabetized."
   }
  ]
 },
 "tsubaki_kurobara": {
  "name": "Tsubaki Kurobara",
  "voice": "bayleaf.",
  "stations": [
   "Gunnery",
   "Engineering",
   "Pilot"
  ],
  "season": 8,
  "teaser": "There's a scoreboard on the bridge. It says TSUBAKI 14, CAPTAIN 0. She always wins, and she has a secret about why.",
  "lines": [
   {
    "src": "assets/voice/tsubaki_kurobara_1.mp3",
    "text": "Hi, Captain. You read my file before you looked at my face. One point to me."
   },
   {
    "src": "assets/voice/tsubaki_kurobara_2.mp3",
    "text": "Captain, do you want to know why you keep losing? It's because you're cute when you lose."
   },
   {
    "src": "assets/voice/tsubaki_kurobara_3.mp3",
    "text": "Don't worry, Captain. Nobody speaks Old Lunar anymore. It was about the weather."
   }
  ]
 },
 "yoru_tsukikage": {
  "name": "Yoru Tsukikage",
  "voice": "Clive Jackson",
  "stations": [
   "Helm",
   "Pilot"
  ],
  "season": 8,
  "teaser": "White hair, a sealed eye, a bandaged arm, and a secret Shadow Fleet he made up. The crew keeps a bingo card on him. Every square is real, for a stupid reason.",
  "lines": [
   {
    "src": "assets/voice/yoru_tsukikage_1.mp3",
    "text": "Yoru Tsukikage, helm. The rest is classified. I classified it. I work alone."
   },
   {
    "src": "assets/voice/yoru_tsukikage_2.mp3",
    "text": "The white hair was a coolant leak. You're welcome."
   },
   {
    "src": "assets/voice/yoru_tsukikage_3.mp3",
    "text": "The moon knows what it did."
   }
  ]
 },
 "yuki_shirogane": {
  "name": "Yuki Shirogane",
  "voice": "Ruby J Shilan",
  "stations": [
   "Engineering",
   "Drones"
  ],
  "season": 8,
  "teaser": "Forty feral drones follow her everywhere, and nobody notices her at all. The fleet's most famous voice belongs to a VTuber called Snowdrop. Nobody knows who Snowdrop is.",
  "lines": [
   {
    "src": "assets/voice/yuki_shirogane_1.mp3",
    "text": "Forty, Captain. I named all of them. Please don't ask me their names in front of people."
   },
   {
    "src": "assets/voice/yuki_shirogane_2.mp3",
    "text": "Captain. I'm right here. I've been here since six."
   },
   {
    "src": "assets/voice/yuki_shirogane_3.mp3",
    "text": "Oh no. Hi, snowflakes! Please don't mind the missiles! Captain, I'm so sorry, the chat is going crazy."
   }
  ]
 },
 "kenji_arashi": {
  "name": "Kenji Arashi",
  "voice": "",
  "stations": [
   "Gunnery",
   "Damage Control",
   "Pilot"
  ],
  "season": 8,
  "teaser": "Believes any problem can be solved by shouting a finishing move loudly enough. His mecha agrees. So, increasingly, does physics.",
  "lines": []
 },
 "aiko": {
  "name": "Aiko",
  "voice": "",
  "stations": [
   "Helm",
   "Drones",
   "Pilot"
  ],
  "season": 8,
  "teaser": "A space pirate from next Thursday who steals from other days of the week, calls the captain darling, and flew her flag up the hull without asking. Every bounty hunter in the sector has noticed.",
  "lines": []
 },
 "xo_nagisa": {
  "name": "XO Nagisa",
  "voice": "Gina Leigh Smith",
  "stations": [],
  "season": 0,
  "teaser": "Your executive officer. She reads every personnel file out loud, logs every incident in the same flat voice, and has stopped being surprised by this crew. Mostly.",
  "lines": [
   {
    "src": "assets/voice/xo_nagisa_1.mp3",
    "text": "Captain, he was still on the command channel. Three enemy ships have surrendered. They'd like to know to what."
   },
   {
    "src": "assets/voice/xo_nagisa_2.mp3",
    "text": "Transfer file, Captain. Shiratori, K., gunnery. Reason for reassignment: defected from a rival academy in the middle of a duel. Refuses to be listed as second gunner. Is listed as second gunner."
   },
   {
    "src": "assets/voice/xo_nagisa_3.mp3",
    "text": "Captain, the limiter is a puddle now. I'll order a bigger one."
   }
  ]
 }
};
  var audio = new Audio();
  audio.preload = "none";
  var playing = null; // { btn, cap }

  function stop() {
    audio.pause();
    if (playing) {
      playing.btn.classList.remove("on");
      playing.btn.setAttribute("aria-label", playing.btn.dataset.label);
      if (playing.cap) playing.cap.classList.remove("show");
      playing = null;
    }
  }

  function play(line, btn, cap) {
    stop();
    audio.src = line.src;
    document.dispatchEvent(new CustomEvent("nightstar:voice"));
    audio.play().catch(function () {});
    btn.classList.add("on");
    btn.setAttribute("aria-label", "Stop");
    if (cap) { cap.textContent = "“" + line.text + "”"; cap.classList.add("show"); }
    playing = { btn: btn, cap: cap };
  }

  function isPlaying(btn) { return playing && playing.btn === btn && !audio.paused; }

  audio.addEventListener("ended", stop);
  document.addEventListener("nightstar:sound", stop);

  var ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="p" d="M8 5v14l11-7z"/><path class="s" d="M7 6h4v12H7zM13 6h4v12h-4z"/></svg>';

  function playButton(label) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "say";
    b.dataset.label = label;
    b.setAttribute("aria-label", label);
    b.innerHTML = ICON;
    return b;
  }

  function esc(s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; }

  // ---- details panel
  var dlg = document.createElement("dialog");
  dlg.className = "crew-dlg";
  document.body.appendChild(dlg);
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", stop);

  function open(id) {
    var c = CREW[id];
    var card = document.querySelector('.crew [data-crew="' + id + '"]');
    var role = card ? card.querySelector(".role").textContent : "";
    var blurb = card ? card.querySelector("p").textContent : "";
    var h = '<div class="hud"><button type="button" class="x" aria-label="Close">×</button>' +
      '<div class="top"><img src="assets/crew/' + id + '.png" alt=""><div>' +
      '<span class="role">' + esc(role) + '</span><h3>' + esc(c.name) + '</h3><p>' + esc(blurb) + '</p></div></div>' +
      '<p class="teaser">' + esc(c.teaser) + '</p><dl>';
    if (c.stations.length) h += '<dt>Best stations</dt><dd>' + c.stations.join(", ") + '</dd>';
    if (c.season) h += '<dt>Their season</dt><dd>' + c.season + ' episodes</dd>';
    h += '<dt>Voiced by</dt><dd>' + esc(c.voice || "Casting now") + '</dd></dl>';
    h += c.lines.length ? '<ul class="said"></ul>' : '<p class="soon">Voice lines coming soon.</p>';
    dlg.innerHTML = h + '</div>';
    var ul = dlg.querySelector(".said");
    c.lines.forEach(function (line) {
      var li = document.createElement("li");
      var b = playButton("Play this line");
      var q = document.createElement("q");
      q.textContent = line.text;
      li.appendChild(b); li.appendChild(q);
      b.addEventListener("click", function () { if (isPlaying(b)) stop(); else play(line, b, null); });
      ul.appendChild(li);
    });
    dlg.querySelector(".x").addEventListener("click", function () { dlg.close(); });
    dlg.showModal();
  }

  // ---- cards
  document.querySelectorAll(".crew [data-crew]").forEach(function (card) {
    var id = card.dataset.crew, c = CREW[id];
    if (!c) return;
    var bar = document.createElement("div");
    bar.className = "acts";
    var cap = document.createElement("p");
    cap.className = "cap";
    cap.setAttribute("aria-live", "polite");
    if (c.lines.length) {
      var first = c.name.split(" ")[0];
      var next = 0;
      var b = playButton("Hear " + first);
      b.insertAdjacentHTML("beforeend", "<span>Hear " + esc(first) + "</span>");
      b.addEventListener("click", function () {
        if (isPlaying(b)) { stop(); return; }
        play(c.lines[next], b, cap);
        next = (next + 1) % c.lines.length;
      });
      bar.appendChild(b);
    } else {
      var s = document.createElement("span");
      s.className = "soon";
      s.textContent = "Voice coming soon";
      bar.appendChild(s);
    }
    var d = document.createElement("button");
    d.type = "button";
    d.className = "more";
    d.textContent = "Details";
    d.addEventListener("click", function () { open(id); });
    bar.appendChild(d);
    card.appendChild(bar); // full card width, under the portrait and the blurb
    card.appendChild(cap);
  });
})();
