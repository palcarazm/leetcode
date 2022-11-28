/**
 * 692. Top K Frequent Words
 *
 * Given an array of strings words and an integer k, return the k most frequent strings.
 * Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
 * @see https://leetcode.com/problems/top-k-frequent-words/
 */

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function _topKFrequent(words, k) {
  let map = new Map(),
    dictionary = [];

  words.forEach((word) => {
    if (map.has(word)) {
      dictionary[map.get(word)].count++;
    } else {
      dictionary.push({ word: word, count: 1 });
      map.set(word, dictionary.length - 1);
    }
  });

  dictionary.sort((a, b) => {
    if (a.count === b.count) {
      return a.word < b.word ? -1 : 1;
    } else {
      return b.count - a.count;
    }
  });

  return dictionary.slice(0, k).map((element) => element.word);
}

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
function topKFrequent(words, k) {
  let map = {};

  words.forEach((word) => {
    if (map[word]) {
      map[word]++;
    } else {
      map[word] = 1;
    }
  });

  let sorted = Object.keys(map).sort((a, b) => {
    if (map[a] === map[b]) {
      return a < b ? -1 : 1;
    } else {
      return map[b] - map[a];
    }
  });

  return sorted.slice(0, k);
}

/* JUDGE */
let result;
let expected;

result = topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2);
expected = ["i", "love"];
console.log(
  JSON.stringify(result) === JSON.stringify(expected),
  result,
  expected
);

result = topKFrequent(
  ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
  4
);
expected = ["the", "is", "sunny", "day"];
console.log(
  JSON.stringify(result) === JSON.stringify(expected),
  result,
  expected
);
