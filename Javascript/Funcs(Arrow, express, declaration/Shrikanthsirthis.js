// function foo4() {
//   let animal = "cat";
//   console.log(this); // window
//   this.printAnimalName();
// }

// function printAnimalName() {
//   console.log(this); // windpw
//   console.log(this.name);
// }

// foo4(); // undefnied

// DEFAULT BINDING

// var foo = function () {
//   console.log(this);
// };

// foo(); // window

// var foo1 = function () {
//   console.log(this.animalName);
// };

// var animalName = "cat";
// foo1(); // cat

// IMPLICIT BINDING

// var person = {
//   name: "John",
//   age: 20,
//   shrikanth: "Shrikanth",
//   printName: function (param) {
//     console.log(this);
//     console.log("Hi " + param + "," + "my name is " + this.shrikanth);
//   },
// };

// person.printName("Shrikanth");

// var callerFn = person.printName;

// callerFn("Shrikanth"); // ! window (bcoz u pulled that fn out)

// person.printName("Shrikanth");

/////
// var animals = {
//   animalname: "cat",
//   printAnimalName: function () {
//     console.log(this);
//     console.log(this.animalname);
//   },
// };

// animals.printAnimalName();
// {
//   let printAnimalName = animals.printAnimalName;
//   console.log("this", this); // windpw
//   printAnimalName(); // windpw , undefined
// }
//////////////
// const foo1 = function () {
//   console.log(this);
// };

// function foo2() {
//   foo1();
// }

// {
//   let k = function foo() {
//     foo2();
//   };
//   k(); // window
// }
///////////
// printAnimalName();

// EXPLICIT BINDING

// function foo5() {
//   console.log(this.name);
//   this.fn();
// }

// var obj5 = {
//   name: "Shrikanth",
//   fn: function () {
//     console.log(this, "Hello there");
//   },
// };

// var callFn = foo5.bind(obj5);

// callFn();

// foo5.apply(obj5, []);

// NEW KEYWORD

// function foo() {
//   this.name = "Shrikanth";
//   this.greetMe = function () {
//     console.log("Hello " + this.name);
//   };
// }

// class foo9 {
//   constructor() {
//     this.name = "Shrikanth";
//   }

//   greetMe() {
//     console.log("Hello " + this.name);
//   }
// }

// var result1 = new foo9();

// result1.greetMe();

// var name = "karthik";

// var result = new foo();

// result.greetMe();

// ARROW FUNCTIONS

const foo = () => {
  console.log(this);
};

//new foo(); //21

const obj = {
  name: "Shrikanth",
  foo: () => {
    console.log(this);
  },
};

obj.foo();

// u cant change this in the arrow function cant be explicaitly changed using CAB

foo.call({ name: "Shrikanth" });
foo.apply({ name: "Shrikanth" });
foo.bind({ name: "Shrikanth" })();

foo();
