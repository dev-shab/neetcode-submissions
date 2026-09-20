class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const result = [];
        const windowCount = new Map();
        let windowMax = -Infinity;
        for(let i = 0; i < k; i++) {
            windowCount.set(nums[i], (windowCount.get(nums[i]) ?? 0) + 1);
            windowMax = Math.max(windowMax, nums[i]);
        }
        let l = 0;
        let r = k;
        while(r < nums.length) {
            result.push(windowMax);
            if(windowCount.get(nums[l]) === 1) {
                windowCount.delete(nums[l])
            } else {
                windowCount.set(nums[l], windowCount.get(nums[l]) - 1);
            }
            if(nums[l] === windowMax && !windowCount.has(nums[l])) {
                windowMax = Math.max(...windowCount.keys());
            }
            l++;
            windowCount.set(nums[r], (windowCount.get(nums[r]) ?? 0) + 1);
            windowMax = Math.max(windowMax, nums[r]);
            r++;
        }
        result.push(windowMax);
        return result;
    }
}
