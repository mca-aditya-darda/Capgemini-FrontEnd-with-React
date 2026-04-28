# Homework — React

**Date:** 27-04-2026

---

## 1. What is the difference between Class Components and Function Components?

**Answer:**

React components can be created using either **Class Components** or **Function Components**. Both are used to build UI, but they differ in syntax, complexity, and modern usage.

---

### Function Components:

- Defined as simple JavaScript functions
- Return JSX directly
- Use **Hooks** like `useState` and `useEffect` for state and lifecycle
- No use of `this` keyword
- Less code and easier to understand

---

### Class Components:

- Defined using ES6 classes
- Extend `React.Component`
- Use `this.state` for managing state
- Use lifecycle methods like `componentDidMount`, `componentDidUpdate`
- Require `this` keyword and sometimes binding

---

## Comparison Table

| Feature        | Function Component     | Class Component             |
| -------------- | ---------------------- | --------------------------- |
| Definition     | JavaScript function    | ES6 class                   |
| State          | useState Hook          | this.state                  |
| Lifecycle      | useEffect Hook         | Lifecycle methods           |
| this Keyword   | Not used               | Required                    |
| Syntax         | Simple                 | Verbose                     |
| Code Length    | Less                   | More                        |
| Reusability    | Easy with custom Hooks | Complex (HOC, render props) |
| Learning Curve | Easy                   | Moderate                    |
| Modern Usage   | Preferred              | Legacy                      |
| Performance    | Optimized with Hooks   | Comparable                  |

---

## Key Points

- Function components are **simpler and more readable**
- Hooks make it possible to use **state and lifecycle features**
- Class components are **older and mostly used in legacy code**
- Modern React development **prefers function components**

---

## Conclusion

Function components are the standard in modern React because they are easier to write, maintain, and scale. Class components are still supported but are not commonly used in new applications.

---
