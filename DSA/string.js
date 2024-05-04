//https://leetcode.com/problems/reverse-words-in-a-string/
// Reverse Words in a String

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  s = s.trim();
  return s
    .split(" ")
    .filter((item) => {
      return item !== "";
    })
    .map((item) => {
      return item.split().reverse();
    })
    .reverse()
    .join(" ");
};

// https://leetcode.com/problems/longest-palindromic-substring/description/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = "";
  const findLongestPalindrome = (str, i, j) => {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i -= 1;
      j += 1;
    }
    return str.slice(i + 1, j);
  };
  for (let i = 0; i < s.length; i++) {
    const current1 = findLongestPalindrome(s, i, i);
    const current2 = findLongestPalindrome(s, i, i + 1);
    const longerPalindrome =
      current1.length > current2.length ? current1 : current2;
    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }
  return longest;
};

//https://leetcode.com/problems/roman-to-integer/description/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let ans = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let char = s[i];

    if (char === "I") {
      if (i < n - 1 && s[i + 1] == "V") {
        i++;
        ans += 4;
      } else if (i < n - 1 && s[i + 1] == "X") {
        i++;
        ans += 9;
      } else ans += 1;
    }
    if (char === "V") {
      ans += 5;
    }
    if (char === "X") {
      if (i < n - 1 && s[i + 1] == "L") {
        i++;
        ans += 40;
      } else if (i < n - 1 && s[i + 1] == "C") {
        i++;
        ans += 90;
      } else ans += 10;
    }
    if (char === "L") {
      ans += 50;
    }
    if (char === "C") {
      if (i < n - 1 && s[i + 1] == "D") {
        i++;
        ans += 400;
      } else if (i < n - 1 && s[i + 1] == "M") {
        i++;
        ans += 900;
      } else ans += 100;
    }
    if (char === "D") {
      ans += 500;
    }
    if (char === "M") {
      ans += 1000;
    }
  }
  return ans;
};

//https://leetcode.com/problems/string-to-integer-atoi/description/
// revise
var myAtoi = function (str) {
  let i = 0,
    sign = 1,
    num = 0,
    MIN = -2147483648,
    MAX = 2147483647;
  str = str.trim();
  if (str[i] == "-" || str[i] == "+") sign = str[i++] == "-" ? -1 : 1;
  while (
    str[i] &&
    str[i].charCodeAt(0) - 48 <= 9 &&
    str[i].charCodeAt(0) - 48 >= 0
  ) {
    num = num * 10 + (str[i++].charCodeAt(0) - 48);
  }
  num = sign * num;
  return num <= MIN ? MIN : num >= MAX ? MAX : num;
};

//https://leetcode.com/problems/longest-common-prefix/description/

var longestCommonPrefix = function (strs) {
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substr(0, i);
  }
  return strs[0];
};
