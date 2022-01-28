/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num 1 <= num <= 3999
 * @return {string}
 */
var intToRoman = function (num) {
    const roman = ["I", "V", "X", "L", "C", "D", "M"];
    let n = num;
    let result = "";

    while (n > 0) {
        const l = (n + "").length - 1;
        const s = Math.floor(n / 10 ** l);
        let r = "";

        if (s < 4) {
            r = r.padEnd(s, roman[l * 2]);
        } else if (s === 4) {
            r = roman[l * 2] + roman[l * 2 + 1];
        } else if (s === 5) {
            r = roman[l * 2 + 1];
        } else if (s < 9) {
            r = roman[l * 2 + 1].padEnd(s - 4, roman[l * 2]);
        } else {
            r = roman[l * 2] + roman[l * 2 + 2];
        }

        n = n % 10 ** l;
        result += r;
    }

    return result;
};
// @lc code=end

export { intToRoman };
