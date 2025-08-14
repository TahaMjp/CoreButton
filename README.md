# 🧱 CoreUI Documentation

---

## 🚀 Getting Started

To get started with CoreUI:

### 1. Install via NPM or Yarn

```bash
npm install
# or
yarn install
```

### 2. Run the project

```bash
npm run dev
```

> Ensure you have Node.js ≥ 16 installed for compatibility.

---

## ⚙️ Installation & Setup

CoreUI uses **Tailwind CSS**. Make sure your project is configured properly:

### 1. Tailwind Integration

Tailwind setup is already handled. You’ll find these files:

- `src/input.css` → source Tailwind file
- `src/output.css` → compiled version

### 2. Required Tailwind Config

Ensure `tailwind.config.js` includes:

```js
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
theme: {
  extend: {},
},
plugins: [],
```

---

## 🧩 Components

---

### 🔘 CoreButton

A flexible and styled button component using Tailwind, `clsx`, and responsive variants.

#### ✅ When to use:

- Call-to-action buttons
- Icon-only interactions
- Rounded UI buttons

#### Props

| Prop       | Type     | Description                             | Default      |
|------------|----------|-----------------------------------------|--------------|
| `variant`  | string   | Tailwind variant (e.g., `primary`)      | `"primary"`  |
| `size`     | string   | Size of the button (`sm`, `md`, `lg`)   | `"md"`       |
| `icon`     | JSX      | Optional icon to render inside button   | `undefined`  |
| `children` | ReactNode| Button label/content                    | —            |
| `rounded`  | boolean  | If true, applies full rounded corners   | `false`      |
| `onClick`  | function | Click event handler                      | —            |

#### Variants

```jsx
<CoreButton variant="primary" size="md">Click me</CoreButton>
<CoreButton variant="danger" size="lg" rounded>Delete</CoreButton>
<CoreButton variant="ghost" icon={<FiPlus />} />
```

Supported variants: `primary`, `secondary`, `danger`, `ghost`

#### Accessibility

- Includes keyboard focus ring (`focus:ring-*`)
- Accepts `aria-*` props
- Icon-only buttons should include `aria-label`

#### Keyboard Interactions

- `Enter` or `Space` triggers click
- Focus styles follow Tailwind's default ring styles

### 🛠️ CoreCard

🛠️ Under development.

> Placeholder for future `CoreCard` component.

---

## 🎨 Theming & Styling

### Tailwind Utilities

You can override and theme components by:

- Using utility classes via `clsx`
- Extending Tailwind in `tailwind.config.js`
- Applying `rounded`, `hover`, and `focus` states directly

Example override:

```jsx
<CoreButton className="bg-pink-600 hover:bg-pink-700">Custom</CoreButton>
```

---

## 🔍 API Reference

### CoreButton Types

```ts
type CoreButtonProps = {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children?: React.ReactNode;
  rounded?: boolean;
  onClick?: () => void;
}
```

---

## 🛣️ Roadmap

| Component      | Status         |
|----------------|----------------|
| CoreButton     | ✅ Done         |
| CoreCard       | 🛠️ In Progress |
| CoreInput      | 📝 Planned      |
| CoreBadge      | 📝 Planned      |
| CoreModal      | 📝 Planned      |

---

## 🤝 Contributing

We welcome contributions!

If you're new to open-source, check out [First Contributions](https://firstcontributions.github.io/) for a simple walkthrough.

### Folder Structure

```
src/
├── Components/
│   ├── CoreButton/
│   ├── Examples/
│   └── Wrapper/
```

### Guidelines

- Use functional components with hooks
- Keep styles Tailwind-first
- Write reusable logic where possible

---

## 📚 External Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [clsx](https://github.com/lukeed/clsx)
- [tailwind-variants](https://tailwind-variants.org/)
- [React Docs](https://react.dev/)

---

Thanks for using CoreUI!

If you have suggestions or want to see specific components, open an issue or PR. We’re actively improving the library and looking forward to your contributions. 🌟
