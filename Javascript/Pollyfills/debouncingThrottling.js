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
