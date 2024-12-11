//! memoize

const clumsySum = function (a, b) {
  let num = 0;
  for (let i = 0; i < 100000000; i++) {}

  num += a * b;

  return num;
};

// see how we can track time
// console.time("Called clumsySum");
// clumsySum(2, 5);
// console.timeEnd("Called clumsySum");

// memoize

const myMemoizedFunction = function (fn, context) {
  let res = {};
  return function (...args) {
    // creating str for caching the same inputs
    let str = args.join(",");
    if (!res[str]) {
      console.log(res, str);
      res[str] = fn.call(context ?? this, ...args);
    }
    return res[str];
  };
};

let clumsySumMemoized = myMemoizedFunction(clumsySum);
console.time("Called clumsySum memo 1");
clumsySumMemoized(2, 5);
console.timeEnd("Called clumsySum memo 1");

// above result will be memoised so that in next call it wont call fn i.e clumsySum again

console.time("Called clumsySum memo 2");
clumsySumMemoized(2, 5);
console.timeEnd("Called clumsySum memo 2");
