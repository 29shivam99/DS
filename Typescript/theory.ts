// why TS

// for static checking
// avoids runtine errorrs
// TS code is transpiled into JS code
// it is a layer on JS
// it is a development tool in the end it compiles to JS
// helps to write better code

/////////////////////////////////

// types- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

// number
// string
// boolean
// null
// undefined
// void
// object
// Array
// tuples
// Any
// never
// unknown

//! literal types

let x: "hello" = "hello"; // x is infered as "hello" not string
// OK
x = "hello";
// ...
// x = "howdy";
// Type '"howdy"' is not assignable to type '"hello"'.

// It’s not much use to have a variable that can only have one value!

// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre");
// Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

//! Discriminated union types

//! Union Types

// Union Types -
// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start combining them in interesting ways.

// Defining a Union Type
// The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

function printId(
  num1: number | string,
  num2: number | string
): number | string {
  // let result = num1 + num2; //error - Operator '+' cannot be applied to types 'string | number' and 'string | number'
  let result: number | string;
  if (typeof num1 === "number" && typeof num2 === "number") {
    result = num1 + num2;
  } else {
    result = num1.toString() + num2.toString();
  }

  return result;
}
// OK
printId(101, "asas");
// OK
printId("202", 12);

// Error
// printId({ myID: 22342 }, 12);
// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.

//////? not a good practice to use 'any' - ANY TURNS OFF TYPE CHECKING

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj;

let hero: string;

function getHero() {
  return "thor";
}

hero = getHero();

export {};

//////////! intersection ///////////////

////////////! data structures - object, record, tuple, array

//! object

const person = {
  name: "Rahul Raj",
};

console.log(typeof person);
// console.log(person.age); // error

const student: {
  name: string;
  rollNum: number;
} = {
  name: "Rahul Raj",
  rollNum: 28,
};

//! Array

let hobbiesArr: string[];
hobbiesArr = ["coding"];

//! tuple

let role: [string, number, string];

role = ["home", 798, "MP"];
role[0] = "flat"; // u can assign any value at index as long as its of type defined in tuple
// role[0] = 1; // error

//! enum

enum Role {
  ADMIN, //0
  READ_ONLY, //1
  AUTHOR, //2
}

enum Role2 {
  ADMIN = 5, //5
  READ_ONLY, //6
  AUTHOR, // 7
}

enum Role3 {
  ADMIN = 5, //5
  READ_ONLY = 9, //9
  AUTHOR = 99, // 99
}

enum Role4 {
  ADMIN = "admin", //admin
  READ_ONLY = 24, //24
  AUTHOR = "author", // author
}

console.log(Role.ADMIN); // 0

////////// ! subtyping

let hello: "hello" = "hello";

let str1: string = "apple";

////////////////////////// ! type alias / custom type

type Combinable = "hello" | number;

function myFunc(val: Combinable) {
  console.log(val);
}

type User =
  | {
      name: string;
      age: number;
      addres: string;
      identifier: Combinable;
    }
  | string;

let u1: User = {
  name: "rahul raj",
  age: 30,
  addres: "Karnataka",
  identifier: "hello",
};

u1 = "Rahul Raj"; // since User type was union of that object and string hence we can reassign like this

//////////! Functions ///////////

// its a good idea to let typescript infer the return type, unless very important

// void return type -

// if func does not return somethign then it is inferred void or u can write void as return type but u can not write undefiend( though console log gives undefiend) wbich is weird
function funcPrint(num1: number) {
  console.log(num1);
}

// if u wrtitng undefine as return type then add retiurn statemnet
function funcPrint2(num1: number): undefined {
  console.log(num1);
  return;
}

funcPrint(22);

console.log(funcPrint(2)); // wil be undefined not void

//////////////! Function as a type
//====================
// let myNewFunc; // any type

// myNewFunc = funcPrint;
// myNewFunc = 5; // any type hence this is possble

//=====================
// let myNewFunc = funcPrint; // type inferred
// myNewFunc = 5;
//=====================

let myNewFunc: Function;
myNewFunc = funcPrint;
myNewFunc = myFunc; // Koi Function  b assign kr do chalega

//!======================= THIS IS HOW U SHOULD DO ===========================

let myNewFunc2: (a: number, b: number) => void;
let myNewFunc3: () => number;
//====================================================================

let myNewFunc4 = function (a: number, b: number, cb: (a: number) => void) {
  console.log(a, b);
  let val = cb(a + b);
  // return val + 1; error
  return val;
};

let newVal = myNewFunc4(1, 5, (val) => {
  return val * val;
});

console.log(newVal);

////////////////////////////////! unknown -> can store any value. A little more restrictive than any

let newVar: any;
let userName: string;

newVar = null;
newVar = undefined;
newVar = "Rahul raj";
newVar = 1;

// newVar = userName; // error

////////////////////////////////! never -> a function that has never return type does not return anything not even undefined /

// infered type is also never, even if u dont specify it.
let throwError = function (): never {
  throw new Error("some error occurred!");
};

console.log(throwError);

//////////////! typeof runs at runtime hence it always gives us the JS types and not the TS types like =>

type Human = {
  name: string;
  age: number;
};

let h1: Human = {
  name: "Rahul raj",
  age: 30,
};

console.log(typeof h1); // will be object and not Human

////////////////////////////! type casting ///////////////////////////////

let inp = document.querySelector(".my-input")! as HTMLInputElement;
let inp2 = <HTMLInputElement>document.querySelector(".my-input")!;

console.log(inp.value, inp2.value);

//////////////////////////////!  what is ! sign in the  ////////////////////

let inp3 = document.querySelector(".my-input")!; // here !  will tell that the expression can not be null

////////////////////////////////! index properties /////////////////////////

type ErrorsList = {
  id: string; // id must have same type as others that is string
  //age: number // error all must be string
  [prop: string]: string;
};

interface ErrorsList2 {
  id: string; // id must have same type as others that is string
  //age: number // error all must be string
  [prop: string]: string;
}

let errorBag2: ErrorsList2 = {
  id: "12",
  abcd: "adadd",
  1: "asasas", // though prop must be string but 1 as a number is valid bcoz it can be converted to strig
};

let errorBag: ErrorsList = {
  id: "12",
  abcd: "adadd",
  1: "asasas", // though prop must be string but 1 as a number is valid bcoz it can be converted to strig
};
