class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let result = []
        let complements = {"]": "[", ")": "(", "}" : "{"}

        for (const char of s) {
            console.log("char : " + char)
            if (["(", "{", "["].includes(char)) {
                console.log("adding " + char)
                result.push(char)
            } else {
                //closing character
                if (result[result.length - 1] === complements[char]) {
                    result.pop()
                } else {
                    return false;
                }
            }
            console.log(result.length, result);
        }

        return result.length === 0;
    }
}
