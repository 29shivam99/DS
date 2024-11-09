// Constructor Function begins=>
const Person = function (firstName, lastName) {
  //instance properties
  this.fname = firstName;
  this.lname = lastName;

  // never do this, it will create 100 copies if u create 100 functions, so use prototype property to optimise.
  // Also calcAge will be added on the function and not on the prototype of the function
  this.calcAge = function () {
    console.log('age');
  };
  console.log(this); // The value of this inside the constructor function refers to the new object instance being created.
};

let boy = new Person('shivam', 'mishra');
console.log(boy);

// all properteis defined in the prototype prop of a constructor fucntion will be present in the objects of Person, so one copy will exist but will be available to all objects
Person.prototype.getName = function () {
  return this.fname; // mind u, in normal function the value of this will be caller of the function. Here getName is normal function ( non arrow function) at the end of the day. Wo alag baat hai ki u might say ki it is attached to the Person.prototype, hai to getName ek function hi
};

console.log(boy.getName());

console.log(typeof Person.prototype); // object

// __proto__ => called as prototype of xyz object

console.log(boy.__proto__); // this will have same output as console.log(Person.prototype)

console.log(boy.__proto__ === Person.prototype); // true

console.log(boy.__proto__.constructor); // to get the constructor of an object

//!Imp line => Person.prototype is not the prototype of Person rather it is the prototype of all objects which are going to be created from Person constrcutor fn

console.log(Person.prototype.isPrototypeOf(boy));
console.log(Person.prototype.isPrototypeOf(Person));

console.log(boy.hasOwnProperty('fname'), boy.hasOwnProperty('calcAge'));
console.log(boy.hasOwnProperty('getName'));

console.log(Person.prototype.__proto__);
console.log(Person.__proto__);

// all objects in JS has a prototype, Object.prototype is top of prototype chain and its prototype is null hence Object.prototype.__proto__ is null

console.log(Object.prototype.__proto__); // null
console.log(Object.__proto__);