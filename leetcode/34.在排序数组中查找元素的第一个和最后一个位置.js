/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    const len = nums.length;
    let result = [-1, -1];

    if (len === 0) {
        return result;
    }

    if (nums[0] > target || nums[len - 1] < target) {
        return result;
    } else if (len === 1) {
        return [0, 0];
    }

    let k = null;
    let left = 0;
    let right = len - 1;

    while (left < right) {
        const idx = Math.floor((left + right) / 2);
        const center = nums[idx];

        if (center < target) {
            if (nums[idx + 1] === target) {
                k = idx + 1;
                break;
            } else if (nums[idx + 1] > target) {
                break;
            }

            left = idx;
        } else if (center > target) {
            if (nums[idx - 1] < target) {
                break;
            }

            right = idx;
        } else {
            if (idx === 0 || nums[idx - 1] < target) {
                k = idx;
                break;
            }

            right = idx;
        }
    }

    if (k === null) {
        return result;
    }

    result[0] = k;
    left = k;
    right = len - 1;
    k = null;

    while (left <= right) {
        const idx = Math.ceil((left + right) / 2);
        const center = nums[idx];

        if (center > target) {
            if (nums[idx - 1] === target) {
                k = idx - 1;
                break;
            }

            right = idx;
        } else {
            if (idx === len - 1 || nums[idx + 1] > target) {
                k = idx;
                break;
            }

            left = idx;
        }
    }

    result[1] = k;

    return result;
};
// @lc code=end
export { searchRange };
