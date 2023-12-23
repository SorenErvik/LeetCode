/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/


//Given 2 parameters, first parameter is an array, second parameter is an integer..
//Return the two indeces whose numbers add up to the target. Not empty, always 2+ ints in array, Always an array, no scenarios where integers in array cant sovle the problem, no funny business. Return indeces as an array


//[1,2,3] , 5 => [1,2]
//[12,34,19] , 31 => [0,2]
//[1,2] , 3 => [0,1]

//create nested for loop, once i && k = target, return index of i and k

function twoSum(nums, target) {
    //Loop through the nums array to find our first index
  for(let i = 0; i < nums.length; i++) {
      //Loop through the nums array to find our second index
    for (let j = i + 1; j < nums.length; j++) {
        //Check if the 2 indeces === the target
      if (nums[i] + nums[j] === target) {
          //Return the two indeces if they meet the conditional
        return [i,j];
      }
    }
  }
}

//console.log(returnIndeces([1,2,3], 5));
//console.log(returnIndeces([12,34,19], 31));
//console.log(returnIndeces([1,2], 3));
