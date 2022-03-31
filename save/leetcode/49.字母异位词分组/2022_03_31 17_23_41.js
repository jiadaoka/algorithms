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
    const numMap = [];

    for (let i = 0; i < len; i++) {
        const str = strs[i];
        const l = str.length;
        const nL = numMap.length;

        let m = new Map();

        for (let j = 0; j < l; j++) {
            const s = str[j];
            const count = m.get(s) ?? 0;
            m.set(s, count + 1);
        }

        let bool = false;
        for (let j = 0; j < nL; j++) {
            const cM = numMap[j];
            if (isEqualMap(m, cM)) {
                m = cM;
                bool = true;
                break;
            }
        }

        if (bool) {
            const a = strMap.get(m);
            a.push(str);
            strMap.set(m, a);
        } else {
            numMap.push(m);
            strMap.set(m, [str]);
        }
    }

    const nL = numMap.length;
    const result = [];

    for (let i = 0; i < nL; i++) {
        const m = numMap[i];

        result.push(strMap.get(m));
    }

    return result;
};

/**
 * 简易比较两个Map是否相同
 * @param {Map} map1
 * @param {Map} map2
 * @return {boolean}
 *
 * TODO:方法可以优化提取成两个方法，一个只比较结构，一个全比较
 */
function isEqualMap(map1, map2) {
    if (map1 === map2) {
        return true;
    }

    if (map1.size !== map2.size) {
        return false;
    }

    for (let [key, value] of map1) {
        if (map2.has(key)) {
            if (value !== map2.get(key)) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}
// @lc code=end
export { groupAnagrams, isEqualMap };
