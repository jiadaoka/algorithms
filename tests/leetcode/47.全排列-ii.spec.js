import { permuteUnique } from "../../leetcode/47.全排列-ii.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        const output = permuteUnique([1, 1, 2]);
        const expectedAnswer = expect.arrayContaining([
            [1, 1, 2],
            [1, 2, 1],
            [2, 1, 1],
        ]);

        expect(output).toStrictEqual(expectedAnswer);
        expect(output).toHaveLength(3);
    });

    test("用例2", () => {
        const output = permuteUnique([1, 2, 3]);
        const expectedAnswer = expect.arrayContaining([
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ]);

        expect(output).toStrictEqual(expectedAnswer);
        expect(output).toHaveLength(6);
    });
});

describe("自定义", () => {
    test("用例1", () => {
        const output = permuteUnique([1]);
        const expectedAnswer = expect.arrayContaining([[1]]);

        expect(output).toStrictEqual(expectedAnswer);
        expect(output).toHaveLength(1);
    });
});
