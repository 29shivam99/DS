//1. leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
//easy -
//my approach
/**
 * @param {number[]} prices
 * @return {number}
 */
https: var maxProfit = function (prices) {
  let ans = 0;
  let minVal = 100000 + 1;
  for (let i = 0; i < prices.length; i++) {
    minVal = Math.min(minVal, prices[i]);
    let profit = prices[i] - minVal;
    ans = Math.max(ans, profit);
  }
  return ans;
};


//2.https://leetcode.com/problems/sort-colors/description/?source=submission-ac

class Solution {
public:

//this is called dutch national flag algo (see striver's video for more updates)
    void sortColors(vector<int>& v) {
        int n = v.size();
        int l=0, m=0, h=n-1;
        while(m<=h){

            if(v[m]==0){
                swap(v[m++],v[l++]);
            }

            else if(v[m]==1){
                m++;
            }

            else if(v[m]==2){
                swap(v[m],v[h--]);
            }
        }
    }
};

//3. https://leetcode.com/problems/maximum-subarray/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {    
    let maxSum=-100001, currSum=0;
    for(let i=0; i<nums.length; i++){
        currSum+=nums[i];
        maxSum=Math.max(maxSum, currSum);
        if(currSum<0){
            currSum=0;
        }
    }
    return maxSum;
};

//4. https://leetcode.com/problems/next-permutation/description/

class Solution {
public:


////////////////////////////
// ques -- // 1 2 3 6 7 5 4
// 0 1 2 3 4 5 6
// 1 2 3 6 7 4 5 
// 1 2 3 6 4 5 7 
// 1 2 3 7 4 5 6

// 1 3 2
// 1 2 3
// 2 1 3

    void nextPermutation(vector<int>& nums) {
        
        int n=nums.size();
        for(int i=n-1; i>=0; i--)
        {
            if(nums[n-1]> nums[i])
            {
                
                for(int j=i+1; j<=n-1; j++)
                {
                    if(nums[j]>nums[i])
                    {
                        swap(nums[j], nums[i]);
                        break;
                    }
                    
                }
                break;
            }
            else
            {
                sort(nums.begin()+i, nums.end());
            }
        }
    }
};

// 5. https://leetcode.com/problems/pascals-triangle/description/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans=[];
    for(let i=1; i<=numRows; i++){
        let tmp=[];
        for(let j=0; j<i; j++){
            if(j===0 || j===i-1){
                tmp.push(1);
            }
            else{
                tmp.push(ans[i-2][j-1]+ans[i-2][j]);
            }
        }
        ans.push(tmp);
    }
    return ans;
};
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

//6. https://leetcode.com/problems/set-matrix-zeroes/description/


//O(m+n) space, O(m+n) time
//keep two sets, one for row indexes than should be marked 0, and one for col indexes that should be marked 0
//loop through matrix once, populating the sets
//loop through a second time, setting items to 0, if their indexes are in either set

const setZeroes1 = (matrix) => {
    let rowsZero = new Set()
    let colsZero = new Set()
    for (let i = 0;i < matrix.length;i++){
        for (let j = 0;j<matrix[0].length;j++){
            if (matrix[i][j] === 0){
                rowsZero.add(i)
                colsZero.add(j)
            }
        }
    }
  for (let i = 0;i < matrix.length;i++){
        for (let j = 0;j<matrix[0].length;j++){
            if (rowsZero.has(i) || colsZero.has(j)){
                matrix[i][j] = 0
            }
        }
    }
}

//O(1) space, O(m+n) time
//we do the same as above, except we use the matrix itself to keep track of which rows and cols should be 0, instead of using sets
//we go through matrix and if we find a 0, we mark all items in row and all items in col
//we can't simply set all items in row and col to zero, because we don't want to change rows and columns with newly formed zeroes...just original zeroes
//if our 'mark' function changed all items in selected row and col to be zero, it would mess up future iterations
//so we mark them as something else...null...and then we loop through the matrix a second time, making null items 0
const setZeroes2 = (matrix) =>{
      for (let i = 0;i < matrix.length;i++){
        for (let j = 0;j<matrix[0].length;j++){
            if (matrix[i][j] === 0){
              mark(matrix,i,j)
            }
        }
    }
       for (let i = 0;i < matrix.length;i++){
        for (let j = 0;j<matrix[0].length;j++){
            if (matrix[i][j] === null){
              matrix[i][j] = 0
            }
        }
    }
}

