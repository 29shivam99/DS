function sayHi() {
  return (() => 0)();
}

console.log(typeof sayHi());
//=============================================================================================
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

//!=============================================================================================
{
  function display() {
    var a = (b = 10);
    console.log(typeof a, b);
  }
  display();
  console.log(typeof b === "undefined");
  console.log(typeof a === "undefined");
}
//=============================================================================================
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), i * 10);
}
//=============================================================================================
var num = 8;
var num = 10;

console.log(num);

//=============================================================================================

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

// bar();
// foo();
// baz();

//!=============================================================================================

function* generatorFunction() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generatorFunction();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

//!================================================================================================

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  console.log(this);
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);

//!!!!!

let prom1 = Promise.resolve(2);
let prom2 = Promise.resolve(4);

let prom3 = Promise.reject("232");
let prom4 = Promise.resolve("5");

async function getData() {
  let data1, data2;
  data1 = await Promise.all([prom1, prom2]);

  data2 = await Promise.all([prom4, prom3]).catch((ex) => {
    console.log(ex);
  });
  return [data1, data2];
}

(async () => {
  let data = await getData();
  console.log(data);
})();

//

async function data() {
  console.log("30");

  await new Promise((res, rej) => setTimeout(res, 1000));
  console.log("40");
}
console.log("10");
data();
console.log("20");

//

function x() {
  a();
  function a() {
    console.log("m");
  }
  a();
  function a() {
    console.log("n");
  }
  a();
}
x();
