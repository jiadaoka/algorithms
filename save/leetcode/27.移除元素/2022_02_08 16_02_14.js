/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const len = nums.length;
    let result = 0;
    let right = len - 1;

    while (result <= right) {
        if (nums[right] === val) {
            right--;
            continue;
        }

        if (nums[result] === val) {
            [nums[result], nums[right]] = [nums[right], nums[result]];
            right--;
        }

        result++;
    }

    return result;
};
// @lc code=end
