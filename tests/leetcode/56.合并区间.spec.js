import { merge } from "../../leetcode/56.合并区间.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(
            merge([
                [1, 3],
                [2, 6],
                [8, 10],
                [15, 18],
            ])
        ).toStrictEqual([
            [1, 6],
            [8, 10],
            [15, 18],
        ]);
    });

    test("用例2", () => {
        expect(
            merge([
                [1, 4],
                [4, 5],
            ])
        ).toStrictEqual([[1, 5]]);
    });
});

describe("自定义", () => {
    test("自定义1", () => {
        expect(
            merge([
                [1, 4],
                [4, 5],
                [4, 10],
            ])
        ).toStrictEqual([[1, 10]]);
    });

    test("自定义2", () => {
        expect(merge([[1, 4]])).toStrictEqual([[1, 4]]);
    });

    test("自定义3", () => {
        expect(
            merge([
                [1, 4],
                [2, 3],
            ])
        ).toStrictEqual([[1, 4]]);
    });

    test("自定义4", () => {
        expect(
            merge([
                [1, 4],
                [5, 6],
            ])
        ).toStrictEqual([
            [1, 4],
            [5, 6],
        ]);
    });
});
