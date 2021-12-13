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
    let flag = true; // 正负
    let numStr = ""; // 值

    if (x < 0) {
        flag = false;
        numStr = (x + "").slice(1);
    } else {
        flag = true;
        numStr = x + "";
    }

    const len = numStr.length;
    let newStr = "";
    for (let i = len - 1; i >= 0; i--) {
        newStr += numStr[i];
    }

    let result = flag ? +newStr : +("-" + newStr);
    if (result > 2 ** 31 - 1 || result < (-2) ** 31) {
        result = 0;
    }

    return result;
};
// @lc code=end
