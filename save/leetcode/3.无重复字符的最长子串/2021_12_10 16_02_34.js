/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    const len = s.length;
    let result = 0;

    for (let i = 0; i < len; i++) {
        // start === i
        const startLetter = s[i];
        let end = s.indexOf(startLetter, i + 1);
        if (end === -1) {
            end = len;
        }

        let next = 1; // 真实位置 i + next
        while (end > next + i) {
            const _str = s.slice(i, end);
            const nextLetter = _str[next];
            const _end = _str.indexOf(nextLetter, next + 1);
            if (_end !== -1) {
                end = i + _end;
            }

            next++;
        }

        const l = end - i;
        if (result < l) {
            result = l;
        }

        if (end === len) {
            break;
        }
    }

    return result;
};
// @lc code=end
export { lengthOfLongestSubstring };
