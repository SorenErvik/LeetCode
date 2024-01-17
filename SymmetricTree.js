/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?

*/

// Given a root. Will always be a root. Never more than one. Could be empty. No strings or arrays or anything. No funny stuff.

// Return true || false;

//(root = [1,2,2,3,4,4,3]) => true
//(root = [1,2,2,null,3,null,3]) => false

// Create TreeNode Function. Check if there is a root. Check if both subtrees are empty or different. Recursively check for the left and right subtrees.



function TreeNode (val) {
    this.val = val;
    this.left = this.right = null;
}

// Recursive Solution
function isSymmetric(root) {
    if (!root) {
        return true; // An empty tree is symmetric
    }

    function isMirror(left, right) {
        if (!left && !right) {
            return true; // Both subtrees are empty, considered symmetric
        }
        if (!left || !right || left.val !== right.val) {
            return false; // One subtree is empty or values are different, not symmetric
        }

        // Check symmetry recursively for the left and right subtrees
        return isMirror(left.left, right.right) && isMirror(left.right, right.left);
    }

    return isMirror(root.left, root.right);
}
