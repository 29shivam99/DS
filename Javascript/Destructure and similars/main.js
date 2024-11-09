let arr1 = [1, 2, 34, "dsds"];
let [a, b] = arr1;

console.log(a, b);

let arr2 = [[1, 4, 5], 6, 7, 8];

let [[c, e, f], d] = arr2;
console.log(c, e, f, d);

let [a1, a2, ...res] = arr2;

let obj1 = {
  name: "abcd",
  age: 12,
  address: { country: "india", state: "UP" },
};

let {
  address: { state },
  age,
} = obj1;
console.log(state, age);

/// all in one example

const user = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
  department: {
    name: "Sales",
    Shift: "Morning",
    address: {
      city: "Bangalore",
      street: "7th Residency Rd",
      zip: 560001,
    },
  },
};

let {
  id = 1,
  age: userAge,
  name: firstName,
  department: { Shift },
  department: {
    address: { city, zip: zipCode },
  },
} = user;

console.log(zipCode, Shift, id, age);

/////
// Create a Clone of an Object
// We can create a cloned instance of an object using the spread syntax like this:

const user2 = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
};

const clone = { ...user }; // Output, {name: "Alex", address: "15th Park Avenue", age: 43}

clone === user; // Output, false
// You can alternatively use object.assign() to create a clone of an object. However, the spread syntax is much more precise and much shorter.

clone.name = "new name";
console.log(clone);
console.log(user2); // not changed

// shalow merge

let mergedObj = { ...user, ...user2 };
console.log(mergedObj); // if there are some keys common to user and user2 then override ho jayega

let mergedObj2 = { name: "Shivam", ...user2, age: 45 }; // last keys always taken
console.log(mergedObj2); // age updated but name shivam got override
