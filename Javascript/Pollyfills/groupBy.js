const groupBy = function (arr, groupbyKey) {
  if (!arr || !Array.isArray(arr)) return {};

  let obj = {};

  for (let item of arr) {
    let objKey;
    if (typeof groupbyKey === "function") {
      objKey = groupbyKey(item);
    } else {
      objKey = item[groupbyKey];
    }

    if (!obj[objKey]) {
      obj[objKey] = [];
    }

    obj[objKey].push(item);
  }

  return obj;
};

//example use

const data = [
  { name: "John", age: 25 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 30 },
  { name: "Sara", age: 30 },
];

// Group by age
const groupedByAge = groupBy(data, "age");
console.log(groupedByAge);
/*OP
{
  25: [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 25 }
  ],
  30: [
    { name: 'Mike', age: 30 },
    { name: 'Sara', age: 30 }
  ]
}
*/

// Group by a custom function
const groupedByNameLength = groupBy(data, (item) => item.name.length);
console.log(groupedByNameLength);
/*OP
{
  4: [
    { name: 'John', age: 25 },
    { name: 'Mike', age: 30 }
  ],
  5: [
    { name: 'Jane', age: 25 },
    { name: 'Sara', age: 30 }
  ]
}
*/
