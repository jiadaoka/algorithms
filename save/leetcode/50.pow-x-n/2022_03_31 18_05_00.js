/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) {
        n = -n;
        x = 1 / x;
    }

    let result = 1;

    while (n > 0) {
        let curNum = x;
        let useN = 1;

        while (n >= useN + useN) {
            curNum = curNum * curNum;
            useN += useN;
        }

        result *= curNum;
        n -= useN;
    }

    return result;
};
// @lc code=end
export { myPow };
