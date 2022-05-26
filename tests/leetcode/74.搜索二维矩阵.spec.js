import { searchMatrix } from "../../leetcode/74.搜索二维矩阵.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(
            searchMatrix(
                [
                    [1, 3, 5, 7],
                    [10, 11, 16, 20],
                    [23, 30, 34, 60],
                ],
                3
            )
        ).toBe(true);
    });

    test("用例2", () => {
        expect(
            searchMatrix(
                [
                    [1, 3, 5, 7],
                    [10, 11, 16, 20],
                    [23, 30, 34, 60],
                ],
                13
            )
        ).toBe(false);
    });

    test("用例3", () => {
        expect(searchMatrix([[1], [3]], 1)).toBe(true);
    });

    test("用例3", () => {
        expect(searchMatrix([[1, 3, 5]], 1)).toBe(true);
    });

    test("用例4", () => {
        expect(searchMatrix([[1, 3, 5]], 2)).toBe(false);
    });

    test("用例5", () => {
        expect(searchMatrix([[1], [3], [5]], 3)).toBe(true);
    });

    test("用例6", () => {
        expect(
            searchMatrix(
                [
                    [1, 3, 5, 7],
                    [10, 11, 16, 20],
                    [23, 30, 34, 50],
                ],
                5
            )
        ).toBe(true);
    });
});

describe("自定义", () => {
    test("用例1", () => {
        expect(
            searchMatrix(
                [
                    [1, 3, 5, 7, 9],
                    [10, 11, 16, 18, 20],
                    [23, 25, 26, 29, 30],
                    [31, 32, 33, 34, 35],
                    [42, 45, 47, 48, 49],
                ],
                26
            )
        ).toBe(true);
    });
});
