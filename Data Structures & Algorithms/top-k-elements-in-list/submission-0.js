class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const items = {};

        for (let i = 0; i < nums.length; i++) {
            items[nums[i]] = (items[nums[i]] || 0) + 1;
        }

        const array = Object.entries(items).sort((a, b) => a[1] - b[1]);

        // console.log(array);
        // console.log(array.slice(-1 * k))

        return array.slice(-1 * k).map(a => a[0]);
    }
}
