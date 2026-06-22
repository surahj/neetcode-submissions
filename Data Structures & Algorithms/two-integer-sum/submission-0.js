class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const record = {}
        for (let i=0; i<nums.length; i++) {
            const num = nums[i];

            record[num] = i;
        }

        for (let i=0; i<nums.length; i++) {
            const diff = target - nums[i];
            
            if (record[diff] != undefined && record[diff] != i) {
                return [i, record[diff]]
            }
        }

        return []
    }
}
