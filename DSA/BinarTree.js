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

//leetcode.com/problems/binary-tree-right-side-view/
// right view of binary tree

https: function levelOrder(root) {
  if (!root) return [];
  let q = [];
  let ans = [];
  q.push(root);
  while (q.length > 0) {
    let s = q.length;
    for (let i = 0; i < s; i++) {
      let currentNode = q.shift();
      if (i == s - 1) {
        ans.push(currentNode.val);
      }

      if (currentNode.left) {
        q.push(currentNode.left);
      }
      if (currentNode.right) {
        q.push(currentNode.right);
      }
    }
  }
  return ans;
}

var rightSideView = function (root) {
  return levelOrder(root);
};

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

class Solution {
  topViewBFS(root, mp) {
    if (!root) return;
    let q = [];
    q.push({ node: root, hLevel: 0 });
    while (q.length) {
      let s = q.length;
      let nodeObj = q.shift();
      let nodeCurr = nodeObj.node;
      let hLevelCurr = nodeObj.hLevel;
      if (!mp.has(hLevelCurr)) mp.set(hLevelCurr, nodeCurr.data);
      if (nodeCurr.left)
        q.push({ node: nodeCurr.left, hLevel: hLevelCurr - 1 });
      if (nodeCurr.right)
        q.push({ node: nodeCurr.right, hLevel: hLevelCurr + 1 });
    }
  }
  topView(root) {
    let horizontalLevel = new Map();
    this.topViewBFS(root, horizontalLevel);
    let result = [...horizontalLevel.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([key, value]) => value);
    return result;
  }
}

//https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/description/
//Revise- I could not solve
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
 * @return {number[][]}
 */
function topViewBFS(root, mp) {
  if (!root) return;
  let q = [];
  q.push({ node: root, hLevel: 0 });
  while (q.length) {
    let s = q.length;
    let nodeObj = q.shift();
    let nodeCurr = nodeObj.node;
    let hLevelCurr = nodeObj.hLevel;
    if (!mp.has(hLevelCurr)) {
      mp.set(hLevelCurr, [nodeCurr.val]);
    } else mp.set(hLevelCurr, [...mp.get(hLevelCurr), nodeCurr.val]);
    if (nodeCurr.left) q.push({ node: nodeCurr.left, hLevel: hLevelCurr - 1 });
    if (nodeCurr.right)
      q.push({ node: nodeCurr.right, hLevel: hLevelCurr + 1 });
  }
}
var verticalTraversal = function (root) {
  let horizontalLevel = new Map();
  topViewBFS(root, horizontalLevel);
  let result = [...horizontalLevel.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([key, value]) => value);
  return result;
};

// better approach

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  const map = {};
  const dfs = (node, x = 0, y = 0) => {
    if (!node) return;
    if (map[x] === undefined) {
      map[x] = {};
    }
    if (map[x][y] === undefined) {
      map[x][y] = [];
    }
    map[x][y].push(node.val);
    dfs(node.left, x - 1, y + 1);
    dfs(node.right, x + 1, y + 1);
  };
  dfs(root);
  const result = [];
  const x = Object.keys(map).sort((a, b) => a - b);
  for (const i of x) {
    const column = [];
    const y = Object.keys(map[i]).sort((a, b) => a - b);
    for (const j of y) {
      column.push(...map[i][j].sort((a, b) => a - b));
    }
    result.push(column);
  }
  return result;
};

//https://www.geeksforgeeks.org/problems/root-to-leaf-paths/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=root-to-leaf-paths
//root to leaf path
class Solution {
  /**
* @param Node root

* @returns number[][]
*/

  dfs(root, path, ans) {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      path.push(root.data);
      ans.push([...path]);
      return;
    }
    path.push(root.data);
    this.dfs(root.left, path, ans);
    if (root.left) path.pop();
    this.dfs(root.right, path, ans);
    if (root.right) path.pop();
  }

  Paths(root) {
    let path = [],
      ans = [];
    this.dfs(root, path, ans);
    return ans;
  }
}

//https://leetcode.com/problems/maximum-width-of-binary-tree/description/
// Maximum Width of Binary Tree
// Revise- I could not solve it
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
 * @return {number}
 */
