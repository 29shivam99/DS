const getCountriesData = function () {
  fetch("https://restcountries.com/v3.1/name/india")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      console.log(result);
    });
};

// getCountriesData();
// !Important
// do remember that responses that come from the fetch always have .json method and this method itself returns a prmoise

//////////! then and catch method in promise   ///////////

//* then and catch always returns a promise, does not matter if we explicitly return anything from it or not. If we return a value then it becomes the fulfillment value of the promise. And if u return a promise then it becomes the promise returned by then. And if u dont return anything then udefined will be fullfilmnet value.

//  see when we did return response.json()  so we returned a explicit promise whose reponse can be used in the next 'then'.
// but if u do -> return 45, then 45 becomes the fullfilled value of this 'then' so response in next then will be 45;
//ex- it is a great example for learning and  covers a lot of case-

const getCountriesData2 = function () {
  fetch("https://restcountries.com/v3.1/name/india")
    .then((response) => {
      console.log(response);
      return 45;
    })
    .then((result) => {
      console.log(result); //45
    })
    .then((data) => {
      console.log(data); // undefined
      return new Promise((resolve, reject) => {
        resolve("12");
      });
    })
    .then((data) => {
      console.log(data); //12
      return new Promise((resolve, reject) => {
        return reject();
      });
    }) // see once an error comes then all next then will be skipped till a catch comes and same process will follow
    .then((data) => {
      console.log(data); // skipped
    })
    .then((data) => {
      console.log(data); // skipped
    })
    .catch((err) => {
      console.log(err); // undefined
    })
    .then((data) => {
      console.log(data); // undefined
    })
    .then((data) => {
      console.log(data); // undefined
      return new Promise(); // if u return a promise that never resolves then all thens and catches after this wont be executed
    })
    .then((data) => {
      console.log(data);
    })
    .then((data) => {
      console.log(data);
    })
    .catch((data) => {
      console.log(data);
    })
    .finally((data) => {
      console.log(data); // this will be executed if promise is resolved/ rejected or not fulfilled
    });
};

// getCountriesData2();

//////// !  u havveeee to resolve/reject the promise in order to let then/catch run.

let pr = new Promise((resolve) => {});
pr.then((res) => {
  // then will not run here
  console.log(res);
});

////////// !  ERROR HANDLING IN PROMISES  ///////////

// any error be it thrown by u or directly coming from API so any sort of error will lead to rejection of the promise.

// here we will discuss about the default errors

// so there are 2 primary ways to handle the default error

// not so good- via a second callback at each 'then'
const getData = function () {
  fetch("https://restcountries.com/v3.1/name/india")
    .then(
      (response) => {
        console.log(response);
        return response.json();
      },
      (err) => alert(err)
    )
    .then(
      (result) => {
        console.log(result);
      },
      (err) => alert(err)
    );
};

// better to handle at last using catch

const getData2 = function () {
  fetch("https://restcountries.com/v3.1/name/india")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => alert(err.message));
};

// if u dont catch the error anywhere then u get uncaught error

// console.log vs console.error vs console.table vs console. ??

////////// !  IMPORTANT   ///////////

// do keep in mind that fetch function in JS gets rejected only if there is connections/internet issue else it resolves (even if 404 is there it resolves)

// here we will handle the custom errors which will be thrown by us

const getData3 = function (countryName) {
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((result) => {
      console.log(result);
      if (!result.ok) {
        throw new Error(`Country not found! ${result.status}`);
      }
    })
    .catch((err) => {
      console.log(err);
      console.log(typeof err); // object
      console.log(err.message);
      alert(err.message);
    }); // error thrown will be displayed here
};

// getData3("portugal");

// by throwing an error the promise will be rejected and will travel down the then chains and handled by catch

//////  same function as above but breaking it into functions

const getJSON = function (url, errorMessage = "Something went wrong!") {
  fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(errorMessage);
    }
    return response.JSON();
  });
};

const getData4 = function (countryName) {
  getJSON(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => {
      // do whatever u want to do with data
      console.log(response);
    })
    .catch((err) => {
      alert(err.message); // error thrown will be displayed here
    });
};

// doubt - what will happen if we do 'return' in the then/catch

//////////////////////////////!  LETS SEE EVENT LOOP IN PRACTICE ////////////////////////////

// key points

// when we write setTimeout and pass some time, this time is basically the time after which the callback passes to settimeout is added to callback que
// microtasks have priority over callback queue

// so based on above fact what is below's OP?
// console.log("start");
// setTimeout(() => {
//   console.log("cb timeout");
// }, 0);
// Promise.resolve("resolved promise 1")
//   .then((result) => console.log(result))
//   .catch((err) => alert(err));
// console.log("end");

