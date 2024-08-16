/**
 * We use classes to create objects in OOPs
 */
// Inheritance
class Person {
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }

  /**
   * private name : string = ""
   */

  get name() {
    return this._name;
  }

  /**
   * public talk(): void {
   * console.log("Hello, I am a person");
   * }
   */

  talk() {
    console.log("Hello, I am a person");
  }
}

// const person = new Person("John", 30);
// console.log(person);

// Syntactic sugar

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    console.log("I am teaching");
  }
}

console.log(new Teacher("John", 30, "Math"));

/**
 * protoypal pattern of doing inheritance
 */

function PersonProto(name, age) {
  this.name = name;
  this.age = age;
}

PersonProto.prototype.talk = function () {
  console.log("Hello, I am a person");
};

const person1 = new PersonProto("John", 30);

function TeacherProto(name, age, subject) {
  PersonProto.call(this, name, age);
  this.subject = subject;
}

TeacherProto.prototype = Object.create(PersonProto.prototype);

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

/**
 * __proto__ is a getter and a setter, not the actual value, what is the actual value? [[Prototype]]
 * prototype
 * Object.getPropertyOf()
 * Object.setPropertyOf()
 */

const person = {
  firstName: "Person",
  lastName: "name",

  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const user = {
  name: "User",
  isUser: true,
  __proto__: person,
};

user.fullName = "User Name"; // rabbit.eats, its just a function, setters and getters

console.log(user.fullName);
console.log(person.fullName);

person.fullName = "Person1 Name";
console.log(person.fullName);

// Abstraction

// Encapsulation

// Polymorphism
