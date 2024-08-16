// let person = {
//   firstName: "shivam",
//   lastName: "mishra",
//   getDetails() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(person);
// console.log(person.firstName);
// console.log(person.getDetails());

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => {
//     if (json.userId == 1) {
//       json.completed == false;
//       console.log("1");
//     } else {
//       json.completed == true;
//       console.log("2");
//     }
//   })
//   .catch((error) => console.log(error));

// imp question find OP

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Success"), 1000);
// });

// p.then((result) => {
//   console.log(result);
//   return result + " 1";
// })
//   .then((result) => {
//     console.log(result);
//     return result + " 2";
//   })
//   .then((result) => {
//     console.log(result);
//   });

// p.then((result) => {
//   console.log(result + " 3");
// });

//////////////////////////////////

// find OP

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1");
//   })
//   .then(() => {
//     console.log("Promise 2");
//   });

// console.log("End");

/////////////////////////////////

// ques op

// async function test() {
//   try {
//     return await Promise.reject("Error");
//   } catch (error) {
//     return "Caught";
//   }
// }

// test().then((result) => console.log(result));

///////////////////////////////

// ques OP

// console.log("start");
// async function test() {
//   let result = await Promise.resolve("Initial");
//   result = result + " step 1";
//   return result;
// }

// test()
//   .then((result) => {
//     console.log(result);
//     return result + " step 2";
//   })
//   .then((result) => {
//     console.log(result);
//   });

///////////////////////////////////

// ques OP

// let p = new Promise((resolve, reject) => {
//   resolve("First");
// });

// p.then((result) => {
//   console.log(result);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Second"), 1000);
//   });
// }).then((result) => {
//   console.log(result);
// });

// p.then((result) => {
//   console.log(result + "Again");
// });

///////////////////////////////////

// ques OP

// let p = new Promise((resolve, reject) => {
//   resolve("Resolved");
// });

// p.then((result) => {
//   console.log(result); // resolved
//   throw new Error("Error in first then");
// })
//   .catch((error) => {
//     console.error(error.message); // Error in first then
//     return "Recovered from error";
//   })
//   .then((result) => {
//     console.log(result); // Recovered from error
//     return new Promise((resolve, reject) => {
//       reject("Error in second then");
//     });
//   })
//   .catch((error) => {
//     console.error(error); // Error in second then
//     return "Recovered again";
//   })
//   .then((result) => {
//     console.log(result); // Recovered again
//   });

////////////////////////////////////

// ques OP

// async function asyncFunction() {
//   try {
//     let result = await new Promise((resolve, reject) => {
//       setTimeout(() => resolve("First Promise"), 500);
//     });
//     console.log(result);

//     result = await new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result + " -> Second Promise"), 500);
//     });
//     console.log(result);

//     return result + " -> Final Result";
//   } catch (error) {
//     console.error("Caught an error: ", error);
//   }
// }

// asyncFunction()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Caught in then: ", error);
//   });

//////////////////////////////////////////

// ques OP

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("First Promise"), 300);
// });

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => reject("Second Promise Error"), 200);
// });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("Third Promise"), 100);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log("All resolved: ", results);
//   })
//   .catch((error) => {
//     console.error("Caught: ", error);
//   });

////////////////////////////////

// ques OP

// async function nestedPromises() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Outer Promise Resolved");
//     }, 2000);
//   }).then(async (result) => {
//     console.log(result);
//     return await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(result + " -> Inner Promise Resolved");
//       }, 2000);
//     });
//   });
// }

// nestedPromises()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Caught: ", error);
//   });

///////////////////////////////////////

// ques OP - imp

// async function complexChaining() {
//   try {
//     let result = await new Promise((resolve, reject) => {
//       setTimeout(() => resolve("Step 1"), 2000);
//     });
//     console.log(result);

//     result = await new Promise((resolve, reject) => {
//       setTimeout(() => reject("Step 2 Error"), 2000);
//     });
//     console.log(result);
//   } catch (error) {
//     console.error("Caught: ", error);
//     return "Recovered in catch";
//   }
// }

// complexChaining()
//   .then((result) => {
//     console.log(result);
//     return "Next Step";
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Final Catch: ", error);
//   });

//////////////////////////////////////////Give output based questions for the hoisting, let, var, const, TDZ, function hositing, local an gloabal varuables, scopes all combined///////////////////////////////

// 1-

// console.log(a);
// var a = 10;
// console.log(b);
// let b = 20;
// console.log(c);
// const c = 30;

