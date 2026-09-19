class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seen = new Set(nums);
        let result = 0;
        for(const num of [...seen]) {
            if(!seen.has(num - 1)) {
                let count = 1;
                while(seen.has(num + count)) {
                    count++;
                }
                result = Math.max(result, count);
            }
        }
        return result;
    }
}
