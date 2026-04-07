class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minSellPrice = prices[0];

        for (let i = 0; i < prices.length; i++) {
            minSellPrice = Math.min(minSellPrice, prices[i])
            console.log("minSellPrice : " + minSellPrice)
            maxProfit = Math.max(maxProfit, prices[i] - minSellPrice)
            console.log("maxProfit : " + maxProfit)
        }

        return maxProfit
    }
}
