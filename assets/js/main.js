/* Marlène Fernandes — interactions minimales (nav, menu mobile, formulaires démo) */
(function () {
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var burger = document.getElementById('burger');
  var mob = document.getElementById('mobmenu');
  if (burger && mob) {
    burger.addEventListener('click', function () {
      var open = mob.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });
    mob.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mob.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Galerie des pages annonce : clic sur une vignette = image principale */
  var galMain = document.getElementById('galMain');
  if (galMain) {
    var thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var img = btn.querySelector('img');
        if (!img) return;
        galMain.src = img.getAttribute('src');
        galMain.alt = img.getAttribute('alt') || '';
        thumbs.forEach(function (b) { b.setAttribute('aria-current', b === btn ? 'true' : 'false'); });
      });
    });
  }

  /* Formulaires de démonstration : confirmation sans backend.
     À remplacer par le service du webdesigner (Formspree, IAD, etc.). */
  document.querySelectorAll('form[data-mock]').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = f.querySelector('.form-success');
      f.querySelectorAll('.field, .btn, .form-note').forEach(function (el) { el.style.display = 'none'; });
      if (ok) { ok.classList.add('show'); ok.setAttribute('role', 'status'); }
    });
  });
})();
