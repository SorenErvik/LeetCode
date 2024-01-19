/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
 binary search tree.

 

Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
*/

// Given an array of integers. Always an array. Always integers. Never strings. Array could be empty.

// a height balanced bianry search tree

// ([-10,-3,0,5,9]) => [0,-3,9,-10,null,5]
// ([1,3]) => [3,1]

// Create a base case. Find the middle. Create our root. Build the left and right subtree

function TreeNode (val) {
    this.val = val;
    this.left = this.right = null;
}

 function sortedArrayToBST (nums) {
// Base case: if the array is empty, return null
    if (nums.length === 0) {
        return null;
    }

    // Find the middle index of the array
    const mid = Math.floor(nums.length / 2);

    // Create a new TreeNode with the middle element as the root
    const root = new TreeNode(nums[mid]);

    // Recursively build the left subtree with elements before the middle
    root.left = sortedArrayToBST(nums.slice(0, mid));

    // Recursively build the right subtree with elements after the middle
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
};