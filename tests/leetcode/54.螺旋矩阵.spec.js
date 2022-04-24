import { spiralOrder } from "../../leetcode/54.螺旋矩阵.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(
            spiralOrder([
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ])
        ).toStrictEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    test("用例2", () => {
        expect(
            spiralOrder([
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
            ])
        ).toStrictEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    });
});

describe("自定义", () => {
    test("自定义1", () => {
        expect(spiralOrder([[1]])).toStrictEqual([1]);
    });

    test("自定义2", () => {
        expect(spiralOrder([[1, 2, 3, 4, 5, 6]])).toStrictEqual([
            1, 2, 3, 4, 5, 6,
        ]);
    });

    test("自定义3", () => {
        expect(
            spiralOrder([
                [1, 2, 3, 4, 5, 6],
                [7, 8, 9, 10, 11, 12],
            ])
        ).toStrictEqual([1, 2, 3, 4, 5, 6, 12, 11, 10, 9, 8, 7]);
    });

    test("自定义4", () => {
        expect(
            spiralOrder([
                [1, 2, 3, 4, 5],
                [6, 7, 8, 9, 10],
                [11, 12, 13, 14, 15],
                [16, 17, 18, 19, 20],
                [21, 22, 23, 24, 25],
                [26, 27, 28, 29, 30],
            ])
        ).toStrictEqual([
            1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 29, 28, 27, 26, 21, 16, 11, 6, 7,
            8, 9, 14, 19, 24, 23, 22, 17, 12, 13, 18,
        ]);
    });
});
