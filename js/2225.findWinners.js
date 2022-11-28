/**
 * 2225. Find Players With Zero or One Losses
 *
 * You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.
 * Return a list answer of size 2 where:
 *   * answer[0] is a list of all players that have not lost any matches.
 *   * answer[1] is a list of all players that have lost exactly one match.
 * The values in the two lists should be returned in increasing order.
 * @see https://leetcode.com/problems/find-players-with-zero-or-one-losses/
 */

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
function findWinners(matches) {
  let lossesCount = new Map(),
    winner,
    loser;

  matches.forEach((match) => {
    [winner, loser] = match;
    if (!lossesCount.has(winner)) {
      lossesCount.set(winner, 0);
    }
    if (!lossesCount.has(loser)) {
      lossesCount.set(loser, 1);
    } else {
      lossesCount.set(loser, lossesCount.get(loser) + 1);
    }
  });

  let result = [[], []];
  lossesCount.forEach((loses, player) => {
    if (loses === 0) {
      result[0].push(player);
    } else if (loses === 1) {
      result[1].push(player);
    }
  });

  result[0].sort((a, b) => a - b);
  result[1].sort((a, b) => a - b);

  return result;
}
