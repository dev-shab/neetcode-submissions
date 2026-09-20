class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0;
        let j = 0;
        let result = 0;
        const seen = new Map();
        while (j < s.length) {
            while (seen.has(s[j]) && seen.get(s[j]) >= i) {
                i = seen.get(s[j]) + 1;
            }
            seen.set(s[j], j);
            result = Math.max(result, j - i + 1)
            j++;
        }
        return result;
    }
}
