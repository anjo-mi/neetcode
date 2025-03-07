class Solution {
    /*
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const totals = nums.reduce((a,el) => {
            a[el] = (a[el] || 0) + 1;
            return a;
        }, {})
        const mosts = [];
        while (k > 0){
            const max = Math.max(...Object.values(totals));
            for (let key in totals){
                if (totals[key] === max){
                    mosts.push(key)
                    delete totals[key];
                    k--;
                }
            }
        }
        return mosts;
    }
}