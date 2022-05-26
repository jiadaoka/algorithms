/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const rLen = matrix.length;
    const cLen = matrix[0].length;

    if (matrix[0][0] > target || matrix[rLen - 1][cLen - 1] < target)
        return false;

    let rIdx = 0;

    let up = 0;
    let down = rLen - 1;

    while (up < down) {
        if (matrix[down][0] <= target) {
            rIdx = down;
            break;
        }

        if (matrix[up][0] > target) {
            break;
        } else {
            rIdx = up;
        }

        const mid = Math.floor((up + down) / 2);

        if (matrix[mid][0] > target) {
            down = mid;
        } else {
            if (up === mid) break;
            up = mid;
        }
    }

    if (matrix[rIdx][cLen - 1] < target) {
        return false;
    }

    if (matrix[rIdx][cLen - 1] === target || matrix[rIdx][0] === target)
        return true;

    let left = 0;
    let right = cLen - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (matrix[rIdx][mid] > target) {
            if (right === mid) break;
            right = mid;
        } else if (matrix[rIdx][mid] < target) {
            if (left === mid) break;
            left = mid;
        } else {
            return true;
        }
    }

    return false;
};
// @lc code=end
export { searchMatrix };
