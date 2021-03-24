/*

4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height. 

*/


// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var minimalTree = function(arr) {
  if (!arr || !arr.length) return null;
  // find middle element, that's the root
  const middleIndex = Math.floor(arr.length / 2);
  const root = new TreeNode(arr[middleIndex]);
  root.left = minimalTree(arr.slice(0, middleIndex));
  root.right = minimalTree(arr.slice(middleIndex));
  return root;
};

let test1 = [1,2,3,4,5,6,7];