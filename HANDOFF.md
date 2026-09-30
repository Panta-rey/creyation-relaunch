# Handoff: Creyation Gafner – Website www.creyation.ch

Stand: 27. September 2026
Inhaber: Rey Gafner MSc UZH, Creyation Gafner
Büro (Handelsregister, Impressum): Dörflistrasse 1C, 8903 Birmensdorf
Werkstatt: Stifelacher 3, 8132 Hinteregg
Kontakt: rey@creyation.ch, +41 76 427 49 00 (Nummer auf der Visitenkarte; ob sie auf die Website kommt, ist offen)
Domain: **www.creyation.ch** (Cyon) · Hosting: **GitHub Pages**, Repository **github.com/Panta-rey/creyation** · E-Mail: **Google Workspace**

> **Aktueller Status (27.09.2026):** Die Website läuft auf www.creyation.ch, HTTPS ist erzwungen («Enforce HTTPS» aktiv), die Bilder werden lokal aus `bilder/` geladen und korrekt angezeigt. Technisch ist die Umstellung von Wix damit abgeschlossen.
>
> **Relaunch, Stand 27.09.2026 (alle Hauptseiten stehen: Start, Projekte, Produkte, Casa del Paw, Über mich, Kontakt, Impressum, Datenschutz; D20, D21; Faltung v3.2 angenommen; Schrift Open Sans; Kundenliste, Impressum-Adresse, Inszenierung und «Mülli» entschieden):** DNA erarbeitet (Teil I), **Konzept von Rey freigegeben** («alles andere ist Detail oder Geschmack, wenn ich die Umsetzung sehe»), **Prototyp der Startseite v2 mit echter 3D-Faltung** (D17, D18). **Neu:** ältere Portfolios (Juli 2021, Januar 2023) und das **Camperbau-Portfolio (März 2023)** ausgewertet (Ergänzungen in D2, D4, D5, D6, D8, D13); Rey hat die **Faltkarte 2026 überarbeitet** und drei Faltvideos geliefert (Analyse in D19), Faltung v3 danach umgesetzt. Nächste Schritte: Reys Rückmeldung zur Faltung, bessere Projektbilder von Rey (D18), Schriftwahl.
>
> **Hintergrund Relaunch:** Die aktuelle Seite zeigt nur einen Bruchteil der Arbeit (4 von über 40 Projekten, Stand 2019) und passt gestalterisch nicht zum eigenen Stil. Ziel ist, die Seite «auf das nächste Level» zu bringen. Auf Wunsch von Rey **ohne Eile**: Zuerst wurde das Bild von Firma, Person und Können erarbeitet (Teil I, «DNA»), danach das Konzept, jetzt die Umsetzung Schritt für Schritt. Vorgehen: Konzept → Gestaltungsrichtung → Prototyp Startseite → restliche Seiten → Recht und Go-live; nach jedem Schritt gibt Rey frei. **Die Live-Seite ist noch unverändert.**
>
> Dieses Dokument besteht aus zwei Teilen: **Teil I** hält die DNA von Creyation Gafner fest und was daraus für die Website folgt. **Teil II** ist die technische Dokumentation (Wix-Übernahme, Git, DNS, Betrieb).

Dieses Dokument liegt lokal im Projektordner (per `.gitignore` ausgeschlossen) und in Google Drive. Es ist ein Arbeitsdokument und gehört nicht öffentlich ins Repository.

---

# Teil I – Die DNA von Creyation Gafner

Erarbeitet im September 2026 aus: Portfolio (PDF, 68 Seiten, 19.11.2023), Casa-del-Paw-Dossier (PDF), Instagram-Screenshots @creyationgafner (2019–2026), Renderings (T4-Bett, GZD Microcorner, Abfallsackhalter), zwei Kostenvoranschlägen (März 2024), Visitenkarte, Logo und Gesprächen mit Rey. Die Aussagen wurden mit Rey besprochen und von ihm korrigiert bzw. ergänzt.

## D1. Kurzprofil

Creyation Gafner entwickelt und baut Lösungen, die es so noch nicht gibt. Rey Gafner sieht ein Problem, denkt es neu und setzt es um: von der ersten Skizze über CAD, CNC-Fräse und 3D-Drucker bis zu Licht, Elektronik und Automatisierung. Vom Ersatzteil in Handgrösse bis zur 4,5 Meter hohen Skulptur, für Innenarchitekturbüros, Marken, Events, Camperausbau und Private. Selbstständig seit 2017.

## D2. Der Kern: Lösungen und Produkte, die es noch nicht gibt

Reys eigene Worte: «Ich finde gerne Lösungen oder entwerfe Produkte, die es noch nicht gibt.» Das ist der rote Faden durch alle Bereiche. Die Standbeine (D4) sind nur die Orte, an denen sich das zeigt.

Beispiele, jeweils als Frage und Lösung:

| Die Frage | Die Lösung |
|---|---|
| Der Spuckschutz fällt um. | Er greift sich selbst an die Theke (Greifender Spuckschutz). |
| Handtücher in der Physio werden verwechselt. | Jedes Fach hat ein Whiteboard-Dreieck für die Initialen (Medifit). |
| Ein Katzenhaus kühlt beim Lüften aus. | Selbst entwickelter Wärmetauscher: Die warme Abluft wärmt die kalte Frischluft vor. |
| Autodüfte für ätherische Öle in besonderer Form gibt es kaum. | Die ätherische Toilette (3D-Druck, Filzeinlage, Lüftungsclip). |
| Der Wasserpegel im Koiteich lässt sich nicht einstellen. | «Thirsty Koi»: Oberflächenablauf, höhenverstellbar per Gewinde, für 100er-Rohr. |
| Ein Ersatzteil ist nicht mehr lieferbar. | Es wird gedruckt (Ersatzteile, Fensterverriegelung Yanmar-Bagger). |
| Der Bildschirm soll zum Kunden drehen. | Holz-Kugellager, 3D-Druck plus CNC (Splenius). |
| Im Camper braucht es Sofa und Bett. | Vollautomatisches Bett, wandelt sich auf Knopfdruck zum Sofa (Stellmotoren, Arduino). |
| Eine Visitenkarte soll «Have a seat» verkörpern. | Sie lässt sich ohne Schnitt zu einem Stuhl falten. |
| Eine ungenutzte Aussenfläche soll im Winter nutzbar sein. | Modulares, zerlegbares Chalet 12 × 6 × 4,5 m. |
| Die Monitorboxen eines DJs sollen genau auf Ohrhöhe stehen. | Plattenregal und Boxenständer in einem, Höhe auf Troys Ohren abgestimmt, Boxen auf vergrössertem Kugellager ausrichtbar (2018). |
| Der mobile Router im Camper soll sich von selbst mit der Aussenantenne verbinden. | Halter, der beim Einstecken die Antennenstecker automatisch kontaktiert (2021). |
| Ein zweites Lautsprechersystem im Camper wäre teuer. | Modularer Deckenhalter, in den der vorhandene Lautsprecher eingespannt und per Stellschrauben ausgerichtet wird (2021). |
| Ein Ersatzteil für den VW Golf 2 wird nicht mehr hergestellt. | Neu konstruiert und gedruckt: «Man sollte Sorge tragen zu seinen Dingen und sie reparieren, anstatt sie fortzuwerfen.» (2020) |
| Windgeräusche am Dachträger des VW T4. | CNC-gefräste Windabweiser aus Acrylglas, passend zum Träger. |
| Die originalen Lüftungen im Camper blasen an die falsche Stelle. | Passgenaue, 3D-gedruckte Luftkanäle leiten die Luft dorthin, wo sie gebraucht wird. |
| Eine Toilette soll zum Erlebnis werden. | Bewegungsgesteuerte Diskotoilette mit Diskokugeln, Sound und Goldglitzerboden (Restaurant Krokodil, 2017). |

**Schluss für die Website:** Diese Erzählform («Die Frage / Die Lösung») macht das Denken sichtbar und ist für Innenarchitekten und Firmen das stärkste Argument: Hier denkt jemand mit, statt nur auszuführen.

## D3. Leitsätze

- **Claim:** «Have a seat – dream – we talk – I build». Beschreibt den tatsächlichen Arbeitsablauf (Gespräch, Idee, Visualisierung und Offerte, Bau). Bleibt englisch.
- **Haltung gegenüber Kunden:** «Keine Idee ist zu fantasievoll.» (aus Reys eigenen Projekttexten)
- **Zusammen:** Deine Idee darf verrückt sein, ich finde den Weg, sie zu bauen.
- **«Realizing dreams since 1991»:** 1991 ist Reys Geburtsjahr, nicht das Gründungsjahr. Ein Augenzwinkern, das so bleiben kann.

## D4. Vier Standbeine (Camperausbau seit 27.09.2026 wieder aktiv)

**1. Umsetzung und Spezialanfertigung für Innenarchitektur**
Das Innenarchitektur- oder Planungsbüro plant, Creyation Gafner setzt um, und zwar die Spezialanfertigungen, die kein Standardbetrieb macht. Rey möchte das ausdrücklich vermehrt machen.
Referenzen: Mybikeplan-Store Zürich (Umsetzung, Projekt lief über ein Innenarchitekturbüro), Space 2.0 (Club-Umbau, hinterleuchtetes Wandverkleidungssystem), Das Viertel Basel, Bains & Douches (Space Monki), Uhrenvitrine, Handtuchgestell Medifit, Bildschirmerhöhung Splenius, DJ-Pult (ohne Kundennamen), Leichtbau-Campermöbel für Camper&Cars.

**2. Inszenierung für Firmen, Marken und Events**
Skulpturen, Inszenierungen, Bühnenbilder, «Centerpieces», Markenauftritte, temporäre Bauten. Oft mit Licht als Teil der Idee.
Referenzen: Kolibri (Terrazzza 2019, 4,5 m, mit Makita-Unterstützung), Deckeninstallation Netzwerk Basel (Kunstinstallation), Telefonhörer (5,5 m), Leuchtschrift Tension Festival (4 m), Motion Beach Davos, Wald-Shotbar (Jägermeister), Albert's Space Bar (Red Bull), Leuchtbox Watson, Modulares Chalet, Modular Festival (Bauleitung), FIFA Fanvillage (Konzept und Visualisierung). Aus den älteren Portfolios zusätzlich: Teekanne (begehbarer Raum im Raum), Tree of Life (Schwemmholzbaum mit pflückbaren Früchten), Blätterdach- und Hanfblattlounge, pulsierender Eingangstunnel mit LED-Lichtbögen, beleuchtete Heissluftballon-Modelle, «Lost in dimensions» (Clubeingang), Lichtinstallation Bananenplanet (mit Red Bull), Diskotoilette.
**Loungedesign** ist ein wiederkehrendes Thema (Blätterdach, Hanfblatt, Urban Jungle, Labyrinth Lounge, Ruheraum) und passt zu Standbein 1 und 2.

**3. Eigene Produkte, auf Bestellung gefertigt**
Drei Linien: Home, Haustiere, Werkstatt (Details D9). Für die begrenzte Kapazität (D11) besonders geeignet: einmal entwickelt, dann auf Bestellung gefertigt. Rey möchte die Produkte verkaufen und hat weitere Ideen in Entwicklung.

**4. Camperausbau (von Rey am 27.09.2026 bestätigt: wird wieder aktiv angeboten)**
Ausbauten und Einzelteile für Vans und Camper, für Ausbaubetriebe (Camper&Cars) und Private. Ablauf: Fahrzeug vermessen → grob planen → in SketchUp zeichnen und rendern → mit dem Kunden besprechen → CNC-fräsen → Möbel exakt wie visualisiert fertigen und einbauen; dazu 3D-gedruckte Halterungen, Luftkanäle, Windabweiser, Router- und Lautsprecherhalter.
Referenzen: VW T4 Camperumbau (eigener erster T4, Arvendecke, Entertainmentsystem, modulares bzw. automatisches Bett), Leichtbau-Campermöbel für Camper&Cars, Kastenwagen-Ausbau (Planung bis Einbau), Windabweiser, Luftführung, Halterungen, Custom-Campers-Emblem.
Hintergrund: **Camperbau** war 2023 ein eigener Schwerpunkt mit eigenem Portfolio (März 2023, 30 Seiten, mit Telefonnummer und Makita-Sponsoring): Vermessen, grob planen, in SketchUp zeichnen und rendern, dann CNC-fräsen und die Möbel exakt wie visualisiert fertigen; dazu gedruckte Halterungen, Luftkanäle, Windabweiser, Router- und Lautsprecherhalter. Zielgruppe: Camper-Ausbauer (Camper&Cars) und private Vanbesitzer.

## D5. Können (Fundament)

