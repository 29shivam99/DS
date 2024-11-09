let root = document.querySelector(".container");
console.log(root.children);

// considering that a single node means height 1
const findHeight = function (root) {
  if (!root) {
    return 0;
  }

  let children = root.children;

  if (!children) return 1;

  let maxHeight = 0;

  for (let child of children) {
    maxHeight = Math.max(maxHeight, findHeight(child));
  }

  return maxHeight + 1;
};

let ht = findHeight(root);
console.log(ht);