// function test() {
//   console.log(d);
//   var d = 40;
//   console.log(e);
//   let e = 50;
// }

// test();

//2-

// console.log(x);
// {
//   var x = 100;
// }
// console.log(y);
// {
//   let y = 200;
//   console.log(y);
// }
// console.log(z);
// {
//   const z = 300;
//   console.log(z);
// }

//3-

// function foo() {
//   console.log(m);
//   var m = 1;
//   console.log(n);
//   let n = 2;
//   console.log(p);
//   const p = 3;

//   {
//     console.log(q);
//     let q = 4;
//   }
// }

// foo();

/////////////

//4-

// myFunc();

// function myFunc() {
//   console.log(a);
//   var a = 5;
//   console.log(b);
//   let b = 10;
// }

// myFunc();

// console.log(myVar);
// var myVar = 15;

// console.log(myLet);
// let myLet = 20;
////////////////////////////////
// 5- very imp
// var a = 1;
// let b = 2;
// const c = 3;

// function scopeTest() {
//   console.log(a); // 1
//   console.log(b); // error
//   console.log(c); // error

//   var a = 4;
//   let b = 5;
//   const c = 6;

//   console.log(a); //4
//   console.log(b); //5
//   console.log(c); //6
// }

// scopeTest();

// console.log(a); // 4
// console.log(b); // 2
// console.log(c); // 3

// Explanation-

// Why Does var a Output undefined Inside the Function?
// When the JavaScript engine processes the function scopeTest, it performs hoisting:

// var a is hoisted to the top of the function scope, and its initial value is undefined.
// Because var declarations are hoisted, the local a shadows the global a within the function.
// This means when console.log(a) is executed inside scopeTest, it refers to the local a that has been hoisted and initialized to undefined.

// Temporal Dead Zone (TDZ) for let and const
// let b and const c are hoisted but not initialized until their declaration is encountered. Accessing them before their initialization results in a ReferenceError because they are in the TDZ.

// let a = 10;
// var b = 20;
// var b = 20;
// let a = 20;
// what is the scope of the variables defined with var
// does var a=10 outside function and var a = 20 inside function are 2 differnt variables ?

////////////

//6-

// var x = 1;

// function outer() {
//   var x = 2;

//   function inner() {
//     console.log(x); // What is the output here?
//     var x = 3;
//     console.log(x); // What is the output here?
//   }

//   inner();
//   console.log(x); // What is the output here?
// }

// outer();

// console.log(x); // What is the output here?

//////////////////////////////////////

////////////////////////////////////////////////////OOPS////////////////////////////////////////////////

"use strict";

///////////////////////////////////////
// Constructor Functions and the new Operator
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never to this!
//   this.calcAge = function () {
//     console.log(2037 - this.birthYear);
//   };
// };

// const jonas = new Person("Jonas", 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Jack", 1975);

// console.log(jonas instanceof Person);

// Person.hey = function () {
//   console.log("Hey there 👋");
//   console.log(this);
// };
// Person.hey();

// ///////////////////////////////////////
// // Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototyeOfLinkedObjects

// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

// ///////////////////////////////////////
// // Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector("h1");
// console.dir((x) => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();


///////////////////////////////////////
// ES6 Classes

// Class expression
// const PersonCl = class {}

// Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();


///////////////////////////////////////
// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


///////////////////////////////////////
// Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);


///////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();


///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();


///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  // BUG in video:
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);
  
  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();


///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
*/

//////////////////////////////// OOPS 2////////////////////////////////////////

const Person = function (firstName, lastName) {
  //instance properties
  this.fname = firstName;
  this.lname = lastName;

  // never do this, it will create 100 copies if u create 100 functions, so use prototype property to optimise
  this.calcAge = function () {
    console.log("age");
  };
  console.log(this);
};

let boy = new Person("shivam", "mishra");
console.log(boy);
boy.calcAge();

// all properteis defined in the prototype prop of a constructor fucntion will be present in the objects of Person, so one copy will exist but will be available to all objects
Person.prototype.getName = function () {
  return this.fname;
};
console.log(boy.getName());

// __proto__ => called as prototype of xyz object

console.log(boy.__proto__); // this will have same output as console.log(Person.prototype)

console.log(boy.__proto__ === Person.prototype); // true

//Imp line => Person.prototype is not the prototype of Person rather it is the prototype of all objects which are going to be created from Person constrcutor fn

console.log(Person.prototype.isPrototypeOf(boy));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(boy.hasOwnProperty("fname")); // t
console.log(boy.hasOwnProperty("getName")); // f

