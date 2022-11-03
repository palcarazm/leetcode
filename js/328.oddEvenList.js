/**
 * 328. Odd Even Linked List
 *
 * Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
 * The first node is considered odd, and the second node is even, and so on.
 * Note that the relative order inside both the even and odd groups should remain as it was in the input.
 * You must solve the problem in O(1) extra space complexity and O(n) time complexity.
 * @see https://leetcode.com/problems/odd-even-linked-list/
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
 * @return {ListNode}
 */
function oddEvenList(head) {
  if (head && head.next) {
    let odd = head.next,
      evenLast = head,
      evenNext;

    while (odd && odd.next) {
      evenNext = odd.next;
      odd.next = odd.next.next;
      evenNext.next = evenLast.next;
      evenLast.next = evenNext;

      odd = odd.next;
      evenLast = evenLast.next;
    }
  }
  return head;
}
