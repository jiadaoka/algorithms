/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    // 起点排序
    intervals.sort((a, b) => a[0] - b[0]);

    const result = [[...intervals[0]]];
    const len = intervals.length;

    for (let i = 1; i < len; i++) {
        const cur = [...intervals[i]];
        const rIdx = result.length - 1;

        const end = result[rIdx];

        if (cur[0] <= end[1]) {
            if (end[1] < cur[1]) {
                end[1] = cur[1];
            }
        } else {
            result.push(cur);
        }
    }

    return result;
};
// @lc code=end
export { merge };
