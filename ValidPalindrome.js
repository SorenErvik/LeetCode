/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
*/

// Get a string. Can be empty. Can contain no valid characters. Can contain non alphanumeric characters. Will always be a string. Alphanumeric is letters or numbers.

// true || false

// ("1kayak1") => true
// (":kaYAk") => true
// ("1He:llo") => false

// Split the initial string, create a new array to only hold alphanumerics. Loop through array and push alphanumerics to new array. Join the array, and reverse another. Test them

//BRUTE FORCE METHOD
/*
function isPalindrome(s) {
    //Splitting the string into an array
    let arr = s.toLowerCase().split("");
    //Creating an array to hold our alphanumerics
    let letters = [];
    //Creating our conditions to test against
    let onlyLetters = /^[a-z0-9]$/;
    //Looping through the array
    for (let i=0; i<arr.length; i++) {
        //Determine if index element matches our conditions
        if (arr[i].match(onlyLetters)) {
            //If it matches, push it to letters array
            letters.push(arr[i]);
        }
    }

    // Create the first string that has the string in the initial order
    let rightOrderString = letters.join("");
    //Reverse the array to create our reversed letters
    let reversedLetters = letters.reverse();
    //Create our second string that contains the reversed letters
    let reverseOrderString = reversedLetters.join("");
    //Determine if it is a Palindrome or not
    if (rightOrderString === reverseOrderString) {
        return true;
    } else {
        return false;
    }
} */

//2 pointer Method
function isPalindrome(s) {
    let alphanumericals = /^[a-z0-9]$/i;
    for (let i = 0, j = s.length - 1; i < j; i++, j-- ) {
        while(i < j && !s.charAt(i).match(alphanumericals)) {
            i++;
        }
        while(i < j && !s.charAt(j).match(alphanumericals)) {
            j--;
        }
        if (s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase()) {
            return false;
        }
    }
    return true;
}