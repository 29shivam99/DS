const getCurried = function (cb) {
  const curry = function (...args) {
    if (args.length >= cb.length) {
      return cb.apply(this, args);
    } else {
      return function (...moreArgs) {
        return curry(...args, ...moreArgs);
      };
    }
  };
  return curry;
};

const getCurried2 = (cb) => {
  let totalArgs = [];
  function func(...args) {
    totalArgs = [...totalArgs, ...args];
    if (totalArgs.length >= cb.length) {
      return cb.apply(this, totalArgs);
    } else {
      return func;
    }
  }
  return func;
};

function funcNormal(a, b, c, d) {
  return a + b + c + d;
}

const funcCurried = getCurried2(funcNormal);

const res = funcCurried(1)(2)(3)(4); // total 4 arguments will be there
console.log(res);

//====================

//Q.Closure very important question - We will see how to create a javascript function that will remember its previously passed values and return the sum of the current and previous value.

// Here is an example of what the output should be like.
// sum(5); // 5
// sum(3); // 8
// sum(4); // 12
// sum(0); // 12

function func() {
  let prevSum = 0;
  const sum = function (val) {
    prevSum += val;
    return prevSum;
  };

  return sum;
}

let sum = func();
console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));

//====================================

const createSum = function (value) {
  let prevSum = value;

  const innerSum = function (num) {
    prevSum += num;
    return innerSum;
  };

  innerSum.valueOf = function () {
    return +prevSum;
  };

  return innerSum;
};

const sum1 = createSum(1);
console.log(sum1(2)(3) + 4); // 6+4 = 10

//========================================
