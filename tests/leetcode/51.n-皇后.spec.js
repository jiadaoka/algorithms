import { solveNQueens } from "../../leetcode/51.n-皇后.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        const expectedAnswer = expect.arrayContaining([
            [".Q..", "...Q", "Q...", "..Q."],
            ["..Q.", "Q...", "...Q", ".Q.."],
        ]);

        const output = solveNQueens(4);

        expect(output).toStrictEqual(expectedAnswer);
        expect(output).toHaveLength(2);
    });
});

describe("自定义", () => {});
