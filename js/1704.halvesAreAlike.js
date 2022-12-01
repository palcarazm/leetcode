/**
 * 1704. Determine if String Halves Are Alike
 *
 * You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
 * Two strings are alike if they have the same number of vowels. Notice that s contains uppercase and lowercase letters.
 * Return true if a and b are alike. Otherwise, return false.
 * @see https://leetcode.com/problems/determine-if-string-halves-are-alike/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function halvesAreAlike(s) {
  let lenght = s.length,
    a = s.slice(0, lenght / 2).split(""),
    b = s.slice(lenght / 2, lenght).split("");

  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  return (
    a.filter((char) => vowels.includes(char)).length ===
    b.filter((char) => vowels.includes(char)).length
  );
}
