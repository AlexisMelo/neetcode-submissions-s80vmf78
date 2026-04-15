class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let set = new Set(nums);
        let i = 0;

        while (set.has(i)) {
            i++;
        }

        return i;
    }
}
