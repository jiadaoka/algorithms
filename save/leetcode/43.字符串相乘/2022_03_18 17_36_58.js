/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 */
// TODO: 添加非数值字符串判断放回NaN

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const len1 = num1.length;
    const len2 = num2.length;

    let product = "";

    if ((len1 === 1 && num1 === "0") || (len2 === 1 && num2 === "0")) {
        return "0";
    }

    for (let i = len1 - 1; i >= 0; i--) {
        let acc = "";
        const n1 = +num1[i];

        if (n1 === 0) {
            acc = "0";
        } else if (n1 === 1) {
            acc = num2.padEnd(len2 + len1 - 1 - i, "0");
        } else {
            for (let j = len2 - 1; j >= 0; j--) {
                const n2 = +num2[j];
                let p = "";
                if (n2 === 0) {
                    p = "0";
                } else {
                    p = n1 * n2 + "".padEnd(len2 + len1 - 2 - j - i, "0");
                }

                acc = productSum(acc, p);
            }
        }

        product = productSum(product, acc);
    }

    return product;
};

/**
 * 大数相加
 * @param { string } num1
 * @param { string } num2
 * @returns { string }
 */
function productSum(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let result = "";

    if (len1 < len2) {
        [num1, num2] = [num2, num1];
        [len1, len2] = [len2, len1];
    }

    for (let i = 0; i < len1; i++) {
        const idx1 = len1 - 1 - i;
        const idx2 = len2 - 1 - i;
        const n1 = +num1[idx1];

        if (idx2 < 0) {
            if (result.length > i) {
                result = n1 + +result[0] + result.substring(1);
            } else {
                result = num1.substring(0, idx1 + 1) + result;
                break;
            }
        } else {
            const n2 = +num2[idx2];

            if (result.length > i) {
                result = n1 + n2 + +result[0] + result.substring(1);
            } else {
                result = n1 + n2 + result;
            }
        }
    }

    return result;
}
// @lc code=end
export { productSum, multiply };
