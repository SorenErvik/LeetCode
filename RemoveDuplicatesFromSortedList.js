/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,1,2]
Output: [1,2]
Example 2:


Input: head = [1,1,2,3,3]
Output: [1,2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/


//Given the head of a sorted linked list. Never empty. Not an array or any other kind of data structure. Always be sorted. No funny stuff

// Return the linked list with no duplicates

// [1,1,2] => [1,2];
// [1,2,3,3] => [1,2,3];
// [3,3,3,5,5,6,9] => [3,5,6,9];

// Create ListNode class, iterate through the linked list, convert to an array and back.
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function deleteDuplicates(head) {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            // Duplicate found, skip the next node
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }

    return head;
}

// Function to convert array to a sorted linked list
function arrayToLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;

    for (let value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
}

// Function to convert a linked list to array
function linkedListToArray(head) {
    let result = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}

// Example usage
let input1 = arrayToLinkedList([1, 1, 2]);
let output1 = deleteDuplicates(input1);
console.log(linkedListToArray(output1)); // Output: [1, 2]

let input2 = arrayToLinkedList([1, 1, 2, 3, 3]);
let output2 = deleteDuplicates(input2);
console.log(linkedListToArray(output2)); // Output: [1, 2, 3]