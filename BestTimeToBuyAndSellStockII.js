/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 

Constraints:

1 <= prices.length <= 3 * 104
0 <= prices[i] <= 104
*/

// an array of integers representing stock prices at a certain day.Will always be integers, never strings. No decimals, don't worry about decimal points. Never empty. No funny stuff

// MAximum profit available, otherwise 0 to avoid a loss

//([7,1,5,3,6,4]) => 7
//([1,2,3,4,5]) => 4
//([7,6,4,3,1]) => 0

// loop through and count valley and peaks and add to total when there is differences, otherwise, do the 1 pass approach.


/* BRUTE FORCE

function maxProfit(prices) {

    let total = 0;
    let valley = 10000;
    let peak = valley;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < peak) {
            total += peak - valley;

            valley = prices[i];
            peak = valley;
        } else {
            peak = prices[i];
        }
    }

    total += peak - valley;

    return total;

    // Time complexity = O(n) as we traverse through the array only once
    // Space complexity = O(1) as we only keep track of the total, valley and peak of any length n
} */

//One Pass Approach
function maxProfit(prices) {
    let total = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices [i - 1]) {
            total += prices[i] - prices[i - 1];
        }
    }
    return total;
}

//Time Complexity = O(n) because we traversed the array only once