/**
 * 374. Guess Number Higher or Lower
 *
 * We are playing the Guess Game. The game is as follows:
 * I pick a number from 1 to n. You have to guess which number I picked.
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 * @see https://leetcode.com/problems/guess-number-higher-or-lower/
 */

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

/**
 * Binary Search Recursive
 * @param {number} max
 * @param {number} min
 * @return {number}
 */
function _guessNumber(max, min = 1) {
  let num = parseInt(min + (max - min) / 2);

  switch (guess(num)) {
    case 0:
      return num;
    case 1:
      return _guessNumber(max, num + 1);
    case -1:
      return _guessNumber(num - 1, min);
    default:
      break;
  }
}

/**
 * Binary Search Loop
 * @param {number} max
 * @param {number} min
 * @return {number}
 */
function guessNumber(max) {
  let num,
    min = 1;
  while (min < max) {
    num = parseInt(min + (max - min) / 2);
    switch (guess(num)) {
      case 0:
        return num;
      case 1:
        min = num + 1;
        break;
      case -1:
        max = num - 1;
        break;
      default:
        break;
    }
  }
  return min;
}

/**
 * Ternary Search
 * @param {number} max
 * @param {number} min
 * @return {number}
 */
function __guessNumber(max, min = 1) {
  let num1 = parseInt(min + (max - min) / 3);
  let res1 = guess(num1);
  let num2 = parseInt(max - (max - min) / 3);
  let res2 = guess(num2);

  if (res1 == 0) {
    return num1;
  } else if (res2 == 0) {
    return num2;
  } else if (res1 == -1) {
    return __guessNumber(num1 - 1, min);
  } else if (res2 == 1) {
    return __guessNumber(max, num2 + 1);
  } else {
    return __guessNumber(num2 - 1, num1 + 1);
  }
}
