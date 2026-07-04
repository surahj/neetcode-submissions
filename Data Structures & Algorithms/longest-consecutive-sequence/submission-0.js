class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const numSet = new Set(nums);

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            let longest = 0;
            if (!numSet.has(num - 1)) {
                let curr = num;

                while (numSet.has(curr)) {
                    longest++;
                    curr++;
                }
            }

            res = Math.max(res, longest);
        }

        return res;
    }
}
