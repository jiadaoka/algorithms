import { isNumber } from "../../leetcode/65.有效数字.js";

describe("leetCode测试用例", () => {
    const trueList = [
        "0",
        ".1",
        "-.1",
        "1.",
        "005047e+6",
        "46.e3",
        ".2e81",
        "2",
        "0089",
        "-0.1",
        "+3.14",
        "4.",
        "-.9",
        "2e10",
        "-90E3",
        "3e+7",
        "+6e-1",
        "53.5e93",
        "-123.456e789",
    ];
    const falseList = [
        "e",
        ".",
        "+e",
        "+3. e04116",
        "abc",
        "1a",
        "1e",
        "e3",
        "99e2.5",
        "--6",
        "-+3",
        "95a54e53",
    ];

    let len = trueList.length;

    for (let i = 0; i < len; i++) {
        const e = trueList[i];
        test("true用例" + (i + 1) + "：" + e, () => {
            expect(isNumber(e)).toBe(true);
        });
    }

    len = falseList.length;

    for (let i = 0; i < len; i++) {
        const e = falseList[i];
        test("false用例" + (i + 1) + "：" + e, () => {
            expect(isNumber(e)).toBe(false);
        });
    }
});

describe("自定义", () => {});
