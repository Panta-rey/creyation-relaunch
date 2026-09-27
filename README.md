# Creyation Gafner – neue Website (Jekyll auf GitHub Pages)

## Vorschau einrichten (einmalig, die Live-Seite bleibt unberührt)
1. Auf github.com ein neues Repository **creyation-relaunch** anlegen (öffentlich).
2. Den ganzen Inhalt dieses Ordners hochladen («Add file» → «Upload files», Ordner hineinziehen).
3. Settings → Pages → Source: «Deploy from a branch», Branch `main`, Ordner `/ (root)` → Save.
4. Nach ein bis zwei Minuten: https://panta-rey.github.io/creyation-relaunch/

Die Vorschau ist für Suchmaschinen gesperrt (`vorschau: true` in `_config.yml`).

## Neue Projekte
Siehe **ANLEITUNG.md**: Ordner in `projekte/` anlegen, `index.md` aus `projekte/_vorlage/` hineinkopieren und ausfüllen, Bilder dazulegen, hochladen.

## Umzug auf www.creyation.ch (später)
In `_config.yml`: `baseurl: ""` und `vorschau: false`, dann den Inhalt ins Repository `creyation` übernehmen (CNAME behalten).
