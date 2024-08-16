/*
Two types of execution contexts in JavaScript: Global Execution Context (GEC) and Function Execution Context (FEC)

Global Execution Context (GEC): 
Created when a script file is received, it serves as the default Execution Context for code outside of functions. Each JavaScript file has only one GEC.

Function Execution Context (FEC):
 When a function is called, the JavaScript engine creates a Function Execution Context within the GEC to execute the code within that function. Multiple FECs can exist during script runtime, as each function call has its own FEC.
 */

/**
To comprehend the creation of execution contexts, we observe a two-phase process: the Creation Phase and the Execution Phase.

Creation Phase: During this initial phase, the JavaScript engine sets up the necessary components for the execution context.

Execution Phase: Once the creation phase is complete, the execution phase begins. Here, the JavaScript engine executes the code line by line within the execution context. It assigns values to variables, calls functions, and performs other operations specified in the code.
  */

// imprtant points for Creation/compilation phase-

//1. It runs for all the lines irespective of whthere that line will be executed in execution phase or not.
// Ex,
// console.log(num); // OP undefined
// if (0) { var num = 2 }
// though this line inside if wont run in execution phase

//2. If a variable name is used for declaring a variable/function both then fn is given priority

// console.log(num);
// var num = 12;
// var num = function () {
//   console.log("Hi");
// };

//3. Function expressions are treated like variables and hence in creation phase they hold undefined but fn declarations are stored so that the reference variable for ir in variable env of EC and the corresponding code of fn in the heap. So in creation phase the fn code of fn declaration is available.

//Hence-

// printName(); // will print Shiva
// console.log(printName); // will print the entire printName fn
// function printName() {
//   console.log("Shiva");
// }
// printName1(); // equivalent of doing undefined() so will get error like printName1 is not a fn
// console.log(printName1); // undefined
// var printName1 = function () {
//   console.log("inside 1");
// }
