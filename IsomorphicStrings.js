/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sToTMap = new Map(); // Map to store the mapping from s to t.
    const tToSMap = new Map(); // Map to store the mapping from t to s.

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        // Check if the mapping from s to t is consistent.
        if (sToTMap.has(charS)) {
            if (sToTMap.get(charS) !== charT) {
                return false;
            }
        } else {
            sToTMap.set(charS, charT);
        }

        // Check if the mapping from t to s is consistent.
        if (tToSMap.has(charT)) {
            if (tToSMap.get(charT) !== charS) {
                return false;
            }
        } else {
            tToSMap.set(charT, charS);
        }
    }

    return true;
};