/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    const len = words.length;
    const wordLens = words.map((w) => w.length);

    let idx = 0;
    const result = [];

    while (idx < len) {
        let t = wordLens[idx];
        let right = idx + 1;
        let next = wordLens[right];
        let curMax = maxWidth;

        while (right < len && t + next < curMax) {
            t += next;
            right++;
            curMax--;

            next = wordLens[right];
        }

        let n = right - idx - 1;
        let space = maxWidth - t;
        let str = "";

        if (right < len) {
            for (let i = idx; i < right; i++) {
                let d = n !== 0 ? Math.ceil(space / n) : space;
                str += words[i] + "".padEnd(d);
                space -= d;
                n--;
            }
        } else {
            for (let i = idx; i < right; i++) {
                let d = i < right - 1 ? 1 : space;
                str += words[i] + "".padEnd(d);
                space -= d;
                n--;
            }
        }

        result.push(str);
        idx = right;
    }

    return result;
};
// @lc code=end
export { fullJustify };
