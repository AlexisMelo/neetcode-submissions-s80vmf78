class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // let maxWater = 0;

        // for (let i = 0; i < heights.length; i++) {
        //     for (let j = i + 1; j < heights.length; j++) {
        //         let water = (j - i) * Math.min(heights[i], heights[j]);
        //         maxWater = Math.max(water, maxWater)
        //     }
        // }

        // return maxWater;

        let maxWater = 0;
        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            maxWater = Math.max(maxWater, (r - l) * Math.min(heights[l], heights[r]));

            if (heights[l] > heights[r]) {
                r--;
            } else {
                l++;
            }
        }

        return maxWater;

    }
}
