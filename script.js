/* Mahima Weds Dheeraj - Phase 1 (royal update) */
document.documentElement.classList.add('js');

/* ----- 1. Envelope opening (tap anywhere on the opening screen) ----- */
const intro = document.getElementById('intro');
const envelope = document.getElementById('envelope');
let opened = false;

function openInvitation() {
  if (opened) return;
  opened = true;
  envelope.classList.add('open');                 // seal fades, flap opens, letter rises
  setTimeout(() => {
    intro.classList.add('leave');                 // envelope screen fades away
    document.body.classList.remove('locked');     // allow scrolling
    // Phase 5 (music) will listen for this event:
    document.dispatchEvent(new CustomEvent('invitation:opened'));
    revealVisible();
  }, 1900);
  setTimeout(() => intro.remove(), 3100);
}
intro.addEventListener('click', openInvitation);

/* ----- Floral corners on the envelope screen and every framed section ----- */
const colours = ['#f4c9cf', '#e8a7b3', '#fbe3e5', '#f0d28a'];
function addCorners(box, offset) {
  ['tl', 'tr', 'bl', 'br'].forEach((pos, k) => {
    const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('class', 'fl ' + pos);
    s.setAttribute('aria-hidden', 'true');
    s.style.color = colours[(offset + k) % colours.length];
    s.style.animationDelay = (k * -2.2) + 's';
    s.innerHTML = '<use href="#fl"/>';
    box.appendChild(s);
  });
}
addCorners(intro, 0);
document.querySelectorAll('.frame').forEach((sec, i) => addCorners(sec, i));

/* ----- Golden sparkles on the envelope screen ----- */
const sparkBox = document.getElementById('sparks');
for (let i = 0; i < 26; i++) {
  const p = document.createElement('span');
  const size = 3 + Math.random() * 5;
  p.className = 'spark';
  p.style.left = Math.random() * 100 + '%';
  p.style.width = p.style.height = size + 'px';
  p.style.setProperty('--x', (Math.random() * 60 - 30) + 'px');
  p.style.animationDuration = 7 + Math.random() * 8 + 's';
  p.style.animationDelay = -Math.random() * 14 + 's';
  sparkBox.appendChild(p);
}

/* ----- Falling rose petals ----- */
const petalBox = document.getElementById('petals');
for (let i = 0; i < 16; i++) {
  const p = document.createElement('span');
  const size = 8 + Math.random() * 8;
  p.className = 'petal';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.width = size + 'px';
  p.style.height = size * 1.4 + 'px';
  p.style.setProperty('--x', (Math.random() * 160 - 80) + 'px');
  p.style.animationDuration = 10 + Math.random() * 10 + 's';
  p.style.animationDelay = -Math.random() * 18 + 's';
  petalBox.appendChild(p);
}

/* ----- Reveal on scroll ----- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
function revealVisible() {
  document.querySelectorAll('.reveal').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0) el.classList.add('in');
  });
}


/* ================= PHASE 2 ================= */

