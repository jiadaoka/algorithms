/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const len = matrix.length;

    const half = Math.floor(len / 2);

    // 左右翻转
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < half; j++) {
            [matrix[i][j], matrix[i][len - j - 1]] = [
                matrix[i][len - j - 1],
                matrix[i][j],
            ];
        }
    }

    // 对角翻转
    for (let i = 0; i < len; i++) {
        const l = len - i;
        for (let j = 0; j < l; j++) {
            [matrix[i][j], matrix[len - 1 - j][l - 1]] = [
                matrix[len - 1 - j][l - 1],
                matrix[i][j],
            ];
        }
    }

    return matrix;
};
// @lc code=end
export { rotate };
