/**
 * 279. Perfect Squares
 * Given an integer n, return the least number of perfect square numbers that sum to n.
 * A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
 * For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.
 * @see https://leetcode.com/problems/perfect-squares/
 */

/**
 * @param {number} n
 * @return {number}
 */
function numSquares(n) {
  const memo = new Map();
  memo.set(0, 0);

  function backtrack(num) {
    // Result memorized
    if (memo.has(num)) {
      return memo.get(num);
    }

    // verify if is a perfect square
    const square = Math.sqrt(num);
    if (Number.isInteger(square)) {
      memo.set(num, 1);
      return 1;
    }

    // Decompose in perfect squares
    let result = Infinity;
    for (let root = 1; root < square; root++) {
      result = Math.min(result, 1 + backtrack(num - root ** 2));
    }
    memo.set(num, result);
    return result;
  }

  return backtrack(n);
}
