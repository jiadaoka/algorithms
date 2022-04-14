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
    const sums = [0];
    const len = nums.length;

    let minSum = 0;
    let result = -Infinity;

    for (let i = 0; i < len; i++) {
        const n = nums[i];
        const s = sums[i] + n;

        sums.push(s);

        result = Math.max(result, s - minSum);
        minSum = Math.min(minSum, sums[i + 1]);
    }

    return result;
};
// @lc code=end
export { maxSubArray };