//////////////////////////!  INSTANTLY RESOLVING/REJECTING THE PROMISE /////////////////

function fn() {
  return new Promise((resolve, reject) => {
    console.log(resolve, reject);
    resolve(1);
  });
}
fn().then((response) => {
  console.log(response); //1
});

//////////////////////////////////////////////////////////
const cbFunc = (nums) => {
  console.log(nums);
};
function fn2(cb) {
  console.log(cb);
}

function fn3() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {},
      (err) => {
        console.log(err);
      }
    );
  });
}

const myPromise = Promise.resolve("myPromise");
console.log(typeof Promise); // function (since classes are fns in JS)
console.log(typeof myPromise); // object (since it is a Promise's object)
console.log(myPromise);
console.log(myPromise instanceof Promise); // true
console.log(myPromise.__proto__ === Promise.prototype); // true
myPromise.then((response) => {
  console.log(response);
});

const anotherPromise = Promise.resolve("asmams");
console.log(myPromise === anotherPromise); // false

const anotherPromise2 = Promise.resolve(myPromise);
console.log(myPromise === anotherPromise2); // true-> see the Promise.resolve in MDN to know reason

/////////

function fn4() {
  return new Promise((resolve, reject) => {
    resolve("12121212");
  });
}

//fn4().then((response) => console.log(response));

//////////////////////////////////////

function fn5() {
  return new Promise((resolve, reject) => {
    resolve(1);
  });
}

// fn5().then((response) => {
//   console.log(typeof response);
// });

//////////////////////////////////!  ASYNC AWAIT ///////////////////////////////////

const getData5 = async function (countryName) {
  let res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  console.log(res);
  console.log(12);
  let data = await res.json();
};

// getData5("portugal");
console.log("first");

// *behind the hood await uses promises itself

//////////////////////!  callback hell (Pyramid of Doom)////////////////////

// Callback hell, also known as the "Pyramid of Doom," occurs when multiple nested callbacks are used in asynchronous programming, making the code difficult to read and maintain. This often happens in JavaScript when using callbacks for handling asynchronous tasks like reading files, making network requests, or querying a database.

////////////////// ! promise.all, promise.race, promise.allSettled static functions ///////////////////

// Promise.all waits for all the promises passed to it to resolve (or for any of them to reject). It only resolves when all the input promises have resolved, and it will resolve with an array of the resolved values in the same order as the input promises.

// If you have three promises that resolve in 12, 13, and 14 seconds respectively, Promise.all will resolve in 14 seconds, when the last promise resolves

//Promise.all will reject as soon as any of the promises in the iterable rejects. If you have three promises where two resolve in 12 and 13 seconds and one rejects in 2 seconds, Promise.all will reject in 2 seconds with the reason of the rejected promise.

// *so in a nutshell, it will wait for all to resolve, but if any rejects then it will reject at that same instant

// const promise1 = new Promise((resolve) => setTimeout(resolve, 12000, 'Result 1'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 13000, 'Result 2'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 14000, 'Result 3'));

// console.log('Starting...');

// Promise.all([promise1, promise2, promise3])
//   .then((results) => {
//     console.log('All promises resolved:', results);
//   })
//   .catch((error) => {
//     console.error('One or more promises rejected:', error);
//   });

// Output:
// Starting...
// (after 14 seconds) All promises resolved: ['Result 1', 'Result 2', 'Result 3']

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("rejected2");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 2000);
});

Promise.all([p1, p3, p2])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(
      err,
      " ********************************************************************"
    );
  });
// OP -  ********************************************************************"
//////////////////////////////////////////// * Promise.race

// Returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.

// !  If a promise resolves and reject at same time then Promise.race will see who was first in the IP array

// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("rejected2");

// Promise.race([p2, p1])
//   .then((val) => {
//     console.log(val, `@@@@@@@@@@@@@@@@@@@@@@@@@`);
//   })
//   .catch((err) => {
//     console.log(err, `*****************************`);
//   });

// Promise.race([p1, p2])
//   .then((val) => {
//     console.log(val, `@@@@@@@@@@@@@@@@@@@@@@@@@`);
//   })
//   .catch((err) => {
//     console.log(err, `*****************************`);
//   });

// ! You can use Promise.race to implement a timeout mechanism for asynchronous operations. Promise.race will resolve or reject as soon as one of the promises in the iterable settles. By including a timeout promise in the race, you can ensure that the entire operation will fail if it takes too long.

// function asyncOperation() {
//   return new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation (e.g., a network request)
//     setTimeout(resolve, 3000, "Operation completed"); // This will resolve in 3 seconds
//   });
// }

// function timeout(ms) {
//   return new Promise((_, reject) => {
//     setTimeout(() => reject(new Error("Timeout")), ms);
//   });
// }

// const TIMEOUT = 2000; // 2 seconds

