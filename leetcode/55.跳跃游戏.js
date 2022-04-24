/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    const len = nums.length - 1;
    if (len === 0) {
        return true;
    }

    let end = 0; // 上一步位置
    // 从后往前
    // i 距离最后的距离
    for (let i = 1; i <= len; i++) {
        const cur = nums[len - i];

        if (cur >= i - end) {
            end = i;
        }
    }

    return end === len;
};

// @lc code=end
export { canJump };
