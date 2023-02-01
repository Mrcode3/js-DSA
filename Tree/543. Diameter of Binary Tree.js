var diameterOfBinaryTree = function (root) {
  if (!root) return 0;
  let max = 0;

  function dfs(node) {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    max = Math.max(left + right, max);

    return 1 + Math.max(left, right);
  }

  dfs(root);
  return max;
};
