/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
*/

//Get a number. Always a number. Not a decimal. No strings. No arrays. Always 1 number and never empty. No funny stuff

//Return the square root of the given number, rounded down.

//(4) => 2;
//(16) => 4;
//(8) => 2;

// return Math.floor that acts as a wrapper for Math.sqrt);

let mySqrt = x => Math.floor(Math.sqrt(x));

console.log(mySqrt(4));
console.log(mySqrt(16));
console.log(mySqrt(8));