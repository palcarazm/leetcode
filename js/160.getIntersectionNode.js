/**
 * 160. Intersection of Two Linked Lists
 * 
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
 * If the two linked lists have no intersection at all, return null.
 * @see https://leetcode.com/problems/intersection-of-two-linked-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * @see https://leetcode.com/explore/learn/card/linked-list/214/two-pointer-technique/1215/discuss/2116221/Visual-Explanation-or-One-Pass-JAVA
 */
function getIntersectionNode(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;

    while (pointerA != pointerB) {
        pointerA = pointerA == null? headB : pointerA.next;
        pointerB = pointerB == null? headA : pointerB.next;
    }
    return pointerA;
}