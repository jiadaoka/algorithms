/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    const factorial = [1];
    const values = ["1"];
    for (let i = 2; i <= n; i++) {
        values.push(i + "");
        factorial.push(factorial[i - 2] * (i - 1));
    }

    let result = "";

    for (let i = n; i > 0; i--) {
        let idx = k / factorial[i - 1];
        if (Number.isInteger(idx)) {
            idx--;
            k = factorial[i - 1];
        } else {
            idx = Math.floor(idx);
            k = k % factorial[i - 1];
        }

        for (let j = 0; j <= n; j++) {
            if (j < idx && !values[j]) {
                idx++;
            } else if (j >= idx && values[j]) {
                idx = j;
                break;
            }
        }

        result += values[idx];
        values[idx] = null;
    }

    return result;
};
// @lc code=end
export { getPermutation };
