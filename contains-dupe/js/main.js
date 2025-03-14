class Solution {
    /*
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const nonDupes = Array.from(new Set(nums))
        return nonDupes.length !== nums.length

        // alt
        // return new Set(nums).size !== nums.length;
    }
}