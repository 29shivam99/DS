//1. Given a list of promises and their priorities, call them parallelly and resolve with the value of the first promise with the most priority. If all the promises fail then reject with a custom error.

// Example

// const promises = [
//   { status: "resolve", priority: 4 },
//   { status: "reject", priority: 1 },
//   { status: "resolve", priority: 2 },
//   { status: "reject", priority: 3 },
// ];

// resolvePromisesWithPriority(promises);
// {status: 'resolve', priority: 2}

///////////////////////// Solution /////////////////

const allPromises = [
  { task: createPromise(), priority: 1 },
  { task: createPromise(), priority: 4 },
  { task: createPromise(), priority: 2 },
  { task: createPromise(), priority: 9 },
  { task: createPromise(), priority: 3 },
];

function createPromise() {
  let value = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value > -1) {
        resolve(value);
      } else {
        reject();
      }
    }, value * 100);
  });
}

const promises = allPromises.forEach((item) => item.task);

function fn() {
  let numberOfTasksDone = 0;
  allPromises.sort((a, b) => a.priority - b.priority);
  let resolvedValues = {};
  let rejectedValeus = [];
  let maxPriority = -1;

  return new Promise((resolve, reject) => {
    allPromises.forEach((promiseObj, index) => {
      promiseObj.task
        .then((value) => {
          console.log(index, value);
          resolvedValues[index] = value;
          maxPriority = Math.min(maxPriority, index);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          numberOfTasksDone++;
          if (numberOfTasksDone === allPromises.length) {
            if (maxPriority === -1) {
              reject("all promises failed!");
            } else {
              resolve(resolvedValues[maxPriority]);
            }
          }
        });
    });
  });
}

// fn()
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//2.Implement a function in JavaScript that given an array of strings representing the domains, counts the number of occurrences of each string as a substring in the whole array and returns it.

// Input:
const URLs = [
  "www.google.com",
  "www.learnersbucket.com",
  "google.com",
  "learnersbucket.com",
  "news.learnersbucket.com",
];

// Output:
// {
//   "www.google.com": 1,
//   "www.learnersbucket.com": 1,
//   "google.com": 2,
//   "learnersbucket.com": 3,
//   "news.learnersbucket.com": 1
// }

const aggregate = URLs.reduce((acc, currStr, index, array) => {
  // to track the count of occurrences of the current string
  let count = 0;

  // check if the current string is a substring
  // of any of the strings in the given URL array
  // use the Boolean method to convert the boolean value to numerical.
  // 1 for true and 0 for false
  array.forEach((url) => (count += Boolean(url.includes(currStr))));

  // update the count for the string
  acc[currStr] = count;

  // return the object
  console.log(acc);
  return acc;
}, {});

//3.Implement a mapSeries async function in JavaScript that is similar to the Array.map() but returns a promise that resolves on the list of output by mapping each input through an asynchronous iteratee function or rejects it if any error occurs. The inputs are run in a sequence that is one after another. The asynchronous iteratee function will accept an input and a callback. The callback function will be called when the input is finished processing, the first argument of the callback will be the error flag and the second will be the result.

// Input:
// let numPromise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
//   // i am async iteratee function
//   // do async operations here

//   setTimeout(function () {
//     num = num * 2;
//     console.log(num);

//     // throw error
//     if (num === 12) {
//       callback(true);
//     } else {
//       callback(null, num);
//     }
//   }, 2000);
// });

// *numPromise
//   .then((result) => console.log("success:" + result))
//   .catch(() => console.log("no success"));

// Output:
// // each number will be printed after a delay of 2 seconds
// 2
// 4
// 6
// 8
// 10
// "success:2,4,6,8,10" // this will be printed immediately after last

// Implement a function that takes an array of input and an async iteratee function and returns a promise that resolves with the list of inputs that has passed the test through iteratee function in JavaScript.

// The inputs will run in parallel, but the output will be in the same order as the original.

// The asynchronous iteratee function will accept an input and a callback. The callback function will be called when the input is finished processing, the first argument of the callback will be the error flag and the second will be the result.

function fn(nums, fn) {
  return new Promise((resolve, reject) => {});
}

// fn([1, 2, 3, 4], function (inp, cb) {});

// Q. It is a common JavaScript interview question and the problem statement reads as,

