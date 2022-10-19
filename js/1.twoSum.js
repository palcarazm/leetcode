/**
 * 1. Two Sum
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * @see https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function _twoSum(nums, target) {
  let index2;
  for (let index1 = 0; index1 < nums.length; index1++) {
    index2 = nums.indexOf(target - nums[index1]);
    if (index2 != -1 && index2 != index1) {
      return [index1, index2];
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let map = new Map(),
    searched;
  for (let i = 0; i < nums.length; i++) {
    searched = target - nums[i];
    if (map.has(searched)) {
      return [map.get(searched), i];
    } else {
      map.set(nums[i], i);
    }
  }
}
