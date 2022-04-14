/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const len = nums.length;

    let sum = 0;
    let minSum = 0;
    let result = -Infinity;

    for (let i = 0; i < len; i++) {
        sum += nums[i];

        result = Math.max(result, sum - minSum);
        minSum = Math.min(minSum, sum);
    }

    return result;
};
// @lc code=end
export { maxSubArray };
