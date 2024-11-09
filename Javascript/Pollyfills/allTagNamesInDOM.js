// Given a DOM tree, please return all the tag names it has.

const root = document.querySelector(".container");

console.log(root.tagName);

const findAllTags = function (root, tagNames) {
  if (!root) {
    return;
  }

  tagNames.add(root.tagName.toLowerCase());

  let children = root.children;

  for (let child of children) {
    findAllTags(child, tagNames);
  }
};

tagNames = [];
let uniqueTagNames = new Set();
findAllTags(root, uniqueTagNames);
console.log(uniqueTagNames);

// M2

function getTags(tree, tags = new Set()) {
  tags.add(tree.tagName.toLowerCase());

  if (tree.childElementCount) {
    for (let child of tree.children) {
      getTags(child, tags);
    }
  }

  return Array.from(tags);
}
