class Solution {
    buildHash(word) {
        const hash = {};
        for (const letter of word) {
            if (letter in hash) {
                hash[letter] += 1;
            } else {
                hash[letter] = 0;
            }
        }
        return hash;
    }
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const hashS = this.buildHash(s);
        const hashT = this.buildHash(t);

        if (Object.keys(hashS).length !== Object.keys(hashT).length) return false;

        console.log(hashS);
        console.log(hashT);
        
        for (const key of Object.keys(hashS)) {
            if (hashT[key] !== hashS[key]) return false;
        }

        return true;
    }
}
