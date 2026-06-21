class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const record = {}

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i]
            if (record[num] != undefined) {
                return true
            }

            record[num] = num;
        }

        return false
    }
}
