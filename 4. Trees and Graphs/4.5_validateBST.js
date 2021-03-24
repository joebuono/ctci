/*

4.5 Validate BST: Implement a function to check if a binary tree is a binary search tree. 

*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}



// Solution 2: (The Best)
// Time: O(n), we must visit each node
// Space: O(log n) on balanced tree, there are up to O(log n) recursive calls on the stack since we may recurse up to the depth of the tree
var validateBST = function(root, min, max) {
  if (!root) return true;
  if (min !== null && root.val <= min) return false;
  if (max !== null && root.val > max) return false;
  return validateBST(root.left, min, root.val) && validateBST(root.left, root.val, max);
}

// Solution 1: In-order (not fully fleshed out because it's not the most efficient)
var validateBST = function(root) {
  const traversal = [];

  const inorderDFS = function(node) {
    if (!node) return null;
    inorderDFS(node.left);
    traversal.push(node);
    inorderDFS(node.right);
  }

  inorderDFS(root);
};


var iterativeInorder = function(root) {
  const results = [];
  const stack = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      results.push(root.val);
      root = root.right;
    }
  }

  return results;
};


