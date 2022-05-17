/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const h = grid.length;
    const w = grid[0].length;

    const dp = new Array(h);
    dp[0] = new Array(w);

    dp[0][0] = grid[0][0];

    for (let j = 1; j < w; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    for (let i = 1; i < h; i++) {
        dp[i] = new Array(w);
        dp[i][0] = dp[i - 1][0] + grid[i][0];

        for (let j = 1; j < w; j++) {
            const last =
                dp[i - 1][j] > dp[i][j - 1] ? dp[i][j - 1] : dp[i - 1][j];
            dp[i][j] = last + grid[i][j];
        }
    }

    return dp[h - 1][w - 1];
};
// @lc code=end
