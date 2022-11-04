/**
 * 345. Reverse Vowels of a String
 *
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 * @see https://leetcode.com/problems/reverse-vowels-of-a-string/
 */

/**
 * @param {string} s
 * @return {string}
 */
function _reverseVowels(s) {
  s = s.split("");
  let result = [...s],
    write = 0;
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  for (let read = s.length - 1; read >= 0; read--) {
    if (vowels.has(s[read])) {
      while (!vowels.has(result[write])) {
        write++;
      }
      result[write++] = s[read];
    }
  }

  return result.join("");
}

/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
  s = s.split("");
  let start = 0;
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  for (let end = s.length - 1; end > start; end--) {
    if (vowels.has(s[end])) {
      while (!vowels.has(s[start])) {
        start++;
      }
      [s[start], s[end]] = [s[end], s[start]];
      start++;
    }
  }

  return s.join("");
}
