/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const len = s.length;
    let result = 0;

    for (let i = len - 1; i >= 0; i--) {
        const c = s[i];

        if (c === " ") {
            if (result !== 0) {
                break;
            }
        } else {
            result++;
        }
    }

    return result;
};
// @lc code=end
export { lengthOfLastWord };
