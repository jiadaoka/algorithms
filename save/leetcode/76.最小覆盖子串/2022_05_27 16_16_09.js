/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const tLen = t.length;
    const sLen = s.length;

    if (tLen > sLen) return "";

    const tMap = new Map();

    for (let i = 0; i < tLen; i++) {
        const c = t[i];
        const n = tMap.get(c) ?? 0;

        tMap.set(c, n + 1);
    }

    const position = [];
    let pLeft = 0;
    let tSize = tMap.size;
    let result = "";

    for (let i = 0; i < sLen; i++) {
        const c = s[i];

        if (tMap.has(c)) {
            const n = tMap.get(c);

            tMap.set(c, n - 1);
            position.push(i);

            if (n === 1) {
                tSize--;
            }
        }

        while (tSize === 0) {
            if (i - position[pLeft] + 1 < result.length || result === "") {
                result = s.slice(position[pLeft], i + 1);
            }

            const c = s[position[pLeft]];
            pLeft++;

            const n = tMap.get(c) + 1;
            tMap.set(c, n);

            if (n > 0) {
                tSize++;
            }
        }
    }

    return result;
};
// @lc code=end
export { minWindow };
