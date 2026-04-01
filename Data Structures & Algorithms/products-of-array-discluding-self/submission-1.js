class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //naive brute force
        // let output = new Array(nums.length);
        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = 0; j < nums.length; j++) {
        //         if (i === j) continue;
                
        //         output[i] = (output[i] ?? 1) * nums[j]
        //     }
        // }

        let output = new Array(nums.length);
        let prefix = new Array(nums.length);
        let suffix = new Array(nums.length);
        
        prefix[0] = 1;
        suffix[nums.length - 1] = 1;

        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1]
        }

        for (let i = 0; i < nums.length; i++) {
            output[i] = prefix[i] * suffix[i]
        }

        return output;
    }
}
