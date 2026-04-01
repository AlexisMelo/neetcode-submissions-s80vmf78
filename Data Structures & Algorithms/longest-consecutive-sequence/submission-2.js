class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let n = nums.length;
       let sorted = nums.sort((a, b) => a - b);
       console.log(sorted)
        let longestSequence = [];
        let currentSequence = [];
       let i = 0;
        let sequenceCounter = 0;

       while (i < n) {
        currentSequence = [sorted[i]];

        while (sequenceCounter < n) {
            sequenceCounter++;

            console.log(`comparing ${sorted[sequenceCounter]} & ${sorted[sequenceCounter - 1]}`)
            
            if (sorted[sequenceCounter] === sorted[sequenceCounter - 1]) continue;

            if (sorted[sequenceCounter] === (sorted[sequenceCounter - 1] + 1)) {
                console.log("added " + sorted[sequenceCounter])
                currentSequence.push(sorted[sequenceCounter]);
                continue;
            }
            
            break;
        }

        console.log(i + " <- " + sequenceCounter)
        i = sequenceCounter;

        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence;
        }
       } 

       return longestSequence.length
    }
}
