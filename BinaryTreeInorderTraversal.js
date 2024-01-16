/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 
*/

//Get a binary tree. Can be empty. Can have null. No strings or floats or anything. No funny stuff

// Return the inorder traversal of the Binary Tree in an array

//Create a function for creating a TreeNode. Then create an array to store our results. Create a traverse function that checks each node in the inorder traversal and pushes it to the result array.

// Definition for a binary tree node.
function TreeNode (val) {
    this.val = val;
    this.left = this.right = null;
}


function inorderTraversal (root) {
    const result = [];

    function traverse(node) {
        if (node) {
            //Traverse the left subtree
            traverse(node.left);

            //Push the value of the current node to the result array
            result.push(node.val) 

            //Move on to the right node
            traverse(node.right);
        }
    }

    //Call the function recursively
    traverse(root);

    return result;
}