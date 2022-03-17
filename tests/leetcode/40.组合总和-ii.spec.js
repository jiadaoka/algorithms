import { combinationSum2 } from "../../leetcode/40.组合总和-ii.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        const result = expect.arrayContaining([[1, 2, 2], [5]]);

        const answer = combinationSum2([2, 5, 2, 1, 2], 5);

        expect(answer).toStrictEqual(result);
        expect(answer).toHaveLength(2);
    });

    test("用例2", () => {
        const result = expect.arrayContaining([
            [1, 1, 6],
            [1, 2, 5],
            [1, 7],
            [2, 6],
        ]);

        const answer = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);

        expect(answer).toStrictEqual(result);
        expect(answer).toHaveLength(4);
    });
});

describe("自定义", () => {});
