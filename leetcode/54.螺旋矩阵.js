/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

const { directive } = require("@babel/types");

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const height = matrix.length;
    const len = matrix[0].length;
    const result = [...matrix[0]];

    let idx = len;
    let directionObj = {
        right: [0, 1],
        left: [0, -1],
        up: [-1, 0],
        down: [1, 0],
    };
    let d = "right";
    let boundary = [0, len - 1]; // 边界
    let cur = [0, len - 1];
    let direction = directionObj[d];
    while (idx < height * len) {
        if (cur[0] === boundary[0] && cur[1] === boundary[1]) {
            switch (d) {
                case "right":
                    d = "down";
                    boundary = [height - boundary[0] - 1, boundary[1]];
                    break;
                case "down":
                    d = "left";
                    boundary = [boundary[0], len - boundary[1] - 1];
                    break;
                case "left":
                    d = "up";
                    boundary = [height - boundary[0], boundary[1]];
                    break;
                case "up":
                    d = "right";
                    boundary = [boundary[0], len - boundary[1] - 2];
                    break;
            }

            direction = directionObj[d];
        }

        cur[0] += direction[0];
        cur[1] += direction[1];
        result.push(matrix[cur[0]][cur[1]]);

        idx++;
    }

    return result;
};

// @lc code=end
export { spiralOrder };
