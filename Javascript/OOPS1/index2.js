//////? OP based ques /////////////////////////////

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a noise.");
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(this.name + " barks.");
};

const dog = new Dog("Rex");
dog.speak(); // Output?

const animal = new Animal("Generic");
animal.speak(); // Output?

console.log(dog.__proto__ === Dog.prototype); // Output?
console.log(dog.__proto__.__proto__ === Animal.prototype); // Output?
console.log(dog.__proto__.__proto__.__proto__ === Object.prototype); // Output?

class Shape {
  constructor(name) {
    this.name = name;
  }

  get description() {
    return `A shape named ${this.name}`;
  }

  set description(value) {
    this.name = value;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    throw new Error("Cannot set area directly");
  }
}

const rect = new Rectangle("MyRectangle", 5, 10);
console.log(rect.description); // Output?
console.log(rect.area); // Output?

rect.description = "NewRectangle";
console.log(rect.description); // Output?

try {
  rect.area = 200;
} catch (e) {
  console.log(e.message); // Output?
}

//////////////////////////////! Inheritance in Objects ////////////////////////////

const parent = {
  greet() {
    console.log("Hello from parent!");
  },
};

const child = Object.create(parent);
console.log(child);
console.log(child.__proto__);

child.greet(); // Hello from parent!
parent.greet(); // Hello from parent!
child.greet = function () {
  console.log("new greet");
};
child.greet(); // new greet
parent.greet(); // Hello from parent! (changes done in child wont be reflected in the parent since we created child using the create )

console.log(child.__proto__ === parent); // true

console.log(child == parent); // false
console.log(child.__proto__ == child); // false

console.log("child", child);
console.log("child proto", child.__proto__);
console.log("parent", parent);
console.log("child prototype", child.prototype); // undefined
console.log("parent prototype", parent.prototype); // undefined

////////////////////////////////////////////////////

const CanFly = {
  fly() {
    console.log(this.name + " is flying.");
  },
};

const CanSwim = {
  swim() {
    console.log(this.name + " is swimming.");
  },
};

function MyAnimal(name) {
  this.name = name;
}

// Using Object.assign to mix in capabilities
Object.assign(MyAnimal.prototype, CanFly, CanSwim);

const bird = new MyAnimal("Sparrow");
console.log(bird);
bird.fly(); // Sparrow is flying.

const fish = new MyAnimal("Goldfish");
console.log(bird);
fish.swim(); // Goldfish is swimming.

/////////////

const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
};

const me = Object.create(person, {
  name: {
    value: "Matthew",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  isHuman: {
    value: true,
    writable: false,
    enumerable: true,
    configurable: true,
  },
});

me.printIntroduction(); // "My name is Matthew. Am I human? true"

////////////////////////////////////////////////////////////////////

function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("some issue");
    }, 2000);
  });
}

fn()
  .then((val) => {
    console.log(val);
  })
  .then((c) => {
    console.log(c);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  })
  .catch((errr) => {
    console.log(errr);
  });

/////////////////////////////////////////

function fnOuter() {
  let fnA = 1;
  return function fnInner() {
    console.log(fnA);
  };
}

const innerFunction = fnOuter();
console.log("skajijs");

////////////////////////////////////////////////////////////////////////////////
