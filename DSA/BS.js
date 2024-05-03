//https://leetcode.com/problems/single-element-in-a-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */

function BS(nums) {
  let n = nums.length;
  let l = 0;
  let h = n - 1;

  // [1,1,2,3,3,4,4,8,8]
  //  0 1 2 3 4 5 6 7 8

  // [3, 3, 7, 7, 10, 11, 11]
  //  0  1  2  3   4   5   6

  while (l <= h) {
    let m = parseInt(l + (h - l) / 2);
    console.log(m);
    if (m > 0 && nums[m] === nums[m - 1]) {
      if (m % 2 === 0) {
        h = m - 1;
      } else {
        l = m + 1;
      }
    } else if (m < n && nums[m] === nums[m + 1]) {
      if (m % 2 === 0) {
        l = m + 1;
      } else {
        h = m - 1;
      }
    } else {
      return m;
    }
  }
  return -1;
}

var singleNonDuplicate = function (nums) {
  let ind = BS(nums);
  console.log(ind);
  return nums[ind];
};

// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function BS(nums, tar) {
  let n = nums.length;
  let l = 0,
    h = n - 1;

  while (l <= h) {
    let m = parseInt(l + (h - l) / 2);

    if (nums[m] === tar) return m;

    // if pivot element is on right of m
    if (m === 0 || nums[m] >= nums[0]) {
      if (tar >= nums[0] && tar < nums[m]) {
        h = m - 1;
      } else l = m + 1;
    }
    // if pivot element is on left of m
    else if (m === n - 1 || nums[m] <= nums[n - 1]) {
      if (tar <= nums[n - 1] && tar > nums[m]) l = m + 1;
      else h = m - 1;
    }
  }

  return -1;
}

var search = function (nums, target) {
  return BS(nums, target);
};

// [4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2]
//  0  1  2  3  4  5  6   7   8  9  10

//https://leetcode.com/problems/median-of-two-sorted-arrays/description/

// Revise - I could not solve it

var findMedianSortedArrays = function (nums1, nums2) {
  //find the smallest length array
  const len1 = nums1.length;
  const len2 = nums2.length;

  //swap if len1>len2
  if (len1 > len2) return findMedianSortedArrays(nums2, nums1);

  //find high and low
  let lo = 0;
  let hi = len1;

  while (lo <= hi) {
    //find cut1 and cut2
    let cut1 = Math.floor((lo + hi) / 2);
    let cut2 = Math.floor((len1 + len2) / 2) - cut1;

    //find l1 , l2, r1, r2
    let l1 = cut1 === 0 ? Number.NEGATIVE_INFINITY : nums1[cut1 - 1];
    let l2 = cut2 === 0 ? Number.NEGATIVE_INFINITY : nums2[cut2 - 1];
    let r1 = cut1 === len1 ? Number.MAX_VALUE : nums1[cut1];
    let r2 = cut2 === len2 ? Number.MAX_VALUE : nums2[cut2];

    //loop again if l1>r2 || l2>r1
    if (l1 > r2) hi = cut1 - 1;
    else if (l2 > r1) lo = cut1 + 1;
    else {
      //return median for even and odd
      if ((len1 + len2) % 2 === 0)
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      else return Math.min(r1, r2);
    }
  }
  return -1;
};

// https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1
//my approach- my base and approach is wrong

// {1, 3, 4, 8, 10, 14, 19}

// function isThisAnswer(B, m, k, midVal, newTarget){
//     let l=0, h=m-1;

//     if(B[0]>midVal) return 0;
//     if(B[m-1]<midVal) return m;

//     for(let i=0; i<m; i++){
//         if(B[i] === midVal){
//             return i;
//         }

//         else if(i<m-1 && B[i]<midVal && B[i+1]>midVal){
//             return i+1;
//         }
//     }

//     // for(let i=0; i<m; i++){
//     //     if(B[i]<midVal){
//     //         newTarget--;
//     //     }
//     // }
// }

// function BS(A,B,n,m,k){
//     let l=0, h=n-1;

//     while(l<=h){
//         let mid = parseInt(l+(h-l)/2);

//         if(mid+1>k){
//             h=mid-1;
//         }
//         else{
//             let len = isThisAnswer(B, m, k, A[mid], k-(mid+1));
//             let totalLen = mid+1 + len;
//             console.log(len, mid);
//             if(totalLen === k)
//                 return A[mid];
//             else if(totalLen>k)
//                 h=mid-1;
//             else
//                 l=mid+1;
//         }
//     }
//     return -1;
// }

// class Solution {
//     kthElement(A,B,n,m,k){
//         //code here
//         if(A[0]<B[0])
//             return BS(A,B,n,m,k);
//         return BS(B,A,n,m,k);

//     }
// }

// better answer- revise it
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @returns {number}
 */

class Solution {
  countElementsLessThanOrEqualToMid(arr, n, mid) {
    let count = 0;
    let left = 0,
      right = n - 1;

    while (left <= right) {
      let midIndex = Math.floor((left + right) / 2);
      if (arr[midIndex] <= mid) {
        count = midIndex + 1; // Increment the count by midIndex + 1, as all elements before midIndex are also less than or equal to mid.
        left = midIndex + 1;
      } else {
        right = midIndex - 1;
      }
    }

    return count;
  }

  kthElement(A, B, n, m, k) {
    let left = Math.min(A[0], B[0]);
    let right = Math.max(A[n - 1], B[m - 1]);

    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      let countA = this.countElementsLessThanOrEqualToMid(A, n, mid);
      let countB = this.countElementsLessThanOrEqualToMid(B, m, mid);
      let totalCount = countA + countB;

      if (totalCount < k) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return left;
  }
}
