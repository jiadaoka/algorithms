/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n);
        dp[i][0] = 1;

        for (let j = 1; j < n; j++) {
            let up = 0;
            if (i > 0) {
                up = dp[i - 1][j];
            }
            dp[i][j] = up + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};
// @lc code=end
