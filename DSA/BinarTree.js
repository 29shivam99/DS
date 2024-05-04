//https://leetcode.com/problems/binary-tree-inorder-traversal/
//Binary Tree Inorder Traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Left Root Right

function inorder(root, ans) {
  if (!root) {
    return;
  }
  inorder(root.left, ans);
  ans.push(root.val);
  inorder(root.right, ans);
}
var inorderTraversal = function (root) {
  let ans = [];
  inorder(root, ans);
  return ans;
};

//https://leetcode.com/problems/binary-tree-preorder-traversal/description/
//Binary Tree Preorder Traversal

var preorderTraversal = function (root, res = []) {
  if (!root) return [];
  res.push(root.val);
  if (root.left) preorderTraversal(root.left, res);
  if (root.right) preorderTraversal(root.right, res);
  return res;
};

//https://leetcode.com/problems/binary-tree-postorder-traversal/description/
//Binary Tree Postorder Traversal

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  let ans = [];
  let traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    ans.push(node.val);
  };

  traverse(root);
  return ans;
};

//https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1
//Left View of Binary Tree

/**
 * @param {Node} root
 * @returns {number[]}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  constructor() {}
  LV(root, ans, levelsDone, currentLevel) {
    if (!root) {
      return;
    }
    if (levelsDone < currentLevel) {
      ans.push(root.data);

      levelsDone[0]++;
    }

    this.LV(root.left, ans, levelsDone, currentLevel + 1);

    this.LV(root.right, ans, levelsDone, currentLevel + 1);
  }

  leftView(root) {
    //your code here
    let ans = [];
    let levelsDone = [-1];
    this.LV(root, ans, levelsDone, 0);
    return ans;
  }
}

//https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1
//Bottom View of Binary Tree

/**
 * @param {Node} root
 * @returns {number[]}
 */
class Solution {
  bottomViewHelperDFS(root, mp, hLevel, vLevel) {
    if (!root) return;

    if (!mp.has(hLevel) || mp.get(hLevel).verticalLevel <= vLevel) {
      mp.set(hLevel, { verticalLevel: vLevel, value: root.data });
    }

    this.bottomViewHelper(root.left, mp, hLevel - 1, vLevel + 1);
    this.bottomViewHelper(root.right, mp, hLevel + 1, vLevel + 1);
  }

  bottomViewHelperBFS(root, mp) {
    if (!root) return;

    let q = [];

    q.push({ node: root, hLevel: 0 });
    // console.log(q.empty, q.length)
    while (q.length) {
      let s = q.length;

      let nodeObj = q.shift();
      let nodeCurr = nodeObj.node;
      let hLevelCurr = nodeObj.hLevel;
      //console.log(nodeObj);
      mp.set(hLevelCurr, nodeCurr.data);
      //console.+9log(mp);
      if (nodeCurr.left)
        q.push({ node: nodeCurr.left, hLevel: hLevelCurr - 1 });
      if (nodeCurr.right)
        q.push({ node: nodeCurr.right, hLevel: hLevelCurr + 1 });
    }
  }

  bottomView(root) {
    let horizontalLevel = new Map();
    //this.bottomViewHelperDFS(root, horizontalLevel, 0, 0);
    this.bottomViewHelperBFS(root, horizontalLevel);
    // console.log(horizontalLevel);
    let result = [...horizontalLevel.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([key, value]) => value);
    return result;
  }
}

//https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1
//Top View of Binary Tree

/**
 * @param {Node} root
 */
/**
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
  topViewBFS(root, mp) {
    if (!root) return;

    let q = [];

    q.push({ node: root, hLevel: 0 });
    // console.log(q.empty, q.length)
    while (q.length) {
      let s = q.length;

      let nodeObj = q.shift();
      let nodeCurr = nodeObj.node;
      let hLevelCurr = nodeObj.hLevel;
      if (!mp.has(hLevelCurr)) mp.set(hLevelCurr, nodeCurr.data);
      //console.+9log(mp);
      if (nodeCurr.left)
        q.push({ node: nodeCurr.left, hLevel: hLevelCurr - 1 });
      if (nodeCurr.right)
        q.push({ node: nodeCurr.right, hLevel: hLevelCurr + 1 });
    }
  }
  //Function to return a list of nodes visible from the top view
  //from left to right in Binary Tree.
  topView(root) {
    //your code here
    let horizontalLevel = new Map();
    //this.bottomViewHelperDFS(root, horizontalLevel, 0, 0);
    this.topViewBFS(root, horizontalLevel);
    // console.log(horizontalLevel);
    let result = [...horizontalLevel.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([key, value]) => value);
    return result;
  }
}