// all objects in JS has a prototype, object.prototype is top of prototype chain and its prototype is null hence object.__proto__ is null

console.log(Object.__proto__);

// CLASSES

//class expression

// const Person1 = class {

// }

// class declaration

class MyPerson {
  constructor(fname, DOB) {
    this.fname = fname;
    this.DOB = DOB;
  }

  // these functions will all be in the Prototype property of MyPerson
  calcAge() {
    console.log(this.DOB);
  }

  get age() {
    return this.DOB;
  }

  set age(myAge) {
    this.DOB = myAge;
  }

  // static methods
  static hey() {
    console.log(this);
    console.log("hey there");
  }
}

// this will create a static method
MyPerson.bye = function () {
  console.log(this);
  console.log("bye!");
};

const ajay = new MyPerson("ajay", "24");
console.log(ajay);
ajay.age = 20;
console.log(ajay.age);
console.log(ajay.DOB);
console.log(ajay.__proto__ === MyPerson.prototype); // t
console.log(ajay.__proto__);

// console.log(ajay.hey()); //error since static method can only be called from class and not object
console.log(MyPerson.hey());
// console.log(ajay.bye()); //error since static method can only be called from class and not object
MyPerson.bye();

// ! classes are not hoisted

//they are first class citizens i.e we can pass them in function arguments and can be returne from fn
// classes are executed in strict mode

// ! all objects in JS can have getters and setters

// lets have a normal object and use get and set there

// getters and setters dont need to have same name as the prop they are setting or getting
// getter ko call krne k liye wo () bracket ki zaroorat ni hoti h
// setter ko call krne k liye just like a variable set kr do usko

let obj = {
  owner: "shivam",
  arr: [1, 2, 3, 5, 1, 2, 11, 1122],

  get arrVal() {
    return this.arr[this.arr.length - 1];
  },

  set arrVal(propArr) {
    this.arr = propArr;
  },
};

console.log(obj.arrVal);
obj.arrVal = [1];
console.log(obj.arrVal);

let obj2 = {
  fname: "shivam",

  get myName() {
    return this.fname;
  },

  set myName(name) {
    this.fname = name;
  },
};
console.log(obj2.myName);
obj2.myName = "no shivam";
console.log(obj2.myName);

//////////////////////////? INHERITANCE /////////////////////////////

//1. Constructor function

function Animal(species, age) {
  this.species = species;
  this.age = age;
  this.weight = 100; //we can add properties even if it is not in parameter of the constructor
}

Animal.prototype.showSpecies = function () {
  console.log("This is the species " + this.species);
};

function Dog(species, age, sound) {
  Animal.call(this, species, age);
  this.sound = sound;
}

// this is very important line. Without this we wont be able to link
Dog.prototype = Object.create(Animal.prototype);

// this line we can add else Dog.prototype.constructor will show Animal
Dog.prototype.constructor = Dog;

Dog.prototype.createSound = () => {
  console.log(`The sound is ${this.sound}`);
};

let tyson = new Dog("German Shepherd", 8, "Bark");
console.log(tyson);
console.log(tyson.__proto__ === Dog.prototype); // t
console.log(tyson.__proto__);
console.log(typeof tyson.__proto__);
console.log(Object.getPrototypeOf(tyson)); // Dog
console.log(tyson.__proto__.__proto__ === Animal.prototype); // t
tyson.showSpecies();

// remember that if u add a method in child that is also in the parent then child ka object call krega wo method to child wala hi call hoga, so basically one which comes first in protype chain that one will be used.

// ES6 classes (sugar coating)
console.log("ES6 classes (sugar coating)");

class Vehicle {
  constructor(model, type) {
    // instance members
    this.model = model;
    this.type = type;
    this.color = "black"; //we can add properties even if it is not in parameter of the constructor
  }
  //remember that the fucntions in classes are added to the prototype property and the variables u defined above will be added to the instance of class
  getModel() {
    return this.model;
  }
}

class Bike extends Vehicle {
  // we need to add a constructor only if we need to have a extra parameter in child which doest not exists in parent. This is bcoz for initialising a extra parameter in child class we need 'this' keyword in child class and 'this' keyword can only be created via 'super' call to parent class. So if child does not need a extra parameter then u can omit writing a constructor here.
  constructor(model, type, topSpeed) {
    // this line must be the first line in child's constructor (this is reponsible for the creation of this keyword in the subclass)
    super(model, type);
    this.topSpeed = topSpeed;
  }
  getTopSpeed() {
    console.log("Top speed " + this.topSpeed);
  }
}

