/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

Constraints:

1 <= haystack.length, needle.length <= 104
haystack and needle consist of only lowercase English characters.
*/

//Get 2 strings. They will always be strings. There will always be 2 params. Never empty. No funny business

// Return index of first match || -1

//("sadbutsad", "sad") => 0;
//("matchywords", "stem") => -1
//("hello sun", "sun") => 6

//Create a function that takes 2 params. Then return indexOf the second param in the first


const strStr = ((str, str2) => str.indexOf(str2)) 

console.log(strStr("sadbutsad", "needle"));