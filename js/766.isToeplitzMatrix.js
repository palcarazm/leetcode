/**
 * 766. Toeplitz Matrix
 *
 * Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
 * A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
 * @see https://leetcode.com/problems/toeplitz-matrix/
 */

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
function isToeplitzMatrix(matrix) {
  let rows = matrix.length,
    cols = matrix[0].length;

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] != matrix[row - 1][col - 1]) {
        return false;
      }
    }
  }
  return true;
}
