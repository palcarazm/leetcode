/**
 * 219. Contains Duplicate II
 *
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 * @see https://leetcode.com/problems/contains-duplicate-ii/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
  if (k === 0 || nums.length < 2) {
    return false;
  }

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }

  return false;
}
