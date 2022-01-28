/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const mapping = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"],
    };

    const result = [];
    const backtracking = (idx, accumulator) => {
        if (idx >= digits.length) {
            result.push(accumulator);
            return;
        }

        const cur = mapping[digits[idx]];
        const len = cur.length;

        for (let i = 0; i < len; i++) {
            backtracking(idx + 1, accumulator + cur[i]);
        }
    };

    if (digits.length > 0) {
        backtracking(0, "");
    }

    return result;
};
// @lc code=end
