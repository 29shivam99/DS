// const getCurried = (cb) => {
//   let totalArgs = [];
//   function func(...args) {
//     totalArgs = [...totalArgs, ...args];
//     if (totalArgs.length === cb.length) {
//       return cb.apply(this, totalArgs);
//     } else {
//       return func;
//     }
//   }
//   return func;
// };

// const func = (a, b, c, d) => {
//   return a - b - c - d;
// };

// const curried = getCurried(func);

// const res = curried(1)(2)(3)(4);
// console.log(res);

///////////////

//Q.Closure very important question - We will see how to create a javascript function that will remember its previously passed values and return the sum of the current and previous value.

// Here is an example of what the output should be like.
// sum(5); // 5
// sum(3); // 8
// sum(4); // 12
// sum(0); // 12

// const getCurriedSum = () => {
//   let value = 0;

//   function func(num) {
//     value += num;
//     return value;
//   }

//   return func;
// };

// const sum = getCurriedSum();
// console.log(sum(5));
// console.log(sum(3));
// console.log(sum(4));
// console.log(sum(0));

//

// Write a function to make the following code snippet work?
// console.log(sum(4, 6, 8, 10).value); //output - 28
// console.log(sum(4)(6)(8)(10).value); //output - 28

const newSum = (...args) => {
  const total = 0;
  total += args.reduce((acc, item) => acc + item, 0);

  function func(...argsNext) {
    total += argsNext.reduce((acc, item) => acc + item, 0);
    // return newSum;
  }

  func.value = total;
  return func;
};

// function getCurried() {
//   let total = 0;
//   function func(...args) {
//     total += args.reduce((acc, item) => acc + item, 0);
//     func.value = total;
//     return func;
//   }
//   return func;
// }

// const sum = getCurried();
// console.log(sum(4, 6, 8, 10).value);
// console.log(sum(4, 6, 8, 10).value);

//! M1
// function sumNew(...args) {
//   let sumValues = 0;
//   sumValues += args.reduce((acc, item) => acc + item, 0);

//   const func = function (...argsNew) {
//     return sumNew(...args, ...argsNew);
//   };

//   func.value = sumValues;
//   return func;
// }

// console.log(sumNew(4)(6, 8)(10).value);
// console.log(sumNew(4)(6, 8)(10).value);

//! M2
// function createCurry() {
//   let sumValues = 0;
//   const sum = function (...args) {
//     sumValues += args.reduce((acc, item) => acc + item, 0);
//     sum.value = sumValues;
//     return sum;
//   };

//   return sum;
// }

// const sum = createCurry();
// console.log(sum(4)(6, 8)(10).value);
// console.log(sum(4)(6, 8)(10).value);
