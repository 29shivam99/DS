////////// ! //////////////////
// primitives - stored in call stack(execution context) number, string, boolean, Symbol, Undefined, null, BigInt
// reference- stored in heap - object, array, function etc

let age = 12; // memory 00001
let newAge = age; // memory 00102
age += 1;
console.log(age);
console.log(newAge); // did not change (since both are at differnet memory address)

let myData = {
  fname: "shivam",
  mood: "good",
}; // myData referencing to a heap memory say, D307

let urData = myData; // urData will refer to where myData is referencing that is D307
urData.mood = "ok";

console.log(urData);
console.log(myData); // this changed

// even using const

const myData2 = {
  fname: "shivam",
  mood: "good",
}; // myData  referencing to a heap memory say, D909

const urData2 = myData2; // urData will refer to where myData is referencing that is D909
urData2.mood = "ok";

console.log(myData2);
console.log(urData2);

// this will fail but

// urData2 = {
//   fname: "shivam",
//   mood: "ok",
// };

// how to truly copy objects

//m1 - shallow copy - means it works at first level - means it does not copy the nested objects inside main object rather creates references for the nested objects- means not a deep copy

let moreData = {
  name: "abcd",
  hobbies: [1, 2, 3, 4], // array is also object remember
};

let ramData = Object.assign({}, moreData);
ramData.name = "raam";

console.log(ramData, moreData);

ramData.hobbies.push(5);

console.log(ramData, moreData);

// this is main thing to remember

ramData.hobbies = [4]; // this created a new pplace in heap for [1] therefore hobbies of moreData wont change

console.log(ramData, moreData);

////////////////////// ! let arr2 = [...arr1] -> creates shallow copy

//// * function to create a deep copy

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.reduce((arr, item, i) => {
      arr[i] = deepCopy(item);
      return arr;
    }, []);
  }

  if (obj instanceof Object) {
    return Object.keys(obj).reduce((newObj, key) => {
      newObj[key] = deepCopy(obj[key]);
      return newObj;
    }, {});
  }
}

////////////////////////////////////////////////

let object1 = {
  name: "saksa",
  age: "777777",
  hobbies: [1, 2, 3, 4],
};
