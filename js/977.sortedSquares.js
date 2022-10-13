/**
 * 977. Squares of a Sorted Array
 *
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 * @see https://leetcode.com/problems/squares-of-a-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortedSquares(nums) {
  let indStart = 0,
    indEnd = nums.length - 1,
    indWrite = nums.length - 1,
    result = new Array(nums.length);

  while (indWrite > -1) {
    if (Math.abs(nums[indStart]) > Math.abs(nums[indEnd])) {
      result[indWrite--] = nums[indStart] * nums[indStart];
      indStart++;
    } else {
      result[indWrite--] = nums[indEnd] * nums[indEnd];
      indEnd--;
    }
  }

  return result;
}
