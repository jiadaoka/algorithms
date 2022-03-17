/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let result = [];
    let len = candidates.length;
    const alone = [];
    const numMapping = new Map();

    for (let i = 0; i < len; i++) {
        const c = candidates[i];
        if (numMapping.has(c)) {
            numMapping.set(c, numMapping.get(c) + 1);
        } else {
            alone.push(c);
            numMapping.set(c, 1);
        }
    }

    len = alone.length;
    alone.sort((a, b) => a - b);

    if (target >= alone[0]) {
        each(0, 0, new Map());
    }

    return result;

    /**
     * 遍历
     * @param {number} idx 当前索引
     * @param {number} accumulator 当前累计和
     * @param {Map<number,number>} join 已使用的值
     */
    function each(idx, accumulator, join) {
        for (let i = idx; i < len; i++) {
            const num = alone[i];
            const acc = accumulator + num;
            const used = (join.get(num) ?? 0) + 1;
            const map = new Map(join);
            map.set(num, used);

            if (acc < target) {
                if (used < numMapping.get(num)) {
                    each(i, acc, map);
                } else {
                    each(i + 1, acc, map);
                }
            } else if (acc === target) {
                const r = [];
                map.forEach((value, key) => {
                    const arr = new Array(value).fill(key);
                    r.push(...arr);
                });

                result.push(r);
                return;
            } else {
                return;
            }
        }
    }
};
// @lc code=end
export { combinationSum2 };
