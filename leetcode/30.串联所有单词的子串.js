/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    const len = s.length;
    const wordLen = words[0].length;
    const wordsLen = words.length;

    if (len < wordsLen * wordLen) {
        return [];
    }

    const wordMap = new Map();
    for (let i = 0; i < wordsLen; i++) {
        const w = words[i];
        wordMap.set(w, (wordMap.get(w) ?? 0) + 1);
    }

    const result = [];
    const forLen = len - wordLen + 1; // 左指针最右点
    let left = 0; // 匹配字符串的开始位置

    while (left < forLen) {
        let right = left; // 匹配字符串的结束位置
        let record = new Map(); // 当前匹配过程中单词匹配次数
        let size = 0; // 当前匹配过程中匹配总次数

        while (right < len) {
            const subStr = s.substring(right, right + wordLen);
            const r = record.get(subStr) ?? 0;

            if (wordMap.has(subStr) && wordMap.get(subStr) > r) {
                record.set(subStr, r + 1);
                size++;
                right += wordLen;
            } else {
                break;
            }

            if (size === wordsLen) {
                result.push(left);
                break;
            }
        }

        left++;
    }

    return result;
};

// @lc code=end
export { findSubstring };
