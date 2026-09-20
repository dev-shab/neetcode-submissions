class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        const sorted = nums.sort((a, b) => a - b);
        for(let i = 0; i < sorted.length; i++) {
            if(i > 0 && sorted[i] === sorted[i - 1]) continue;
            const target = -sorted[i];
            let l = i + 1;
            let r = sorted.length - 1;
            while(l < r) {
                const sum = sorted[l] + sorted[r];
                if(sum > target) r--;
                else if(sum < target) l++;
                else {
                    result.push([sorted[i], sorted[l], sorted[r]]);
                    l++;
                    r--;
                    while(l < r && sorted[l] === sorted[l - 1]) l++;
                }
            }
        }
        return result;
    }
}
