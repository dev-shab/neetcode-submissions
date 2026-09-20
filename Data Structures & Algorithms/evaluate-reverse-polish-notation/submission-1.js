class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operation = (num1, num2, operator) => {
            switch(operator) {
                case "+": return num1 + num2;
                case "-": return num1 - num2;
                case "*": return num1 * num2;
                case "/": return Math.trunc(num1 / num2);
            }
        }
        const stack = [];
        const operators = new Set(["+", "-", "*", "/"]);
        for(const token of tokens) {
            if(operators.has(token)) {
                const num2 = stack.pop();
                const num1 = stack.pop();
                stack.push(operation(num1, num2, token));
            } else {
                stack.push(Number(token));
            }
        }
        return stack[0];
    }
}
