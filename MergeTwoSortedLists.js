/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
*/

//Receive 2 lists, both are sorted, Just integers, no strings, no floating point nums, no funny business, can be empty

//return a single combined and sorted list

//([1,2,3,4,5],[1,3,4,9]) => [1,1,2,3,3,4,4,5,9]
//([1], [2,3,4]) => [1,2,3,4]
//([8,9,10],[1,2,3]) => [1,2,3,8,9,10]

//define a singly-linked list, create a dummy node for head of merged list, iterate through the two lists

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
  function mergeTwoLists(list1, list2) {
    // Create a dummy node to serve as the head of the merged list
    let dummy = new ListNode(0);
    let current = dummy;
  
    // Iterate through both lists until one of them is exhausted
    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    // If one of the lists is not exhausted, append the remaining nodes
    if (list1 !== null) {
      current.next = list1;
    } else {
      current.next = list2;
    }
  
    // Return the head of the merged list (skip the dummy node)
    return dummy.next;
  }
  
  // Example usage:
  let list1 = new ListNode(1);
  list1.next = new ListNode(2);
  list1.next.next = new ListNode(4);
  
  let list2 = new ListNode(1);
  list2.next = new ListNode(3);
  list2.next.next = new ListNode(4);
  
  let mergedList = mergeTwoLists(list1, list2);
  
  // Print the result
  while (mergedList !== null) {
    console.log(mergedList.val);
    mergedList = mergedList.next;
  }