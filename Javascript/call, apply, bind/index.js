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

// ! CAB with arrow functions

// ! U cant set the this context in arrow function using CAB

// const person = {
//   name: "Alice",
// };

// const greet = () => {
//   return `Hello, ${this.name}`;
// };

// console.log(greet.call(person)); // undefind

// const person = {
//   name: "Bob",
// };

// const introduce = (city, country) => {
//   return `${this.name} from ${city}, ${country}`;
// };

// console.log(introduce.apply(person, ["Paris", "France"])); // undefined from Paris , france

// const person = {
//   name: "Charlie",
// };

// const sayName = () => {
//   return `My name is ${this.name}`;
// };

// const boundSayName = sayName.bind(person);
// console.log(boundSayName()); // undefined

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

// // In non-strict mode, `this` defaults to the global object (window in browsers)
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

///Example with Arguments
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

// Challenge:
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

//Problem 2: Function Currying with Bind
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

// Problem 3: Implement Call, Apply, and Bind Polyfills
// Polyfill (implement from scratch) the call, apply, and bind methods without using the built-in versions. This will test your deep understanding of how these methods work under the hood.

// Challenge:
// Implement myCall, myApply, and myBind methods.

// Function.prototype.myCall = function (context, ...args) {
//   context = context || globalThis;
//   const fnSymbol = Symbol();
//   context[fnSymbol] = this;
//   const result = context[fnSymbol](...args);
//   delete context[fnSymbol];
//   return result;
// };

// // Test case for myCall
// function greet(greeting, punctuation) {
//   return `${greeting}, ${this.name}${punctuation}`;
// }

// const person2 = { name: "Alice" };
// console.log(greet.myCall(person, "Hello", "!")); // "Hello, Alice!"

// Function.prototype.myApply = function (context, args) {
//   context = context || globalThis;
//   const fnSymbol = Symbol();
//   context[fnSymbol] = this;
//   const result = context[fnSymbol](...args);
//   delete context[fnSymbol];
//   return result;
// };

// // Test case for myApply
// console.log(greet.myApply(person, ["Hi", "."])); // "Hi, Alice."

// Function.prototype.myBind = function(context, ...args) {
//   const self = this;
//   return function(...newArgs) {
//     return self.apply(context, [...args, ...newArgs]);
//   };
// };

// // Test case for myBind
// const boundGreet2 = greet.myBind(person, 'Hey');
// console.log(boundGreet('!!!')); // "Hey, Alice!!!"

// Problem 4: Advanced Method Chaining
// Implement a calculator object that supports method chaining and uses call, apply, or bind to maintain the correct this context. The calculator should support basic arithmetic operations (add, subtract, multiply, divide) and store the result in the value property.

// Challenge:
// Implement the calculator with method chaining support.

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

////////////////////////////////// !Op based ///////////////////////////

// const obj1 = {
//   num: 2,
// };

// const add = function (a, b, c) {
//   return this.num + a + b + c;
// };

// console.log(add.call(obj1, 1, 2, 3)); // 8
// console.log(add.call(null, 1, 2, 3)); // NaN

// const obj2 = {
//   num: 5,
// };

// const multiply = function (a, b) {
//   return this.num * a * b;
// };

// console.log(multiply.apply(obj2, [2, 3])); // 30
// console.log(multiply.apply(undefined, [2, 3])); // NaN

// const person4 = {
//   name: "Charlie",
//   say(greeting, punctuation) {
//     return greeting + ", " + this.name + punctuation;
//   },
// };

// const boundSay = person.say.bind(person4, "Hello");

// console.log(boundSay("!")); //'Hello, Charlie!'
// console.log(boundSay("?")); //'Hello, Charlie?'

// const obj1 = {
//   value: 10,
//   increment: function() {
//     return this.value + 1;
//   }
// };

// const obj2 = {
//   value: 20
// };

// const increment = obj1.increment.bind(obj2);
// console.log(increment()); // Output 1

// const obj3 = {
//   value: 30,
//   increment: obj1.increment
// };

// console.log(obj3.increment.call(obj2)); // Output 2

// const obj4 = {
//   value: 40,
//   increment: increment
// };

// console.log(obj4.increment.apply(obj3)); // Output 3

// Q. Method Borrowing and Context
// const objA = {
//   x: 10,
//   getX: function () {
//     return this.x;
//   },
// };

// const objB = {
//   x: 20,
// };

// const objC = {
//   x: 30,
// };

// const borrowedGetX = objA.getX.bind(objB);

// console.log(borrowedGetX()); // 20

// console.log(borrowedGetX.call(objC)); // 20 => be carefull. It will still use the binded conetxt

// const anotherBorrowedGetX = objA.getX.apply(objC);

// console.log(anotherBorrowedGetX); // 30

////////////////////////////////

// Q.Combination of call, apply, and bind

// const obj1 = {
//   value: 10,
//   increment: function () {
//     return this.value + 1;
//   },
// };

// const obj2 = {
//   value: 20,
// };

// const increment = obj1.increment.bind(obj2);
// console.log(increment()); // 21

// const obj3 = {
//   value: 30,
//   increment: obj1.increment,
// };

// console.log(obj3.increment.call(obj2)); // 21

// const obj4 = {
//   value: 40,
//   increment: increment,
// };

// console.log(obj4.increment.apply(obj3)); //!21 , once function is created using bind, then context wont be changed

///////////////////////////

// Q. Dynamic Context Switching

// function sayHello() {
//   return `Hello, ${this.name}`;
// }

// const personA = { name: "Alice" };
// const personB = { name: "Bob" };

// const sayHelloToAlice = sayHello.bind(personA);
// console.log(sayHelloToAlice()); //  Hello Alice

// const sayHelloToBob = sayHelloToAlice.call(personB);
// console.log(sayHelloToBob); // Hello Alice , once binded with the context,then context wont be changed

// const sayHelloToCharlie = sayHelloToAlice.bind({ name: "Charlie" });
// console.log(sayHelloToCharlie()); // !Hello Alice, once binded with the context,then context wont be changed

//https://chatgpt.com/c/724e83d7-3e33-42f2-8411-d6b1e966cad8
