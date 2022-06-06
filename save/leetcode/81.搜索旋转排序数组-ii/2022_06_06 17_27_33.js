/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    const len = nums.length;

    let left = 0;
    let right = len - 1;

    while (left <= right) {
        if (nums[left] === target || nums[right] === target) {
            return true;
        }

        left++;
        right--;
    }

    return false;
};
// @lc code=end
export { search };
