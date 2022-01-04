/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    const len = height.length;
    let result = 0;
    let left = 0;
    let right = len - 1;

    while (left < right) {
        const w = right - left;
        let h = 0;

        if (height[left] < height[right]) {
            h = height[left];
            left++;
        } else {
            h = height[right];
            right--;
        }

        if (w * h > result) {
            result = w * h;
        }
    }

    return result;
};
// @lc code=end

export { maxArea };
