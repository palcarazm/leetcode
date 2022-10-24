/**
 * 21239. Maximum Length of a Concatenated String with Unique Characters
 *
 * You are given an array of strings arr. A string s is formed by the concatenation of a subsequence of arr that has unique characters.
 * Return the maximum possible length of s.
 * A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
 * @see https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/
 */

/**
 * @param {string[]} arr
 * @param {number} index
 * @param {string} string
 * @return {number}
 */
function maxLength(arr, index = 0, string = "") {
  // Stop recursivity
  if (index === arr.length) {
    return isValid(string) ? string.length : 0;
  }

  // Branch can continue
  if (!isValid(string)) {
    return 0;
  }

  // Create two branches
  let take = maxLength(arr, index + 1, string + arr[index]);
  let leave = maxLength(arr, index + 1, string);

  return Math.max(take, leave);
}

/**
 * @param {string} string
 * @returns {bool}
 */
function isValid(string) {
  return string.length === new Set(string.split("")).size;
}
