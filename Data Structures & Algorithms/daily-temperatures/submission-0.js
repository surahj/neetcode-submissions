class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = [];
        for (let i = 0; i < temperatures.length; i++) {
            let day = 0;
            let foundWarmerTemp = false;
            const temp = temperatures[i];
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[j] <= temp) {
                    day++;
                } else {
                    day++;
                    foundWarmerTemp = true;
                    break;
                }
            }

            if (foundWarmerTemp) {
                result.push(day);
            } else {
                result.push(0);
            }
        }

        return result;
    }
}
