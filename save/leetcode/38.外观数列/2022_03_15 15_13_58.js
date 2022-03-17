/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return "1";
    }

    const baseStr = countAndSay(n - 1);
    const len = baseStr.length;

    let result = "";
    let str = "";
    let num = 0;
    for (let i = 0; i <= len; i++) {
        const c = baseStr[i];
        if (str === c) {
            num++;
        } else {
            if (num !== 0) {
                result += num + str;
            }

            str = c;
            num = 1;
        }
    }

    return result;
};
// @lc code=end
export { countAndSay };
