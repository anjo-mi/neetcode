class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        return nums.map((num,i) => {
            return nums.reduce((a,el, ind) => {
                if (ind !== i){
                    a *= el;
                }
                return a;
            }, 1)
        })
    }
}


//Input: nums = [1,2,4,6]

//Output: [48,24,12,8]

//Input: nums = [-1,0,1,2,3]

//Output: [0,-6,0,0,0]