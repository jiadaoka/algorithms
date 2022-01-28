/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 * 看过别人解题后再做的
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
    nums.sort((a, b) => a - b);

    if (nums[len - 1] < 0 || nums[0] > 0) {
        return [];
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            // 最左的数大于0则停止
            break;
        }

        if (nums[i] === nums[i - 1]) {
            continue;
        }

        const base = nums[i]; // 最左边的数

        let left = i + 1;
        let right = len - 1;

        while (left < right && right > 0) {
            if (left - 1 !== i && nums[left] === nums[left - 1]) {
                left++;
                continue;
            }

            if (nums[right] === nums[right + 1]) {
                right--;
                continue;
            }

            const sum = base + nums[left] + nums[right];

            if (sum > 0) {
                // nums[right] 大了
                right--;
            } else if (sum < 0) {
                // nums[left] 小了
                left++;
            } else {
                result.push([base, nums[left], nums[right]]);
                right--;
                left++;
            }
        }
    }

    return result;
};

// @lc code=end
export { threeSum };
