class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start = 0;
        let maxLength = 0;
        
        if (start.length < 2) return 1;

        while (start < s.length) {
            let charsMet = {}
            let pointer = start + 1;
            charsMet[s[start]] = 1

            while (pointer < s.length) {
                console.log(pointer)
                charsMet[s[pointer]] = (charsMet[s[pointer]] || 0) + 1
                
                if (charsMet[s[pointer]] === 2) {
                    break;
                }
                
                pointer++; //décalage du pointeur
            }

            console.log(charsMet);
            maxLength = Math.max(maxLength, Object.keys(charsMet).length)
            start++;
        }

        return maxLength
    }
}
