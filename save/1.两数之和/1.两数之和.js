/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = [];
    const len = nums.length;

    for (let i1 = 0; i1 < len; i1++) {
        const n1 = nums[i1];
        for (let i2 = i1 + 1; i2 < len; i2++) {
            const n2 = nums[i2];
            if (n1 + n2 === target) {
                result = [i1, i2];
                break;
            }
        }

        if (result.length) break;
    }
    return result;
};
// @lc code=end
