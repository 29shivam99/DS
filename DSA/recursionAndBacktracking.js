// https://www.geeksforgeeks.org/problems/subset-sums2234/1
// subset sum
function fn(arr, n, ind, sum, ans) {
  if (ind >= n) {
    ans.push(sum);
    return;
  }

  fn(arr, n, ind + 1, sum + arr[ind], ans);
  fn(arr, n, ind + 1, sum, ans);
}

class Solution {
  subsetSums(arr, n) {
    let ans = [];
    fn(arr, n, 0, 0, ans);
    ans.sort((a, b) => a - b);
    return ans;
  }
}
//approach 2 for subset

var subsets = function (nums) {
  function findSubset(arr, curr, j) {
    res.push([...curr]);
    for (let i = j; i < arr.length; i++) {
      curr.push(arr[i]);
      findSubset(arr, curr, i + 1);
      curr.pop();
    }
  }
  let res = [];
  nums.sort((a, b) => {
    return a - b;
  });
  findSubset(nums, [], 0);
  return res;
};
// https://leetcode.com/problems/subsets-ii/description/
// subset 2 very important (revise)

//this is my logic using set but this can be improved revise the better approach

//https://leetcode.com/problems/subsets-ii/description/
// here if u use c++ way then ans is failing
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  function findSubset(arr, curr, j) {
    res.push([...curr]);
    for (let i = j; i < arr.length; i++) {
      if (i > j && arr[i] == arr[i - 1]) continue;
      curr.push(arr[i]);
      findSubset(arr, curr, i + 1);
      curr.pop();
    }
  }
  let res = [];
  nums.sort((a, b) => {
    return a - b;
  });
  findSubset(nums, [], 0);
  return res;
};

//https://leetcode.com/problems/combination-sum/description/
// combination sum approach 1 (pick not pick)
function fn(nums, tar, i, ans, tmp) {
  if (tar <= 0 || i === nums.length) {
    if (tar == 0) {
      ans.push(tmp.slice());
      // or  ans.push([...tmp]);
    }
    return;
  }
  tmp.push(nums[i]);
  fn(nums, tar - nums[i], i, ans, tmp);

  tmp.pop();
  fn(nums, tar, i + 1, ans, tmp);
}

var combinationSum = function (candidates, target) {
  let ans = [],
    tmp = [];
  fn(candidates, target, 0, ans, tmp);
  return ans;
};

// combination sum approach 2 (via looping)

function fn(nums, tar, ans, tmp, j) {
  if (tar <= 0 || j === nums.length) {
    if (tar == 0) {
      ans.push([...tmp]);
    }
    return;
  }
  for (let i = j; i < nums.length; i++) {
    tmp.push(nums[i]);
    fn(nums, tar - nums[i], ans, tmp, i);
    tmp.pop();
  }
}

var combinationSum = function (candidates, target) {
  let ans = [],
    tmp = [];
  fn(candidates, target, ans, tmp, 0);
  return ans;
};

// https://leetcode.com/problems/combination-sum-ii/description/
// combination sum 2

function fn(nums, tar, ans, tmp, j) {
  if (tar <= 0 || j === nums.length) {
    if (tar == 0) {
      ans.push([...tmp]);
    }
    return;
  }
  for (let i = j; i < nums.length; i++) {
    if (i > j && nums[i] === nums[i - 1]) continue;
    tmp.push(nums[i]);
    fn(nums, tar - nums[i], ans, tmp, i + 1);
    tmp.pop();
  }
}

var combinationSum2 = function (candidates, target) {
  let ans = [],
    tmp = [];
  candidates.sort((a, b) => a - b);
  fn(candidates, target, ans, tmp, 0);
  return ans;
};

// https://leetcode.com/problems/permutations/
// permutations

function fn(nums, n, tmp, ans) {
  if (tmp.length === n) {
    ans.push([...tmp]);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (tmp.includes(nums[i])) continue;
    tmp.push(nums[i]);
    fn(nums, n, tmp, ans);
    tmp.pop();
  }
}

