/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const result = new Array(n);
    const half = Math.ceil(n / 2);
    let circle = 1; // 圈
    const circleBase = [0]; // 圈基数
    for (let i = 0; i < n; i++) {
        result[i] = new Array(n);

        if (i < half) {
            const l = circleBase.length - 1;
            circleBase.push(circleBase[l] + n - i * 2 - 1);
        }
    }

    while (circle <= half) {
        const start = circleBase[circle - 1] * 4 + 1; // 单圈起点
        const end = circleBase[circle] * 4; // 单圈终点

        if (end > start) {
            const c = circle - 1;
            const len = n - 2 * c;

            for (let i = 0; i < len; i++) {
                result[c][c + i] = start + i;
                result[n - circle][c + i] = end - (n - 2 * circle) - i;

                if (i > 0 && i < len - 1) {
                    result[c + i][c] = end - i + 1;
                    result[c + i][n - circle] = start + (n - 2 * c) + i - 1;
                }
            }
        } else {
            result[circle - 1][circle - 1] = start;
        }

        circle++;
    }

    return result;
};
// @lc code=end
export { generateMatrix };
