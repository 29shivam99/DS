"use strict";
// why TS
Object.defineProperty(exports, "__esModule", { value: true });
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
var x = "hello"; // x is infered as "hello" not string
// OK
x = "hello";
// ...
// x = "howdy";
// Type '"howdy"' is not assignable to type '"hello"'.
// It’s not much use to have a variable that can only have one value!
// But by combining literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:
function printText(s, alignment) {
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
function printId(num1, num2) {
    // let result = num1 + num2; //error - Operator '+' cannot be applied to types 'string | number' and 'string | number'
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
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
var obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
var n = obj;
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
//////////! intersection ///////////////
////////////! data structures - object, record, tuple, array
//! object
var person = {
    name: "Rahul Raj",
};
console.log(typeof person);
// console.log(person.age); // error
var student = {
    name: "Rahul Raj",
    rollNum: 28,
};
//! Array
var hobbiesArr;
hobbiesArr = ["coding"];
//! tuple
var role;
role = ["home", 798, "MP"];
role[0] = "flat"; // u can assign any value at index as long as its of type defined in tuple
// role[0] = 1; // error
//! enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var Role2;
(function (Role2) {
    Role2[Role2["ADMIN"] = 5] = "ADMIN";
    Role2[Role2["READ_ONLY"] = 6] = "READ_ONLY";
    Role2[Role2["AUTHOR"] = 7] = "AUTHOR";
})(Role2 || (Role2 = {}));
var Role3;
(function (Role3) {
    Role3[Role3["ADMIN"] = 5] = "ADMIN";
    Role3[Role3["READ_ONLY"] = 9] = "READ_ONLY";
    Role3[Role3["AUTHOR"] = 99] = "AUTHOR";
})(Role3 || (Role3 = {}));
var Role4;
(function (Role4) {
    Role4["ADMIN"] = "admin";
    Role4[Role4["READ_ONLY"] = 24] = "READ_ONLY";
    Role4["AUTHOR"] = "author";
})(Role4 || (Role4 = {}));
console.log(Role.ADMIN); // 0
////////// ! subtyping
var hello = "hello";
var str1 = "apple";
function myFunc(val) {
    console.log(val);
}
var u1 = {
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
function funcPrint(num1) {
    console.log(num1);
}
// if u wrtitng undefine as return type then add retiurn statemnet
function funcPrint2(num1) {
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
var myNewFunc;
myNewFunc = funcPrint;
myNewFunc = myFunc; // Koi Function  b assign kr do chalega
//!======================= THIS IS HOW U SHOULD DO ===========================
var myNewFunc2;
var myNewFunc3;
//====================================================================
var myNewFunc4 = function (a, b, cb) {
    console.log(a, b);
    var val = cb(a + b);
    // return val + 1; error
    return val;
};
var newVal = myNewFunc4(1, 5, function (val) {
    return val * val;
});
console.log(newVal);
////////////////////////////////! unknown -> can store any value. A little more restrictive than any
var newVar;
var userName;
newVar = null;
newVar = undefined;
newVar = "Rahul raj";
newVar = 1;
// newVar = userName; // error
////////////////////////////////! never -> a function that has never return type does not return anything not even undefined /
// infered type is also never, even if u dont specify it.
var throwError = function () {
    throw new Error("some error occurred!");
};
console.log(throwError);
var h1 = {
    name: "Rahul raj",
    age: 30,
};
console.log(typeof h1); // will be object and not Human
////////////////////////////! type casting ///////////////////////////////
var inp = document.querySelector(".my-input");
var inp2 = document.querySelector(".my-input");
console.log(inp.value, inp2.value);
//////////////////////////////!  what is ! sign in the  ////////////////////
var inp3 = document.querySelector(".my-input"); // here !  will tell that the expression can not be null
var errorBag2 = {
    id: "12",
    abcd: "adadd",
    1: "asasas", // though prop must be string but 1 as a number is valid bcoz it can be converted to strig
};
var errorBag = {
    id: "12",
    abcd: "adadd",
    1: "asasas", // though prop must be string but 1 as a number is valid bcoz it can be converted to strig
};
