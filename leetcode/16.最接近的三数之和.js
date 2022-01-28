/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length < 3) {
        return result;
    }

    const len = nums.length;
    nums.sort((a, b) => a - b);
    let result = null;

    for (let i = 0; i < len; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        const base = nums[i];

        let left = i + 1;
        let right = len - 1;

        while (left < right) {
            if (nums[left] === nums[left - 1] && left - i !== 1) {
                left++;
                continue;
            }

            if (nums[right] === nums[right + 1]) {
                right--;
                continue;
            }

            const n = base + nums[left] + nums[right];
            const diff = target - n;

            if (diff > 0) {
                if (
                    Math.abs(diff) < Math.abs(target - result) ||
                    result === null
                ) {
                    result = n;
                }

                left++;
            } else if (diff < 0) {
                if (
                    Math.abs(diff) < Math.abs(target - result) ||
                    result === null
                ) {
                    result = n;
                }

                right--;
            } else {
                result = n;
                break;
            }
        }

        if (result === target) {
            break;
        }
    }

    return result;
};
// @lc code=end
