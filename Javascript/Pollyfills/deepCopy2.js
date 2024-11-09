//////////////! Deep copy ka pollyfill - vvvv hard ////////////////
// this is how we can create deep copy => let arr2 = JSON.parse(JSON.stringify(arr));
let originalArr = [
  {
    name: {
      street: {
        ab: "223",
      },
    },
  },
  [
    1,
    [1, 2],
    {
      branch: "cse",
    },
  ],
  "kaslasas",
  121212,
];

function createDeepCopy(obj) {
  if (obj === null) {
    return null;
  }

  if (typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const newArray = obj.map((item) => {
      return createDeepCopy(item);
    });
    return newArray;
  } else {
    let newObject = {};
    for (let key of Object.keys(obj)) {
      const value = obj[key];
      newObject[key] = createDeepCopy(value);
    }

    return newObject;
  }
}

let newArr = createDeepCopy(originalArr);
originalArr[0].name.street.ab = "alklaadadd";
originalArr[1][0] = 999999999;
console.log(originalArr, newArr); // newArr should not get changed
