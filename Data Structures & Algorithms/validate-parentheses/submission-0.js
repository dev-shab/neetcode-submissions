class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    
    isValid(s) {
        const mapping = {
            "}": "{",
            "]": "[",
            ")": "("
        }
        const opening = new Set(["{", "[", "("]);
        const stack = [];
        for(const char of s) {
            if(opening.has(char)) stack.push(char);
            else {
                const top = stack.pop();
                if(top !== mapping[char]) return false;
            }
        }
        return stack.length === 0;
    }
}
