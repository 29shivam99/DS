//////////////////////! flatten object

// input
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

//output
// {
//   user_name: "Vishal",
//   user_address_primary_house: "109",
//   user_address_primary_street_main: "21",
//   user_address_primary_street_cross: "32",
// }

//! handle null cases also
function helper(obj, keyName, newObj) {
  if (obj === null) {
    newObj[keyName] = null;
    return newObj;
  }
  // Object.keys(arr) gives key as 0,1,2 ....
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "object") {
      let newKey = `${keyName}_${key}`;
      helper(obj[key], newKey, newObj);
    } else {
      newObj[`${keyName}_${key}`] = obj[key];
    }
  }
  return newObj;
}

function flattenObject(obj, name) {
  if (!(typeof obj === "object")) {
    throw new Error(obj + ", this is not an object");
  }
  let newObj = {};
  return helper(user, name, newObj);
}

console.log(flattenObject(user, "user"));