let apache = new Bike("apache 350", "2 wheeler", 180);
console.log(apache);

apache.getTopSpeed();
console.log(apache.getModel());

console.log(apache);
console.log(apache.__proto__);
console.log(apache.__proto__.__proto__);
console.log(apache.__proto__ === Bike.prototype);
console.log(apache.__proto__.__proto__ === Vehicle.prototype);
console.log(apache instanceof Bike);
console.log(apache instanceof Vehicle);

// remember that if u add a method in child that is also in the parent then child ka object call krega wo method to child wala hi call hoga, so basically one which comes first in protype chain that one will be used.

// Inheritance via Object.create

let Personproto = {
  age: 24,
  calcAge() {
    console.log("Age is " + this.age);
  },
};

const rohit = Object.create(Personproto);
rohit.calcAge();

const Studentproto = Object.create(Personproto);
console.log(Studentproto);
const shivam = Object.create(Studentproto);

/////////////////////// Encapsulation and abstraction ///////////////

// JS does not support truly private fields and   as of now
// so for now we just fake encapsulation via some convention

// WE MAKE THE PROPERTY/METHOD AS STARTING WITH _ SO THAT OTHER DEVS KNOW THAT THIS IS A PRIVATE
// exampple if u want to make 'name' as private then define it as '_name'.

// but recently JS has introduced truly private methods and fields.

//public methods
//public fields
//private methos - can be accessed only in the class and can be inherited also but can not be used by child class
//private fields - can be accessed only in the class and can be inherited also but can not be used by child class

class Account {
  // insrance member (all fields are instance members)
  #movements = [];

  constructor(owner, typeOfAccount) {
    this.owner = owner;
    this.typeOfAccount = typeOfAccount;
    // this.#movements = []; // this will give an error since private properties can't be defined in the constructor
  }

  // all functions are class meembers (added to prototype of class)
  #confidential() {
    console.log("Confidential method");
  }

  notSoConfidential() {
    console.log("Public method");
  }

  fn() {
    console.log(this.#movements);
    console.log(this.#confidential());
  }
}

let acc = new Account("Shivam", "Savings");

// console.log(acc.#movements); // error
// console.log(acc.#confidential); // error

class SubAccount extends Account {
  getMovement() {
    // console.log(this.#movement); // error
  }
}

let subacc = new SubAccount();
// console.log(subacc.#movement); // error

//////
// let myName = "John";
// let age = 30;
// let salary = 1000;

// function printPersonDetails(name, age, salary) {
//   console.log("Name: " + name + ", Age: " + age + ", Salary: " + salary);
// }

// printPersonDetails(myName, age, salary);

// const person = {
//   name: "John",
//   age: 30,
//   salary: 1000,
//   printPersonDetails: function () {
//     console.log(
//       "Name: " + this.name + ", Age: " + this.age + ", Salary: " + this.salary
//     );
//   },
// };

// person.printPersonDetails();

// Abstraction & Encapsulation (partially)

function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  let rating = 90;

  let calculateSalary = () => {
    let finalSalary = this.salary + salary * (rating / 100);
    console.log("Final Salary: " + finalSalary);
    return finalSalary;
  };

  this.printEmployeeDetails = function () {
    console.log(
      "Name: " +
        this.name +
        ", Age: " +
        this.age +
        ", Salary: " +
        calculateSalary()
    );
  };
}

const employee = new Employee("John", 30, 1000);
employee.printEmployeeDetails();
// employee.calculateSalary(); //Private method cannot be accessed

// Encapsulation
// class Student {
//   #name = ""; // truly private

//   set studentName(name) {
//     this.#name = name;
//   }

//   get studentName() {
//     return this.#name;
//   }
// }

// const student = new Student();
// student.studentName = "John";
// console.log(student);
// console.log(student.studentName);

// // Polymorphism
// class Shape {
//   draw() {
//     console.log("Drawing a shape");
//   }
// }

// const shape = new Shape();
// shape.draw();

// class Rectangle extends Shape {
//   draw() {
//     console.log("Drawing a rectangle");
//   }
// }

// const rect = new Rectangle();
// rect.draw();

// class Circle extends Shape {
//   draw() {
//     console.log("Drawing a circle");
//   }
// }

// const circle = new Circle();
// circle.draw();

class Counter {
  // Private field
  #count = 0;

