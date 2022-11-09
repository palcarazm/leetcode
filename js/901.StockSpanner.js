/**
 * 901. Online Stock Span
 *
 * Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.
 * The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backward) for which the stock price was less than or equal to today's price.
 * 
 * Implement the StockSpanner class:
 * StockSpanner() Initializes the object of the class.
 * int next(int price) Returns the span of the stock's price given that today's price is price.
 
 * @see https://leetcode.com/problems/online-stock-span/
 */

class _StockSpanner {
  #priceStock = [];

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    this.#priceStock.push(price);
    let count = 0;
    for (
      let index = this.#priceStock.length - 1;
      index >= 0 && this.#priceStock[index] <= price;
      index--
    ) {
      count++;
    }
    return count;
  }
}

class StockSpanner {
  #stock = [];

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let days = 1;
    while (this.#stock.length > 0 && this.#stock.at(-1).price <= price) {
      days += this.#stock.pop().days;
    }

    this.#stock.push({ price, days });
    return days;
  }
}
