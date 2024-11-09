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
