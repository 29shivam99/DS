// OOPS with classes

class Person {
  #title = "Mishra";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }

  printAgeThenGreet() {
    console.log(`${this.age}`);
    this.greet();
  }

  printData() {
    console.log(this.name, this.age);
  }
}

class Employee extends Person {
  #PF = 1000;
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }

  #getid() {
    return this.id;
  }

  func(a, b) {
    if (a && b) {
      return (a + b) * 10;
    } else if (a) {
      return a * 10;
    } else {
      return b * 10;
    }
  }
  printData() {
    console.log(this.id);
  }
}

let shivamObj = new Person("shivam", 24);
let empObj = new Employee("shivam", 24, 10011);

// console.log(empObj.#title);
// console.log(empObj.#getid());

console.log(empObj.func(1, 2));
console.log(empObj.func(1));
console.log(empObj.func(undefined, 2));

// overrrideing
empObj.printData();
shivamObj.printData();

// OOPS with function
