import { MapSerial, FilterAsync, MapLimitBatch, MyPromiseSettled, PromisePool, MyPromiseAll, MyPromiseAny, MyPromiseRace, MyCustomPromise, AsyncSeries, FilterAsyncReject, ResolvePromiseWithPriority, AutoIncrementer, StackMaxMin, debounce, throttle, filterMultiDimensionalArray } from "./utils/index.js";
import { Task, TaskRunner, StackBasedQueue, QueueBasedStack, TwoStackWithSingleArray, LruCache, Node } from './utils/index.js'

// const fn1 = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5);
//     }, 500);
//   });

// const fn2 = (value) => value * 10
// const fn3 = (value) => value * 15

// //composeAsync(fn1,fn2,fn3)().then((res)=> console.log(res))

// const tasks = [
//   () => new Promise(res => setTimeout(() => res("A done"), 3000)),
//   () => new Promise(res => setTimeout(() => res("B done"), 2000)),
//   () => new Promise(res => setTimeout(() => res("C done"), 1000)),
//   () => new Promise(res => setTimeout(() => res("D done"), 500))
// ]

// const prom = PromisePool(tasks, 2)
// prom.then((result)=>{
// console.log('result -->', result)
// })


// MyPromiseAll([
//   Promise.resolve(1),
//   2,
//   new Promise((res) => setTimeout(() => res(3), 100))
// ]).then(console.log);

// const p1 = Promise.reject("Error 1");
// const p2 = new Promise((res) => setTimeout(res, 100, "Success"));
// const p3 = Promise.reject("Error 3");

// MyPromiseAny([p1, p3])
//   .then((value) => console.log("MyPromiseAny Resolved:", value))
//   .catch((err) => console.log("MyPromiseAny Rejected:", err.errors));


// const p4 = new Promise((_, reject) => setTimeout(() => reject("Error 1"), 100));
// const p5 = new Promise((res) => setTimeout(() => res("Success"), 200));
// const p6 = new Promise((res) => setTimeout(() => res("Another"), 50));

// MyPromiseRace([p4, p5, p6])
//   .then((value) => console.log("MyPromiseRace Resolved:", value))
//   .catch((err) => console.log("MyPromiseRace Rejected:", err));  


// const promises = [
//   Promise.resolve(10),
//   Promise.reject("Error occurred"),
//   Promise.resolve(30)
// ];

// MyPromiseSettled(promises).then((results) => {
//   console.log(results);
// });  

// new MyCustomPromise((resolve, reject) => {
//   setTimeout(() => resolve("Hello"), 500);
// }).then(console.log);

// const p7 = Promise.resolve('s');
// const p8 = new Promise((r) => setTimeout(() => r('m'), 500));
// const p9 = Promise.resolve('ith');

// AsyncSeries([p7, p8, p9]).then(console.log)

// function asyncDouble(num, callback) {
//   setTimeout(() => {
//     callback(null, num * 2);
//   }, 300);
// }

// // MapSerial([1, 2, 3], asyncDouble)
// //   .then(console.log)
// //   .catch(console.error);

// const input = [1, 2, 3, 4, 5, 6, 7, 8];
// const limit = 3; // Number of concurrent tasks allowed

// const asyncTask = (item, cb) => {
//   const delay = Math.floor(Math.random() * 1000); // random delay 0–1000ms
//   console.log(`Starting task ${item}, will take ${delay}ms`);
//   setTimeout(() => {
//     console.log(`Completed task ${item}`);
//     cb(null, item * 2); // just return item * 2 as result
//   }, delay);
// };

// // MapLimitBatch(input, limit, asyncTask)
// //   .then(results => {
// //     console.log("All tasks done. Results:", results);
// //   })
// //   .catch(err => {
// //     console.error("Error:", err);
// //   });  


// const gilter = [1, 2, 3, 4, 5];