/* ----- 5. Scratch-to-reveal date (real canvas, touch + mouse) ----- */
(function () {
  const card = document.getElementById('scratchCard');
  const cv = document.getElementById('scratchCanvas');
  const tapBtn = document.getElementById('tapReveal');
  if (!card || !cv || !cv.getContext) return;
  const ctx = cv.getContext('2d', { willReadFrequently: true });
  let w = 0, h = 0, drawing = false, done = false, started = false, last = null, timer = null;

  function paintFoil() {                       // gold foil surface
    ctx.globalCompositeOperation = 'source-over';
    const g = ctx.createLinearGradient(0, 0, w, h);
    ['#a8801f', '#f3dc9b', '#c99a3c', '#f8e8b0', '#b8923a'].forEach((c, i) => g.addColorStop(i / 4, c));
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    const sh = ctx.createRadialGradient(w * .3, h * .25, 0, w * .3, h * .25, w * .7);
    sh.addColorStop(0, 'rgba(255,255,255,.38)'); sh.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = sh; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 160; i++) {
      ctx.fillStyle = Math.random() < .5 ? 'rgba(255,255,255,.22)' : 'rgba(110,70,5,.14)';
      ctx.beginPath(); ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 1.8 + .4, 0, 6.283); ctx.fill();
    }
    ctx.strokeStyle = 'rgba(110,70,5,.55)'; ctx.lineWidth = 1.5;
    ctx.strokeRect(10, 10, w - 20, h - 20);
    ctx.setLineDash([2, 5]); ctx.strokeRect(16, 16, w - 32, h - 32); ctx.setLineDash([]);
  }

  function resize() {                          // runs on load and when the card size changes (e.g. rotation)
    if (done) return;
    const r = cv.getBoundingClientRect();
    const nw = Math.round(r.width), nh = Math.round(r.height);
    if (!nw || !nh || (nw === w && nh === h)) return;
    w = nw; h = nh;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = w * dpr; cv.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    paintFoil();
  }

  function pt(e) {
    const r = cv.getBoundingClientRect();
    return { x: (e.clientX - r.left) * (w / r.width), y: (e.clientY - r.top) * (h / r.height) };
  }
  function scratch(p) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = Math.max(36, w * .1); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.moveTo(last ? last.x : p.x, last ? last.y : p.y); ctx.lineTo(p.x + .01, p.y); ctx.stroke();
    last = p;
  }
  function begin() { if (!started) { started = true; card.classList.add('scratching'); } }
  function clearedShare() {
    const d = ctx.getImageData(0, 0, cv.width, cv.height).data;
    let n = 0, t = 0;
    for (let i = 3; i < d.length; i += 64) { t++; if (d[i] < 128) n++; }   // sample every 16th pixel
    return n / t;
  }
  function check() { timer = null; if (!done && clearedShare() > .5) finish(); }
  function finish() {                          // reveal the whole date
    if (done) return;
    begin(); done = true; drawing = false;
    card.classList.add('revealed');
    if (tapBtn) tapBtn.hidden = true;
    document.dispatchEvent(new CustomEvent('date:revealed'));
  }

  cv.addEventListener('pointerdown', e => {
    if (done) return;
    drawing = true; last = null;
    try { cv.setPointerCapture(e.pointerId); } catch (_) {}
    begin(); scratch(pt(e)); e.preventDefault();
  });
  cv.addEventListener('pointermove', e => {
    if (!drawing || done) return;
    scratch(pt(e));
    if (!timer) timer = setTimeout(check, 250);
    e.preventDefault();
  });
  ['pointerup', 'pointercancel'].forEach(t => cv.addEventListener(t, () => {
    drawing = false; last = null;
    if (!done) { clearTimeout(timer); check(); }
  }));
  cv.addEventListener('contextmenu', e => e.preventDefault());
  if (tapBtn) tapBtn.addEventListener('click', finish);

  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(card);
  else addEventListener('resize', resize);
  resize();
})();

/* ----- 6. Live countdown to 20 Nov 2026, 7:00 PM IST ----- */
(function () {
  // "+05:30" pins the moment to Indian Standard Time, whatever timezone the visitor is in.
  const TARGET = Date.parse('2026-11-20T19:00:00+05:30');
  const el = { d: document.getElementById('cd-d'), h: document.getElementById('cd-h'),
               m: document.getElementById('cd-m'), s: document.getElementById('cd-s') };
  if (!el.d || !el.h || !el.m || !el.s) return;
  const two = n => String(n).padStart(2, '0');

  function tick() {
    const diff = Math.max(0, TARGET - Date.now());            // never goes negative
    el.d.textContent = two(Math.floor(diff / 864e5));
    el.h.textContent = two(Math.floor(diff % 864e5 / 36e5));
    el.m.textContent = two(Math.floor(diff % 36e5 / 6e4));
    el.s.textContent = two(Math.floor(diff % 6e4 / 1e3));
    if (diff > 0) setTimeout(tick, 1000 - (Date.now() % 1000)); // stay in step with the clock
  }
  tick();
})();
