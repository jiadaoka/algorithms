/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const len = nums.length;

    if (len === 1) {
        return [nums];
    }

    const map = new Map();
    const set = [];

    for (let i = 0; i < len; i++) {
        const c = nums[i];

        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 1);
            set.push(c);
        }
    }

    const setLen = set.length;
    const result = [];

    each([], new Map());

    return result;

    function each(storage, storageMap) {
        if (storage.length === len) {
            result.push(storage);
            return;
        }

        for (let i = 0; i < setLen; i++) {
            const cur = set[i];
            const count = storageMap.get(cur) ?? 0;

            if (count < map.get(cur)) {
                const m = new Map(storageMap);
                m.set(cur, count + 1);

                each([...storage, cur], m);
            }
        }
    }
};
// @lc code=end
export { permuteUnique };
