class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramMap = new Map();

        for (const str of strs){
            const key = this.generateAnagramKey(str);
            if (!anagramMap.has(key)){
                anagramMap.set(key, []);
            }
            anagramMap.get(key).push(str);
        }
        return Array.from(anagramMap.values());
    }

    generateAnagramKey(str){
        return str.split('').sort().join('');
    }
}