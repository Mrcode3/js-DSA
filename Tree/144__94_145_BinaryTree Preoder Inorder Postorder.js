//   Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var preorderTraversal = function (root) {
  //recursive
  if (!root) return [];
  let res = [];

  function travesal(node) {
    res.push(node.value);
    if (!node.left) travesal(node.left);
    if (!node.right) travesal(node.right);
  }
  travesal(root);

  return res;
};

function countDownFrom(number) {
  if (number === 0) {
    return 10;
  }

  console.log(number);
  countDownFrom(number - 1);
}

countDownFrom(5);
