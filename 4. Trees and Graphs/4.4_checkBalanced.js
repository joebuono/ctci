/*

4.3 Check Balanced: Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any node never differ by more than one. 

*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

// Inefficient solution
// Time: O (n log n)

// Although, this is a pretty slick two-liner for getting the height of a tree!
var getHeight = function(root) {
  if (!root) return -1;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
};

var isBalanced = function(root) {
  if (!root) return true;
  let diff = getHeight(root.left) - getHeight(root.right);
  if (Math.abs(diff) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
};


// Efficient solution
// Time: O(n)
// Space: O(h), where h is the height of the tree
// We are using Number.MIN_SAFE_INTEGER as an error code

var getHeight = function(root) {
  if (!root) return -1;

  let leftHeight = getHeight(root.left);
  if (leftHeight === Number.MIN_SAFE_INTEGER) {
    return Number.MIN_SAFE_INTEGER; // Pass error up
  }

  let rightHeight = getHeight(root.left);
  if (rightHeight === Number.MIN_SAFE_INTEGER) {
    return Number.MIN_SAFE_INTEGER; // Pass error up
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return Number.MIN_SAFE_INTEGER; // Pass error up
  }
  
  return Math.max(leftHeight, rightHeight) + 1;
}

var isBalanced = function(root) {
  return checkHeight(root) !== Number.MIN_SAFE_INTEGER;
};
