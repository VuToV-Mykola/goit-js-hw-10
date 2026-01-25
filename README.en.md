### 🌐 Choose a language:

[🇺🇦 Українська](README.md) | [🇬🇧 English](README.en.md) |
[🇩🇪 Deutsch](README.de.md)

# GoIT JS HW-10 — Timer and Snackbar

<!-- AUTOGEN:STATS -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![Terminal](https://img.shields.io/badge/mac%20terminal-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=000000)](https://support.apple.com/guide/terminal/welcome/mac) [![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/) 

[![📊 Views](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/project-new-generation-25/main/assets/db/visitors-badge.json)](https://github.com/VuToV-Mykola/project-new-generation-25/graphs/traffic)
[![⭐ Stars](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/project-new-generation-25/main/assets/db/likes-badge.json)](https://github.com/VuToV-Mykola/project-new-generation-25/actions/workflows/screenshot-and-visitor.yaml)
[![📦 Size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/project-new-generation-25/main/assets/db/repo-size.json)](https://github.com/VuToV-Mykola/project-new-generation-25)
[![📄 License](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/project-new-generation-25/main/assets/db/repo-license.json)](https://github.com/VuToV-Mykola/project-new-generation-25/blob/main/LICENSE)

## 📸 Project Screenshot
![Project Screenshot](./assets/screenshot.png)
<!-- END:AUTOGEN -->

## 🎯 About

Homework #10 for JavaScript. Implemented:
- countdown timer with date/time picker via `flatpickr`;
- snackbar notifications for promises via `iziToast`.

## 🧩 Features

- Date validation: start only for future values.
- Timer start with input lock while running.
- Two-digit formatted time values.
- Promise creation with delay and result handling.
- Success and error notifications.

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES2025)
- Vite
- flatpickr
- iziToast

## 🔌 flatpickr setup

1. Install dependency:
```bash
npm install flatpickr
```

2. Import library and styles:
```js
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
```

3. Initialize the picker:
```js
flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
});
```

## 🔌 iziToast setup

1. Install dependency:
```bash
npm install izitoast
```

2. Import library and styles:
```js
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
```

3. Use it for notifications:
```js
iziToast.success({
  title: 'OK',
  message: 'Fulfilled promise in 500ms',
});
```

## 📁 Structure

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
└── README.en.md
```

## 🚀 Run

1. Install dependencies:
```bash
npm install
```

2. Start dev server:
```bash
npm run dev
```

3. Open pages:
- `http://localhost:5173/1-timer.html`
- `http://localhost:5173/2-snackbar.html`

## ✅ Validation

- HTML: https://validator.w3.org/
- CSS: https://jigsaw.w3.org/css-validator/
- JS: https://jshint.com/

## 🔗 Links

- [Task](https://www.edu.goit.global/ru/learn/35708569/18936918/20351639/homework)
- [Stylelint Rules](https://stylelint.io/user-guide/rules)
- [Code Guide](https://codeguide.co/)

## 📐 Terms of Reference

### Task 1 - Timer

Complete this task in `1-timer.html` and `1-timer.js`.
Create a countdown timer with date/time selection via `flatpickr`.

Core requirements:
- The input has id `datetime-picker`, the start button has `data-start`.
- The start button is disabled until a future date is selected.
- If a past date is selected, show an `iziToast` error message.
- When the timer starts, the input and button are disabled.
- Time values update every second in `data-days`, `data-hours`, `data-minutes`, `data-seconds`.
- Values are formatted to two digits.

### Task 2 - Snackbar

Complete this task in `2-snackbar.html` and `2-snackbar.js`.
Create a form that triggers a promise with delay and displays the result.

Core requirements:
- The `delay` field accepts milliseconds.
- The `state` radio buttons define resolve (`fulfilled`) or reject (`rejected`).
- On submit, create a promise and show results via `iziToast`:
  - `Fulfilled promise in Xms`
  - `Rejected promise in Xms`
