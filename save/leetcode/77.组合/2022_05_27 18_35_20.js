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
    const arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    const result = [];
    backtracking(0, k, []);

    return result;

    function backtracking(idx, size, previous) {
        if (size === 0) {
            result.push(previous);
            return;
        } else {
            if (idx === n) {
                return;
            }
        }

        for (let i = idx; i < n; i++) {
            backtracking(i + 1, size - 1, [...previous, arr[i]]);
        }
    }
};

// @lc code=end
export { combine };
