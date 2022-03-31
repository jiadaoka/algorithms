/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const len = strs.length;
    const strMap = new Map();

    for (let i = 0; i < len; i++) {
        const str = strs[i];

        const key = str.split("").sort().join();

        if (strMap.has(key)) {
            const a = strMap.get(key);
            a.push(str);
            strMap.set(key, a);
        } else {
            strMap.set(key, [str]);
        }
    }

    const result = [];
    for (let [key, value] of strMap) {
        result.push(value);
    }

    return result;
};

// @lc code=end
export { groupAnagrams };
