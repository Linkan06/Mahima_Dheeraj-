/* ===== COLOURS: change these to retheme the whole site ===== */
:root{
  --ivory:#fff8ee; --cream:#f8efe0; --blush:#f6d3d8; --rose:#b45f73;
  --wine:#5c1426; --burg:#7a1f3a; --plum:#2e1030;
  --gold:#b8923a; --gold-l:#e9cf8a; --champ:#e7d3a3; --ink:#4a1b26;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;overflow-x:hidden}
body{font-family:'Cormorant Garamond',Georgia,serif;font-size:19px;color:var(--ink);
  background:var(--plum);overflow-x:hidden}
body.locked{overflow:hidden;height:100svh}

/* Gold shimmering text (for dark backgrounds) */
.gold{
  background:linear-gradient(100deg,#c99a3c,#fff0b8 35%,#e0b855 55%,#fff0b8 80%,#c99a3c);
  background-size:220% auto;-webkit-background-clip:text;background-clip:text;
  color:transparent;-webkit-text-fill-color:transparent;animation:shine 7s linear infinite;
}
@keyframes shine{to{background-position:220% center}}
.kicker,.role,.label,.eyebrow,.cue,.tap{font-family:'Cinzel',serif;letter-spacing:.26em;text-transform:uppercase}
.kicker{font-size:.76rem;color:var(--gold-l)}

/* ===== Falling petals (above sections, below the envelope) ===== */
#petals{position:fixed;inset:0;pointer-events:none;z-index:5;overflow:hidden}
.petal{position:absolute;top:-6vh;border-radius:70% 0 70% 0;background:var(--blush);opacity:.6;animation:fall linear infinite}
@keyframes fall{to{transform:translate3d(var(--x),112vh,0) rotate(560deg)}}

/* ===== 1. Full-screen royal envelope ===== */
#intro{
  position:fixed;top:0;left:0;width:100vw;height:100vh;height:100svh;z-index:100;
  display:flex;flex-direction:column;align-items:center;justify-content:space-evenly;text-align:center;
  padding:max(.8rem,env(safe-area-inset-top)) .8rem max(.8rem,env(safe-area-inset-bottom));
  background:radial-gradient(ellipse at 50% 45%,#8a2442 0,#5c1426 48%,#2e1030 100%);overflow:hidden;
  transition:opacity 1.1s,visibility 1.1s,transform 1.1s;
}
#intro::before{content:"";position:absolute;left:50%;top:50%;width:130vmax;height:130vmax;
  transform:translate(-50%,-50%);background:radial-gradient(circle,rgba(255,214,140,.26),transparent 40%);
  animation:breathe 6s ease-in-out infinite;pointer-events:none}
@keyframes breathe{50%{opacity:.55}}
#intro.leave{opacity:0;visibility:hidden;transform:scale(1.06)}
#intro .fl{width:clamp(110px,34vw,190px);height:clamp(110px,34vw,190px);z-index:0}
#intro .fl.tl{top:-34px;left:-34px}#intro .fl.tr{top:-34px;right:-34px}
#intro .fl.bl{bottom:-34px;left:-34px}#intro .fl.br{bottom:-34px;right:-34px}
#sparks{position:absolute;inset:0;pointer-events:none}
.spark{position:absolute;bottom:-12px;border-radius:50%;background:radial-gradient(#fff3c4,#e0b855 60%,transparent);animation:rise linear infinite}
@keyframes rise{0%{transform:translate3d(0,0,0);opacity:0}15%{opacity:1}100%{transform:translate3d(var(--x),-105vh,0);opacity:0}}

.in-top,.env,.tap{position:relative;z-index:1}
.mono{font-family:'Great Vibes',cursive;font-size:clamp(3.4rem,17vw,5.6rem);line-height:1.1;color:#f3dc9b;
  text-shadow:0 0 22px rgba(255,214,140,.55),0 2px 3px rgba(0,0,0,.4)}
.celebrate{font-family:'Great Vibes',cursive;font-size:clamp(1.7rem,8vw,2.5rem);color:var(--blush)}
.tap{font-size:clamp(.72rem,3.2vw,.9rem);color:var(--gold-l);animation:pulse 2.2s ease-in-out infinite;padding:.4rem}
@keyframes pulse{50%{opacity:.4}}

.env{width:min(92vw,520px,60svh);aspect-ratio:5/4;border:0;background:none;cursor:pointer;display:block;
  -webkit-tap-highlight-color:transparent;touch-action:manipulation;
  filter:drop-shadow(0 22px 34px rgba(0,0,0,.55)) drop-shadow(0 0 26px rgba(255,200,120,.25));
  transition:transform 2s ease}
.env.open{transform:scale(1.06)}
.env>span{position:absolute;display:block}
.back{inset:0;background:linear-gradient(160deg,#7a1f3a,#3d0f26);border:2px solid #e0b855;border-radius:6px}
.letter{left:8%;right:8%;top:10%;bottom:12%;z-index:1;border-radius:4px;border:1px solid #e0b855;
  background:linear-gradient(#fffdf6,#f8ead6);display:flex;flex-direction:column;align-items:center;
  justify-content:flex-start;gap:.3rem;padding-top:7%;transition:transform 1.1s .55s ease}
.invited{font-family:'Cinzel',serif;letter-spacing:.2em;font-size:clamp(.55rem,2.6vw,.8rem);color:var(--burg)}
.star{color:var(--gold);font-size:1.2rem}
.front{inset:0;z-index:2;border-radius:6px;background:linear-gradient(160deg,#fbe3e5,#f1bcc6);
  clip-path:polygon(0 0,50% 56%,100% 0,100% 100%,0 100%)}
.orn{position:absolute;inset:0;width:100%;height:100%;z-index:2;pointer-events:none}
.names{left:0;right:0;bottom:8%;z-index:2;font-family:'Great Vibes',cursive;font-size:clamp(1.7rem,8.4vw,2.7rem);color:var(--wine);line-height:1.2}
.flap{left:0;top:0;width:100%;height:56%;z-index:3;transform-origin:top;
  background:#e0b855;clip-path:polygon(0 0,100% 0,50% 100%);transition:transform .9s ease,z-index 0s .45s}
.flap::before,.flap::after{content:"";position:absolute;inset:0;clip-path:polygon(2.2% 0,97.8% 0,50% 93%)}
.flap::before{background:linear-gradient(180deg,#f1bcc6,#fde9ea)}
.flap::after{background:linear-gradient(180deg,#5c1426,#7a1f3a);opacity:0;transition:opacity .01s .45s}
.seal{left:50%;top:56%;width:25%;aspect-ratio:1;transform:translate(-50%,-50%);z-index:4;border-radius:50%;
  background:radial-gradient(circle at 35% 30%,#fbeab0,#c99a3c 60%,#8a6418);display:grid;place-items:center;
  box-shadow:0 0 0 3px #c99a3c,inset 0 0 0 4px rgba(110,70,5,.45),0 7px 14px rgba(0,0,0,.5);transition:opacity .4s}
.seal svg{width:62%;height:62%}
.env.open .flap{transform:rotateX(180deg);z-index:0}
.env.open .flap::after{opacity:1}
.env.open .letter{transform:translateY(-46%)}
.env.open .seal{opacity:0}

/* ===== Sections ===== */
section{position:relative;z-index:1;min-height:100svh;display:flex;flex-direction:column;
  align-items:center;justify-content:center;text-align:center;padding:5rem 1.6rem;overflow:hidden}
.frame{--paper:#4a1230}
.frame::before{content:"";position:absolute;inset:14px;border:1px solid var(--gold);border-radius:4px;
  box-shadow:inset 0 0 0 5px var(--paper),inset 0 0 0 6px rgba(224,184,85,.6);pointer-events:none}
.fl{position:absolute;width:clamp(70px,22vw,120px);height:clamp(70px,22vw,120px);animation:sway 10s ease-in-out infinite;opacity:.95}
.fl.tl{top:-8px;left:-8px}.fl.tr{top:-8px;right:-8px}.fl.bl{bottom:-8px;left:-8px}.fl.br{bottom:-8px;right:-8px}
@keyframes sway{50%{transform:rotate(14deg) scale(1.07)}}
.js .reveal{opacity:0;transform:translateY(28px);transition:opacity 1.2s var(--d,0s),transform 1.2s var(--d,0s)}
.js .reveal.in{opacity:1;transform:none}

/* ===== 2. Radhe Radhe (deep wine) ===== */
.radhe{gap:1.6rem;--paper:#4a1230;background:radial-gradient(circle at 50% 45%,#8a2442 0,#5c1426 55%,#2e1030 100%)}
.hindi-script{font-family:'Kalam','Tiro Devanagari Hindi',serif;font-size:clamp(2.8rem,14vw,5.2rem);line-height:1.5;
  filter:drop-shadow(0 0 14px rgba(233,207,138,.4))}

/* ===== 3. Ganesha (light ivory and blush) ===== */
.ganesh{gap:1.2rem;--paper:#fff8ee;color:var(--ink);
  background:linear-gradient(180deg,#fff8ee,#f9e0e4 55%,#fff1e6)}
.ganesha{width:min(86vw,380px);height:auto;filter:drop-shadow(0 14px 22px rgba(92,20,38,.4))}
.spin{transform-box:fill-box;transform-origin:center;animation:spin 70s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.flame{transform-box:fill-box;transform-origin:50% 100%;animation:flick 1.6s ease-in-out infinite alternate}
@keyframes flick{from{transform:scale(1,.92) rotate(-2deg)}to{transform:scale(.94,1.08) rotate(2deg)}}
.glow{animation:breathe 3s ease-in-out infinite}
.tw{animation:pulse 3s ease-in-out infinite}
.mantra{font-family:'Tiro Devanagari Hindi','Noto Sans Devanagari',serif;display:flex;flex-direction:column;gap:1rem}
.mantra h2{font-weight:400;font-size:clamp(1.7rem,7vw,2.3rem)}
.ganesh .gold{background:linear-gradient(100deg,#5c1426,#a8213f 50%,#5c1426);background-size:220% auto;
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.mantra p{font-size:clamp(1.05rem,4.4vw,1.3rem);line-height:2;color:var(--ink)}
.mantra .label{font-size:.78rem;color:var(--burg);margin-top:.4rem}
.cue{margin-top:1rem;font-size:.74rem;color:var(--burg);text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:.3rem;padding:.6rem 1rem}
.cue span{font-size:1.6rem;animation:bounce 1.8s infinite}
@keyframes bounce{50%{transform:translateY(7px)}}

/* ===== 4. Couple (deep plum, gold and ivory) ===== */
.couple{gap:1.4rem;--paper:#2e1030;color:#f6e9dc;background:linear-gradient(160deg,#4a1230,#2e1030 70%)}
.eyebrow{font-size:clamp(.78rem,3.4vw,1rem);font-weight:600;color:var(--gold-l);line-height:1.9;max-width:20rem}
.monogram{font-family:'Great Vibes',cursive;font-size:clamp(3rem,15vw,5rem);line-height:1.2}
.people{display:grid;gap:1.2rem;width:100%;max-width:900px;align-items:center}
.person{padding:1.2rem .6rem}
.role{font-size:.78rem;color:#f2b8c4;font-weight:600}
.name{font-family:'Cinzel',serif;font-weight:600;font-size:clamp(1.8rem,8.4vw,2.6rem);margin:.5rem 0 .8rem;line-height:1.2}
.parents{font-size:1.2rem;line-height:1.8;font-style:italic;color:#f6e9dc}
.parents strong{font-style:normal;font-weight:600;color:#fff}
.divider{display:flex;align-items:center;justify-content:center;gap:.8rem;color:var(--gold-l)}
.divider i{display:block;width:60px;height:1px;background:linear-gradient(90deg,transparent,var(--gold-l),transparent)}
@media(min-width:760px){
  .people{grid-template-columns:1fr auto 1fr}
  .divider{flex-direction:column;height:220px}
  .divider i{width:1px;height:90px;background:linear-gradient(transparent,var(--gold-l),transparent)}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation:none!important;transition-duration:.01s!important}
  html{scroll-behavior:auto}
}


/* ================= PHASE 2 ================= */

/* ===== 5. Scratch card (light ivory and blush) ===== */
.scratch{gap:1.4rem;--paper:#fff8ee;color:var(--ink);background:linear-gradient(180deg,#fff1e6,#f9e0e4 55%,#fff8ee)}
.scratch-card{position:relative;width:min(88vw,420px);aspect-ratio:8/5;border-radius:14px;overflow:hidden;
  border:3px solid #c99a3c;background:#fff8ee;
  box-shadow:0 0 0 5px #fff8ee,0 0 0 7px rgba(184,146,58,.7),0 18px 34px rgba(92,20,38,.35)}
.date-under{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;
  background:radial-gradient(circle at 50% 40%,#fffdf6,#f9e0e4)}
.date-under::before{content:"";position:absolute;inset:8px;border:1px solid #c99a3c;border-radius:8px}
.d-num{font-family:'Cinzel',serif;font-weight:600;font-size:clamp(3.6rem,18vw,5.6rem);line-height:1;color:var(--wine)}
.d-orn{color:var(--gold);font-size:1rem;margin:.1rem 0}
.d-mon{font-family:'Cinzel',serif;letter-spacing:.3em;margin-left:.3em;font-size:clamp(.85rem,4.2vw,1.3rem);color:var(--burg)}
.scratch-card canvas{position:absolute;inset:0;width:100%;height:100%;display:block;cursor:grab;
  touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;transition:opacity 1.2s}
.foil-text{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:.6rem;padding:1rem;text-align:center;pointer-events:none;transition:opacity .5s}
.f-top{font-family:'Cinzel',serif;font-weight:600;letter-spacing:.14em;font-size:clamp(.9rem,4.4vw,1.3rem);color:var(--wine)}
.f-sub{font-style:italic;font-weight:600;font-size:clamp(1.05rem,4.6vw,1.3rem);color:#4a1b26}
.scratch-card::after{content:"";position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(110deg,transparent 35%,rgba(255,255,255,.45) 50%,transparent 65%);
  background-size:250% 100%;animation:sweep 3.2s ease-in-out infinite}
@keyframes sweep{from{background-position:150% 0}to{background-position:-50% 0}}
.scratching .foil-text,.revealed .foil-text{opacity:0}
.scratching::after,.revealed::after{display:none}
.revealed canvas{opacity:0;pointer-events:none;touch-action:auto}
.revealed .date-under{animation:glowIn 2.2s ease-out}
@keyframes glowIn{from{box-shadow:inset 0 0 70px rgba(255,214,140,.95)}to{box-shadow:inset 0 0 0 rgba(255,214,140,0)}}
.tap-reveal{background:none;border:0;cursor:pointer;min-height:44px;padding:.8rem 1.2rem;
  font-family:'Cinzel',serif;letter-spacing:.2em;font-size:.72rem;text-transform:uppercase;
  color:var(--burg);text-decoration:underline;text-underline-offset:4px;-webkit-tap-highlight-color:transparent}
.tap-reveal[hidden]{display:none}

/* ===== 6. Countdown (deep wine and gold) ===== */
.countdown{gap:2.2rem;--paper:#2e1030;color:#f6e9dc;
  background:radial-gradient(circle at 50% 40%,#7a1f3a 0,#5c1426 55%,#2e1030 100%)}
.cd{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(.4rem,2.5vw,1rem);width:min(92vw,560px)}
.cd-box{display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:clamp(.8rem,4vw,1.4rem) .2rem;
  border:1px solid var(--gold);border-radius:10px;background:rgba(255,255,255,.05);
  box-shadow:inset 0 0 0 3px rgba(46,16,48,.6),inset 0 0 0 4px rgba(224,184,85,.35)}
.cd .n{font-family:'Cinzel',serif;font-weight:600;font-size:clamp(1.7rem,9vw,3.2rem);line-height:1;color:#f3dc9b;
  font-variant-numeric:tabular-nums;text-shadow:0 0 16px rgba(255,214,140,.45)}
.cd .u{font-family:'Cinzel',serif;letter-spacing:.16em;text-transform:uppercase;font-size:clamp(.52rem,2.4vw,.8rem);color:#f2b8c4}


/* ================= PHASE 3: THE EIGHT EVENTS ================= */
.event{min-height:0;padding:4.8rem 1.4rem 4.4rem;color:var(--ink);background:var(--bg)}
.ev-inner{position:relative;z-index:2;width:100%;max-width:560px;display:flex;flex-direction:column;align-items:center}
.fx{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0}
.fx::before{content:"";position:absolute;left:0;right:0;top:-300px;bottom:0;background-size:300px 300px;opacity:.8;
  animation:fxfall 16s linear infinite;
  background-image:radial-gradient(circle at 15% 20%,var(--c1) 0 4px,transparent 5px),radial-gradient(circle at 55% 65%,var(--c2) 0 3.5px,transparent 4.5px),
    radial-gradient(circle at 85% 35%,var(--c1) 0 3px,transparent 4px),radial-gradient(circle at 35% 90%,var(--c3) 0 3px,transparent 4px),
    radial-gradient(circle at 75% 80%,var(--c2) 0 2.5px,transparent 3.5px)}
.fx.twinkle::before{top:0;animation:twinkle 3s ease-in-out infinite alternate}
@keyframes fxfall{to{transform:translateY(300px)}}
@keyframes twinkle{from{opacity:.25}to{opacity:.95}}
.js .event:not(.live) .fx::before{animation-play-state:paused}

.ev-title{font-family:'Cinzel',serif;font-weight:600;letter-spacing:.07em;line-height:1.3;text-transform:uppercase;
  font-size:clamp(1.6rem,7.6vw,2.6rem);color:var(--title)}
.ev-sub{font-family:'Cinzel',serif;font-weight:600;letter-spacing:.3em;text-transform:uppercase;margin-top:.6rem;
  font-size:clamp(.75rem,3.4vw,1rem);color:var(--accent)}
.ev-sub[lang="hi"]{font-family:'Tiro Devanagari Hindi',serif;font-weight:400;letter-spacing:.06em;text-transform:none;font-size:clamp(1.4rem,6.4vw,1.9rem)}
.ev-orn{display:flex;align-items:center;justify-content:center;gap:.7rem;color:var(--line);margin:1rem 0 .6rem;width:100%}
.ev-orn i{display:block;height:1px;width:70px;background:linear-gradient(90deg,transparent,currentColor,transparent)}

.ev-details{position:relative;width:100%;max-width:460px;margin-top:.6rem;display:grid;grid-template-columns:1fr 1fr;overflow:hidden;
  border:1px solid var(--line);border-radius:14px;background:var(--card);box-shadow:0 8px 22px rgba(0,0,0,.12)}
.ev-details>div{grid-column:1/-1;padding:.9rem .8rem;border-top:1px solid var(--line)}
.ev-details>.half{grid-column:auto;border-top:0}
.ev-details>.half+.half{border-left:1px solid var(--line)}
.ev-details dt{font-family:'Cinzel',serif;font-weight:600;letter-spacing:.22em;text-transform:uppercase;font-size:.68rem;color:var(--accent);margin-bottom:.3rem}
.ev-details dd{font-size:1.2rem;font-weight:600;line-height:1.5;color:var(--ink)}
.ev-note{display:block;margin-top:.35rem;font-size:1rem;font-weight:400;font-style:italic}
.shimmer::after{content:"";position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(110deg,transparent 35%,rgba(255,196,50,.38) 50%,transparent 65%);background-size:250% 100%;animation:sweep 4s ease-in-out infinite}

.map-btn{margin-top:1.4rem;display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:.85rem 1.8rem;border-radius:999px;
  font-family:'Cinzel',serif;font-weight:600;letter-spacing:.16em;font-size:.8rem;text-decoration:none;
  color:var(--btnink,#fff8ee);background:var(--btn);border:1px solid rgba(255,240,184,.75);box-shadow:0 6px 16px rgba(0,0,0,.28);
  -webkit-tap-highlight-color:transparent}

/* --- Event 1: Carnival under the sun (marigold, rust orange, leaf green) --- */
.ev1{--bg:linear-gradient(180deg,#ffe9a0 0,#ffcf5c 50%,#f7a540 100%);--paper:#ffe9a0;--ink:#3f1806;--title:#6f2208;--accent:#7c2a0a;--line:#c2670d;
  --card:rgba(255,248,225,.86);--btn:linear-gradient(135deg,#7c2a0a,#c2410c);--glow:rgba(246,184,0,.6);--artbg:#fff3c4;
  --c1:#f6b800;--c2:#e8720c;--c3:#4f8a3a;padding-top:6rem}

/* --- Event 2: Bollywood beats (emerald, black, gold) --- */
.ev2{--bg:radial-gradient(circle at 50% 0,#14795a 0,#0b3d2e 38%,#050d0a 100%);--paper:#07241b;--ink:#f6e9c8;--title:#f3dc9b;--accent:#e9cf8a;--line:#c99a3c;
  --card:rgba(0,0,0,.45);--btn:linear-gradient(135deg,#fff0b8,#e0b855 55%,#b8923a);--btnink:#2a1a00;--glow:rgba(255,214,140,.5);--ringc:#0b3d2e;--artbg:#0b3d2e;
  --c1:#ffe9a8;--c2:#e0b855;--c3:#fff3c4}
.beam{position:absolute;top:0;width:48%;height:72%;z-index:0;pointer-events:none;transform-origin:50% 0;
  background:linear-gradient(180deg,rgba(255,226,150,.3),transparent);clip-path:polygon(45% 0,55% 0,100% 100%,0 100%);
  animation:beam 7s ease-in-out infinite alternate}
.beam.l{left:-8%;--r:-12deg}.beam.r{right:-8%;--r:12deg;animation-delay:-3.5s}
@keyframes beam{from{transform:rotate(var(--r))}to{transform:rotate(calc(var(--r) * -.4))}}
.lights{position:absolute;left:0;right:0;top:22px;height:16px;z-index:1;pointer-events:none;
  background:radial-gradient(circle,#ffe9a8 0 3px,transparent 4px) 0 50%/26px 16px repeat-x;animation:twinkle 2.2s ease-in-out infinite alternate}
.chand{display:block;width:clamp(100px,34vw,150px);height:auto;margin:-.4rem auto .4rem;filter:drop-shadow(0 0 12px rgba(255,214,140,.6))}
.chand .b{animation:twinkle 1.8s ease-in-out infinite alternate}
.chand .b:nth-child(even){animation-delay:-.9s}

/* --- Event 3: Lagun ceremony (ivory, soft yellow, antique gold, diyas) --- */
.ev3{--bg:linear-gradient(180deg,#fffaf0,#fff3c8 60%,#ffeaa0);--paper:#fffaf0;--ink:#4a3410;--title:#6b4a0a;--accent:#7a5510;--line:#b8923a;
  --card:rgba(255,255,255,.68);--glow:rgba(255,214,140,.5);--c1:#f6dc7a;--c2:#e0b855;--c3:#fff0b8}
.diyas{display:flex;align-items:flex-end;justify-content:center;gap:clamp(.6rem,5vw,1.4rem);margin:.4rem 0 1.2rem}
.diya{width:clamp(44px,12vw,62px);height:auto;filter:drop-shadow(0 0 10px rgba(255,170,60,.7));animation:diyaglow 2.2s ease-in-out infinite alternate}
.diya.big{width:clamp(56px,16vw,80px);animation-delay:-1s}
@keyframes diyaglow{from{transform:scale(1)}to{transform:scale(1.07)}}

/* --- Event 4: Ubtan affairs (blush, peach, turmeric) --- */
.ev4{--bg:linear-gradient(180deg,#fde4e8,#ffd8c2 55%,#ffe08a);--paper:#fde4e8;--ink:#4a1626;--title:#8a1f46;--accent:#8a1f46;--line:#d98b9b;
  --card:rgba(255,255,255,.62);--c1:#f4a6b8;--c2:#ffcf4d;--c3:#fff0f2}

/* --- Event 6: Hina hues (mehendi green, sage, olive, muted gold) --- */
.ev6{--bg:linear-gradient(180deg,#e9eed6,#cdd8a8 55%,#b3c08c);--paper:#e0e7c6;--ink:#27300f;--title:#3f4d14;--accent:#4b5a1f;--line:#a8892a;
  --card:rgba(255,255,255,.55);--glow:rgba(168,137,42,.4);--artbg:#e9eed6;--c1:#8a9a5b;--c2:#c9b062;--c3:#6b7a3a;
  background:radial-gradient(circle,rgba(90,100,40,.16) 1.3px,transparent 2px) 0 0/20px 20px,var(--bg);padding-top:6rem;padding-bottom:6rem}
.vine{position:absolute;left:0;right:0;height:34px;z-index:1;pointer-events:none;opacity:.9;animation:vine 30s linear infinite;
  background:repeat-x url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='34'%3E%3Cpath d='M0 17Q30 2 60 17T120 17' fill='none' stroke='%23a8892a' stroke-width='1.6'/%3E%3Cg fill='%237d8c4a'%3E%3Cellipse cx='30' cy='8' rx='9' ry='3.6' transform='rotate(-35 30 8)'/%3E%3Cellipse cx='90' cy='26' rx='9' ry='3.6' transform='rotate(-35 90 26)'/%3E%3Cellipse cx='60' cy='24' rx='7' ry='3' transform='rotate(35 60 24)'/%3E%3Cellipse cx='0' cy='10' rx='7' ry='3' transform='rotate(35 0 10)'/%3E%3C/g%3E%3Cg fill='%23a8892a'%3E%3Ccircle cx='45' cy='7' r='1.8'/%3E%3Ccircle cx='105' cy='27' r='1.8'/%3E%3C/g%3E%3C/svg%3E")}
.vine.t{top:22px}.vine.b{bottom:22px;transform:scaleY(-1)}
@keyframes vine{to{background-position:120px 0}}

/* --- Event 7: Departure to tie the knot (ivory, blush, champagne) --- */
.ev7{--bg:linear-gradient(180deg,#fff8ee,#f9e0e4 55%,#f2e0b8);--paper:#fff6f2;--ink:#4a1b26;--title:#7a1f3a;--accent:#7a1f3a;--line:#c9a85a;
  --card:rgba(255,255,255,.62);--c1:#d9b85a;--c2:#e8a7b3;--c3:#f0dca0}
.route{display:block;width:min(86%,340px);height:auto;margin:.4rem auto 1.4rem}
.route .rt{animation:dash 3s linear infinite}
@keyframes dash{to{stroke-dashoffset:-20}}

/* --- Event 8: Eternal vows (royal ivory, champagne gold, blush, mandap) --- */
.ev8{--bg:radial-gradient(circle at 50% 15%,#fffaf0 0,#f9e0e4 55%,#ecd9a8 130%);--paper:#fff4e8;--ink:#4a1b26;--title:#5c1426;--accent:#7a1f3a;--line:#b8923a;
  --card:rgba(255,255,255,.66);--btn:linear-gradient(135deg,#4a0f20,#7a1f3a);--glow:rgba(255,214,140,.6);--artbg:#fff8ee;
  --c1:#e58aa0;--c2:#f6d3d8;--c3:#e0b855;padding-bottom:5.4rem}
.vows-names{font-family:'Cinzel',serif;font-weight:600;letter-spacing:.12em;line-height:1.7;margin-top:.6rem;
  font-size:clamp(1.2rem,5.8vw,1.8rem);color:var(--title)}
.vows-line{font-style:italic;font-weight:600;font-size:clamp(1.15rem,5vw,1.4rem);color:#7a5510;margin:.3rem 0 1.2rem}

/* ================= PHASE 3.1: CARICATURES AS FULL-BLEED BACKGROUNDS (Events 1, 2, 6, 8) ================= */
.ev-head,.ev-foot{display:flex;flex-direction:column;align-items:center;width:100%}
.has-bg{min-height:max(118svh,880px);justify-content:stretch;padding-top:5.2rem;padding-bottom:3.6rem}
.has-bg .ev-inner{flex:1;justify-content:space-between}

/* the picture itself: edge to edge, behind all text, nothing around it */
.ev-bg{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;z-index:0;
  object-position:var(--pos,50% 40%);transform-origin:var(--pos,50% 40%);animation:bgdrift 26s ease-in-out infinite alternate}
@keyframes bgdrift{to{transform:scale(1.05)}}
.js .event:not(.live) .ev-bg{animation-play-state:paused}

/* very light theme tint + soft golden light; darkening only at the top and bottom where the text sits */
.has-bg::before{content:"";position:absolute;inset:0;z-index:1;border:0;border-radius:0;box-shadow:none;pointer-events:none;
  background:
    linear-gradient(180deg,rgba(var(--dk),.5) 0,rgba(var(--dk),.22) 14%,rgba(var(--dk),0) 32%,rgba(var(--dk),0) 52%,rgba(var(--dk),.3) 70%,rgba(var(--dk),.68) 100%),
    radial-gradient(circle at 50% 38%,rgba(255,214,140,.16),transparent 58%),
    var(--tint)}
.has-bg .fx,.has-bg .beam{z-index:1}
.has-bg .fl{display:none}
.has-bg .vine{opacity:.75}
.has-bg.ev2{--dk:1,28,18;--tint:rgba(6,78,54,.22);--pos:50% 45%}
.has-bg.ev6{--dk:30,44,12;--tint:rgba(104,128,56,.20);--pos:58% 50%}

/* text sits directly on the picture: light colours + soft shadows, no boxes */
.has-bg{--line:rgba(246,226,166,.6)}
.has-bg .ev-title{color:#fff6dc;text-shadow:0 2px 8px rgba(0,0,0,.7),0 0 22px rgba(0,0,0,.4)}
.has-bg .ev-title.gold{color:transparent;text-shadow:none;filter:drop-shadow(0 2px 5px rgba(0,0,0,.75))}
.has-bg .ev-sub{color:#f6e2a6;text-shadow:0 2px 6px rgba(0,0,0,.75)}
.has-bg .ev-orn{color:#f6e2a6;filter:drop-shadow(0 1px 3px rgba(0,0,0,.6))}
.has-bg .ev-details{background:none;border:0;border-radius:0;box-shadow:none;overflow:visible}
.has-bg .ev-details>.half{border-top:1px solid var(--line)}
.has-bg .ev-details dt{color:#f6e2a6;text-shadow:0 1px 4px rgba(0,0,0,.85)}
.has-bg .ev-details dd{color:#fff8ee;text-shadow:0 2px 6px rgba(0,0,0,.85),0 0 14px rgba(0,0,0,.45)}
.has-bg .vows-names{color:#fff6dc;text-shadow:0 2px 8px rgba(0,0,0,.75)}
.has-bg .vows-line{color:#f6e2a6;text-shadow:0 2px 6px rgba(0,0,0,.8)}

.ev-kicker{font-style:italic;font-weight:600;margin-top:.5rem;font-size:clamp(1.15rem,5vw,1.4rem);color:#f6e2a6;text-shadow:0 2px 6px rgba(0,0,0,.8)}

/* ================= PHASE 3.3: NEW BACKGROUND PICTURES (Carnival, Hina Hues, Eternal Vows) ================= */
/* Carnival: rust-orange tint over haldi-background.png */
.has-bg.ev1{--dk:58,20,6;--tint:rgba(232,114,12,.10);--pos:50% 50%}
/* Eternal Vows: light ivory/blush overlay, dark wine text, taller section so the sacred fire and gathbandhan knot stay visible */
.has-bg.ev8{--tint:rgba(251,227,229,.10);--pos:50% 50%;--line:rgba(122,31,58,.4);min-height:max(170svh,1400px);padding-top:15rem;padding-bottom:4rem}
.has-bg.ev8 .ev-inner{flex:0 0 auto;justify-content:flex-start;gap:1.4rem}
.has-bg.ev8::before{background:
  radial-gradient(ellipse at 50% 30%,rgba(255,248,238,.5),rgba(251,227,229,.2) 55%,transparent 78%),
  linear-gradient(180deg,rgba(255,244,232,.4) 0,rgba(255,244,232,.1) 26%,transparent 46%),var(--tint)}
.has-bg.ev8 .fx{opacity:.55}
.has-bg.ev8 .ev-title{color:#5c1426;text-shadow:0 0 14px rgba(255,248,238,.95),0 1px 2px rgba(255,248,238,.9)}
.has-bg.ev8 .ev-sub{color:#7a1f3a;text-shadow:0 0 12px rgba(255,248,238,.95),0 1px 2px rgba(255,248,238,.9)}
.has-bg.ev8 .ev-orn{color:#9a6a1a;filter:drop-shadow(0 0 4px rgba(255,248,238,.9))}
.has-bg.ev8 .ev-details dt{color:#7a1f3a;text-shadow:0 0 10px rgba(255,248,238,.95)}
.has-bg.ev8 .ev-details dd{color:#3a0f1b;text-shadow:0 0 12px rgba(255,248,238,.95),0 1px 2px rgba(255,248,238,.8)}
.has-bg.ev8 .vows-names{color:#5c1426;text-shadow:0 0 14px rgba(255,248,238,.95),0 1px 2px rgba(255,248,238,.9)}
.has-bg.ev8 .vows-line{color:#7a1f3a;text-shadow:0 0 12px rgba(255,248,238,.95),0 1px 2px rgba(255,248,238,.9)}
