/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // Create a hashmap to store the frequency of each character
    const charCount = {};

    // Iterate through the string to populate the hashmap
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string again to find the first unique character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i; // Return the index of the first unique character
        }
    }

    return -1; // Return -1 if no unique character is found
};

//Time complexity is O(n) since we go through the length twice worst case