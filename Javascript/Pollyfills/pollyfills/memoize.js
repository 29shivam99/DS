const func = function (a) {
  for (i = 0; i < 10000000; i++) {
    console.log(i);
  }

  return a + 4;
};

const memoize = function (cb) {
  let cache = {};

  return function (...args) {
    let keyStr = JSON.stringify(value);
    if (cache[keyStr] !== undefined) return cache[keyStr];
    // execute cb when the value for it is not already computed
    return cb.call(this, ...args);
  };
};

const memoizedFunc = memoize(func);
memoizedFunc(4);
