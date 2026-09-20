class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let result = [0];
        for(let i = 1; i < height.length; i++) {
            result[i] = Math.max(result[i - 1], height[i - 1]);
        }
        let rightMax = 0;
        let waterMax = 0;
        for(let i = height.length - 1; i >= 0; i--) {
            const water = Math.min(rightMax, result[i]) - height[i]
            if(water > 0) waterMax += water;
            rightMax = Math.max(rightMax, height[i]);
        }
        return waterMax;
    }
}
