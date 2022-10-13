/**
 * 142. Linked List Cycle II
 *
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
 * @see https://leetcode.com/problems/linked-list-cycle-ii/
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function detectCycle(head) {
  let slow = head;
  let fast = head;

  function hasCycle(head) {
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow == fast) return true;
    }
    return false;
  }

  if (!hasCycle(head)) {
    return null;
  }
  slow = head;
  while (slow != fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}