// Implement a function in JavaScript that takes a list of async functions as input and a callback function and executes the async tasks in parallel(that is all at once) and invokes the callback after all tasks are executed.

function fn(funcList, cb) {
  let functionsExecuted = 0;
  funcList.forEach((item) => {
    item()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        functionsExecuted++;
        if (functionsExecuted === funcList.length) {
          cb();
        }
      });
  });
}

function createAsyncFunctions() {
  let timer = Math.floor(Math.random() * 10);
  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(timer);
      }, timer * 100);
    });
  };
}

fn(
  [
    createAsyncFunctions(),
    createAsyncFunctions(),
    createAsyncFunctions(),
    createAsyncFunctions(),
  ],
  function () {
    console.log("called CB");
  }
);

//Q. Sort the keys in the ascending / descending

//Q. convert percentage to decimal

const percentToDecimal = function (percentString) {
  const numberValue = parseFloat(percentString);
  if (!isNaN(numberValue)) {
    console.log(numberValue / 100);
    return numberValue / 100;
  }
  return "invalid string";
};

// console.log("percent", percentToDecimal("%100"));

//Q. Sort a set in JavaScript in Ascending or Descending order.

const mySet = new Set([-2, 1, 4, 3, 5, 10, 7]);
const mySet2 = new Set(["apple", "orange", "banana"]);
console.log(mySet);

let arr = Array.from(mySet2);
console.log(arr);

arr.sort(); // this is used when we have string sorting
arr.sort((a, b) => b.localeCompare(a)); // for string descending sorting
console.log(arr);

const sortedSet = new Set(arr);
console.log(sortedSet);

//Q. Sort a map in JS
// Ans. https://learnersbucket.com/examples/es6/sort-a-map-in-javascript/

//Q. Advanced-> https://learnersbucket.com/examples/interview/html-encoding-of-a-string/

//Q.

// const searchEngine = new InMemorySearch();
// searchEngine.addDocuments('Movies',
//                     {name: 'Avenger', rating: 8.5, year: 2017},
//                     {name: 'Black Adam', rating: 8.7, year: 2022},
//                     {name: 'Jhon Wick 4', rating: 8.2, year: 2023},
//                     {name: 'Black Panther', rating: 9.0, year: 2022}
//                    );
// console.log(searchEngine.search('Movies', (e) => e.rating > 8.5, {key: 'rating', asc: false}));

/*
[
  {
    "name": "Black Panther",
    "rating": 9,
    "year": 2022
  },
  {
    "name": "Black Adam",
    "rating": 8.7,
    "year": 2022
  }
]
*/

//Good-  Q.Given a string and array of keywords, highlight the words in the string that are part of the array of keywords.
//If two words are overlapping or adjacent, combine them together. As you can see in the above example there are two different words Front and End but they are highlighted together.

const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ["Front", "End", "JavaScript"];

const highlightWords = function (str, words) {
  let strWords = str.split(" ");
  let ans = "";
  strWords.forEach((word) => {
    if (words.includes(word)) {
      ans += `<strong>${word}</strong> `;
    } else {
      let i;
      for (i = 0; i < word.length; i++) {
        const prefix = word.slice(0, i);
        const suffix = word.slice(i);
        console.log(prefix, suffix);
        if (words.includes(prefix) && words.includes(suffix)) {
          ans += `<strong>${word}</strong> `;
          break;
        } else if (words.includes(prefix) && !words.includes(suffix)) {
          ans += `<strong>${prefix}</strong>${suffix}`;
          break;
        } else if (!words.includes(prefix) && words.includes(suffix)) {
          ans += `${prefix}<strong>${suffix}</strong> `;
          break;
        }
      }
      if (i === word.length) {
        ans += `${word} `;
      }
    }
  });
  console.log(ans.slice(0, -1));
};

highlightWords(str, words);

// Ans- "Ultimate <strong>JavaScript</strong> / <strong>FrontEnd</strong> Guide"

//Q. Implement a throttler that executes an array of tasks. When the throttler is passed a number, only executes that number of the tasks and passes the other tasks into a queue.

// Input:
// const task = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const count = 5;

// throttle(task, count, 2000); // [1, 2, 3, 4, 5] // immediately
// throttle(task, count, 4000); // [6, 7, 8, 9, 10] // after 2 seconds
// throttle(task, count, 2000); // [1, 2, 3, 4, 5] // after 4 seconds

