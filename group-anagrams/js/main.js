// class Solution {
//     /*
//      * @param {string[]} strs
//      * @return {string[][]}
//      */
//     groupAnagrams(strs) {
//         const anagramMap = new Map();

//         for (const str of strs){
//             const key = this.generateAnagramKey(str);
//             if (!anagramMap.has(key)){
//                 anagramMap.set(key, []);
//             }
//             anagramMap.get(key).push(str);
//         }
//         return Array.from(anagramMap.values());
//     }

//     generateAnagramKey(str){
//         return str.split('').sort().join('');
//     }
// }












// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]


// params: an array of strings
// return: an array of nested arrays - each of which containing grouped strings
// examples: 
    // Input: strs = ["act","pots","tops","cat","stop","hat"]
    // Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

    // Input: strs = ["x"]
    // Output: [["x"]]

    // Input: strs = [""]
    // Output: [[""]]

// pseudo:
    // create a new Map
    // iterate thru the array of strings
        // sort each word by its letters
        // if the map already has a key containing the sorted word
        //      add the original word to the array
        // if not set the Map's key to that sorted word w/ value of []
        //      add the original word to the array
    // return the values of the map as an array

class Solution {
    /*
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapagram = new Map();

        for (const str of strs){
            const key = str.split('').sort().join('');
            if (!mapagram.has(key)) mapagram.set(key,[]);
            mapagram.get(key).push(str);
        }
        return Array.from(mapagram.values());
    }

}

console.log(new Solution().groupAnagrams(["act","pots","tops","cat","stop","hat"]))
console.log(([["hat"],["act", "cat"],["stop", "pots", "tops"]]))
console.log(new Solution().groupAnagrams(["x"]))
console.log(([["x"]]))
console.log(new Solution().groupAnagrams([""]))
console.log(([[""]]))