var permute = function (nums) {
  let tmp = [],
    ans = [];
  fn(nums, nums.length, tmp, ans);
  return ans;
};

// https://leetcode.com/problems/permutations-ii/description/
// permutations 2 revise
function fn(nums, n, tmp, ans, vis) {
  if (tmp.length === n) {
    ans.push([...tmp]);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (vis[i]) continue;
    if (i > 0 && nums[i] == nums[i - 1] && !vis[i - 1]) continue;
    vis[i] = 1;
    tmp.push(nums[i]);
    fn(nums, n, tmp, ans, vis);
    vis[i] = 0;
    tmp.pop();
  }
}

var permuteUnique = function (nums) {
  let tmp = [],
    ans = [],
    vis = [];
  for (let i = 0; i < nums.length; i++) {
    vis.push(0);
  }
  nums.sort((a, b) => a - b);
  fn(nums, nums.length, tmp, ans, vis);
  return ans;
};

// https://leetcode.com/problems/palindrome-partitioning/description/
// revise my approach nice approach but instead of creating the substring manually u shpuld use substr fn

/**
 * @param {string} s
 * @return {string[][]}
 */
function isPalindrome(s, j, i) {
  let l = j,
    r = i;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }

  return true;
}
function fn(s, j, tmp, ans, n) {
  // base case
  if (j >= n) {
    ans.push([...tmp]);
  }
  // recursive
  let str = "";
  for (let i = j; i < n; i++) {
    str += s[i];
    if (!isPalindrome(s, j, i)) {
      continue;
    }
    tmp.push(str);
    fn(s, i + 1, tmp, ans, n);
    tmp.pop();
  }
}
var partition = function (s) {
  let tmp = [],
    ans = [];
  fn(s, 0, tmp, ans, s.length);
  return ans;
};

// my approach 2 using the substr fn

function isPalindrome(s, j, i) {
  let l = j,
    r = i;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }

  return true;
}
function fn(s, j, tmp, ans, n) {
  // base case
  if (j >= n) {
    ans.push([...tmp]);
  }
  // recursive
  for (let i = j; i < n; i++) {
    let str = s.substr(j, i - j + 1);
    if (!isPalindrome(s, j, i)) continue;
    tmp.push(str);
    fn(s, i + 1, tmp, ans, n);
    tmp.pop();
  }
}
var partition = function (s) {
  let tmp = [],
    ans = [];
  fn(s, 0, tmp, ans, s.length);
  return ans;
};

//www.naukri.com/code360/problems/983635?topList=striver-sde-sheet-problems&utm_source=striver&utm_medium=website&leftPanelTabValue=PROBLEM
// word break 2
//https://leetcode.com/problems/permutations/description/

// #include <bits/stdc++.h>
// using namespace std;
// void fn(string &s,  unordered_set<string> &st, int j, int n, vector<string>& tmp, vector<string>& ans)
// {
//     // base case
//     if(j>=n){
//         string str = "";
//         for(int i=0; i<tmp.size(); i++){
//             str+=tmp[i];
//             if(i!=tmp.size()-1){
//                 str+=" ";
//             }
//         }
//         ans.push_back(str);
//         return;
//     }
//     // recusrive
//     for(int i=j; i<n; i++){
//         string substring = s.substr(j, i-j+1);
//         if(st.find(substring) == st.end()){
//             continue;
//         }
//         tmp.push_back(substring);
//         fn(s, st, i+1, n, tmp, ans);
//         tmp.pop_back();
//     }
// }

// vector<string> wordBreak(string &s, vector<string> &dictionary)
// {
//     // Write your code here
//     unordered_set<string> st;
//     for(auto str: dictionary){
//         st.insert(str);
//     }
//     vector<string> tmp, ans;
//     fn(s, st, 0, s.length(), tmp, ans);
//     return ans;
// }

https: var permute = function (nums) {
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
