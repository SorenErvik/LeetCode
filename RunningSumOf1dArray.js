/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*/

// given an array of nums. Will never be empty. will always be numbers, no strings. No decimals or anything like that. No funny stuff

// runningSum of array

// ([1,2,3,4]) => [1,3,6,10]
// ([1,1,1,1,1]) => [1,2,3,4,5]
// ([3,1,2,10,1]) => [3,4,6,16,17]

// add previus + current value to new array. return array
function runningSum (nums) {
    /*Solution 1
    
    //Declaring the array that will hold our results
    let result = [];
    // Giving the first index of result the same value as the first index of nums
    result[0] = nums[0];
    // Our for loop that iterates through nums
    for (let i = 1; i < nums.length; i++) {
        result[i] = nums[i] + result[i - 1];
    }
    
    // Returning our results
    return result; */

    // Iterating through nums and chaning each value with its running sum value
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};