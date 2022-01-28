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
    nums = quickSort(nums);

    if (nums[len - 1] < 0) {
        return result;
    }

    // 找到最小的非负数索引
    const border = nums.findIndex((e) => e >= 0);

    if (nums[border] === 0) {
        let zeroCount = 0;
        for (let i = border; i < len; i++) {
            if (nums[i] > 0) {
                break;
            }

            zeroCount++;
        }

        if (zeroCount >= 3) {
            result.push([0, 0, 0]);
        }
    }

    if (border === 0) {
        return result;
    }

    let left = 0;

    while (left < border) {
        if (nums[left] === nums[left - 1]) {
            left++;
            continue;
        }

        let right = border;
        while (right < len) {
            if (nums[right] === nums[right - 1]) {
                right++;
                continue;
            }

            const need = 0 - nums[left] - nums[right];

            if (need > 0) {
                if (need > nums[len - 1]) {
                    right++;
                    continue;
                }

                const idx = nums.indexOf(need, right + 1);
                if (idx !== -1) {
                    result.push([nums[left], nums[right], nums[idx]]);
                }
            } else if (need < 0) {
                if (need < nums[left]) {
                    break;
                }

                const idx = nums.indexOf(need, left + 1);
                if (idx !== -1) {
                    result.push([nums[left], nums[idx], nums[right]]);
                }
            }

            right++;
        }

        left++;
    }

    return result;
};

/**
 * 快速排序
 * @param {number[]} list
 * @returns
 */
function quickSort(list) {
    if (list.length <= 1) return list;

    const arr = [...list];
    const len = list.length;
    /**
     * 排序
     * @param {number} left
     * @param {number} right
     */
    const swap = (left, right, group) => {
        if (left >= right) return;

        const base = left;
        let i = left;
        let j = right;

        while (i !== j) {
            while (arr[j] >= arr[base] && i < j) {
                j--;
            }

            while (arr[i] <= arr[base] && i < j) {
                i++;
            }

            if (i < j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        [arr[left], arr[i]] = [arr[i], arr[left]];

        swap(left, i - 1, group + "-1");
        swap(i + 1, right, group + "-2");
    };

    swap(0, len - 1, "1");

    return arr;
}
// @lc code=end
export { threeSum };
