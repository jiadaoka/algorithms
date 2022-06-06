/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];
    backtracking(1, []);

    return result;

    function backtracking(idx, previous) {
        if (previous.length + n - idx + 1 < k) {
            return;
        }

        if (previous.length === k) {
            result.push(previous);
            return;
        }

        backtracking(idx + 1, [...previous, idx]);
        backtracking(idx + 1, [...previous]);
    }
};

// @lc code=end
export { combine };
