/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const yLen = board.length;
    const xLen = board[0].length;
    const wLen = word.length;

    if (xLen * yLen < wLen) return false;

    const usedBoard = new Array(yLen);
    for (let i = 0; i < yLen; i++) {
        usedBoard[i] = new Array(xLen).fill(0);
    }

    let flag = false;
    for (let y = 0; y < yLen; y++) {
        for (let x = 0; x < xLen; x++) {
            flag = backtracking(x, y, 0);
            if (flag) break;
        }
        if (flag) break;
    }

    return flag;

    function backtracking(x, y, wordIdx) {
        if (board[y][x] === word[wordIdx]) {
            usedBoard[y][x] = 1;

            if (wordIdx === wLen - 1) {
                return true;
            }

            const next = [];

            if (x > 0 && usedBoard[y][x - 1] !== 1) {
                next.push([x - 1, y]);
            }

            if (x < xLen - 1 && usedBoard[y][x + 1] !== 1) {
                next.push([x + 1, y]);
            }

            if (y > 0 && usedBoard[y - 1][x] !== 1) {
                next.push([x, y - 1]);
            }

            if (y < yLen - 1 && usedBoard[y + 1][x] !== 1) {
                next.push([x, y + 1]);
            }

            const l = next.length;

            let flag = false;
            for (let i = 0; i < l; i++) {
                flag = backtracking(next[i][0], next[i][1], wordIdx + 1);
                if (flag) break;
            }

            if (!flag) {
                usedBoard[y][x] = 0;
            }

            return flag;
        } else {
            return false;
        }
    }
};
// @lc code=end
export { exist };
