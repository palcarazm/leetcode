/**
 * 1926. Nearest Exit from Entrance in Maze
 *
 * You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.
 *
 * In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.
 *
 * Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.
 * @see https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/
 */

/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
function nearestExit(maze, entrance) {
  const DIRECTIONS = [
      { rowInc: 1, colInc: 0 },
      { rowInc: -1, colInc: 0 },
      { rowInc: 0, colInc: 1 },
      { rowInc: 0, colInc: -1 },
    ],
    VISITED = "*",
    _WALL = "+",
    EMPTY = ".";

  let rowMax = maze.length - 1,
    colMax = maze[0].length - 1,
    queue = [],
    position,
    nextRow,
    nextCol,
    nextdist;

  queue.push({ row: entrance[0], col: entrance[1], dist: 0 });
  maze[entrance[0]][entrance[1]] = VISITED;

  while (queue.length != 0) {
    position = queue.shift();
    // Look next move
    nextdist = position.dist + 1;
    for (const direction of DIRECTIONS) {
      nextRow = position.row + direction.rowInc;
      nextCol = position.col + direction.colInc;

      // Look if cell  don't exists or isn't empty
      if (
        nextRow < 0 ||
        nextRow > rowMax ||
        nextCol < 0 ||
        nextCol > colMax ||
        maze[nextRow][nextCol] != EMPTY
      ) {
        continue;
      }

      // Look if cell is an exit
      if (
        nextRow === 0 ||
        nextRow === rowMax ||
        nextCol === 0 ||
        nextCol === colMax
      ) {
        return nextdist;
      }

      // Add to queue
      maze[nextRow][nextCol] = VISITED;
      queue.push({ row: nextRow, col: nextCol, dist: nextdist });
    }
  }

  return -1;
}
