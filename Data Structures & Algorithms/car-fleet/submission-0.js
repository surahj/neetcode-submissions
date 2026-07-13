class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];

        const combined = position.map((p, i) => [p, speed[i]]);
        const sorted = combined.sort((a, b) => b[0] - a[0])

        for (let i=0; i < sorted.length; i++) {
            const time = (target - sorted[i][0]) / sorted[i][1];

            stack.push(time);

            if (stack.length >=2 && stack[stack.length -1] <= stack[stack.length -2]) {
                stack.pop()
            }
        }

        return stack.length;
    }
}
