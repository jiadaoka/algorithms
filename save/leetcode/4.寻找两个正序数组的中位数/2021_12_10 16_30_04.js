/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let result = null;
    const nums = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = nums.length;
    if ((len & 1) === 0) {
        const m = len / 2;
        result = (nums[m] + nums[m - 1]) / 2;
    } else {
        const m = Math.floor(len / 2);
        result = nums[m];
    }

    return result;
};
// @lc code=end
export { findMedianSortedArrays };