const mark = (matrix, row, col)=>{
    for (let j = 0; j < matrix[0].length; j++){
        //preserve original 0, mark items that should zero as null
        if (matrix[row][j] !== 0){
           matrix[row][j] = null         
        }
    }
    for (let i = 0; i < matrix.length; i++){
        //preserve original 0, mark items that should be zero as null
        if (matrix[i][col] !== 0){
            matrix[i][col] = null
        }
    }
}


// 7. https://leetcode.com/problems/merge-intervals/description/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let ans=[];
    intervals.sort((a,b)=> a[0]-b[0]);
    console.log(intervals);
    let m = intervals.length;
    let i=0;
    while(i<m){
        let initialStart=intervals[i][0];
        let initialEnd=intervals[i][1];
        let j;
        for( j=i+1; j<m; j++){
            let currStart=intervals[j][0];
            let currEnd=intervals[j][1];

            if(initialEnd>=currStart){
                initialEnd = Math.max(currEnd, initialEnd);
            }
            else{
                break;
            }
        }
        
        ans.push([initialStart, initialEnd])
        i=j;
        // if(i===m-1){
        //     ans.push([intervals[i][0], intervals[i][1]])
        // }
    }
    return ans;
};

//8. https://leetcode.com/problems/merge-sorted-array/description/

class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {

        int i= m-1, j= nums2.size()-1, k=nums1.size()-1;

        while(i>=0 && j>=0)
        {
            if(nums1[i]>nums2[j])
            {
                nums1[k--]=nums1[i--];
            }
            else if(nums2[j]>nums1[i])
            {
                nums1[k--]=nums2[j--];
            }
            else
            {
                nums1[k--]=nums1[i--];
                nums1[k--]=nums2[j--];
            }
        }

        if(j==-1) return;

        while(j>=0)
        {
            nums1[k--]=nums2[j--];
        }

        return;

    }
};

//9. https://leetcode.com/problems/find-the-duplicate-number/description/

//HARD
// solution link https://leetcode.com/problems/find-the-duplicate-number/solutions/4062178/two-pointer-solution-with-floyd-s-tortoise-and-hare-algorithm-python-javascript-java-and-c/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];

        if (slow === fast) {
            break;
        }
    }

    let slow2 = nums[0];

    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;    
};

// 10. https://leetcode.com/problems/majority-element/description/
//HARD Moore Voting Algorithm
//REVISE- I COULD NOT SOLVE
var majorityElement = function(nums) {
    // Initialize sol and cnt to store the solution and its frequency for respective iterations...
    let sol = 0, cnt = 0;
    // For every element i in the array...
    for(let i = 0; i < nums.length; i++ ) {
        // If cnt is equal to zero, update sol as sol = i
        if(cnt == 0){
            sol = nums[i];
            cnt = 1;
        }
        // If i is equal to candidate, increment cnt...
        else if(sol == nums[i]){
            cnt++;
        }
        // Otherwise, decrement cnt...
        else{
            cnt--;
        }
    }
    // Return & print the solution...
    return sol;
};

// 11.https://leetcode.com/problems/majority-element-ii/description/

//HARD Boyer-Moore solution
//REVISE- I COULD NOT SOLVE

