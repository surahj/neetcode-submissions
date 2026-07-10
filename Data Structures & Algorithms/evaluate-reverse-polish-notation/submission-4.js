class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []

        if (tokens.length < 3) {
            return tokens[0]
        }

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];

            console.log(token)
            console.log('token stack', stack)

            if (token === "+" ) {
                const firstOperand = stack.pop();
                const secondOperand = stack.pop();
                const result= parseInt(firstOperand) + parseInt(secondOperand)
                stack.push(Math.trunc(result))
            } else if (token === "-" ) {
                const firstOperand = stack.pop();
                const secondOperand = stack.pop();
                const result= parseInt(secondOperand) - parseInt(firstOperand)
                stack.push(Math.trunc(result))
            } else if (token === "*" ) {
                const firstOperand = stack.pop();
                const secondOperand = stack.pop();
                const result= parseInt(firstOperand) * parseInt(secondOperand)
                stack.push(Math.trunc(result))
            } else if (token === "/" ) {
                const firstOperand = stack.pop();
                const secondOperand = stack.pop();
                const result= parseInt(secondOperand) / parseInt(firstOperand)
                stack.push(Math.trunc(result))
            }

            if (token === "+" || token === "-" || token === "*" || token === "/") {
                continue
            }

            stack.push(token)
        }

        console.log('stack', stack)

        return stack[0]
    }
}
