/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const len = nums.length;
    let idx = 0;
    while (idx < len) {
        const num = nums[idx];
        if (num > 0 && num <= len) {
            if (num - 1 !== idx) {
                if (nums[num - 1] != nums) {
                    if (nums[num - 1] === nums[idx]) {
                        nums[idx] = null;
                        idx++;
                    } else {
                        [nums[num - 1], nums[idx]] = [nums[idx], nums[num - 1]];
                    }
                }
            } else {
                idx++;
            }
        } else {
            nums[idx] = null;
            idx++;
        }
    }

    let result = 1;
    for (let i = 0; i <= len; i++) {
        const n = nums[i];
        if (n === null || n === undefined) {
            result = i + 1;
            break;
        }
    }

    return result;
};
// @lc code=end
export { firstMissingPositive };
