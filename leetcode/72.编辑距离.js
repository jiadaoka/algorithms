/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const len1 = word1.length + 1;
    const len2 = word2.length + 1;

    const dp = new Array(len2);
    dp[0] = new Array(len1).fill().map((v, i) => i);

    for (let i = 1; i < len2; i++) {
        dp[i] = new Array(len1);
        dp[i][0] = i;
    }

    for (let i = 1; i < len2; i++) {
        const p2 = word2[i - 1];

        for (let j = 1; j < len1; j++) {
            const p1 = word1[j - 1];

            if (p1 !== p2) {
                dp[i][j] = Math.min(
                    dp[i - 1][j - 1] + 1,
                    dp[i][j - 1] + 1,
                    dp[i - 1][j] + 1
                );
            } else {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[len2 - 1][len1 - 1];
};
// @lc code=end
export { minDistance };
