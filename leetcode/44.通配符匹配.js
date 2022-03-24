/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const sLen = s.length + 1;
    const pLen = p.length + 1;

    const dp = new Array(sLen);
    for (let i = 0; i < sLen; i++) {
        dp[i] = new Array(pLen).fill(false);
    }
    dp[0][0] = true;

    for (let j = 1; j < pLen; j++) {
        if (p[j - 1] === "*") {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (let i = 1; i < sLen; i++) {
        for (let j = 1; j < pLen; j++) {
            if (p[j - 1] === "*") {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j - 1] || dp[i - 1][j];
            } else {
                if (s[i - 1] === p[j - 1] || p[j - 1] === "?") {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
    }

    return dp[s.length][p.length];
};
// @lc code=end
export { isMatch };
