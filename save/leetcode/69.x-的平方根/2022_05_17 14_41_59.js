/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) return x;
    let result = 0;

    let left = 0;
    let right = x;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        const s = mid * mid;

        if (s < x) {
            left = mid + 1;
            result = mid;
        } else if (s > x) {
            right = mid;
        } else {
            result = mid;
            break;
        }
    }

    return result;
};
// @lc code=end
export { mySqrt };
