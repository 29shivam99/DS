//  Write a function for the desired output as:
// Input: sum(2)(3)()
// Output: 5

// Input: sum(2)(3)(4)()
// Output: 9

function sum(num) {
  let totalSum = num;

  function curry(remainingNum) {
    if (remainingNum === undefined) {
      return totalSum;
    } else {
      totalSum += remainingNum;
      return curry;
    }
  }

  return curry;
}

const res = sum(2)(3)(4)();
console.log(res);

const res2 = sum(2)(3)();

console.log(res2);