// In each call, 10 new tasks are pushed and only 5 are executed, remaining are stored in the queue.
//https://learnersbucket.com/examples/interview/throttle-an-array-of-task/
let callBackQueue = [];
let prevDelay = 0;
let counter = 0;

const throttle = function (task, count, delay) {
  counter++;

  if (prevDelay === 0) {
    for (let i = 0; i < count; i++) {
      console.log("task executing", task[i]);
    }
  } else {
    setTimeout(() => {
      for (let i = 0; i < count; i++) {
        console.log("task executing", task[i]);
      }
    }, prevDelay);
  }

  prevDelay = delay;
  callBackQueue = 1;
};
//Q. Good- Implement an analytics SDK that exposes log events, it takes in events and queues them, and then starts sending the events. This is a Flipkart frontend interview question.

// Send each event after a delay of 1 second and this logging fails every n % 5 times.
// Send the next event only after the previous one resolves.
// When the failure occurs attempt a retry.

/////////////////////solution////////////////////////////////////

// issue will occur to all 4*n+1th event

// for this question to solve u must know how to emit the things at delays

// u must also remember the below is a code which wont help us to send the events at gap of 1 sec
// for (let i = 0; i < 7; i++) {
//   setTimeout(() => {
//     // failure case
//     if ((i + 1) % 4 === -1) {
//     }
//     // success case
//     else {
//       console.log(`sent event ${i}`);
//     }
//   }, 4000);
// }

class SDK {
  events;
  count;
  constructor() {
    this.events = [];
    this.count = 0;
  }

  logEvent(eventName) {
    //console.log(eventName);
    this.events.push(eventName);
  }

  emitAnEvent(name, i) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (i % 5 === 0) {
          reject("error");
        } else {
          resolve(name);
        }
      }, 1000);
    });
  }
  async emitEventAfterDelay() {
    let i = 1;
    while (this.events.length > 0) {
      const eventNum = this.events.shift();
      try {
        let result = await this.emitAnEvent(eventNum, i);
        console.log(result);
      } catch (error) {
        let message = `----------------------- 
                      Failed to send event ${eventNum}
                      Retrying sending event ${eventNum}
                      "-----------------------`;
        console.log(message);
        this.events.unshift(eventNum);
      }
      i++;
    }
  }

  send() {
    this.emitEventAfterDelay();
  }
}
// // Input:
const sdk = new SDK();

sdk.logEvent("event 1");
sdk.logEvent("event 2");
sdk.logEvent("event 3");
sdk.logEvent("event 4");
sdk.logEvent("event 5");
sdk.logEvent("event 6");
sdk.logEvent("event 7");
sdk.logEvent("event 8");
sdk.logEvent("event 9");
sdk.logEvent("event 10");
sdk.logEvent("event 11");
sdk.logEvent("event 12");
sdk.logEvent("event 13");
sdk.logEvent("event 14");
sdk.logEvent("event 15");
sdk.logEvent("event 16");
sdk.logEvent("event 17");
sdk.logEvent("event 18");
sdk.logEvent("event 19");
sdk.logEvent("event 20");

// sdk.send();

// Output:
// "Analytics sent event 1"
// "Analytics sent event 2"
// "Analytics sent event 3"
// "Analytics sent event 4"
// "-----------------------"
// "Failed to send event 5"
// "Retrying sending event 5"
// "-----------------------"

// "Analytics sent event 5"
// "Analytics sent event 6"
// "Analytics sent event 7"
// "Analytics sent event 8"
// "-----------------------"
// "Failed to send event 9"
// "Retrying sending event 9"
// "-----------------------"

// "Analytics sent event 9"
// "Analytics sent event 10"
// "Analytics sent event 11"
// "Analytics sent event 12"
// "-----------------------"
// "Failed to send event 13"
// "Retrying sending event 13"
// "-----------------------"

// "Analytics sent event 13"
// "Analytics sent event 14"
// "Analytics sent event 15"
// "Analytics sent event 16"
// "-----------------------"
// "Failed to send event 17"
// "Retrying sending event 17"
// "-----------------------"

// "Analytics sent event 17"
// "Analytics sent event 18"
// "Analytics sent event 19"
// "Analytics sent event 20"

