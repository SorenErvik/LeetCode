/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const recursivelyGetHeight = (root, depth) => {
    if(!root) {
        return depth;
    }
    return Math.max(recursivelyGetHeight(root.left, depth + 1), recursivelyGetHeight(root.right, depth + 1));
}

const maxDepth = (root) => {
    let height = recursivelyGetHeight(root, 0);
    
    return height;
};