  // Public method to increment count
  increment() {
    this.#count++;
  }

  // Public method to get current count
  get count() {
    return this.#count;
  }
}

const counter = new Counter();

counter.increment();

// Cannot perform
//console.log(counter.#count); // Error

////////////////////// ? practice OOPS ///////////////////////////////

// Question 1: Implement a Simple Class with Methods
// Create a class Car with properties make, model, and year. Add a method getCarInfo that returns a string with the car's details. Then create an instance of the Car class and log the car's details using the getCarInfo method.

// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }

//   getCarInfo() {
//     return `${this.make}, ${this.model} and ${this.year}`;
//   }
// }

// Question 2: Class Inheritance
// Create a base class Person with properties name and age. Then create a subclass Employee that extends Person and adds a new property jobTitle. Add a method getEmployeeInfo in the Employee class that returns a string combining the person's name, age, and job title. Create an instance of Employee and log the employee's details using the getEmployeeInfo method.

// class Persona {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Employee extends Persona {
//   constructor(name, age, jobTitle) {
//     super(name, age);
//     this.jobTitle = jobTitle;
//   }

//   getEmployeeInfo() {
//     return `${this.name}, ${this.age} and ${this.jobTitle}`;
//   }
// }

// let emp = new Employee("john", 12, "Officer");
// console.log(emp.getEmployeeInfo);

// Question 3: Constructor Function with Prototypal Inheritance
// Implement a constructor function Animal with properties name and species. Add a method makeSound to the prototype of Animal that logs a sound. Then create a constructor function Dog that inherits from Animal and overrides the makeSound method to log a dog-specific sound. Create an instance of Dog and call the makeSound method.

// Question 4: Encapsulation Using Classes
// Create a class BankAccount with private properties accountNumber and balance.Use the # syntax for private fields.Add methods deposit and withdraw to manipulate the balance.Add a method getBalance to return the current balance.Ensure that the accountNumber cannot be accessed directly from outside the class. Create an instance of BankAccount, make some deposits and withdrawals, and log the balance.

class BankAccount {
  #accountNumber;
  #balance = 0;

  constructor(accountNumber, balance) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
  }

  deposit(num) {
    this.#balance += num;
  }

  withdraw(num) {
    if (!(this.getBalance() - num)) {
      return "can not withdraw!";
    }
    this.#balance -= num;
  }

  getBalance() {
    return this.#balance;
  }
}

let bnkAcc = new BankAccount("128089802", 0);
bnkAcc.deposit(200);
bnkAcc.withdraw(200);
bnkAcc.deposit(400);
bnkAcc.deposit(200);
bnkAcc.deposit(200);
bnkAcc.withdraw(900);
bnkAcc.deposit(400);

console.log(bnkAcc.getBalance()); //300

// Question 5: Static Methods and Properties
// Create a class MathOperations with a static method 'add' that takes two numbers and returns their sum.Also, add a static property pi with the value of 3.14159.Demonstrate how to use the static method and static property without creating an instance of the class

class MathOperations {
  static pi = 3.14159;
  static add(num1, num2) {
    return num1 + num2;
  }
}

console.log(MathOperations.pi, MathOperations.add(1, 2));

// Question 6: Method Overriding and Super
// Create a base class Shape with a method area that returns 0. Create a subclass Circle that extends Shape and overrides the area method to return the area of the circle(π * radius ^ 2).Use the super keyword to call the Shape constructor.Create an instance of Circle, set the radius, and log the area.

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * radius ** 2;
  }
}

let circle = new Circle(4);

// ! imp - Question 7: Composition Over Inheritance
// Create a class Engine with a method start that logs "Engine started". Create a class Car with a method drive that logs "Car is driving". Use composition to include an Engine instance inside the Car class. Create an instance of Car, start the engine, and then drive the car.

class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
  }

  drive() {
    this.engine.start();
    console.log("Car is driving");
  }
}

const myCar = new Car();
myCar.drive(); // Output: Engine started
//          Car is driving

// Question 8: Mixins
// Create a mixin canFly that adds a method fly to a class. Then create two classes Bird and Airplane.Apply the canFly mixin to both classes.Create instances of Bird and Airplane, and demonstrate calling the fly method on both instances.

// Question 9: Polymorphism with Interfaces
// Although JavaScript does not have interfaces like TypeScript or other languages, you can implement polymorphism using a common method signature. Create a base class Animal with a method speak. Create subclasses Cat and Dog that both extend Animal and implement the speak method differently. Create an array of Animal objects containing instances of Cat and Dog. Loop through the array and call the speak method on each object, demonstrating polymorphism.

