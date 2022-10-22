/**
 * 76. Minimum Window Substring
 *
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
 * The testcases will be generated such that the answer is unique.
 * @see https://leetcode.com/problems/minimum-window-substring/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  // Basic Case
  if (t.length > s.length) return "";

  let searched = mapChar(t), // Ascii charSet Map to store count
    char, // helper var
    start = 0, // starter pointer
    end = 0, // ender pointer
    result = { start: -Infinity, end: Infinity }, // result not yet known
    missing = t.length; // missing words initially
  while (end < s.length) {
    char = s.charCodeAt(end);
    if (searched.has(char)) {
      if (searched.get(char) > 0) {
        missing--;
      }
      searched.set(char, searched.get(char) - 1);
    }

    // start decrementing start to check the best option
    while (missing === 0) {
      // store the best answer always
      if (result.end - result.start > end - start) {
        result.end = end;
        result.start = start;
      }

      char = s.charCodeAt(start);
      if (searched.has(char)) {
        searched.set(char, searched.get(char) + 1);
        if (searched.get(char) > 0) {
          missing++;
        }
      }
      start++;
    }

    end++;
  }

  return result.end == Infinity ? "" : s.slice(result.start, result.end + 1);
}

/**
 * Map a string by Ascii charCode
 * @param {string} string String to map
 * @returns {Map}
 */
function mapChar(string) {
  let map = new Map(),
    char;
  for (let i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  return map;
}
