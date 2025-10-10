import { composeAsync, fetchWithTimeout, MyPromiseSettled, PromisePool, MyPromiseAll, MyPromiseAny, MyPromiseRace, MyCustomPromise, AsyncSeries } from "./utils/index.js";

const fn1 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 500);
  });

const fn2 = (value) => value * 10
const fn3 = (value) => value * 15

//composeAsync(fn1,fn2,fn3)().then((res)=> console.log(res))

const tasks = [
  () => new Promise(res => setTimeout(() => res("A done"), 3000)),
  () => new Promise(res => setTimeout(() => res("B done"), 2000)),
  () => new Promise(res => setTimeout(() => res("C done"), 1000)),
  () => new Promise(res => setTimeout(() => res("D done"), 500))
]

const prom = PromisePool(tasks, 2)
prom.then((result)=>{
console.log('result -->', result)
})


MyPromiseAll([
  Promise.resolve(1),
  2,
  new Promise((res) => setTimeout(() => res(3), 100))
]).then(console.log);

const p1 = Promise.reject("Error 1");
const p2 = new Promise((res) => setTimeout(res, 100, "Success"));
const p3 = Promise.reject("Error 3");

MyPromiseAny([p1, p3])
  .then((value) => console.log("MyPromiseAny Resolved:", value))
  .catch((err) => console.log("MyPromiseAny Rejected:", err.errors));


const p4 = new Promise((_, reject) => setTimeout(() => reject("Error 1"), 100));
const p5 = new Promise((res) => setTimeout(() => res("Success"), 200));
const p6 = new Promise((res) => setTimeout(() => res("Another"), 50));

MyPromiseRace([p4, p5, p6])
  .then((value) => console.log("MyPromiseRace Resolved:", value))
  .catch((err) => console.log("MyPromiseRace Rejected:", err));  


const promises = [
  Promise.resolve(10),
  Promise.reject("Error occurred"),
  Promise.resolve(30)
];

MyPromiseSettled(promises).then((results) => {
  console.log(results);
});  

new MyCustomPromise((resolve, reject) => {
  setTimeout(() => resolve("Hello"), 500);
}).then(console.log);

const p7 = Promise.resolve('s');
const p8 = new Promise((r) => setTimeout(() => r('m'), 500));
const p9 = Promise.resolve('ith');

AsyncSeries([p7, p8, p9]).then(console.log)