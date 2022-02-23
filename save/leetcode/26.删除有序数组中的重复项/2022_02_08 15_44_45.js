/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const len = nums.length;
    let result = 1;
    let idx = 1;

    while (idx < len) {
        if (nums[result] <= nums[result - 1]) {
            if (nums[result - 1] < nums[idx]) {
                [nums[idx], nums[result]] = [nums[result], nums[idx]];
                result++;
            }
        } else {
            result++;
        }

        idx++;
    }

    return result;
};
// @lc code=end
export { removeDuplicates };
