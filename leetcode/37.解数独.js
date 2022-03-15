/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    fillSudoku(board, 0, 0);

    return board;
};

/**
 * 填入值
 * @param {character[][]} board
 * @param {number} x
 * @param {number} y
 * @returns
 */
function fillSudoku(board, x, y) {
    if (x === 9 && y === 8) {
        return true; // 结束
    } else if (x === 9) {
        x = 0;
        y = y + 1;
    }

    const c = board[y][x];
    let noFixed = false;

    if (Number.isNaN(+c)) {
        noFixed = true;
        const optionalValue = getOptionalValue(board, x, y);
        const len = optionalValue.length;
        for (let i = 0; i < len; i++) {
            board[y][x] = optionalValue[i];

            const bool = fillSudoku(board, x + 1, y);

            if (bool) {
                return true;
            }
        }
    } else {
        const bool = fillSudoku(board, x + 1, y);

        if (bool) {
            return true;
        }
    }

    if (noFixed) {
        board[y][x] = ".";
    }

    return false;
}

/**
 * 获取剩余可以选择的数值
 * @param {character[][]} board
 * @param {number} x
 * @param {number} y
 * @returns
 */
function getOptionalValue(board, x, y) {
    const values = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);

    const gridY0 = Math.floor(y / 3) * 3;
    const gridX0 = Math.floor(x / 3) * 3;

    for (let i = 0; i < 9; i++) {
        const gridX = gridX0 + (i % 3);
        const gridY = gridY0 + Math.floor(i / 3);

        const r = board[y][i];
        const c = board[i][x];
        const g = board[gridY][gridX];
        if (!Number.isNaN(+r)) {
            values.delete(r);
        }

        if (!Number.isNaN(+c)) {
            values.delete(c);
        }

        if (!Number.isNaN(+g)) {
            values.delete(g);
        }

        if (values.size === 0) {
            break;
        }
    }

    return [...values];
}
// @lc code=end
export { solveSudoku };
