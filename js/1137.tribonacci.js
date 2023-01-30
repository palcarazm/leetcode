/**
 * 1137. N-th Tribonacci Number
 *
 * The Tribonacci sequence Tn is defined as follows:
 * * T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
 * Given n, return the value of Tn.
 * @see https://leetcode.com/problems/n-th-tribonacci-number/
 */

/**
 * Tribonacci with recursive function and memoization
 * @param {number} n
 * @return {number}
 */
function tribonacci(n) {
  const memo = new Map();
  memo.set(0, 0);
  memo.set(1, 1);
  memo.set(2, 1);

  /**
   * @param {number} n
   * @return {number}
   */
  function recursive(n) {
    if (!memo.has(n)) {
      memo.set(n, recursive(n - 3) + recursive(n - 2) + recursive(n - 1));
    }
    return memo.get(n);
  }

  return recursive(n);
}
