class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;
        
        while (left <= right) {
            while (left < right && !this.isAlphaNumeric(s[left])) {
                left++
            }

            while (right > left && !this.isAlphaNumeric(s[right])) {
                right--
            }

            if (s[left].toLowerCase() != s[right].toLowerCase()) {
                return false
            }

            left++
            right--
        }

        return true
    }

    isAlphaNumeric(c) {
        if (c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9') {
            return true
        }

        return false
    }
}
