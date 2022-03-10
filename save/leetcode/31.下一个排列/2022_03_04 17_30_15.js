/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    const len = nums.length;
    let left = -1;
    let right = null;

    for (let i = len - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j] && j > left) {
                left = j;
                right = i;
                break;
            }
        }

        if (i < left) {
            break;
        }
    }

    if (right !== null) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
    }

    quickSort(left === -1 ? 0 : left + 1, len - 1, nums);

    return nums;
};

function quickSort(left, right, list) {
    if (left > right) return;

    const bNum = list[left];
    let i = left;
    let j = right;

    while (i !== j) {
        while (list[j] >= bNum && i < j) {
            j--;
        }

        while (list[i] <= bNum && i < j) {
            i++;
        }

        if (i < j) {
            [list[i], list[j]] = [list[j], list[i]];
        }
    }

    [list[left], list[i]] = [list[i], list[left]];

    quickSort(left, i - 1, list);
    quickSort(i + 1, right, list);
}
// @lc code=end
export { nextPermutation };
