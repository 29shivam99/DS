//! category 1 - array functions

// !MAP

// Array.map((curr, index, arr) => {});

// map returns a new array

Array.prototype.myMap = function (cb) {
  let currentArray = this;
  let newArray = [];
  let length = currentArray.length;

  for (let i = 0; i < length; i++) {
    newArray.push(cb(currentArray[i], i, currentArray));
  }

  return newArray;
};

//! FILTER

// Array.filter((curr, index, arr) => {});

// filter returns a new array

Array.prototype.myFilter = function (cb) {
  let currentArray = this;
  let newArray = [];
  let length = currentArray.length;

  for (let i = 0; i < length; i++) {
    if (cb(currentArray[i], i, currentArray)) newArray.push(currentArray[i]);
  }

  return newArray;
};

// !Reduce

// Array.reduce(() => {acc, curr, index, arr}, initialValue);

// reduce returns a value

//! edge case- if u dont pass any value to initialValue then reduce will take acc as first value of array and starts loop from the second element.

Array.prototype.myReduce = function (cb, initialValue) {
  let currentArray = this;
  let newArray = [];
  let length = currentArray.length;

  let accumulator = initialValue;

  for (let i = 0; i < length; i++) {
    if (accumulator) accumulator = cb(acc, currentArray[i], i, currentArray);
    else accumulator = currentArray[i];
  }

  return newArray;
};

//////////////////////////

//! category 2- call, bind, apply

// func.call(obj, p1, p2, p3, p4)

Object.prototype.myCall = function (context = {}, ...args) {
  // if caller is not a function throw error
  if (typeof this !== "function") {
    throw new Error(this + "This is not callble!");
  }
  // we need to add this targetfunction in the context object else we cant use it
  context.targetFunction = this;
  context.targetFunction(...args);
};

function fnForCall(val) {
  console.log(this, val);
}

let objForCall = {
  name: "Shivam",
};

// fnForCall.call(objForCall, "abcd");
// fnForCall.myCall(objForCall, "abcd");

// !apply

// func.apply(obj, [p1, p2, p3, p4])

Object.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "This is not callable for apply!");
  }

  if (!Array.isArray(args)) {
    throw new Error(args + "is not an array!");
  }

  context.targetFunction = this;
  context.targetFunction(args); // see how we can pass an array to a function that accepts arguments
};

// fnForCall.apply(objForCall, ["abcd"]);
// fnForCall.myApply(objForCall, "[abcd]");

// !bind - hard

// let bindedFunction = func.bind(obj, p1, p2)
// bindedFunction(p3, p4)

Object.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cant be bound as it is not callable!");
  }

  context.targetFunction = this;

  return function (...remainingArgs) {
    return context.targetFunction(...args, ...remainingArgs);
  };
};

function fnForBind(a, b, c, d) {
  console.log(this, a, b, c, d);
}

let fn = fnForBind.myBind(objForCall, "asas");
fn(1, 2);

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
