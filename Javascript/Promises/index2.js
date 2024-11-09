//////////////// !OP ques /////////

// Q1
// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// Promise.resolve().then(() => {
//   setTimeout(() => {
//     console.log("Timeout 2");
//   }, 0);
//   console.log("Promise 2");
// });

// console.log("End");

/** OP
 * 
 * Start
    End
  Promise 1
  Promise 2
  Timeout 1
  Timeout 2
 */

// !Imp Q2
// console.log("Start");

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Resolved");
//     }, 2000);
//   });
// }

// resolveAfter2Seconds().then(console.log);

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 1000);

// console.log("End");

//Q3;

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1");
//     return Promise.resolve("Promise 2");
//   })
//   .then(console.log);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// console.log("End");

/**
 * Start
 * End
 * Promise 1
 * Promise 2
 * Timeout 1
 * Timeout 2
 */

// Q4

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 1000);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// Promise.resolve().then(() => {
//   console.log("Promise 2");
//   setTimeout(() => {
//     console.log("Timeout 3");
//   }, 0);
// });

// console.log("End");

/**
 * start
 * end
 * promise1
 * promise2
 * timeout2
 * timeout3
 * timeout1
 */

// Q5

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 1000);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");
// });

// Promise.resolve().then(() => {
//   console.log("Promise 2");
//   setTimeout(() => {
//     console.log("Timeout 3");
//   }, 1000);
// });

// console.log("End");

/**
 * start
 * end
 * promise1
 * promise2
 * timeout2
 * timeout1
 * timeout3
 */

// Q6

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout 1");
//   Promise.resolve().then(() => {
//     console.log("Promise 1");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 2");
// });

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// console.log("End");

/**
 * Start
 * End
 * Promise2
 * Timeout1
 * Promise1
 * Timeout2
 */

// Q7

// async function asyncFunc() {
//   console.log("Async Function Start");
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log("Async Function End");
// }

// console.log("Start");

// asyncFunc();

// setTimeout(() => {
//   console.log("Timeout");
// }, 500);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");

/**
 * start
 * Async Function Start
 * End
 * Promise
 * Timeout
 * Async Function End
 */

// Q.

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1");
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Timeout 2");
//     }, 0);
//     console.log("Promise 2");
//   });

// console.log("End");

/**
 * end
 * promise1
 * Promise 2
 * Timeout 1
 * Timeout 2
 */

// Q

// console.log("Start");

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1");
//     setTimeout(() => {
//       console.log("Timeout 1");
//     }, 0);
//   })
//   .then(() => {
//     console.log("Promise 2");
//   });

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// console.log("End");

/**
 * Start
 * End
 * Promise 1
 * Promise 2
 * Timeout 2
 * Timeout 1
 */

// !    imp - Shrikanth Sir ques -

// const prom = new Promise((resolve) => {
//   // Does something
//   resolve("Success promise");
// });

// prom
//   .then((result) => console.log(result))
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("I am a chained promise timeout who runs after 2 seconds");
//         console.log("I am a chained promise, timeout done executing");
//         reject("ERROR");
//       }, 2000);
//     });
//   })
//   .then(() => console.log("Done executing the promise"))
//   .then(() => console.log("Taare zameen par"))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("I am finally"));

////////////////// !!!!!!!!!!!!!!!! this is super important !!!!!!!!!!!!!!!!!!!!!!!!

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 4000);
});

async function run() {
  const result1 = await p1;
  console.log(result1);
  const result2 = await p2;
  console.log(result2);
  console.log(typeof result1, typeof result2);
}

run();

async function run1() {
  p2.then(() => console.log("Async operation 2 done"))
    .catch((err) => console.log("Error", err))
    .finally(() => console.log("Finally"));
}

// !!Since run1 is an async function, it returns a promise. This promise will be in a pending state until all the synchronous code inside run1 is executed.
// !!Even though run1 has returned the promise, the code inside run1 continues to execute. This includes setting up the then, catch, and finally handlers on p2.
// !!These handlers will execute when p2 settles (either resolves or rejects

// !!Why the Code Inside run1 Executes:
// !!The key point is that the then, catch, and finally methods on p2 are set up synchronously when run1 is called. The function run1 itself returns immediately, but the handlers on p2 will execute later, when p2 settles. This is a common behavior with promises: setting up handlers (then, catch, finally) does not block the execution and does not require the function to wait.

// const result = run1();
// console.log(result);

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// })
//   .then(() => console.log("1"))
//   .then(() => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         console.log("2");
//         res();
//       }, 2000);
//     });
//   })
//   .then(() => console.log("3"));

// fetch("./Async/data.json")
//   .then((response) => response.json()) // Extract JSON from the response
//   .then((data) => fetch(`https://api.github.com/users/${data.name}`)) // Use the extracted data
//   .then((response) => response.json())
//   .then(
//     (githubUser) =>
//       new Promise(function (resolve, reject) {
//         let img = document.createElement("img");
//         img.src = githubUser.avatar_url;
//         document.body.append(img);

//         setTimeout(() => {
//           img.remove();
//           resolve(githubUser);
//         }, 3000);
//       })
//   )
//   .then((githubUser) => alert(`Finished showing ${githubUser.name}`))
//   .catch((error) =>
//     console.error("There was a problem with the fetch operation:", error)
//   );

////////////////////////! always remember these things about async functions

// An async function in JavaScript always returns a promise. This is a fundamental aspect of async functions.

// Key Points about async Functions:
// Return Value: An async function always returns a promise. If the function returns a value, that value is wrapped in a resolved promise. If the function throws an error, the returned promise is rejected with that error.

// Awaiting Promises: Inside an async function, you can use the await keyword to wait for a promise to resolve. This makes asynchronous code look and behave more like synchronous code.

// async function fetchData() {
//   const data = await fetch(`https://api.github.com/users/shrikanth`);
//   const json = await data.json();
//   console.log(json);
//   return json;
// }

// const result = fetchData();
// console.log(result); // Logs: Promise { <pending> }

// result.then((data) => console.log(data)); // Logs: { ...data from the API... }

// (async () => {
//   async function fetchData() {
//     const data = await fetch(`https://api.github.com/users/shrikanth`);
//     const json = await data.json();
//     console.log(json);
//     return json;
//   }

//   const result3 = await fetchData();
//   console.log(result3); // OP will be the data
// })();

// async function exampleWithError() {
//   throw new Error("Something went wrong!");
// }

// const result2 = exampleWithError();
// console.log(result2); // Logs: Promise { <rejected> Error: Something went wrong! }

// result2.catch((error) => console.log(error.message)); // Logs: Something went wrong!

////////////////////! callbacks and callback hell ////////////////////////

// Callbacks in JavaScript

function initiateScript(src, callback) {
  const script = document.createElement("script");

  script.src = src;

  script.onload = () => {
    callback();
  };

  script.onerror = () => {
    console.error("Error loading script: " + src);
  };

  document.head.append(script);
}

/**
 * Pyramid of Doom
 */

initiateScript("./Async/one.js", function () {
  console.log("Done loading script one");
  initiateScript("./Async/two.js", function () {
    console.log("Done loading script two");
    initiateScript("./Async/three.js", function () {
      console.log("Done loading script three");
    });
  });
});
