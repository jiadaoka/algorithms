import { setZeroes } from "../../leetcode/73.矩阵置零.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        const input = [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
        ];
        setZeroes(input);

        expect(input).toStrictEqual([
            [1, 0, 1],
            [0, 0, 0],
            [1, 0, 1],
        ]);
    });
});

describe("自定义", () => {});
