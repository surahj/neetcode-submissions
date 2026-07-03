class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const len = nums.length;
        const preProduct = new Array(len).fill(1)
        const postProduct = new Array(len).fill(1)
        const result = new Array(len).fill(1)

        for (let i = 1; i < nums.length; i++) {
            preProduct[i] = preProduct[i - 1] * nums[i - 1]
        }

        for (let i = len - 2; i >= 0; i--) {
            postProduct[i] = postProduct[i + 1] * nums[i + 1]
        }

        for (let i = 0; i < nums.length; i++) {
            result[i] = preProduct[i] * postProduct[i]
        }


        return result;
    }
}
