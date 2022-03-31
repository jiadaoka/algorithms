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

    let second = -1;
    let secondIdx = -1;
    let lastEnd = 0;

    while (idx < len) {
        const cur = nums[idx];

        if (idx + cur >= len - 1) {
            step++;
            break;
        } else {
            let lastMax = 0;
            let maxIdx = 0;
            let i = 1;

            if (secondIdx !== -1) {
                lastMax = second;
                maxIdx = secondIdx;
                i = lastEnd - idx + 1;
            }

            for (; i <= cur; i++) {
                const next = nums[idx + i];

                if (next + i >= lastMax) {
                    lastMax = next + i;
                    maxIdx = idx + i;
                    second = -1;
                    secondIdx = -1;
                } else if (next >= second) {
                    second = next;
                    secondIdx = idx + i;
                }
            }

            lastEnd = idx + cur;
            idx = maxIdx;
            step++;
        }
    }

    return step;
};
// @lc code=end
export { jump };
