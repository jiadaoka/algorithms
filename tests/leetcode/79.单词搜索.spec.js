import { exist } from "../../leetcode/79.单词搜索.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(
            exist(
                [
                    ["A", "B", "C", "E"],
                    ["S", "F", "C", "S"],
                    ["A", "D", "E", "E"],
                ],
                "ABCCED"
            )
        ).toBe(true);
    });

    test("用例2", () => {
        expect(
            exist(
                [
                    ["A", "A", "A", "A", "A", "A"],
                    ["A", "A", "A", "A", "A", "A"],
                    ["A", "A", "A", "A", "A", "A"],
                    ["A", "A", "A", "A", "A", "A"],
                    ["A", "A", "A", "A", "A", "A"],
                    ["A", "A", "A", "A", "A", "A"],
                ],
                "AAAAAAAAAAAAAAB"
            )
        ).toBe(false);
    });
});

describe("自定义", () => {});
