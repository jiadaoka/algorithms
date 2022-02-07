/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const len = s.length;
    const mapping = {
        "(": ")",
        ")": null,
        "{": "}",
        "}": null,
        "[": "]",
        "]": null,
    };
    const arr = [];
    let endLen = 0;

    for (let i = 0; i < len; i++) {
        const cur = s[i];
        const next = mapping[cur];

        if (next === null) {
            if (arr[endLen - 1] === cur) {
                endLen--;
            } else {
                endLen++;
                break;
            }
        } else {
            arr[endLen] = next;
            endLen++;
        }
    }

    return endLen === 0;
};
// @lc code=end
export { isValid };
