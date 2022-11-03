/**
 * 21. Merge Two Sorted Lists
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * @see https://leetcode.com/problems/merge-two-sorted-lists/
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function _mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  let cur1 = list1,
    cur2 = list2,
    prev = null;

  while (cur1 && cur2) {
    if (cur1.val > cur2.val) {
      if (prev) {
        prev.next = cur2;
        cur2 = cur2.next;
        prev.next.next = cur1;
        prev = prev.next;
      } else {
        list1 = new ListNode(cur2.val, list1);
        prev = list1;
        cur2 = cur2.next;
      }
    } else {
      if (prev) {
        prev = prev.next;
      } else {
        prev = cur1;
      }
      cur1 = cur1.next;
    }
  }
  if (cur2) {
    while (prev && prev.next) {
      prev = prev.next;
    }
    prev.next = cur2;
  }
  return list1;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  if (!list1) {
    return list2;
  } else if (!list2) {
    return list1;
  } else if (list1.val > list2.val) {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  } else {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
}
