### 🌐 Sprache wählen:

[🇺🇦 Українська](README.md) | [🇬🇧 English](README.en.md) |
[🇩🇪 Deutsch](README.de.md)

# GoIT JS HW-10 — Timer und Snackbar

<!-- AUTOGEN:STATS -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![Terminal](https://img.shields.io/badge/mac%20terminal-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=000000)](https://support.apple.com/guide/terminal/welcome/mac) [![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/) 

[![📊 Views](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/project-new-generation-25/main/assets/db/visitors-badge.json)](https://github.com/VuToV-Mykola/project-new-generation-25/graphs/traffic)
[![⭐ Stars](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/project-new-generation-25/main/assets/db/likes-badge.json)](https://github.com/VuToV-Mykola/project-new-generation-25/actions/workflows/screenshot-and-visitor.yaml)
[![📦 Size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/project-new-generation-25/main/assets/db/repo-size.json)](https://github.com/VuToV-Mykola/project-new-generation-25)
[![📄 License](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/project-new-generation-25/main/assets/db/repo-license.json)](https://github.com/VuToV-Mykola/project-new-generation-25/blob/main/LICENSE)

## 📸 Projekt-Screenshot
![Project Screenshot](./assets/screenshot.png)
<!-- END:AUTOGEN -->

## 🎯 Über das Projekt

Hausaufgabe Nr. 10 für JavaScript. Implementiert:
- Countdown-Timer mit Datum/Zeit-Auswahl via `flatpickr`;
- Snackbar-Benachrichtigungen für Promises via `iziToast`.

## 🧩 Funktionen

- Validierung des Datums: Start nur für zukünftige Werte.
- Timer-Start mit gesperrtem Eingabefeld.
- Zweistellige Formatierung der Zeitwerte.
- Promise-Erstellung mit Verzögerung und Anzeige des Ergebnisses.
- Erfolg-/Fehler-Notifications.

## 🛠 Tech-Stack

- HTML5
- CSS3
- JavaScript (ES2025)
- Vite
- flatpickr
- iziToast

## 🔌 flatpickr einbinden

1. Abhängigkeit installieren:
```bash
npm install flatpickr
```

2. Bibliothek und Styles importieren:
```js
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
```

3. Picker initialisieren:
```js
flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
});
```

## 🔌 iziToast einbinden

1. Abhängigkeit installieren:
```bash
npm install izitoast
```

2. Bibliothek und Styles importieren:
```js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
```

3. Für Benachrichtigungen verwenden:
```js
iziToast.success({
  title: 'OK',
  message: 'Fulfilled promise in 500ms',
});
```

## 📁 Struktur

```
goit-js-hw-10/
├── src/
│   ├── 1-timer.html
│   ├── 2-snackbar.html
│   ├── css/
│   │   ├── timer.css
│   │   ├── snackbar.css
│   │   └── styles.css
│   └── js/
│       ├── 1-timer.js
│       └── 2-snackbar.js
├── package.json
└── README.de.md
```

## 🚀 Start

1. Abhängigkeiten installieren:
```bash
npm install
```

2. Dev-Server starten:
```bash
npm run dev
```

3. Seiten öffnen:
- `http://localhost:5173/1-timer.html`
- `http://localhost:5173/2-snackbar.html`

## ✅ Validierung

- HTML: https://validator.w3.org/
- CSS: https://jigsaw.w3.org/css-validator/
- JS: https://jshint.com/

## 🔗 Links

- [Aufgabe](https://www.edu.goit.global/ru/learn/35708569/18936918/20351639/homework)
- [Stylelint Rules](https://stylelint.io/user-guide/rules)
- [Code Guide](https://codeguide.co/)

## 📐 Technische Aufgabe

### Aufgabe 1 - Timer

Bearbeite diese Aufgabe in `1-timer.html` und `1-timer.js`.
Erstelle einen Countdown-Timer mit Datum/Zeit-Auswahl über `flatpickr`.

Kernanforderungen:
- Das Eingabefeld hat die id `datetime-picker`, die Start-Taste hat `data-start`.
- Der Start-Button ist deaktiviert, bis ein zukünftiges Datum gewählt wurde.
- Bei einem Datum in der Vergangenheit erscheint eine `iziToast`-Fehlermeldung.
- Nach dem Start sind Eingabe und Button deaktiviert.
- Die Zeitwerte aktualisieren sich jede Sekunde in `data-days`, `data-hours`, `data-minutes`, `data-seconds`.
- Werte werden zweistellig formatiert.

### Aufgabe 2 - Snackbar

Bearbeite diese Aufgabe in `2-snackbar.html` und `2-snackbar.js`.
Erstelle ein Formular, das einen Promise mit Verzögerung ausführt und das Ergebnis anzeigt.

Kernanforderungen:
- Das Feld `delay` nimmt Millisekunden an.
- Die Radio-Buttons `state` bestimmen Resolve (`fulfilled`) oder Reject (`rejected`).
- Nach dem Absenden wird ein Promise erstellt und per `iziToast` angezeigt:
  - `Fulfilled promise in Xms`
  - `Rejected promise in Xms`
