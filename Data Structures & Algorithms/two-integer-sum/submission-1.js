class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap = new Map();
        for(let i = 0; i < nums.length; i++) {
            const remaining = target - nums[i];
            if(myMap.has(remaining)) return [myMap.get(remaining), i];
            myMap.set(nums[i], i);
        }
    }
}
