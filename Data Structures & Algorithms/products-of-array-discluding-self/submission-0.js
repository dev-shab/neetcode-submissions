class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftProduct = 1;
        const result = []
        for(let i = 0; i < nums.length; i++) {
            result.push(leftProduct);
            leftProduct *= nums[i];
        }
        let rightProduct = 1;
        for(let i = result.length - 1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        return result;
    }
}
