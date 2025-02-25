class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let copy = nums.slice(0);
        while (copy.length){
            const pair = copy.slice(1).find(el => el + copy[0] === target);
            if (pair || pair === 0){
                const index = nums.indexOf(copy[0]);
                const secIndex = nums.slice(index + 1).indexOf(pair) + index + 1;
                return [ index, secIndex ];
            }else{
                copy = copy.slice(1);
            }
        }
    }
}