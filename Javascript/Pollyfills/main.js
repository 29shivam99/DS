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

////////////////////! category promise /////////////

// inputs

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 2000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3");
  }, 3000);
});

let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p4");
  }, 4000);
});

let p5 = Promise.resolve("p5");

let p6 = 22;
let p7 = "99";
// let p8 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("wrong");
//   }, 1200);
// });

//! custom promise - very hard

//! promise.all - asked a loottt

// Promise.all([p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//! my way

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let results = new Array(promises.length);
    let promisesFulfilled = 0;
    if (promises.length === 0) {
      resolve();
      return;
    }
    promises.forEach((promise, index) => {
      if (!(promise instanceof Promise)) {
        results[index] = promise;
        promisesFulfilled++;
        if (promisesFulfilled === promises.length) resolve(results);
      } else {
        promise
          .then((data) => {
            results[index] = data;
            promisesFulfilled++;
            if (promisesFulfilled === promises.length) resolve(results);
          })
          .catch((error) => {
            reject(error);
          });
      }
    });
  });
};

//! not my way but certainly more clear and concise usinh Promise.resolve() method
Promise.myAll2 = function (promises) {
  return new Promise((resolve, reject) => {
    let results = new Array(promises.length);
    let promisesFulfilled = 0;
    if (promises.length === 0) {
      resolve([]);
      return;
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((data) => {
          results[index] = data;
          promisesFulfilled++;
          if (promisesFulfilled === promises.length) resolve(results);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// results-

// Promise.all([p2, p3, p4, p5, p6, p7, p8])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Promise.myAll([p2, p3, p4, p5, p6, p7, p8])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// Promise.myAll2([p2, p3, p4, p5, p6, p7])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

//! promise.race

// Promise.race(promises)
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((data) => {
          resolve(data);
          return;
        })
        .catch((error) => {
          reject(error);
          return;
        });
    });
  });
};

// Promise.race([p2, p3, p4, p8])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

// Promise.myRace([p2, p3, p4, p8])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.error(e);
//   });

//// ! category - debouncing and throttling - very important

//!  debouncing-
// create a fn to return debounced func of any func
function createdDebouncedFn(cb, delay) {
  let timeoutId;
  return function (...args) {
    // this line makes sure that if multiple calls to our debounce fn happens with delay time then the last one will be executed.
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      return cb(...args);
      // below line is if u want to use call
      //cb.call(args.at(-1) ?? window, ...args.splice(-1));
    }, delay);
  };
}

// function for which u want to create a debounce function
function normalPrint(word) {
  console.log(word);
}

debouncedSearch = createdDebouncedFn(normalPrint, 2000);

// creating test case
debouncedSearch(1); // called in debouncedSearch

debouncedSearch(2); // wont be called in debouncedSearch
async function delayFunction(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      debouncedSearch(3);
      resolve();
    }, delay);
  });
}
delayFunction(3000); // called in debouncedSearch

//! throttling-

function throttleFunc(cb, delay) {
  last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (last === 0 || now - last >= delay) {
      last = now;
      return cb(...args);
    }
  };
}

//! how debounce and throttle differs

// Debouncing and throttling are two techniques used to control the rate at which functions are executed, especially in response to events like scrolling, resizing, or typing. While they serve similar purposes in managing function execution, they operate differently and are suited for different scenarios.

// ! Debouncing
// Definition: Debouncing ensures that a function is only executed after a certain period of inactivity. It delays the execution of the function until after a specified wait time has passed since the last time it was invoked.

// How It Works:

// Wait for Inactivity: When the function is invoked, a timer starts.
// Reset Timer: If the function is invoked again before the timer completes, the timer is reset.
// Execute: Once the specified wait time has passed without further invocations, the function is executed.
// Use Cases:

// Input Fields: Useful for scenarios like live search or autocomplete where you want to wait until the user has stopped typing before making a request.
// Resize Events: Useful for handling window resize events, where you want to perform an action only after the user has finished resizing the window.

// function debounce(fn, delay) {
//   let timeoutId;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// // Usage
// const handleResize = debounce(() => {
//   console.log('Window resized');
// }, 200);

// window.addEventListener("resize", handleResize);
// In this example, handleResize will only log 'Window resized' if the window resize event stops firing for 200 milliseconds.

//! Throttling
// Definition: Throttling ensures that a function is executed at most once in a specified interval, regardless of how many times it is invoked. It enforces a fixed frequency of execution.

// How It Works:

// Fixed Interval: The function is executed immediately upon the first invocation.
// Enforce Frequency: After the first execution, subsequent invocations within the specified interval are ignored.
// Execute Again: The function is executed again after the interval has passed.
// Use Cases:

// Scrolling Events: Useful for scenarios like lazy loading or infinite scrolling where you want to control the rate of function execution during continuous scrolling.
// Throttle API Requests: Useful for limiting the rate of API requests to prevent overloading the server.

// function throttle(fn, limit) {
//   let lastFunc;
//   let lastRan;
//   return function (...args) {
//     const context = this;
//     if (!lastRan) {
//       fn.apply(context, args);
//       lastRan = Date.now();
//     } else {
//       clearTimeout(lastFunc);
//       lastFunc = setTimeout(() => {
//         if (Date.now() - lastRan >= limit) {
//           fn.apply(context, args);
//           lastRan = Date.now();
//         }
//       }, limit - (Date.now() - lastRan));
//     }
//   };
// }

// // Usage
// const handleScroll = throttle(() => {
//   console.log("Scroll event fired");
// }, 1000);

// window.addEventListener("scroll", handleScroll);

// In this example, handleScroll will log 'Scroll event fired' at most once every 1000 milliseconds during scrolling.

//! Summary of Differences
// Execution Frequency:

// Debouncing: Executes the function only after a period of inactivity.
// Throttling: Executes the function at most once per specified interval.
// Behavior:

// Debouncing: Delays function execution until the event stops firing for the specified time.
// Throttling: Limits function execution to a fixed frequency regardless of how many times the event occurs.
// Use Case:

// Debouncing: Ideal for scenarios where you want to wait for a pause in activity (e.g., search suggestions).
// Throttling: Ideal for scenarios where you need to control the frequency of function execution (e.g., scrolling events).

//! My example for throttling-

// we can control the mouseover event. Since this is trigerred everytime we move the mouse. So handling that each of those trigger in eventhandler will be expensive so we can limit the freq of handling using throttling.

// function throttleFunc(cb, delay) {
//   last = 0;
//   return function (...args) {
//     let now = new Date().getTime();
//     if (last === 0 || now - last >= delay) {
//       last = now;
//       return cb(...args);
//     }
//   };
// }

//////////////////////! flatten object

// input
var user = {
  age: null,
  name: "Vishal",
  address: {
    primary: {
      house: ["109", "110"],
      street: {
        main: "21",
        cross: "32",
      },
    },
  },
};

//output
// {
//   user_name: "Vishal",
//   user_address_primary_house: "109",
//   user_address_primary_street_main: "21",
//   user_address_primary_street_cross: "32",
// }

//! handle null cases also
function helper(obj, keyName, newObj) {
  if (obj === null) {
    newObj[keyName] = null;
    return newObj;
  }
  // Object.keys(arr) gives key as 0,1,2 ....
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      let newKey = `${keyName}_${key}`;
      helper(obj[key], newKey, newObj);
    } else {
      newObj[`${keyName}_${key}`] = obj[key];
    }
  }
  return newObj;
}

function flattenObject(obj, name) {
  if (!(typeof obj === "object")) {
    throw new Error(obj + ", this is not an object");
  }
  let newObj = {};
  return helper(user, name, newObj);
}

console.log(flattenObject(user, "user"));

//////////////! Deep copy ka pollyfill - vvvv hard ////////////////
// this is how we can create deep copy
// let arr2 = JSON.parse(JSON.stringify(arr));

let originalArr = [
  {
    name: {
      street: {
        ab: "223",
      },
    },
  },

  [
    1,
    [1, 2],
    {
      branch: "cse",
    },
  ],

  "kaslasas",
  121212,
];

// function
function deepCopy(arr) {
  let tmpArr = [];
  let tmpObj = {};
  if (Array.isArray(arr)) {
    for (let item of arr) {
      tmpArr.push(deepCopy(item));
    }
  } else if (typeof arr === "object") {
    for (let key of Object.keys(arr)) {
      tmpObj[key] = deepCopy(arr[key]);
    }
  } else {
    return arr;
  }
  if (tmpArr.length > 0) {
    return tmpArr;
  } else return tmpObj;
}
function createDeepCopy(arr) {
  return deepCopy(arr);
}

let newArr = createDeepCopy(originalArr);
originalArr[0].name.street.ab = "alklaadadd";
originalArr[1][0] = 999999999;
console.log(originalArr, newArr);
