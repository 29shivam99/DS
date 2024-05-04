'use strict';
const Person = function (firstName, lastName) {
  //instance properties
  this.fname = firstName;
  this.lname = lastName;

  // never do this, it will create 100 copies if u create 100 functions, so use prototype property to optimise
  this.calcAge = function () {
    console.log('age');
  };
  console.log(this);
};

let boy = new Person('shivam', 'mishra');
console.log(boy);

// all properteis defined in the prototype prop of a constructor fucntion will be present in the objects of Person, so one copy will exist but will be available to all objects
Person.prototype.getName = function () {
  return this.fname;
};
console.log(boy.getName());

// __proto__ => called as prototype of xyz object

console.log(boy.__proto__); // this will have same output as console.log(Person.prototype)

console.log(boy.__proto__ === Person.prototype);

//Imp line => Person.prototype is not the prototype of Person rather it is the prototype of all objects which are going to be created from Person constrcutor fn

console.log(Person.prototype.isPrototypeOf(boy));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(boy.hasOwnProperty('fname'));
console.log(boy.hasOwnProperty('getName'));

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
    console.log('hey there');
  }
}

MyPerson.bye = function () {
  console.log(this);
  console.log('bye!');
};

const ajay = new MyPerson('ajay', '24');
console.log(ajay);
ajay.age = 20;
console.log(ajay.age);

console.log(ajay.__proto__ === MyPerson.prototype);
console.log(ajay.__proto__);

// console.log(ajay.hey()); //error since static method can only be called from class and not object
console.log(MyPerson.hey());
// console.log(ajay.bye()); //error since static method can only be called from class and not object
MyPerson.bye();

//classes are not hoisted
//they are first class citizens i.e we can pass them in function arguments and can be returne from fn
// classes are executed in strict mode

// all objects in JS can have getters and setters

//lets have a normal object and use get and set there

// getters and setters dont need to have same name as the prop they are setting or getting
// getter ko call krne k liye wo () bracket ki zaroorat ni hoti h
// setter ko call krne k liye just like a variable set kr do usko

let obj = {
  owner: 'shivam',
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
  fname: 'shivam',

  get myName() {
    return this.fname;
  },

  set myName(name) {
    this.fname = name;
  },
};
console.log(obj2.myName);
obj2.myName = 'no shivam';
console.log(obj2.myName);

////////////////////////// INHERITANCE /////////////////////////////

//1. Constructor function

function Animal(species, age) {
  this.species = species;
  this.age = age;
  this.weight = 100; //we can add properties even if it is not in parameter of the constructor
}

Animal.prototype.showSpecies = function () {
  console.log('This is the species ' + this.species);
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

let tyson = new Dog('German Shepherd', 8, 'Bark');
console.log(tyson);
console.log(tyson.__proto__ === Dog.prototype);
console.log(tyson.__proto__);
console.log(typeof tyson.__proto__);
console.log(Object.getPrototypeOf(tyson));
console.log(tyson.__proto__.__proto__ === Animal.prototype);
tyson.showSpecies();

// remember that if u add a method in child that is also in the parent then child ka object call krega wo method to child wala hi call hoga, so basically one which comes first in protype chain that one will be used.

// ES6 classes (sugar coating)
console.log('ES6 classes (sugar coating)');

class Vehicle {
  constructor(model, type) {
    // instance members
    this.model = model;
    this.type = type;
    this.color = 'black'; //we can add properties even if it is not in parameter of the constructor
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
    console.log('Top speed ' + this.topSpeed);
  }
}

let apache = new Bike('apache 350', '2 wheeler', 180);
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
    console.log('Age is ' + this.age);
  },
};

const rohit = Object.create(Personproto);
rohit.calcAge();

const Studentproto = Object.create(Personproto);
console.log(Studentproto);
const shivam = Object.create(Studentproto);

/////////////////////// Encapsulation and abstraction ///////////////

// JS does not support truly private fields and methods as of now
// so for now we just fake encapsulation via some convention

// WE MAKE THE PROPERTY/METHOD AS STARTING WITH _ SO THAT OTHER DEVS KNOW THAT THIS IS A PRIVATE
// exampple if u want to make 'name' as private then define it as '_name'.

// but recently JS has introduces truly private methods and fields.

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
    // this.#movements = []; // this will give an error since private properties cant be defined in the constructor
  }

  // all functions are class meembers (added to prototype of class)
  #confidential() {
    console.log('Confidential method');
  }

  notSoConfidential() {
    console.log('Public method');
  }

  fn() {
    console.log(this.#movements);
    console.log(this.#confidential());
  }
}

let acc = new Account('Shivam', 'Savings');

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
    console.log('Final Salary: ' + finalSalary);
    return finalSalary;
  };

  this.printEmployeeDetails = function () {
    console.log(
      'Name: ' +
        this.name +
        ', Age: ' +
        this.age +
        ', Salary: ' +
        calculateSalary()
    );
  };
}

const employee = new Employee('John', 30, 1000);
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
console.log(counter.getCount()); // Output: 1

// Cannot perform
//console.log(counter.#count); // Error
