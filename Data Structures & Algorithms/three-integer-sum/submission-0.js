class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b)
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            if (sortedNums[i] > 0) break;

            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const currSum = (sortedNums[l] + sortedNums[r]);
                const target = -(sortedNums[i]);

                if (currSum < target) {
                    l++
                } else if (currSum > target) {
                    r--
                } else if (currSum == target) {
                    const v = [sortedNums[i], sortedNums[l], sortedNums[r]]
                    result.push(v)
                    l++
                    r--

                    while (l < r && sortedNums[l] === sortedNums[l-1]) {
                        l++
                    }

                    while (l < r && sortedNums[r] === sortedNums[r+1]) {
                        r--
                    }
                }
            }
        }

        return result;
    }
}