class Animal2 {
  speak() {
    throw new Error("Can't call methods of interfaces!");
  }
}

class Dog2 extends Animal2 {
  speak() {
    console.log("Barks!");
  }
}

class Cat2 extends Animal2 {
  speak() {
    console.log("Meow!");
  }
}

const animals = [new Cat2(), new Dog2()];

animals.forEach((animal) => animal.speak());

// Question 10: Abstract Classes
// Simulate abstract classes in JavaScript by creating a base class Employee with a constructor that throws an error if the class is instantiated directly. Add an abstract method calculateSalary that also throws an error. Create subclasses FullTimeEmployee and PartTimeEmployee that implement the calculateSalary method differently. Instantiate both subclasses and call their calculateSalary methods.

////////// ? more ques on the Constructor Function ///////////////////

// Question 1: Constructor Function and Prototype Methods
// Create a constructor function Person with properties firstName, lastName, and age. Add a prototype method getFullName that returns the full name of the person. Then create an instance of Person and log the full name using the getFullName method.

function PersonFunc(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

PersonFunc.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Question 2: Prototypal Inheritance
// Create a constructor function Vehicle with properties make and model. Add a prototype method startEngine that logs "Engine started". Create another constructor function Car that inherits from Vehicle and adds a new property year. Ensure the Car instances can use the startEngine method from Vehicle.

function Vehicle2(make, model) {
  this.make = make;
  this.model = model;
}

Vehicle2.prototype.startEngine = function () {
  console.log("Engine Started!");
};

function Car4(make, model, year) {
  Vehicle.call(this, make, model); // u forgot this line
  // the above line is needed bcoz
  //   Calls the Vehicle constructor function: Vehicle is a function that initializes the properties make and model.
  // Sets the context to the current instance (this): By using call(this, make, model), we ensure that the Vehicle constructor function is called with the context of the Car instance. This means that this inside the Vehicle constructor function refers to the current Car instance.
  // Passes the arguments make and model: The arguments make and model are passed to the Vehicle constructor function to initialize these properties in the Car instance.
  this.year = year;
}

Car4.prototype = Object.create(Vehicle2.prototype);
Car4.prototype.constructor = Car4;

// Question 3: Object Composition
// Create a constructor function Engine with a method start that logs "Engine started".Create another constructor function Car that has properties make and model, and includes an Engine instance.Add a method drive to Car that starts the engine and logs "Car is driving".

//////! blunder - the way u used a function as a method inside a constructor function is blumder

// wrong
// function Engine2() {
//   function start() {
//     console.log("Engine started!");
//   }
// }

// function Car2(make, model) {
//   let engine2 = new Engine2();
//   function drive() {
//     engine2.start();
//     console.log("drive");
//   }
// }

// let car2 = new Car2("asas", "asaadsadad");
// car2.drive();

// ! issue in above code-

// The issue with your code is that the start and drive functions are defined as local functions within the constructor functions Engine2 and Car2, respectively. As local functions, they are not accessible from outside the constructor function where they are defined.

// To fix the code, you need to ensure that the start method is part of the Engine2 instance and that the drive method is part of the Car2 instance. Here is a corrected version of the code:

//! correct

function Engine3() {
  this.start = function () {
    console.log("Engine started");
  };
}

function Car3(make, model) {
  this.make = make;
  this.model = model;
  this.engine = new Engine3();
}

Car3.prototype.drive = function () {
  this.engine.start();
  console.log("Car is driving");
};

const car = new Car3("Toyota", "Camry");
car.drive(); // Output: Engine started
//          Car is driving

// Question 4: Mixins with Constructor Functions
// Create a mixin canFly that adds a method fly to an object. Create two constructor functions Bird and Airplane. Use the canFly mixin to add the fly method to both Bird and Airplane. Create instances of both and demonstrate calling the fly method.

// Question 5: Factory Functions and Prototypal Inheritance
// Create a factory function createPerson that returns an object with properties firstName, lastName, and age, and a method getFullName that returns the full name of the person.Then create another factory function createEmployee that uses createPerson and adds a new property jobTitle.Ensure that the createEmployee instances can use the getFullName method from createPerson.

function createPerson(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

function createEmployee(firstName, lastName, age, jobTitle) {
  createPerson.call(this, firstName, lastName, age);
  this.jobTitle = jobTitle;
}

createEmployee.prototype = Object.assign(createPerson);
createEmployee.prototype.constructor = createPerson;

// Question 6: Prototypal Inheritance with Shared Methods
// Create a constructor function Shape with a property color and a method describe that logs "A shape with color". Create another constructor function Circle that inherits from Shape and adds a property radius. Add a method area to the Circle prototype that returns the area of the circle. Ensure the describe method is shared between Shape and Circle.

// Question 7: Prototype Chain and Method Overriding
// Create a constructor function Animal with a method speak that logs "Animal speaks". Create another constructor function Dog that inherits from Animal and overrides the speak method to log "Woof". Ensure that the Dog instances use the overridden speak method, while other Animal instances use the original speak method.

function MyAnimal() {
  this.speak = function () {
    console.log("cant !");
  };
}

function MyDog() {
  this.speak = function () {
    console.log("barks!");
  };
}

function MyCat() {
  this.speak = function () {
    console.log("meows!");
  };
}

//   Question 8: Encapsulation with Closures
// Create a constructor function BankAccount with private properties accountNumber and balance using closures. Add methods deposit and withdraw to manipulate the balance, and a method getBalance to return the current balance. Ensure that the accountNumber cannot be accessed directly from outside the constructor function.

//! giving issue - you cannot use the # syntax for private fields directly within traditional constructor functions in JavaScript. The # syntax is specifically designed for use within ES6 class declarations.
// function BankAccount2(accountNumber, balance) {
//   #balance2;
//   #accountNumber2;
//   this.#balance2 = balance;
//   this.#accountNumber2 = accountNumber;
// }

// Question 9: Delegation using Object.create
// Create an object personPrototype with properties firstName and lastName, and a method getFullName that returns the full name. Create another object employeePrototype that uses Object.create(personPrototype) and adds a new property jobTitle. Create instances of employeePrototype and ensure they can access both getFullName and jobTitle.

//! blunder -
// let personPrototype = {
//   firstName: "shivam",
//   lastName: "mishra",
//   getFullName: function () {
//     return `abcd`;
//   },
// };

// let employeePrototype = Object.create(personPrototype);
// employeePrototype.jobTitle = "officer";

// let employe = new employeePrototype();

const personPrototype = {
  getFullName() {
    return `${this.firstName} ${this.lastName} `;
  },
};

const employeePrototype = Object.create(personPrototype);
employeePrototype.jobTitle = "";

const employee1 = Object.create(employeePrototype);
employee1.firstName = "John";
console.log(employee1);
console.log(employee1.getFullName());

//   Question 10: Prototypal Inheritance and Mixin
// Create a mixin loggable that adds a method log to an object. Create a constructor function Device with properties brand and model, and a method getDeviceInfo that returns the device information. Use the loggable mixin to add the log method to Device instances. Create a constructor function Smartphone that inherits from Device and adds a new property os. Demonstrate using both getDeviceInfo and log methods on Smartphone instances.

////////////////?   getter and setter questions /////////////////////////////

// Question 1: Basic Getter and Setter
// Create a class Rectangle with private fields for width and height. Implement getter and setter methods to access and modify these fields. Ensure that the setter validates the input to be positive numbers.

// ?  u can keep any name for getter and setter
class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  get myWidth() {
    return this.#width;
  }

  set myWidth(value) {
    if (value <= 0) return "non pos";
    this.#width = value;
  }

  get height() {
    return this.#height;
  }

  set height(value) {
    if (value <= 0) return "non pos";
    this.#height = value;
  }
}

let recObj = new Rectangle(1, 2);
console.log(recObj.myWidth);
recObj.myWidth = 12;
console.log(recObj.myWidth);

console.log(recObj.height);
recObj.height = 12;
console.log(recObj.height);

// Question 3: Validation in Setter
// Create a class Person with private fields firstName and lastName. Implement getters and setters for these fields. The setter for firstName should ensure that the name starts with an uppercase letter. The setter for lastName should ensure that it contains only alphabetical characters.

// Question 4: Chain Getters and Setters
// Create a class Temperature with a private field celsius. Implement a getter fahrenheit that converts the Celsius temperature to Fahrenheit. Implement a setter fahrenheit that converts a Fahrenheit value to Celsius and updates the private field.

// Question 5: Read-Only Getter
// Create a class User with a private field password. Implement a getter password that returns a hashed version of the password and a setter that prevents changing the password once it is set.

class User {
  #password;

  constructor(password) {
    this.#password = this.#hashPassword(password);
  }

  #hashPassword(password) {
    return `hashed_${password}`; // Simplified hashing
  }

  get password() {
    return this.#password;
  }

  set password(value) {
    console.log("Password cannot be changed once set.");
  }
}

