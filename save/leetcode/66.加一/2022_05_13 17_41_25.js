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
    let idx = len - 1;

    while (isPush && idx >= 0) {
        let cur = digits[idx];
        if (cur === 9) {
            isPush = 1;
            digits[idx] = 0;
        } else {
            digits[idx] = cur + 1;
            isPush = 0;
        }

        idx--;
    }

    if (isPush) {
        digits.unshift(1);
    }

    return digits;
};
// @lc code=end
