/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums is sorted in non-decreasing order.
*/

//Given an array,sorted in increasing, nums. Will never be empty. Nothing besides numbers in the array. Always 1 array. No floating point numbers. No funny business

// Return the count of unique elements

//([0,0,1,1,2,2,3,3,4,4]) => [0,1,2,3,4]
//([3,12,12,12,12,12,12,12]) => [3,12]
//([1,2,3]) => [1,2,3]

//Check if the array is empty, create a count for unique elements and the current index, iterate through the array


function removeDuplicates(nums) {
    // Check for an empty array
    if (nums.length === 0) {
        return 0;
    }

    let uniqueCount = 1; // Initialize count for unique elements
    let currentIndex = 1; // Start from the second element

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the current element is different from the previous one
        if (nums[i] !== nums[i - 1]) {
            // Update the array in-place
            nums[currentIndex] = nums[i];
            // Increment the unique count and update the current index
            uniqueCount++;
            currentIndex++;
        }
    }

    // The first uniqueCount elements in nums are now the unique elements
    return uniqueCount;
}



console.log(removeDuplicates([0,0,1,1,2,2,3,3,4,4]));
console.log(removeDuplicates([3,12,12,12,12,12,12,12]));
console.log(removeDuplicates([1,2,3]));