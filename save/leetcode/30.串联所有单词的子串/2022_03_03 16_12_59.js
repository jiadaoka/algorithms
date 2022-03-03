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

    let result = [];
    let record = new Map();
    let size = 0;
    let start = -1;
    let idx = 0;
    let isReset = false;

    while (idx <= len) {
        const subStr = s.substring(idx, idx + wordLen);

        if (wordMap.has(subStr)) {
            const r = record.get(subStr) ?? 0;
            if (wordMap.get(subStr) > r) {
                if (start === -1) start = idx;
                record.set(subStr, r + 1);
                idx = idx + wordLen - 1;
                size += 1;

                if (size === wordsLen) {
                    result.push(start);
                    idx = start;
                    isReset = true;
                }
            } else {
                idx = start;
                isReset = true;
            }
        } else {
            if (start !== -1) idx = start;
            isReset = true;
        }

        if (isReset) {
            record = new Map();
            size = 0;
            isReset = false;
            start = -1;
        }

        idx++;
    }

    return result;
};

// @lc code=end
export { findSubstring };
