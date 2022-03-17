/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    const len = candidates.length;
    candidates.sort((a, b) => a - b);

    if (target >= candidates[0]) {
        eachCandidates(0, 0, []);
    }

    return result;

    /**
     * 遍历candidates
     * @param {number} idx 当前索引
     * @param {number} accumulator 当前累计和
     * @param {number[]} join 已使用的值
     */
    function eachCandidates(idx, accumulator, join) {
        for (let i = idx; i < len; i++) {
            const num = candidates[i];
            const acc = accumulator + num;

            if (acc < target) {
                eachCandidates(i, acc, [...join, num]);
            } else if (acc === target) {
                result.push([...join, num]);
                return;
            } else {
                return;
            }
        }
    }
};

// @lc code=end
export { combinationSum };
