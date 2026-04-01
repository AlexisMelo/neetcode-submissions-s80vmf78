class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length);

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;
                
                output[i] = (output[i] ?? 1) * nums[j]
            }
        }

        return output;
    }
}
