class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const record = {}

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i]

            const sortedStr = str.split("").sort((a, b) => a.localeCompare(b)).join("");

            if (record[sortedStr] === undefined) {
                record[sortedStr] = []
            }

            record[sortedStr].push(str)
        }

        return Object.values(record);
    }
}
