
// ! Challenge:
// Create a function that borrows a method from one object and applies it to another object with a different context and arguments.

const boy = {
  name: "shivam",
  age: 24,
  printName(parentName) {
    console.log(this.name, parentName);
  },
};

let boy1 = {
  name: "rahul raj",
};

boy.printName.call(boy1, "amit raj");

const borrow = function () {
  // Implement borrowing logic here
  return function (...arg) {
    let newFunc = boy.printName.bind(boy1, ...arg);
    newFunc();
  };
};

const borrowedPrintName = borrow();
borrowedPrintName("aman raj");

// ! Problem 2: Function Currying with Bind
// Create a curried version of a function using bind. The original function takes three arguments, and you need to partially apply it using bind to create a new function that takes the remaining arguments.

// Challenge:
// Implement the curried function using bind.

function sum(a, b, c) {
  return a + b + c;
}

// Use `bind` to create a curried function
const curriedSum = function (a, b) {
  return sum.bind(null, a, b);
};

const add5 = curriedSum(2, 3); // This should return a new function
console.log(add5(10)); // Output: 15

const calculator = {
  value: 0,
  add(num) {
    this.value += num;
    return this;
  },
  subtract(num) {
    this.value -= num;
    return this;
  },
  multiply(num) {
    this.value *= num;
    return this;
  },
  divide(num) {
    if (num !== 0) {
      this.value /= num;
    }
    return this;
  },
  reset() {
    this.value = 0;
    return this;
  },
};

console.log(
  calculator.add(5).subtract(2).multiply(3).divide(2).reset().add(10).value
); // Output: 10
