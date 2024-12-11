// Implement in Javascript to populate template object from data object.
// Populate template from data
let data = {
  name: {
    first: "Ashish",
    last: "Garg",
  },
  age: 18,
  dob: "09/03/xxx",
  arr: [1],
};

let template = {
  name: {
    first: "",
    middle: "",
    last: "",
  },
  age: 0,
  arr: [{ a: "1", c: "2" }, 2, 3],
};
// Object.assign(template, data);
// console.log(template);
function populateTemplate(source, dest) {
  for (let key of Object.keys(source)) {
    if (dest[key] !== undefined) {
      if (typeof source[key] === "object" && typeof dest[key] === "object") {
        populateTemplate(source[key], dest[key]);
      } else {
        dest[key] = source[key];
      }
    } else {
      dest[key] = source[key];
    }
  }
  return dest;
}

console.log(populateTemplate(data, template));
data.name.first = "sks";
console.log(populateTemplate(data, template));