// Question 6: Computed Property and Validation
// Create a class Square with a private field sideLength. Implement a getter for area that calculates the area of the square. Implement a setter for sideLength that ensures the length is always a positive number.

// Question 7: Custom Error Handling in Setter
// Create a class BankAccount with a private field balance. Implement a getter balance and a setter balance that allows updating the balance but ensures that the new balance is never negative. If an attempt is made to set a negative balance, throw a custom error.

// Question 8: Encapsulation with Getters and Setters
// Create a class DateOfBirth with a private field date. Implement a getter age that calculates the age based on the current date. Implement a setter date that only allows setting a date in the past.

// Question 9: Access Control with Getters and Setters
// Create a class Product with private fields name and price. Implement a getter for name and price, and a setter for price that allows setting the price only if it is greater than zero. Ensure that the name cannot be changed once it is set.

// Question 10: Chained Setters and Getters
// Create a class Volume with private fields length, width, and height. Implement getters for volume and surfaceArea. Implement setters for length, width, and height that update the respective fields and recompute the volume and surfaceArea.

//////////////////////! Imp //////////

// create a class College that can access methods of its child classes (department and student)

// Question : Prototype Chain Manipulation
// Create a prototype chain where Machine is the base prototype with a method operate(). Create another prototype Vehicle that inherits from Machine and adds a method move(). Then create a prototype Car that inherits from Vehicle and overrides move(). Demonstrate how to manipulate and interact with the prototype chain using constructor functions.

