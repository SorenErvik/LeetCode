/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

//We will get an array of sorted numbers, and a target value. Array will just be numbers. Always sorted. Target will always be a number. No decimals. No strings or funny stuff.

// Return index of target if it is already in the array otherwise, where it would be in the array.

//()[1,3,5,6], 2) => 1;
//([1,3,5,6], 5) => 2;
//([1,3,5,6], 7) => 4;
//([1,3,5,6], 0) => 0;

//It would be too slow to check the whole array for a match, and then if not, concat the target, re sort and then check again. So we need to do all of this logic in our initial loop. So, loop through the array, check if current index value equals target, if it does, return i. Else if see if target is smaller than everything in the array, or bigger than everything and either return 0 or array.length. Lastly see if target is greater than current index, but smaller than the next index, and if it is, return i + 1;



function searchInsert(array, val) {
    //Loop through the array
  for (let i = 0; i < array.length; i++) {
      //See if array[i] === val;
     if (array[i] === val) {
      return i;
      //see if val is smaller than anything in the array
    } else if (val < array[0]) {
      return 0;
      //See if val is larger than anything in the array
    } else if (val > array[array.length - 1]) {
       return array.length;
       //See if val should be the next index
    } else if (val > array[i] && val < array[i + 1]) {
       return i + 1;
    }
  }
}

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
console.log(searchInsert([1,3,5,6], 0));