- **Planung:** Visualisierung in SketchUp und Rhino, CAD, Engineering. Der Kunde sieht vorher, was entsteht. Beispiel Camperbau (Portfolio 2023): «Nachdem das Fahrzeug vermessen und grob geplant wurde», entsteht die SketchUp-Zeichnung; sie dient dem Gespräch mit dem Kunden, der optimalen Raumausnutzung und direkt der Fertigung. «Die Visualisierung gefällt den Kunden, dann können die Möbel genau so gefertigt werden.»
- **Fertigung:** CNC-Fräsen (Arbeitsbereich 2800 × 1500 × 200 mm; Holz, Kunststoff, Aluminium), 3D-Druck (Prusa), Möbelbau und Konstruktion, Faserverbund (z. B. XPS mit Glasfaser und Harz).
- **Technik:** Integration von Licht und LED, Sensorik und Automatisierung in eigenen Entwicklungen (Stellmotoren und Arduino, Wärmerückgewinnung, Luftqualitätsmessung).
- **Projektleitung und Partner:** Was ausserhalb der eigenen Werkstatt liegt, übernehmen Partnerbetriebe; die Koordination bleibt in einer Hand. Im Portfolio als «Planung und Leitung» geführt.
- **Software (laut CV 2021):** SketchUp, Autodesk Fusion 360 (CAD/CAM), Adobe Photoshop, InDesign, Illustrator, DaVinci Resolve (Video).
- **Frühere Leistungsliste (2021):** Firmenauftritte, Messestand/-design, Loungedesign, Skulpturen, Installationen, Möbelbau, Camperausbau, Engineering und 3D-Druck, CAD, visuelle Konzepte, CNC, beständige Raumausbauten, komplette Renovationen.
- **Hintergrund:** MSc UZH in Biologie. Ein naturwissenschaftlicher Kopf, der mit den Händen denkt (Instagram: #biologistgonewild). Matura mit musischem Profil, Schwerpunkt bildnerisches Gestalten (KZO). Erfahrung im Vermitteln: Nachhilfe- und Stützlehrer, Schulpraktika für «Forschung für Leben». Privatpilot.

**Ausdrücklich NICHT als eigene Leistung anbieten** (Rey gibt das an Partnerfirmen ab): **Polstern, Lackieren, Steuerungen für Lichtinstallationen.** Produkttexte (z. B. Katzensofa) so formulieren, dass keine dieser Leistungen versprochen wird. Hinweis: Das Portfolio 2023 schreibt beim Katzensofa, die Polsterarbeiten seien selbst gemacht; das nicht übernehmen.

## D6. Die Handschrift

- **Gesteckt statt geschraubt:** CNC-gefräste Plattenteile, leicht, zerlegbar, erweiterbar, oft mit Dreieck-Ausschnitten oder weichen Rundungen. Vom Chalet (2019) über XIPE, T4-Bett, Kleiderständer bis zum Infostand.
- **Aus der Fläche in den Raum:** Flache Teile, ob Papier oder Platten, werden ohne Umweg zum Objekt. Ursprung ist die eigene Visitenkarte (D7).
- **Wandelbar:** Ein Objekt, viele Lesarten oder Zustände. Das Logo zeigt Lampe, Tisch und Stuhl zugleich; die Karte wird zum Stuhl; das Bett zum Sofa; das Chalet zu Einzelteilen; XIPE wächst mit.
- **Licht als Idee, nicht als Zusatz:** Funken-Stroboskope im Netzwerk, musikgesteuerte Leuchtschrift, App-gesteuerte Watson-Box, Kristallhöhle, XIPE, Lichtwände bei Mybikeplan und Space 2.0. Die Idee und die Integration stammen von Rey, Steuerungen von Partnern.
- **Humor mit Präzision:** «Einzelzimmer zu vermieten» (Katzenhaus), «Thirsty Koi – Garantiert durstig», «Free eye treatment for your patients».
- **Reparieren statt wegwerfen:** Ersatzteile neu konstruieren und drucken (Golf 2, Yanmar, diverse), Schlüsselanhänger aus recyceltem Filament alter Skischuhe (Label «Reversed», später Werbegeschenk für Creamelt). Haltung aus dem Portfolio 2021: Jeder soll seine Dinge reparieren können.
- **Massgenau für den Menschen:** Nicht Standardmasse, sondern die Person: Boxenständer auf Ohrhöhe (Troy), Uhrenvitrine im 45-Grad-Winkel, Handtuchfächer mit Initialen.
- **Namen mit Geschichte** (Deutung, von Rey noch zu bestätigen): XIPE (Xipe Totec, aztekischer Gott der Vegetation und Erneuerung) für ein Anzuchtregal; MOTU TANE (Tāne, Māori-Gott des Waldes) für einen Holztisch; Splenius (Nackenmuskel) für eine Bildschirmerhöhung; Vitruvius (römischer Architekt) für einen Säulentisch.

## D7. Markenzeichen und visuelle Identität

**Firmenname:** **Creyation Gafner** (nicht nur «Creyation»). Überall so verwenden. Frühe Instagram-Beiträge tragen noch #creyatione.

**Logo** (von Rey selbst entworfen): hochformatig, weiss auf Schwarz mit Rahmen; oben ein Dreieck mit hängender Glühbirne (Lampe), darunter eine Form, die sich als Tisch oder Stuhl lesen lässt, dazwischen «CREYATION / GAFNER». Ein **Kippbild**, bewusst vielfältig. Zusammen gelesen zeigt es eine Szene: ein Tisch unter einer Lampe, ein Stuhl zum Hinsetzen, also der Ort von «Have a seat – dream – we talk». Vorliegende Datei: `Logo_für_T-Shirt_Druck_Logo_final_dicker_Rahmen.png` (1023 × 2173 px, weiss auf transparent). Geplant: exakter SVG-Nachbau aus dieser Datei, Freigabe durch Rey vor jedem Einsatz.

**Herkunft des Logos (von Rey bestätigt):** Der Stuhl im Logo ist aus dem gefalteten Stuhl der Visitenkarte abgeleitet. Gefaltet: lange, leicht konische Holzfläche = Rückenlehne, quadratische Holzfläche = Sitz, die weissen Dreiecksfelder falten sich unter dem Sitz zu vier Beinen, die sich leicht nach aussen spreizen; die dicken Linien zeichnen die Aussenkanten der Beine nach. Karte, Faltstuhl und Logo sind damit eine zusammenhängende Geschichte: Papier → Stuhl → Zeichnung → Logo. Für die Einstiegsanimation (D15) ist der Übergang vom gefalteten Stuhl ins Logo also die Rückkehr zum Ursprung. Referenzfoto der Endstellung: `IMG_1428_censored_2.jpg` (leicht erhöht von vorne; im Vordergrund die alte Kartenrückseite mit sichtbaren, von Hand geritzten Faltlinien).

**Visitenkarte (2018):** Vorderseite ist ein Faltmuster mit Holztextur. Durchgezogene Linien nach hinten, gestrichelte nach vorne falten, ohne Schnitt entsteht ein Stuhl, sinnbildlich für «Have a seat». Faltlinien ursprünglich von Hand geritzt, jede Karte ein Unikat. Rückseite: Claim, Wortmarke CREYATION / GAFNER, Name, E-Mail, Telefon, Web, Instagram-QR-Code, schwarzer Rahmen. Laut Rey zeigt die Karte sein ganzes Können «von Anfang an».

**Quelldatei des Faltmusters:** `Visitenkarte.psd` (1837 × 1189 px = **Endformat 85 × 55 mm ohne Beschnitt**, rund 550 dpi; geprüft gegen die Druckdatei `Visitenkarte_mit_3mm_Schnittrand_Vorderseite…jpg`, 8000 × 5363 px = 91 × 61 mm inkl. 3 mm Beschnitt). Die durchgezogenen Linien liegen als **Vektorformen** vor (exakte Koordinaten auslesbar), die gestrichelten als saubere Pixelebenen mit geraden Segmenten (exakt vektorisierbar), die Holztextur als eigene Ebenen. **Linienstärken:** Dicke und dünne durchgezogene Linien werden gleich gefaltet (nach hinten). Die dicken sind rein optisch: Im gefalteten Zustand zeichnen sie die sichtbaren Kanten nach, etwa die Stuhlbeine. Für die Animation heisst das: Am Ende bilden die dicken Linien die Silhouette des Stuhls, und genau diese Kontur kann in den Stuhl des Logos übergehen. `Visitenkarte_Final.indd` ist nur das Drucklayout mit platzierten Bildern. Beide Dateien in `Dokumente\Creyation Admin\Material` ablegen.

**Faltkarte 2026 (überarbeitet, Quelle `Visitenkarte_Final_2026.ai`):** **Hochformat 55 × 85 mm**, Lehne oben, Sitz unten, Stuhlfront = untere Kante. Illustrator-Datei ist PDF-kompatibel; alle Linien liegen als echte Vektoren vor (12 dicke, 12 dünne, 20 gepunktete Linien, 2 Holzbilder) und wurden in Millimetern ausgelesen. Analyse und Faltfolge in D19.

**Das Linienmuster** aus Dreiecken, durchgezogenen und gepunkteten Linien (Hintergrund im Portfolio und auf der alten Wix-Seite) ist **der Bauplan dieses Stuhls**, kein Dekor. Es ist das Grafikelement der Marke mit eigener Geschichte.

**Briefpapier / Offerten:** oben links «C R E Y A T I O N  G A F N E R» fein und weit gesperrt, darunter «Rey Gafner MSc UZH» und Büroadresse; rechts ein hellgraues Band mit dem Logo als weisser Linienzeichnung (Lampe, Tisch/Stuhl) als Wasserzeichen. Offerten gliedern Material, Arbeit, Lieferung und erklären den Bau Schritt für Schritt, mit Visualisierungen.

**Stil (Portfolio, Karte, Briefpapier):** schwarz-weiss, feine Rahmen und Linien, leichte Groteskschrift mit sehr weiter Laufweite, Farbe kommt ausschliesslich aus den Fotos. Portfolio-Schrift: Kozuka Gothic Pr6N (ExtraLight, Regular, Medium; im Camperbau-Portfolio zusätzlich Minion Pro), eine Adobe-Schrift, die im Web nicht frei eingesetzt werden darf → ähnliche freie Schrift wählen und selbst hosten.

**Casa del Paw** hat eine eigene Untermarke: handschriftliche Schrift, Illustration einer schwarzen Katze auf einem Biedermeier-Sofa, eigener Instagram-Account @casadelpaw («Designed and handcrafted in Switzerland … by @creyationgafner»).

## D8. Entwicklung über die Zeit

- **2017–2020:** Beginn 2017 mit der Diskotoilette im Restaurant Krokodil; danach grosse Installationen, Skulpturen, Lounges und Raumgestaltung für Events und Nachtleben (Space Monki, Echo from Venus, Baumhaus, Netzwerk Basel, Terrazzza, Tension, Heimat/Koch & Gsell, Das Viertel, Chalet, Motion Beach Davos). Instagram hiess damals «creyatione».
- **2020–2023:** präzise Möbel, 3D-Druck-Objekte, Camperbau, Festival-Bauleitung (Modular), Casa del Paw.
- **2024–2026:** Produktdesign (XIPE, MOTU TANE, Abfallsackhalter), Ladengestaltung (Mybikeplan), Konzepte (Dayrise, T4-Bett, Microcorner).

## D9. Eigene Produkte

| Linie | Produkt | Stand | Notizen |
|---|---|---|---|
| Home | **MOTU TANE** Couchtisch | Erstes Produkt der geplanten Linie «Home Design» (Instagram 25.02.2026) | Lackiertes Holz, runde Platte, zwei geschwungene Wangen, verschiedene Farben. Als Serienprodukt gedacht. |
| Home | **XIPE 2.0 / 3.0** LED-Gewächshaus | Gebaut, Verkauf erwünscht | Anzuchtregal in Hausform, gesteckt, erweiterbar; 80 bzw. 120 Töpfe 7 × 7 cm. |
| Home | **Die ätherische Toilette** | Gebaut (Produktfoto vorhanden, DSCF0317) | Goldene Mini-Toilette, 3D-Druck, Filzeinlage für ätherische Öle, Clip für die Autolüftung. |
| Haustiere | **Casa del Paw – Katzensofa** | Gebaut, mehrere Varianten, «Happy Clients»-Fotos | 7 Stoffe (Bilbao, Haifa, Palm Beach, Roebuck, St Tropez, Kas, Nikitas) × 3 Holztöne (Natur, Cognac, Chocolat); Füsse als Katzenpfoten (3D-Druck). |
| Haustiere | **Vitruvius** Beistelltisch (für Katzengras) | Gebaut, mehrere Farben | Grundriss einer Katzenpfote kombiniert mit dorischer Säule; farbige Pfoten-Intarsie in der Platte. |
| Haustiere | **Katzenhaus** («Einzelzimmer zu vermieten») | Gebaut, als Serienprodukt denkbar | Luftqualitätsmessung mit automatischer Belüftung und eigenem Wärmetauscher, beheiztes Bett, 3-fach-Verglasung, Kamera, Futterautomat, Wasserspender, Katzenklappe. |
| Werkstatt | **Abfallsackhalter 110 L** | Gebaut, **noch ohne Namen** | Konisch, gebogene Holzstäbe mit Zickzack-Verspannung, Ring oben, auf Rollen. |
| – | Kristallhöhle LED | Gebaut (2021) | Felsenform, Kristall von unten beleuchtet, wechselbarer Akku. |
| – | Thirsty Koi | Gebaut (2023) | Siehe D2. |
| Ideen | Modulare Kinderzimmereinrichtungen u. a. | Noch nicht entwickelt | Weitere Produkte je nach Marktforschung und Nachfrage. |

Instagram-Highlight «Home Design» steht für die geplante Produktlinie für einen Onlineshop (Home, Haustiere, Werkstatt).

## D10. Zielgruppen (nach Priorität)

1. Innenarchitektur- und Planungsbüros (Umsetzungspartner für Spezialanfertigungen)
2. Firmen, Marken, Agenturen und Eventveranstalter (Inszenierung, Skulpturen, Bühnenbilder, Centerpieces)
3. Gastro, Clubs, Läden, Praxen
4. Camper: Ausbaubetriebe (z. B. Camper&Cars) und private Van- und Camperbesitzer
5. Private, vor allem für die eigenen Produkte

Nicht als Leistung anbieten: Fahrzeugrestauration. Rey hat einen VW Golf 2 (Lockdown 2020/21) und einen VW T4 restauriert; das bleibt privat. Höchstens als persönliche Note im «Über mich», optional.

## D11. Rahmenbedingungen

- Creyation Gafner läuft derzeit mit **begrenzter Kapazität**, mit der Option, später wieder hochzufahren.
- **Folgen für die Website:** Sie muss für Rey arbeiten, ohne viel Zeit zu fressen; gezielt passende, lohnende Anfragen anziehen statt jede Kleinigkeit; professionell und «gross genug» wirken, damit ein Hochfahren jederzeit möglich ist. Produkte werden auf Bestellung gefertigt (Lieferzeit angeben).

## D12. Tonalität

Persönlich (ich, nicht wir), direkt, mit einem Augenzwinkern, aber präzise in der Sache. Deutsch als Hauptsprache; Claim, Produktnamen und einzelne Leitsätze dürfen englisch bleiben (wie auf Instagram).

## D13. Projekt-Inventar

Status: **zeigen** = kann auf die Website · **Studie** = nicht gebaut, höchstens klar gekennzeichnet als Konzept · **nein** = nicht zeigen.

| Jahr | Projekt | Ort / Kunde | Bereich | Quelle | Status / Hinweise |
|---|---|---|---|---|---|
| 2018 | Visitenkarte (Faltstuhl) | eigen | Design | Portfolio, Fotos | zeigen, Schlüsselstück (D7) |
| – | Visualisierung in SketchUp | diverse | Design | Portfolio | als Leistung zeigen |
| 2017 | Diskotoilette | Restaurant Krokodil, Zürich | Raumgestaltung | Portfolio 2021 | zeigen; bewegungsgesteuert, Diskokugeln, Soundanlage, Goldglitzerboden; frühestes Projekt |
| 2018 | Teekanne | Baumhaus, Zürich | Skulptur / Raum im Raum | Portfolio 2021 | zeigen; begehbar, nach «Alice im Wunderland», eingebaute Rauchmaschine, Höhe 2,4 m |
| 2018 | Tree of Life | Echo from Venus, Zürich | Installation | Portfolio 2021 | zeigen; Baum des Lebens aus selbst gesammeltem Schwemmholz, mit Früchten und Gemüse zum Pflücken |
| 2018 | Lichtinstallation Bananenplanet | Space Monki / Red Bull, Zürich | Installation / Licht | Portfolio 2021 | zeigen; ergänzt ein bestehendes Graffiti (Affenastronaut) |
| 2018 | Lost in dimensions | Space Monki, Zürich | Clubeingang | Portfolio 2021 | zeigen; Lichttunnel in eine andere Welt |
| 2018 | Pulsierender Eingangstunnel | Tension Festival, Basel | Installation / Licht | Portfolio 2021 | zeigen; von hinten nach vorne wandernde LED-Lichtbögen |
| 2018 | Boxenständer und Regal «Troy» | DJ Troy, Zürich | Möbelbau | Portfolio 2021 | zeigen; Höhe auf Ohrhöhe des Kunden, Kugellager zum Ausrichten der Boxen (Frage/Lösung) |
| 2018/19 | VW T4 Renovation | privat | – | Portfolio 2021 | nicht als Leistung (D10) |
| 2018 | Wald-Shotbar | Space Monki, Zürich / Jägermeister | Raumgestaltung | Portfolio | zeigen |
| 2018 | Albert's Space Bar | Space Monki, Zürich / Red Bull | Raumgestaltung | Portfolio | zeigen |
| 2019 | Bains & Douches | Space Monki, Zürich | Raumgestaltung | Portfolio, alte Website | zeigen |
| 2019 | Deckeninstallation SEV 1011 | Netzwerk, Basel | Installation / Kunst | Portfolio, Instagram 29.01.2019 | zeigen. Überdimensionale Schweizer **T13-Stecker**, männlich und weiblich; silberne Schläuche = Kabel. Paare, die zusammen-, aber nicht ganz eingesteckt waren, enthielten Stroboskope: wirkt wie elektrische Funken und war das Licht im Raum. **Kunstinstallation.** Deckenfläche 8 × 8 m. |
| 2019 | SEV 1011 (Skulptur) | Netzwerk, Basel | Skulptur | Portfolio 2021 | zeigen; männlicher Schweizer Normstecker, 3,5 m, mit UV-Licht «für den Strom»; gehört zur Netzwerk-Serie |
| 2019 | Blätterdachlounge | Tension Festival, Basel | Loungedesign | Portfolio 2021 | zeigen; naturnahes Schattendach, 8 × 7 m |
| 2019 | Hanfblattlounge | Heimat (Koch & Gsell AG), Zürich | Loungedesign / Markenauftritt | Portfolio 2021 | zeigen; Dach als Hanfblatt, produktnah (Schweizer Tabak, CBD-Hanf) |
| 2019 | Heissluftballone | Tension Festival, Basel | Installation / Licht | Portfolio 2021 | zeigen; handgenähte Modelle im zentralen Baum, von innen beleuchtet |
| 2019 | Das Viertel: First impression, Aus Eins mach Zwei, Labyrinth Lounge, Das stille Örtchen | Club Das_Viertel, Basel | Renovation | Portfolio 2021 | zeigen als Teil von «Das Viertel»; u. a. ein Raum doppelwandig und isoliert in zwei geteilt, rollstuhlgerechte Kabine |
| 2019 | Ruheraum | Space Monki, Zürich | Raumgestaltung | Portfolios 2021 und 01/2023 | zeigen; warme Töne, ruhiges Licht, ausgewählte Gemälde Schweizer Landschaften |
| 2019 | Birkenregal | Zürich | Möbelbau | Portfolio 2021 | zeigen |
| 2020 | Reversed Schlüsselanhänger | Label «Reversed» / Creamelt | 3D-Druck | Portfolio 2021 | derselbe wie «Werbegeschenk Schlüsselanhänger»; recyceltes Filament aus alten Skischuhen aus Davos |
| 2020 | VW Golf 2 Ersatzteildruck | privat | 3D-Druck | Portfolio 2021 | zeigen als Beispiel «Reparieren statt wegwerfen» |
| 2021 | Netgear-Halter mobiler Router | Camper | 3D-Druck | Portfolio 2021 | zeigen (Frage/Lösung) |
| 2021 | Lautsprecherhalter modular | Camper | 3D-Druck | Portfolios 2021 und 01/2023 | zeigen (Frage/Lösung) |
| 2019 | Telefonhörer | Netzwerk, Basel | Skulptur | Portfolio | zeigen, Höhe 5,5 m |
| 2019 | Leuchtschrift | Tension Festival, Basel | Installation | Portfolio | zeigen, 4 m, RGB musikgesteuert |
| 2019 | Kolibri | Terrazzza, Horse Park Zürich-Dielsdorf | Skulptur | Portfolio, Instagram 29.06.2019 | zeigen, 4,5 m; Makita Schweiz unterstützte mit Werkzeug |
| 2019 | Modulares Chalet | Das_Viertel / Gastrounternehmer, Basel | Chalet-Bau | Portfolio, alte Website | zeigen, 12 × 6 × 4,5 m |
| 2019 | Das Viertel (Renovation, Lounges, Empfang) | Club Das_Viertel, Basel | Raumgestaltung | alte Website, Portfolio (Urban Jungle) | zeigen |
| 2020 | Kinderspielburg | Bläsikrippe, Basel | Möbelbau | Portfolio, alte Website | zeigen |
| 2020 | Motion Beach Davos | Hotel Morosani Schweizerhof | Eventbau | Portfolio | zeigen; 56 t Sand, 60 t Wasser, 3,5-m-Palmen |
| 2020 | Leuchtbox Watson | Watson, Zürich | Möbelbau / Licht | Portfolio | zeigen; App-Farbsteuerung, optional Akku |
| 2020 | Werbegeschenk Schlüsselanhänger | Creamelt | 3D-Druck | Portfolio | zeigen; recyceltes TPU aus alten Skischuhen |
| 2020 | Die ätherische Toilette | eigen | Produkt | Portfolio, Foto DSCF0317 | zeigen (Produkt) |
| 2020/21 | VW T4 Camperumbau | eigen | Camperbau | Portfolio | zeigen als Camperbau-Referenz; Arvendecke, modulares Bett |
| 2020/21 | VW Golf 2 Restauration | privat | – | Instagram 03.01.2021 | nicht als Leistung (D10) |
| 2021/22 | Modular Festival | Langnau i. E. | Eventbau, Bauleitung | Portfolio | zeigen |
| 2021 | Greifender Spuckschutz | Empfang, Zürich | Möbelbau | Portfolio | zeigen (Frage/Lösung) |
| 2021 | Handtuchgestell Medifit | Physio Medifit, Zürich | Möbelbau | Portfolio, Instagram 11.04.2021 | zeigen; Whiteboard-Dreiecke für Initialen |
| 2021 | Kristallhöhle LED | eigen | 3D-Druck / Produkt | Portfolio, Instagram 23.12.2021 | zeigen |
| 2021 | Ersatzteile | diverse | 3D-Druck | Portfolio | zeigen |
| 2022 | FIFA Fanvillage Qatar | Alta Vista Events GmbH | Konzept, Visualisierung, Videoführung | Portfolio | zeigen |
| 2022 | Bildschirmerhöhung Splenius | Büro, Zürich | Möbelbau | Portfolio | zeigen |
| 2022 | Uhrenvitrine | Uhrensammler | Möbelbau / Licht | Portfolio | zeigen; 10 Uhren, 45°, Licht per Fernbedienung |
| 2022 | Campermöbel Leichtbau | Camper&Cars, Bottighofen | Möbelbau | Portfolio | zeigen; Pappelsperrholz |
| 2022 | Diverse Fräsarbeiten | diverse | CNC | Portfolio | als Leistung zeigen |
| 2023 | Katzensofa / Casa del Paw | eigen | Produkt | Portfolio, Dossier, Instagram | zeigen (Produkt) |
| 2023 | Beistelltisch Vitruvius | eigen | Produkt | Portfolio, Instagram | zeigen (Produkt) |
| 2023 | DJ-Pult | Club in Zürich | Möbelbau | Portfolio, Instagram 25.03.2025 | zeigen **ohne Kundennamen**; 4 Subwoofer, demontierbar. Instagram-Beitrag 2025 zeigt dasselbe Pult. |
| 2023 | Thirsty Koi (Koiteich-Oberflächenablauf) | privat | 3D-Druck | Portfolio, Instagram 13.05.2023 | zeigen |
| 2023 | Space 2.0 | Club Space 2.0, Zürich | Raumgestaltung / Licht | Instagram 27.08.2023 | zeigen; Club-Umbau, hinterleuchtetes Wandverkleidungssystem; Polycarbonat von Neomat AG |
| 2023 | Fensterverriegelung Yanmar-Bagger | privat/Kunde | 3D-Druck | Instagram 27.08.2023 | zeigen (Frage/Lösung) |
| 2023 | Custom-Campers-Emblem (Fiat Ducato) | Custom Campers | 3D-Druck | Instagram 27.08.2023 | zeigen |
| 2023 | Flohmarkt-Kleiderständer | eigen | Möbelbau | Instagram 27.08.2023, Foto Flohmarkt | zeigen; mobil, gesteckt, gebaut |
| 2024 | Dayrise: Mapping-Masken 1,4 m und 5-teiliges Logo | Main Events AG, Lachen | Inszenierung | Kostenvoranschläge 05.03.2024 | **Studie** (nicht gebaut). Verfahren: XPS 7-lagig CNC-gefräst, Glasfaser/Harz, gespachtelt, gespritzt, nass geschliffen. |
| o. J. | Vollautomatisches Bett VW T4 | eigen | Engineering | Rendering, Portfolio Camperbau 2023 | privat; Stellmotoren und Arduino, Sofa ↔ Bett auf Knopfdruck. Das Camperbau-Portfolio zeigt die Bettmechanik als Teil des eigenen T4 («aus meinem ersten VW T4») und gedruckte Halter für die Linearantriebe; **ob gebaut, von Rey bestätigen lassen** (dann «zeigen» statt Studie) |
| 2022/23 | Windabweiser VW T4 | eigen/Camper | CNC / Spezialanfertigung | Portfolio Camperbau 2023 | zeigen (Frage/Lösung); gefräste Acrylglas-Finnen am Dachträger gegen Windgeräusche |
| 2022/23 | Luftführung VW T4 | Camper | 3D-Druck | Portfolio Camperbau 2023 | zeigen (Frage/Lösung); passgenaue Kanäle für falsch platzierte Originallüftungen |
| 2022/23 | Diverse Halterungen Camper | Camper | 3D-Druck | Portfolio Camperbau 2023 | zeigen; u. a. Halter für Linearantriebe (Bettmechanik), Wasserleitungen und Wasserfilter |
| 2022/23 | Camper-Layout Kastenwagen (rotes Fahrzeug) und Ausbau mit weissen Möbeln | Kunde (vermutlich Camper&Cars) | Visualisierung / Campermöbel | Portfolio Camperbau 2023 | zeigen nach Rückfrage; SketchUp-Planung bis zum eingebauten Möbel |
| 2025 | XIPE 2.0 / 3.0 | eigen | Produkt | Instagram 26./27.03.2025 | zeigen (Produkt) |
| 2025 | Katzenhaus | eigen | Produkt / Engineering | Instagram 29.03.2025 | zeigen (Produkt) |
| 2025 | Mybikeplan-Store | Mybikeplan.ch, Zweierstrasse 100, Zürich (Eröffnung 07.04.2025) | Umsetzung für Innenarchitektur | Instagram 04.04.2025 | zeigen; Planung durch Innenarchitekturbüro, **Umsetzung durch Rey**; Lichtinstallation hinter Polycarbonat (Neomat AG) |
| o. J. | Abfallsackhalter 110 L | eigen | Produkt (Werkstatt) | Renderings | zeigen (Produkt), Name folgt |
| 2026 | MOTU TANE | eigen | Produkt (Home) | Instagram 25.02.2026 | zeigen (Produkt), neuestes Werk |
| – | GZD Microcorner (Infostand) | – | – | Renderings | **nein** (Rechte liegen bei Dritten) |

Formulierung beachten: Bei Mybikeplan stammt die Planung vom Innenarchitekturbüro, die Umsetzung von Rey. Space 2.0 ist der Club, den Rey umgebaut hat.

## D14. Was nicht öffentlich gezeigt wird

- GZD Microcorner (Rechte liegen bei Dritten)
- Kundenname beim DJ-Pult
- Restaurationen als Leistung
- Fremde Moodbilder aus dem Casa-del-Paw-Dossier (rosa Bogen, Palmen, Vasen, Knete-Skulptur usw. sind vermutlich nicht Reys Fotos; Urheberrecht) → nur eigene Sofa-Fotos verwenden
- Facebook (veraltet, nicht mehr verlinken)
- Private Angaben aus dem CV (Geburtsdatum, Geburtsort, Privatadresse)

## D15. Schlüsse für die neue Website (Konzept, von Rey am 27.09.2026 freigegeben)

**Positionierung:** Kern «Lösungen und Produkte, die es noch nicht gibt» (D2), getragen von vier Standbeinen (D4). Hauptzielgruppe Innenarchitektur- und Planungsbüros sowie Firmen und Events; Produkte als zweiter Pfeiler.

**Aufbau (Entwurf):** Einstieg mit Faltanimation und Logo → Kern und Leitsatz → vier Standbeine als Einstiege (Innenarchitektur, Inszenierung, Produkte, Camperausbau) → Projekte (nach Bereich filterbar, Projektansicht mit Text, Ort, Jahr, Bildern, oft als «Die Frage / Die Lösung») → Produkte (Home, Haustiere, Werkstatt; auf Bestellung gefertigt; Casa del Paw mit Stoff- und Holzwahl) → Arbeitsweise (Have a seat – dream – we talk – I build) → Referenzen (Kundennamen als Text) → Über mich → Kontakt (Büro und Werkstatt getrennt benannt).

**Einstiegsanimation (Reys lang gehegter Wunsch):** Das Faltmuster der Visitenkarte zeichnet sich Linie für Linie auf, faltet sich zum Stuhl, der Stuhl wird zum Stuhl im Logo, die Lampe erscheint und geht an, die Seite öffnet sich. Regeln: wenige Sekunden, jederzeit überspringbar, nur beim ersten Besuch, bei «Bewegung reduzieren» direkt das fertige Logo, Inhalte für Suchmaschinen sofort vorhanden. Zwei technische Wege: echtes 3D im Browser (braucht exakte Geometrie) oder reduzierte Linienanimation. Grundlagen vorhanden: Faltmuster als `Visitenkarte.psd` (D7), Foto der Endstellung, Handyvideo vom Falten (`WhatsApp_Video_2026-09-27_at_02_02_38.mp4`; Karte oft gefaltet, hält die Stuhlform nicht mehr ganz).

**Faltfolge laut Video (Lesart, noch von Rey zu bestätigen):**
1. Ausgangslage: Karte flach, Holzseite oben, alle Falze vorgerillt; im Streiflicht zeichnet sich das Muster als Relief ab (schöner Startzustand für die Animation).
2. Die Felder entlang der Längsseiten von Sitz und Lehne klappen nach unten; die Karte wird schmaler, der Sitz hebt sich als Fläche ab.
3. Die Dreiecksfelder an den vier Sitzecken falten sich unter dem Sitz zusammen und bilden spitze Laschen, sternförmig: die vier Beine. Mehrere Falten bewegen sich dabei gleichzeitig; das ist der anspruchsvollste Teil.
4. Die Seitenstreifen der Lehne falten sich nach hinten, die Lehne wird schmal.
5. Die Lehne klappt an der Hinterkante des Sitzes nach oben; der Stuhl wird aufgestellt.
6. (Animation) Die dicken Linien bilden die Silhouette, die in den Stuhl des Logos übergeht; Lampe erscheint und geht an.

**Umsetzungsidee:** Die Animation muss das Papier nicht physikalisch simulieren. Sie kann die Phasen 1–5 als choreografierte Schritte zeigen (je Phase ein Scharnierwinkel pro Fläche, aus der PSD-Geometrie berechnet); die Beinfalten in Phase 3 dürfen vereinfacht werden.

**Gestaltung:** schwarz-weiss wie Portfolio, Karte und Briefpapier; feine Rahmen; gesperrte Wortmarke «C R E Y A T I O N  G A F N E R» quer für den Seitenkopf (das hochformatige Logo passt dort nicht), volles Logo im Einstieg; Faltmuster als erklärtes Grafikelement; Farbe nur aus den Fotos. Die bisherigen Tokens (Beton, Petrol, Kupfer; Archivo/Literata) werden abgelöst. Schrift: freie Alternative zu Kozuka Gothic, selbst gehostet (löst auch das Google-Fonts-Datenschutzthema).

**Texte:** Ich-Form, Humor mit Präzision (D12); keine Leistungen versprechen, die Rey nicht selbst anbietet (D5).

**Bilder:** Portfolio-Bilder sind eingebettet in ca. 1000 px Breite verfügbar (mit `pdfimages` extrahierbar), für Web-Vorschauen ausreichend; Originale bzw. Instagram-Export (JSON, hohe Medienqualität) für bessere Qualität später.

**Pflege:** Neue Projekte und Produkte sollen mit einem kurzen Eintrag ergänzt werden können, ohne HTML zu kopieren (begrenzte Kapazität).

**Technischer Grundsatzentscheid (freigegeben):** Wechsel vom One-Pager zu **mehreren Seiten** (Start, Projekte mit Einzelseiten, Produkte mit Einzelseiten, Über mich, Kontakt, Impressum, Datenschutz). Grund: Übersicht bei über 40 Projekten und bessere Auffindbarkeit bei Google (jede Projekt- und Produktseite ist ein eigener Einstieg). Projekte und Produkte werden in einer einfachen Liste gepflegt, aus der die Seiten automatisch entstehen; GitHub Pages kann das mit Jekyll selbst (dann `.nojekyll` entfernen). Details vor dem Bau klären.

**Zielgruppen-Wege (Konzept):** Innenarchitektin → «Umsetzung für Innenarchitektur» → Mybikeplan, Space 2.0, Uhrenvitrine → Arbeitsweise → Kontakt. Eventagentur/Marke → «Inszenierung» → Kolibri, Motion Beach, Albert's Space Bar → Kontakt. Katzenbesitzerin → «Produkte» → Casa del Paw → Stoff und Holz wählen → Anfrage. Jede Gruppe findet ihren Einstieg schon auf der Startseite.

## D17. Prototyp Startseite v1 (27.09.2026; Einstieg in v2 ersetzt, siehe D18)

Datei: `prototyp-startseite.html` (eine Datei, alle Bilder eingebettet, ca. 1,6 MB; lokal im Browser öffnen). Nur zur Ansicht, **nicht** auf die Live-Seite kopieren (enthält `noindex`, Schriftwahl-Leiste und Platzhalter).

**Aufbau der Startseite (umgesetzt):** 1. Einstieg: Faltmuster zeichnet sich auf der Karte, Hilfslinien treten zurück, Hintergrund wird schwarz, Stuhl des Logos erscheint, Lampe senkt sich, Licht geht an, Claim erscheint (ca. 5 s, überspringbar, bei «Bewegung reduzieren» sofort Endzustand; im Prototyp immer abgespielt und wiederholbar). 2. Kern: «Ich baue, was es noch nicht gibt.» + Leitsatz + Buttons, daneben der Faltstuhl. 3. «Wofür Sie mich holen»: vier Standbeine mit Bild (Camperausbau am 27.09.2026 ergänzt, Bild: T4-Innenausbau aus dem Camperbau-Portfolio). 4. Ausgewählte Projekte (Motion Beach, Albert's Space Bar, Netzwerk, Wald-Shotbar, Uhrenvitrine, Space 2.0). 5. «Frage und Lösung» auf hellgrauem Band (Spuckschutz, Katzenhaus, Faltkarte). 6. «So arbeiten wir zusammen» auf Schwarz, vier nummerierte Schritte (Have a seat, dream, we talk, I build). 7. Eigene Produkte (MOTU TANE, XIPE, Casa del Paw, ätherische Toilette), «auf Bestellung gefertigt». 8. Über mich (Rey Gafner, Biologe, CNC-Bild). 9. Referenzen als Namensliste. 10. Kontakt «Let's work together» mit Anliegen-Auswahl, Werkstatt und Büro. Fuss schwarz.

**Gestaltung (umgesetzt):** Schwarz #000, Weiss, hellgraues Band #F0F0EE (wie Briefpapier), Grau #6F6F6C für Nebentext; einzige Farbe ausserhalb der Fotos ist das Lampenlicht #FFD89A im Einstieg. Leichte Groteskschrift, Titel in Light mit leichter Sperrung, Wortmarke «CREYATION GAFNER» mit 0.42em Laufweite. Kopfzeile weiss auf Schwarz über dem Einstieg, danach weiss. Trenner «Faltlinie»: durchgezogene und gepunktete Linie mit kleinem Faltdreieck. Keine abgerundeten Ecken, keine Schatten, Bilder rechteckig. Ansprache der Kundschaft mit «Sie», Rey spricht in der Ich-Form.

**Schriftwahl (offen, im Prototyp umschaltbar):** A Open Sans (nah an Visitenkarte und Logo-Schrift), B Noto Sans JP (nah an Kozuka Gothic aus dem Portfolio), C Jost (geometrischer). Im Prototyp von Google Fonts geladen; im Live-Betrieb selbst hosten.

**Platzhalter im Prototyp v1:** Die echte Faltung fehlte noch (in v2 umgesetzt, siehe D18). Links führen auf Anker statt auf Unterseiten. Kundenliste noch nicht freigegeben. Telefonnummer nicht aufgeführt. Formular öffnet weiterhin das E-Mail-Programm. Impressum/Datenschutz-Links leer.

**Bildquellen:** Portfolio-PDF (mit `pdfimages` extrahiert, ca. 900 px), Instagram-Screenshots (zugeschnitten), Casa-del-Paw-Dossier (nur Reys eigene Fotos), DSCF0317 (Toilette), IMG_1419 und IMG_1428 (Faltkarte). Für die Live-Seite bessere Originale bzw. Instagram-Export verwenden.

**Erzeugte Grundlagen-Dateien:**
- `creyation-gafner-logo-weiss.svg` / `-schwarz.svg`: exakter Vektor-Nachbau des Logo-PNG (potrace), in vier Gruppen `lg-frame`, `lg-lamp`, `lg-text`, `lg-chair` (für die Animation getrennt ansteuerbar). Glühbirne bei ca. x 511, y 600 (viewBox 0 0 1023 2173). **Freigabe durch Rey ausstehend.**
- `faltmuster-visitenkarte.svg`: Faltmuster aus `Visitenkarte.psd` rekonstruiert (22 durchgezogene Linien aus den Vektorformen, 16 gepunktete Linien aus den Pixelebenen erkannt), Koordinaten in PSD-Pixeln (1837 × 1189), Grundlage für die 3D-Faltung (Endformat, kein Beschnitt).

## D18. Prototyp v2: echte 3D-Faltung im Einstieg (27.09.2026; mit der Karte 2026 durch v3 ersetzt, siehe D19)

**Reys Rückmeldung zu v1:** «Wir haben einen grossen Sprung gemacht.» Aber: Das Origami-Falten sieht man nicht (v1 hatte nur eine Linienanimation als Platzhalter). Die Karte soll **horizontal starten**, d. h. flach auf dem Tisch liegend (von Rey bestätigt). Rey hat bessere Projektbilder und liefert sie nach.

**Umsetzung v2:** Die Visitenkarte liegt als 3D-Objekt flach auf einem hellgrauen Grund (#EDEDEB), die Kamera schaut schräg von oben auf die Längsseite (Karte quer im Bild). Dann faltet sie sich in drei Phasen zum Stuhl, während die Kamera zur Stuhlfront schwenkt: (1) Schürzen klappen nach unten, Sitz hebt sich, Beine entstehen; (2) Seitenstreifen der Lehne falten nach hinten, Lehne hebt leicht an; (3) Rückenfalte schliesst sich, Lehne klappt hoch. Danach wird der Hintergrund schwarz, der 3D-Stuhl blendet aus, der Stuhl des Logos ein, die Lampe geht an. Dauer ca. 7,5 s, überspringbar; bei «Bewegung reduzieren» oder ohne WebGL direkt das Logo.

**Technik:** three.js r128 (im Prototyp eingebettet; im Live-Betrieb als eigene Datei selbst hosten). Datei `falten.js` (Funktion `KartenFaltung(container, texturVorne, texturHinten)`). Oberfläche = Reys Originaldruck aus der PSD, Rückseite schlichtes Papierweiss (die Schrift der echten Rückseite blitzte im gefalteten Stuhl als Fragmente auf). Die Karte ist in 28 starre Flächen zerlegt (Sitz; drei Schürzen mit je Mittelteil und zwei Seitenteilen entlang der V-Falten; vordere Zwickel mit Spitze; Rückenkette seg1/seg2/Holzlehne; hintere Zwickel; Seitenstreifen der Lehne). Scharniere liegen exakt auf den Faltlinien; Beine werden über Fusspunkte gelöst, vordere Zwickel per Trilateration. **Vereinfachungen:** Hintere Zwickel und Lehnenstreifen legen sich unsichtbar hinter Rückenfalte und Lehne; an versteckten Stellen trennen sich Flächen leicht. Von vorne sieht der Stuhl dem gefalteten Original sehr ähnlich (V-Linien auf den Schürzen, dicke Linien als Beinkanten, Holzsitz und -lehne); von hinten ist das Modell nicht sauber und wird nie gezeigt.

**Mögliche Verfeinerungen:** Zwickelspitzen kleiner, Übergang 3D-Stuhl → Logo als Morph statt Überblendung, Faltphasen nach einem frisch gefalteten Exemplar feinjustieren.

**Bilder (offen):** Rey liefert bessere Projektbilder. Vorgaben: direkt hochladen, Originale statt WhatsApp (Kompression), lange Seite ≥ 2000 px, Projektname im Dateinamen, zuerst die Bilder der Startseite (Mybikeplan, Kolibri, Casa del Paw, Motion Beach, Albert's Space Bar, Netzwerk, Wald-Shotbar, Uhrenvitrine, Space 2.0, Spuckschutz, Katzenhaus, MOTU TANE, XIPE, ätherische Toilette), pro Projekt 3–6 Bilder.

## D19. Faltkarte 2026 und Faltfolge aus drei Videos (Analyse für die Animation v3)

**Geometrie (mm, Ursprung oben links, x nach rechts, y nach unten; Karte 55 × 85):**
- **Sitz** (Holz, Quadrat 17,94 mm): S1 (18,53 | 48,48) hinten links, S2 (36,47 | 48,48) hinten rechts, S3 (36,47 | 66,47) vorne rechts, S4 (18,53 | 66,47) vorne links; alle vier Kanten dick.
- **Lehne** (Holz, Trapez): unten B1 (18,53 | 21,20) – B2 (36,47 | 21,20), gepunktet; oben an der Kartenkante W1 (21,05 | 0) – W2 (33,95 | 0); Seiten dick. Höhe 21,2 mm (1,18 × Sitz).
- **Rückenfalte (Z-Falte) zwischen Sitz und Lehne:** unteres Trapez S1–S2–M2–M1 (13,78 mm hoch), oberes Trapez M1–M2–B2–B1 (13,50 mm); M1 (21,75 | 34,71), M2 (33,25 | 34,71). Die gepunktete Waagrechte auf y = 34,70 läuft von H1 (10,12 | 34,70) bis H2 (44,88 | 34,70) durch.
- **Schürzen mit V-Falte:** vorne (unter dem Sitz) S4–S3 mit Spitze (27,5 | 85); links S1–S4 mit Spitze (0 | 57,47); rechts S2–S3 mit Spitze (55 | 57,47). Die dicken Beinkanten laufen von den Sitzecken zu den Kartenrändern: S1→(0 | 43,94), S4→(0 | 70,92) und (13,99 | 85), S2→(55 | 43,94), S3→(55 | 70,92) und (41,01 | 85).
- **Vordere Beine:** Zwickel an S4 und S3 mit gepunkteter Winkelhalbierenden zu (7 | 77,96) bzw. (48 | 77,96) und dünner Spitzenfalte (0 | 70,92)–(13,99 | 85) bzw. (55 | 70,92)–(41,01 | 85).
- **Hintere Beine und Seitenflügel (neu gegenüber 2018):** An H1/H2 treffen sechs Falten zusammen. Dreieck S1–H1–(0 | 43,94) ist der hintere Beinzwickel (dünne Falte S1–H1 **neu**), Dreieck S1–M1–H1 die Seite der Rückenfalte, Dreieck B1–H1–M1 die Seite des oberen Trapezes, Dreieck H1–(0 | 25,76)–(0 | 43,94) ein Flügelteil (dünne Falte H1–(0 | 25,76) **neu**), Viereck B1–H1–(5,11 | 0)–W1 der Lehnenstreifen, darüber die Ecke bis (0 | 0) mit dünnem Eckschnitt (0 | 12)–(12,01 | 0). Rechts spiegelbildlich.
- **Topologie:** gleich wie die Karte 2018 (dort quer, Lehne links), aber im Hochformat und mit zwei zusätzlichen dünnen Falten pro Seite. Die hinteren Beine werden dadurch echte Flossen wie die vorderen, und die Seitenflügel lassen sich sauberer hinter die Lehne legen.

**Faltfolge laut Videos** (Video 1 und 2 von oben, Video 3 flach von vorne; Karte liegt hochkant, Front zum Betrachter):
1. Karte flach, alle Falze vorgerillt, von der Holzseite her gesehen (V1 0 s).
2. **Zuerst die Front:** Vorderschürze und vordere Beinzwickel falten nach unten, die Vorderkante wird schmal, die Ecken bilden Sternspitzen (V1 16–23 s, V2 7–12 s).
3. **Dann die Seitenschürzen** links und rechts vom Sitz; der Sitz hebt sich, die ganze Karte wölbt sich wie eine Kuppel (V1 24–27 s, V3 21 s).
4. **Die Rückenfalte schliesst sich:** Sitz und Lehne rücken zusammen, die Seitenteile um H1/H2 klappen hoch und nach innen, die Lehne richtet sich auf, die grossen Seitenflügel legen sich um die Lehne nach hinten (V1 30–39 s, V2 13–27 s, V3 29–36 s).
5. **Formen:** Lehne ganz aufrichten, Beine ausrichten, Stuhl hinstellen (V1 40–55 s, V2 28–39 s, V3 48–84 s).

**Endform (V3 63–84 s, V1 55 s):** Lehne leicht nach hinten geneigt, von der Sitzhinterkante aufsteigend; vier Beine, deren dicke Linien von den Sitzecken zum Boden laufen und leicht nach aussen spreizen; zwischen den Beinen die Schürzen mit gepunktetem V; an allen vier Ecken kleine Flossen, die als Sternspitzen schräg nach aussen zeigen; die Seitenflügel liegen hinter der Lehne.

**Umsetzung v3 (Prototyp, umgesetzt 27.09.2026):** Geometrie direkt aus der AI-Datei, Karte hochkant flach auf dem Tisch, Kamera von der Seite (Karte erscheint quer), Faltfolge wie oben (Front → Seiten → Rückenfalte mit Lehne und Flügeln). Neu gegenüber v2: hintere Beine als echte Flossen (Punkt H1 per Trilateration aus Sitzecke, Beinfuss und Rückenfalte), Seitenteile um H1 alle miteinander verbunden, Oberfläche = Holzbilder und Linien der Karte 2026.

**Stand v3.2 (27.09.2026):** Reys Rückmeldung zu v3.1: «Der Faltvorgang muss noch flüssiger werden, an zwei Stellen stockt er und geht danach sprunghaft weiter. Die Lehne sollte am Schluss ganz leicht schräg nach hinten geneigt sein (momentan nach vorne zur Sitzfläche). Die vier Stuhlfüsse sollten am Schluss senkrecht nach unten stehen (momentan leicht nach aussen).»
- **Diagnose per Messung:** Die Geschwindigkeit jedes Eckpunkts wurde in Schritten von 0,05 s über die ganze Animation gemessen. Ursachen: (a) Jede Phase kam mit Nullgeschwindigkeit zum Stillstand, bevor die nächste begann (= Stocken); (b) einzelne Punkte konnten zwischen zwei gleichwertigen Lagen umschlagen: Spitzen der vorderen Flossen (Wahl der Faltrichtung), Flossenspitzen und hintere Beinpunkte H (Wahl der Lösung beim Kugelschnitt), Flügelecken (Papierausgleich kippte zwischen zwei Gleichgewichten) (= Sprünge).
- **Zeitplan:** überlappende Phasen mit sanftem Anfahren und Abbremsen (smootherstep): Ecken vorfalten 0,1–1,5 s, Front 0,8–2,3 s, Seiten 1,2–2,8 s, Rückenfalte mit Lehne und Flügeln 2,2–5,2 s, Stillstand bis 5,9 s, danach Übergang ins Logo.
- **Stetigkeit:** Flossenspitzen und Punkte H werden beim Laden für die ganze Animation vorberechnet (240 Schritte), lückenlos verfolgt und geglättet; ebenso die Eckwinkel der Flügel. Flossen und Zwickel werden über drei Punkte direkt gesetzt statt über ein Scharnier gelöst (kein Umschlagen). Die Spitzen der vorderen Flossen falten sich ganz am Anfang um 180° nach oben vor (wie im Video) und liegen dann genau auf der Flossenfalte.
- **Papierausgleich:** Sichtbare Hauptpunkte (Sitz, Lehne, Rückenfalte, Schürzenspitzen, Füsse, Flossenspitzen, H) werden stark an ihre Soll-Lage gebunden (0,6), versteckte Flügelpunkte schwächer (0,25). Ergebnis der Messung: keine Sprünge mehr; der schnellste Moment ist das Aufrichten der Lehne, gleichmässig beschleunigt und gebremst.
- **Lehne:** Fehler in v3/v3.1 behoben (Winkelrichtung verwechselt, die Lehne kippte nach vorne). Endwinkel jetzt −80° (−90° = senkrecht), also rund 10° nach hinten geneigt; oberes Trapez −89°.
- **Beine:** Füsse senkrecht unter den Sitzecken (nur 0,1 Sitzbreiten entlang der Schürzen versetzt), Sitzhöhe 1,04 Sitzbreiten, Schürzen-Mittelteile 84° geneigt. Die dicken Linien bilden gerade, senkrechte Beinkanten. Die vorderen Flossen falten sich nach innen unter den Sitz (vorher standen sie seitlich ab).
- **Flügel:** Gegen Ende wandern die Punkte H hinter die Rückenfalte; Lehnenstreifen, Ecken und Flügeldreiecke liegen damit hinter Rückenfalte und Lehne statt davor.
- **Noch offen:** Schräg von vorne ist links oben hinter der Lehne ein kleines Stück Flügel sichtbar (wie beim echten Stuhl). Das Vorfalten der Ecken zu Beginn ist relativ zügig.

**Stand v3.1 (Papiermodell, 27.09.2026):** Reys Rückmeldung zu v3: «Es lösen sich noch vereinzelt Teile. An den Linien wird gefaltet und nicht geteilt. Es darf ruhig etwas nachgeben, damit die Bestandteile zusammenbleiben.» Umsetzung: (1) Alle Flächen teilen sich ihre Eckpunkte; wo die Scharnierlagen nicht exakt übereinstimmen, wird gemittelt und anschliessend in 30 Durchgängen jede Kante auf ihre Originallänge zurückgezogen (Papier gibt minimal nach, reisst nie). (2) Oberes Trapez und Lehne werden nicht mehr fest vorgegeben, sondern so gedreht, dass die Teile um H1/H2 geschlossen bleiben (Suche innerhalb ±15° um die Sollbewegung, damit die Bewegung gleichmässig bleibt). (3) Ecke und Flügel an K werden gemeinsam gelöst. (4) Die Spitzen der vorderen Beine sind zweiteilig. Ergebnis: grösste Abweichung zwischen den starren Lagen vor dem Ausgleich unter 0,3 Sitzbreiten, nach dem Ausgleich keine getrennten Kanten; die Lehne neigt sich am Ende rund 20° nach hinten wie beim echten Stuhl; auch von hinten wirkt der Stuhl als zusammenhängendes gefaltetes Papier.

**Stand v3:** Datei `falten.js` (Funktion `KartenFaltung(container, textur)`), Textur aus der AI-Datei gerendert (1400 × 2164 px). 36 starre Flächen; Schürzen mit V-Falte, vordere und hintere Beine als Flossen, Rückenfalte, Lehne, Lehnenstreifen, Flügeldreiecke und Ecken beidseitig. Zeitplan: 0,5 s liegen, 1,3 s Front, 1,2 s Seiten (überlappend), 2,2 s Rückenfalte mit Lehne und Flügeln, 0,5 s stehen; danach Übergang ins Logo wie bisher. Kamera schwenkt von der Längsseite (Karte quer) zur Stuhlfront. Die Flossen der vorderen Beine stehen als flache Sternspitzen seitlich ab wie im Video. **Vereinfachungen:** Die Flügelecken legen sich hinter die Lehne; von hinten ist das Modell nicht sauber (wird nie gezeigt). Neue Grundlagen-Datei: `faltmuster-visitenkarte-2026.svg` (exakte Vektoren in mm).

## D20. Grundgerüst der neuen Website (27.09.2026)

**Entscheide von Rey (27.09.2026):**
- Faltung v3.2 bleibt vorerst so. Offene Schönheitsfehler für eine spätere Feinschliff-Runde: hinten am linken Hinterbein steht noch etwas ab, oben hinter der Lehne ist ein Flügel nicht ganz weggefaltet.
- **Schrift: Open Sans** (Option A), selbst gehostet (Stufen 300, 400, 600). Kozuka Gothic Pr6N (Reys Originalschrift) wäre über Adobe Fonts nur als Web Project möglich (Laden von Adobe-Servern, an ein laufendes Creative-Cloud-Abo gebunden); Selbsthosten nur mit separat gekaufter Lizenz; dazu Datenschutzthema und sehr grosse Schriftdateien. Kozuka bleibt für Druck (Briefpapier, Portfolio, Visitenkarte).
- **Inszenierung bleibt** (Missverständnis geklärt am 27.09.2026): als Bereich im Projektfilter und als Standbein «Inszenierung für Marken und Events» auf der Startseite. Bereiche jetzt: Raumgestaltung, Inszenierung & Events, Möbel & Objekte, 3D-Druck & Engineering, Camperausbau (in `_config.yml` änderbar). Zugeordnet zu «Inszenierung & Events»: Kolibri, Netzwerk, Telefonhörer, Motion Beach Davos, Albert's Space Bar, Wald-Shotbar, Modulares Chalet (die letzten vier zusätzlich Raumgestaltung).
- **Keine Telefonnummer** auf der Website (nur Handy, zugleich privat).
- Produkte: **Preis und Lieferzeit auf Anfrage**; Masse siehe D9 bzw. `_data/produkte.yml`.
- **Impressum mit vollständiger Büroadresse** (Rey, 27.09.2026): Dörflistrasse 1C, 8903 Birmensdorf. Begründung: UWG Art. 3 Abs. 1 lit. s verlangt bei Angeboten im Internet vollständige Angaben zu Identität und Kontaktadresse; die Adresse steht ohnehin im Handelsregister.

**Offizielles Logo (neu):** Rey hat `Logo_Schwarz_auf_Weiss.ai` und `Logo_Weiss_auf_Schwarz.ai` geliefert (Schrift 小塚ゴシック Pr6N L = KozGoPr6N-Light, in den AI-Dateien eingebettet). Hinweis: Die Datei «Schwarz_auf_Weiss» enthält die **weisse** Zeichnung (für dunklen Grund, Sitz gefüllt), «Weiss_auf_Schwarz» die **schwarze** (für hellen Grund, Sitz als Umriss). Daraus erzeugt, mit der Originalschrift als Pfade (also ohne Schriftproblem): `logo-weiss-auf-schwarz.svg` und `logo-schwarz-auf-weiss.svg`. Für die Einstiegsanimation wurde die weisse Version in Gruppen Lampe/Schrift/Stuhl nachgezeichnet (`_includes/logo-animiert.svg`). Die früheren Nachbauten aus dem PNG sind ersetzt.

**Technik:** Jekyll auf GitHub Pages (baut automatisch, keine Software nötig). Paket `creyation-relaunch.zip`:
- `_config.yml` (Titel, Adresse, `baseurl`, Bereiche), `_layouts/standard.html` (Grundlayout), `_layouts/projekt.html` (Projektseite), `_includes/` (Kopf, Fuss, Faltlinie, Animationslogo), `assets/css/stil.css`, `assets/js/seite.js` (Menü, Einstieg, Filter, Grossansicht, Formular), `assets/js/three.min.js` + `falten.js`, `assets/fonts/` (Open Sans), `assets/bilder/`.
- `index.html`: Startseite aus dem Prototyp übernommen; «Ausgewählte Projekte» werden automatisch aus den Projekten mit `startseite: 1…6` gezogen; Einstiegsanimation nur beim ersten Besuch pro Sitzung (danach direkt das Logo).
- `projekte/index.html`: Übersicht mit Filterknöpfen (auch per Link, z. B. `/projekte/?k=camperausbau`), sortiert nach Jahr.
- `_data/produkte.yml`: Produktdaten für die spätere Produktseite; `assets/bilder/produkte/`: MOTU TANE in drei Farben.
- `ANLEITUNG.md` (für Rey), `README.md` (Vorschau einrichten, Umzug).

**Ordnersystem für Projekte (Reys Wunsch):** Pro Projekt ein Ordner `projekte/<name>/` mit `index.md` (Kopfangaben: titel, ort, jahr, kategorie, kurz; optional titelbild, masse, frage, loesung, startseite) und den Bildern. Bilder erscheinen in der Reihenfolge ihrer Dateinamen; das erste ist das Titelbild. Jekyll liest die Bilder eines Ordners über `site.static_files` (Feld `path`; `relative_path` ist in Liquid nicht verfügbar). Vorlage in `projekte/_vorlage/` (Ordner mit `_` erscheinen nicht). Hochladen genügt, nach ein bis zwei Minuten ist das Projekt online.

**Startbestand: 18 Projekte** mit Bildern aus Portfolio, Camperbau-Portfolio und Instagram (Motion Beach Davos, Mybikeplan, Space 2.0, Kolibri, Netzwerk, Telefonhörer, Albert's Space Bar, Wald-Shotbar, Uhrenvitrine, Spuckschutz, Kinderspielburg, Modulares Chalet, Splenius, Thirsty Koi, DJ-Pult ohne Kundennamen, Handtuchgestell Medifit, Campermöbel Leichtbau, VW T4 Camperumbau). Bilder sind Platzhalter bis zu Reys besseren Fotos.

**Vorschau:** eigenes Repository `creyation-relaunch` mit GitHub Pages → `https://panta-rey.github.io/creyation-relaunch/`; `baseurl: "/creyation-relaunch"`, `vorschau: true` (noindex). Die Live-Seite bleibt unverändert bis zum Umzug (`baseurl: ""`, `vorschau: false`, Inhalt ins Repository `creyation`).

**Vorschau-Repository per PowerShell einrichten (Anleitung an Rey, 27.09.2026):**
1. Auf github.com → «New repository», Name exakt `creyation-relaunch` (muss zu `baseurl` passen), Public, **ohne** README, .gitignore oder Lizenz.
2. PowerShell:
   ```powershell
   cd "$HOME\Documents"
   Expand-Archive -Path "$HOME\Downloads\creyation-relaunch.zip" -DestinationPath .
   cd creyation-relaunch
   Set-Content .gitignore "_site/`n.jekyll-cache/"
   git init
   git add .
   git commit -m "Grundgerüst neue Website"
   git branch -M main
   git remote add origin https://github.com/Panta-rey/creyation-relaunch.git
   git push -u origin main
   ```
3. Repository → Settings → Pages → Source «Deploy from a branch», Branch `main`, Ordner `/ (root)` → Save. Fortschritt unter «Actions» («pages build and deployment»).
4. Vorschau: https://panta-rey.github.io/creyation-relaunch/
5. Spätere Änderungen: `git add .` → `git commit -m "…"` → `git push`.
Stolpersteine: Push abgelehnt, weil das Repository beim Anlegen eine README bekam → `git pull origin main --allow-unrelated-histories`, dann erneut pushen. Seite ohne Gestaltung → Repository-Name und `baseurl` stimmen nicht überein. Warnungen «LF will be replaced by CRLF» sind harmlos.

**Erster Build auf GitHub schlug fehl (27.09.2026):** «Liquid syntax error (line 1): Expected end_of_string but found id» in `projekte/index.html`. Ursache: GitHub Pages läuft mit **Jekyll 3.10**; dort kann `where_exp` nur **eine** Bedingung prüfen (`and`/`or` erst ab Jekyll 4). Behoben: Bedingungen werden verkettet (`where_exp … | where_exp …`), die Bildauswahl nach Dateiendung läuft über eine Schleife mit `{% if … or … %}` und eine Liste aus `capture` + `split` (Einträge sind jetzt Pfade als Text, nicht Objekte). **Regel für künftige Änderungen:** in `where_exp` nie `and`/`or` verwenden. Lokal wird mit einem Test-Plugin gebaut, das `where_exp` wie Jekyll 3.10 behandelt (nicht im Paket). Aktualisieren beim Rey: neues ZIP mit `Expand-Archive … -Force` über den Ordner entpacken, dann `git add .`, `git commit`, `git push`.

**Vorschau läuft (27.09.2026).** Reys Rückmeldung: «Sonst sieht das Grundgerüst mal gut aus», aber «Alle Produkte» bei «Eigene Produkte» war ohne Funktion (zeigte auf den Abschnitt selbst).

**Produktseite (27.09.2026):** `produkte/index.html`, gespeist aus `_data/produkte.yml` (id, name, linie, masse, text, bild, optional farben). Gruppiert nach Linien Home, Haustiere, Werkstatt; je Produkt Bild, Masse (L × B × H in cm), Kurztext, «Anfrage senden». MOTU TANE mit Farbwahl (Crème, Pantone 5757 C, Pantone 497 C; Klick wechselt das Bild). «Anfrage senden» führt zum Kontaktformular auf der Startseite und füllt es vor (Anliegen «Produkt», Text «Ich interessiere mich für: …», bei MOTU TANE inkl. Farbe). Verlinkt: Menü «Produkte», «Alle Produkte», «Produkte ansehen». Bilder in `assets/bilder/produkte/` (Platzhalter aus Instagram, Portfolio und Reys Uploads; Mülli-Rendering, Flohmarktfoto). Casa del Paw mit Stoff- und Holzwahl folgt als eigene Seite.

**Lokal getestet** mit Jekyll 4.3 plus Test-Plugin mit dem `where_exp`-Verhalten von 3.10: Übersicht, Filter, Projektseite mit Grossansicht, Startseite, Handyansicht, keine Skriptfehler.

**Abfallsackhalter heisst «Mülli»** (Rey, 27.09.2026; die Vorschläge PANDORA, AUGIAS, PITHOS gefielen nicht). In `_data/produkte.yml` eingetragen.

**Kundenliste: alle freigegeben** (Rey, 27.09.2026). Auf der Startseite unter «Ich durfte arbeiten für und mit»: Hotel Morosani Schweizerhof, Mybikeplan.ch, Space 2.0, Space Monki, Red Bull, Jägermeister, Das Viertel Basel, Netzwerk Basel, Tension Festival, Terrazzza Festival, Modular Festival, Alta Vista Events, Watson, Creamelt / Label Reversed, Camper&Cars, Custom Campers, Physio Medifit, Bläsikrippe Basel, Baumhaus Zürich, Echo from Venus, Heimat (Koch & Gsell AG), Restaurant Krokodil, Makita Schweiz, Atelier Achtundzwanzig, Neomat AG.

**Noch offen:** Name der hellen MOTU-TANE-Farbe (vorläufig «Crème»).

## D21. Casa del Paw, Über mich, Kontakt, Impressum, Datenschutz (27.09.2026)

**Casa del Paw** (`produkte/casa-del-paw/`): Logo der Untermarke, Einleitung, Masse 40 × 83 × 42 cm, **Konfigurator** mit 7 Stoffen (Bilbao, Haifa, Palm Beach, Roebuck, St Tropez, Kas, Nikitas; Farbtupfer aus den Fotos gemessen) und 3 Holztönen (Natur, Cognac, Chocolat). Vorhandene Fotos: alle Stoffe in Natur, dazu Cognac mit Nikitas, Roebuck, Bilbao und Chocolat mit Kas, Haifa, Nikitas. Fehlt eine Kombination, zeigt die Seite den Stoff in Natur mit Hinweis und das Holzmuster daneben. «Anfrage senden» füllt das Kontaktformular mit Stoff und Holz vor. Dazu Abschnitt Vitruvius und «Happy Clients» (3 Fotos) mit Link zu @casadelpaw. Daten in `_data/casadelpaw.json`, Bilder in `assets/bilder/casadelpaw/` (nur Reys eigene Fotos, keine Moodbilder). Auf der Produktseite führt das Katzensofa mit «Stoff und Holz wählen» dorthin. Weitere Kombinationsfotos: als `stoff-holz.jpg` ablegen und in `casadelpaw.json` unter `kombis` eintragen.

**Kontakt** (`kontakt/`): Kontaktbereich als gemeinsamer Baustein `_includes/kontakt.html` (Startseite und Kontaktseite). Produktanfragen führen auf `/kontakt/?produkt=…` (vorausgefüllt). **Formulardienst:** In `_config.yml` `formular_ziel` setzen (z. B. Formspree: Konto auf formspree.io mit rey@creyation.ch, neues Formular anlegen, Adresse `https://formspree.io/f/…` eintragen). Dann sendet das Formular direkt (mit Dankesmeldung, Spamschutz-Feld `_gotcha`, Betreff mit Anliegen). Solange leer, öffnet es wie bisher das E-Mail-Programm. Die Datenschutzerklärung passt ihren Text automatisch an.

**Über mich** (`ueber-mich/`): Porträt (aus dem CV im Portfolio, schwarz-weiss; bei Bedarf durch ein neueres ersetzen: `assets/bilder/rey-gafner.jpg`), Text in Ich-Form (Biologe, musisches Profil, seit 2017, Arbeitsweise), Geschichte der Visitenkarte mit Faltmuster 2026 und Faltprozess-Foto, Werkstatt (CNC 2800 × 1500 × 200 mm, 3D-Druck, SketchUp und Fusion 360, Partnerbetriebe), «Woran man meine Arbeiten erkennt» (gesteckt statt geschraubt, Licht, massgenau, reparieren, Augenzwinkern). Menü «Über mich» und «Mehr über mich» verlinkt.

**Impressum** (`impressum/`): Creyation Gafner, Inhaber Rey Gafner, Dörflistrasse 1C, 8903 Birmensdorf, E-Mail, Einzelunternehmen im Handelsregister ZH, Werkstatt Hinteregg, Haftung, Urheberrecht. **UID fehlt noch:** auf zefix.ch nachschlagen und in `_config.yml` bei `uid` eintragen (Online-Suche fand sie nicht).

**Datenschutz** (`datenschutz/`): nach DSG; Verantwortlicher, Hosting GitHub Pages (Server-Logs), keine Cookies/kein Tracking, Schriften lokal, sessionStorage nur für die Einstiegsanimation, Kontaktformular/E-Mail (Formspree falls eingerichtet, Google Workspace), Bekanntgabe in die USA, Instagram-Links, Rechte, EDÖB. **Hinweis:** sorgfältige Vorlage, aber keine Rechtsberatung; bei Bedarf prüfen lassen.

Fusszeile: Impressum und Datenschutz verlinkt. Menü «Kontakt» führt auf die Kontaktseite. Alles mit dem Jekyll-3.10-Verhalten gebaut und im Browser getestet (Konfigurator mit vorhandener und fehlender Kombination, vorausgefüllte Anfrage, keine Skriptfehler).

## D22. Lokaler Ordner, UID und Formulardienst (27.09.2026)

- Reys lokaler Projektordner liegt neu unter **`C:\Users\rey_g\projects\creyation-relaunch`** (Verschieben ist für Git unproblematisch, der Ordner `.git` zieht mit).
- Rey hat **UID** und **`formular_ziel`** (Formspree) in `_config.yml` eingetragen und pusht sie mit `git add _config.yml`, `git commit`, `git push`.
- **Achtung bei künftigen ZIP-Paketen:** Sie enthalten eine eigene `_config.yml`. Damit Reys Einträge nicht überschrieben werden, müssen UID und Formspree-Adresse in Claudes Arbeitskopie nachgetragen werden (Werte bei Rey erfragen), oder Rey stellt nach dem Entpacken seine Fassung mit `git restore _config.yml` wieder her (nur wenn das Paket an `_config.yml` sonst nichts ändert).
- Neuer Aktualisierungsweg: `cd "C:\Users\rey_g\projects"`, `Expand-Archive -Path "$HOME\Downloads\creyation-relaunch.zip" -DestinationPath . -Force`, `cd creyation-relaunch`, `git add .`, `git commit -m "…"`, `git push`.

## D16. Offene Punkte (Relaunch)

- [x] Telefonnummer: nein (nur Handy, privat)
- [x] Quelldatei des Faltmusters erhalten (`Visitenkarte.psd`, siehe D7)
- [x] Linienstärken geklärt (siehe D7)
- [x] Handyvideo vom Falten erhalten (27.09.2026, 56 s), Faltfolge in D15 festgehalten
- [ ] Faltfolge (D15) von Rey bestätigen lassen
- [ ] Namenssystem der Produkte bestätigen (Mythologie, Antike, Anatomie?); Name für den Abfallsackhalter
- [ ] Produkt-Details: Masse, Materialien, Farben, Lieferzeiten, Preise (bzw. «auf Anfrage») für MOTU TANE, XIPE, Katzenhaus, Casa del Paw, Vitruvius, Abfallsackhalter, ätherische Toilette
- [ ] Zeigen Dayrise und T4-Bett als «Studien»: ja oder nein? Wurde das automatische T4-Bett in den eigenen T4 eingebaut?
- [x] Camperbau: wird wieder aktiv angeboten (viertes Standbein, eigene Projektkategorie, Kontakt-Anliegen «Camperausbau»)
- [ ] Über mich: welche Teile der Biografie (Biologie MSc UZH, Pilot, Forschung für Leben …), evtl. Restaurationen als persönliche Note
- [ ] Referenzliste: dürfen alle Kunden namentlich genannt werden (Hotel Morosani, Alta Vista Events, Space Monki, Red Bull, Jägermeister, Watson, Creamelt, Camper&Cars, Medifit, Mybikeplan …)?
- [ ] Makita-Erwähnung («Proudly sponsored by» im Portfolio) weiterhin gewünscht?
- [ ] Instagram-Datenexport (Beiträge, JSON, hohe Qualität) und Originalfotos für die Website
- [x] Konzept und Struktur freigegeben (27.09.2026)
- [ ] Rückmeldung zum Prototyp Startseite v1 (D17)
- [x] Schrift: Open Sans (selbst gehostet)
- [x] Offizielles Logo aus Reys AI-Dateien übernommen (Schrift als Pfade), siehe D20
- [x] Echte 3D-Faltung für den Einstieg (Prototyp v2, D18)
- [x] Faltkarte 2026 und drei Faltvideos analysiert (D19), Faltung v3 umgesetzt
- [x] Faltung v3.1: Papiermodell, keine getrennten Teile mehr
- [x] Faltung v3.2: flüssiger Ablauf, Lehne leicht nach hinten, senkrechte Beine, Flügel hinter der Lehne
- [x] Faltung v3.2 angenommen; Feinschliff (linkes Hinterbein, Flügel hinter der Lehne) später
- [ ] Bessere Projektbilder von Rey (Vorgaben in D18)
- [x] Grundgerüst Jekyll mit Projektübersicht, Projektseiten und Ordnersystem (D20)
- [ ] Vorschau-Repository `creyation-relaunch` einrichten (Anleitung PowerShell in D20)
- [x] Kundenliste: alle freigegeben
- [x] Inszenierung bleibt (Filter und Standbein)
- [x] Impressum mit vollständiger Büroadresse
- [x] Abfallsackhalter heisst «Mülli»
- [ ] Name der hellen MOTU-TANE-Farbe
- [ ] Projektbilder zusammenstellen und als Ordner hochladen
- [x] Produktseite mit Farbwahl MOTU TANE und vorausgefüllter Anfrage
- [x] Casa del Paw mit Stoff- und Holzwahl (D21)
- [x] Über mich, Kontakt, Impressum, Datenschutz (D21)
- [x] Formulardienst (Formspree) und UID eingetragen (D22); nach dem Push Formular in der Vorschau testen
- [ ] Werte von UID und Formspree-Adresse in Claudes Arbeitskopie übernehmen (sonst überschreibt das nächste ZIP sie)
- [ ] Porträt für «Über mich» bestätigen oder ersetzen

---

# Teil II – Technik und Betrieb

## 1. Lieferumfang

| Datei | Inhalt |
|---|---|
| `index.html` | Komplette Website als eine einzige Datei (HTML, CSS und JavaScript eingebettet). Bilder aus `bilder/`. Läuft ohne Server, ohne Baukasten. |
| `bilder/`, `bilder/klein/` | Website-Bilder (Grossansicht bis 2000 px, Vorschau bis 1000 px), erzeugt durch `download-bilder.ps1` |
| `CNAME` | Enthält `www.creyation.ch`, sagt GitHub Pages die eigene Domain. Nicht löschen. |
| `.nojekyll` | Leere Datei, GitHub liefert Dateien unverändert aus. |
| `.gitignore` | Enthält `HANDOFF.md`, damit dieses interne Dokument nicht öffentlich wird. |
| `download-bilder.ps1` | Einmal-Skript zum Herunterladen der Bilder von Wix. Liegt **nicht** im Projektordner (Downloads). |
| `HANDOFF.md` | Dieses Dokument. Liegt lokal, wird nicht auf GitHub hochgeladen. |

Die neue Seite ist ein **One-Pager**: Alle früheren Unterseiten sind jetzt Abschnitte einer Seite, die über das Menü angesprungen werden.

---

## 2. Aufbau der alten Wix-Seite

| Wix-Seite | Alte URL | Neuer Abschnitt | Anker |
|---|---|---|---|
| HOME | `/meinewebsite` | Hero + «Über mich» + Kontakt | `#top`, `#ueber`, `#kontakt` |
| PROJECTS | `/meinewebsite/projects` | Projekte | `#projekte` |
| ABOUT | `/meinewebsite/about` | Leistungen + Porträt | `#ueber` |
| NEWS | `/meinewebsite/kopie-von-projects` | Aktuell | `#aktuell` |
| Shop | `/meinewebsite/category/all-products` | Shop | `#shop` |

Alte Menübezeichnungen waren englisch (HOME, PROJECTS, ABOUT, NEWS, Shop). Neu: Projekte, Aktuell, Shop, Über mich, Kontakt. Der englische Claim «Have a seat – dream – we talk – I build» und «Let's work together» wurden bewusst beibehalten.

Alte Meta-Beschreibung (About-Seite): «Realizing dreams since 1991. Einzigartige Handwerke.»
Google-Site-Verification der alten Seite: `D3_F3Rpj6CyC71LVBOm6-i6IbAN6rqh1e47JZSeMsZw` (nur relevant, falls die Google Search Console weiter genutzt werden soll; dann als Meta-Tag im `<head>` ergänzen oder die Domain neu verifizieren).

---

## 3. Alle Inhalte (Originaltexte)

### Home
- Claim: *Have a seat – dream – we talk – I build*
- Überschrift: *Jeder Mensch ist in seiner Art einzigartig und individuell*
- Text: *Diese Individualität findet in der industriellen Massenproduktion keinen Platz. Ich habe mich als Allrounder darauf spezialisiert, in enger Zusammenarbeit mit den Kunden diese Individualität zurück zu bringen. Ihre Idee mag noch so fantasievoll sein, Ich entwickle diese Idee und finde für Sie die passende Umsetzung. Seien Sie sich selbst und realisieren Sie mit mir zusammen ein Produkt, an dem Sie lange Freude haben werden, weil es Sie und ihre persönliche Philosophie widerspiegelt. Fallen Sie auf, durch einzigartige und massgeschneiderte Umsetzungen.*
- Zwischenzeile: *Einzigartigkeit und Individualität*
- Kontakt: *Let's Work Together* – Stifelacher 3, 8132 Hinteregg – rey@creyation.ch
- Formularfelder: Name, Vorname, Email, Nachricht – Bestätigung «Danke für deine Nachricht!»
- Footer: © 2019 by Creyation – contact: rey@creyation.ch

### About
- *Ihr kompetenter Partner in:* Visuelle Konzepte, Engineering, CAD Zeichnungen, CNC Fräsen, 3D Druck, Möbelbau/Design, Camper Ausbau, Installationen, Skulpturen, Werbeauftritte, Messestand Design, Lounge Design, Vorübergehende Raumgestaltungen, Beständige Raumausbauten
- Porträt: *REY GAFNER – Realizing dreams since 1991*

### Projects
**Kinderspielburg** (Bläsikrippe, Basel)
- Für die Bläsikrippe in Basel wurde eine Kinderburg entworfen, dessen Design fernab von konventionellen Spielhäuschen sein sollte. Eine Spielburg die neben dem Spiel und Spass zum Fantasieren einlädt.
- Das Innere der Spielburg läd zum Träumen ein. Gibt es etwas schöneres als ein Mittagsschläfchen unter den Sternen?

**C H A L E T** (Das_Viertel, Basel)
- Für Das_Viertel in Basel wurde ein modulares Chalet entworfen, das man in handliche Einzelteile zerlegen kann. Kurzerhand wird eine ungenutzte Aussenfläche nutzbar. Drausen tobt der Winter und Drinnen ein warmes Fest. Dimension: 12 x 6 x 4.5m
- Optional können doppelverglaste Plexiglasfeister in die gewünschten Wandelemente eingelassen werden
- Sparen für Sparen wird das Dach aufgebaut
- Trotz der Grösse – Präzision
- Wandelement für Wandelement wird die Grundstruktur zusammengesteckt

**D A S V I E R T E L** (Club, Basel)
- Renovationsarbeiten im basler Club – Das_Viertel. Der erste Eindruck zählt. Der Empfangs und Garderobenbereich wurde in einem Kupfereffektton gestrichen um den Gästen einen warmen Empfang zu bieten. Dieses Wohlgefühl wird durch eine zentrale Insel-Installtion unterstützt. Naturbelassen und von innen mit einem Warmweiss ausgeleuchtet.
- Empfangs-Insel naturbelassen und von innen mit einem Warmweiss ausgeleuchtet.
- Die Klubinterne Lounge wurde vergrössert und in einem Sett von Farbtönen gestrichen, die das dreidimensionale Raumgefühl verstärken.
- Die Damentoilette wurde komplett sarniert und erstrahlt nun in angenehmen Petrol, Grau und Beige-Tönen. Eine der vier Kabienen wurde vergrössert und rollstuhlgerecht erweitert.
- Im Aussenbereich wurde eine neue Lounge entworfen. Reduziert, einfach und schlichtes Design kombiniert mit naturbelassenen Materialien. Ein leichtes und natnatürliches Loungedesign.
- Die Rückwand gewährt der Konversation ihre nötige Privatsphäre. Optisch an das Design der Sitzbank angepasst.

**B A I N S & D O U C H E S** (Club)
- Keine Idee ist zu fantasievoll.
- Ich baue auch kurzerhand ein Badezimmerthema in einen Club hinein.
- An den Seiten und hinter dem DJ-Pult wurden Bildschirme verbaut mit einem System welche die Bildschirme mit Videos nach wunsch bespielt. Zum Badezimmer passend gewählt – Unterwasserwelten.

### News
**PERGULA**: Für eine Dachterrasse wurde eine Pergula entworfen, die im Sommer offen und im Winter geschlossen wird. So können Sie im Sommer die frische Brise geniessen und im Winter den beheizten Raum. Kurzerhand wird eine ungenutze Aussenfläche nutzbar für ein gemütliches Beisammensein.

### Shop (Wix)
Der Wix-Shop enthielt **nur die Wix-Vorlagenprodukte** (12× «Das ist ein Produkt», CHF 7.50 bis 130.00, Vorlagen-Kategorietext). Es gab keine echten Produkte. Deshalb wurde nichts davon übernommen.

---

## 4. Korrekturen gegenüber dem Original

Die Texte wurden inhaltlich unverändert übernommen, aber sprachlich geglättet:

| Original | Neu |
|---|---|
| dessen Design | deren Design |
| läd zum Träumen ein / etwas schöneres | lädt zum Träumen ein / etwas Schöneres |
| Drausen … Drinnen | Draussen … drinnen |
| Plexiglasfeister | Plexiglasfenster |
| Sparen für Sparen | Sparren für Sparren |
| basler Club | Basler Club |
| Empfangs und Garderobenbereich | Empfangs- und Garderobenbereich |
| Insel-Installtion | Insel-Installation |
| Klubinterne … Sett | clubinterne … Set |
| sarniert / Kabienen | saniert / Kabinen |
| natnatürliches | natürliches |
| Pergula / ungenutze | Pergola / ungenutzte |
| CAD Zeichnungne | CAD-Zeichnungen |
| zurück zu bringen / Ich (mitten im Satz) / ihre | zurückzubringen / ich / Ihre |
| Seien Sie sich selbst | Seien Sie Sie selbst |
| Vorübergehenden Raumgestaltungen | Temporäre Raumgestaltung |

Neu formulierte Stellen (kein Originaltext vorhanden): Hero-Unterzeile, Projektorte («Bläsikrippe, Basel» usw., aus den Texten abgeleitet), kurze Bildlegenden wo das Original keine hatte, Shop-Texte, Meta-Beschreibung.

---

## 5. Bilder (Inventar)

**Stand:** Die Seite lädt alle Bilder **lokal** aus dem Ordner `bilder/` (Grossansicht, bis 2000 px) und `bilder/klein/` (Vorschau, bis 1000 px). Das Skript `download-bilder.ps1` lädt sie von Wix herunter und legt zusätzlich die Originale in voller Auflösung unter `Dokumente\Creyation Admin\Wix-Originale` ab (Archiv, z. B. für Google Drive). Dateinamen: logo, hero, rey-gafner, spielburg-1…5, chalet-1…5, viertel-1…7 (Reihenfolge wie auf der Seite, viertel-1 = Aussenlounge), bains-1…3, pergola.

Wix-Bild-URLs lassen sich in der Grösse steuern: `https://static.wixstatic.com/media/<ID>/v1/fit/w_1600,h_1600,q_85/file.jpg`

| Verwendung | Wix-Medien-ID | Format |
|---|---|---|
| Logo (weiss auf schwarz, zugeschnitten x_1194,y_0,w_1614,h_3403) | `68577c_cd87cdf7124b416c8099ca86688aa4e2~mv2_d_3984_3421_s_4_2.jpg` | |
| Hero (Hintergrund der alten Startseite) | `68577c_1827deb137c9410cb0649aa65b9e767d~mv2_d_2407_2455_s_4_2.jpg` | fast quadratisch |
| Hintergrund alte Unterseiten (aktuell nicht verwendet) | `68577c_a59fe9636bb14a6d83f8cf49715be3fa~mv2_d_7283_7737_s_4_2.jpg` | |
| Porträt Rey Gafner (Zuschnitt x_128,y_420,w_1815,h_1602) | `68577c_2af2088e62894aca86ffa5799ccacfdc~mv2_d_2059_3264_s_2.jpg` | |
| Kinderspielburg 1 (Titel) | `68577c_0e100bdf9e8b4327921d0b53f00fbd3a~mv2.jpg` | breit |
| Kinderspielburg 2 | `68577c_75ac97b8a6044e7c8169ac51317424ff~mv2.jpg` | 4:3 |
| Kinderspielburg 3 | `68577c_2d1ba051f60140ef8e31df2e554ff38d~mv2.jpg` | 4:3 |
| Kinderspielburg 4 | `68577c_039a91849c744ede8aa342fbfb167ad3~mv2.jpg` | 9:16 |
| Kinderspielburg 5 (Sternenhimmel) | `68577c_98e0c77591c749efb4cdf60fcad88e67~mv2.jpg` | 3:4 |
| Chalet 1 (Titel) | `68577c_55717d926b1a4b81a8937bdbc1a9ca27~mv2.jpg` | breit |
| Chalet 2 (Plexiglasfenster) | `68577c_1cd70979bd5048bda8cd27b4b1e46149~mv2_d_3264_4896_s_4_2.jpg` | 2:3 |
| Chalet 3 (Sparren) | `68577c_70f42a8cd30c4461b3e0ecac3d36f4f8~mv2.jpg` | quer |
| Chalet 4 (Präzision) | `68577c_607e1566a5e4457fb3b57c91ec549c2a~mv2_d_3024_4032_s_4_2.jpg` | 3:4 |
| Chalet 5 (Wandelemente) | `68577c_1b808b7e1d4841dab651f7291d62f325~mv2.jpg` | 4:3 |
| Das Viertel 1 (Empfang Kupfer) | `68577c_23da230041ca4c7494a8637dd04324f5~mv2_d_4032_3024_s_4_2.jpg` | 4:3 |
| Das Viertel 2 (Empfangsinsel) | `68577c_ead6ba303bed484baa80c214d0c86e29~mv2_d_3024_4032_s_4_2.jpg` | 3:4 |
| Das Viertel 3 (Lounge innen) | `68577c_31f2c3a576f141a1a56ef0c921d8db7c~mv2_d_3024_4032_s_4_2.jpg` | 3:4 |
| Das Viertel 4 (Damentoilette) | `68577c_0a1c274561d8416e9f34e5fb734f08f8~mv2_d_3024_4032_s_4_2.jpg` | 3:4 |
| Das Viertel 5 (Aussenlounge, Titel) | `68577c_41ceda1fb5bb474a8cf2d1b52b91c69f~mv2.jpg` | breit |
| Das Viertel 6 (Aussenlounge Detail) | `68577c_17bce39ce6104d98bf60959e2d0d318f~mv2_d_3024_4032_s_4_2.jpeg` | 3:4 |
| Das Viertel 7 (Rückwand) | `68577c_1c52c63285ea4544a9c975ec0cc1fff4~mv2_d_4032_3024_s_4_2.jpg` | 4:3 |
| Bains & Douches 1 (Titel) | `68577c_7074ac6fb5434599a58e1040c7d63db2~mv2.jpg` | breit |
| Bains & Douches 2 | `68577c_fbb8d124c7b44874abe1267f7310de69~mv2_d_4896_3264_s_4_2.jpg` | 3:2 |
| Bains & Douches 3 (DJ-Pult) | `68577c_8ffdd8bd5e92467fa05986d5615bb850~mv2_d_3000_2250_s_2.jpg` | 4:3 |
| Pergola (SketchUp-Visualisierung, Zuschnitt x_100,y_0,w_1606,h_890) | `68577c_365d523d7ba344a898dc58e742e56082~mv2.jpg` | breit |

**Nicht übernommen:** Das Bild «Holzprodukte» (`11062b_325cf675bc6a4c0d9eb7d2e57a1aab77~mv2.jpg`) auf Home und About ist ein **Wix-Stockfoto** (erkennbar am Präfix `11062b_`). Es darf ausserhalb von Wix nicht ohne Weiteres verwendet werden und wurde deshalb weggelassen. Ebenso das Shop-Kategoriebild (`22e53e_…`, ebenfalls Wix-Vorlage).

**Stand 27.09.2026:** Die Bilder sind live und werden korrekt angezeigt (von Rey bestätigt). Die Wahl des Hero-Bilds erledigt sich mit dem Relaunch (Teil I, D15).

---

## 6. Design-Entscheidungen

> **Gilt für die aktuelle Seite und wird mit dem Relaunch abgelöst** (siehe Teil I, D7 und D15). Die Farben Beton/Petrol/Kupfer und die Schriften Archivo/Literata passen nicht zu Reys eigenem Stil (schwarz-weiss, gesperrt, Linien).

**Konzept:** Handwerk und Werkstatt statt Baukasten-Look. Das Schwarz des Logos bleibt als Rahmen (Header, «Aktuell», Footer), der Rest ist ruhig und lässt die Projektfotos wirken.

**Das eine auffällige Element:** Der Claim «Have a seat / dream / we talk / I build» gross im Hero, nummeriert, weil er tatsächlich eine Abfolge ist (der Arbeitsprozess), und nacheinander eingeblendet.

**Übernommen aus dem Original:** Gesperrte Grossbuchstaben-Titel (C H A L E T) für Projektnamen und Wortmarke.

**Farben** (in `index.html` oben unter `:root` zentral änderbar):

| Name | Hex | Herkunft / Einsatz |
|---|---|---|
| Beton | `#D5D3CD` | Seitenhintergrund, Werkstatt |
| Papier | `#ECEBE7` | helle Flächen (Leistungen, Shop-Karten, Kontakt) |
| Schwarz | `#000000` | Logo-Hintergrund, Header, Footer |
| Graphit | `#2E2F2D` | Fliesstext |
| Petrol | `#1D4B53` | Hauptakzent, aus dem Projekt «Das Viertel» |
| Kupfer | `#9C5B32` | Hover- und Fokusfarbe, aus dem Kupfereffekt-Empfang |

**Schriften** (Google Fonts): *Archivo* in breiter Ausführung für Titel und Navigation, *Literata* (Serifenschrift) für Fliesstext.

**Technik:** Responsiv bis Smartphone, Tastaturbedienung, «Bewegung reduzieren» wird respektiert, Bilder laden verzögert (lazy loading), Bildergalerie mit Vollbildansicht (Vor/Zurück-Buttons und Pfeiltasten, blättert innerhalb eines Projekts), strukturierte Firmendaten für Google (LocalBusiness-Schema).

---

## 7. Betrieb: Git, GitHub Pages, Domain und DNS

### A) Ablage und Ordner
| Was | Wo |
|---|---|
| Projektordner (Git-Repository) | `C:\Users\rey_g\projects\creyation` |
| GitHub-Repository (öffentlich) | https://github.com/Panta-rey/creyation, Branch `main` |
| Wix-Originalbilder (volle Auflösung) | `Dokumente\Creyation Admin\Wix-Originale` → zusätzlich in Google Drive sichern |
| Cyon-Zonen-Backup (Export JSON/BIND) | `Dokumente\Creyation Admin` → zusätzlich in Google Drive. **Nie in den Projektordner** legen (würde öffentlich). |
| Handoff | lokal im Projektordner (per `.gitignore` ausgeschlossen) und in Google Drive |
| Relaunch-Material (Portfolio-PDF, Casa-del-Paw-Dossier, Instagram-Screenshots, Renderings, Offerten, Visitenkarte, Logo) | `Dokumente\Creyation Admin\Material` → zusätzlich in Google Drive. **Nicht in den Projektordner** (würde öffentlich). |

### B) Änderungen veröffentlichen (PowerShell)
```powershell
cd C:\Users\rey_g\projects\creyation
git add .
git commit -m "Kurz beschreiben, was geändert wurde"
git push
```
Nach etwa einer Minute ist die Änderung online. Wurde etwas direkt auf github.com geändert, vorher `git pull`. Beim ersten Push gab es einen Konflikt mit bereits vorhandenen Dateien auf GitHub; gelöst mit `git push -u origin main --force`.

### C) Bilder von Wix lokal einbinden
`download-bilder.ps1` (im Downloads-Ordner) lädt alle Website-Bilder nach `bilder/` und `bilder/klein/` und die Originale ins Archiv:
```powershell
powershell -ExecutionPolicy Bypass -File "$env:USERPROFILE\Downloads\download-bilder.ps1"
```
Danach die neue `index.html` (mit lokalen Bildpfaden) in den Projektordner kopieren, lokal im Browser prüfen und pushen. Google Drive dient nur als Archiv, nicht als Bildquelle für die Website (unzuverlässig und langsam).

### D) GitHub Pages
Settings → Pages: Source «Deploy from a branch», Branch `main`, Ordner `/ (root)`, Custom domain `www.creyation.ch`. Nach erfolgreicher DNS-Prüfung **«Enforce HTTPS»** aktivieren. Empfohlen: Domain im GitHub-Konto verifizieren (Profil → Settings → Pages → Add a domain → TXT-Eintrag bei Cyon).

**Erledigt (27.09.2026):** Zertifikat ausgestellt, «Enforce HTTPS» aktiviert ✔, die Seite läuft unter https://www.creyation.ch.

*Verlauf:* **Stand 25.09.2026:** «DNS check successful» ✔. «Enforce HTTPS» ist noch grau mit dem Hinweis «a certificate has not yet been issued». GitHub fordert das Zertifikat automatisch bei Let's Encrypt an; das dauert meist 15–60 Minuten, selten bis zu einem Tag. Bis dahin liefert GitHub sein allgemeines `*.github.io`-Zertifikat aus, deshalb die Browser-Warnung `ERR_CERT_COMMON_NAME_INVALID`. Brave (und andere Browser) wechseln automatisch auf https://; zum Ansehen in der Zwischenzeit «Erweitert → Weiter zu www.creyation.ch» (unbedenklich, es werden keine Daten eingegeben).

**Falls das Zertifikat nach einigen Stunden bis einem Tag nicht kommt:** In Settings → Pages bei Custom domain auf «Remove» klicken, `www.creyation.ch` neu eintragen, «Save». Danach **sofort** im Projektordner `git pull` ausführen, weil GitHub dabei die Datei `CNAME` im Repository neu schreibt (sonst Konflikt beim nächsten Push).

### E) Domain und DNS – Ausgangslage und Entscheid
- Domain `creyation.ch` ist bei **Cyon registriert**, die **Nameserver zeigten aber auf Wix** (`ns8.wixdns.net`, `ns9.wixdns.net`). Die DNS-Zone bei Cyon war deshalb inaktiv («Zone eingeschränkt aktiv»).
- Entscheid: **Nameserver zurück zu Cyon** (`ns1.cyon.ch`, `ns2.cyon.ch`), damit keine Abhängigkeit von Wix mehr besteht.
- **Umgesetzt und bestätigt am 25.09.2026:** Die Nameserver sind jetzt `ns1.cyon.ch` und `ns2.cyon.ch`, die Cyon-Zone ist aktiv. Wix hat keinen Einfluss mehr auf DNS oder E-Mail.
- Abgleich mit der live Wix-Zone vor dem Umschalten: bei Wix nur 5 Google-MX-Einträge, **kein** SPF, **kein** DKIM, **kein** DMARC. Die Cyon-Zone enthält alles davon plus SPF, es ging also nichts verloren.

### F) Cyon-DNS-Zone (Sollzustand, fertig eingerichtet)
| Name | TTL | Typ | Wert |
|---|---|---|---|
| creyation.ch. | 15 Min | A | 185.199.108.153 |
| creyation.ch. | 15 Min | A | 185.199.109.153 |
| creyation.ch. | 15 Min | A | 185.199.110.153 |
| creyation.ch. | 15 Min | A | 185.199.111.153 |
| www.creyation.ch. | 15 Min | CNAME | panta-rey.github.io. |
| creyation.ch. | 1 Std | MX 1 | aspmx.l.google.com. |
| creyation.ch. | 1 Std | MX 5 | alt1.aspmx.l.google.com. |
| creyation.ch. | 1 Std | MX 5 | alt2.aspmx.l.google.com. |
| creyation.ch. | 1 Std | MX 10 | alt3.aspmx.l.google.com. |
| creyation.ch. | 1 Std | MX 10 | alt4.aspmx.l.google.com. |
| creyation.ch. | 1 Std | MX 15 | …mx-verification.google.com. (Überbleibsel Google-Verifizierung, harmlos) |
| creyation.ch. | 4 Std | TXT | `v=spf1 include:_spf.google.com ~all` (SPF, Cyon-Hinweis «nicht entfernen» ist normal) |
| creyation.ch. | 24 Std | NS / SOA | ns1.cyon.ch, ns2.cyon.ch (automatisch, nicht anfassen) |
| dev.creyation.ch. | 15 Min | A | 207.154.214.8 (alte IP, Zweck unklar, stört nicht; entfernen falls ungenutzt) |

Kein AAAA-Eintrag (bewusst; IPv6 für GitHub optional: 2606:50c0:8000::153 bis 8003::153). Aktive Cyon-DNS-Vorlage: Google Workspace. Kurze TTL (15 Min/1 Std) während der Umstellung; nach stabiler Woche optional auf 4 Std erhöhen.

### G) Nameserver-Umstellung prüfen (✔ abgeschlossen am 25.09.2026)

**Prüfergebnis vom 25.09.2026 (`Resolve-DnsName`), alles wie Sollzustand 7F:**

| Abfrage | Ergebnis | Bewertung |
|---|---|---|
| NS `creyation.ch` | `ns1.cyon.ch`, `ns2.cyon.ch` (TTL 24 Std) | ✔ Cyon ist zuständig |
| A `creyation.ch` | 185.199.108/109/110/111.153 (TTL 15 Min) | ✔ GitHub Pages |
| CNAME `www.creyation.ch` | `panta-rey.github.io` (TTL 15 Min) | ✔ |
| MX `creyation.ch` | aspmx (1), alt1/alt2 (5), alt3/alt4 (10), mx-verification (15) | ✔ Google Workspace (Reihenfolge in der Ausgabe ist zufällig, massgebend ist die Priorität) |
| TXT `creyation.ch` | `v=spf1 include:_spf.google.com ~all` (TTL 4 Std) | ✔ SPF aktiv |
| GitHub Pages | «DNS check successful» | ✔ |

Die folgenden Befehle bleiben als Referenz für spätere Prüfungen stehen.

Die Registrierungsstelle direkt fragen (funktioniert mit `nslookup`, nicht mit `Resolve-DnsName`):
```powershell
nslookup -type=NS creyation.ch 130.59.31.41
```
(130.59.31.41 = a.nic.ch, Server der .ch-Registry.)

Ursprüngliches Vorgehen (Schritte 1–3 und 5 erledigt, 4, 6 und 7 noch offen bzw. teilweise offen):
1. ✔ Im my.cyon (DNS-Editor, Kasten «Nameserver der Domain») prüfen, ob `ns1/ns2.cyon.ch` gespeichert sind. Falls nicht: «Nameserver ändern» → Cyon-Nameserver → speichern, ggf. Bestätigung abschliessen.
2. ✔ Falls dort bereits Cyon steht, die Registry aber nach einigen Stunden noch Wix meldet: Cyon-Support kontaktieren.
3. ✔ Sobald die Registry Cyon meldet, prüfen:
```powershell
Clear-DnsClientCache
Resolve-DnsName creyation.ch -Type A -Server ns1.cyon.ch   # Cyon liefert GitHub-IPs?
Resolve-DnsName creyation.ch -Type NS -Server 8.8.8.8     # Google sieht Cyon?
Resolve-DnsName creyation.ch -Type MX                     # E-Mail weiter bei Google?
```
Alternativ ohne Befehle: dnschecker.org → NS → `creyation.ch`.
4. ☐ Test-Mail von einer fremden Adresse an rey@creyation.ch senden und einmal zurückantworten (prüft Empfang und Versand).
5. ✔ GitHub → Settings → Pages: DNS-Prüfung grün, «Enforce HTTPS» aktiviert (27.09.2026).
6. ☐ Neues Zonen-Backup bei Cyon exportieren («Zone exportieren») und ablegen (siehe A).
7. ◐ Browser-Test (www.creyation.ch mit HTTPS ✔; Variante ohne www noch prüfen): https://www.creyation.ch und https://creyation.ch (ohne www) zeigen die neue Seite mit Schloss; die Variante ohne www leitet auf www weiter. Bei alter Wix-Seite: privates Fenster (Cache).

Hinweise zu PowerShell: `Resolve-DnsName ch` braucht einen Punkt (`ch.`); direkte Abfragen an Registry-Server mit `Resolve-DnsName` ergeben «DNS-Serverfehler», deshalb `nslookup` verwenden.

### H) Wix-Konto
Erst kündigen/löschen, wenn (1) die Bilder lokal eingebunden und online sind und (2) die Nameserver-Umstellung abgeschlossen ist. Beide Bedingungen sind erfüllt (Bilder live, Nameserver bei Cyon). Vor der Kündigung noch die Wix-Originale in Google Drive sichern. Die Domain selbst ist bei Cyon und nicht betroffen.

### I) Später: E-Mail-Zustellbarkeit verbessern (optional)
DKIM in Google Workspace aktivieren (Google Admin → Apps → Google Workspace → Gmail → «E-Mail authentifizieren»), den erzeugten TXT-Eintrag `google._domainkey` bei Cyon hinzufügen. Optional zusätzlich DMARC (`_dmarc`).

---

## 8. Kontaktformular

Aktuell öffnet das Formular das E-Mail-Programm des Besuchers mit vorausgefüllter Nachricht an rey@creyation.ch. Das funktioniert ohne Server, ist aber auf Geräten ohne eingerichtetes Mailprogramm unpraktisch.

**Empfohlenes Upgrade:** Einen Formulardienst wie Formspree, Web3Forms oder (bei Netlify-Hosting) Netlify Forms nutzen. Dann wird die Nachricht direkt verschickt. Anpassung im `<form>`-Tag und im Script-Block «Kontaktformular» am Ende von `index.html`.

---

## 9. Shop

> **Relaunch:** Die drei Platzhalter werden durch die echten Produkte ersetzt (Teil I, D9): Linien Home, Haustiere, Werkstatt, auf Bestellung gefertigt.

**Aktueller Stand:** Anfrage-Shop mit drei Angeboten, die aus den eigenen Projekten abgeleitet sind (Lounge- & Sitzmöbel, Modulare Bauten, Planung/CAD/Visualisierung), alle «Preis auf Anfrage». Der Button füllt das Kontaktformular mit dem Produktnamen vor. **Diese drei Einträge sind Platzhalter** und sollten durch das echte Angebot ersetzt werden.

**Neues Produkt hinzufügen:** In `index.html` einen `<article class="product">`-Block kopieren, Bild, Titel, Text und Preis ändern, beim Button `data-product="…"` anpassen.

**Direkt verkaufen:** Beim Button `data-buy="https://…"` mit einem Bezahl-Link füllen. Der Button heisst dann automatisch «Jetzt kaufen» und öffnet die Bezahlseite. Geeignete Bezahl-Links:
- Stripe Payment Links (Kreditkarte, TWINT, Apple/Google Pay)
- PayPal-Zahlungslinks
- SumUp-Zahlungslinks

**Grösserer Shop (viele Produkte, Varianten, Lager):** Snipcart (Warenkorb in die bestehende Seite eingebettet) oder Shopify. Dann dieses Dokument und `index.html` als Grundlage für das Design verwenden.

---

## 10. Rechtliches (Schweiz) – bitte prüfen lassen

- **Impressum:** Im Footer vorhanden (Name, Adresse, E-Mail). **Korrektur nötig:** Das Impressum muss die im Handelsregister eingetragene Büroadresse nennen: Dörflistrasse 1C, 8903 Birmensdorf. Aktuell steht dort die Werkstatt Hinteregg; beide Adressen beim Relaunch getrennt als «Büro» und «Werkstatt» aufführen. Firmenname «Creyation Gafner». UID im Handelsregister (zefix.ch) nachschlagen und ergänzen. Bei Online-Verkauf verlangt das UWG vollständige Angaben inkl. Kontaktmöglichkeit; ggf. Telefonnummer und UID/Handelsregister ergänzen, falls vorhanden.
- **Datenschutzerklärung:** Fehlt noch. Nach dem revidierten Datenschutzgesetz (revDSG) nötig, sobald Personendaten bearbeitet werden (Kontaktformular, Google Fonts, später Zahlungsanbieter). Generatoren z. B. von PrivacyBee oder Datenschutzpartner.
- **Google Fonts:** Werden aktuell von Google-Servern geladen. Für mehr Datenschutz die Schriften selbst hosten (Download über google-webfonts-helper).
- **AGB:** Bei echtem Online-Verkauf empfehlenswert (Lieferung, Zahlung, Rücktritt, Gewährleistung).

---

## 11. Offene Punkte (Checkliste)

**Erledigt**
- [x] Ziel-Domain festgelegt: www.creyation.ch (Cyon), Hosting GitHub Pages
- [x] Repository Panta-rey/creyation erstellt, Website gepusht (inkl. CNAME, .nojekyll, .gitignore)
- [x] Cyon-DNS-Zone für GitHub Pages und Google Workspace vorbereitet (Abschnitt 7F)
- [x] Abgleich mit Wix-Zone: nichts fehlt
- [x] Skript und `index.html` mit lokalen Bildern bereitgestellt
- [x] Nameserver-Umstellung Wix → Cyon abgeschlossen, alle DNS-Einträge öffentlich geprüft (25.09.2026, Abschnitt 7G)
- [x] GitHub Pages: «DNS check successful»
- [x] HTTPS-Zertifikat ausgestellt, «Enforce HTTPS» aktiviert (27.09.2026)
- [x] Bilder lokal eingebunden und live, korrekt angezeigt (bestätigt 27.09.2026)
- [x] DNA von Creyation Gafner erarbeitet (Teil I)

**Als Nächstes**
- [ ] Test-Mail an rey@creyation.ch (Empfang und Antwort)
- [ ] Browser-Test ohne www (https://creyation.ch leitet auf www weiter, mit Schloss)
- [ ] Neues Zonen-Backup bei Cyon exportieren
- [ ] Wix-Originale und Zonen-Backup in Google Drive sichern
- [ ] Wix-Konto kündigen (erst nach dem Sichern der Wix-Originale)

**Inhalt und Recht**
- [ ] Shop-Platzhalter durch echte Angebote/Preise ersetzen
- [ ] Datenschutzerklärung erstellen und im Footer verlinken
- [ ] Kontaktformular auf Formulardienst umstellen
- [ ] Neue Projekte ergänzen (Inventar in Teil I, D13; erfolgt mit dem Relaunch)
- [ ] Facebook-Links entfernen (veraltet): Kontakt, Footer und `sameAs` im LocalBusiness-Schema; nur Instagram @creyationgafner (und für Casa del Paw @casadelpaw)
- [ ] Firmenname überall «Creyation Gafner» statt «Creyation»; Impressum auf Büroadresse Birmensdorf (Abschnitt 10)
- [ ] Optional: DKIM/DMARC einrichten, `dev.creyation.ch` klären

**Relaunch**
- [x] Konzept freigegeben (Teil I, D15)
- [x] Prototyp Startseite v1 (Teil I, D17)
- [x] Prototyp v2 mit 3D-Faltung (Teil I, D18)
- [ ] Offene Punkte aus Teil I, D16
