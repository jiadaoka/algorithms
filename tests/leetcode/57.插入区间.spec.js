import { insert } from "../../leetcode/57.插入区间.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(
            insert(
                [
                    [1, 3],
                    [6, 9],
                ],
                [2, 5]
            )
        ).toStrictEqual([
            [1, 5],
            [6, 9],
        ]);
    });

    test("用例2", () => {
        expect(
            insert(
                [
                    [1, 2],
                    [3, 5],
                    [6, 7],
                    [8, 10],
                    [12, 16],
                ],
                [4, 8]
            )
        ).toStrictEqual([
            [1, 2],
            [3, 10],
            [12, 16],
        ]);
    });

    test("用例3", () => {
        expect(insert([], [5, 7])).toStrictEqual([[5, 7]]);
    });

    test("用例4", () => {
        expect(insert([[1, 5]], [2, 3])).toStrictEqual([[1, 5]]);
    });

    test("用例5", () => {
        expect(insert([[1, 5]], [2, 7])).toStrictEqual([[1, 7]]);
    });

    test("用例6", () => {
        expect(insert([[1, 5]], [0, 0])).toStrictEqual([
            [0, 0],
            [1, 5],
        ]);
    });

    test("用例7", () => {
        expect(insert([[1, 5]], [0, 5])).toStrictEqual([[0, 5]]);
    });

    test("用例8", () => {
        expect(insert([[1, 5]], [0, 6])).toStrictEqual([[0, 6]]);
    });
});

describe("自定义", () => {});