// Promise.race([asyncOperation(), timeout(TIMEOUT)])
//   .then((result) => {
//     console.log(result); // This will not be reached because the timeout will occur first
//   })
//   .catch((error) => {
//     console.error(error.message); // Outputs: 'Timeout'
//   });

////////////////////////////////// * Promise.allSettled /////////////////

// Returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects describing the outcome of each promise.
// Behavior: The returned promise resolves with an array of objects, each representing the outcome of the corresponding promise in the input iterable. Each object contains status (either "fulfilled" or "rejected") and, if fulfilled, a value; if rejected, a reason

// const promise1 = Promise.resolve("one");
// const promise2 = Promise.reject("error occured");
// const promise3 = Promise.resolve("three");

// Promise.allSettled([promise1, promise3, promise2]).then((values) => {
//   values.forEach((value) => {
//     if (value.status === "fulfilled") {
//       console.log(value.value);
//     } else if (value.status === "rejected") {
//       console.log(value.reason);
//     }
//   });
// });

////////////////////////!  JSON , parse and stringify//////////////////////////////////////////////
// json are strings
// u can convert json strings to the object via JSON.parse and convert objects to JSON string via JSON.stringify

const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

const jsonObj = JSON.parse(jsonText);
console.log(typeof jsonText);
console.log(jsonObj);

console.log(jsonObj.browsers);

let obj = {
  name: "Shivam",
  age: 24,
};

let stringObj = JSON.stringify(obj);
console.log(stringObj);
console.log(typeof stringObj);

////////////////////////!  JSON vs js objects //////////////////

// JSON does not allow comments
// JSON keys are string (needs double quotes)
// JSON object property values can only be strings, numbers, true, false, null, arrays, or another JSON object. This means JSON cannot express methods or non-plain objects like Date or RegExp. JSON can not have undefined values

////////////////////// some not so famous things about objects //////////////////

//1.
const a = 12;
const b = 14;
const obj1 = { a, b };
console.log(obj1); // key value will be a: 12 and b: 14

//2. canuse same key many times
const c = { x: 1, x: 2 };
console.log(c); // {x: 2} // last value is taked ( even is strict mode)

//3. can add fns/getters/setter in object in JS
const o = {
  property: function (parameters) {},
  get property() {},
  set property(value) {},
};

//4. short way to use fns in objects
const o2 = {
  property(parameters) {},
};

//5. not necessary to add the keys at initialization itself, u can add later;

let o3 = {};
o3.name = "shivam";
console.log(o3);

// ! very important
//6. dynmically adding the keys via dot vs bracket and Computed keys
// RULE - when u add a property or get via [] it computes the variable inside [], if u pass string inside [] the it is taken as string and value wont be computed. If u use . then no computaion, whatever comes after . is treated as string.
function getName() {
  return "shivam mishra";
}

function getKey() {
  return "age";
}

function getValueofKey() {
  return 24;
}

let o4 = { [getKey()]: getValueofKey() };
let name = getName();
o4.name = "akshay"; // will add key value as name and akshay
o4[name] = "akshay"; // will add key value as computed name(which is the value of name, which is Shivam Mishra) and akshay as value of 'shivam mishra' key
console.log(o4);

//6. all keys are behind the hood converted to string even if u add them as a number

let o5 = {
  1: "almad",
  name: "shiva",
  "{ age: 24 }": "kasjasa",
};

let tmpKey = { sal: "aksas" };
o5.tmpKey = "val1";

let tmpKey2 = { sal: "aksas" };
o5[tmpKey2] = "val2";

for (let key of Object.keys(o5)) {
  console.log(typeof key, key); // string
}

//////////////////! SYMBOLS IN JS //////////////////////
/////https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol

let sObj = {
  name: "Khanna",
};

let symbolKey = Symbol();

sObj[symbolKey] = "ksjakas";

// u wont get Symbol key in loop
for (let key of Object.keys(sObj)) {
  console.log(key);
}

// u wont get Symbol value in loop
for (let val of Object.values(sObj)) {
  console.log(val);
}

// u wont get Symbol entry in loop
for (let [key, value] of Object.entries(sObj)) {
  console.log(key, value);
}
console.log(sObj); // here u will get props defined with the Symbol
console.log(sObj[symbolKey]); // ksjakas
console.log(sObj.hasOwnProperty(symbolKey)); // true

//////////////////// destructuring ///////////////////

// for objects
let objD = {
  name: "shivam12",
  age: 2412,
  interests: {
    hobbies: ["TT", "Novels"],
    courses: ["JS", "C++"],
  },
  myId: 78,
};

let { name: myName, age, myId = 5 } = objD;
console.log(myName, age, myId);

let dataToSend = {
  myId: 1234,
  gender: "male",
  ...objD,
};

