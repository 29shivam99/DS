// Input:
const obj2 = {
  a: {
    b: {
      c: [1, 2, 3],
      d: "shivam",
    },
  },
};

function getValueFrompath(obj, path, depth = 0) {
  if (obj === undefined || obj === null) return obj;
  let keyName = path[depth];
  if (depth === path.length - 1) return obj[keyName];
  return getValueFrompath(obj[keyName], path, depth + 1);
}

function getValueFrompathNew(obj, path, depth = 0) {
  if (obj === undefined || obj === null) return obj;
  let keyName = path[depth];
  if (depth === path.length - 1) return obj[keyName];

  // if()
}

function getValue(obj, path) {
  let cleanPath = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "." || path[i] === "[" || path[i] === "]") continue;
    else cleanPath.push(path[i]);
  }
  return getValueFrompath(obj, cleanPath);
}

const get = (obj, path) => {
  // if path is not a string or array of string
  if (path === "" || path.length == 0) return undefined;

  // if path is an array, concatenate it and form a string
  // to handle a single case of string
  if (Array.isArray(path)) path = path.join(".");

  // filter out the brackets and dot
  let exactPath = [];
  for (let i = 0; i < path.length; i++) {
    if (path[i] !== "[" && path[i] !== "]" && path[i] !== ".") {
      exactPath.push(path[i]);
    }
  }

  // get the value of the path in the sequence
  const value = exactPath.reduce((source, path) => source[path], obj);

  // if not found return undefined
  return value ? value : undefined;
};

console.log(getValue(obj2, "a.b.c.7"));

console.log("---------------------");

console.log(get(obj2, "a.b.c.7"));
