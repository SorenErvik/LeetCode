/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

// ransomeNote and magazine, both strings.

// true || false

// ("a", "b") => false

// create a hashmap, check if each char of ransomNote is in Hashmap

function canConstruct(ransomNote, magazine) {
    const magazineChars = {};

    // Count the occurrences of each character in the magazine
    for (const char of magazine) {
        magazineChars[char] = (magazineChars[char] || 0) + 1;
    }

    // Check if the ransom note can be constructed
    for (const char of ransomNote) {
        if (!magazineChars[char]) {
            // If the character is not present or has already been used
            return false;
        }
        // Decrement the count of the character in the magazine
        magazineChars[char]--;
    }

    return true;
}