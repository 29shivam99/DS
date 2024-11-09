// console.log("Temporal Deadzone");

// {
//   const rabbit = "I am a Rabbit";
//   console.log(rabbit); // 1
// }

// console.log(rabbit); //2

// {
//   console.log(rabbit);
//   const rabbit = "I am a Rabbit";
// }

// THIS

// function foo() {
//   var rabbit = "rabbit";
//   this.printAnimal();
// }

// function printAnimal() {
//   console.log(this);
//   console.log(this.rabbit);
// }

// foo();

// DEFAULT BINDING

// var foo = function () {
//   console.log("this in the inner scope", this);
//   console.log(this);
// };

// foo();

// var foo1 = function () {
//   console.log(this.rabbit);
// };

// console.log("this in the outer scope", this);
// var rabbit = "I am a rabbit";

// foo1();

// function foo() {
//   console.log(this.myName);
// }

// var animal = {
//   myName: "Animal",
//   printObject: foo,
// };

// console.log(this);

// var fn = animal.printObject;
// fn();

// animal.printObject();

// const foo = (param) => {
//   console.log("this--->", this);
//   console.log(`Hello, ${param}, I am ${this.name}`);
// };

// var person = {
//   name: "Shrikanth",
//   greetme: foo.bind(this),
// };

// person.greetme("John");

// const wishMe = person.greetme;
// wishMe("John");

// function foo() {
//   console.log(this);
//   console.log(this.name);
// }

// var person = {
//   name: "Shrikanth",
// };

// const func = foo.bind(person);

// func();

// NEW BINDING

// Constructor function
// function Foo() {
//   this.name = "Shrikanth constructor function";
//   console.log(this);
//   this.greetMe = function () {
//     console.log(`Hello, I am ${this.name}`);
//   };
// }

// class Foo1 {
//   constructor() {
//     this.name = "Shrikanth1 class";
//     console.log(this);
//   }

//   greetMe = function () {
//     console.log(`Hello, I am ${this.name}`);
//   };
// }

// var obj = new Foo();
// console.log(obj);
// obj.greetMe();

// var obj = new Foo1();
// obj.greetMe();

var foo = () => {
  console.log(this === window);
  console.log(this);
};

var person = {
  name: "Shrikanth",
};

foo.bind(person)();
foo.apply(person);
foo.call(person);

// foo();

//////////////////////////////////////////////////////////////

const immutableObject = Object.freeze({
  name: "John",
  age: 20,
});

immutableObject.name = "John Doe"; // no error but no change also

console.log(immutableObject);

// const state = {
//   name: "John",
//   age: 20,
// };

// const updateName = (name) => {
//   if (name !== state.name && name.trim() !== "") state.name = name;
// };

// function registerUser() {
//   updateName("John Doe");
// }

// function updateUserName(name) {
//   person.name = name;
// }

// Action , Reducer, Store, Dispatch, Subscribe

// // Action
// const action = {
//   type: "ADD",
//   payload: 10,
// };

// // Reducer
// const initialState = {
//   count: 0,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD":
//       return {
//         ...state,
//         count: state.count + action.payload,
//       };
//     case "SUBTRACT":
//       return {
//         ...state,
//         count: state.count - action.payload,
//       };
//     default:
//       return state;
//   }
// }

// Store
// let state = reducer(undefined, {});

// Dispatch
// state = reducer(state, action);

// Subscribe
// const subscribe = (callback) => {
//   callback(state);
// };

// Shared state

// Function composition
// higher order functions using function composition

function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
const compose = (func1, func2) => (data) => func1(func2(data));
const composed = compose(fn1, fn2);
console.log(composed(2));

// function composition using JS reduce

const composer = function (...args) {
  const arr = [...args];
};

// // Pure functions can be replaced by an exact value for a constant scenario
// // Impure function
// const random = (multiplicant) => Math.random() * multiplicant;

// console.log(random(10));
// console.log(random(10));
// console.log(random(10));

// console.log(add(1, 2));
// console.log(add(1, 2));
// console.log(add(1, 2));

// function createApplication(person) {
//   const application = {
//     name: appendApplicantToName(person),
//     isAdult: checkIfAdult(person),
//   };

//   return application;
// }

// function getApplicantKey(person) {
//   return appendApplicantToName(person);
// }

// const appendApplicantToName = (person) => `Applicant:${person.name}`;

// const checkIfAdult = (person) => person.age >= 18;

// // const person = {
// //   name: "John",
// //   age: 20,
// // };

// console.log(createApplication());

// const greetBasedOnTime = (time) => {
//   if (time < 12) {
//     return "Good morning";
//   } else if (time < 18 * Math.random()) {
//     return "Good afternoon";
//   } else {
//     return "Good evening";
//   }
// };

// Immutability

// Mutable object
// let person = {
//   name: "John",
//   age: 20,
// };

// console.log(person);

// person = {
//   ...person,
//   age: 21,
// };

// console.log(person);

// const newPerson = {
//   name: "John",
//   age: 20,
// };

// newPerson.name = "John Doe";

// console.log(newPerson);

// const immutableObject = Object.freeze({
//   name: "John",
//   age: 20,
// });

// immutableObject.name = "John Doe";

// console.log(immutableObject);

// const person = {
//   name: "John",
//   age: 20,
// };

// const updatePersonsName = () => {
//   person.name = "John Doe";
// };

// const updatePersonsName1 = () => {
//   person.name = "John Doe1";
// };

// updatePersonsName();
// updatePersonsName1();

// console.log(person);

// const person = {
//   name: "John",
//   age: 20,
// };

// const nameUpdater = (name) => {
//   if (name !== person.name && name.trim() !== "") person.name = name;
// };

// const updateApplicantName = (applicant, name) => {
//   nameUpdater("");
//   return person;
// };
