/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];

    if (nums.length < 3) {
        return result;
    }

    const len = nums.length;
    nums = nums.sort((a, b) => a - b);

    if (nums[len - 1] < 0 || nums[0] > 0) {
        return [];
    }

    let left = 0;

    while (nums[left] <= 0) {
        if (nums[left] === nums[left - 1]) {
            left++;
            continue;
        }

        let right = left + 1;
        while (right < len) {
            if (right - left > 1 && nums[right] === nums[right - 1]) {
                right++;
                continue;
            }

            const need = 0 - (nums[right] + nums[left]);
            if (need > nums[len - 1]) {
                right++;
                continue;
            }

            if (need < nums[right]) {
                break;
            }

            if (nums.indexOf(need, right + 1) !== -1) {
                result.push([nums[left], nums[right], need]);
            }

            right++;
        }

        left++;
    }

    return result;
};

// @lc code=end
export { threeSum };
