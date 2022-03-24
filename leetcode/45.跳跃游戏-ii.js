/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const len = nums.length;

    if (len === 1) {
        return 0;
    }

    let idx = 0;
    let step = 0;

    while (idx < len) {
        const cur = nums[idx];

        if (idx + cur >= len - 1) {
            step++;
            break;
        } else {
            let lastMax = 0;
            let maxIdx = 0;

            for (let i = 1; i <= cur; i++) {
                const next = nums[idx + i];

                if (next + i >= lastMax) {
                    lastMax = next + i;
                    maxIdx = idx + i;
                }
            }

            idx = maxIdx;
            step++;
        }
    }

    return step;
};
// @lc code=end
export { jump };
