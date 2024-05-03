//https://leetcode.com/problems/valid-parentheses/description/
// valid parenthesis

var isValid = function (s) {
  s = s.split("");
  var stack = [];
  for (var z of s) {
    if (z === "(" || z === "{" || z === "[") {
      stack.push(z);
    } else {
      var top = stack[stack.length - 1];
      if (
        (z === ")" && top === "(") ||
        (z === "]" && top === "[") ||
        (z === "}" && top === "{")
      )
        stack.pop();
      else return false;
    }
  }
  return stack.length === 0;
};

//https://leetcode.com/problems/next-greater-element-i/description/
//next greater element 1

var nextGreaterElement = function (findNums, nums) {
  return findNums.map((n) => {
    let found = nums.indexOf(n);

    if (found !== -1) {
      // find the next greater element's index
      while (nums[++found] < n);
      // -1 if not found
      if (found >= nums.length) found = -1;
      else found = nums[found];
    }

    return found;
  });
};
