class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "";
        return strs.map(s => `${s.length}-${s}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "") return [];

        console.log("string recue : " + str)
        let finalStrings = [];
        let pointer = 0;
        let lengthPointer = pointer;

        while (pointer < str.length) {
            lengthPointer++

            if (str[lengthPointer] === "-") {
                const length = Number(str.slice(pointer, lengthPointer))
                pointer = lengthPointer + 1
                const originalstr = str.slice(pointer, pointer + length)
                finalStrings.push(originalstr)
                pointer = pointer + length
            }           

        }

        return finalStrings
    }
}
