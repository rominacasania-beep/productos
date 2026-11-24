/* Orden de la página de productos (24/11): arriba Taller + Journal + Kit; el resto adentro de «Ver todos mis productos».
   Solo CSS (order) + un botón; no mueve el HTML original. Para volver atrás: borrar este archivo y su <script> en index.html */
(function () {
  if (location.pathname !== "/" && location.pathname !== "/index.html") return;
  var G = "#lz,#mas,#emprender,#peques,main>section:has(#evidencias)";
  var css = "main.romi-universe{display:flex;flex-direction:column}main.romi-universe>*{order:50}"
    + "main.romi-universe>header{order:0}#tz{order:1}#journal{order:2}#manifestacion{order:3}#vt{order:4}"
    + G + "{order:5}"
    + "main>section:has(a[href='/un-poquito-mas-de-mi']){order:6}#regalitos{order:7}main>section:has(a[href*='instagram.com/romimanifiesta']){order:8}main.romi-universe>footer{order:9}"
    + "#empezar{display:none}"
    + "body:not(.vt-abierto) :is(" + G + "){display:none}"
    + "#vt{position:relative;z-index:20;text-align:center;padding:10px 16px 46px}"
    + "#vt button{font:600 1rem Poppins,system-ui,sans-serif;color:#5f4c94;background:#fff;border:2px solid #b49be8;border-radius:999px;padding:15px 28px;cursor:pointer;box-shadow:0 10px 26px -14px #5f4c94;transition:transform .2s}"
    + "#vt button:hover{transform:translateY(-2px)}#vt button:focus-visible{outline:3px solid #e6c06a;outline-offset:3px}"
    + "#vt p{margin:10px 0 0;font:400 .86rem Poppins,system-ui,sans-serif;color:#7a7088}";
  function poner() {
    var main = document.querySelector("main.romi-universe");
    if (!main) return;
    if (!document.getElementById("vt-css")) { var s = document.createElement("style"); s.id = "vt-css"; s.textContent = css; document.head.appendChild(s); }
    if (document.getElementById("vt")) return;
    var d = document.createElement("div"); d.id = "vt";
    d.innerHTML = '<button type="button" aria-expanded="false">Ver todos mis productos ↓</button><p>Diario de Evidencias, Autoconocimiento, NeuroMente, mentorías, peques y más</p>';
    main.appendChild(d);
    var b = d.querySelector("button");
    b.addEventListener("click", function () {
      var abierto = document.body.classList.toggle("vt-abierto");
      b.setAttribute("aria-expanded", abierto);
      b.textContent = abierto ? "Ocultar ↑" : "Ver todos mis productos ↓";
      d.querySelector("p").style.display = abierto ? "none" : "";
      if (!abierto) d.scrollIntoView({ block: "center" });
    });
  }
  function arrancar() {
    poner();
    var n = 0, t = setInterval(function () { poner(); if (++n > 20) clearInterval(t); }, 700);
    try { new MutationObserver(function () { if (!document.getElementById("vt")) poner(); }).observe(document.body, { childList: true, subtree: true }); } catch (e) {}
  }
  if (document.readyState === "complete") arrancar(); else window.addEventListener("load", arrancar);
})();
