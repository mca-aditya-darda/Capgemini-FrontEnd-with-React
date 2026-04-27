# Homework — React

**Date:** 25-04-2026

---

## 1. What is the difference between a library and a framework?

**Answer:**  
The key difference is **control (Inversion of Control)**.

- **Library:** You control the flow of the program and call the library when needed.
- **Framework:** The framework controls the flow and calls your code at specific points.

**Examples:**

- React → Library (focuses on UI layer)
- Angular → Framework (provides full structure including routing, state, etc.)

---

## 2. What is the current version of React?

**Answer:**  
The current version of React is **React 19 (19.2.5)**.

**Key features:**

- Actions → Simplified form handling and mutations
- `use` hook → Better handling of async data
- Improved Server Components → Enhanced performance and scalability
- Less boilerplate → Cleaner and more maintainable code

---

## 3. What are the folder structures in a React project and their use cases?

**Answer:**  
A typical structure inside the `src/` folder:

- `assets/` → Images, fonts, icons, SVGs
- `components/` → Reusable UI components
- `configs/` → App configurations and environment settings
- `hooks/` → Custom reusable hooks
- `context/` → Global state management (Context API)
- `services/` → API calls and external integrations
- `utils/` → Helper/utility functions
- `styles/` → CSS or styling files
- `App.jsx` → Root component of the app
- `main.jsx` → Entry point (renders App to DOM)

**Why this structure?**  
It improves scalability, readability, and maintainability of large applications.

---

## 4. What is the difference between Create React App and Vite?

**Answer:**

Both Create React App (CRA) and Vite are tools used to set up React projects, but they differ in performance and architecture.

**Create React App (CRA):**

- Uses Webpack for bundling
- Bundles the entire application before starting
- Slower startup and rebuild times in large projects

**Vite:**

- Uses native ES Modules in the browser
- Loads code on demand
- Uses esbuild for very fast development

| Feature       | Create React App (CRA) | Vite               |
| ------------- | ---------------------- | ------------------ |
| Tooling       | Webpack-based          | ES Modules-based   |
| Dev Startup   | Slow                   | Instant            |
| Hot Reload    | Slower                 | Very fast          |
| Build Process | Full bundling          | On-demand bundling |
| Modernity     | Older approach         | Modern tooling     |

**Conclusion:**  
Vite is faster, more efficient, and better suited for modern React development.

---

## 5. What is the difference between SPA and MPA?

**Answer:**

**SPA (Single Page Application):**

- Loads a single HTML page
- Updates content dynamically using JavaScript
- No full page reloads

**MPA (Multi Page Application):**

- Loads a new HTML page for each request
- Requires server interaction on each navigation

| Feature         | SPA                   | MPA         |
| --------------- | --------------------- | ----------- |
| Page Reload     | No                    | Yes         |
| Routing         | Client-side           | Server-side |
| Initial Load    | Slower                | Faster      |
| Navigation      | Faster                | Slower      |
| SEO             | Requires optimization | Easier      |
| User Experience | Smooth, app-like      | Traditional |

**Examples:**

- SPA → React, Angular
- MPA → Traditional websites and many e-commerce platforms

**Use Cases:**

- SPA → Dashboards, web applications
- MPA → Content-heavy and SEO-focused websites

---

## 6. What is Reconciliation, Virtual DOM, and Diffing Algorithm?

**Answer:**

These concepts explain how React updates the UI efficiently.

**Virtual DOM (VDOM):**  
A lightweight in-memory representation of the real DOM. React uses it to avoid direct manipulation of the real DOM, which is slower.

**Diffing Algorithm:**  
When state or props change, React creates a new Virtual DOM and compares it with the previous one to identify changes.

**Reconciliation:**  
The process of updating only the changed parts in the real DOM based on the diffing results.
**Flow:**

1. State or props change
2. New Virtual DOM is created
3. Diffing compares old and new Virtual DOM
4. React identifies minimal changes
5. Reconciliation updates the real DOM

**Why it matters:**  
This process reduces unnecessary updates and improves performance, making React applications fast and efficient.

---
