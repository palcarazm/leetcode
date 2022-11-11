/**
 * 26. Remove Duplicates from Sorted Array
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
 * @see https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let tmp = nums[0];
  for (let index = 1; index < nums.length; index++) {
    if (nums[index] === tmp) {
      nums[index] = Infinity;
    } else {
      tmp = nums[index];
    }
  }
  // Sort array
  nums.sort((a, b) => a - b);

  // Get first index of Infinity
  let indInfinity = nums.indexOf(Infinity);

  // If there are any Infinity return the original length
  return indInfinity === -1 ? nums.length : indInfinity;
}
