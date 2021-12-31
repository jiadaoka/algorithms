/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const sLen = s.length,
        pLen = p.length;
    const sL = sLen + 1;
    const pL = pLen + 1;

    const dp = new Array(sL);
    for (let i = 0; i < sL; i++) {
        dp[i] = new Array(pL).fill(false);
    }

    dp[0][0] = true;

    for (let j = 1; j < pL; j++) {
        if (p[j - 1] === "*") {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i < sL; i++) {
        for (let j = 1; j < pL; j++) {
            if (p[j - 1] !== "*") {
                if (p[j - 1] === s[i - 1] || p[j - 1] === ".") {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            } else {
                dp[i][j] = dp[i][j - 2];
                if (p[j - 2] === s[i - 1] || p[j - 2] === ".") {
                    dp[i][j] = dp[i][j] || dp[i - 1][j] || dp[i - 1][j - 2];
                }
            }
        }
    }

    return dp[sLen][pLen];
};
// @lc code=end
export { isMatch };
