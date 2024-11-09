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

//! not my way but certainly more clear and concise using Promise.resolve() method
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

Promise.myResAll = function (promises) {
  let unresolvedPromises = promises.length;
  const resolvedArray = new Array(unresolvedPromises);

  if (unresolvedPromises === 0) {
    return Promise.resolve([]);
    //vs
    // Promise.resolve([]);
    // return;
  }

  return new Promise((resovle, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise, index),
        then((result) => {
          resolvedArray[index] = result;
          unresolvedPromises--;
          if (unresolvedPromises === 0) resovle(resolvedArray);
        }).catch((error) => {
          reject(error);
        });
    });
  });
};
