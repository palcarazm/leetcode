/**
 * 203. Remove Linked List Elements
 *
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 * @see https://leetcode.com/problems/remove-linked-list-elements/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
  // Head unlink
  while (head && head.val === val) {
    head = head.next;
  }

  let tmp = head,
    next;

  // Body unlink
  while (tmp && tmp.next && tmp.next.next) {
    if (tmp.next.val === val) {
      // Unlink while next.val is val
      next = tmp.next.next;
      while (next && next.val === val) {
        next = next.next;
      }
      tmp.next = next;
    }
    tmp = tmp.next;
  }

  // Tail unlink
  if (tmp && tmp.next && tmp.next.val === val) {
    tmp.next = null;
  }

  return head;
}
