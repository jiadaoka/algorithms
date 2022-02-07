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
        "(": null,
        ")": "(",
        "{": null,
        "}": "{",
        "[": null,
        "]": "[",
    };
    const arr = [];
    let endIdx = 0;

    for (let i = 0; i < len; i++) {
        const cur = s[i];
        const last = mapping[cur];

        if (last === null) {
            arr[endIdx] = cur;
            endIdx++;
        } else if (last === arr[endIdx - 1]) {
            endIdx--;
        } else {
            endIdx++;
            break;
        }
    }

    return endIdx === 0;
};
// @lc code=end
export { isValid };