var majorityElement = function(nums) {
    const n = nums.length
    if (n < 1) return []
    if (n < 2) return nums
    
    let count1 = 0, count2 = 0, candidate1 = 0, candidate2 = 1
    
    for (let i = 0; i < n; i++) {
        if (nums[i] == candidate1) count1++
        else if (nums[i] == candidate2) count2++
        else if (count1 == 0) {
            candidate1 = nums[i]
            count1 = 1
        } 
        else if (count2 == 0) {
            candidate2 = nums[i]
            count2 = 1
        } else {
            count1--
            count2--
        }
    }
    
    let x = []
    if (nums.count(candidate1) > n / 3) x.push(candidate1)
    if (nums.count(candidate2) > n / 3) x.push(candidate2)
        
    return x
};
Array.prototype.count = function(num) {
    let count = 0
    for (let i = 0; i < this.length; i++)
        if (this[i] == num) count++
    
    return count
}

//12. https://leetcode.com/problems/unique-paths/description/
//DP 
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

function fn(m, n, i, j, dp){
    if(i>=m || j>=n){
        return 0;
    }

    if(i===m-1 && j===n-1)
        return 1;

    // recursive
    if(dp[i][j]) return dp[i][j];
    let right = fn(m, n, i, j+1, dp);
    
    let down = fn(m, n, i+1, j, dp);

    dp[i][j] = right+down;
    return right+down; 

}

var uniquePaths = function(m, n) {
    let dp = Array.from({length: m}, ()=> Array(n).fill(0));
    return fn(m,n,0,0,dp);
};

//13. https://leetcode.com/problems/reverse-pairs/description/
// HARD
// REVISE- I COULD NOT SOLVE
// Go  to the leetcode discuss

//14. https://leetcode.com/problems/rotate-image/description/
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        
        int n = matrix.size();
        for(int i=0; i<n; i++){

            for(int j=0; j<i; j++){

                swap(matrix[i][j], matrix[j][i]);
            }
        }

        for(int i=0; i<n; i++)
        {
            reverse(begin(matrix[i]), end(matrix[i]));
        }
    }
};



//15.https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mp = new Map()
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        
        mp.set(nums[i], i)
    }
};

//16.https://leetcode.com/problems/4sum/description/


//revise
//better approach

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    const result = []
    
    for(let i = 0; i < nums.length - 3; i++) {
        for(let j = i + 1; j < nums.length - 2; j++) {
            let low = j + 1;
            let high = nums.length - 1

            while(low < high) {
                const sum = nums[i] + nums[j] + nums[low] + nums[high];
                if(sum === target) {
                    result.push([nums[i], nums[j], nums[low], nums[high]])
                    while(nums[low] === nums[low + 1]) low++;
                    while(nums[high] === nums[high - 1]) high--;
                    low++;
                    high--;
                } else if(sum < target) {
                    low++
                } else {
                    high--
                }
            }   
            while(nums[j] === nums[j + 1]) j++;
        }   
        while(nums[i] === nums[i + 1]) i++;
    }
    return result
};

//17 https://leetcode.com/problems/longest-consecutive-sequence/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length==0)
        return 0;
    let st=new Set();
    for(let num of nums){
        st.add(num);
    }
    let ans=1;
    for(let i=0; i<nums.length; i++){
        let val=nums[i];
        if(st.has(val-1)){
            continue;
        }
        else{
            let currAns=1;
            val++;
            while(st.has(val)){
                currAns++;
                val++;
                ans = Math.max(ans, currAns);
            }
        }
    }
    return ans;
};

//18 https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1

class Solution {
    maxLen(arr,n){
        //code here
        //let n=arr.length;
        let ans=0;
        let mp = new Map();
        if(n===1){
            if(arr[0]===0)
                return 1;
            return 0;
        }
        let sumTillNow=0;
        for(let i=0; i<n; i++){
            sumTillNow+=arr[i];
            if(sumTillNow===0){
                ans=Math.max(ans, i+1);
            }
            else{
                if(mp.has(sumTillNow)){
                    ans=Math.max(ans, i-mp.get(sumTillNow));
                }
            }
            //console.log(mp.has(sumTillNow));
            if(!mp.has(sumTillNow)){
                mp.set(sumTillNow, i);
            }
            
        }
        return ans;
    }
   
}

// 15,  -2,   2,  -8,  1,  7,  10,  23
// 15   13    15   7   8   15  25   48

//19. https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
//Revise

var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let maxSize = 0;

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
}