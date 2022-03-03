/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    // 统一为正数
    let sign = true; // 符号 true:+ false:-
    if (dividend < 0) {
        dividend = -dividend;
        sign = !sign;
    }

    if (divisor < 0) {
        divisor = -divisor;
        sign = !sign;
    }

    if (dividend === divisor) {
        return sign ? 1 : -1;
    } else if (dividend < divisor) {
        return 0;
    } else if (divisor === 1) {
        if (sign) {
            return dividend > 2 ** 31 - 1 ? 2 ** 31 - 1 : dividend;
        } else {
            return dividend > 2 ** 31 ? -(2 ** 31) : -dividend;
        }
    }

    let result = 0;

    let d = divisor;
    let n = 1;

    while (dividend >= divisor) {
        if (dividend >= d + d) {
            n += n;
            d += d;
        } else {
            dividend -= d;
            result += n;
            d = divisor;
            n = 1;
        }
    }

    if (sign) {
        return result > 2 ** 31 - 1 ? 2 ** 31 - 1 : result;
    } else {
        return result > 2 ** 31 ? -(2 ** 31) : -result;
    }
};
// @lc code=end
export { divide };
