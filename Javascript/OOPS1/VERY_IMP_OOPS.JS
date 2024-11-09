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

// // ES6 classes (sugar coating)
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

//!!   Inheritance via Object.create - vvvv imp

//M1
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

//////////////
const personPrototype = {
  getFullName() {
    return `${this.firstName} ${this.lastName} `;
  },
};

const employeePrototype = Object.create(personPrototype);
employeePrototype.jobTitle = ""; // jobTitle will be added to employeePrototype

const employee1 = Object.create(employeePrototype); //employeePrototype will be now Prototype for employee1 and hence employee1.__proto__ will be employeePrototype
employee1.firstName = "John"; // firstName will be property of employee1 and iska employeePrototype se koi lena dena nahi hai
console.log(employee1);
console.log(employee1.getFullName());

//////////

// Object.create is a method that creates a new object with a specified prototype object and optional properties.

// M2
/**
 * Objects
 */

const animal = {
  name: "Animal",
  eats() {
    console.log("I am eating");
  },
};

const rabbit = {
  name: "Rabbit", // overrride name property
  jumps() {
    console.log("I am jumping");
  },
  __proto__: animal, // very imp
};

console.log(rabbit);
console.log(rabbit.name); // Rabbit
console.log(rabbit.__proto__.name); // Animal

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

////////! giving issue - you cannot use the # syntax for private fields directly within traditional constructor functions in JavaScript. The # syntax is specifically designed for use within ES6 class declarations.
// function BankAccount2(accountNumber, balance) {
//   #balance2;
//   #accountNumber2;
//   this.#balance2 = balance;
//   this.#accountNumber2 = accountNumber;
// }

//! Question 3: Object Composition
// Create a constructor function Engine with a method start that logs "Engine started".Create another constructor function Car that has properties make and model, and includes an Engine instance.Add a method drive to Car that starts the engine and logs "Car is driving".

function Engine() {}
Engine.prototype.start = function () {
  console.log("Eng start");
};

function Car(make, model) {
  this.make = make;
  this.model = model;
  this.engine = new Engine();
}
Car.prototype.drive = function () {
  this.engine.start();
  console.log("Car is driving");
};

const car = new Car("Toyota", "Camry");
car.drive();

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

////////////! ALWAYS REMEMBER TYPSOF PROTO IS OBJECT AND TYPE OF CLASS/CONS FUNC IS FUNCTION HENCE TYPEOF PROTO.CONSTRUCTOR IS FUNCTION
