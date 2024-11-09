// Q. how to make a few properties immutable?

// Using Object.defineProperty()
// The Object.defineProperty() method allows you to define or modify a property on an object and configure its attributes. Here's a quick example of how to use it with the name object you provided:

// let name = {
//   firstname: 'srikanth',
//   lastname: 'tekumudi'
// };

// // Define property descriptor for 'firstname'
// Object.defineProperty(name, 'firstname', {
//   writable: false,  // This makes the property read-only
//   configurable: false  // This makes the property non-configurable
// });

// console.log(name.firstname); // Output: 'srikanth'

// // Attempt to modify the property
// name.firstname = 'newname';
// console.log(name.firstname); // Output: 'srikanth' (unchanged)

// // Attempt to delete the property
// delete name.firstname;
// console.log(name.firstname); // Output: 'srikanth' (property cannot be deleted)

//! Q. how to deeply copy an object without built-in functions?

let obj1 = {
  a: "abcd",
  b: {
    c: 12,
    d: 23,
  },

  arr: [
    1,
    2,
    [4, 5],
    {
      asas: { a: 12 },
    },
  ],
};

//

const deepCopy = function (obj) {
  if (typeof obj != "object" && typeof null !== null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  }

  let newObj = {};
  for (let key of Object.keys(obj)) {
    console.log(key);
    if (typeof obj[key] === "object") {
      newObj[key] = deepCopy(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

console.log(deepCopy(obj1));

//m2

const deepCopyFunction = (inObject) => {
  let outObject, value, key;

  if (typeof inObject !== "object" || inObject === null) {
    return inObject;
  }

  outObject = Array.isArray(inObject) ? [] : {};

  for (key in inObject) {
    value = inObject[key];
    outObject[key] = deepCopyFunction(value);
  }

  return outObject;
};

//! Q. how to deep freeze object

// what is deep freeze

// const obj = {
//   name: "Alice",
//   age: 25
// };

// Object.freeze(obj);

// obj.name = "Bob"; // This will not change the name property
// obj.newProperty = "New"; // This will not add a new property
// delete obj.age; // This will not delete the age property

// console.log(obj); // Output: { name: "Alice", age: 25 }

//!

// Characteristics of a Frozen Object
// Properties Cannot Be Modified: Once frozen, the values of existing properties cannot be changed.
// Properties Cannot Be Added: You cannot add new properties to a frozen object.
// Properties Cannot Be Deleted: You cannot remove properties from a frozen object.
// Prototype Chain Not Affected: Object.freeze() only affects the object itself and not its prototype chain. Properties on the prototype chain can still be modified if the prototype is not also frozen.
// Shallow Freeze: Object.freeze() is a shallow freeze. It only applies to the immediate properties of the object. If the properties themselves are objects, they are not recursively frozen.

let obj2 = {
  a: "abcd",
  b: {
    c: 12,
    d: 23,
  },

  arr: [
    1,
    2,
    [4, 5],
    {
      asas: { a: 12 },
    },
  ],
};

const deepFreeze = function (obj) {
  // iterate on all children of obj and if anyone is itslef object call recursively and when all children are done then in last freeze parent
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      deepFreeze(obj[key]);
    }
  }
  Object.freeze(obj);
};

deepFreeze(obj2);

obj2.arr[3].asas.a = "Ankur";

console.log(obj1);

// Q. What is the difference between html collection and nodelist?

// refer in images

// Q. What is the difference between innerhtml and innertext?

// refer images

// Q. What is the difference between window and document?
//  window: javascript window is global objects which holds function, history,
// function, screen, location

// document: document is property of window which hold dom object

// Q. Difference between object. Create and {}

// Q. why const values can be mutated if value is array or object

// ans - The reason for this behavior is that const only prevents reassignment of the variable itself, not the contents of the variable. When an object or an array is assigned to a const variable, the variable holds a reference to the object or array in memory. While the reference cannot be changed, the contents of the object or array can be modified because they are stored elsewhere in memory

//! Q. is javascript compiled or interpreted language
//  javascript is interpreted language

//! Q. object. Freeze vs object. Seal?

//! freeze means sb bannd, na aana na jana na change hona
//! seal mtlb naya ni aayega na koi jaaega pr changes chalega

// Object.freeze() and Object.seal() are both methods used to control the mutability of objects in JavaScript, but they provide different levels of immutability

// Object.freeze() is used to make an object immutable.Once an object is frozen, you cannot modify its properties, add new properties, or delete existing properties.It performs a shallow freeze, meaning that only the immediate properties are frozen, not the nested objects

// const person = {
//   name: 'Alice',
//   age: 30
// };

// Object.freeze(person);

// // Attempting to modify properties
// person.name = 'Bob'; // No effect
// person.age = 31;     // No effect

// // Attempting to add a new property
// person.gender = 'female'; // No effect

// // Attempting to delete a property
// delete person.age; // No effect

// console.log(person); // Output: { name: 'Alice', age: 30 }

// Object.seal() prevents new properties from being added to an object and marks all existing properties as non - configurable.This means you cannot delete existing properties, but you can still modify the values of existing properties.It also performs a shallow seal.

// const car = {
//   brand: 'Toyota',
//   model: 'Corolla'
// };

// Object.seal(car);

// // Attempting to modify properties
// car.brand = 'Honda'; // Allowed
// car.model = 'Civic'; // Allowed

// // Attempting to add a new property
// car.year = 2020; // No effect

// // Attempting to delete a property
// delete car.model; // No effect

// console.log(car); // Output: { brand: 'Honda', model: 'Civic' }

//! What is method chaining

//Calling one method after another on same object, in one continuous one line of code.

//Ex: add(3). Mul(4). Divide(5)

// class arthemetic{
// constructor(){
// this. Value=0
// }
// add(n){
// this. Value=this. Value+n
// return this;
// }
// mul(n){
// this. Value=this. Value*n
// return this;
// }
// divide(n){
// this. Value=this. Value. N
// return this
// }
// }
// let a=new arthemetic()
// a. Add(4). Mul(4). Divide(4)

// why use minified code in production

//it is used to reduce load times and bandwidth usage on websites it removes spaces, comments and minified code is 48% smaller

//! undefined vs null
// whenever a variable is not assigned to any value.. It is assign to undefined by javascript engine
//   developers explicitly assign variables to null to avoid this.
//   null=>it is intentional absence of value
//   undefined=>it means value not exist in compiler

//? Q. what are feature in es6/es 2015

// New JavaScript features:

// - Arrow Functions: shorthand syntax for writing functions, with implicit binding and concise syntax.

// - Classes: new syntax for defining classes with support for inheritance and     advanced features.

// - Template Literals: new way to create strings with variable interpolation and  multi-line strings.

// - let and const: new variable declaration keywords with more precise scoping
// rules than var.

// - Map and Set Data Structures: new built-in data structures for storing data collections with advanced features.

// - Destructuring: new syntax for extracting values from arrays and objects into separate variables.

// - Spread and Rest Operators: new operators that allow spreading an array into separate arguments or combining multiple arguments into an array.

// - Promises: new way to handle asynchronous operations with more readable and maintainable code.

// - Generators: new type of function that allows pausing and resuming execution, useful for asynchronous and iterative code.

// - Modules: new syntax for defining and importing reusable code, with support for exporting and importing specific functions and objects.

// - Default Parameter Values: new syntax for specifying default values for
// function parameters.

// - Object Literal Enhancements: new syntax for defining objects with concise property values and computed property names.

// - Symbols: new primitive type for creating unique identifiers that can be used as object keys.

//? Q. What is polyfill and transpiler (babel)?

// A polyfill is a piece of code that enables modern functionality in older browsers that do not support it.For example, if a new JavaScript function is introduced that is not supported by an older browser, a polyfill can be used to provide an equivalent function using the available features in the older browser.

// A transpiler, such as Babel, is a piece of software that translates source code to another source code. It parses modern code and rewrites it in an older syntax that can be understood by older browsers. This allows developers to write modern code without worrying about browser compatibility issues. For example, if a developer writes code using the latest syntax and features of JavaScript, a transpiler can be used to convert that code into an older syntax that can be understood by older browsers.

// For instance, consider the following code snippet:

// const height = height ?? 100;
// This code uses the nullish coalescing operator, which is a new feature introduced in ECMAScript 2020. If a user uses an outdated browser that does not support this feature, the code may not work as expected. However, by using a transpiler like Babel, the code can be converted into an older syntax that can be understood by older browsers:

// const height = (height !== undefined && height !== null) ? height : 100;
// Polyfills are typically used for new language features that are not just new syntax or operators but also include new built-in functions or methods. For example, if a new built-in function is introduced, such as the Math.trunc function that truncates the decimal part of a number, a polyfill can be used to provide an equivalent function for older browsers that do not support it:

// if (!Math.trunc) {
//   Math.trunc = function(n) {
//     return n < 0 ? Math.ceil(n) : Math.floor(n);
//   };
// }

//? what are higherorder function, callback, and fucntion as first class citizen

// -functions are first class objects in javascript. Because they can be send as parameter and function can be returned from function
//   functions can be assign to variable
//   -a function which is send to other function as parameter is called callback
//   -a function which accepts other function as parameter is called higher order function

//! callback hell with example

//?explain async, await, when these promises already exist.

// Asynchronous programming in JavaScript is typically done using Promises, which provide a way to handle the results of an asynchronous operation once it completes. However, the use of Promises can sometimes result in complex, difficult-to-read code, particularly when you have to chain multiple Promises together.

// This is where async/await comes in. Async/await is a syntax for handling asynchronous operations that makes the code look more like synchronous code, which can be easier to read and understand.

// In JavaScript, you can use the async keyword to define a function that returns a Promise. Within an async function, you can use the await keyword to pause the execution of the function until a Promise is resolved. Here's an example:

// async function fetchData() {
//   const response = await fetch('<https://example.com/data>');
//   const data = await response.json();
//   return data;
// }

// In this example, the fetchData function is declared as async. Within the function, the await keyword is used to pause the execution until the fetch Promise resolves. Once the response is received, the await keyword is used again to pause the execution until the JSON is parsed. The parsed JSON is then returned as the result of the function.

// Async/await is particularly useful when you need to perform multiple asynchronous operations in a specific order. With Promises, this often requires nested callbacks or chained then calls, which can be difficult to read and reason about. Async/await simplifies this by allowing you to write asynchronous code in a more synchronous style.

// ! what is new keyword in JS

// In JavaScript, the new keyword is used to create a new instance of an object created by a constructor function or a class. When used with a constructor function, it performs the following steps:

// Creates a new empty object.
// Sets this keyword to point to the newly created object.
// Calls the constructor function with the provided arguments.
//  Sets the Instance of Object’s __proto__ to Its Constructor Function's Prototype
// Returns the newly created object, unless the constructor function explicitly returns a non-primitive value (in which case, that value is returned instead).

// explain the last point-

// function Person(name) {
//   this.name = name;
//   return { name: 'Bob' }; // Explicitly returning a different object
// }

// const person1 = new Person('Alice');
// console.log(person1); // Output: { name: 'Bob' }

// Here, the Person constructor explicitly returns a new object { name: 'Bob' }. As a result, person1 is assigned this new object instead of the one created by new Person.

//! Q. what is prototypal inheritance
// prototypal inheritance refers to ability to access object properties from another object
// means sharing of properties, methods across objects can be done by prototypal inheritance

// Prototypal inheritance is a type of object-oriented programming inheritance in which an object inherits properties and methods from another object, known as its prototype. In this model, objects are created by cloning or copying an existing object, which serves as the prototype.

// In prototypal inheritance, each object in a program has a special internal property called [[Prototype]] (also sometimes called __proto__ in JavaScript). This property holds a reference to another object, known as its prototype.

// prototype is a property of a constructor function in JavaScript, while __proto__ is a property of every object.

// When you create a constructor function in JavaScript, it automatically gets a prototype property, which is an object. This object is used as the prototype for all objects created using the constructor function as a constructor with the new keyword.

// Prototypal inheritance is used in many programming languages, including JavaScript, which uses prototypal inheritance as its primary mechanism for object-oriented programming.

//? Q different ways to create object

// In JavaScript, there are several ways to create objects. Here are four common ways:

//! Object literals: This is the simplest and most common way to create an object in JavaScript. You can create an object by defining its properties and values within curly braces.
// Example:

// javascript
// Copy code
// let person = {
//   name: "srikath",
//   age: 20
// };
//! Constructor objects: You can create objects using constructor functions. A constructor function is a special type of function that is used to create an object. Inside the constructor function, you can define the properties and methods of the object using the "this" keyword.
// Example:

// javascript
// Copy code
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let p = new Person("srikanth", 20);
// console.log(p instanceof Person); /

//! Class-based objects: In ES6, you can create objects using classes. Classes are a syntactic sugar for constructor functions. You can define the properties and methods of the object using the "constructor" and "method" keywords.
// Example:

// javascript
// Copy code
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(this.name, this.age);
//   }
// }
// let p = new Person("srikanth", 10);
//! Object.create() method: You can create an object by using the Object.create() method. This method creates a new object and sets its prototype to the object you pass as the first argument. You can also add properties and methods to the new object by passing an object as the second argument.
// Example:

// javascript
// Copy code
// let person = {
//   name: "srikath",
//   age: 20
// };
// let specialPerson = Object.create(person, {sex: 'male', lname: "tekumudi"});

//!Object.assign -> let obj4 = Object.assign({}, obj1); // assigns obj1 into {}
