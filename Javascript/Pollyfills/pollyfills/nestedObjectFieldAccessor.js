// Implement function to read field inside a nested object. (Very imp asked many times)
const obj = {
  A: {
    B: {
      C: {
        D: {
          E: 2,
        },
      },
    },
  },
};

// console.log(read(obj, "A.B.C.D.E"));
// return 2 as answer if E exists else return undefined

function helper(obj, arr, index) {
  console.log(obj, index);

  if (typeof obj !== "object" || obj === null) {
    return undefined;
  }

  const key = arr[index];

  if (!obj.hasOwnProperty(key)) {
    return undefined;
  }

  if (index === arr.length - 1) {
    console.log(obj[key]);
    return obj[key];
  }
  const toret = helper(obj[key], arr, index + 1);
  return toret;
}

function func(obj, str) {
  const arr = str.split(".");
  return helper(obj, arr, 0);
}

console.log(func(obj, "A.B.C.D.E"));

const obj1 = {
  a: "one",
  b: "two",
  c: "three",
  d: "four",
};

const arr1 = ["item1", "item2", "item3", "item4"];

console.log("obj1 keys", Object.keys(obj1));
console.log("obj1 values", Object.values(obj1));
console.log("obj1 entries", Object.entries(obj1));

console.log("arr1 keys", Object.keys(arr1));
console.log("arr1 values", Object.values(arr1));
console.log("arr1 entries", Object.entries(arr1));

for (let key of Object.entries(arr1)) {
  console.log("of", key);
}

for (let key in Object.entries(arr1)) {
  console.log("in", key);
}
