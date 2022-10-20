/**
 * 12. Integer to Roman
 *
 * Given an integer, convert it to a roman numeral.
 * @see https://leetcode.com/problems/integer-to-roman/
 */

/**
 * @param {number} num
 * @return {string}
 */
function _intToRoman(num) {
  num = num.toString().split("");
  let length = num.length,
    result = "";
  num.forEach((digit, index) => {
    result += romanDigit(digit, length - index);
  });
  return result;
}

/**
 * @param {string} digit
 * @param {number} position decimal place value
 * @return {string}
 */
function romanDigit(digit, position) {
  let currentUnit, middleUnit, nextUnit;
  switch (position) {
    case 1:
      currentUnit = "I";
      middleUnit = "V";
      nextUnit = "X";
      break;
    case 2:
      currentUnit = "X";
      middleUnit = "L";
      nextUnit = "C";
      break;
    case 3:
      currentUnit = "C";
      middleUnit = "D";
      nextUnit = "M";
      break;
    case 4:
      currentUnit = "M";
      middleUnit = "";
      nextUnit = "";
      break;

    default:
      break;
  }

  let result;
  switch (digit) {
    case "1":
      result = `${currentUnit}`;
      break;
    case "2":
      result = `${currentUnit}${currentUnit}`;
      break;
    case "3":
      result = `${currentUnit}${currentUnit}${currentUnit}`;
      break;
    case "4":
      result = `${currentUnit}${middleUnit}`;
      break;
    case "5":
      result = `${middleUnit}`;
      break;
    case "6":
      result = `${middleUnit}${currentUnit}`;
      break;
    case "7":
      result = `${middleUnit}${currentUnit}${currentUnit}`;
      break;
    case "8":
      result = `${middleUnit}${currentUnit}${currentUnit}${currentUnit}`;
      break;
    case "9":
      result = `${currentUnit}${nextUnit}`;
      break;

    default:
      result = "";
      break;
  }

  return result;
}

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
  let map = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let result = "";
  while (num !== 0) {
    for (let index = 0; index < map.length; index++) {
      if (num >= map[index][0]) {
        result += map[index][1];
        num -= map[index][0];
        index--;
      }
    }
  }
  return result;
}
