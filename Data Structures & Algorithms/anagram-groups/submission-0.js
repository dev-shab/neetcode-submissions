class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const a = "a".charCodeAt(0);
        const freqCounter = {};
        for(const str of strs) {
            const countArr = new Array(26).fill(0);
            for(const char of str) {
                countArr[char.charCodeAt(0) - a]++;
            }
            const key = countArr.join(",");
            if(!freqCounter[key]) {
                freqCounter[key] = [];
            }
            freqCounter[key].push(str);
        }
        return Object.values(freqCounter);
    }
}
