/**
 * 263. Ugly Number
 *
 * An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
 * Given an integer n, return true if n is an ugly number.
 * @see https://leetcode.com/problems/ugly-number/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
function isUgly(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  let numbers = [2, 3, 5];
  for (const number of numbers) {
    if (n % number === 0) {
      return isUgly(n / number);
    }
  }
  return false;
}
