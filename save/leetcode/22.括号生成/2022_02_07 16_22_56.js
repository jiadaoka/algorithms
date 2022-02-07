/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];

    generate("", n, 0, 0, result);

    return result;
};

/**
 *
 * @param {string} str
 * @param {number} num
 * @param {number} leftNum
 * @param {number} rightNum
 * @param {string[]} arr
 */
function generate(str, num, leftNum, rightNum, arr) {
    if (leftNum >= num && rightNum >= num) {
        arr.push(str);
        return;
    }

    if (leftNum === rightNum) {
        generate(str + "(", num, leftNum + 1, rightNum, arr);
    } else if (leftNum >= rightNum) {
        if (leftNum < num) generate(str + "(", num, leftNum + 1, rightNum, arr);

        generate(str + ")", num, leftNum, rightNum + 1, arr);
    }
}
// @lc code=end
