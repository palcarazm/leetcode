/**
 * 472. Concatenated Words
 *
 * Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.
 * A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
 * @see https://leetcode.com/problems/concatenated-words/description/
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
function findAllConcatenatedWordsInADict(words) {
  const set = new Set(words);
  const concatMemo = new Map();
  const result = [];

  function isConcat(word) {
    if (concatMemo.has(word)) concatMemo.get(word);
    for (let i = 1; i <= word.length; i++) {
      let value = word.slice(0, i);
      if (set.has(value)) {
        let remaining = word.slice(i);
        if (remaining.length === 0 || isConcat(remaining)) {
          concatMemo.set(word, true);
          return true;
        }
      }
    }
    concatMemo.set(word, false);
    return false;
  }

  for (let word of words) {
    set.delete(word);
    if (isConcat(word)) result.push(word);
    set.add(word);
  }
  return result;
}
