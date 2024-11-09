//============================================
// JIO CINEMA

// Q. write a function that takes array of promises and return result after running those promises in series

// const seriesPromises = async function (...args) {
//   let arrPromises = [...args];
//   const length = args.length;
//   let results = [];
//   for (let i = 0; i < length; i++) {
//     const response = await arrPromises[i];
//     results.push(response);
//   }

//   return response;
// };

//todo
//! Implement mapLimit async function

// Problem Statement -
// Implement a mapLimit function that is similar to the Array.map() but
// returns a promise that resolves on the list of output by mapping each
// input through an asynchronous iteratee function or rejects it if any
// error occurs. It also accepts a limit to decide how many operations can
// occur at a time.
// The asynchronous iteratee function will accept an input and a
// callback. The callback function will be called when the input is
// finished processing, the first argument of the callback will be the error
// flag and the second will be the result.

// let numPromise2 = mapLimitAsync([1, 2, 3, 4, 5], 3, function (num, callback) {
//   setTimeout(function () {
//     num = num * 2;
//     // console.log(num);
//     callback(null, num);
//   }, 1000);
// });

// numPromise2
//   .then((result) => console.log("success:" + result))
//   .catch(() => console.log("no success"));

//!Implement mapSeries async function

async function mapSeries(arr, fn) {
  return new Promise(async (resolve, reject) => {
    let result = [];

    function callFn(item) {
      return new Promise((resolve, reject) => {
        fn(item, (err, val) => {
          if (err) {
            reject(err);
          } else resolve(val);
        });
      });
    }
    index = 0;
    for (let item of arr) {
      try {
        let value = await callFn(item);
        result.push(value);
      } catch (e) {
        reject(e);
      } finally {
        if (index === arr.length - 1) {
          resolve(result);
        }
        index++;
      }
    }
  });
}

let numPromise = mapSeries([1, 2, 3, 4, 5], function (num, callback) {
  setTimeout(function () {
    num = num * 2;
    // console.log(num);
    if (num === 12) {
      callback(true);
    } else {
      callback(null, num);
    }
  }, 1000);
});
// numPromise
//   .then((result) => console.log("success:" + result))
//   .catch(() => console.log("no success"));

//! Execute async functions in Series

// Problem Statement -
// Implement a function that takes a list of async functions as input and
// executes them in a series that is one at a time. The next task is
// executed only when the previous task is completed.
// Example
// Input:
// [
// asyncTask( 3 ),
// asyncTask( 1 ),
// asyncTask( 2 )
// ]
// Output:
// 3
// 1
// 2

const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 1000 * i);
  });
};
const promises = [
  asyncTask(5),
  asyncTask(6),
  asyncTask(6),
  asyncTask(6),
  asyncTask(6),
];

async function asyncExecution(promises) {
  let result = [];
  for (let promise of promises) {
    try {
      let value = await promise;
      console.log(value);
      result.push(value);
    } catch (e) {
      throw new Error(e);
    }
  }
  console.log(result);
}

asyncExecution(promises);

//! Execute async functions in Parallel

// Problem Statement -
// Implement a function that takes a list of async functions as input and a
// callback function and executes the input tasks in parallel i.e all at once
// and invokes the callback after all tasks are finished.
// Example
// Input:
// executeParallel(
// [asyncTask( 3 ), asyncTask( 1 ), asyncTask( 2 )],
// (result) => { console .log(result);});
// Output:
// // output in the order of execution
// [ 2 , 1 , 3 ]

const promises2 = [
  asyncTask(2),
  asyncTask(4),
  asyncTask(3),
  asyncTask(5),
  asyncTask(1),
];

async function asyncExecution(promises, cb) {
  let result = Array(promises.length);
  let countPromisesResolved = 0;
  let index = 0;
  for (let promise of promises) {
    promise
      .then((data) => {
        result[index] = data;
        //console.log(data);
        // countPromisesResolved++;
      })
      .catch((e) => {
        // countPromisesResolved++;
        throw new Error(e);
      })
      .finally((data) => {
        countPromisesResolved++;

        //console.log("s");
        if (countPromisesResolved === promises.length) {
          //console.log(result);
          //cb();
        }
      });
    index++;
  }
}

asyncExecution(promises2, () => {
  console.log("done");
});

//!Q Implement async filter function (involves callback CB)

// Problem Statement -
// Implement a function that takes an array of input and an async
// iteratee function and returns a promise that resolves with the list of
// inputs that has passed the test through the iteratee function.
// The inputs will run in parallel, but the output will be in the same order
// as the original.
// The asynchronous iteratee function will accept an input and a
// callback. The callback function will be called when the input is
// finished processing, the first argument of the callback will be the error
// flag and the second will be the result.

let asycnFilter = (arrNums, func) => {
  return new Promise((resolve, reject) => {
    let result = Array(arrNums.length);
    let count = 0;

    arrNums.forEach((item, index) => {
      func(item, (err, val) => {
        count++;
        if (err) {
          reject(err);
        } else {
          if (val) result[index] = item;
        }
        if (count === arrNums.length) {
          resolve(result.filter(Boolean));
        }
      });
    });
  });
};

let numPromise2 = asycnFilter([1, 2, 3, 4, 5], function (num, callback) {
  setTimeout(function () {
    num = num * 2;
    //console.log(num);
    // throw error
    if (num === 7) {
      callback(true);
    } else {
      callback(null, num !== 4);
    }
  }, 2000);
});

// numPromise2
//   .then((result) => console.log("success:" + result))
//   .catch(() => console.log("no success"));

//! Dependent async tasks
// Problem Statement -
// Consider we have multiple async tasks A, B, C, D, and E ( not
// promises). A, B, and C are independent tasks while D depends on A
// and B to perform its task while E depends on D and C to perform its
// task. Write a task function/class to solve this problem.

////////////////!IMP note

const createAsyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(i);
      resolve(i);
    }, 1000);
  });
};

Promise.all(
  [1, 2, 3].map((id) => {
    return createAsyncTask(id).then((response) =>
      createAsyncTask(response * 5)
    );
  })
).then((data) => {
  console.log(data);
});
