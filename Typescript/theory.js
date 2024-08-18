// why TS
// for static checking
// avoids runtine errorrs
// TS code is transpiled into JS code
// it is a layer on JS
// it is a development tool in the end it compiles to JS
// helps to write better code
/////////////////////////////////
// types- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
// number - (no int or float) - 2333, 2323.45
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
//Union Types
// Union Types -
// TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators. Now that we know how to write a few types, it’s time to start combining them in interesting ways.
// Defining a Union Type
// The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
function printId(id) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });
// Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
var obj1 = { name: "shivam", age: 24 };
//console.log(obj1.address); // gives error here also
var num1 = 3; 
console.log("3" + num1);
var a = 2;

export {};
