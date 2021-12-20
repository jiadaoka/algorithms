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
    const _nums = nums.map((num, i) => ({ num, i })).sort((a, b) => a.num - b.num);
    // nums = nums.sort((a, b) => a - b);

    for (let i1 = 0; i1 < len; i1++) {
        const n1 = _nums[i1].num;
        for (let i2 = i1 + 1; i2 < len; i2++) {
            const n2 = _nums[i2].num;
            if (n1 + n2 === target) {
                result = [_nums[i1].i, _nums[i2].i];
                break;
            } else if (n1 + n2 > target) {
                break;
            }
        }

        if (result.length) break;
    }
    return result;
};
// @lc code=end
