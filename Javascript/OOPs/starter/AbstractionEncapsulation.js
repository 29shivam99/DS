'use strict';

////////////////////! Encapsulation and abstraction ///////////////

// JS does not support truly private fields and methods as of now, upate -> now we have it
// so for now we just fake encapsulation via some convention

// WE MAKE THE PROPERTY/METHOD AS STARTING WITH _ SO THAT OTHER DEVS KNOW THAT THIS IS A PRIVATE
// example if u want to make 'name' as private then define it as '_name'.

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

// truly priavte fields with #
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
console.log(counter.count); // Output: 1

// Cannot perform
//console.log(counter.#count); // Error

