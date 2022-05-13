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
    const dp = new Array(n);
    dp[0] = 1;

    for (let i = 0; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let c = 0;
            if (dp[j]) {
                c = dp[j];
            }

            dp[j] = c + dp[j - 1];
        }
    }

    return dp[n - 1];
};
// @lc code=end
