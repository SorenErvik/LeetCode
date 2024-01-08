/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

//Going to get 2 strings that each represent a binary number. Always be a string. Always represent a binary number. Never an empty string or missing a parameter.

//Return the sum of a + b in binary as a string.

//("11", "1") => "100";
//("1010", "1011") => 10101;

//Create 2 decimal vairables and assign them the value of each parameter in base 2. Add them together in a sum vairable. Return sum in base 2.

function addBinary (a, b) {
    // Convert binary strings to decimal
    let decimal1 = parseInt(a, 2);
    let decimal2 = parseInt(b, 2);

    // Add the decimals
    let sum = decimal1 + decimal2;

    // Convert the sum back to binary
    let binarySum = sum.toString(2);

    return binarySum;
};