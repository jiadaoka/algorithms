/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const len = nums.length;
    if (len <= 2) return len;

    let before = 2;
    let idx = 2;

    while (before < len) {
        const a = nums[idx - 2];
        const b = nums[before];

        if (a !== b) {
            nums[idx] = b;
            idx++;
        }

        before++;
    }

    return idx;
};
// @lc code=end
