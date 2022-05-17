/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const len = digits.length;

    let isPush = 1;

    for (let i = len - 1; i >= 0; i--) {
        const cur = digits[i];

        if (cur !== 9) {
            digits[i] = digits[i] + isPush;
            isPush = 0;
            break;
        } else {
            digits[i] = 0;
        }
    }

    if (isPush) {
        digits.unshift(1);
    }

    return digits;
};
// @lc code=end
