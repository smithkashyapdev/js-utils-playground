# js-utils-playground 🚀

This repo is a personal collection of utilities, patterns, and interview-prep code snippets.  
It covers both **core JavaScript** and **React Native advanced concepts**.

## Contents
- [JavaScript Utilities](./utils)
- [React Native Hooks & Patterns](./react-native)
- [Interview Notes](./notes)

## Example: composeAsync
```js
import composeAsync from './utils/composeAsync';

const fn1 = () => Promise.resolve(5);
const fn2 = (x) => x * 2;
const fn3 = (x) => x + 10;

composeAsync(fn1, fn2, fn3)().then(console.log); // 20