function Machine22() {}
Machine22.prototype.operates = function () {
  console.log("Machine operates");
};
function Vehicle22() {
  Machine22.call(this);
}

Vehicle22.prototype = Object.create(Machine22.prototype);
// console.log(Vehicle22.prototype);
Vehicle22.prototype.constructor = Vehicle22;
Vehicle.prototype.move = function () {
  console.log("vehicle moves");
};

function Car22() {
  this.operate = function () {};
}

Car22.prototype = Object.create(Vehicle22);
Car22.prototype.constructor = Car22;
Car22.prototype.move = function () {
  console.log("Car moves");
};

console.log(Machine22);
console.log(Machine22.prototype);
console.log(Vehicle22);
console.log(Vehicle22.prototype);
console.log(Car22);
console.log(Car22.prototype);

let v = new Vehicle22();
let c = new Car22();

// console.log(Vehicle22.prototype === );

////! finding the parent class of a child class - wrong

console.log(Vehicle22.prototype.__proto__.constructor);
// in above way u can climb up the prototype chain and u can see all classes from where this is inheriting in case of multilevel inheritence

//! blunder I was thinking this will be true, areee __proto__ of the instance === Class.prototype
console.log(Vehicle22.__proto__ === Machine22.prototype);

////////////
console.log(v.__proto__ === Vehicle22.prototype);
console.log(v.__proto__ === Machine22.prototype);
/////

//// ! finding class of an object
console.log(v.__proto__.constructor);

//// ! finding parent class of an object
console.log(v.__proto__.__proto__.constructor);

///////////////
console.log(v.__proto__.__proto__.__proto__); // Object class

console.log(v.__proto__.__proto__.__proto__.__proto__); // null

//Create a class Device with a private field status and a getter and setter for it. Then create a constructor function SmartPhone that uses Device as its prototype and adds a method call(). Use a mix of ES6 classes and prototypal inheritance to achieve this.

// class Device {
//   #status;
//   constructor(status) {
//     this.#status = status;
//   }
//   get status() {
//     return this.#status;
//   }

//   set status(value) {
//     this.#status = value;
//   }
// }

// function SmartPhone(status) {
//   Device.call(this, status);
// }

// SmartPhone.prototype = Object.create(Device.prototype);
// SmartPhone.prototype.constructor = new SmartPhone();

// let sp = new SmartPhone("11111");
// console.log(sp.status);

//Create a class Library with a private collection of books. Use symbols to create truly private fields for book titles and authors. Implement methods to add books, remove books, and search for books by title or author. Ensure that the private fields cannot be accessed or modified directly from outside the class.

//////! important - optional params in JS

function fn(a, b) {}
fn(1); // b will be undefined

function fn2(a = 1, b = 2) {}
fn2(7); // a=7,b=2
fn2(undefined, 9); // a=undefined, b=9;

////////////////////////////////////////////////////////?
