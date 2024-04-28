/**
 * 430. Flatten a Multilevel Doubly Linked List
 *
 * You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.
 *
 * Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.
 *
 * Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.
 * @see https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/description/
 */

/**
 * @param {Node} head
 * @return {Node}
 */
function flatten(head) {
  if (!head) return head;
  const flattenNext = flatten(head.next);
  if (head.child) {
    const flattenChild = flatten(head.child);
    const flattenChildTail = getTail(flattenChild);

    // Link child flatten list and next flatten List
    flattenChildTail.next = flattenNext;
    if (flattenNext) {
      flattenNext.prev = flattenChildTail;
    }

    // Link head and child flatten list
    head.next = flattenChild;
    flattenChild.prev = head;

    // Remove child list
    head.child = null;
  } else {
    // Link head and next flatten list
    head.next = flattenNext;
    if (flattenNext) {
      flattenNext.prev = head;
    }
  }
  return head;
}

/**
 * @param {Node} current
 * @return {Node}
 */
function getTail(current) {
  while (current.next) {
    current = current.next;
  }
  return current;
}
