class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const freqCount = {};
        let maxFreq = 0;
        let i = 0;
        let j = 0;
        let result = 0;
        while(j < s.length) {
            freqCount[s[j]] = (freqCount[s[j]] ?? 0) + 1;
            maxFreq = Math.max(maxFreq, freqCount[s[j]]);
            while(j - i + 1 > maxFreq + k) {
                freqCount[s[i]]--;
                i++;
            }
            result = Math.max(j - i + 1);
            j++;
        }
        return result;
    }
}
