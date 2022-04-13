import { totalNQueens } from "../../leetcode/52.n皇后-ii.js";

describe("leetCode测试用例", () => {
    const expectedAnswerList = [0, 1, 0, 0, 2, 10, 4, 40, 92, 352];
    const len = expectedAnswerList.length;
    for (let i = 0; i < len; i++) {
        test("用例" + (i + 1) + "：" + i + "=>" + expectedAnswerList[i], () => {
            expect(totalNQueens(i)).toBe(expectedAnswerList[i]);
        });
    }
});

describe("自定义", () => {});
