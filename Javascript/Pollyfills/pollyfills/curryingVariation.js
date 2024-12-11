// Write a function to make the following code snippet work?
// console.log(sum(4, 6, 8, 10).value); //output - 28
// console.log(sum(4)(6)(8)(10).value); //output - 28

//! M1
function sumNew(...args) {
  let sumValues = 0;
  sumValues += args.reduce((acc, item) => acc + item, 0);

  const func = function (...argsNew) {
    return sumNew(...args, ...argsNew);
  };

  func.value = sumValues;
  return func;
}
sumNew(4)(6, 8)(10);
console.log(sumNew(4)(6, 8)(10).value);

// ========================================================

//! M2
function createCurry() {
  let sumValues = 0;
  const sum = function (...args) {
    sumValues += args.reduce((acc, item) => acc + item, 0);
    sum.value = sumValues;
    return sum;
  };

  return sum;
}

const sum = createCurry();
console.log(sum(4)(6, 8)(10).value);
console.log(sum(4)(6, 8)(10).value);

//!

//  Write a function for the desired output as:
// Input: sum(2)(3)()
// Output: 5

// Input: sum(2)(3)(4)()
// Output: 9

function sum(num) {
  let totalSum = num;

  function curry(remainingNum) {
    if (remainingNum === undefined) {
      return totalSum;
    } else {
      totalSum += remainingNum;
      return curry;
    }
  }

  return curry;
}

const res = sum(2)(3)(4)();
console.log(res);

const res2 = sum(2)(3)();

console.log(res2);
