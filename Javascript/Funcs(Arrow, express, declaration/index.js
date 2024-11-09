
// for (let i = 1; i < 6; i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 1000*i);
// }
// for (let i = 1; i < 6; i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 5000);
// }

// for (var i = 1; i < 6; i++){
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

for (var i = 1; i <= 4; i++) {
  const timer = function () {
    var j = i;
    setTimeout(() => {
      console.log(j);
    }, 1000*j);
  }
  timer();
}

// Macrotask/callback Queue
// console.log(1); 1000
// console.log(2); 2000
// console.log(3); 3000
// console.log(4); 4000
// console.log(5); 5000
// Functions

//1. arrow fn - this functions
// !1.does not have its own this context, they inherit this from the enclosing scope
//! 2.Arrow functions do not have their own arg
//! 3.Arrow functions cannot be used as constructors and do not have the prototype property. They are also not ideal for methods that need their own this context, such as object methods or class methods:uments object.If you need to access arguments in an arrow function, you must use rest parameters:

function Counter() {
  this.count = 0;
  setInterval(() => {
    // console.log(...args);
    this.count++; // `this` refers to the Counter instance
    console.log(this.count);
  }, 1000);
}

Counter.prototype.myfunc = function () {
  console.log("my func");
};

let counterObj = new Counter();
console.log(counterObj.count);
// Counter.myfunc();
counterObj.myfunc();

//Arrow functions do not have their own arguments object. If you need to access arguments in an arrow function, you must use rest parameters:
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

//////////////////////////////// ?    LETS TALK ABOUT THIS KEYWORD     ///////////////////

// the this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

// !   The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined.

//!When a regular function is invoked as a method of an object(obj.method()), this points to that object.

//!When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object(in non - strict mode) or undefined(in strict mode).

//!The Function.prototype.bind() method can create a function whose this binding doesn't change, and methods Function.prototype.apply() and Function.prototype.call() can also set the this value for a particular call.

//! Also remember that classes and functions create a context but objects dont create any context.


//-----------------------ARROW FUNCTION AND THIS KEYWORD----------------------
const person = {
  fname: "Alice",
};

const introduce = (city, country) => {
  return `${this.fname} from ${city}, ${country}`;
};

console.log(introduce.call(person)); 
console.log(introduce.apply(person, ["Paris", "France"])); 
const boundSayName = introduce.bind(person);
console.log(boundSayName());

// !call, bind apply can not change the this keword's reference in the arrow fn, in arrow fn this will always keep referecing to its parent scope

//! arrow function inside of Object
/* 
const personData = {
  fname: "Diana",
  regularGreet: function () {
    return `Hello, ${this.fname}`;
  },
  arrowGreet: () => {
    return `Hello, ${this.fname}`; // this will be window
  },
};

console.log(personData.regularGreet.call({ fname: "Emma" })); // Hello Emma
console.log(personData.arrowGreet.call({ fname: "Emma" })); // Hello undefined
console.log(personData.arrowGreet()); // Hello undefind
console.log(personData.regularGreet()); // Hello Diana */

// !!!!!!!!!!!!!!!!!!!!! vvvvvv important question - here above  the arrow fn should have this set to the parent scope this which is object not window? No, objects dont have their own context, so this will not have context of object!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ! arrow function inside of class
class MyClass {
  constructor(name) {
  // This will be added to the instance not the prototype.
    this.name = name;    
  }
  // This will be added to the instance not the prototype. (Bcoz added using = )
  greet = function () {
    console.log(this); // caller
      return `Hello, ${this.name}`;
  };
  // This will be added to the instance not the prototype. (Bcoz added using = )
  arrowGreet = () => {
      console.log(this); // fixed instance
      return `Hello, ${this.name}`;
  };
  // This will be added to the prototype.  (Bcoz not added using = )
  newGreet() {
    console.log(this); // class
    return `Hello ${this.name}`
  }
}
MyClass.prototype.arrowNewGreet = () => {
  console.log(this); // window
    return `Hello ${this.name}` 
}

// Breakdown of this behavior:
// this.name in the constructor:

// This sets the name property on each instance of MyClass. It’s not part of the prototype.
// greet method:

// Added to the instance because it uses the = syntax inside the class.
// console.log(this) will log the caller (the instance of MyClass if called as myInstance.greet()).
// arrowGreet method:

// Also added to the instance using arrow function syntax.
// console.log(this) logs the lexical context (the this value from where the arrow function was defined, which in this case is the instance of MyClass because it’s defined inside the constructor).
// Note: Arrow functions don’t have their own this, so they capture this from the surrounding scope.
// newGreet method:

// Added to the prototype, since it's defined using traditional method syntax.
// console.log(this) will log the class instance that calls this method, because traditional functions have their this determined by how they’re called.
// arrowNewGreet method:

// Added to the prototype, but defined as an arrow function.
// console.log(this) will log the lexical context, which in this case is the global object (window in browsers), or undefined in strict mode because arrow functions capture this from their definition scope.
// The value of this will not be the instance of MyClass, which is why you typically wouldn’t want to use arrow functions for methods on the prototype unless you're deliberately avoiding dynamic this binding.

console.log(MyClass.prototype);
console.log(MyClass.prototype.newGreet);
console.log(MyClass.prototype.greet);
var instance = new MyClass("Fiona");
const anotherInstance = new MyClass("Grace");
console.log(instance);
console.log(instance.greet(), instance.arrowGreet());  
console.log(instance.greet.call(anotherInstance));
console.log(instance.arrowGreet.call(anotherInstance)); 
console.log(anotherInstance.arrowGreet.call(instance)); 
console.log(instance.newGreet()) 
console.log(instance.newGreet.call(anotherInstance));
console.log(instance.arrowNewGreet()); 
console.log(instance.arrowNewGreet.call(anotherInstance)); 

//! this inside of a Constructor func

function Person(name) {
  this.name = name;
  this.func3 = () => {
    console.log(this); // person
  };

  this.func4 = function () {
    console.log(this); // person
  };

  function func5(){
    console.log(this);
  }
}

func = () => {
  console.log(this); //  this will be window
};

func2 = function () {
  console.log(this); // this will be the caller
};

Person.prototype.func = func;
Person.prototype.func2 = func2;

const person1 = new Person("Bob");
person1.func();  // window
person1.func2(); // person1
person1.func3(); // person1
person1.func4(); // person1
// person1.func5();

////////////////? Nutshell /////

// ! if there is a normal function (not in class, function, object)
// this inside such function is window in non sreict mode and undefined in strict

// ! this inside a normal function in
//   in class - referes to the instance of class
//   in constructor func - referes to object of func
//   in object - referes to the object itself

// ! 'this' will keep changing in normal func based on who called it

// ! this inside a arrow function in
//   in class - referes to the instance of class
//   in constructor func - referes to object of func
//   in object - does not referes to the object itself, referes to parent context

// ! always remember that in case of arrow func, the this inside it will be the parent context "at the time of the arrow fn was declared". Also remember, class, constructor fn, have their own context since they are fns, but an object wont have any context bcoz it is not a functin. Alos remmber that the value of this can not be changed for arrow func. 'This' will not chane in arow func

///////////////////////////// OP questions //////////////////////////////////

class Animal {
  constructor(name) {
    this.fname = name;
    this.sayName = function () {
      console.log(`Animal: ${this.fname}`);
    };
    this.sayArrowName = () => {
      console.log(`Arrow Animal: ${this.fname}`);
    };
  }

  static create(fname) {
    console.log(this);
    const instance = new this(fname);
    instance.sayName = function () {
      console.log(`Static Animal: ${this.fname}`);
    };
    instance.sayArrowName = () => {
      console.log(`Static Arrow Animal: ${this.fname}`);
    };
    return instance;
  }
}

const animal1 = new Animal("Lion");
const animal2 = Animal.create("Tiger");

animal1.sayName(); // Line A
animal1.sayArrowName(); // Line B
animal2.sayName(); // Line C
animal2.sayArrowName(); // Line D

// Mixing context
const sayName = animal1.sayName;
const sayArrowName = animal1.sayArrowName;
// below 2 very important
// sayName(); // Line E
sayArrowName(); // Line F

// Expected Output
// What will be the output of each line (Line A through Line F) when the above code is executed? Explain why each output is produced.

// Explanation
// Line A:

// animal1.sayName();
// Output: Animal: Lion
// Reason: sayName is a method created in the Animal instance. It has its own this context referring to animal1.
// Line B:

// animal1.sayArrowName();
// Output: Arrow Animal: Lion
// Reason: sayArrowName is an arrow function, so it captures this from the Animal constructor's lexical context, which is animal1.
// Line C:

// animal2.sayName();
// Output: Static Animal: Tiger
// Reason: sayName was redefined in the create method. For animal2, it now refers to Static Animal: Tiger.
// Line D:

// animal2.sayArrowName();
// Output: Static Arrow Animal: undefined
// Reason: sayArrowName is an arrow function defined in the create method, capturing this from the static context (class-level), not the instance-level.
// Line E:

// sayName();
// Output: Animal: undefined
// Reason: When sayName is called without an instance, this is not bound to animal1 anymore, so it refers to the global object (window in browsers) or undefined in strict mode.
// Line F:

// sayArrowName();
// Output: Arrow Animal: Lion
// Reason: sayArrowName retains its lexical this from when it was defined in animal1, so it still refers to animal1 even though it's invoked in a different context.

//////////////// ! Ques

function Counter() {
  this.count = 0;
  this.increment = function () {
    this.count++;
    console.log(`Count (method): ${this.count}`);
  };
  this.incrementArrow = () => {
    this.count++;
    console.log(`Count (arrow): ${this.count}`);
  };
}

const counter = new Counter();
counter.increment(); // Line A Count method 1
counter.incrementArrow(); // Line B Count arrow 2

const incrementFunc = counter.increment;
const incrementArrowFunc = counter.incrementArrow;

incrementFunc(); // Line C Count method undefined (window.count)
incrementArrowFunc(); // Line D Count arrow 3

////////////////////! ques  - vvvvvvvvvv important

function Vehicle(make) {
  this.make = make;
}

Vehicle.prototype.start = function () {
  console.log(this);
  console.log(`Starting vehicle: ${this.make}`);
};

Vehicle.prototype.startArrow = () => {
  console.log(this);
  console.log(`Starting vehicle (arrow): ${this.make}`);
};

const car = new Vehicle("Toyota");
car.start(); // Line A Starting vehicle Toyota
car.startArrow(); // Line B Starting vehicle (arrow) undefined (window.make) //! this will be window bcoz initally startArrow arrow function is defined based on that.

const startFunc = car.start;
const startArrowFunc = car.startArrow;

startFunc(); // Line C  Starting vehicle: undefined   (window.make)
startArrowFunc(); // Line D `Starting vehicle (arrow): undefined  (window.make)

//////////////////////! Ques - vvvvvvvvvvvvvvv important

class Person00 {
  constructor(name) {
    this.fname = name;
  }

  greet() {
    console.log(`Hello, ${this.fname}`);
  }

  greetArrow = () => {
    console.log(this);
    console.log(`Hello from arrow, ${this.fname}`);
  };
}
console.log(Person00.fname);
const person11 = new Person00("Alice");
const person2 = new Person00("Bob");

person11.greet(); // Line A hello Alice
person11.greetArrow(); // Line B hello from arrow unedfined

person2.greet = person11.greet;
person2.greetArrow = person11.greetArrow;

console.log(person2);
person2.greet(); //!vvvv important Line C person2.greetArrow is assigned the greetArrow method from person11. Since greetArrow is an arrow function, it will use this from when it was ORIGINALLY defined/created (in person11's context).

person2.greetArrow(); // Line D

const greetFunc = person11.greet;
const greetArrowFunc = person11.greetArrow;

// greetFunc(); // Line E
greetArrowFunc(); // Line F

////////////////! Ques - vvvvvvvvvvvvv imp

class Calculator {
  constructor() {
    this.value = 0;
  }

  static create() {
    const instance = new this();
    console.log(instance);
    instance.add = function (x) {
      console.log(this);
      // this.value += x;
      // console.log(`Value (method): ${this.value}`);
    };
    instance.addArrow = (x) => {
      console.log(this, this.value);
      this.value += x;
      // console.log(`Value (arrow): ${this.value}`);
    };
    return instance;
  }
}

const calc = Calculator.create();
calc.add(10); // Lines A
// calc.addArrow(10); // Line B

const addFunc = calc.add;
const addArrowFunc = calc.addArrow;

addFunc(5); // Line C
addArrowFunc(5); // Line D

//////////////////////////////! MIND QUESTIONS

function outer() {
  console.log(this);
  let arrFunc = () => {
    console.log(this);
  };

  arrFunc();
}

let outerCaller = {
  fname: "Rahul Raj",
  outer: outer,
};

outerCaller.outer();

let newCaller = outerCaller.outer;
newCaller();

//////////////////////////////! MIND QUESTIONS 2
