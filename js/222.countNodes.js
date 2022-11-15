/**
 * 222. Count Complete Tree Nodes
 *
 * Given the root of a complete binary tree, return the number of the nodes in the tree.
 * Design an algorithm that runs in less than O(n) time complexity.
 * @see https://leetcode.com/problems/count-complete-tree-nodes/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Order N
 * @param {TreeNode} root
 * @return {number}
 */
function _countNodes(root) {
  if (root) {
    return 1 + countNodes(root.left) + countNodes(root.right);
  } else {
    return 0;
  }
}
/**
 * Order log N * log N
 * @param {TreeNode} root
 * @return {number}
 */
function countNodes(root) {
  const leftH = getLeftDepth(root);
  const rightH = getRightDepth(root);

  if (leftH === rightH) {
    return 2 ** leftH - 1;
  } else {
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
}
function getLeftDepth(node) {
  if (node) {
    return 1 + getLeftDepth(node.left);
  } else {
    return 0;
  }
}
function getRightDepth(node) {
  if (node) {
    return 1 + getRightDepth(node.right);
  } else {
    return 0;
  }
}
