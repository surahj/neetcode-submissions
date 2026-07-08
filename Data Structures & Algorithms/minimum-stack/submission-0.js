class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) return undefined

        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.stack.length === 0) return undefined

        const copy = [...this.stack]

        const sortedStack = copy.sort((a, b) => a - b);

        return sortedStack[0];
    }
}
