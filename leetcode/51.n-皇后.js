/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const result = [];

    const board = new Array(n).fill("".padEnd(n, "."));
    each(0, board, []);

    return result;

    /**
     *
     * @param {number} x
     * @param {string[]} board
     * @param {number[][]} used
     * @returns
     */
    function each(x, board, used) {
        if (x === n) {
            result.push(board);
            return;
        }
        const usedLen = used.length;
        const rowBan = new Set();
        for (let i = 0; i < usedLen; i++) {
            const u = used[i];
            const diff = x - u[0];
            rowBan.add(u[1]);

            const left = u[1] - diff;

            if (left >= 0) {
                rowBan.add(left);
            }

            const right = u[1] + diff;

            if (right < n) {
                rowBan.add(right);
            }
        }

        if (rowBan.size === n) {
            return;
        }

        for (let i = 0; i < n; i++) {
            if (!rowBan.has(i)) {
                const b = [...board];
                const u = [...used];
                b[x] = "Q".padStart(i + 1, ".").padEnd(n, ".");
                u.push([x, i]);

                each(x + 1, b, u);
            }
        }
    }
};

// @lc code=end
export { solveNQueens };
