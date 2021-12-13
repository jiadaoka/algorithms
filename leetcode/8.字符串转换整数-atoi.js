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
    let result = 0;
    let flag = 1;

    s = s.trimStart();
    if (s[0] === "-") {
        flag = -1;
        s = s.slice(1);
    } else if (s[0] === "+") {
        s = s.slice(1);
    }

    let i = 0;
    while (true) {
        let over = false;

        const item = +s[i];
        if (isNaN(item) || s[i] === " ") {
            over = true;
        } else {
            result = result * 10 + item;
        }

        i++;
        if (over) break;
    }

    result = result * flag;

    if (result > 2 ** 31 - 1) result = 2 ** 31 - 1;
    if (result < (-2) ** 31) result = (-2) ** 31;

    return result;
};
// @lc code=end
export { myAtoi };
