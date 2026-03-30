class Solution {
    isAnagram(a, b) {
        if (a.length !== b.length) return false;

        let treatedA = a.split("").sort().join();
        let treatedB = b.split("").sort().join();

        return treatedA == treatedB;
    }
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const output = [];
        
        for (const word of strs) {
            let wordSorted = false;
            for (const sublist of output) {
                if (this.isAnagram(word, sublist[0])) {
                    sublist.push(word);
                    wordSorted = true;
                    continue;
                }
            }

            if (!wordSorted) {
                output.push([word]);
            }
        }

        return output;
    }
}
