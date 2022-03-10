/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const len = nums.length;

    if (nums[0] === target) {
        return 0;
    } else if (nums[len - 1] === target) {
        return len - 1;
    }

    let k = 0;
    let left = 0;
    let right = len - 1;

    while (left < right) {
        const idx = Math.floor((left + right) / 2);
        const center = nums[idx];

        if (center > nums[right]) {
            if (center > nums[idx + 1]) {
                k = idx + 1;
                break;
            }

            left = idx;
        } else {
            if (center < nums[idx - 1]) {
                k = idx;
                break;
            }

            right = idx;
        }
    }

    if (target === nums[k]) {
        return k;
    }

    if (target > nums[0] && k !== 0) {
        left = 0;
        right = k - 1;
    } else {
        left = k;
        right = len - 1;
    }

    let result = -1;

    if (left === right) {
        if (nums[left] === target) {
            return left;
        } else {
            return -1;
        }
    } else {
        while (left <= right) {
            const idx = Math.floor((left + right) / 2);
            const n = nums[idx];

            if (n > target) {
                if (right === idx) right = idx - 1;
                else right = idx;
            } else if (n < target) {
                if (left === idx) left = idx + 1;
                else left = idx;
            } else {
                result = idx;
                break;
            }
        }
    }

    return result;
};
// @lc code=end
export { search };
