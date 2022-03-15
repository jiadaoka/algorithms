/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let row = null; // 单行的值
    const columns = new Array(9); // 所有列
    const grids = new Array(9); // 所有九格

    for (let i = 0; i < 9; i++) {
        columns[i] = new Set();
        grids[i] = new Set();
    }

    for (let i = 0; i < 9; i++) {
        const r = board[i]; // 当前行

        row = new Set();

        for (let j = 0; j < 9; j++) {
            const c = r[j]; // 当前值
            if (c !== ".") {
                // 当前行是否重复
                if (row.has(c)) {
                    return false;
                } else {
                    row.add(c);
                }

                // 当前列是否重复
                if (columns[j].has(c)) {
                    return false;
                } else {
                    columns[j].add(c);
                }

                // 判断九宫格是否重复
                const num = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (grids[num].has(c)) {
                    return false;
                } else {
                    grids[num].add(c);
                }
            }
        }
    }

    return true;
};
// @lc code=end
export { isValidSudoku };
