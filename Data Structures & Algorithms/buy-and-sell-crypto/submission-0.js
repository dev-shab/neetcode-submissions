class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let result = 0;
        let low = 0;
        for(let i = 0; i < prices.length; i++) {
            if(prices[i] < prices[low]) {
                low = i;
            } else {
                result = Math.max(result, prices[i] - prices[low]);
            }
        }
        return result;
    }
}
