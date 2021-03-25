/*

4.8 First Common Ancestor: Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree. 

*/

var lca = function(root, t1, t2) {
  if (!root) return false;
  let left = lca(root.left, t1, t2);
  let right = lca(root.right, t1, t2);
  let mid = (root.val === t1 || root.val === t2);
  if (left + right + mid > 1) {
    return root;
  }
  return left || right;
};

/*
           5
        4     6
      3   2  1  7
         0
*/