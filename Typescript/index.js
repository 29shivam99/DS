// tuples
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var myTuple = ["hello", 10];
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
var myOptionalTuple = ["hello", undefined];
// or
myOptionalTuple = ["hi"];
// or
myOptionalTuple = ["ok", 1];
console.log(myOptionalTuple);
////////////////////// ENUMS /////////////////////
var directions;
(function (directions) {
    directions["top"] = "top side";
    directions["bottom"] = "bottom side";
    directions["left"] = "left side";
    directions["right"] = "right side";
})(directions || (directions = {}));
var direction = directions.top;
direction = directions.top;
console.log(direction);
console.log(directions.top);
console.log(directions["top"]);
// toString and String
var str = "shivam";
if (str.toString() === "shivam") {
    console.log("yes");
}
if (String(str) === "shivam") {
    console.log("yes");
}
var person = {
    name: "shivam",
    age: 24,
};
// const and literal types
var myConst = "hello";
console.log(myConst);
var statuses;
statuses = "success"; // valid
statuses = "error"; // valid
statuses = "pending"; // valid
// status = "other"; // Error: Type '"other"' is not assignable to type '"success" | "error" | "pending"'
console.log(typeof statuses); // string
/////////////// parseFloat vs parseInt vs + ////////////////
var num = "12.99abcd";
console.log(parseInt(num));
console.log(parseFloat(num));
console.log(+num);
var combinesNum = 12;
console.log(typeof combinesNum);
var person2 = {
    name: "shivam",
    age: 23,
};
var namePerson = "shivam";
var age = 23;
//////////// Functions returns types and void - quite different from the JS return types ////////
// mostly we use void for functions that don't return anything
function add(a, b) {
    return;
}
console.log(add(1, 2)); // undefined
function addAndReturnNumber(a, b) {
    return a + b;
}
console.log(addAndReturnNumber(1, 2)); // 3
//if fucntion has no return statement u cant use undefined to return but u can use void
// function addAndReturnUndefined(a: number, b: number): undefined{
//   console.log('hello');
// } //error
function addAndReturnVoid(a, b) {
    console.log("hello");
}
console.log(addAndReturnVoid(1, 2)); // undefined
// if function has a return statement u can use undefined to return nothing also u can use void in that case
function addAndReturnNothing1(a, b) {
    return;
}
function addAndReturnNothing2(a, b) {
    return;
}
var myAge = {
    age: 24,
};
//
var myName = "shivam";
console.log(myName.toUpperCase());
// casting //
var num2 = 4;
//console.log(<string>num2.length);
// forced casting
// this will not give compile error but will give undefined as output
console.log(num2.length);
////////////////////////////// Function type in TS //////////////////////////////////////
function printMyName(name) {
    console.log(name);
}
var printName = printMyName;
printName("shivam");
// but this is one issue here
// printName = 4;
// this gave a compile error
// better to use the type Function like below
var printNameForMe = printMyName;
printNameForMe("shivam");
// but issue is we can not assign any function in printNameForMe
printNameForMe = addAndReturnNumber;
console.log("What is below's OP");
console.log(printNameForMe(1, 2)); // 3 bcoz now printNameForMe refers to the fn addAndReturnNumber
// to make it more specific we can do like
var specificPrintNameForMe;
// let specificPrintNameForMe : (s) => void; // error u need to specifiy type of argument
specificPrintNameForMe = printMyName; // fine
//specificPrintNameForMe = addAndReturnNumber // issue
//////////////////////// VVVVV IMPORTANT ////////////////////////
///////////////////// Passing callbacks in a function //////////////////////
function handleAndAdd(n1, n2, cb) {
    console.log("in handleAndAdd");
    cb(n1 + n2);
}
function newCb(val) {
    console.log("");
}
handleAndAdd(12, 44, newCb);
handleAndAdd(12, 44, function (val) { return console.log(val); });
function callBack(num) {
    console.log(num);
    return 12;
}
handleAndAdd(12, 44, callBack);
/////////////////////////////
function handleAndAdd2(n1, n2, cb) {
    console.log("in handleAndAdd");
    cb(n1 + n2);
}
// handleAndAdd2(12,44, newCb); // gives error since cb parameter in handleAndAdd2 has number as return type but here newCb has void as return type
// handleAndAdd2(12,44, (val)=>console.log(val)); // gives error since cb parameter in handleAndAdd2 has number as return type but here newCb has void as return type
handleAndAdd2(12, 44, callBack);
///////////////////////////////////////
var passNumInTimeout = 12;
setTimeout(function (passNumInTimeout) {
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
var myNum = 12;
// myNum = 'shivam'; / /error
var myString = "shivam";
//myString = 12; //error
var anyNum;
anyNum = 12;
//anyNum = 'shivam'; // no errors
var unknownNum;
unknownNum = 12;
unknownNum = "shivam"; // no errors just like any
// anyNum = unknownNum; // fine
// unknownNum = anyNum; // fine
myString = anyNum; // fine but this is quite strange
console.log("see", myString);
var myStr = anyNum; // fine
var newString = "shivamBhai";
console.log(typeof unknownNum);
//newString = unknownNum; // error even though the value in unkownNum is a string
if (typeof unknownNum == "string")
    newString = unknownNum; // fine now once we explicitly made the check
// myNum = myString; // error
// myString = myNum; // error
//myString = unknownNum // errors
//////////////////////////// NEVER Type ///////////////////////////
function generateError(message, code) {
    throw { message: message, code: code };
}
function generateErrorFromErrorClass(message, code) {
    throw new Error();
}
//console.log(generateError(`something went wrong`, 401));
// console.log(generateErrorFromErrorClass(`something went wrong`, 401));
////////////////////// CLASSES //////////////////////////////////////
var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.displayName = function () {
        console.log("hi", this.name);
    };
    return Person1;
}());
var object = new Person1("shivam", 23);
object.displayName();
var object2 = { fn: object.displayName };
//object2.fn();
/////////////////////////////// Shorthand ///////////////////
var Person2 = /** @class */ (function () {
    // below is the wrong shorthand
    // constructor(name: string, age: number){
    //   this.name = name;
    //   this.age = age;
    // }
    // below is the correct shorthand
    function Person2(name, age) {
        this.name = name;
        this.age = age;
        this.name = name; // u can even omit this
        this.age = age; // u can even omit this
        this.salary = 1;
    }
    Person2.prototype.displayName = function () {
        console.log("hi", this.name);
    };
    return Person2;
}());
// always remember that private, public, readonly etc exists only in the TS not JS..
////////////////////// Inheritence /////////////////
var Boy = /** @class */ (function (_super) {
    __extends(Boy, _super);
    function Boy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Boy;
}(Person1));
var boy2 = new Boy("shivam", 23);
// even though private props are not inherited but still we can see boy has name and age bcoz boy does not have its own constructor and hence using constructor of parent and as a result the constructor props are generated for boy also
console.log(boy2);
boy2.displayName;
