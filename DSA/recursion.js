//https://leetcode.com/problems/subsets-ii/description/
// here if u use c++ way then ans is failing
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  function findSubset(arr, curr) {
    res.push([...curr]);
    for (let i = 0; i < arr.length; i++) {
      if (i == 0 || arr[i] != arr[i - 1]) {
        curr.push(arr[i]);
        findSubset(arr.slice(i + 1), curr);
        curr.pop();
      }
    }
  }
  let res = [];
  nums.sort((a, b) => {
    return a - b;
  });
  findSubset(nums, []);
  return res;
};

//https://leetcode.com/problems/combination-sum/description/

var combinationSum = function (candidates, target) {
  const result = [];

  function permute(arr = [], sum = 0, idx = 0) {
    if (sum > target) return;
    if (sum === target) result.push(arr);

    for (let i = idx; i < candidates.length; i++) {
      permute([...arr, candidates[i]], sum + candidates[i], i);
    }
  }
  permute();
  return result;
};

// https://leetcode.com/problems/combination-sum-ii/description/

var combinationSum2 = function (candidates, target) {
  var result = [];

  candidates.sort((a, b) => a - b);
  var helper = function (candidates, target, tmpArr, idx) {
    if (target == 0) {
      result.push(tmpArr.slice());
      return;
    }

    if (target < 0) {
      return;
    }

    for (var i = idx; i < candidates.length; i++) {
      if (idx == i || candidates[i] != candidates[i - 1]) {
        tmpArr.push(candidates[i]);
        helper(candidates, target - candidates[i], tmpArr, i + 1);
        tmpArr.pop();
      }
    }
  };
};

// https://leetcode.com/problems/palindrome-partitioning/description/

const partition = (s) => {
  const ans = [];

  const palindromePartitions = (str, partition) => {
    if (str.length === 0) {
      ans.push(partition);
      return;
    }
    for (let i = 1; i <= str.length; i++) {
      const subStr = str.slice(0, i);
      if (isPalindrome(subStr)) {
        palindromePartitions(str.substring(i), [...partition, subStr]);
      }
    }
  };
  palindromePartitions(s, []);

  return ans;
};

const isPalindrome = (s) => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) return false;
    i++;
    j--;
  }
  return true;
};

//https://leetcode.com/problems/permutations/description/

var permute = function (nums) {
  const res = [];
  backtrack(nums, res);
  return res;
};

function backtrack(nums, res, n = 0) {
  if (n === nums.length - 1) {
    res.push(nums.slice(0));
    return;
  }
  for (let i = n; i < nums.length; i++) {
    [nums[i], nums[n]] = [nums[n], nums[i]];
    backtrack(nums, res, n + 1);
    [nums[i], nums[n]] = [nums[n], nums[i]];
  }
}
