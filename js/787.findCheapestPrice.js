/**
 * 787. Cheapest Flights Within K Stops
 *
 * There are n cities connected by some number of flights. You are given an array flights where flights[i] = [from_i, to_i, price_i] indicates that there is a flight from city from_i to city toi with cost price_i.
 * You are also given three integers src, dst, and k, return the cheapest price from src to dst with at most k stops. If there is no such route, return -1.
 * @see https://leetcode.com/problems/cheapest-flights-within-k-stops/
 */

/**
 * Resolution with recursive function and memorization
 * @param {number} n Number of cities
 * @param {number[][]} flights Array of flight
 * @param {number} src Departure city
 * @param {number} dst Destination city
 * @param {number} k Number of stops
 * @return {number} Cheapest flight
 */
function _findCheapestPrice(n, flights, src, dst, k) {
  if (src === dst) {
    return 0;
  }

  const adjacencyList = new Map();
  for (let [start, end, cost] of flights) {
    if (adjacencyList.has(start)) adjacencyList.get(start).push([end, cost]);
    else adjacencyList.set(start, [[end, cost]]);
  }

  const memo = new Map();

  function traverse(adjacencyList, src, dst, k) {
    if (k === -1) {
      return Infinity;
    }
    let currentBest = Infinity,
      current;
    if (adjacencyList.has(src)) {
      for (let [next, cost] of adjacencyList.get(src)) {
        if (next === dst) {
          current = cost;
        } else {
          const key = `${next}-${k}`;
          if (!memo.has(key)) {
            memo.set(key, traverse(adjacencyList, next, dst, k - 1));
          }
          current = memo.get(key) + cost;
        }
        if (current < currentBest) {
          currentBest = current;
        }
      }
    }
    return currentBest;
  }

  const result = traverse(adjacencyList, src, dst, k);
  return result === Infinity ? -1 : result;
}

/**
 * Resolution with Dijkstra's Algorithm
 * @param {number} n Number of cities
 * @param {number[][]} flights Array of flight
 * @param {number} src Departure city
 * @param {number} dst Destination city
 * @param {number} k Number of stops
 * @return {number} Cheapest flight
 */
function findCheapestPrice(n, flights, src, dst, k) {
  const adjacencyList = new Map();
  for (let [start, end, cost] of flights) {
    if (adjacencyList.has(start)) adjacencyList.get(start).push([end, cost]);
    else adjacencyList.set(start, [[end, cost]]);
  }

  const costs = new Map();
  for (let city = 0; city <= n; city++) {
    costs.set(city, Infinity);
  }
  costs.set(src, 0);

  const queue = [{ cost: 0, city: src, stops: k + 1 }];

  while (queue.length) {
    const { cost, city, stops } = queue.shift();

    if (city === dst) continue; // continue to find cheapest path
    if (stops === 0) continue; // exhausted number of steps
    if (!adjacencyList.has(city)) continue; // No path to traverse

    for (let [nextCity, nextCost] of adjacencyList.get(city)) {
      if (costs.get(nextCity) > cost + nextCost) {
        costs.set(nextCity, cost + nextCost);
        queue.push({ cost: cost + nextCost, city: nextCity, stops: stops - 1 });
      }
    }
  }
  return costs.get(dst) === Infinity ? -1 : costs.get(dst);
}