console.log(dataToSend); // do keep in mind here myId will retain from start value

// Array destructuring is a unique technique that allows you to neatly extract an array’s value into new variables.

////////////////////////////////////////// HOW TO IMPLEMENT AN ABSTRACT CLASS IN js (SICE JS DOES NOT HAVE IT) /////////////////////////////////

class Shape {
  constructor(name) {
    console.log(typeof this, this);
    if (this.constructor == Shape) {
      throw new Error("Class is of abstract type and can't be instantiated");
    }
    // this.getArea();
    // this.getName();
    //  console.log(this.name);
    // if (this.getArea == undefined) {
    //   throw new Error("getName method must be implemented");
    // }
    // if (this.getName == undefined) {
    //   throw new Error("getArea method must be implemented");
    // }
    this.name = name;
  }
}

class Rectangle extends Shape {
  //not hoisted
  name = 0;
  length = 0;
  constructor(name, length, width) {
    super(name);
    //not hoisted
    length = length;
    this.width = width;
    console.log(this);
  }

  //hoisted
  getArea() {
    console.log("get area!");
  }

  //not hoisted
  getName = function () {
    console.log("Shivam is my name!");
  };
}

//const myShape = new Shape("My shape"); // This will throw an Error
const smallRectangle = new Rectangle("Small Rectangle", 3, 5); // This will throw an error.

var myNewName = "shaidiasj";
console.log(myNewName);

/////////////

////////! OP ques //////////////

// let aa = 1;
// function outer() {
//   console.log(aa); // error due to TDZ
//   let aa = 2;
//   function inner() {
//     console.log(aa, "aa"); // 2 'aa'
//   }
//   inner();
// }
// outer();

//////////////////////

// let x = 10;

// function outer() {
//   //console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   let x = 20;

//   function inner() {
//     //console.log(x, "x inner"); //  ReferenceError: Cannot access 'x' before initialization
//     let x = 30;
//     function innerMost() {
//       console.log(x, "x innerMost"); // 30
//     }
//     innerMost();
//   }
//   inner();
// }

// outer();
// console.log(x); // 10

////////////////////////

// var a2 = 1;

// function first() {
//   console.log(a2); // undefined (due to hoisting)
//   var a2 = 2;

//   function second() {
//     console.log(a2); // 2
//     var b2 = 3;
//     function third() {
//       console.log(a2); // 2
//       console.log(b2); // 3
//     }
//     third();
//   }
//   second();
// }

// first();
// console.log(a2); // 1

//////////////////////////////

let y = 5;

function makeCounter() {
  let count = 0;

  return function () {
    // console.log(y); // What is logged here? error
    count++;
    console.log(count); // What is logged here? 1, 2
    let y = 10;
    console.log(y); // What is logged here? 10, 10
  };
}

const counter = makeCounter();
counter();
counter();

/////////////

// let z = 1;

// async function asyncFunction() {
//   console.log(z); // What is logged here? // error
//   z = 2; // error

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise resolved");
//     }, 1000);
//   });

//   console.log(await promise); // What is logged here? // promise resolved

//   let z = 3;
//   console.log(z); // What is logged here? // 3
// }

// asyncFunction();
// console.log(z); // What is logged here? // 1

/////////////////////

// let a4 = 10;

// function outerFunction() {
//   let b = 20;
//   const innerFunction = () => {
//     console.log(a4); // What is logged here? 10
//     console.log(b); // What is logged here? 20
//     var c = 30;
//     {
//       let d = 40;
//       console.log(d); // What is logged here? 40
//     }
//     console.log(c); // What is logged here? 30
//     console.log(d); // What is logged here? // error
//   };
//   return innerFunction;
// }

// const inner = outerFunction();
// inner();

////////////////! OP based ques ///////////////

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 0; i < 3; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   })(i);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// -----start
// setTimeout(() => {
//   console.log("First Timeout");
//   setTimeout(() => {
//     console.log("Second Timeout");
//   }, 1000);
// }, 1000);

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout with 0 delay");
// }, 0);

// console.log("End");
// -----end

// ------start
// function greet() {
//   console.log("Hello");
//   setTimeout(() => {
//     console.log("World");
//   }, 1000);
//   console.log("Goodbye");
// }

// greet();

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 3000);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 1000);

// setTimeout(() => {
//   console.log("Timeout 3");
// }, 2000);

// -------------end

// for (let i = 1; i <= 3; i++) {
//   setTimeout(() => {
//     console.log(`Timeout ${i}`);
//   }, i * 1000);
// }

// const promise = new Promise((resolve, reject) => {
//   console.log("Promise started");
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 1000);
// });

// promise.then((message) => {
//   console.log(message);
// });

// console.log("End of script");
