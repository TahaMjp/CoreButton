
# CoreButton

A powerful, flexible, and reusable button component built with React and Tailwind CSS — designed to simplify your UI development with one central component.

---

## 🚀 Introduction

**CoreButton** is a single, configurable button component built to replace the clutter of multiple button definitions. Whether you need a simple solid button, an icon-only button, or a full-width call-to-action — it’s all handled with props.

---

## 🎯 Our Vision

We created CoreButton to:

- Streamline button usage across projects  
- Ensure design consistency with ease  
- Reduce duplication and simplify UI architecture  
- Offer deep customizability in a single, clear component

---

## 💡 Benefits of CoreButton

- **One component for every button you’ll need**  
- Control everything with intuitive props  
- Clean, semantic JSX without repetitive code  
- Built with modern best practices for React + Tailwind  
- Easy to adjust and scale over time

---

## 🛠️ Tech Stack

- **React** — for reusable component structure  
- **Tailwind CSS** — for styling flexibility  
- **clsx** — class name conditional logic  
- **react-icons** (optional) — for easy icon integration

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/TahaMjp/CoreButton.git
cd CoreButton
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

### 4. Use CoreButton in your project

```jsx
import CoreButton from './components/CoreButton/CoreButton';

function App() {
  return (
    <CoreButton
      text="Get Started"
      size="md"
      color="blue"
      variant="solid"
    />
  );
}
```

---

## ✨ Examples of Usage

- **Basic Button:** Only required props (text, size, variant, color)  
- **Full Customization:** Add icons, loading state, disabled, rounded corners, full width  
- **Icon-Only Button:** Use with `icon` and `rounded="full"` for circular UI  
- **Rounded Pill Button:** Customize `rounded` prop for a sleek, pill shape

➡️ Check out the examples in `src/components/CoreButton/` to explore each case in action.

---

## 🤝 Contributing

We’d love your help! CoreButton is evolving and your ideas can shape its future.

### 🧭 Quick Start to Contribute:

1. Fork this repository  
2. Create a feature branch: `git checkout -b feature/my-idea`  
3. Make your changes  
4. Submit a pull request  

📘 Full details in the [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📄 License

CoreButton is open-source and licensed under the **MIT License** — feel free to use it in personal or commercial projects. See [LICENSE](./LICENSE) for details.

---

Made with ❤️ by [@TahaMjp](https://github.com/TahaMjp) — bringing clean UI to your fingertips.
