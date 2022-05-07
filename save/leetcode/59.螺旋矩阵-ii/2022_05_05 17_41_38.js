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
    const total = n * n;
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = new Array(n);
    }

    let d = "r";
    const next = [0, 0];
    let boundary = [0, n - 1]; // 边界

    for (let i = 1; i <= total; i++) {
        result[next[0]][next[1]] = i;
        switch (d) {
            case "r": {
                if (boundary[0] === next[0] && boundary[1] === next[1]) {
                    d = "b"; // bottom
                    next[0]++;
                    boundary[0] = n - boundary[0] - 1;
                } else {
                    next[1]++;
                }
                break;
            }
            case "b": {
                if (boundary[0] === next[0] && boundary[1] === next[1]) {
                    d = "l";
                    next[1]--;
                    boundary[1] = n - boundary[1] - 1;
                } else {
                    next[0]++;
                }
                break;
            }
            case "l": {
                if (boundary[0] === next[0] && boundary[1] === next[1]) {
                    d = "u";
                    next[0]--;
                    boundary[0] = n - boundary[0];
                } else {
                    next[1]--;
                }
                break;
            }
            case "u": {
                if (boundary[0] === next[0] && boundary[1] === next[1]) {
                    d = "r";
                    next[1]++;
                    boundary[1] = n - boundary[1] - 2;
                } else {
                    next[0]--;
                }
                break;
            }
        }
    }

    return result;
};
// @lc code=end
