//! category 1 - array functions

// !MAP
// Array.map((curr, index, arr) => {});

// map returns a new array

Array.prototype.myMap = function (cb) {
  let currentArray = this;
  let newArray = [];
  let length = currentArray.length;

  for (let i = 0; i < length; i++) {
    newArray.push(cb(currentArray[i], i, currentArray));
  }

  return newArray;
};

//! FILTER

// Array.filter((curr, index, arr) => {});

// filter returns a new array

Array.prototype.myFilter = function (cb) {
  let currentArray = this;
  let newArray = [];
  let length = currentArray.length;

  for (let i = 0; i < length; i++) {
    if (cb(currentArray[i], i, currentArray)) newArray.push(currentArray[i]);
  }

  return newArray;
};

// !Reduce

// Array.reduce(() => {acc, curr, index, arr}, initialValue);

// reduce returns a value

//! edge case- if u dont pass any value to initialValue then reduce will take acc as first value of array and starts loop from the second element.

Array.prototype.myReduce = function (cb, initialValue) {
  let currentArray = this;
  let length = currentArray.length;

  let accumulator, i;

  // handling edge case
  if (initialValue === "undefined") {
    accumulator = currentArray[0];
    i = 1;
  } else {
    accumulator = initialValue;
    i = 0;
  }

  for (let i = 0; i < length; i++) {
    accumulator = cb(accumulator, currentArray[i], i, currentArray);
  }

  return accumulator;
};
