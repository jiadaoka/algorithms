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

    each(0, new Set(), new Set(), new Set());

    return result;

    /**
     *
     * @param {number} x
     * @param {Set<number>} col
     * @param {Set<number>} left
     * @param {Set<number>} right
     * @returns
     */
    function each(x, col, left, right) {
        const usable = [];
        for (let i = 0; i < n; i++) {
            if (!col.has(i) && !left.has(x + i) && !right.has(x - i)) {
                usable.push(i);
            }
        }

        const len = usable.length;

        if (len === 0) {
            return;
        } else if (x === n - 1) {
            result += len;
            return;
        }

        for (let i = 0; i < len; i++) {
            const c = new Set(col);
            const l = new Set(left);
            const r = new Set(right);

            c.add(usable[i]);
            l.add(x + usable[i]);
            r.add(x - usable[i]);
            each(x + 1, c, l, r);
        }
    }
};
// @lc code=end
export { totalNQueens };