function topViewBFS(root, mp) {
  if (!root) return;
  let q = [];
  q.push({ node: root, hLevel: 0, vLevel: 0 });
  while (q.length) {
    let s = q.length;
    let nodeObj = q.shift();
    let nodeCurr = nodeObj.node;
    let hLevelCurr = nodeObj.hLevel;
    let vLevelCurr = nodeObj.vLevel;
    if (!mp.has(vLevelCurr)) {
      mp.set(vLevelCurr, [hLevelCurr]);
    } else mp.set(vLevelCurr, [...mp.get(vLevelCurr), hLevelCurr]);
    if (nodeCurr.left)
      q.push({
        node: nodeCurr.left,
        hLevel: hLevelCurr - 1,
        vLevel: vLevelCurr + 1,
      });
    if (nodeCurr.right)
      q.push({
        node: nodeCurr.right,
        hLevel: hLevelCurr + 1,
        vLevel: vLevelCurr + 1,
      });
  }
}
var widthOfBinaryTree = function (root) {
  let horizontalLevel = new Map();
  topViewBFS(root, horizontalLevel);
  let result = [...horizontalLevel.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([key, value]) => value);
  console.log(horizontalLevel);
  maxWidth = -1;
  for (let [key, value] of horizontalLevel) {
    let width = value[value.length - 1] - value[0];
    maxWidth = Math.max(maxWidth, width);
  }
  return maxWidth;
};

// better

//BFS
const widthOfBinaryTree = (root) => {
  let l = [],
    r = [],
    queue = [[root, 0, 0]];
  while (queue.length) {
    let [node, level, i] = queue.shift();
    if (!node) continue;
    (l[level] = l[level] || i), (r[level] = i - l[level]);
    queue.push(
      [node.left, level + 1, i * 2 - 1],
      [node.right, level + 1, i * 2]
    );
  }
  return Math.max(...r) + 1;
};

//DFS
const widthOfBinaryTree = (root) => {
  let l = [],
    r = [];
  const f = (node, level, i) => {
    if (!node) return;
    (l[level] = l[level] || i), (r[level] = i - l[level]);
    f(node.left, level + 1, i * 2 - 1), f(node.right, level + 1, i * 2);
  };
  f(root, 0, 0);
  return Math.max(...r) + 1;
};

//https://leetcode.com/problems/binary-tree-level-order-traversal/description/
//Level order traversal

var levelOrder = function (root) {
  let q = [root],
    ans = [];
  while (q[0]) {
    let qlen = q.length,
      row = [];
    for (let i = 0; i < qlen; i++) {
      let curr = q.shift();
      row.push(curr.val);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }
    ans.push(row);
  }
  return ans;
};

//https://leetcode.com/problems/maximum-depth-of-binary-tree/
//Maximum Depth of Binary Tree

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
 * @return {number}
 */

function helper(root, level, maxLen) {
  if (!root) return;
  // let maxLeft = maxDepth(root.left);
  // let maxRight = maxDepth(root.right);
  // return max(maxLeft, maxRight)+1;

  if (maxLen[0] < level) maxLen[0] = level;
  helper(root.left, level + 1, maxLen);
  helper(root.right, level + 1, maxLen);
  return;
}

var maxDepth = function (root) {
  let maxLen = [-1];
  helper(root, 0, maxLen);
  return maxLen[0] + 1;
};

//https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
//Binary Tree Zigzag Level Order Traversal

var zigzagLevelOrder = function (root) {
  if (!root) return [];

  let result = [],
    q = [root],
    level = 0;

  while (q.length) {
    let size = q.length,
      currLevel = [];
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      currLevel.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    if (level % 2 === 1) currLevel.reverse();
    result.push(currLevel);
    level++;
  }
  return result;
};

//https://leetcode.com/problems/same-tree/description/
//Same Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function DFS(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return p.val === q.val && DFS(p.left, q.left) && DFS(p.right, q.right);
}

var isSameTree = function (p, q) {
  return DFS(p, q);
};

//https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
//Lowest Common Ancestor of a Binary Tree

var lowestCommonAncestor = function (root, p, q) {
  const dfs = (node) => {
    if (node === null) {
      return null;
    }

    if (node === p || node === q) {
      return node;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    return left && right ? node : left || right;
  };

  return dfs(root);
};
