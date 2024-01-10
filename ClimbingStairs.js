/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 

Constraints:

1 <= n <= 45
*/

//get a number n, this number will always be atleast 1. Not a string number. Never a decimal. Not an array. No funny stuff

// the unique number of steps to make it to the top

// (1) => 1
// (2) => 2
// (4) => 5

//Create a base case, create a dynamic programming array, itereate through the steps, and return the final result


function climbStairs(n) {
    // Base case: if there are 1 or 2 steps, return the number of ways directly
    if (n <= 2) {
        return n;
    }
  
    // Create an array dp to store the number of ways to reach each step
    let dp = new Array(n + 1);
  
    // Set the base cases for 1 and 2 steps
    dp[1] = 1;
    dp[2] = 2;
  
    // Iterate from step 3 to n
    for (let i = 3; i <= n; i++) {
        // Calculate the number of ways to reach the current step
        dp[i] = dp[i - 1] + dp[i - 2];
    }
  
    // Return the final result, which represents the number of ways to climb to the top
    return dp[n];
  }