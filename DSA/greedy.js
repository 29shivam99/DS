//https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1
//n meetings in one/1 room

class Solution {
  //Function to find the maximum number of meetings that can
  //be performed in a meeting room.
  maxMeetings(start, end, n) {
    // code here
    let arr = [];

    for (let i = 0; i < n; i++) {
      arr.push({
        start: start[i],
        end: end[i],
      });
    }
    arr.sort((a, b) => a.end - b.end);
    let ans = 0,
      lastEnd = -1;
    for (let i = 0; i < n; i++) {
      if (arr[i].start > lastEnd) {
        ans++;
        lastEnd = arr[i].end;
      }
    }

    return ans;
  }
}

// https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1
// fractional knapsack

// User function Template for javascript

/**
 * @param {number} W
 * @param {Item[]} arr
 * @param {number} n
 * @returns {number}
 */

/*
class Item{
    constructor(value, weight){
        this.value = value;
        this.weight = weight;
    }
}
*/

class Solution {
  // Function to get the maximum total value in the knapsack.
  fractionalKnapsack(W, arr, n) {
    // Sort items by value-to-weight ratio in descending order
    arr.sort((a, b) => b.value / b.weight - a.value / a.weight);
    let maxValue = 0;
    for (let i = 0; i < n && W > 0; i++) {
      if (arr[i].weight <= W) {
        maxValue += arr[i].value;
        W -= arr[i].weight;
      } else {
        maxValue += (arr[i].value / arr[i].weight) * W;
        W = 0; // Knapsack is full
      }
    }
    return maxValue;
  }
}
