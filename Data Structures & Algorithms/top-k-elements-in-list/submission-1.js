class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    topKFrequent(nums, k) {
        const bucket = new Array(nums.length + 1);
        const freqCounter = new Map();
        const result = [];
        for(const num of nums) {
            freqCounter.set(num, (freqCounter.get(num) ?? 0) + 1);
        }
        for(const [key, val] of freqCounter) {
            if(!bucket[val]) bucket[val] = [key];
            else bucket[val].push(key);
        }
        for(let i = bucket.length - 1; i >= 0; i--) {
            if(bucket[i]) {
                for(const num of bucket[i]) {
                    result.push(num)
                    if(result.length === k) return result;
                }
            }
        }
    }
}
