/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    const len = nums.length;
    let left = 0;
    let right = len - 1;

    let idx = 0;
    while (idx <= right) {
        const n = nums[idx];

        if (n === 0) {
            [nums[left], nums[idx]] = [nums[idx], nums[left]];
            left++;
            idx++;
        } else if (n === 1) {
            idx++;
        } else if (n === 2) {
            [nums[right], nums[idx]] = [nums[idx], nums[right]];
            right--;
        }
    }
};
// @lc code=end
export { sortColors };
