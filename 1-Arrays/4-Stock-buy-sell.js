/**
 * 
 *Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Examples:

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and 
sell on day 5 (price = 6), profit = 6-1 = 5.

Note: That buying on day 2 and selling on day 1 
is not allowed because you must buy before 
you sell.
} arr 
 * @returns 
 */
function stockBuySell(arr) {
  // [7,1,5,3,6,4]
  //   let stockPurchased = arr[0];
  let maxProfit = 0;
  // loop over the array find the min, and the index
  //   arr.forEach((item, index) => {
  //     if (arr[item] < stockPurchased) {
  //       stockPurchased = arr[item];
  //     }
  //     //
  //   });
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        maxProfit = Math.max(arr[j] - arr[i], maxProfit);
      }
    }
  }
  return maxProfit;
}

console.log(stockBuySell([7, 6, 4, 3, 1]));
