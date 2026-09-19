class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const myMap = new Map();
        for(let index = 0; index < nums.length; index++) {
            const num = nums[index];
            const diff = target - num;
            if(myMap.has(num)) {
                return [myMap.get(num), index];
            } else {
                myMap.set(diff, index);
            }
        }
    }
}
