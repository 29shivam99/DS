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

// minimum path sum

/**
 * @param {number[][]} grid
 * @return {number}
 */

function fn(grid, i, j, m, n, memo) {
  // BC
  if (i == m - 1 && j == n - 1) return grid[i][j];
  // recursive
  if (memo[i][j] !== -1) return memo[i][j];

  let answerFromRight = Number.MAX_SAFE_INTEGER;
  if (j + 1 < n) answerFromRight = fn(grid, i, j + 1, m, n, memo);

  let answerFromDown = Number.MAX_SAFE_INTEGER;
  if (i + 1 < m) answerFromDown = fn(grid, i + 1, j, m, n, memo);

  memo[i][j] = grid[i][j] + Math.min(answerFromRight, answerFromDown);
  return grid[i][j] + Math.min(answerFromRight, answerFromDown);
}

var minPathSum = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  let memo = Array.from({ length: m }, () => Array(n).fill(-1));
  console.log(memo);
  return fn(grid, 0, 0, m, n, memo);
};

// https://leetcode.com/problems/word-break/description/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

function fn(s, mp, ind, memo) {
  if (ind >= s.length) return true;
  if (memo[ind] != -1) {
    return memo[ind];
  }
  let substr = "";
  let ans = false;
  for (let i = ind; i < s.length; i++) {
    let tmp = false;
    substr = substr + s[i];
    if (mp.get(substr)) {
      tmp = true;
      tmp = tmp && fn(s, mp, i + 1, memo);
    }
    ans = ans || tmp;
    if (ans) {
      memo[ind] = 1;
      return memo[ind];
    }
  }
  memo[ind] = ans;
  return memo[ind];
}

var wordBreak = function (s, wordDict) {
  let map = new Map();
  let memo = [];
  for (let i = 0; i < s.length + 1; i++) {
    memo.push(-1);
  }
  for (let word of wordDict) {
    map.set(word, 1);
  }
  return fn(s, map, 0, memo);
};

//leetcode.com/problems/minimum-path-sum/
//Minimum path sum

/**
 * @param {number[][]} grid
 * @return {number}
 */

https: function fn(grid, i, j, m, n, memo) {
  // BC
  if (i == m - 1 && j == n - 1) return grid[i][j];
  // recursive
  if (memo[i][j] !== -1) return memo[i][j];

  let answerFromRight = Number.MAX_SAFE_INTEGER;
  if (j + 1 < n) answerFromRight = fn(grid, i, j + 1, m, n, memo);

  let answerFromDown = Number.MAX_SAFE_INTEGER;
  if (i + 1 < m) answerFromDown = fn(grid, i + 1, j, m, n, memo);

  memo[i][j] = grid[i][j] + Math.min(answerFromRight, answerFromDown);
  return grid[i][j] + Math.min(answerFromRight, answerFromDown);
}

var minPathSum = function (grid) {
  let m = grid.length,
    n = grid[0].length;
  let memo = Array.from({ length: m }, () => Array(n).fill(-1));
  console.log(memo);
  return fn(grid, 0, 0, m, n, memo);
};

//https://leetcode.com/problems/coin-change/description/
//coin change problem
//my approach memoization -
var coinChange = function (coins, amount) {
  let result = countCoinChange(coins, amount);
  return result === Infinity ? -1 : result;
};

const countCoinChange = (coins, amount, memo = {}) => {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  if (memo[amount] !== undefined) return memo[amount];

  let min = Infinity;

  for (let coin of coins) {
    const restAmount = amount - coin;
    min = Math.min(countCoinChange(coins, restAmount, memo) + 1, min);
  }

  memo[amount] = min;
  return memo[amount];
};

//https://leetcode.com/problems/partition-equal-subset-sum/
// partition equal subset

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function fn(nums, sum, index, memo, tar) {
  if (sum === tar) return true;
  if (index === nums.length - 1) return false;
  if (memo[sum][index] !== -1) return memo[sum][index];

  let takeCurrent = fn(nums, sum + nums[index], index + 1, memo, tar);
  let dontTakeCurrent = fn(nums, sum, index + 1, memo, tar);

  if (takeCurrent || dontTakeCurrent) memo[sum][index] = 1;
  else memo[sum][index] = 0;
  return takeCurrent || dontTakeCurrent;
}

var canPartition = function (nums) {
  let sum = 0;
  for (let num of nums) sum += num;
  if (sum % 2 != 0) return false;
  let memo = Array.from({ length: sum + 1 }, () =>
    Array(nums.length + 1).fill(-1)
  );
  return fn(nums, 0, 0, memo, sum / 2);
};

//https://leetcode.com/problems/minimum-cost-to-cut-a-stick/description/
//minimum cost tocut a stick

/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
function fn(cuts, start, end, mp) {
  let positions = `${start} to ${end}`;
  if (mp.has(positions) || mp.get(positions) === 0) return mp.get(positions);

  let minCost = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < cuts.length; i++) {
    if (cuts[i] > start && cuts[i] < end) {
      const cost = end - start;
      const leftCost = fn(cuts, start, cuts[i], mp);
      const rightCost = fn(cuts, cuts[i], end, mp);
      minCost = Math.min(minCost, cost + leftCost + rightCost);
    }
  }
  if (minCost === Number.MAX_SAFE_INTEGER) {
    mp.set(positions, 0);
    return 0;
  }

  mp.set(positions, minCost);
  return minCost;
}

var minCost = function (n, cuts) {
  let s = 0,
    e = n;
  let mp = new Map();
  cuts.sort();
  let ans = fn(cuts, s, e, mp);
  return ans;
};

//https://www.geeksforgeeks.org/problems/number-of-coins1824/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article

//Number of coins

/**
 * @param {number[]} coins
 * @param {number} V
 * @param {number} M
 * @returns {number}
 */

class Solution {
  fn(arr, sum, n, i, memo) {
    // base
    if (i === n) {
      if (sum === 0) {
        return 0;
      } else {
        return 10000000;
      }
    }
    // recursive
    if (memo[sum][i]) return memo[sum][i];

    let pick = 10000000;
    if (sum >= arr[i]) pick = 1 + this.fn(arr, sum - arr[i], n, i, memo);

    let nPick = this.fn(arr, sum, n, i + 1, memo);

    memo[sum][i] = Math.min(pick, nPick);
    return Math.min(pick, nPick);
  }

  minCoins(coins, V, M) {
    //your code here
    let col = M + 1;
    let row = V + 1;
    let memo = Array.from({ length: row }, () => Array(col).fill(0));
    let a = this.fn(coins, V, M, 0, memo);
    //console.log(a);
    if (a === 10000000) return -1;
    return a;
  }
}
