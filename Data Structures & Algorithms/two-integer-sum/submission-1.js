class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const record = {};
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            const diff = target - num;
            if (record[diff] != undefined) {
                return [record[diff], i];
            }

            record[num] = i;
        }
    }
}
