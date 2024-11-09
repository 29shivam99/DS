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

// this is very important line. Without this we wont be able to link prototype chain
Dog.prototype = Object.create(Animal.prototype);
console.log(
  Dog.prototype === Animal.prototype,
  Dog.prototype == Animal.prototype
);

console.log(Dog.prototype);
console.log(Animal.prototype);
// below is wrong way to set up the chain-
// Directly setting Dog.prototype = Animal.prototype; will not properly set up the prototype chain for inheritance. Here's why:

// Shared Prototype Object: If you set Dog.prototype directly to Animal.prototype, both Dog and Animal will share the same prototype object. Any changes made to Dog.prototype will also affect Animal.prototype, which can lead to unintended side effects. This is because both Dog.prototype and Animal.prototype will point to the same object in memory.

// Loss of Unique Methods: If you add methods to Dog.prototype, they will also be added to Animal.prototype, and vice versa. This can cause issues if Dog and Animal are supposed to have different methods or behaviors.

// Constructor Property: The constructor property on the prototype object will be incorrect. After setting Dog.prototype = Animal.prototype;, the constructor property on Dog.prototype will point to Animal, not Dog. This can lead to confusion and errors in the code.
// Dog.prototype = Animal.prototype;
// console.log(Dog.prototype === Animal.prototype);

// ! this line we can add else Dog.prototype.constructor will not have anything

Dog.prototype.constructor = Dog;

Dog.prototype.createSound = () => {
  console.log(`The sound is ${this.sound}`);
};

let tyson = new Dog('German Shepherd', 8, 'Bark');
console.log(tyson); 
console.log(tyson.__proto__ === Dog.prototype); // true
console.log(tyson.__proto__); // object 
console.log(typeof tyson.__proto__); // object
console.log(Object.getPrototypeOf(tyson)); // object
console.log(tyson.__proto__.__proto__ === Animal.prototype); // true
console.log(tyson.__proto__.constructor); // Animal constructor
console.log(Animal.prototype.constructor); // Animal constructor
console.log(Dog.prototype === Animal.prototype); // false
tyson.showSpecies();

//! remember that if u add a method in child that is also in the parent then child ka object call krega wo method to child wala hi call hoga, so basically one which comes first in protype chain that one will be used.