/* Creyation Gafner – Skript für alle Seiten */
(function () {
  var kopf = document.getElementById('kopf');
  var buehne = document.getElementById('buehne');

  // ---------- Menü (mobil) ----------
  var menue = document.querySelector('.menue'), nav = document.getElementById('nav');
  if (menue && nav) {
    menue.addEventListener('click', function () {
      var offen = nav.classList.toggle('offen');
      menue.setAttribute('aria-expanded', offen); menue.textContent = offen ? 'Schliessen' : 'Menü';
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('offen'); menue.setAttribute('aria-expanded', false); menue.textContent = 'Menü'; }
    });
  }

  // ---------- Einstieg: Karte faltet sich zum Stuhl, Stuhl wird Logo ----------
  if (buehne && kopf) {
    var knopf = document.getElementById('steuerung');
    var timer = [], falt = null;
    var ruhig = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var kopfZeigen = function () { kopf.classList.add('sichtbar'); };
    var abschluss = function () {
      buehne.classList.add('play', 'nacht', 'licht', 'fertig');
      if (knopf) knopf.textContent = 'Nochmals abspielen';
      kopfZeigen();
    };
    var sofort = function () {
      timer.forEach(clearTimeout); timer = [];
      if (falt) falt.stopp();
      buehne.classList.add('sofort');
      abschluss();
    };
    var abspielen = function () {
      timer.forEach(clearTimeout); timer = [];
      buehne.className = 'buehne';
      void buehne.offsetWidth;
      buehne.classList.add('play');
      if (knopf) knopf.textContent = 'Überspringen';
      try {
        if (!falt) falt = window.KartenFaltung(document.getElementById('falt3d'), buehne.getAttribute('data-karte'));
      } catch (e) { sofort(); return; }           // ohne WebGL: direkt das Logo
      falt.zeige(0);
      falt.start(function () {
        buehne.classList.add('nacht');
        timer.push(setTimeout(function () { buehne.classList.add('licht'); }, 700));
        timer.push(setTimeout(abschluss, 1900));
      });
    };
    if (knopf) knopf.addEventListener('click', function () {
      if (buehne.classList.contains('fertig')) abspielen(); else sofort();
    });
    // nur beim ersten Besuch abspielen; danach direkt das Logo
    var gesehen = false;
    try { gesehen = sessionStorage.getItem('cg-einstieg') === '1'; sessionStorage.setItem('cg-einstieg', '1'); } catch (e) {}
    if (ruhig || gesehen || !window.KartenFaltung) sofort(); else abspielen();
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (e) {
        kopf.classList.toggle('hell', !e[0].isIntersecting);
        if (!e[0].isIntersecting) kopfZeigen();
      }, { rootMargin: '-64px 0px 0px 0px' }).observe(buehne);
    } else { kopfZeigen(); }
  }

  // ---------- Projektfilter ----------
  var filter = document.querySelectorAll('.filter button');
  if (filter.length) {
    var karten = document.querySelectorAll('.karte');
    var setze = function (k) {
      filter.forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-filter') === k); });
      karten.forEach(function (c) { c.hidden = !!k && (' ' + c.getAttribute('data-kategorien') + ' ').indexOf(' ' + k + ' ') < 0; });
    };
    filter.forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-filter'); setze(k);
        try { history.replaceState(null, '', k ? '?k=' + k : location.pathname); } catch (e) {}
      });
    });
    var start = new URLSearchParams(location.search).get('k');
    if (start) setze(start);
  }

  // ---------- Grossansicht der Projektbilder ----------
  var dlg = document.getElementById('gross'), liste = document.getElementById('bildliste');
  if (dlg && liste && dlg.showModal) {
    var bilder = JSON.parse(liste.textContent), idx = 0, img = dlg.querySelector('img');
    var zeige = function (i) { idx = (i + bilder.length) % bilder.length; img.src = bilder[idx]; };
    document.querySelectorAll('[data-gross]').forEach(function (el) {
      el.addEventListener('click', function () { zeige(parseInt(el.getAttribute('data-gross'), 10) || 0); dlg.showModal(); });
    });
    dlg.querySelector('.zu').addEventListener('click', function () { dlg.close(); });
    dlg.querySelector('.vor').addEventListener('click', function () { zeige(idx + 1); });
    dlg.querySelector('.rueck').addEventListener('click', function () { zeige(idx - 1); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight') zeige(idx + 1); if (e.key === 'ArrowLeft') zeige(idx - 1); });
  }

  // ---------- Kontaktformular: über den Formulardienst, sonst über das E-Mail-Programm ----------
  var form = document.getElementById('formular');
  if (form) {
    var status = form.querySelector('.status');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      if (!String(d.get('name')).trim() || !String(d.get('nachricht')).trim()) { status.textContent = 'Bitte Name und Nachricht ausfüllen.'; return; }
      if (!form.email.checkValidity() || !String(d.get('email')).trim()) { status.textContent = 'Bitte die E-Mail-Adresse prüfen.'; form.email.focus(); return; }
      var betreff = d.get('anliegen') + ' – Anfrage von ' + d.get('name');
      var ziel = form.getAttribute('data-ziel');
      if (ziel && window.fetch) {
        d.append('_subject', betreff);
        var knopf = form.querySelector('button[type=submit]'); knopf.disabled = true; status.textContent = 'Wird gesendet …';
        fetch(ziel, { method: 'POST', body: d, headers: { 'Accept': 'application/json' } }).then(function (r) {
          if (!r.ok) throw new Error('Fehler ' + r.status);
          form.reset(); status.className = 'status danke'; status.textContent = 'Danke für Ihre Nachricht. Ich melde mich persönlich bei Ihnen.';
        }).catch(function () {
          status.textContent = 'Das Senden hat nicht geklappt. Bitte schreiben Sie direkt an rey@creyation.ch.';
        }).then(function () { knopf.disabled = false; });
        return;
      }
      var text = d.get('nachricht') + '\n\n—\n' + d.get('name') + '\n' + d.get('email');
      window.location.href = 'mailto:rey@creyation.ch?subject=' + encodeURIComponent(betreff) + '&body=' + encodeURIComponent(text);
      status.textContent = 'Ihr E-Mail-Programm wurde geöffnet. Senden Sie die Nachricht dort ab.';
    });
  }

  // ---------- Produkte: Farbwahl ----------
  document.querySelectorAll('.produktkarte').forEach(function (karte) {
    var knoepfe = karte.querySelectorAll('.farbe'), bildEl = karte.querySelector('[data-produktbild]'), name = karte.querySelector('.farbname'), anfrage = karte.querySelector('[data-produkt]');
    knoepfe.forEach(function (b) {
      b.addEventListener('click', function () {
        knoepfe.forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        bildEl.src = b.getAttribute('data-bild'); name.textContent = b.getAttribute('data-name');
        if (anfrage) anfrage.href = anfrage.href.split('?')[0] + '?produkt=' + encodeURIComponent(anfrage.getAttribute('data-produkt') + ', Farbe ' + b.getAttribute('data-name')) + '#kontakt';
      });
    });
  });

  // ---------- Anfrage aus der Produktseite vorausfüllen ----------
  var produkt = new URLSearchParams(location.search).get('produkt');
  var formular = document.getElementById('formular');
  if (produkt && formular) {
    var radio = document.getElementById('a3'); if (radio) radio.checked = true;
    var feld = document.getElementById('f-text');
    if (feld && !feld.value) feld.value = 'Guten Tag Herr Gafner\n\nIch interessiere mich für: ' + produkt + '\n\n';
  }

  // ---------- Casa del Paw: Stoff und Holz wählen ----------
  var konfDaten = document.getElementById('konf-daten');
  if (konfDaten) {
    var K = JSON.parse(konfDaten.textContent), wahl = { stoff: 'haifa', holz: 'natur' };
    var name = function (liste, id) { for (var i = 0; i < liste.length; i++) if (liste[i].id === id) return liste[i].name; return id; };
    var zeigeKonf = function () {
      var st = name(K.daten.stoffe, wahl.stoff), hz = name(K.daten.holz, wahl.holz);
      var datei = K.daten.kombis[wahl.stoff + '|' + wahl.holz], genau = !!datei;
      if (!datei) datei = K.daten.kombis[wahl.stoff + '|natur'];
      var foto = document.getElementById('konf-foto');
      foto.src = K.basis + datei; foto.alt = 'Katzensofa, Stoff ' + st + ', Holz ' + (genau ? hz : 'Natur');
      document.getElementById('konf-legende').textContent = genau ? st + ', Holz ' + hz : 'Foto: ' + st + ' mit Holz Natur. Ihr Sofa wird in ' + hz + ' gefertigt, siehe Holzmuster.';
      document.getElementById('stoff-name').textContent = st; document.getElementById('holz-name').textContent = hz;
      document.getElementById('holz-foto').src = K.basis + 'holz-' + wahl.holz + '.jpg';
      document.getElementById('holz-foto').alt = 'Holzton ' + hz + ' im Detail';
      document.getElementById('konf-anfrage').href = K.kontakt + '?produkt=' + encodeURIComponent('Casa del Paw Katzensofa, Stoff ' + st + ', Holz ' + hz);
    };
    document.querySelectorAll('[data-stoff]').forEach(function (b) {
      b.addEventListener('click', function () { wahl.stoff = b.getAttribute('data-stoff'); document.querySelectorAll('[data-stoff]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); zeigeKonf(); });
    });
    document.querySelectorAll('[data-holz]').forEach(function (b) {
      b.addEventListener('click', function () { wahl.holz = b.getAttribute('data-holz'); document.querySelectorAll('[data-holz]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); }); zeigeKonf(); });
    });
  }

  var jahr = document.getElementById('jahr');
  if (jahr) jahr.textContent = new Date().getFullYear();
})();
