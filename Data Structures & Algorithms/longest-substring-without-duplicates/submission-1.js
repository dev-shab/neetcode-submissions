class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0;
        let j = 0;
        let result = 0;
        const seen = new Set(); 
        while(j < s.length) {
            while(seen.has(s[j])) {
                seen.delete(s[i]);
                i++;
            }
            seen.add(s[j]);
            result = Math.max(result, j - i + 1)
            j++;
        }
        return result;
    }
}
