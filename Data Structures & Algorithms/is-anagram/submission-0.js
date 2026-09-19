class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let freqCounter = {};
        for(let char of s) {
            freqCounter[char] = (freqCounter[char] ?? 0) + 1;
        }
        for(let char of t) {
            if(freqCounter[char]) {
                freqCounter[char]--;
            } else {
                return false;
            }
        }
        return true;
    }
}
