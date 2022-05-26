/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const arr = path.split("/");
    const len = arr.length;

    let idx = 0;
    const pathArr = new Array(len);
    for (let i = 1; i < len; i++) {
        const d = arr[i];

        switch (d) {
            case "..":
                idx = idx > 0 ? idx - 1 : 0;
                break;
            case ".":
            case "":
                break;
            default:
                pathArr[idx] = d;
                idx++;
                break;
        }
    }

    let result = "/";

    for (let i = 0; i < idx; i++) {
        let str = i < idx - 1 ? pathArr[i] + "/" : pathArr[i];
        result += str;
    }

    return result;
};
// @lc code=end
export { simplifyPath };
