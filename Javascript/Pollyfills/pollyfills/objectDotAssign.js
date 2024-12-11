// Custom Implementation of Object.assign()

// Object.assign(target, source1, source2);

const myAssign = function (target, ...sources) {
  if (target === null || target === undefined) {
    throw new Error("target cant be null or undefined");
  }

  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (source.hasOwnProperty(key)) {
        console.log(target);
        target[key] = source[key];
      }
    }
  }
  console.log(target);
  return target;
};

myAssign({ a: 1 }, { b: 2 }, { c: 3, d: 4 });

//!
// Object.defineProperty() is a powerful method in JavaScript that allows you to define a new property or modify an existing property on an object. It provides fine-grained control over the property’s attributes, such as whether it can be enumerated, modified, or deleted.
