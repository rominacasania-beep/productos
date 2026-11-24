/* Bloque de lanzamiento «De 0 a 100 por día», primero de la lista de productos (antes de #manifestacion). Para quitarlo: borrar este archivo y su <script> en index.html */
(function () {
  if (location.pathname !== "/" && location.pathname !== "/index.html") return;
  var URL_ = "https://de0a100.romimanfiesta.com/?utm_source=productos&utm_medium=hub&utm_campaign=lanzamiento";
  var css = "#lz{position:relative;z-index:20;scroll-margin-top:80px;overflow:hidden;background:linear-gradient(135deg,#f4effc 0%,#e6dcf7 55%,#d6c8f0 100%);color:#2e2140;font-family:Poppins,Montserrat,system-ui,sans-serif;padding:26px 16px 30px}"
    + "#lz *{box-sizing:border-box}#lz .in{max-width:980px;margin:0 auto;display:flex;align-items:center;gap:28px}"
    + "#lz .tx{flex:1;min-width:0}#lz img{width:300px;max-width:42%;border-radius:22px;box-shadow:0 22px 50px -18px rgba(0,0,0,.55);transform:rotate(2deg);border:1px solid rgba(95,76,148,.25);animation:lzf 4s ease-in-out infinite}"
    + "#lz .ey{display:inline-flex;align-items:center;gap:8px;background:#5f4c94;color:#fff;font-weight:600;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;padding:7px 14px;border-radius:999px;animation:lzp 1.8s ease-in-out infinite}"
    + "#lz .ey i{width:8px;height:8px;border-radius:50%;background:#e6c06a;display:inline-block}"
    + "#lz h2{font-family:'Cormorant Garamond',Fraunces,Georgia,serif;font-weight:600;font-size:clamp(2.3rem,7vw,4rem);line-height:1;margin:14px 0 10px;color:#2e2140;text-wrap:balance}"
    + "#lz p{margin:0 0 16px;font-size:1.02rem;line-height:1.5;max-width:46ch;color:#4b4160}"
    + "#lz .pr{display:inline-block;border:1.5px dashed #a8892f;color:#8a6d1c;font-weight:600;font-size:.86rem;letter-spacing:.1em;text-transform:uppercase;padding:6px 12px;border-radius:10px;margin:0 0 16px}"
    + "#lz a.bt{display:inline-block;position:relative;overflow:hidden;background:#5f4c94;color:#fff;font-weight:600;font-size:1.08rem;text-decoration:none;padding:16px 30px;border-radius:999px;box-shadow:0 14px 30px -12px rgba(0,0,0,.5)}"
    + "#lz a.bt:after{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent);transform:skewX(-20deg);animation:lzs 2.6s ease-in-out infinite}"
    + "#lz a.bt:focus-visible{outline:3px solid #5f4c94;outline-offset:3px}"
    + "#lz .sp{position:absolute;color:#b49be8;opacity:.85;animation:lzt 2.4s ease-in-out infinite;pointer-events:none}"
    + "@keyframes lzf{50%{transform:rotate(-1deg) translateY(-8px)}}@keyframes lzp{50%{transform:scale(1.05)}}@keyframes lzs{0%{left:-60%}60%,100%{left:130%}}@keyframes lzt{0%,100%{opacity:.2;transform:scale(.7)}50%{opacity:1;transform:scale(1.15)}}"
    + "@media(max-width:700px){#lz .in{flex-direction:column;text-align:center;gap:18px}#lz img{max-width:74%;width:260px}#lz p{margin-left:auto;margin-right:auto}#lz a.bt{display:block}}"
    + "@media(prefers-reduced-motion:reduce){#lz img,#lz .ey,#lz a.bt:after,#lz .sp{animation:none}}";
  var html = '<span class="sp" style="top:12px;left:6%;font-size:22px">✦</span><span class="sp" style="top:40%;right:4%;font-size:16px;animation-delay:.8s">✦</span><span class="sp" style="bottom:14px;left:44%;font-size:14px;animation-delay:1.4s">✦</span>'
    + '<div class="in"><div class="tx"><span class="ey"><i></i>Lanzamiento · Nuevo</span>'
    + '<h2>De 0 a 100 por día</h2>'
    + '<p>Así estoy trabajando con Claude para vender productos digitales: la guía paso a paso, 9 videos cortos y el kit que le pasás a tu Claude para que te instale todo.</p>'
    + '<div><span class="pr">★ Precio de lanzamiento ★</span></div>'
    + '<a class="bt" href="' + URL_ + '">Quiero verlo ahora →</a></div>'
    + '<a href="' + URL_ + '" aria-label="De 0 a 100 por día" style="display:contents"><img src="/lanzamiento2.jpg" alt="De 0 a 100 por día: la guía y el kit" width="640" height="640"></a></div>';
  function poner() {
    if (document.getElementById("lz") || !document.body) return;
    if (!document.getElementById("lz-css")) { var s = document.createElement("style"); s.id = "lz-css"; s.textContent = css; document.head.appendChild(s); }
    var ancla = document.getElementById("manifestacion");
    if (!ancla || !ancla.parentNode) return;
    var d = document.createElement("section"); d.id = "lz"; d.setAttribute("aria-label", "Lanzamiento"); d.innerHTML = html;
    ancla.parentNode.insertBefore(d, ancla);
  }
  function arrancar() {
    setTimeout(poner, 600);
    var n = 0, t = setInterval(function () { poner(); if (++n > 20) clearInterval(t); }, 700);
    try { new MutationObserver(function () { if (!document.getElementById("lz")) poner(); }).observe(document.body, { childList: true, subtree: true }); } catch (e) {}
  }
  if (document.readyState === "complete") arrancar(); else window.addEventListener("load", arrancar);
})();
