class Solution {
    /*
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (!strs.length) return '';
        const coded = strs.map(str => {
            return str.split('').map(char =>{
                const num = char.charCodeAt(0);
                return String.fromCharCode(num + 10);
            }).join('')
        }).join('poopy');
        return coded === '' ? 'handle' : coded;
    }

    /*
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (!str) return [];
        if (str === 'handle') return [''];
        return str.split('poopy').map(word => {
            return word.split('').map(char => {
                const num = char.charCodeAt(0);
                return String.fromCharCode(num - 10);
            }).join('')
        })
    }
}



//Input: ["neet","code","love","you"]

//Output:["neet","code","love","you"]