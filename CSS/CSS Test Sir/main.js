const fn = function () {
  console.log("hello");
};

newFn(fn);

function newFn(fn) {
  fn();
}

function ex() {
  console.log(arguments);
}

ex(1, 2, 3, "sjofsa");

arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
};

let newArr2 = arr.myMap((item) => {
  return item * 2;
});

console.log(newArr2);

// arr2 = [1];
// arr2.push(4);
// console.log(arr2);

arrToFlat = [1, 2, [3, 4, [5, 6, [7, 8, [9, [10]]]]]];

console.log(arrToFlat.flat());
