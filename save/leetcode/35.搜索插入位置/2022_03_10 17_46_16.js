/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    const len = nums.length;

    if (len === 0) {
        return 0;
    }

    if (nums[0] > target) {
        return 0;
    } else if (nums[len - 1] < target) {
        return len;
    }

    let result = 0;
    let left = 0;
    let right = len - 1;

    while (left < right) {
        const idx = Math.floor((left + right) / 2);
        const center = nums[idx];

        if (center > target) {
            if (nums[idx - 1] === target) {
                result = idx - 1;
                break;
            } else if (nums[idx - 1] < target) {
                result = idx;
                break;
            }

            right = idx;
        } else if (center < target) {
            if (nums[idx + 1] >= target) {
                result = idx + 1;
                break;
            }

            left = idx;
        } else {
            result = idx;
            break;
        }
    }

    return result;
};
// @lc code=end
export { searchInsert };
