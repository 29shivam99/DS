//https://leetcode.com/problems/maximum-product-subarray/description/

// my way

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  let result = maxSoFar;
  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];
    const tempMaxSoFar = Math.max(curr, maxSoFar * curr, minSoFar * curr);
    minSoFar = Math.min(curr, maxSoFar * curr, minSoFar * curr);
    maxSoFar = tempMaxSoFar;
    result = Math.max(maxSoFar, result);
  }

  return result;
};

// best (revise)
var maxProduct = function (nums) {
  var res = Math.max(...nums),
    currMin = 1,
    currMax = 1,
    prevMax = 1;

  for (const num of nums) {
    prevMax = currMax * num;
    currMax = Math.max(prevMax, currMin * num, num);
    currMin = Math.min(prevMax, currMin * num, num);

    res = Math.max(res, currMax);
  }
  return res;
};

// https://leetcode.com/problems/longest-increasing-subsequence/description/
//LIS(longesg increasing subsequence)

/**
 * @param {number[]} nums
 * @return {number}
 */

function fn(nums, i, prevInd, memo) {
  // base case
  if (i == nums.length) return 0;

  // recursive logic
  if (memo[i][prevInd + 1] !== -1) {
    return memo[i][prevInd + 1];
  }

  let takeCurr = 0;
  let dontTakeCurr = 0;

  if (prevInd == -1 || nums[prevInd] < nums[i])
    takeCurr = 1 + fn(nums, i + 1, i, memo);

  dontTakeCurr = fn(nums, i + 1, prevInd, memo);

  memo[i][prevInd + 1] = Math.max(takeCurr, dontTakeCurr);
  return Math.max(takeCurr, dontTakeCurr);
}

var lengthOfLIS = function (nums) {
  let len = nums.length;
  let memo = Array.from({ length: len + 1 }, () => Array(len + 2).fill(-1));
  console.log(memo);
  return fn(nums, 0, -1, memo);
};

// https://leetcode.com/problems/longest-common-subsequence/
// LCS (longesg common subsequence)

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

function fn(s1, s2, i, j, memo) {
  // base case
  if (i === s1.length || j === s2.length) {
    return 0;
  }

  // recursive logic

  if (memo[i][j] !== -1) return memo[i][j];

  let commonLength = 0;

  if (s1[i] === s2[j]) {
    commonLength = 1 + fn(s1, s2, i + 1, j + 1, memo);
  } else {
    commonLength = Math.max(
      fn(s1, s2, i + 1, j, memo),
      fn(s1, s2, i, j + 1, memo)
    );
  }
  memo[i][j] = commonLength;
  return commonLength;
}

var longestCommonSubsequence = function (text1, text2) {
  let len1 = text1.length;
  let len2 = text2.length;
  let memo = Array.from({ length: len1 }, () => Array(len2).fill(-1));
  let ans = fn(text1, text2, 0, 0, memo);
  console.log(memo);
  return ans;
};

//https://www.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1
//Maximum sum increasing subsequence

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

class Solution {
  fn(nums, n, ind, prevInd, memo) {
    if (ind === n) {
      return 0;
    }

    if (memo[ind][prevInd + 1] !== -1) return memo[ind][prevInd + 1];

    let takeCurr = 0;
    let dontTakeCurr = 0;

    if (prevInd === -1 || nums[prevInd] < nums[ind]) {
      takeCurr = nums[ind] + this.fn(nums, n, ind + 1, ind, memo);
    }

    dontTakeCurr = this.fn(nums, n, ind + 1, prevInd, memo);

    memo[ind][prevInd + 1] = Math.max(takeCurr, dontTakeCurr);

    return Math.max(takeCurr, dontTakeCurr);
  }

  maxSumIS(arr, n) {
    //code here
    let memo = Array.from({ length: n }, () => Array(n + 1).fill(-1));
    return this.fn(arr, n, 0, -1, memo);
  }
}

//https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1
// 0-1 knapsack or 0/1 knapsack

/**
 * @param {number} W
 * @param {number[]} wt
 * @param {number[]} val
 * @param {number} n
 * @returns {number}
 */

class Solution {
  fn(tar, wt, val, n, i, memo) {
    if (tar === 0 || i === n) {
      return 0;
    }

    if (memo[i][tar] !== -1) {
      //console.log(memo[i][tar], i, tar);
      return memo[i][tar];
    }

    let takeCurr = 0;
    if (tar >= wt[i]) {
      takeCurr = val[i] + this.fn(tar - wt[i], wt, val, n, i + 1, memo);
    }

    let dontTakeCurr = 0;
    dontTakeCurr = 0 + this.fn(tar, wt, val, n, i + 1, memo);

    memo[i][tar] = Math.max(takeCurr, dontTakeCurr);
    return Math.max(takeCurr, dontTakeCurr);
  }

  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n) {
    // code here

    let memo = Array.from({ length: n + 10 }, () => Array(W + 10).fill(-1));
    return this.fn(W, wt, val, n, 0, memo);
  }
}
