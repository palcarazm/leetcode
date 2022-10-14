/**
 * 2095. Delete the Middle Node of a Linked List
 *
 * Given the head of a linked list, delete the middle node, and return the head of the modified linked list.
 * The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
 * @see https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
 */

/**
 * Definition for singly-linked list.
 */
/* function ListNode(val, next) {
 *   this.val = val === undefined ? 0 : val;
 *   this.next = next === undefined ? null : next;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @see https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/discuss/2701461/JS-solution-with-two-pointer-explained
 */
function deleteMiddle(head) {
  if (head.next == null) return null;

  let slow = head;
  let fast = head;
  let prevSlow = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    prevSlow = slow;
    slow = slow.next;
  }

  prevSlow.next = slow.next;
  return head;
}
