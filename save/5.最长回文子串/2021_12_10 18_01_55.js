/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const len = s.length;
    let result = s[0];
    for (let i = 0; i < len; i++) {
        const startLetter = s[i];
        let end = len;

        let _str = "";

        while (true) {
            end = s.lastIndexOf(startLetter, end - 1);
            if (end <= i) {
                break;
            }

            let flag = true;

            _str = s.slice(i, end + 1);
            const _l = _str.length;
            let __l = 0; // _str长度的一半
            if ((_l & 1) === 0) {
                __l = _l / 2;
            } else {
                __l = Math.floor(_l / 2);
            }

            for (let i2 = 0; i2 < __l; i2++) {
                if (_str[i2] !== _str[_l - 1 - i2]) {
                    _str = "";
                    flag = false;
                    continue;
                }
            }

            if (flag) {
                break;
            }
        }

        if (result.length < _str.length) {
            result = _str;
        }
    }

    return result;
};
// @lc code=end
export { longestPalindrome };