// const asyncCheckEven = (num, cb) => {
//   const delay = Math.floor(Math.random() * 500);
//   setTimeout(() => {
//     console.log(`Checked ${num}`);
//     cb(null, num % 2 === 0 ? num : false);
//   }, delay);
// };

// FilterAsync(gilter, asyncCheckEven).then(res => {
//   console.log("Filtered:", res);
// });


// const isEvenAsync = (num, cb) => {
//   setTimeout(() => cb(null, num % 2 === 0), Math.random() * 300);
// };

// FilterAsyncReject(gilter, isEvenAsync)
//   .then(res => console.log("Rejected (odd numbers):", res))
//   .catch(console.error);

// // Helper: delay a promise
// const delay = (value, ms, shouldFail = false) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       shouldFail ? reject(value) : resolve(value);
//     }, ms);
//   });
// };

// const promises = [
//   { priority: 3, task: delay("Success 3", 200) },
//   { priority: 1, task: delay("Success 1", 100) },
//   { priority: 2, task: delay("Fail 2", 150, true) },
// ];

// ResolvePromiseWithPriority(promises)
//   .then((res) => console.log("✅ Resolved:", res))
//   .catch((err) => console.error("❌ Rejected:", err));  


// const taskA = new Task("A", [], () => "A");
// const taskB = new Task("B", [taskA], (aResult) => "B");
// const taskC = new Task("C", [taskB, taskA], (bResult, aResult) => "C");

// TaskRunner([taskC, taskB, taskA])
//   .then(console.log)
//   .catch(console.error);

// const { start, stop } = AutoIncrementer(1, 1000)

// const mQueue = new StackBasedQueue()
// mQueue.enqueue(10)
// mQueue.enqueue(20)
// mQueue.enqueue(30)

// console.log(mQueue.dequeue())
// console.log(mQueue.peek())

// const mStack = new QueueBasedStack()
// mStack.push(10)
// mStack.push(20)
// mStack.push(30)
// mStack.push(40)

// console.log(mStack.pop())
// console.log(mStack.pop())


// const stackMaxMin = new StackMaxMin()
// stackMaxMin.push(11)
// stackMaxMin.push(12)
// stackMaxMin.push(13)
// stackMaxMin.push(14)
// stackMaxMin.push(15)

// stackMaxMin.pop()

// console.log(`max: ${stackMaxMin.max()} min: ${stackMaxMin.min()}`)


// const twoStack = new TwoStackWithSingleArray(10)

// twoStack.push1(1)
// twoStack.push1(2)
// twoStack.push2(3)
// twoStack.push2(4)
// twoStack.push1(5)
// console.log('two stack')
// console.log(twoStack.pop1())
// console.log(twoStack.pop1())
// console.log(twoStack.pop1())
// console.log(twoStack.pop1())
// console.log(twoStack.pop2())
// console.log(twoStack.pop2())


// const lruCache = new LruCache(4)
// lruCache.put("1", "ram")
// lruCache.put("2", "sham")
// lruCache.put("3", "raman")
// lruCache.put("4", "aman")
// lruCache.all()
// console.log("=====================")
// lruCache.get("3")
// console.log("=====================")
// lruCache.all()

// const debounceFn = debounce((value) => {
//   console.log('debunced', value)
// }, 300)

// for (let index = 0; index < 100; index++) {
//   setTimeout(() => {
//     debounceFn(`${index}`)
//   }, 100)

// }

// const throttleFn = throttle((value) => {
//   console.log(`value` + value)
// }, 300)

// for (let index = 0; index < 100; index++) {
//   setTimeout(() => {
//     throttleFn(`${index}`)
//   }, index * 100)

// }

const multiDimensionalArray = [
  [1,[2,[3, "hello"]], "world"]
];

const flattenfilteredArray = filterMultiDimensionalArray(multiDimensionalArray, (element)=>{
  return typeof element === 'string'
});

console.dir(flattenfilteredArray, { depth: null })