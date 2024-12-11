//What is Composition? create a pipe()

//Composition

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

// Compose functions to create a new function that first squares and then doubles the result
const composedFunction = (x) => double(square(x));

// Using the composed function
console.log(composedFunction(3)); // Output: 18 (because (3^2) * 2 = 18)

// pipe is a way to achieve composition

// Example functions
function add(x) {
  return x + 1;
}

function multiply(x) {
  return x * 2;
}

function subtract(x) {
  return x - 3;
}

const pipe = function (...funcs) {
  //  i used prevResult bcoz we needed that rightmost is calculated first
  return (value) =>
    funcs.reduceRight((prevResult, func) => func.call(this, prevResult), value);
};

// Create a piped function
const pipedFunction = pipe(add, multiply, subtract);