//Q.Good ques for reduce -  Implement a method in Javascript that will take an object and a string or array of strings as a path and return the value at that path. If nothing is found return undefined. Polyfill for lodash._get().
// https://learnersbucket.com/examples/interview/get-object-value-from-string-path/

//Q. Very Important (cookies) -
// https://learnersbucket.com/examples/interview/create-custom-cookie-in-javascript/

//first learn how to use cookies in JS

// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`

// code
// max-age is in seconds remember that
document.cookie =
  "name=temporary-cookie-2seconds; SameSite=None; Secure; max-age=2";
document.cookie = "favorite_food=maggi; SameSite=None; Secure";

function showCookies() {
  const output = document.getElementById("cookies");
  output.textContent = `> ${document.cookie}`;
}

function clearOutputCookies() {
  const output = document.getElementById("cookies");
  document.cookie = "";
  output.textContent = "";
}

//// code
// Note that we are setting `SameSite=None;` in this example because the example
// needs to work cross-origin.
// It is more common not to set the `SameSite` attribute, which results in the default,
// and more secure, value of `SameSite=Lax;`
// document.cookie = "test1=Hello; SameSite=None; Secure";
// document.cookie = "test2=World; SameSite=None; Secure";

// const cookieValue = document.cookie
//   .split("; ")
//   .find((row) => row.startsWith("test2="))
//   ?.split("=")[1];

// function showCookieValue() {
//   const output = document.getElementById("cookie-value");
//   output.textContent = `> ${cookieValue}`;
// }

// function clearOutputCookieValue() {
//   const output = document.getElementById("cookie-value");
//   output.textContent = "";
// }

//Q. Dofference between functions and methods in JS
//https://learnersbucket.com/examples/javascript/difference-between-a-function-and-method/

//Q. Write a function to find all the elements with the given color. Here the color will be provided in any format like, plain text (white), HEXA value (#fff or #ffffff), or RGB value (RGB(255, 255, 255)).
// learnersbucket.com/examples/interview/find-element-with-the-given-color-property/
//Input:
/*
<div id="root">
  <span style="color:#fff;">1</span>
  <span style="color:#eee;">2</span>
  <span style="color:white;">3</span>
  <span style="color:rgb(255, 255, 255);">4</span>
</div>;

findElementByColor(document.getElementById("root"), "rgb(255, 255, 255)");

Output: [
  <span style="color:#fff;">1</span>,
  <span style="color:white;">3</span>,
  <span style="color:rgb(255, 255, 255);">4</span>,
];
*/
// please remember that children will return only elements while childNodes return all nodes inluding comments etc

//most important thing here is how u can convert color recieved in any format into same format

// highly imp
https: function getHexColor(color) {
  // create a new element
  const div = document.createElement("div");

  // apply the color to the element
  div.style.color = color;

  // get the computed style of the div
  let colors = window.getComputedStyle(document.body.appendChild(div));

  // get the RGB value of the color
  colors = colors.color.match(/\d+/g).map(function (a) {
    return parseInt(a, 10);
  });

  // remove the div
  document.body.removeChild(div);

  // convert the RGB value to HEXA and return it.
  return colors.length >= 3
    ? "#" +
        ((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2])
          .toString(16)
          .substr(1)
    : false;
}

const findElementsWithGivenColour = function (root, color) {
  //const hexColor = findHexOfColor(color);
  let ans = [];

  const element = document.getElementById(root);
  helper(element, color, ans);
  console.log(ans);
};

const helper = function (element, hexColor, ans) {
  console.log(element);

  if (!element) {
    return;
  }
  if (element.style["color"] === hexColor) {
    console.log(ans);
    ans.push(element);
  }
  for (let child of element.children) {
    helper(child, hexColor, ans);
  }
};

findElementsWithGivenColour("root", "white");

//Q.Closure very important question - We will see how to create a javascript function that will remember its previously passed values and return the sum of the current and previous value.

// Here is an example of what the output should be like.
// sum(5); // 5
// sum(3); // 8
// sum(4); // 12
// sum(0); // 12

const prevSummation = function () {
  let previousSum = 0;
  return function (newNumber) {
    previousSum += newNumber;
    console.log(previousSum);
  };
};

let getPrevSummation = prevSummation();
getPrevSummation(5); //5
getPrevSummation(3); //8
getPrevSummation(4); //12
getPrevSummation(0); //12

