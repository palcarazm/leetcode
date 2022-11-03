/**
 * 2131. Longest Palindrome by Concatenating Two Letter Words
 *
 * You are given an array of strings words. Each element of words consists of two lowercase English letters.
 * Create the longest possible palindrome by selecting some elements from words and concatenating them in any order. Each element can be selected at most once.
 * Return the length of the longest palindrome that you can create. If it is impossible to create any palindrome, return 0.
 * A palindrome is a string that reads the same forward and backward.
 * @see https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/
 */

/**
 * @param {string[]} words
 * @return {number}
 */
function longestPalindrome(words) {
  let mapSingle = new Map(),
    mapDouble = new Map(),
    middle = false,
    result = 0,
    count,
    countReverse,
    wordReverse;

  words.forEach((word) => {
    if (word.charAt(0) === word.charAt(1)) {
      if (mapDouble.has(word)) {
        mapDouble.set(word, mapDouble.get(word) + 1);
      } else {
        mapDouble.set(word, 1);
      }
    } else {
      if (mapSingle.has(word)) {
        mapSingle.set(word, mapSingle.get(word) + 1);
      } else {
        mapSingle.set(word, 1);
      }
    }
  });
  mapSingle.forEach((count, word) => {
    wordReverse = word.charAt(1) + word.charAt(0);
    if (mapSingle.has(wordReverse)) {
      countReverse = mapSingle.get(wordReverse);
    } else {
      countReverse = 0;
    }
    while (count > 0 && countReverse > 0) {
      result += 4;
      mapSingle.set(word, --count);
      mapSingle.set(wordReverse, --countReverse);
    }
  });

  mapDouble.forEach((count, word) => {
    while (count >= 2) {
      result += 4;
      count -= 2;
      mapDouble.set(word, count);
    }
    if (!middle && count === 1) {
      result += 2;
      mapDouble.set(word, --count);
      middle = true;
    }
  });

  return result;
}
