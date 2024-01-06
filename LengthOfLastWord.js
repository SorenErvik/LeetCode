/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/

//given a string of words. Only words and spaces in this string. Always get a string, never array or num. String will never be empty.Can be any length of words and any amount of words in the string. No funny stuff

//return the length of final word]

//("Hello world") => 5;
//("Hello Hello Hello Hello Hello Hello Hello worldsssss") => 10;
//("Hello") => 5

//take the string, split it into an array with spaces as the separator. Return length of final index


function lengthOfLastWord(str) {
    //Split the str into an arr
    let arr = str.trim().split(" ");

    //Return the length of the final index of arr
    return arr[arr.length - 1].length;
}


console.log(lengthOfLastWord("Hello world"));
console.log(lengthOfLastWord("Hello Hello Hello Hello Hello Hello Hello worldsssss"));
console.log(lengthOfLastWord("Hello"));