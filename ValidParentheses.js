/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/

/*
*
*
*
*
*/

//Receive a string of the characters "(", "{", "[", ")", "}", "]". Never not a string. Not empty. No length specifications. no funny stuff

// not a string saying "it's valid", not the characters, just  true || false

// ("()") => true

//("(){}[]") => true

//("(}") => false

//Use the replace method, and replace all the characters with empty strings. If the string is empty, return true, else return false

function isValid(s) {
    let prevLength;
    do {
      prevLength = s.length;
      s = s.replace("()", "").replace("{}", "").replace("[]", "");
    } while (s.length < prevLength);
  
    // Check if the resulting string is empty
    return s.length === 0;
  }
  
  console.log(isValid("()"));
  console.log(isValid("(){}[]"));
  console.log(isValid("(}"));

