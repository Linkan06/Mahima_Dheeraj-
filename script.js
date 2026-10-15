/* Mahima Weds Dheeraj - Phase 1 */
document.documentElement.classList.add('js');

/* ----- 1. Envelope opening ----- */
const intro = document.getElementById('intro');
const envelope = document.getElementById('envelope');
let opened = false;

envelope.addEventListener('click', () => {
  if (opened) return;
  opened = true;
  envelope.classList.add('open');                 // flap opens, letter rises
  setTimeout(() => {
    intro.classList.add('leave');                 // fade the envelope screen away
    document.body.classList.remove('locked');     // allow scrolling
    // Phase 5 (music) will listen for this event:
    document.dispatchEvent(new CustomEvent('invitation:opened'));
    revealVisible();
  }, 1900);
  setTimeout(() => intro.remove(), 3000);
});

/* ----- Floral corners on every framed section ----- */
const colours = ['#f4c9cf', '#e8a7b3', '#fbe3e5', '#f0d28a'];
document.querySelectorAll('.frame').forEach((sec, i) => {
  ['tl', 'tr', 'bl', 'br'].forEach((pos, k) => {
    const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('class', 'fl ' + pos);
    s.setAttribute('aria-hidden', 'true');
    s.style.color = colours[(i + k) % colours.length];
    s.style.animationDelay = (k * -2.2) + 's';
    s.innerHTML = '<use href="#fl"/>';
    sec.appendChild(s);
  });
});

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
