/*-------------------BASICS-------------------*/

// <!-- Call is a function that helps you change the context of the invoking function.
// In layperson's terms, it helps you replace the value of this inside a function
// with whatever value you want. Apply is very similar to the call function. The
// only difference is that in apply you can pass an array as an argument list. Bind
// is a function that helps you create another function that you can execute later
// with the new context of this that is provided. -->

// Key Differences in CAB
// Immediate Invocation vs. Function Creation:

// call and apply invoke the function immediately.
// bind returns a new function that can be invoked later.
// Arguments Handling:

// call passes arguments individually.
// apply passes arguments as an array.
// bind can pre-set arguments, which are then prepended to arguments provided when the bound function is called.

function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Alice" };

greet.call(person, "Hello", "!"); // Hello, Alice!
greet.apply(person, ["Hello", "!"]); // Hello, Alice!
const boundGreet = greet.bind(person, "Hello");
boundGreet("!"); // Hello, Alice!

// ! CAB with arrow functions - v imp
// ! U cant set the this context in arrow function using CAB - v imp

const person2 = {
  fname: "Alice",
};

const introduce = (city, country) => {
  console.log(this); // window
  return `${this.fname} from ${city}, ${country}`;
};

console.log(introduce.call(person2)); 
console.log(introduce.apply(person2, ["Paris", "France"])); 
const boundSayName = introduce.bind(person);
console.log(boundSayName()); 

////////////////////!  What if we dont pass any value for the this parameter///////////////////////

// If you don't pass any value for the this parameter when using call, apply, or bind, the behavior depends on whether you're in strict mode or non-strict mode.

// ?  Non-Strict Mode
// In non-strict mode (the default mode in JavaScript), if null or undefined is passed as the this parameter, or if you don't pass a this parameter at all, this will default to the global object. In browsers, the global object is window.

// ?  Strict Mode
// In strict mode, if null or undefined is passed as the this parameter, or if you don't pass a this parameter at all, 'this will be undefined'. This prevents accidental use of the global object and can help catch errors.

//Non-Strict Mode

// function showThis() {
//   console.log(this);
// }

// ? In non-strict mode, `this` defaults to the global object (window in browsers)
// showThis.call(); // window (or global object in Node.js)
// showThis.apply(); // window (or global object in Node.js)

// const boundShowThis = showThis.bind();
// boundShowThis(); // window (or global object in Node.js)

// Strict Mode

// ("use strict");

// function showThis() {
//   console.log(this);
// }

// // In strict mode, `this` will be `undefined`
// showThis.call(); // undefined
// showThis.apply(); // undefined

// const boundShowThis = showThis.bind();
// boundShowThis(); // undefined

//!Example with Arguments
// Even if you don't pass a this value, you can still pass arguments:

// function greet(greeting) {
//   console.log(greeting + ', ' + this.name);
// }

// const person = { name: 'Alice' };

// // `this` defaults to the global object in non-strict mode
// greet.call(null, 'Hello'); // "Hello, undefined" or may cause an error if accessing `this.name`

// // In strict mode, `this` is `undefined`, causing an error when accessing `this.name`

///////////

// Best Practices
// Always Specify this: To avoid unexpected behaviors, it's a good practice to always specify a this value, even if it's null or a specific object.
// Use Strict Mode: Using strict mode can help catch errors by ensuring that this is not defaulted to the global object. To enable strict mode, add 'use strict'; at the beginning of your script or function.

///// questions /

////////////////////////////////// ! Op based ///////////////////////////
//? Question
// undefined + 1 or undefined*8= NaN
const obj1 = {
  num: 2,
};

const add = function (a, b, c) {
  return this.num + a + b + c;
};

console.log(add.call(obj1, 1, 2, 3)); // 8
console.log(add.call(null, 1, 2, 3)); // NaN

const obj2 = {
  num: 5,
};

const multiply = function (a, b) {
  return this.num * a * b;
};

console.log(multiply.apply(obj2, [2, 3])); // 30
console.log(multiply.apply(undefined, [2, 3])); // NaN

const person11 = {
  name: "Charlie",
  say(greeting, punctuation) {
    return greeting + ", " + this.name + punctuation;
  },
};

const boundSay = person11.say.bind(person4, "Hello");

console.log(boundSay("!")); //'Hello, Charlie!'
console.log(boundSay("?")); //'Hello, Charlie?'
