/**
 * 1047. Remove All Adjacent Duplicates In String
 *
 * You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.
 *
 * We repeatedly make duplicate removals on s until we no longer can.
 * Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.
 * @see https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 */

/**
 * @param {string} s
 * @return {string}
 */
function _removeDuplicates(s) {
  s = s.split("");
  let index = 0;

  while (index < s.length - 1) {
    if (s[index] == s[index + 1]) {
      s.splice(index, 2);
      if (index > 0) {
        index--;
      }
    } else {
      index++;
    }
  }

  return s.join("");
}

/**
 * @param {string} s
 * @return {string}
 */
function _removeDuplicates(s) {
  function removeDuplicatesRecursive(arr, lastIndex = 0) {
    if (lastIndex > 0) {
      lastIndex--;
    }
    for (let index = lastIndex; index < arr.length - 1; index++) {
      if (arr[index] == arr[index + 1]) {
        arr.splice(index, 2);
        return removeDuplicatesRecursive(arr, index);
      }
    }
    return arr;
  }
  return removeDuplicatesRecursive(s.split("")).join("");
}

/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates(s) {
  let stack = [];

  for (let index = 0; index < s.length; index++) {
    if (s.charAt(index) === stack.at(-1)) {
      stack.pop();
    } else {
      stack.push(s.charAt(index));
    }
  }

  return stack.join("");
}
