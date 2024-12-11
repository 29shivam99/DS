let obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};
// Output:
// {
//   "A": "12"
//   "B": 23,
//   "C.O.L": 56,
//   "C.P": 23,
//   "C.Q.0": 1,
//   "C.Q.1": 2,
// }

function convertFlat(obj, keyNameTillNow = "") {
  let objToReturn = {};

  if (keyNameTillNow !== "") keyNameTillNow += ".";

  for (let key of Object.keys(obj)) {
    const val = obj[key];
    const newKeyName = keyNameTillNow + key;
    if (typeof val === "object" && val !== null) {
      objToReturn = { ...objToReturn, ...convertFlat(val, newKeyName) };
    } else {
      objToReturn[newKeyName] = val;
    }
  }

  return objToReturn;
}
console.log(convertFlat(obj));

var user = {
  age: null,
  name: "Vishal",
  address: {
    primary: {
      house: ["109", "110"],
      street: {
        main: "21",
        cross: "32",
      },
    },
  },
};

console.log(convertFlat(user));