//Q. Currying - create a function that can do below
//(https://learnersbucket.com/examples/interview/currying-in-javascript-part-1/)
// all below should give 15
// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(1, 2, 3)(4, 5));
// console.log(sum(1, 2, 3, 4)(5));
// console.log(sum(1)(2)(3)(4)(5));

function sum(...args) {
  let requiredParameters = 5,
    paramsTillNow = args.length;
  let sum = args.reduce((sum, arg) => sum + arg, 0);
  function returnNewFunction(...args2) {
    paramsTillNow += args2.length;
    sum += args2.reduce((sum, arg) => sum + arg, 0);
    if (paramsTillNow === requiredParameters) {
      return sum;
    } else return returnNewFunction;
  }
  return returnNewFunction();
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3)(4, 5));
console.log(sum(1, 2, 3, 4)(5));
console.log(sum(1)(2)(3)(4)(5));

//Q.Write a function that satisfies the following.

// add(1)(2).value() = 3;
// add(1, 2)(3).value() = 6;
// add(1)(2)(3).value() = 6;
// add(1)(2) + 3 = 6;
function curr(...args) {
  sum = args.reduce((sum, arg) => sum + arg, 0);
  function add(...args2) {
    sum += args2.reduce((sum, arg) => sum + arg, 0);
    return add;
  }
  add.valueOf = function () {
    return +sum;
  }; // why we did not use add.prototype.valueOf
  add.value = function () {
    return sum;
  };
  return add();
}

console.log(curr(1)(2).value());
console.log(curr(1, 2)(3).value());
console.log(curr(1)(2)(3).value());
console.log(curr(1)(2) + 4);

// This is a little tricky question and requires us to use and modify the valueOf() method.

// When JavaScript wants to turn an object into a primitive value, it uses the function valueOf() method. JavaScript automatically calls the function valueOf() method when it comes across an object where a primitive value is anticipated, so you don’t even need to do it yourself.

function MyNumberType(n, name, age) {
  this.number = n;
  this.name = name;
  this.age = age;
  function val() {
    return name;
  }
  MyNumberType.valueOf = function () {
    return this.number + 1;
  };
}
// by default valeuOf is object itself but we can modify it like this-

const myObj = new MyNumberType(4, "shivam", 24);
console.log(myObj);
console.log(myObj + 5);
console.log(MyNumberType.valueOf());

//Q. Write a function that evaluates the following expression.
//https://learnersbucket.com/examples/interview/currying-part-4/

// function sum(a, b, c, d) {
//   return a + b + c + d;
// }

// let curriedSum = curry(sum);

// console.log(curriedSum(1,2,3,4,5)); // 10
// console.log(curriedSum(1)(2,3)(4)); // 10
// console.log(curriedSum(1)(2)(3)(4)); // 10

function curry(cb) {
  const helper = function (...args) {
    let arr = [...args];
    const func = function (...args2) {
      let sum = 0;
      arr = [...arr, ...args2];
      if (arr.length >= 4) {
        sum += cb(...arr);
        return sum;
      }
      return func;
    };
    return func();
  };
  return helper;
}

function mysum(a, b, c, d) {
  return a + b + c + d;
}

let curriedSum = curry(mysum);
console.log(curriedSum);
console.log(curriedSum(1, 2, 3, 4, 5)); // 10
console.log(curriedSum(1)(2)(3)(4)); // 10
console.log(curriedSum(1)(2, 3)(4, 5)); // 10
console.log(curriedSum(1)(2)(3)(4)); // 10

//Q. What all are the specialities of arrow function -
// /https://learnersbucket.com/tutorials/es6/fat-arrow-function/

//Q. Get the class name of the object in JavaScript, that is created as an instance of a class or a function that is invoked as constructor.
// https://learnersbucket.com/examples/javascript/get-the-class-name-of-the-object-in-javascript/

class Vehicle {}

const car = new Vehicle();

console.log(car.constructor.name); // "Vehicle"
console.log(car.constructor.name === "Vehicle"); // true
console.log(car.constructor.name === Vehicle); // false
console.log(car.constructor === Vehicle); // true
console.log(Vehicle); // entire Vehicle class
console.log(typeof Vehicle); // function

