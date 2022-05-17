/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let aLen = a.length;
    let bLen = b.length;

    if (bLen > aLen) {
        [a, b] = [b, a];
        [aLen, bLen] = [bLen, aLen];
    }

    let p = 0;
    let str = "";
    let i = 0;
    for (; i < aLen; i++) {
        const aN = +a[aLen - 1 - i];
        let bN = 0;
        if (bLen - 1 - i >= 0) {
            bN = +b[bLen - 1 - i];
        }

        switch (aN + bN + p) {
            case 3:
                str = "1" + str;
                p = 1;
                break;
            case 2:
                str = "0" + str;
                p = 1;
                break;
            case 1:
                str = "1" + str;
                p = 0;
                break;
            default:
                str = "0" + str;
                p = 0;
                break;
        }

        if (bLen - 1 - i < 0 && !p) {
            break;
        }
    }

    if (p) {
        str = "1" + str;
    }

    if (i !== aLen) {
        str = a.substring(0, aLen - i - 1) + str;
    }

    return str;
};
// @lc code=end
export { addBinary };
