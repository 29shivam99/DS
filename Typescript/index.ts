// tuples

let myTuple: [string, number] = ["hello", 10];
//console.log(myTuple);
myTuple = ["no", 1];

// it is mutable
myTuple[0] = "ok";

//console.log(myTuple);
// even though the tuple defined above is of type [string, number] still we can push anything any number of time.
myTuple.push(11212);

console.log(myTuple);

// but assigning a different type is not allowed
//myTuple=['asas', 1,2];
//myTuple=[1, 'abcd'];

let myOptionalTuple: [string, number?] = ["hello", undefined];
// or
myOptionalTuple = ["hi"];
// or
myOptionalTuple = ["ok", 1];
console.log(myOptionalTuple);

////////////////////// ENUMS /////////////////////

enum directions {
  top = "top side",
  bottom = "bottom side",
  left = "left side",
  right = "right side",
}

let direction: directions = directions.top;
direction = directions.top;
console.log(direction);

console.log(directions.top);
console.log(directions["top"]);

// toString and String

let str = "shivam";
if (str.toString() === "shivam") {
  console.log("yes");
}

if (String(str) === "shivam") {
  console.log("yes");
}

let person = {
  name: "shivam",
  age: 24,
};

// const and literal types

const myConst = "hello";
console.log(myConst);

let statuses: "success" | "error" | "pending";
statuses = "success"; // valid
statuses = "error"; // valid
statuses = "pending"; // valid
// status = "other"; // Error: Type '"other"' is not assignable to type '"success" | "error" | "pending"'
console.log(typeof statuses); // string

/////////////// parseFloat vs parseInt vs + ////////////////

let num = "12.99abcd";
console.log(parseInt(num));
console.log(parseFloat(num));
console.log(+num);

/////////////////// types in TS ////////////////

type combines = string | number;

let combinesNum: combines = 12;
console.log(typeof combinesNum);

type personType =
  | {
      name: string;
      age: number;
    }
  | string
  | number;

let person2: personType = {
  name: "shivam",
  age: 23,
};

let namePerson: personType = "shivam";
let age: personType = 23;

//////////// Functions returns types and void - quite different from the JS return types ////////

// mostly we use void for functions that don't return anything

function add(a: number, b: number) {
  return;
}

console.log(add(1, 2)); // undefined

function addAndReturnNumber(a: number, b: number) {
  return a + b;
}

console.log(addAndReturnNumber(1, 2)); // 3

//if fucntion has no return statement u cant use undefined to return but u can use void

// function addAndReturnUndefined(a: number, b: number): undefined{
//   console.log('hello');
// } //error

function addAndReturnVoid(a: number, b: number): void {
  console.log("hello");
}

console.log(addAndReturnVoid(1, 2)); // undefined

// if function has a return statement u can use undefined to return nothing also u can use void in that case

function addAndReturnNothing1(a: number, b: number): undefined {
  return;
}

function addAndReturnNothing2(a: number, b: number): void {
  return;
}

// interface -> used for only objects

interface Person {
  name: string | undefined;
  age?: number;
  hobbies: string[];
}

let person4: Person = {
  name: "shivam",
  age: 24,
  hobbies: ["reading", "coding"],
};

let person5: Person = {
  name: "shivam",
  hobbies: ["ksdjkjsnsdf"],
};

// let person6: Person = {
//   // name: 'shivam',
//   hobbies: ['ksdjkjsnsdf']
// }

interface age {
  age: number;
}

let myAge: age = {
  age: 24,
};

//
let myName = "shivam";
console.log(<string>myName.toUpperCase());

// casting //

let num2 = 4;

//console.log(<string>num2.length);

// forced casting

// this will not give compile error but will give undefined as output
console.log((num2 as unknown as string).length);

////////////////////////////// Function type in TS //////////////////////////////////////

function printMyName(name: string): void {
  console.log(name);
}

let printName = printMyName;
printName("shivam");

// but this is one issue here

// printName = 4;
// this gave a compile error

// better to use the type Function like below

let printNameForMe: Function = printMyName;
printNameForMe("shivam");

// but issue is we can not assign any function in printNameForMe

printNameForMe = addAndReturnNumber;
console.log("What is below's OP");
console.log(printNameForMe(1, 2)); // 3 bcoz now printNameForMe refers to the fn addAndReturnNumber

