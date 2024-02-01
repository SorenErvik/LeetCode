/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 **/
function singleNumber (nums) {

    const hashTable = {};
   // Populate the hashmap
      for (const num of nums) {
        hashTable[num] = (hashTable[num] || 0) + 1;
      }
  
      // Iterate through the array to find the single number
      for (const num of nums) {
        if (hashTable[num] === 1) {
          return num;
        }
      }
  
      // Return 0 if no single number is found
      return 0; 
    }