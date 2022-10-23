/**
 * 645. Set Mismatch
 *
 * You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
 * You are given an integer array nums representing the data status of this set after the error.
 * Find the number that occurs twice and the number that is missing and return them in the form of an array.
 * @see https://leetcode.com/problems/set-mismatch/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums(nums) {
  let set = new Set(),
    result = {},
    num;
  nums.sort((a, b) => a - b);
  for (let expected = 1; expected <= nums.length; expected++) {
    num = nums[expected - 1];
    if (!set.has(expected) && expected !== num) {
      result.missed = expected;
    }
    if (set.has(num)) {
      result.doubled = num;
    } else {
      set.add(num);
    }
  }

  return [result.doubled, result.missed];
}

/* JUDGE */
let result, expected;

result = findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]);
expected = [2, 10];

console.log(
  JSON.stringify(result) == JSON.stringify(expected),
  result,
  expected
);