// Q.regex - check later -  Remove all whitespace from the string in JavaScript
// https://learnersbucket.com/examples/javascript/remove-all-whitespace-from-the-string-in-javascript/

let text = "   Learnersbucket    ";
text = text.replace(/^\s+|\s+$/g, "");
console.log(text, text.length);
// "Learnersbucket"

// Q. Check if number is float or integer in JavaScript
// https://learnersbucket.com/examples/javascript/check-if-number-is-float-or-integer-in-javascript/

// mine
const checkNumberType = function (num) {
  console.log(typeof num);
  if (typeof num === "number") {
    if (parseInt(num) === num) return "number";
    return "float";
  }
  return "not a number";
};

console.log(checkNumberType(12.1));
console.log(checkNumberType(12));
console.log(checkNumberType(null));

// actual anss
const isFloat = (num) => {
  // check if the input value is a number
  if (typeof num == "number" && !isNaN(num)) {
    // check if it is float
    // alter this condition to check the integer
    if (!Number.isInteger(num)) {
      return true;
    }
  }

  return false;
};

console.log(isFloat(100)); // false
console.log(isFloat(100.1)); // true
console.log(isFloat(null)); // false

//////////////////////////// POLLYFILL ////////////////////////////

// Q. Custom promise in JavaScripts, Write a function in JavaScript that implements polyfill of the promise.
// https://learnersbucket.com/examples/interview/custom-promise-in-javascript/

// default
// const pp = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 1500);
// });

// pp.then(() => {});

// // pollyfill
// class customPromise {
//   constructor(func) {}
// }

// class cP {
//   data;
//   error;
//   state;
//   constructor(cb1) {
//     cb1(this.resolver, this.rejector);
//   }

//   resolver = (val) => {
//     this.data = val;
//     console.log(this.data);
//     this.resolved = true;
//     this.then();
//   };

//   rejector(err) {
//     this.error = err;
//     return err;
//   }

//   then = (cb2) => {
//     this.thenInvoked = true;
//     if (this.resolved && this.thenInvoked) {
//       console.log(this.data);
//       cb2(this.data);
//     }
//   };

//   catch(cb3) {
//     cb3(this.error);
//   }
// }

// const myCP = new cP((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });

// myCP.then((data) => {
//   console.log("custom", data);
// });

// Q.Given an object which can have a function as a value at a nested level, create a function that will accept arguments as input and pass it through all the functions in the input object and return the computed value.
// https://learnersbucket.com/examples/interview/piping-function-in-javascript-part-1/
// Input:
// {
//   a : {
//     b : (a,b,c) => a+b+c,
//     c : (a,b,c) => a+b-c,
//   },
//   d : (a,b,c) => a-b-c
// }

// Fn(obj)(1,1,1);

// Output:
// {
//   a : {
//     b : 3,
//     c : 1
//   },
//   d: -1
// }

const pipeObj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};
const recurFunc = function (...args) {
  const obj = args.at(-1);
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "function") {
      const val = value(...args);
      obj[key] = val;
    } else {
      args.pop();
      args.push(obj[key]);
      recurFunc(...args);
    }
  }
};
const piping = function (...args) {
  const arr = [...args, pipeObj];
  recurFunc(...arr);
  console.log(pipeObj);
};

piping(1, 1, 1, pipeObj);

// Q. Make high priority Api call in JavaScript

//https://learnersbucket.com/examples/interview/make-high-priority-api-call-in-javascript/

const fetch1 = async function () {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const jsonResult = await result.json();
  console.log(jsonResult);
};

const fetch2 = async function () {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const jsonResult = await result.json();
  console.log(jsonResult);
};

const fetch3 = async function () {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/3");
  const jsonResult = await result.json();
  console.log(jsonResult);
};

console.log("Main code");

setTimeout(() => {
  fetch1();
}, 0);
setTimeout(() => {
  fetch2();
}, 1000);
queueMicrotask(fetch3);

// Q.Cancel an API request in JavaScript
//https://learnersbucket.com/examples/interview/cancel-an-api-request-in-javascript/

// create abort controller
const controller = new AbortController();
const signal = controller.signal;

// get the buttons
const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

// download event
downloadBtn.addEventListener("click", makeCall);

// abort event
abortBtn.addEventListener("click", () => {
  controller.abort();
  console.log("Download aborted");
});

