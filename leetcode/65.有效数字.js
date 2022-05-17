/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * 0-9,e,.,+-
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let len = s.length;

    // 用正则我为什么不直接写整段正则匹配，写整段正则我为什么不干脆把输入值转数值
    let arr = [];
    let isE = false;
    if (s.includes("e")) {
        if (s[0] === "e" || s[len - 1] === "e") {
            return false;
        }
        isE = true;
        arr = s.split("e");
    } else if (s.includes("E")) {
        if (s[0] === "E" || s[len - 1] === "E") {
            return false;
        }
        isE = true;
        arr = s.split("E");
    }

    if (!isE) {
        arr.push(s);
    }

    if (arr.length > 2) {
        return false;
    }

    // 前部分，可以为小数
    let str = arr[0];
    len = str.length;
    let idx = 0;

    if (str[0] === "+" || str[0] === "-") {
        if (len === 1) {
            return false;
        } else {
            idx++;
        }
    }

    let hasPoint = false;
    let hasNum = false;

    for (let i = idx; i < len; i++) {
        const c = str[i];

        if (nums.includes(c)) {
            hasNum = true;
        } else {
            if (c === "." && !hasPoint) {
                hasPoint = true;
            } else {
                return false;
            }
        }
    }

    if (!hasNum) return false;

    // 后部分判断，不可为小数
    if (isE) {
        str = arr[1];
        len = str.length;
        idx = 0;

        if (str[0] === "+" || str[0] === "-") {
            if (len === 1) {
                return false;
            } else {
                idx++;
            }
        }

        for (let i = idx; i < len; i++) {
            const c = str[i];

            if (!nums.includes(c)) {
                return false;
            }
        }
    }

    return true;
};
// @lc code=end
export { isNumber };
