/* ============================================================
   SleepFlow · public/assets/scripts/main.js
   Lógica de la landing page.
   - Marca <html class="js"> antes del primer render (habilita el
     progresivo ".js [data-reveal]" del CSS sin parpadeo).
   - Revelado de secciones al hacer scroll con IntersectionObserver,
     respetando prefers-reduced-motion.
   Extraído del prototipo original sleepflow-landing.html
============================================================ */

(function () {
  'use strict';

  /* Clase que habilita las animaciones CSS solo si hay JS.
     Se ejecuta de inmediato: este script se carga en <head> sin defer. */
  document.documentElement.classList.add('js');

  /* Revelado al hacer scroll */
  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]');
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

    els.forEach(function (el) { io.observe(el); });
  }

  /* El script vive en <head>: esperamos al DOM antes de observar. */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
