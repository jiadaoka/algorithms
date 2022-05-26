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
    const rL = matrix.length;
    const cL = matrix[0].length;

    let f = false;

    for (let i = 0; i < rL; i++) {
        if (matrix[i][0] === 0) {
            f = true;
            break;
        }
    }

    for (let i = 0; i < rL; i++) {
        for (let j = 1; j < cL; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = rL - 1; i >= 0; i--) {
        if (matrix[i][0] === 0) {
            for (let j = 0; j < cL; j++) matrix[i][j] = 0;
        } else {
            if (f) {
                matrix[i][0] = 0;
            }

            for (let j = 1; j < cL; j++) {
                if (matrix[0][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
};
// @lc code=end
export { setZeroes };
