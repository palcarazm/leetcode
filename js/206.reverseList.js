/**
 * 206. Reverse Linked List
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * @see https://leetcode.com/problems/reverse-linked-list/
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
 * @see https://leetcode.com/problems/reverse-linked-list/discuss/2702823/JS-solution-iteration-and-recursive-explained
 */
function _reverseList(head) {
  let reverse = null;

  while (head) {
    reverse = new ListNode(head.val, reverse);
    head = head.next;
  }

  return reverse;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * @see https://leetcode.com/problems/reverse-linked-list/discuss/2702823/JS-solution-iteration-and-recursive-explained
 */
function reverseList(head) {
  if (head == null || head.next == null) {
    return head;
  }
  let next = head.next;
  let reverse = reverseList(next);

  // Move current node to tail
  next.next = head;
  head.next = null;

  return reverse;
}
