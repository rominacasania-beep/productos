/* Bloque del Taller intensivo «De la idea a tu app», primero después de la foto de Romi (antes de #empezar). Para quitarlo: borrar este archivo y su <script> en index.html */
(function () {
  if (location.pathname !== "/" && location.pathname !== "/index.html") return;
  var URL_ = "https://masterclass.romimanfiesta.com/?utm_source=productos&utm_medium=hub&utm_campaign=taller-8-12";
  var CIERRE = new Date("2026-11-30T23:59:59-03:00").getTime();
  var css = "#tz{position:relative;z-index:20;overflow:hidden;background:radial-gradient(circle at 15% 10%,#4a2f63 0%,transparent 55%),radial-gradient(circle at 90% 95%,#5a2440 0%,transparent 50%),#140d1c;color:#fbf8ff;font-family:Poppins,system-ui,sans-serif;padding:34px 16px 38px}"
    + "#tz *{box-sizing:border-box}#tz .in{max-width:1000px;margin:0 auto;display:flex;align-items:center;gap:34px}"
    + "#tz .tx{flex:1;min-width:0}#tz img{width:330px;max-width:42%;border-radius:24px;border:1px solid rgba(230,192,106,.5);box-shadow:0 24px 60px -18px rgba(230,192,106,.45);animation:tzf 4.5s ease-in-out infinite}"
    + "#tz .ey{display:inline-flex;align-items:center;gap:8px;background:#e6c06a;color:#1c1229;font-weight:600;font-size:.76rem;letter-spacing:.14em;text-transform:uppercase;padding:7px 14px;border-radius:999px}"
    + "#tz .ey i{width:8px;height:8px;border-radius:50%;background:#e0457f;display:inline-block;animation:tzp 1.2s ease-in-out infinite}"
    + "#tz h2{font-family:'Cormorant Garamond',Georgia,serif;font-weight:700;font-size:clamp(2.5rem,7.5vw,4.3rem);line-height:.98;margin:14px 0 10px;color:#fff;text-wrap:balance}"
    + "#tz h2 em{font-style:italic;background:linear-gradient(100deg,#f0a3c4,#b49be8 50%,#e6c06a);-webkit-background-clip:text;background-clip:text;color:transparent}"
    + "#tz p{margin:0 0 14px;font-size:1.02rem;line-height:1.55;max-width:48ch;color:#ddd3ee}"
    + "#tz .ch{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 18px;padding:0;list-style:none}#tz .ch li{font-size:.85rem;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);padding:6px 12px;border-radius:999px}"
    + "#tz .rl{display:flex;gap:8px;margin:0 0 8px}#tz .rl div{min-width:62px;text-align:center;background:rgba(255,255,255,.07);border:1px solid rgba(230,192,106,.45);border-radius:14px;padding:8px 6px}"
    + "#tz .rl b{display:block;font-family:'Cormorant Garamond',Georgia,serif;font-size:1.9rem;line-height:1;color:#f6e2a6}#tz .rl span{font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:#cfc4e2}"
    + "#tz .rt{font-size:.85rem;color:#cfc4e2;margin:0 0 16px}"
    + "#tz .pz{display:flex;align-items:baseline;gap:10px;flex-wrap:wrap;margin:0 0 16px}#tz .pz s{opacity:.6;font-size:1.1rem}#tz .pz b{font-family:'Cormorant Garamond',Georgia,serif;font-size:2.6rem;line-height:1;color:#fff}#tz .pz small{font-size:.85rem;color:#e6c06a}"
    + "#tz a.bt{display:inline-block;position:relative;overflow:hidden;background:linear-gradient(100deg,#f0a3c4,#e6c06a);color:#1c1229;font-weight:700;font-size:1.08rem;text-decoration:none;padding:17px 32px;border-radius:999px;box-shadow:0 14px 34px -12px rgba(240,163,196,.7);animation:tzb 2.2s ease-in-out infinite}"
    + "#tz a.bt:after{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent);transform:skewX(-20deg);animation:tzs 2.6s ease-in-out infinite}"
    + "#tz a.bt:focus-visible{outline:3px solid #e6c06a;outline-offset:3px}"
    + "#tz .sp{position:absolute;color:#e6c06a;animation:tzt 2.4s ease-in-out infinite;pointer-events:none}"
    + "@keyframes tzf{50%{transform:translateY(-9px) rotate(-1deg)}}@keyframes tzp{50%{opacity:.3}}@keyframes tzb{50%{transform:scale(1.03)}}@keyframes tzs{0%{left:-60%}60%,100%{left:130%}}@keyframes tzt{0%,100%{opacity:.2;transform:scale(.7)}50%{opacity:1;transform:scale(1.15)}}"
    + "@media(max-width:700px){#tz .in{flex-direction:column-reverse;text-align:center;gap:20px}#tz img{max-width:78%;width:270px}#tz p{margin-left:auto;margin-right:auto}#tz .ch,#tz .rl,#tz .pz{justify-content:center}#tz a.bt{display:block}}"
    + "@media(prefers-reduced-motion:reduce){#tz img,#tz .ey i,#tz a.bt,#tz a.bt:after,#tz .sp{animation:none}}";
  var html = '<span class="sp" style="top:14px;left:5%;font-size:22px">✦</span><span class="sp" style="top:45%;right:3%;font-size:16px;animation-delay:.8s">✦</span><span class="sp" style="bottom:16px;left:40%;font-size:14px;animation-delay:1.4s">✦</span>'
    + '<div class="in"><div class="tx"><span class="ey"><i></i>Taller en vivo · 8/12</span>'
    + '<h2>De la idea <em>a tu app</em></h2>'
    + '<p>Creamos juntas, con inteligencia artificial, tu producto digital desde cero, con su página de venta y su propia app. Sirve si empezás de cero y también si ya vendés.</p>'
    + '<ul class="ch"><li>🗓️ Martes 8/12 · 20 h (Uruguay)</li><li>🎁 9 regalos</li><li>💬 Preguntas en vivo</li></ul>'
    + '<div class="rl" aria-label="Tiempo que queda a 67 USD"><div><b data-t="d">0</b><span>días</span></div><div><b data-t="h">0</b><span>horas</span></div><div><b data-t="m">0</b><span>min</span></div><div><b data-t="s">0</b><span>seg</span></div></div>'
    + '<p class="rt">para que la 1.ª tanda pase de 67 a 87 USD</p>'
    + '<div class="pz"><s>297 USD</s><b>67 USD</b><small>pago único · sin mensualidades</small></div>'
    + '<a class="bt" href="' + URL_ + '">Quiero mi lugar en el taller →</a></div>'
    + '<a href="' + URL_ + '" aria-label="Taller De la idea a tu app" style="display:contents"><img src="/taller.jpg" alt="Taller intensivo en vivo De la idea a tu app, 8 de diciembre" width="640" height="640"></a></div>';
  function reloj() {
    var el = document.getElementById("tz"); if (!el) return;
    var r = Math.max(0, CIERRE - Date.now()) / 1000;
    var v = { d: Math.floor(r / 86400), h: Math.floor(r % 86400 / 3600), m: Math.floor(r % 3600 / 60), s: Math.floor(r % 60) };
    for (var k in v) { var b = el.querySelector('[data-t="' + k + '"]'); if (b) b.textContent = v[k] < 10 && k !== "d" ? "0" + v[k] : v[k]; }
    if (r <= 0) { var rl = el.querySelector(".rl"), rt = el.querySelector(".rt"), pz = el.querySelector(".pz"); if (rl) rl.remove(); if (rt) rt.remove(); if (pz) pz.remove(); }
  }
  function poner() {
    if (document.getElementById("tz") || !document.body) return;
    if (!document.getElementById("tz-css")) { var s = document.createElement("style"); s.id = "tz-css"; s.textContent = css; document.head.appendChild(s); }
    var ancla = document.getElementById("empezar");
    if (!ancla || !ancla.parentNode) return;
    var d = document.createElement("section"); d.id = "tz"; d.setAttribute("aria-label", "Taller intensivo en vivo"); d.innerHTML = html;
    ancla.parentNode.insertBefore(d, ancla);
    reloj();
  }
  function arrancar() {
    setTimeout(poner, 600);
    var n = 0, t = setInterval(function () { poner(); if (++n > 20) clearInterval(t); }, 700);
    setInterval(reloj, 1000);
    try { new MutationObserver(function () { if (!document.getElementById("tz")) poner(); }).observe(document.body, { childList: true, subtree: true }); } catch (e) {}
  }
  if (document.readyState === "complete") arrancar(); else window.addEventListener("load", arrancar);
})();
