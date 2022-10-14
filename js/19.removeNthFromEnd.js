/**
 * 19. Remove Nth Node From End of List
 *
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 * @see https://leetcode.com/problems/remove-nth-node-from-end-of-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * @see https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/2702254/JS-solution-with-two-pointer-technique-explained
 */
function removeNthFromEnd(head, n) {
  let slow = head,
    fast = head;

  while (n > 1) {
    fast = fast.next;
    n--;
  }

  // Delete Head node
  if (!fast.next) {
    return head.next;
  }

  // Transverse to the previous of the given node
  while (fast.next.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // Delete the given node
  slow.next = slow.next.next;
  return head;
}

/** JUDGE **/
let head, expected, result;

head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
expected = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 5,
        next: null,
      },
    },
  },
};
result = removeNthFromEnd(head, 2);
console.log(
  JSON.stringify(result) == JSON.stringify(expected),
  result,
  expected
);

head = {
  val: 1,
  next: null,
};
expected = null;
result = removeNthFromEnd(head, 1);
console.log(
  JSON.stringify(result) == JSON.stringify(expected),
  result,
  expected
);

head = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};
expected = {
  val: 1,
  next: null,
};
result = removeNthFromEnd(head, 1);
console.log(
  JSON.stringify(result) == JSON.stringify(expected),
  result,
  expected
);

console.log("DONE");
