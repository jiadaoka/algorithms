/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const arr = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        arr[i] = [];
    }

    let result = "";

    if (numRows === 1) return s;

    const gEnd = numRows * 2 - 2;
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const gP = i % gEnd;
        let x = -1,
            y = -1;
        if (gP < numRows) {
            x = Math.floor(i / gEnd) * (numRows - 1);
            y = gP;
        } else {
            y = gEnd - gP;
            x = numRows - 1 - y + Math.floor(i / gEnd) * (numRows - 1);
        }

        arr[y][x] = s[i];
    }

    result = arr.reduce((acc, cur) => {
        const str = acc + cur.join("");
        return str;
    }, "");

    return result;
};
// @lc code=end

export { convert };
