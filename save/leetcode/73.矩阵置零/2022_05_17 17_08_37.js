/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const r = new Set(); // 行
    const c = new Set(); // 列

    const rL = matrix.length;
    const cL = matrix[0].length;

    for (let i = 0; i < rL; i++) {
        for (let j = 0; j < cL; j++) {
            if (matrix[i][j] === 0) {
                r.add(i);
                c.add(j);
            }
        }
    }

    for (let i = 0; i < rL; i++) {
        if (r.has(i)) {
            for (let j = 0; j < cL; j++) matrix[i][j] = 0;
        } else {
            for (let j = 0; j < cL; j++) {
                if (c.has(j)) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
};
// @lc code=end
