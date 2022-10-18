/**
 * 38. Count and Say
 *
 * Given a positive integer n, return the nth term of the count-and-say sequence.
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
 * countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
 * countAndSay(1) = "1"
 * @see https://leetcode.com/problems/count-and-say/
 */

/**
 * @param {number} n
 * @return {string}
 * @see https://leetcode.com/problems/count-and-say/discuss/2717245/JS-Solution-explained
 */
function countAndSay(n) {
  if (n === 1) return "1";

  let counter = "",
    prev = "",
    result = "";

  countAndSay(n - 1)
    .split("")
    .forEach((num) => {
      if (prev === num) {
        counter++;
      } else {
        result += `${counter}${prev}`;
        prev = num;
        counter = 1;
      }
    });
  result += `${counter}${prev}`;

  return result;
}
