class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false
        }
        const sRecord = {}
        const tRecord = {}

        for (let i = 0; i < s.length; i++) {
            const sChar = s[i]
            const tChar = t[i]
            sRecord[sChar] = (sRecord[sChar] || 0) + 1
            tRecord[tChar] = (tRecord[tChar] || 0) + 1
        }

        for (const key in sRecord) {
            if (sRecord[key] != tRecord[key]) {
                return false
            }
        }

        return true
    }
}
