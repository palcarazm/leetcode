/**
 * 234. Palindrome Linked List
 *
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 * @see https://leetcode.com/problems/palindrome-linked-list/
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Check if it is a palindrome
 * Array approach
 * @param {ListNode} head
 * @return {boolean}
 */
function __isPalindrome(head) {
  let array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }

  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    if (array[start++] !== array[end--]) {
      return false;
    }
  }

  return true;
}

/**
 * Check if it is a palindrome
 * Recursive approach
 * @param {ListNode} head
 * @return {boolean}
 */
function _isPalindrome(head) {
  function _isPalindromeRecursive(tail) {
    // Check if tail is the tail
    if (tail == null) return true;

    // Recursively transverse the linked list, verifying if is still can be a palindrome
    if (!_isPalindromeRecursive(tail.next)) return false;

    // Verify is current node can be a palindrome
    if (head.val !== tail.val) return false;

    // Move head
    head = head.next;
    return true;
  }
  return _isPalindromeRecursive(head);
}

/**
 * Check if it is a palindrome
 * Recursive approach refined
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  function isPalindromeRecursive(tail) {
    // Check if tail is the tail
    if (tail == null) return true;

    // Recursively transverse the linked list, verifying if is still can be a palindrome
    tailInd++;
    if (!isPalindromeRecursive(tail.next)) return false;
    tailInd--;

    // Verify if all the list has been checked and still can be a palindrome
    if (headInd >= tailInd) return true;

    // Verify is current node can be a palindrome
    if (head.val !== tail.val) return false;

    // Move head
    headInd++;
    head = head.next;
    return true;
  }
  let headInd = 0;
  let tailInd = 0;
  return isPalindromeRecursive(head);
}
