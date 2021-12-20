/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let result = 0;
    while (x !== 0) {
        const cur = x % 10;
        x = (x - cur) / 10;
        result = result * 10 + cur;
    }

    if (result > 2 ** 31 - 1 || result < (-2) ** 31) {
        result = 0;
    }

    return result;
};
// @lc code=end
export { reverse };
