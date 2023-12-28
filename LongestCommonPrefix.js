/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

//Get an array of strings. Always an array, always strings in that array, array not empty, No length limits, no funny business
// Return the longest common prefix that is shared among the strings. just a string representation of the prefix. else, return empty string.

// ["flower", "flowing", "flows"] => "flow"
//["book", "bone", "boy"] => "bo"
//["green", "blue", "red"] => ""

//create a variable that will be our "match" run a loop, and if the vartiable matches, add 1 and keep going

function longestCommonPrefix(strs) {
    // Step 6: Consider Edge Cases
    if (strs.length === 0) {
        return "";
    }
    
    // Step 5: Write Pseudocode
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        // Iterate through each character in the current string
        for (let j = 0; j < prefix.length; j++) {
            // Check if the current character in prefix matches the current character in the string
            if (prefix[j] !== strs[i][j]) {
                // If not, update prefix to contain only the common prefix
                prefix = prefix.slice(0, j);
                break;
            }
        }
    }

    // Step 7: Translate Pseudocode into Code
    return prefix;
}

// Step 8: Test Your Code
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
