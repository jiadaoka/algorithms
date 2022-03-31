/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];
    each(nums, [], result);

    return result;
};

/**
 *
 * @param {number[]} nums
 * @param {number[]} storage
 * @param {number[][]} result
 * @returns
 */
function each(nums, storage, result) {
    const len = nums.length;

    if (len === storage.length) {
        result.push(storage);
        return;
    }

    for (let i = 0; i < len; i++) {
        const cur = nums[i];

        if (!storage.includes(cur)) {
            each(nums, [...storage, cur], result);
        }
    }
}
// @lc code=end
