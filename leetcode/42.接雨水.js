/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const len = height.length;
    let left = 0;
    let right = 1;
    let maxIdx = 0; // 已经经过最大高度的索引
    let result = 0;

    while (right < len) {
        const curHeight = height[right];
        let sum = 0;
        if (curHeight > height[left]) {
            let bottom = height[left];

            while (left >= 0) {
                const lHeight = height[left];

                if (lHeight > bottom) {
                    if (lHeight >= curHeight) {
                        sum = sum + (curHeight - bottom) * (right - left - 1);
                        break;
                    } else {
                        sum = sum + (lHeight - bottom) * (right - left - 1);
                        bottom = lHeight;
                    }
                }

                if (left === maxIdx) {
                    break;
                }

                left--;
            }

            result = result + sum;

            if (height[maxIdx] <= curHeight) {
                maxIdx = left - 1;
            }
        }

        right++;
        left = right - 1;
    }

    return result;
};
// @lc code=end
export { trap };
