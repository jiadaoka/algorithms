/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const pLen = haystack.length;
    const cLen = needle.length;

    if (cLen === 0) return 0;

    const len = pLen - cLen + 1;
    let idx = 0;
    let result = -1;

    while (idx < len) {
        if (haystack[idx] === needle[0]) {
            let flag = true;
            for (let i = 1; i < cLen; i++) {
                if (haystack[idx + i] !== needle[i]) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                result = idx;
                break;
            }
        }

        idx++;
    }

    return result;
};
// @lc code=end
