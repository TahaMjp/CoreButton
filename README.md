# 🎛️ Button-Kit

A clean, reusable, and fully customizable collection of modern button components built with **React.js** and **Tailwind CSS**.  
Designed to speed up your UI development by providing pre-styled, production-ready button components in a plug-and-play format.

---

## 🌟 Introduction

**Button-Kit** is a modular button library built to provide consistent design and development patterns for UI buttons across projects. Every button is styled using Tailwind CSS, making customization fast and effortless.

If you're tired of re-building buttons from scratch in every project — Button-Kit is your new best friend.

---

## 🎯 Our Vision

Our goal is to create a **developer-first button kit** that's:

- 🔩 Easy to integrate
- 🎨 Fully styleable via Tailwind
- 📦 Organized by color, type, and size
- 🧑‍💻 Contributor-friendly and open source

We believe in sharing components that **just work**, so others can focus on building the bigger picture.

---

## 💡 Why Use Button-Kit?

- ✅ **Plug-and-play button components**
- 🧩 **Organized folder structure**
- 🎨 **Styled with Tailwind utility classes**
- 🛠️ **Built with React**
- 🧠 **Easy naming conventions**
- 🧪 **Perfect for design systems or component libraries**

---

## 🧰 Technologies Used

| Tech            | Purpose                         |
|-----------------|----------------------------------|
| **React.js**    | Component-based development      |
| **Tailwind CSS**| Utility-first styling            |

> No external UI frameworks. All buttons are styled using raw Tailwind classes for full control.

---

## 🗂️ Buttons Folder Structure (Sample)

```bash
src/
└── Components/
    └── Buttons/
        └── Solid/
            ├── RedPrimary/
            │   └── RedPrimary-md.js
            ├── GreenPrimary/
            │   └── GreenPrimary-md.js
            ├── BluePrimary/
            │   └── BluePrimary-md.js
            └── Solid.js
```

- `RedPrimary-md.js / GreenPrimary-md.js / BluePrimary-md.js` – Medium-sized solid colored button components.
- `Solid.js` – A wrapper that exports all solid button variants.

We follow a **modular folder-per-variant** structure so buttons are easy to find, edit, or remove.

---

## ⚙️ Setup & Usage

### 🔧 1. Clone & Install

```bash
git clone https://github.com/TahaMjp/button-kit.git
cd button-kit
npm install
```

### ▶️ 2. Start Dev Server

```bash
npm run dev
```

Runs the app locally at `http://localhost:5173` (or the next available port).

---

## 📦 How to Use a Button

You can import and use any button component like this:

```jsx
import { BluePrimaryMd } from './Components/Buttons/Solid/BluePrimary/BluePrimary-md';

function App() {
  return <BluePrimaryMd>Click Me</BluePrimaryMd>;
}
```

✅ Buttons support children and can be styled further using Tailwind utility classes.

---

## 🖼️ Demo & Preview (GIF)

### 🔵 Blue Primary Button  
![Blue Primary Button Demo](https://github.com/TahaMjp/button-kit/assets/your-gif-path/blue-button-demo.gif)

> More GIFs are coming soon and will be stored under `/public/gifs/`.

For quick visual previews, visit the **GitHub Pages live demo**:  
🌐 [https://tahamjp.github.io/button-kit](https://tahamjp.github.io/button-kit)

---

## 🤝 We're Open for Contributions!

Wanna contribute? Add a new button variant, fix an issue, or improve documentation — we’d love your help!

We follow simple, clean naming and formatting standards. Whether you're a beginner or expert, you're welcome to pitch in!

---

## 🧭 How to Contribute

1. 🍴 Fork the repo  
2. 🌿 Create a new branch  
3. 🛠️ Add your component or fix  
4. 📤 Open a Pull Request

🔗 Read the full [Contribution Guide →](https://github.com/TahaMjp/button-kit/blob/main/CONTRIBUTING.md)

> Our contribution guide includes naming rules, file structure standards, and submission steps.

---

## 📄 License

**[MIT License](https://github.com/TahaMjp/button-kit/blob/main/LICENSE)**

You are free to use, modify, distribute, and even sell products based on this project — just retain the license and attribution.

---
