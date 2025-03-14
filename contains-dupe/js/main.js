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


















// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false



// params : array [] numbers

// return boolean

// examples : see above

// get a new array, containing no duplicates, compare length of that array to the original

function hasDupes(arr){
    const noDupes = new Set(arr);
    return noDupes.size !== arr.length;
}