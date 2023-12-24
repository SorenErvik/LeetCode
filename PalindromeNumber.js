/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 
*/

//parameter is going to be a single number. Any length of digits in that number. Not empty, not a string, not an array, not decimal, positve or negative. No funny stuff

// return a true || false

//(123) -> false
//(1331) -> true
//(11) -> true

//Turn number into string, Split the number, reverse is,  join it, revert to number, and compare against initial number. Return true if match, false otherwise.

let isPalindrome = num => num === Number(num.toString().split("").reverse().join(""));


/*function isPalindrome(num) {
  //Here we turn the number into a string, split it, reverese it, join it, and put back into a      num
  let reversedNum = Number(num.toString().split("").reverse().join(""));

  //Check if num and reversedNum equal eachother
  if (num === reversedNum) {
    return true;
  } else {
    return false;
  }
} */

console.log(isPalindrome(123));
console.log(isPalindrome(1331));
console.log(isPalindrome(11));