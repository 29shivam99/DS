class AbstractClassInitializedError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

/**
 * ABSTRACT CLASS
 */

// class Shape {
//   constructor() {
//     if (this.constructor == Shape) {
//       throw new AbstractClassInitializedError("Shape is an abstract class");
//     }
//   }

//   calculateArea() {
//     throw new Error("calculateArea method is not implemented");
//   }
// }

// const shape = new Shape();

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   calculateArea() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// try {
//   const rect = new Rectangle(2, 4);
//   const circle = new Circle(5);
//   console.log(rect.calculateArea());
//   console.log(circle.calculateArea());
// } catch (error) {
//   if (error instanceof AbstractClassInitializedError) {
//     console.error(error.message);
//   }
// }

/**
 * INHERITANCE
 */

const animal = {
  name: "Animal",
  eat: function () {
    console.log("Animal is eating");
  },
};

const dog = {
  __proto__: animal,
  name: "Dog",
  bark: function () {
    console.log("Dog is barking");
  },
  eat: function () {
    console.log("Dog is eating");
  },
};

dog.bark();
dog.eat();

console.log(dog.__proto__);

// ([[Prototype]] = __proto__ = prototype = Object.getPrototypeOf()),
//   Object.setPrototypeOf();

// dog.__proto__ = animal;
//  Object.setPrototypeOf(dog, animal);
//  dog.__proto__ = Object.getPrototypeOf(dog);
//  dog.prototype

let person = {
  name: "Ranbir",
  lastname: "Kapoor",

  set fullName(value) {
    console.log("value", value);
    console.log("this--->", this);
    [this.name, this.lastname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.lastname}`;
  },
};

let actor = {
  age: 38,
  __proto__: person,
};

actor.name = "Ranveer Singh";
console.log(actor);
console.log(person);

// Abstraction

// Constructor function - is equal to a class in es6
function Employee(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  let bonus = 1000;
  this.finalSalary = 0;

  calculateSalary = () => {
    return this.salary + bonus;
  };

  this.calculateFinalSalary = () => {
    this.finalSalary = this.salary + bonus + 1000;
  };

  this.printEmployeeDetails = function () {
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Salary: ${calculateSalary()}`
    );
  };
}

// const employee = new Employee("John", 25, 50000);
// console.log(employee);
// employee.printEmployeeDetails();

// Encapsulation

class Student {
  // ES2022
  // truly private
  #name = "";
  #age = 0;
  #marks = 0;
  constructor(name, age, marks) {
    this.#name = name;
    this.#age = age;
    this.#marks = marks;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    // if (name !== "Doe") {
    //   this._name = name;
    // }
    this.#name = name;
  }
}
/**
 * const student = new Student("John", 25, 90);
student.name = "Doe";
console.log(student.#name);
 */

// Polymorphism

// Mehthod overloading and method overriding

class Shape {
  // Mehthod overloading
  // draw(param1, param2) {
  //   if (param1 && param2) {
  //     // Do something
  //     console.log("Drawing a shape with 2 parameters");
  //   } else if (param1 && !param2) {
  //     console.log("Drawing a shape with 1 parameter");
  //   }
  //   console.log(arguments.length);
  //   console.log("Drawing a shape");
  // }

  draw() {
    console.log("Drawing a shape");
  }
}

const shape = new Shape();
shape.draw();

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a rectangle");
  }
}

const rectangle = new Rectangle();
rectangle.draw();
