class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mySet = new Set([...nums]);
        return mySet.size !== nums.length;
    }
}
