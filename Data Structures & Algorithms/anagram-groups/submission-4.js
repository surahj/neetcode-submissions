class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const record = {}

        for (let i = 0; i < strs.length; i++) {
            const str = strs[i]

            const count = new Array(26).fill(0)

            for (const s of str) {
                count[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = count.join(",")

            if (record[key] === undefined) {
                record[key] = []
            }

            record[key].push(str)

            // const sortedStr = str.split("").sort((a, b) => a.localeCompare(b)).join("");

            // if (record[sortedStr] === undefined) {
            //     record[sortedStr] = []
            // }

            // record[sortedStr].push(str)
        }

        return Object.values(record);
    }
}
