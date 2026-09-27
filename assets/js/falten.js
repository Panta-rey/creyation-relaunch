/* =============================================================
   Faltung der Visitenkarte 2026: flache Karte → Stuhl (three.js r128)
   Geometrie aus Visitenkarte_Final_2026.ai (55 × 85 mm, Hochformat),
   Punkte in Millimetern: x nach rechts, y nach unten.
   Dick/dünn durchgezogen = nach hinten, gepunktet = nach vorne.
   Faltfolge nach Reys Videos: Front → Seiten → Rückenfalte mit Lehne und Flügeln.
   ============================================================= */
window.KartenFaltung = function (container, texVorne, optionen) {
  var opt = optionen || {};
  var T3 = window.THREE;
  var U = 17.94, XC = 27.5, YC = 57.475;              // 1 Einheit = Sitzbreite
  var deg = Math.PI / 180;

  // ---------- Punkte (mm) ----------
  var P = {
    S1: [18.53, 48.48], S2: [36.47, 48.48], S3: [36.47, 66.47], S4: [18.53, 66.47],
    Fap: [27.5, 85], FL: [13.99, 85], FR: [41.01, 85],
    Lap: [0, 57.47], EL: [0, 43.94], EL2: [0, 70.92],
    Rap: [55, 57.47], ER: [55, 43.94], ER2: [55, 70.92],
    Mfl: [7, 77.96], CBL: [0, 85], Mfr: [48, 77.96], CBR: [55, 85],
    M1: [21.75, 34.71], M2: [33.25, 34.71], B1: [18.53, 21.2], B2: [36.47, 21.2],
    W1: [21.05, 0], W2: [33.95, 0],
    H1: [10.12, 34.7], H2: [44.88, 34.7], KL: [0, 25.76], KR: [55, 25.76],
    PL: [5.11, 0], PR: [49.89, 0], CTL: [0, 0], CTR: [55, 0]
  };
  // Karte → 3D: Stuhlfront (untere Kartenkante) zeigt nach +X, Karte liegt in der Ebene y = 0
  function f(n) { var p = P[n]; return new T3.Vector3((p[1] - YC) / U, 0, (p[0] - XC) / U); }

  // ---------- Flächen ----------
  var FL = {
    sitz: ['S1', 'S2', 'S3', 'S4'],
    frontM: ['S4', 'S3', 'Fap'], frontL: ['S4', 'Fap', 'FL'], frontR: ['S3', 'FR', 'Fap'],
    linksM: ['S1', 'S4', 'Lap'], linksB: ['S1', 'Lap', 'EL'], linksF: ['S4', 'EL2', 'Lap'],
    rechtsM: ['S2', 'Rap', 'S3'], rechtsB: ['S2', 'ER', 'Rap'], rechtsF: ['S3', 'Rap', 'ER2'],
    finL1: ['S4', 'EL2', 'Mfl'], finL2: ['S4', 'Mfl', 'FL'], tipL1: ['EL2', 'CBL', 'Mfl'], tipL2: ['Mfl', 'CBL', 'FL'],
    finR1: ['S3', 'Mfr', 'ER2'], finR2: ['S3', 'FR', 'Mfr'], tipR1: ['ER2', 'Mfr', 'CBR'], tipR2: ['Mfr', 'FR', 'CBR'],
    seg1: ['S1', 'S2', 'M2', 'M1'], seg2: ['M1', 'M2', 'B2', 'B1'], lehne: ['B1', 'B2', 'W2', 'W1'],
    gL: ['S1', 'H1', 'EL'], tLowL: ['S1', 'M1', 'H1'], tUpL: ['B1', 'H1', 'M1'],
    flugL: ['H1', 'KL', 'EL'], streifenL: ['B1', 'W1', 'PL', 'H1'], eckeL: ['H1', 'PL', 'CTL', 'KL'],
    gR: ['S2', 'ER', 'H2'], tLowR: ['S2', 'H2', 'M2'], tUpR: ['B2', 'M2', 'H2'],
    flugR: ['H2', 'ER', 'KR'], streifenR: ['B2', 'H2', 'PR', 'W2'], eckeR: ['H2', 'KR', 'CTR', 'PR']
  };
  var namen = Object.keys(FL);

  // ---------- Geometrie (nicht indiziert: harte Kanten an jeder Falte) ----------
  var tris = [];
  namen.forEach(function (n) {
    var pts = FL[n].map(function (k) { return new T3.Vector2(P[k][0], P[k][1]); });
    T3.ShapeUtils.triangulateShape(pts, []).forEach(function (t) {
      var a = FL[n][t[0]], b = FL[n][t[1]], c = FL[n][t[2]];
      var nrm = new T3.Vector3().subVectors(f(b), f(a)).cross(new T3.Vector3().subVectors(f(c), f(a)));
      if (nrm.y < 0) { var tmp = b; b = c; c = tmp; }
      tris.push([n, a, b, c]);
    });
  });
  var N = tris.length * 3;
  var pos = new Float32Array(N * 3), nor = new Float32Array(N * 3), uv = new Float32Array(N * 2);
  tris.forEach(function (t, i) {
    for (var j = 0; j < 3; j++) {
      var p = P[t[1 + j]];
      uv[(i * 3 + j) * 2] = p[0] / 55; uv[(i * 3 + j) * 2 + 1] = 1 - p[1] / 85;
    }
  });
  var geo = new T3.BufferGeometry();
  geo.setAttribute('position', new T3.BufferAttribute(pos, 3));
  geo.setAttribute('normal', new T3.BufferAttribute(nor, 3));
  geo.setAttribute('uv', new T3.BufferAttribute(uv, 2));

  // ---------- Szene ----------
  var w = container.clientWidth, h = container.clientHeight;
  var renderer = new T3.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: !!opt.debug });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w, h);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T3.PCFSoftShadowMap;
  renderer.outputEncoding = T3.sRGBEncoding;
  container.appendChild(renderer.domElement);
  var scene = new T3.Scene();
  var cam = new T3.PerspectiveCamera(30, w / h, 0.1, 100);

  var zeichnen = function () { renderer.render(scene, cam); };
  var karte = new T3.TextureLoader().load(texVorne, function () { zeichnen(); });
  karte.encoding = T3.sRGBEncoding; karte.anisotropy = 8;
  var matV = new T3.MeshStandardMaterial({ map: karte, roughness: 0.82, metalness: 0, side: T3.FrontSide });
  var matH = new T3.MeshStandardMaterial({ color: 0xf3f2ef, roughness: 0.92, metalness: 0, side: T3.BackSide });
  var meshV = new T3.Mesh(geo, matV), meshH = new T3.Mesh(geo, matH);
  meshV.castShadow = meshH.castShadow = true;
  scene.add(meshV, meshH);

  scene.add(new T3.HemisphereLight(0xffffff, 0xdedad2, 0.75));
  var sonne = new T3.DirectionalLight(0xffffff, 0.75);
  sonne.position.set(3, 7, 4); sonne.castShadow = true;
  sonne.shadow.mapSize.set(2048, 2048);
  var sc = sonne.shadow.camera; sc.left = -5; sc.right = 5; sc.top = 5; sc.bottom = -5; sc.near = 1; sc.far = 20;
  sonne.shadow.bias = -0.0005; sonne.shadow.radius = 6;
  scene.add(sonne);
  var boden = new T3.Mesh(new T3.PlaneGeometry(40, 40), new T3.ShadowMaterial({ opacity: 0.16 }));
  boden.rotation.x = -Math.PI / 2; boden.position.y = -0.002; boden.receiveShadow = true;
  scene.add(boden);

  // ---------- Scharnier-Werkzeuge ----------
  var M4 = T3.Matrix4, V3 = T3.Vector3;
  function rotWelt(punkt, achse, winkel) {
    return new M4().makeTranslation(punkt.x, punkt.y, punkt.z)
      .multiply(new M4().makeRotationAxis(achse.clone().normalize(), winkel))
      .multiply(new M4().makeTranslation(-punkt.x, -punkt.y, -punkt.z));
  }
  function dreh(eltern, p, q, winkel) {                  // Drehung um die Faltlinie p→q (flache Lage)
    var a = f(p), b = f(q);
    return eltern.clone().multiply(rotWelt(a, new V3().subVectors(b, a), winkel));
  }
  function loese(basis, p, q, pt, ziel) {               // Klappe so drehen, dass pt möglichst auf ziel liegt
    var a = f(p).applyMatrix4(basis), b = f(q).applyMatrix4(basis);
    var ax = new V3().subVectors(b, a).normalize();
    var m0 = f(pt).applyMatrix4(basis);
    var v0 = new V3().subVectors(m0, a); v0.sub(ax.clone().multiplyScalar(v0.dot(ax)));
    var v1 = new V3().subVectors(ziel, a); v1.sub(ax.clone().multiplyScalar(v1.dot(ax)));
    var phi = Math.atan2(ax.dot(new V3().crossVectors(v0, v1)), v0.dot(v1));
    return rotWelt(a, ax, phi).multiply(basis);
  }
  // Fläche über drei ihrer Punkte direkt in die Welt legen (stetig, ohne Umschlagen)
  function dreieck(pa, pb, pc, A, B, C) {
    var a = f(pa), e1 = f(pb).sub(a), e2 = f(pc).sub(a), nf = new V3().crossVectors(e1, e2).normalize();
    var W1 = new V3().subVectors(B, A), W2 = new V3().subVectors(C, A), nw = new V3().crossVectors(W1, W2).normalize();
    var Mf = new M4().makeBasis(e1, e2, nf), Mw = new M4().makeBasis(W1, W2, nw);
    var m = Mw.multiply(Mf.invert());
    var t = A.clone().sub(a.clone().applyMatrix4(m));
    m.setPosition(t.x + m.elements[12], t.y + m.elements[13], t.z + m.elements[14]);
    return m;
  }
  function naeher(basis, p, q, winkel, punkt, ref) {     // von ±winkel die Lage, die punkt näher an ref bringt
    var a = dreh(basis, p, q, winkel), b = dreh(basis, p, q, -winkel);
    return f(punkt).applyMatrix4(a).distanceTo(ref) < f(punkt).applyMatrix4(b).distanceTo(ref) ? a : b;
  }
  function trilat(p1, p2, p3, r1, r2, r3, innen) {       // Schnitt dreier Kugeln, Lösung weg von «innen»
    var ex = new V3().subVectors(p2, p1); var d = ex.length(); ex.normalize();
    var t3 = new V3().subVectors(p3, p1); var i = ex.dot(t3);
    var ey = t3.clone().sub(ex.clone().multiplyScalar(i)); var ej = ey.length();
    if (ej < 1e-6) return p1.clone();
    ey.divideScalar(ej); var ez = new V3().crossVectors(ex, ey); var j = ey.dot(t3);
    var x = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
    var y = (r1 * r1 - r3 * r3 + i * i + j * j) / (2 * j) - (i / j) * x;
    var z2 = r1 * r1 - x * x - y * y, z = z2 > 0 ? Math.sqrt(z2) : 0;
    var basis = p1.clone().add(ex.multiplyScalar(x)).add(ey.multiplyScalar(y));
    var s1 = basis.clone().add(ez.clone().multiplyScalar(z)), s2 = basis.clone().sub(ez.clone().multiplyScalar(z));
    if (TRI_VOR) { var d1 = s1.distanceTo(TRI_VOR), d2 = s2.distanceTo(TRI_VOR); if (Math.abs(d1 - d2) > 0.02) return d1 < d2 ? s1 : s2; }   // stetig: nächste Lösung zum Vorbild
    var aussen = s1.distanceTo(innen) > s2.distanceTo(innen) ? s1 : s2, rein = aussen === s1 ? s2 : s1;
    return TRI_REIN ? rein : aussen;
  }
  var TRI_VOR = null, TRI_REIN = false;
  function dist(a, b) { return f(a).distanceTo(f(b)); }
  // Winkel nahe am Sollwert suchen, der die Schliessbedingung am besten erfüllt
  var GEWICHT = 0.3, WINKEL = [0, 0];
  function suche(soll, fehler, gewicht, lo, hi) {
    var gw = gewicht === undefined ? 0.02 : gewicht;
    lo = lo === undefined ? soll - 90 * deg : lo; hi = hi === undefined ? soll + 90 * deg : hi;
    var best = soll, bestK = fehler(soll) + 0, w, k;
    for (var d = -90; d <= 90; d += 2.5) { w = soll + d * deg; if (w < lo || w > hi) continue; k = fehler(w) + gw * Math.abs(d * deg); if (k < bestK) { bestK = k; best = w; } }
    var schritt = 1.25 * deg;
    for (var r = 0; r < 12; r++) {
      [-1, 1].forEach(function (sg) { var w2 = best + sg * schritt; if (w2 < lo || w2 > hi) return; var k2 = fehler(w2) + gw * Math.abs(w2 - soll); if (k2 < bestK) { bestK = k2; best = w2; } });
      schritt *= 0.6;
    }
    return best;
  }
  function clamp(x) { return x < 0 ? 0 : x > 1 ? 1 : x; }
  function ease(x) { x = clamp(x); return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
  function lerp(a, b, t) { return a + (b - a) * t; }

  // ---------- Endlage ----------
  var THE = 84 * deg, TH1 = 40 * deg, HE = 1.04, Lg = (48.48 - 34.71) / U;
  var s1 = f('S1'), s4 = f('S4');
  // Fusspunkte: senkrecht unter den Sitzecken, nur leicht entlang der Schürzen versetzt
  var FUSS = {
    EL2: [s4.x, s4.z - 0.1], FL: [s4.x + 0.1, s4.z],
    ER2: [s4.x, -s4.z + 0.1], FR: [s4.x + 0.1, -s4.z],
    EL: [s1.x, s1.z - 0.1], ER: [s1.x, -s1.z + 0.1]
  };
  function fuss(name, k) { var a = f(name), z = FUSS[name]; return new V3(lerp(a.x, z[0], k), 0, lerp(a.z, z[1], k)); }
  var TIPSG = {};
  function spiegeln(pkt, a, b) {            // Punkt an der Geraden a–b spiegeln (flach)
    var A = f(a), d = f(b).sub(A).normalize(), v = f(pkt).sub(A);
    var fuss = A.clone().add(d.clone().multiplyScalar(v.dot(d)));
    return fuss.clone().multiplyScalar(2).sub(f(pkt));
  }
  var TUCK = { L: spiegeln('H1', 'B1', 'W1'), R: spiegeln('H2', 'B2', 'W2') };
  var LEHNE_END = -80 * deg;                       // Lehne leicht nach hinten geneigt (-90° = senkrecht)
  var SEG2_END = -89 * deg;

  // ---------- Zeitplan: überlappende Phasen, damit die Bewegung nie stehen bleibt ----------
  function glatt(x) { x = clamp(x); return x * x * x * (x * (x * 6 - 15) + 10); }   // smootherstep
  var dauer = 5.9;
  function phasen(s) {
    return { pT: glatt((s - 0.1) / 1.4), pF: glatt((s - 0.8) / 1.5), pS: glatt((s - 1.2) / 1.6), pR: glatt((s - 2.2) / 3.0) };
  }

  // Grundlage aller Flächen bis auf Ecke/Flügel
  function grund(p, fx) {
    fx = fx || {};
    var pF = p.pF, pS = p.pS, pR = p.pR;
    var thF = lerp(TH1 * pF, THE, pR), thS = lerp(TH1 * pS, THE, pR);
    var H = HE * Math.sin((thF + thS) / 2) / Math.sin(THE);
    var Hvor = HE * Math.sin(TH1 * (pF + pS) / 2) / Math.sin(THE);
    var kF = thF / THE, kS = thS / THE;
    var a1 = lerp(Math.asin(Math.min(1, Hvor / Lg)), 90 * deg, pR);
    var a2 = lerp(0, SEG2_END, pR), a3 = lerp(0, LEHNE_END, pR);
    var m = { H: H };
    m.sitz = new M4().makeTranslation(0, H, 0);
    m.seg1 = dreh(m.sitz, 'S1', 'S2', a1);
    m.seg2 = dreh(m.seg1, 'M1', 'M2', a2 - a1);
    m.lehne = dreh(m.seg2, 'B1', 'B2', a3 - a2);
    m.frontM = dreh(m.sitz, 'S4', 'S3', -thF);
    m.linksM = dreh(m.sitz, 'S1', 'S4', -thS);
    m.rechtsM = dreh(m.sitz, 'S2', 'S3', thS);
    m.frontL = loese(m.frontM, 'S4', 'Fap', 'FL', fuss('FL', kF));
    m.frontR = loese(m.frontM, 'S3', 'Fap', 'FR', fuss('FR', kF));
    var kSF = Math.max(kF, kS) * 0.5 + kS * 0.5;
    m.linksF = loese(m.linksM, 'S4', 'Lap', 'EL2', fuss('EL2', kSF));
    m.rechtsF = loese(m.rechtsM, 'S3', 'Rap', 'ER2', fuss('ER2', kSF));
    m.linksB = loese(m.linksM, 'S1', 'Lap', 'EL', fuss('EL', kS));
    m.rechtsB = loese(m.rechtsM, 'S2', 'Rap', 'ER', fuss('ER', kS));
    var innen = new V3(0, H * 0.5, 0);
    var S4w = f('S4').applyMatrix4(m.sitz), S3w = f('S3').applyMatrix4(m.sitz);
    TRI_VOR = null; TRI_REIN = true;                 // Flossen immer nach innen
    var mL = fx.tab ? fx.tab.mL : trilat(S4w, f('EL2').applyMatrix4(m.linksF), f('FL').applyMatrix4(m.frontL), dist('S4', 'Mfl'), dist('EL2', 'Mfl'), dist('FL', 'Mfl'), innen);
    m.finL1 = dreieck('S4', 'EL2', 'Mfl', S4w, f('EL2').applyMatrix4(m.linksF), mL);
    m.finL2 = dreieck('S4', 'Mfl', 'FL', S4w, mL, f('FL').applyMatrix4(m.frontL));
    TRI_VOR = null;
    var mR = fx.tab ? fx.tab.mR : trilat(S3w, f('ER2').applyMatrix4(m.rechtsF), f('FR').applyMatrix4(m.frontR), dist('S3', 'Mfr'), dist('ER2', 'Mfr'), dist('FR', 'Mfr'), innen);
    m.finR1 = dreieck('S3', 'Mfr', 'ER2', S3w, mR, f('ER2').applyMatrix4(m.rechtsF));
    m.finR2 = dreieck('S3', 'FR', 'Mfr', S3w, f('FR').applyMatrix4(m.frontR), mR);
    var tip = 180 * deg * glatt(p.pT);
    // Faltrichtung der Spitzen einmal (im Endzustand) festlegen, damit sie nie umschlägt
    function spitze(name, basis, p, q, punkt) {
      if (!TIPSG[name]) {                         // nach oben (zur bedruckten Seite) vorfalten
        TIPSG[name] = f(punkt).applyMatrix4(rotWelt(f(p), f(q).sub(f(p)), 0.3)).y > 0 ? 1 : -1;
      }
      return dreh(basis, p, q, TIPSG[name] * tip);
    }
    m.tipL1 = spitze('L1', m.finL1, 'EL2', 'Mfl', 'CBL');
    m.tipL2 = spitze('L2', m.finL2, 'Mfl', 'FL', 'CBL');
    m.tipR1 = spitze('R1', m.finR1, 'Mfr', 'ER2', 'CBR');
    m.tipR2 = spitze('R2', m.finR2, 'FR', 'Mfr', 'CBR');
    var S1w = f('S1').applyMatrix4(m.sitz), S2w = f('S2').applyMatrix4(m.sitz);
    TRI_VOR = fx.vor ? fx.vor.hL : null; TRI_REIN = false;
    var hL = fx.tab ? fx.tab.hL : trilat(S1w, f('EL').applyMatrix4(m.linksB), f('M1').applyMatrix4(m.seg1), dist('S1', 'H1'), dist('EL', 'H1'), dist('M1', 'H1'), innen);
    TRI_VOR = fx.vor ? fx.vor.hR : null;
    var hR = fx.tab ? fx.tab.hR : trilat(S2w, f('ER').applyMatrix4(m.rechtsB), f('M2').applyMatrix4(m.seg1), dist('S2', 'H2'), dist('ER', 'H2'), dist('M2', 'H2'), innen);
    TRI_VOR = null; TRI_REIN = false;
    m.pkt = { mL: mL, mR: mR, hL: hL.clone(), hR: hR.clone() };
    // Gegen Ende legen sich die Lehnenstreifen flach hinter die Lehne: H wandert an die Stelle,
    // an die es beim Umklappen des Streifens um die Lehnenkante kommt (knapp hinter der Lehne).
    var wT = glatt((pR - 0.25) / 0.75);
    if (wT > 0) {
      var tL = TUCK.L.clone().applyMatrix4(m.seg2), tR = TUCK.R.clone().applyMatrix4(m.seg2);
      var nrm = new V3(-0.08, 0, 0);                  // knapp hinter die Rückenfalte
      hL = hL.clone().lerp(tL.add(nrm), wT); hR = hR.clone().lerp(tR.add(nrm), wT);
    }
    var S2w_ = S2w;
    m.gL = dreieck('S1', 'H1', 'EL', S1w, hL, f('EL').applyMatrix4(m.linksB));
    m.tLowL = dreieck('S1', 'M1', 'H1', S1w, f('M1').applyMatrix4(m.seg1), hL);
    m.tUpL = dreieck('B1', 'H1', 'M1', f('B1').applyMatrix4(m.seg2), hL, f('M1').applyMatrix4(m.seg2));
    m.streifenL = dreieck('B1', 'W1', 'H1', f('B1').applyMatrix4(m.lehne), f('W1').applyMatrix4(m.lehne), hL);
    m.gR = dreieck('S2', 'ER', 'H2', S2w_, f('ER').applyMatrix4(m.rechtsB), hR);
    m.tLowR = dreieck('S2', 'H2', 'M2', S2w_, hR, f('M2').applyMatrix4(m.seg1));
    m.tUpR = dreieck('B2', 'M2', 'H2', f('B2').applyMatrix4(m.seg2), f('M2').applyMatrix4(m.seg2), hR);
    m.streifenR = dreieck('B2', 'H2', 'W2', f('B2').applyMatrix4(m.lehne), hR, f('W2').applyMatrix4(m.lehne));
    return m;
  }
  // Ecke und Flügel teilen sich den Punkt K
  function eckeFehler(m, str, g, H, Pp, K, E, x) {
    var e = dreh(m[str], H, Pp, x), k = f(K).applyMatrix4(e);
    return k.distanceTo(f(K).applyMatrix4(loese(m[g], H, E, K, k)));
  }
  function eckeSetzen(m, wL, wR) {
    m.eckeL = dreh(m.streifenL, 'H1', 'PL', wL);
    m.flugL = loese(m.gL, 'H1', 'EL', 'KL', f('KL').applyMatrix4(m.eckeL));
    m.eckeR = dreh(m.streifenR, 'H2', 'PR', wR);
    m.flugR = loese(m.gR, 'H2', 'ER', 'KR', f('KR').applyMatrix4(m.eckeR));
    return m;
  }

  // ---------- Vorberechnung der Eckwinkel: stetig von Bild zu Bild, danach geglättet ----------
  var NS = 240, TAB_L = [], TAB_R = [], TAB_P = [];
  function glaette(werte, n) {
    for (var r = 0; r < n; r++) {
      var c = werte.slice();
      for (var j = 1; j < werte.length - 1; j++) werte[j] = (c[j - 1] + 2 * c[j] + c[j + 1]) / 4;
    }
  }
  function punkteBei(s) {
    var x = clamp(s / dauer) * NS, i = Math.min(Math.floor(x), NS - 1), fr = Math.min(1, x - i), o = {};
    ['mL', 'mR', 'hL', 'hR'].forEach(function (k) { o[k] = TAB_P[i][k].clone().lerp(TAB_P[i + 1][k], fr); });
    return o;
  }
  (function vorberechnen() {
    grund({ pT: 1, pF: 0, pS: 0, pR: 0 });             // legt die Spitzenrichtungen fest (flach, nach oben)
    // 1. Flossen- und Beinpunkte stetig verfolgen und glätten
    var vor = null;
    for (var i = 0; i <= NS; i++) { var mm = grund(phasen(dauer * i / NS), { vor: vor }); vor = mm.pkt; TAB_P.push(mm.pkt); }
    ['mL', 'mR', 'hL', 'hR'].forEach(function (k) { ['x', 'y', 'z'].forEach(function (c) {
      var w = TAB_P.map(function (q) { return q[k][c]; }); glaette(w, k.charAt(0) === 'm' ? 400 : 120); TAB_P.forEach(function (q, j) { q[k][c] = w[j]; });
    }); });
    var mEnd = grund({ pT: 1, pF: 1, pS: 1, pR: 1 }, { tab: TAB_P[NS] });
    var hinten = new V3(f('S1').x - 0.9, 1.0, 0);
    function vorzeichen(str, H, Pp, C) {
      return f(C).applyMatrix4(dreh(mEnd[str], H, Pp, 1)).distanceTo(hinten) < f(C).applyMatrix4(dreh(mEnd[str], H, Pp, -1)).distanceTo(hinten) ? 1 : -1;
    }
    var sgL = vorzeichen('streifenL', 'H1', 'PL', 'CTL'), sgR = vorzeichen('streifenR', 'H2', 'PR', 'CTR');
    var wL = 0, wR = 0;
    for (var i = 0; i <= NS; i++) {
      var p = phasen(dauer * i / NS), m = grund(p, { tab: TAB_P[i] }), soll = 175 * deg * p.pR;
      [[1, sgL], [2, sgR]].forEach(function (seite) {
        var links = seite[0] === 1, sg = seite[1], alt = links ? wL : wR, best = alt, bestK = 1e9;
        for (var d = -8; d <= 8; d += 0.5) {
          var x = alt + d * deg;
          var k = (links ? eckeFehler(m, 'streifenL', 'gL', 'H1', 'PL', 'KL', 'EL', x) : eckeFehler(m, 'streifenR', 'gR', 'H2', 'PR', 'KR', 'ER', x)) + 0.15 * Math.abs(x - sg * soll);
          if (k < bestK) { bestK = k; best = x; }
        }
        if (links) wL = best; else wR = best;
      });
      TAB_L.push(wL); TAB_R.push(wR);
    }
    glaette(TAB_L, 120); glaette(TAB_R, 120);
  })();
  function tabelle(t, s) {
    var x = clamp(s / dauer) * NS, i = Math.floor(x), fr = x - i;
    if (i >= NS) return t[NS];
    return t[i] + (t[i + 1] - t[i]) * fr;
  }
  function matrizen(s) {
    var m = grund(phasen(s), { tab: punkteBei(s) });
    return eckeSetzen(m, tabelle(TAB_L, s), tabelle(TAB_R, s));
  }

  // ---------- Papier: alle Flächen teilen sich ihre Eckpunkte ----------
  // Jede Fläche liefert über ihr Scharnier eine Lage für ihre Ecken. Wo sich diese Lagen nicht
  // ganz decken, wird gemittelt; danach stellt eine kurze Relaxation die Kantenlängen wieder her.
  // Das Papier gibt also minimal nach, reisst aber nie: Flächen bleiben an jeder Falte verbunden.
  var VN = Object.keys(P), IDX = {}, NV = VN.length;
  VN.forEach(function (n, i) { IDX[n] = i; });
  var FLACH = VN.map(function (n) { return f(n); });
  var KANTEN = [], gesehen = {};
  tris.forEach(function (t) {
    [[1, 2], [2, 3], [3, 1]].forEach(function (e) {
      var i = IDX[t[e[0]]], j = IDX[t[e[1]]], key = i < j ? i + '_' + j : j + '_' + i;
      if (!gesehen[key]) { gesehen[key] = 1; KANTEN.push([i, j, FLACH[i].distanceTo(FLACH[j])]); }
    });
  });
  var SUM = VN.map(function () { return new V3(); }), ANZ = new Array(NV), PT = VN.map(function () { return new V3(); });
  var ZIEL = VN.map(function () { return new V3(); }), dv = new V3(), SPREIZ = 0, DETAIL = [];
  // Sichtbare Hauptteile (Sitz, Lehne, Schürzen, Beine) sind steif, versteckte Flügel geben nach
  var STEIF = ['S1', 'S2', 'S3', 'S4', 'B1', 'B2', 'W1', 'W2', 'M1', 'M2', 'Lap', 'Rap', 'Fap', 'EL', 'ER', 'EL2', 'ER2', 'FL', 'FR', 'Mfl', 'Mfr', 'H1', 'H2'];
  var ZUG = VN.map(function (n) { return STEIF.indexOf(n) >= 0 ? 0.6 : 0.25; });
  function papier(m) {
    var i, it;
    for (i = 0; i < NV; i++) { SUM[i].set(0, 0, 0); ANZ[i] = 0; }
    var lagen = VN.map(function () { return []; });
    namen.forEach(function (n) {
      FL[n].forEach(function (k) { var v = f(k).applyMatrix4(m[n]); i = IDX[k]; SUM[i].add(v); ANZ[i]++; lagen[i].push(v); });
    });
    SPREIZ = 0; DETAIL = [];
    for (i = 0; i < NV; i++) {
      PT[i].copy(SUM[i]).divideScalar(ANZ[i]); ZIEL[i].copy(PT[i]);
      for (var a = 0; a < lagen[i].length; a++) { var dd = lagen[i][a].distanceTo(PT[i]); if (dd > 0.05) DETAIL.push(VN[i] + '=' + dd.toFixed(2)); SPREIZ = Math.max(SPREIZ, dd); }
    }
    for (it = 0; it < 30; it++) {
      for (var k = 0; k < KANTEN.length; k++) {
        var e = KANTEN[k], pa = PT[e[0]], pb = PT[e[1]];
        dv.subVectors(pb, pa); var l = dv.length(); if (l < 1e-9) continue;
        var c = (l - e[2]) / l * 0.5; pa.addScaledVector(dv, c); pb.addScaledVector(dv, -c);
      }
      for (i = 0; i < NV; i++) { PT[i].lerp(ZIEL[i], ZUG[i]); if (PT[i].y < 0) PT[i].y = 0; }
    }
    return PT;
  }

  var tmp = new V3(), e1 = new V3(), e2 = new V3(), NUR = null;
  function setze(sek) {
    var m = matrizen(sek);
    var pt = papier(m);
    tris.forEach(function (t, i) {
      for (var j = 0; j < 3; j++) {
        tmp.copy(pt[IDX[t[1 + j]]]);
        if (NUR && NUR.indexOf(t[0]) < 0) tmp.set(0, 0, 0);
        pos[(i * 3 + j) * 3] = tmp.x; pos[(i * 3 + j) * 3 + 1] = tmp.y; pos[(i * 3 + j) * 3 + 2] = tmp.z;
      }
      var o = i * 9;
      e1.set(pos[o + 3] - pos[o], pos[o + 4] - pos[o + 1], pos[o + 5] - pos[o + 2]);
      e2.set(pos[o + 6] - pos[o], pos[o + 7] - pos[o + 1], pos[o + 8] - pos[o + 2]);
      e1.cross(e2).normalize();
      for (var j2 = 0; j2 < 3; j2++) { nor[o + j2 * 3] = e1.x; nor[o + j2 * 3 + 1] = e1.y; nor[o + j2 * 3 + 2] = e1.z; }
    });
    geo.attributes.position.needsUpdate = true; geo.attributes.normal.needsUpdate = true;
    geo.computeBoundingSphere();
  }

  // ---------- Kamera: von der Längsseite (Karte quer) zur Stuhlfront ----------
  function kamera(k) {
    var az = lerp(90, 28, k) * deg, el = lerp(58, 15, k) * deg, asp = cam.aspect;
    var d = lerp(8.6 * Math.max(1, 1.45 / asp), 7.4 * Math.max(1, 1.15 / asp), k);
    var ziel = new V3(lerp(-0.83, -0.25, k), lerp(0, 0.95, k), 0);
    cam.position.set(ziel.x + d * Math.cos(el) * Math.cos(az), ziel.y + d * Math.sin(el), ziel.z + d * Math.cos(el) * Math.sin(az));
    cam.lookAt(ziel);
  }

  function zustand(s) {
    setze(s);
    kamera(glatt(clamp((s - 0.2) / (dauer - 0.4))));
  }

  var t0 = null, laeuft = false, fertigCb = null;
  function schritt(ts) {
    if (!laeuft) return;
    if (t0 === null) t0 = ts;
    var s = (ts - t0) / 1000;
    zustand(Math.min(s, dauer)); zeichnen();
    if (s < dauer) requestAnimationFrame(schritt);
    else { laeuft = false; if (fertigCb) fertigCb(); }
  }
  zustand(0); zeichnen();
  window.addEventListener('resize', function () {
    var w2 = container.clientWidth, h2 = container.clientHeight;
    renderer.setSize(w2, h2); cam.aspect = w2 / h2; cam.updateProjectionMatrix(); zeichnen();
  });

  return {
    dauer: dauer,
    start: function (cb) { fertigCb = cb; t0 = null; laeuft = true; requestAnimationFrame(schritt); },
    stopp: function () { laeuft = false; },
    zeige: function (s) { zustand(s); zeichnen(); },
    nur: function (l) { NUR = l; },
    namen: function () { return VN; },
    roh: function (s) { var m = matrizen(s), o = {}; namen.forEach(function (n) { o[n] = FL[n].map(function (k) { var v = f(k).applyMatrix4(m[n]); return [v.x, v.y, v.z]; }); }); return o; },
    punkte: function (s) { setze(s); return PT.map(function (v) { return [v.x, v.y, v.z]; }); },
    spreizung: function (s) { zustand(s); return SPREIZ; },
    detail: function (s) { zustand(s); return DETAIL.join(' '); },
    blick: function (az, el, d) { var z = new V3(-0.25, 0.8, 0); az *= deg; el *= deg;
      cam.position.set(z.x + d * Math.cos(el) * Math.cos(az), z.y + d * Math.sin(el), z.z + d * Math.cos(el) * Math.sin(az)); cam.lookAt(z); zeichnen(); }
  };
};
