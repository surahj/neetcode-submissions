class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const result = {};
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i]
            result[num] = i
        }

        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i]
            const diff = target - num;
            if (result[diff] != undefined) {
                return [result[num]+1, result[diff]+1]
            }
        }

        return []
    }
}
