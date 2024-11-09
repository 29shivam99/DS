// Inheritance via Object.create

let Personproto = {
  age: 24,
  calcAge() {
    console.log('Age is ' + this.age);
  },
};

const rohit = Object.create(Personproto);
console.log(rohit);
rohit.calcAge();

const Studentproto = Object.create(Personproto);
console.log(Studentproto);
const shivam = Object.create(Studentproto);


////////////////////////////////! LETS SEE HOW OBJECT.CREATE WORKS //////////////////////////

let myObj = {
  a: 12,
  b: 'skjlamsa',
  printHello() {
    console.log('Hello');
  },
};

let myObj2 = {};
console.log(myObj2.prototype, myObj2.__proto__ === Object.prototype);
myObj2.prototype = Object.create(myObj);
// Object.create sets the LHS = RHS k argument k protorype
console.log(myObj2.prototype);