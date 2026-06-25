class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result = []
        for (const str of strs) {
            const encodedStr = str.length + "#" + str;
            result.push(encodedStr);
        }

        return result.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("str", str)
        let i = 0

        const result = [];

        while (i < str.length) {
            let j = i;

            while (str[j] != "#") {
                j++
            }

            const strLen = parseInt(str.substring(i, j))

            i = j + 1;
            j = i + strLen

            result.push(str.substring(i, j));

            i = j
        }

        return result
    }






}
