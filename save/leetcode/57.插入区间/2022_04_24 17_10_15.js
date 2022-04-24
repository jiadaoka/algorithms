/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let len = intervals.length;
    let isJoin = false;
    const result = [];

    for (let i = 0; i < len; i++) {
        const cur = intervals[i];
        const rIdx = result.length - 1;

        if (isJoin) {
            const end = result[rIdx];
            if (end[1] >= cur[0]) {
                if (end[1] <= cur[1]) {
                    end[1] = cur[1];
                    result.push(...intervals.slice(i + 1));
                    break;
                }
            } else {
                result.push(...intervals.slice(i));
                break;
            }
        } else {
            if (
                (newInterval[0] >= cur[0] && newInterval[0] <= cur[1]) ||
                (newInterval[1] >= cur[0] && newInterval[1] <= cur[1]) ||
                (newInterval[0] <= cur[0] && newInterval[1] >= cur[1])
            ) {
                const a = [null, null];
                let isEnd = false;

                if (newInterval[0] > cur[0]) {
                    a[0] = cur[0];
                } else {
                    a[0] = newInterval[0];
                }

                if (newInterval[1] < cur[1]) {
                    a[1] = cur[1];
                    isEnd = true;
                } else {
                    a[1] = newInterval[1];
                }

                result.push(a);
                isJoin = true;

                if (isEnd) {
                    result.push(...intervals.slice(i + 1));
                    break;
                }
            } else if (
                newInterval[1] < cur[0] &&
                (rIdx === -1 || newInterval[0] > result[rIdx][1])
            ) {
                isJoin = true;
                result.push(newInterval);
                result.push(...intervals.slice(i));
                break;
            } else {
                result.push(cur);
            }
        }
    }

    if (!isJoin) {
        result.push(newInterval);
    }

    return result;
};
// @lc code=end
export { insert };
