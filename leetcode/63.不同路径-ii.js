/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const h = obstacleGrid.length;
    const w = obstacleGrid[0].length;

    const dp = new Array(h);

    dp[0] = new Array(w);
    dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    for (let j = 1; j < w; j++) {
        dp[0][j] = obstacleGrid[0][j] === 0 ? dp[0][j - 1] : 0;
    }

    for (let i = 1; i < h; i++) {
        dp[i] = new Array(w);

        dp[i][0] = obstacleGrid[i][0] === 0 ? dp[i - 1][0] : 0;

        for (let j = 1; j < w; j++) {
            let up = 0;
            let left = 0;
            if (obstacleGrid[i][j] === 0) {
                up = dp[i - 1][j];
                left = dp[i][j - 1];
            }

            dp[i][j] = up + left;
        }
    }

    return dp[h - 1][w - 1];
};
// @lc code=end
export { uniquePathsWithObstacles };
