//! if u want to execute things in sequence then map, forEach wont work. Use the for of or for or while kind of loop or REDUCE function. U might be thinking of why. Reason is that map, forEach etc uses callback to execute the looping logic and there is no way u can tell JS to take callbacks when the previous callback is done. Even when u use async await inside the callback of these loops then that only ensures that a particaular callback is executed in sync but it does not make sure that all callbacks (for each index) are in series.

// ? to see practically, refer these questions-
// ?Implement mapSeries async function
//? Execute async functions in Series

//! but if u want a parallel execution u can use map foreach forof for while anything-

//? see practically -
//? Q Implement async filter function

//! when we have something like this, then consoles will come in this timing-
// Completing 5 - after 5 seconds
// 4 times - Completing 6 - 1 second after above line

// reason for above is simple. The promises (asyncTask) was called 5 times at time =0 and their respective timers start  ticking ; when in loop u called await for each of these 5 promises then 1st one had 5 seconds left and all other 4 promises had 6 seconds left. By the time first promise resolves then now time = 5. And for other promises only 1 second time is left, so second promise in loop completes in next 1 second. Now timer = 6 and for remaining 3 promises are also resolved so await wont take anytime.

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

//! very imp thing to remember is - as stated above when u need the parallel execution u can use the map or forEach and if u want to store the results in same order as input then u can use the same index which is in callback of these forEach or map bcoz those index is local to that callback and hence its value remains intact for that particaular callback

//! but for paraleld order if u want result in same order as the input and u want to use a normal loop like forof or for or while then dont do something like this bcoz at the time then is executed then the value of index will be n. and hence u cant maintain the order.

async function asyncExecution(promises) {
  let result = Array(promises.length);
  let countPromisesResolved = 0;
  let index = 0;
  for (let i = 0; i < promises.length; i++) {
    let promise = promises[i];
    promise
      .then((data) => {
        result[i] = data;
        console.log(data);
      })
      .catch((e) => {
        throw new Error(e);
      })
      .finally((data) => {
        countPromisesResolved++;
        if (countPromisesResolved === promises.length) {
          console.log(result);
        }
      });
  }
}

//! rather maintain local index for each of them (using a local variable of loop i)

async function asyncExecution(promises) {
  let result = Array(promises.length);
  let countPromisesResolved = 0;
  for (let i = 0; i < promises.length; i++) {
    let promise = promises[i];
    promise
      .then((data) => {
        result[i] = data;
        console.log(data);
      })
      .catch((e) => {
        throw new Error(e);
      })
      .finally((data) => {
        countPromisesResolved++;
        if (countPromisesResolved === promises.length) {
          console.log(result);
        }
      });
  }
}
