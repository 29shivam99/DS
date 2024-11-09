// CLASSES

//class expression

// const Person1 = class {

// }

// class declaration

class MyPerson {
  constructor(fname, DOB) {
    // instance members
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

// another way to create static method
MyPerson.bye = function () {
  console.log(this);
  console.log('bye!');
};

const ajay = new MyPerson('ajay', '24');
console.log(ajay);
console.log(MyPerson);
ajay.age = 20;
console.log(ajay.age);

console.log(
  ajay.hasOwnProperty('fname'), // true
  ajay.hasOwnProperty('DOB'), // t
  ajay.hasOwnProperty('hey'), //f
  ajay.hasOwnProperty('age'),//f
  ajay.hasOwnProperty('bye') //f
);

console.log(ajay.__proto__ === MyPerson.prototype);
console.log(ajay.__proto__, typeof ajay.__proto__);
console.log(ajay.__proto__.constructor);

// console.log(ajay.hey()); //error since static method can only be called from class and not object
console.log(MyPerson.hey());
// console.log(ajay.bye()); //error since static method can only be called from class and not object
MyPerson.bye();


//!notes- 
//classes are not hoisted
//they are first class citizens i.e we can pass them in function arguments and can be returned from fn
// classes are executed in strict mode

// all objects in JS can have getters and setters

// lets have a normal object and use get and set there

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