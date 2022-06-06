/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [[]];
    const len = nums.length;

    let idx = len - 1;

    while (idx >= 0) {
        const l = result.length;
        const cur = nums[idx];

        for (let i = 0; i < l; i++) {
            const s = [...result[i], cur];
            result.push(s);
        }

        idx--;
    }

    return result;
};
// @lc code=end
