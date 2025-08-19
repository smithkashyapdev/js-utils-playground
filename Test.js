import { composeAsync } from "./utils/index.js";

const fn1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 500);
  });

const fn2 = (value) => value * 10
const fn3 = (value) => value * 15

composeAsync(fn1,fn2,fn3)().then((res)=> console.log(res))