/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const len = strs.length;
    let result = strs[0];

    for (let i = 1; i < len; i++) {
        const cur = strs[i];
        let cutting = 0;
        let lastCutting = 0;
        if (cur.length > result.length) {
            cutting = result.length;
        } else {
            cutting = cur.length;
        }

        while (true) {
            if (cur.slice(0, cutting) === result.slice(0, cutting)) {
                if (lastCutting === 0) {
                    lastCutting = cutting;
                    break;
                } else {
                    if (lastCutting === cutting) {
                        break;
                    }
                    [lastCutting, cutting] = [
                        cutting,
                        Math.ceil((lastCutting - cutting) / 2) + cutting,
                    ];
                }
            } else {
                if (cutting - lastCutting === 1) {
                    break;
                } else {
                    if (cutting === 1) {
                        lastCutting = 0;
                        break;
                    }
                    [lastCutting, cutting] = [cutting, Math.ceil(cutting / 2)];
                }
            }
        }

        if (lastCutting === 0) {
            result = "";
            break;
        } else {
            result = result.slice(0, lastCutting);
        }
    }

    return result;
};
// @lc code=end
export { longestCommonPrefix };
