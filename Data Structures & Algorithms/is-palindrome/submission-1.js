class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const filteredS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        console.log(filteredS);

        for (let i = 0; i < filteredS.length; i++) {
            if (filteredS[i] !== filteredS[filteredS.length - 1 - i]) return false;           
        }

        return true;
    }
}
