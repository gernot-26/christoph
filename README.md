# ECOTONE

Statische, responsive Website in HTML, CSS und JavaScript. Keine Installation, kein Build und keine externen Laufzeitabhängigkeiten.

## Lokal ansehen

Im vorhandenen Checkout arbeiten; kein zusätzliches Git-Worktree erforderlich.

```sh
cd /workspace/christoph
python3 -m http.server 8000 --bind 127.0.0.1
```

Alternativ `index.html` direkt im Browser öffnen. Alle Links und Assets sind relativ und funktionieren auch in einem Unterverzeichnis.

## Dateien

- `index.html`: Startseite mit Header, Arbeitsbereichen und Veranstaltung
- `projekte.html`, `buecher.html`, `filme.html`, `kontakt.html`: Unterseiten
- `assets/style.css`, `assets/site.js`: Gestaltung und mobiles Menü
- `assets/images/`: lokal gespeicherte Headerbilder

## Eigene Filme einbinden

1. Ein für das Web optimiertes Video als `assets/hero.mp4` ablegen (ohne Ton, idealerweise kurze Schleife). Die tatsächlichen Aufnahmen sind noch nicht vorhanden.
2. In `index.html` am Body `data-hero-video` ergänzen: `<body class="home" data-hero-video>`.
3. Bei reduzierter Bewegung, blockiertem Autoplay oder Ladefehler bleibt das Standbild sichtbar. Es wird kein externer Videodienst geladen.
4. Das Posterbild kann durch eigene Aufnahmen ersetzt werden. Bild und Video sollten keine wichtigen Informationen enthalten, die nur visuell vermittelt werden.

## Vor einer späteren Veröffentlichung

Bestätigte Kontakt- und Unternehmensdaten ergänzen; die Kontaktseite ist ausdrücklich noch ein Platzhalter. Projektbeschreibungen, eigene Filme, Buchdetails sowie Uhrzeit und Veranstaltungsdetails fehlen noch. Rechtliche Pflichtangaben (insbesondere Impressum und Datenschutz) anhand des tatsächlichen Betreibers, Serverbetriebs und der anwendbaren Anforderungen ergänzen. Diese Angaben wurden nicht erfunden. Es gibt kein Kontaktformular, keine Analysewerkzeuge, keine externen Schriftarten und keine Cookies durch diese Website.

Für FTP später alle HTML-Dateien und den vollständigen Ordner `assets` in das gewünschte Webverzeichnis übertragen. Keine Zugangsdaten oder Git-Metadaten hochladen. In diesem Auftrag wurde nichts veröffentlicht oder per FTP übertragen.

## Bildquellen

Die Naturfotos sind vorläufige, lokal gespeicherte Motive, keine Aufnahmen von ECOTONE oder konkreten Tiroler Projekten.

- `alpen.jpg`: Start Bootstrap Grayscale, `dist/assets/img/bg-masthead.jpg` (Berg-/Waldlandschaft).
- `wasser.jpg`: Start Bootstrap Landing Page, `dist/assets/img/bg-masthead.jpg` (Wasserfläche).
- Bezugsquellen: https://github.com/StartBootstrap/startbootstrap-grayscale und https://github.com/StartBootstrap/startbootstrap-landing-page. Die Themes stehen unter MIT-Lizenz; siehe `assets/IMAGE-LICENSES.txt`. Die von den Themes verwendeten Fotos stammen laut Projektdokumentation von Unsplash. Für die finale Fassung sind eigene Naturaufnahmen vorgesehen.
