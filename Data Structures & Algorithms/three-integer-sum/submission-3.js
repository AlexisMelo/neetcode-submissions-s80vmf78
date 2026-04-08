class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sorted = nums.sort((a, b) => a - b);
        const triplets = []

        if (sorted[0] > 0) return [];


        for (let i =  0; i < sorted.length; i++) {

            if (sorted[i] > 0) break;
            if (i > 0 && sorted[i] === sorted[i - 1]) continue; //no duplicates
            
            let leftCursor = i + 1;
            let rightCursor = sorted.length - 1;
            
            while (leftCursor < rightCursor) {

                let result = sorted[i] + sorted[leftCursor] + sorted[rightCursor];
                
                if (result > 0) {
                    rightCursor--;
                } else if (result < 0) {
                    leftCursor++;
                } else {
                    console.log("adding : " + sorted[leftCursor] + "  " + sorted[rightCursor] + " " + sorted[i])
                    triplets.push([sorted[leftCursor], sorted[rightCursor], sorted[i]])
                    leftCursor++;
                    rightCursor--;

                    while (leftCursor < rightCursor && sorted[leftCursor] === sorted[leftCursor - 1]) {
                        leftCursor++;
                    }
                }              
            }
        }

        return triplets;
    }
}
