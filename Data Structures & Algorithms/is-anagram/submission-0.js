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

        const record = {}

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            record[char] = (record[char] || 0) + 1;
        }

        for (let i = 0; i < t.length; i++) {
            const char = t[i];

            if (record[char] === undefined || record[char] === 0) {
                return false
            }
            
            record[char] = record[char] - 1
        }

        return true
    }
}
