/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const len = s.length;
    let result = 0;

    for (let i = 0; i < len; i++) {
        const c = roman[s[i]];
        const n = roman[s[i + 1]];

        if (c < n) {
            result -= c;
        } else {
            result += c;
        }
    }

    return result;
};
// @lc code=end
