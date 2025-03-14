class Solution {
    /*
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return s.split('').sort().join('') === 
               t.split('').sort().join(''); 
    }
}






























// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false
// Constraints:

// s and t consist of lowercase English letters.


// params: 2 strings - all lowercase

// return : boolean - true or false

// examples: 'racecar' + 'carrace' -> true (each has rx2, ax2, cx2, ex1)
                // 'jam' + 'jar' -> false (each has jx1, ax1), but one has an r, and one has a an m

// pseudo - by sorting each word, all characters should be placed in a specific order (basically creating a key for each combination of letters)

function isAnagram(s,t){
    // return s.split('').sort().join('') === t.split('').sort().join('');

    if (s.length !== t.length) return false;
    const sTot = s.split('').reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    }, {});
    const tTot = t.split('').reduce((a,el) => {
        a[el] = (a[el] || 0) + 1;
        return a;
    }, {});
    for (let key in sTot){
        if (sTot[key] !== tTot[key]) return false;
    }
    return true;
}