// to make it more specific we can do like

let specificPrintNameForMe: (s: string) => void;
// let specificPrintNameForMe : (s) => void; // error u need to specifiy type of argument
specificPrintNameForMe = printMyName; // fine
//specificPrintNameForMe = addAndReturnNumber // issue

//////////////////////// VVVVV IMPORTANT ////////////////////////
///////////////////// Passing callbacks in a function //////////////////////

function handleAndAdd(n1: number, n2: number, cb: (val: number) => void): void {
  console.log("in handleAndAdd");
  cb(n1 + n2);
}

function newCb(val: number) {
  console.log("");
}

handleAndAdd(12, 44, newCb);

handleAndAdd(12, 44, (val) => console.log(val));

function callBack(num: number): number {
  console.log(num);
  return 12;
}

handleAndAdd(12, 44, callBack);

/////////////////////////////

function handleAndAdd2(
  n1: number,
  n2: number,
  cb: (val: number) => number
): void {
  console.log("in handleAndAdd");
  cb(n1 + n2);
}

// handleAndAdd2(12,44, newCb); // gives error since cb parameter in handleAndAdd2 has number as return type but here newCb has void as return type

// handleAndAdd2(12,44, (val)=>console.log(val)); // gives error since cb parameter in handleAndAdd2 has number as return type but here newCb has void as return type

handleAndAdd2(12, 44, callBack);

///////////////////////////////////////

let passNumInTimeout = 12;

setTimeout((passNumInTimeout) => {
  console.log(passNumInTimeout);
}, 5000);

/////////////// UNKNOWN TYPE //////////////////////////////
// if we dont know the type of variable we can use unknown type it is mote strict than any.

// we can assign any into any other type
// we can't assign unknown into any other type
// we can assign any into unknown
// we can assign unknown into any
// we can assign unknown into unknown
// we can assign any to any

let myNum = 12;
// myNum = 'shivam'; / /error

let myString: string = "shivam";
//myString = 12; //error

let anyNum: any;
anyNum = 12;
//anyNum = 'shivam'; // no errors

let unknownNum: unknown;
unknownNum = 12;
unknownNum = "shivam"; // no errors just like any

// anyNum = unknownNum; // fine
// unknownNum = anyNum; // fine

myString = anyNum; // fine but this is quite strange
console.log("see", myString);

let myStr: string = anyNum; // fine

let newString: string = "shivamBhai";

console.log(typeof unknownNum);

//newString = unknownNum; // error even though the value in unkownNum is a string

if (typeof unknownNum == "string") newString = unknownNum; // fine now once we explicitly made the check

// myNum = myString; // error
// myString = myNum; // error

//myString = unknownNum // errors

//////////////////////////// NEVER Type ///////////////////////////

function generateError(message: string, code: number) {
  throw { message: message, code: code };
}

function generateErrorFromErrorClass(message: string, code: number) {
  throw new Error();
}

//console.log(generateError(`something went wrong`, 401));
// console.log(generateErrorFromErrorClass(`something went wrong`, 401));

////////////////////// CLASSES //////////////////////////////////////

class Person1 {
  readonly name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayName(this: Person1) {
    console.log("hi", this.name);
  }
}

let object = new Person1("shivam", 23);
object.displayName();
let object2 = { fn: object.displayName };
//object2.fn();

/////////////////////////////// Shorthand ///////////////////

class Person2 {
  private salary: number;

  // below is the wrong shorthand
  // constructor(name: string, age: number){
  //   this.name = name;
  //   this.age = age;
  // }

  // below is the correct shorthand
  constructor(private name: string, private age: number) {
    this.name = name; // u can even omit this
    this.age = age; // u can even omit this
    this.salary = 1;
  }

  private displayName(this: Person1) {
    console.log("hi", this.name);
  }
}

// always remember that private, public, readonly etc exists only in the TS not JS..

////////////////////// Inheritence /////////////////

class Boy extends Person1 {}

let boy2 = new Boy("shivam", 23);
// even though private props are not inherited but still we can see boy has name and age bcoz boy does not have its own constructor and hence using constructor of parent and as a result the constructor props are generated for boy also
console.log(boy2);

boy2.displayName;
