/**
 * 1832. Check if the Sentence Is Pangram
 *
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 * Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 * @see https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
function checkIfPangram(sentence) {
    const alphabetLength = 26;
    return new Set(sentence).size === alphabetLength;
}
