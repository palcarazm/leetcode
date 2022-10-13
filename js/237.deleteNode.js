/**
 * 237. Delete Node in a Linked List
 *
 * There is a singly-linked list head and we want to delete a node node in it.
 * You are given the node to be deleted node. You will not be given access to the first node of head.
 * All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.
 * @see https://leetcode.com/problems/delete-node-in-a-linked-list/
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Delete Node in a Linked List
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * @see https://leetcode.com/problems/delete-node-in-a-linked-list/discuss/2697444/javascript-solution-explained
 */
function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}
