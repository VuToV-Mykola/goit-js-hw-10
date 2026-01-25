### 🌐 Choose a language:

[🇺🇦 Українська](README.md) | [🇬🇧 English](README.en.md) |
[🇩🇪 Deutsch](README.de.md)

# GoIT JS HW-09 — Gallery and Feedback Form

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

Homework #9 for JavaScript. Implemented:
- dynamic gallery with `SimpleLightbox`;
- feedback form with `localStorage` persistence and throttling.

## 🧩 Features

- Gallery markup rendered from an image array.
- Lightbox with captions, delay, and navigation.
- Form state saved while typing.
- Values restored after reload.
- Submit validation for empty fields.

## 🛠 Tech Stack

- HTML5
- CSS3
- JavaScript (ES2025)
- Vite
- SimpleLightbox
- lodash.throttle

## 🔌 SimpleLightbox setup

1. Install dependency:
```bash
npm install simplelightbox
```

2. Import library and styles:
```js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
```

3. Initialize the lightbox for gallery links:
```js
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
```

## 🔌 lodash.throttle setup

1. Install dependency:
```bash
npm install lodash.throttle
```

2. Import the function:
```js
import throttle from 'lodash.throttle';
```

3. Use it for form state persistence:
```js
const persistFormState = throttle(() => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500);
```

## 📁 Structure

```
goit-js-hw-09/
├── src/
│   ├── 1-gallery.html
│   ├── 2-form.html
│   ├── css/
│   │   ├── gallery.css
│   │   ├── form.css
│   │   └── styles.css
│   └── js/
│       ├── 1-gallery.js
│       └── 2-form.js
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
- `http://localhost:5173/1-gallery.html`
- `http://localhost:5173/2-form.html`

## ✅ Validation

- HTML: https://validator.w3.org/
- CSS: https://jigsaw.w3.org/css-validator/
- JS: https://jshint.com/

## 🔗 Links

- [Task](https://www.edu.goit.global/ru/learn/35708569/18936918/20332333/homework)
- [Figma layout](https://www.figma.com/file/m8k9NQV7qZrtYDCvxfD68B/ДЗ-JavaScript?type=design&node-id=3-969&mode=design)
- [Stylelint Rules](https://stylelint.io/user-guide/rules)
- [Code Guide](https://codeguide.co/)

## 📐 Terms of Reference

### Task 1 - Image Gallery

Complete this task in the files `1-gallery.html` and `1-gallery.js`.
In the previous homework, you created an image gallery using event delegation and added a modal library via CDN to display the full-size image.

Creating galleries is a common developer task, but building them from scratch every time is time‑consuming. That is why libraries exist to handle all the gallery logic.

Build the same gallery, but use the SimpleLightbox library, which will handle image clicks, opening/closing the modal, and keyboard navigation.

Watch the demo video of the gallery.

Pay attention to these details:
- You no longer need to manually add event delegation, because SimpleLightbox automatically tracks clicks on gallery cards.
- The BasicLightbox library is no longer needed, since the modal functionality is built into SimpleLightbox.
- You no longer need CDN links in `index.html`. Install libraries via npm instead.

Complete the task in `1-gallery.html` and `1-gallery.js`. Break it into subtasks:

- Refactor the code from the previous homework. You do not need to rewrite everything from scratch. Creating the gallery elements stays the same, but the delegation and modal code must be removed.

Update the gallery card markup using this template:

```html
<li class="gallery-item">
  <a class="gallery-link" href="large-image.jpg">
    <img
      class="gallery-image"
      src="small-image.jpg"
      alt="Image description"
    />
  </a>
</li>
```

Add SimpleLightbox as a dependency using npm.
To include the CSS code of the library, add one more import in addition to the one shown in the docs:

```js
// In docs
import SimpleLightbox from 'simplelightbox';
// Additional styles import
import 'simplelightbox/dist/simple-lightbox.min.css';
```

Next, initialize the library after creating and inserting the gallery elements into `ul.gallery`. Review the SimpleLightbox docs, especially the “Usage” and “Markup” sections.

Then, check the “Options” section and enable captions from the `alt` attribute. The caption should appear below the image after 250 ms.

What the mentor will check:
- The live page shows a gallery built from the `images` array
- The gallery is styled according to the layout
- Gallery data is created dynamically in JS
- No custom event listeners are added
- SimpleLightbox is connected via npm
- The library instance is initialized after gallery elements are added to the DOM and outside any functions
- Clicking a gallery item opens the modal from the library with the enlarged image and all base functionality works
- After 250 ms, the `alt` text appears below as a caption

### Task 2 - Feedback Form

Complete this task in the files `2-form.html` and `2-form.js`.
Add the HTML markup for the form. In JS, write a script that saves field values to local storage when the user types.

```html
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```

Break the task into subtasks:
- Declare an object `formData` outside any functions with fields `email` and `message`, both initially empty: `{ email: "", message: "" }`.
- Use event delegation to track changes via the `input` event. Store the current values of `email` and `message` in `formData` and write this object to local storage under the key `"feedback-form-state"`.
- On page load, check if there is data in local storage. If there is, use it to fill the form and `formData`. If not, keep the fields empty.
- Before submitting, ensure both fields are filled. If any property of `formData` is empty, show an alert with the text `Fill please all fields`. If both are filled, log `formData`, then clear local storage, reset `formData`, and clear the form fields.

What the mentor will check:
- The live page displays a form with two fields and a submit button
- The form is styled according to the layout
- The form listens to `input` and `submit` events
- While typing, data is saved to local storage under `"feedback-form-state"` without leading/trailing spaces
- Typing in one field does not delete the other field’s data in storage
- On page reload, saved data populates the fields and no `undefined` appears
- On submit, validation ensures both fields are filled
- On successful submit, the console logs `formData` with current values and storage/fields are cleared
- After submit, typing again does not restore previous data from storage