// helper method to make api call
function makeCall() {
  fetch("https://jsonplaceholder.typicode.com/photos", { signal })
    .then((response) => {
      console.log("complete", response);
    })
    .catch((err) => {
      console.error(`error: ${err.message}`);
    });
}

function curry(fn) {
  // your code here
  const helper = function (...args1) {
    let params = args1.length;
    const innerHelper = function (...args2) {
      params += args2.length;
      console.log(fn.length);
      if (params >= fn.length) return fn(...args1, ...args2);
      else return innerHelper;
    };

    return innerHelper();
  };

  return helper;
}
const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin(1)(2)(3));
console.log(curriedJoin(1, 2)(3));

/////////////////////////

// Q. Replace all string occurrences in javascript
// "My name is Shivam Mishra, Shivam is a person who belives in ........"

// replace Shivam with -> Akash

let str2 =
  "My name is Shivam Mishra, Shivam is a person who belives in ........";
str2 = str2.split("Shivam").join("Akash");
console.log(str2);

// How to find the substring in javascript
// "My name is Shivam Mishra, Shivam is a person who belives in ........"

// slice str.slice(start, end)
// substr str.substring(start, end)

//If the startIndex is greater than endIndex. substring() will swap the two indexes, while slice() will return an empty substring.
// If any one or both the indexes are given negative or NaN. substring() will treat them as 0. While slice() treats NaN as 0 but for the negative values it starts the count from the end of the string.

// Q. How to find elements with indexof in javascript
// const list = [1, 2, 3, 4, 5, 6, 7];
// const index = list.indexOf(1);
// console.log(index);
// //0

// const index = list.indexOf(11);
// //-1

// Q. https://learnersbucket.com/examples/interview/deep-flatten-object-in-javascript-1/

// Given an nested object which can have any type of object, deep flatten it and return the new object in Javascript.

let myNestedObj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

// Output:
// {
//   "A": "12"
//   "B": 23,
//   "C.O.L": 56,
//   "C.P": 23,
//   "C.Q.0": 1,
//   "C.Q.1": 2,
// }

// !imp

//? also verify if this is correct approach

const flattenObj = function (obj, flatObj, prevKeyNameConcat) {
  for (let [key, value] of Object.entries(obj)) {
    let newKey = "";
    if (prevKeyNameConcat === "") newKey = `${key}`;
    else newKey = prevKeyNameConcat + `.${key}`;
    if (typeof value === "object" && !Array.isArray(value)) {
      flattenObj(value, flatObj, newKey);
    } else if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        newKey += `.${i}`;
        flatObj[newKey] = value[i];
      }
    } else {
      flatObj[newKey] = value;
    }
  }
};

let flatObj = {},
  prev = "";
flattenObj(myNestedObj, flatObj, prev);
console.log(flatObj);

////////////

// Q. https://learnersbucket.com/examples/interview/convert-entity-relation-array-to-object-in-javascript/

[
  ["lion", "cat"],
  ["cat", "mammal"],
  ["dog", "mammal"],
  ["mammal", "animal"],
  ["fish", "animal"],
  ["shark", "fish"],
];

// https://learnersbucket.com/examples/interview/filter-nested-object-in-javascript/

// Create a function in javascript which will take a nested object and a filter function as input and return the filtered object.

// Input:
const objToFilter = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";

// Output:
// {
//   b: {
//     c: "Hello World",
//     h: "Good Night Moon",
//   }
// };

const applyFilter = function (obj, cb) {
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "object") {
      applyFilter(value, cb);

      if (Object.entries(obj[key]).length === 0) {
        delete obj[key];
      }
    } else {
      if (!cb.call(this, value)) {
        delete obj[key];
      }
    }
  }
};

applyFilter(objToFilter, filter);
debugger;
console.log("filtered object", objToFilter);

// Q. https://learnersbucket.com/examples/javascript/how-to-validate-json-in-javascript/

//How to validate JSON in javascript

// const isJson = (str) => {
//   try {
//     JSON.parse(str);
//   } catch (e) {
//     //Error
//     //JSON is not okay
//     return false;
//   }

//   return true;
// };

/////////////

function fnfn() {
  console.log(this);
  console.log(typeof this);
  console.log(this.__proto__.constructor === fnfn);
}

// fnfn();
new fnfn();
