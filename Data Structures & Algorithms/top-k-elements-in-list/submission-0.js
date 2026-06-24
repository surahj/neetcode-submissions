class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const record = {}
        for (let i=0; i<nums.length; i++) {
            const num = nums[i];
            record[num] = (record[num] || 0) + 1;
        }

        const arr = Object.entries(record);

        const sortedArray = arr.sort((a, b) => b[1] - a[1]);

        const singleArray = sortedArray.map((a) => a[0]);

        const result = singleArray.slice(0, k)

        return result
    }
}
