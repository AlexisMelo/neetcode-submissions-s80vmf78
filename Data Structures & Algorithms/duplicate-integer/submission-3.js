class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicates = {};

        for (let i = 0; i < nums.length; i++) {
            if (nums[i].toString() in duplicates) return true;
            duplicates[nums[i]] = true;
            console.log(i + " ", duplicates);
        }

        return false;
    }
}
