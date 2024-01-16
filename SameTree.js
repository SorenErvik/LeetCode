/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
Example 2:


Input: p = [1,2], q = [1,null,2]
Output: false
Example 3:


Input: p = [1,2,1], q = [1,1,2]
Output: false
 

Constraints:

The number of nodes in both trees is in the range [0, 100].
-104 <= Node.val <= 104
*/


//Given the roots of 2 binary trees. No empty arguments. Always a binary tree. No funny stuff

// return boolean on if two trees are same or not

//([1,2,3], [1,2,3]) => true
//([1,2], [1,null,2]) => false
//([1,2,1], [1,1,2]) => false

//Create our TreeNode function. Traverse both trees and in each traversal call, compare the two nodes.

//Our TreeNode function
function TreeNode (val) {
    this.val = val;
    this.left = this.right = null;
}

function isSameTree (p,q) {
    function traverse(nodeP, nodeQ) {
        if (!nodeP && !nodeQ) {
            return true; // Both nodes are null, considered equal
        }
        if (!nodeP || !nodeQ) {
            return false; // One of the nodes is null, considered different
        }

        // Compare values and recursively check left and right subtrees
        return (
            nodeP.val === nodeQ.val &&
            traverse(nodeP.left, nodeQ.left) &&
            traverse(nodeP.right, nodeQ.right)
        );
    }

    return traverse(p, q);
}