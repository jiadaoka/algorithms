/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const reg = /^\s*([+-]?\d+)/;
    const match = reg.exec(s);
    let result = 0;
    if (match) {
        result = +match[1];
    }

    if (result > 2 ** 31 - 1) result = 2 ** 31 - 1;
    if (result < (-2) ** 31) result = (-2) ** 31;

    return result;
};
// @lc code=end
