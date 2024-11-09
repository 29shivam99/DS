//! category 2- call, bind, apply

// func.call(obj, p1, p2, p3, p4)

Object.prototype.myCall = function (context = {}, ...args) {
  // if caller is not a function throw error
  if (typeof this !== "function") {
    throw new Error(this + "This is not callble!");
  }
  // we need to add this targetfunction in the context object else we cant use it
  context.targetFunction = this;
  context.targetFunction(...args);
};

function fnForCall(val) {
  console.log(this, val);
}

let objForCall = {
  name: "Shivam",
};

// fnForCall.call(objForCall, "abcd");
// fnForCall.myCall(objForCall, "abcd");

// !apply

// func.apply(obj, [p1, p2, p3, p4])

Object.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error(this + "This is not callable for apply!");
  }

  if (!Array.isArray(args)) {
    throw new Error(args + "is not an array!");
  }

  context.targetFunction = this;
  context.targetFunction(args); // see how we can pass an array to a function that accepts arguments
};

// fnForCall.apply(objForCall, ["abcd"]);
// fnForCall.myApply(objForCall, "[abcd]");

// !bind - imp

// let bindedFunction = func.bind(obj, p1, p2)
// bindedFunction(p3, p4)

Object.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cant be bound as it is not callable!");
  }

  context.targetFunction = this;

  return function (...remainingArgs) {
    return context.targetFunction(...args, ...remainingArgs);
  };
};

function fnForBind(a, b, c, d) {
  console.log(this, a, b, c, d);
}

let fn = fnForBind.myBind(objForCall, "asas");
fn(1, 2);

// Even better could be to use Symbol to avoid naming conflicts to new key which we are going to add

Function.prototype.myBind2 = function (obj, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + "cant be bound as it is not callable!");
  }
  const targetFunctionSymbol = Symbol("targetFunction");
  obj[targetFunctionSymbol] = this;

  const newContext = obj;

  return function (...newArgs) {
    newContext[targetFunctionSymbol](...args, ...newArgs);
  };
};
