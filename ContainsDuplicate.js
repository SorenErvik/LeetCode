/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

// an array of nums. Will always be nums, never strings. Never empty. No length limits or minimums

// true || false

//([1,2,3,1]) => true
//([1,2,3,4]) => false
//([1,1,1,3,3,4,3,2,4,2]) => true

// simple method would be to sort the array, and loop through and see if nums[i] === nums[i + 1]. Optimized method would be to create a hashmap and loop through the nums array


 //BRUTE FORCE
/*var containsDuplicate = function(nums) {

 let sortedNums = nums.sort((a,b) => a - b);

 for (let i = 0; i < sortedNums.length; i++) {
     if (sortedNums[i] === sortedNums[i + 1]) {
         return true;
     }
 }
 return false;
    
}; */

//Hash Map
function containsDuplicate(nums) {
    let set = new Set();

    for (let x of nums) {
        if (set.has(x)) {
            return true;
        }
        set.add(x);
    }

    return false;
}