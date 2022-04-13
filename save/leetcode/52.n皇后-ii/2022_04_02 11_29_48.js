/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let result = 0;

    each(0, []);

    return result;

    /**
     *
     * @param {number} x
     * @param {number[][]} used
     * @returns
     */
    function each(x, used) {
        if (x === n) {
            result++;
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
                const u = [...used];
                u.push([x, i]);

                each(x + 1, u);
            }
        }
    }
};
// @lc code=end
