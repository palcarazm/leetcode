/**
 * 2. Add Two Numbers
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * @see https://leetcode.com/problems/add-two-numbers/
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let sum = 0,
    result = new ListNode(0, null),
    write = result;
  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    write.val = sum % 10;
    if (sum >= 10 || l1 || l2) {
      write.next = new ListNode(parseInt(sum / 10), null);
      write = write.next;
    }
    sum = write.val;
  }
  return result;
}
