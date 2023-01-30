/**
 * 9. Palindrome Number
 *
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 * @see https://leetcode.com/problems/palindrome-number/
 */

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  const array = String(x).split("");
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    if (array[start++] !== array[end--]) {
      return false;
    }
  }
  return true;
}
