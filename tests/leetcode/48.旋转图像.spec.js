import { rotate } from "../../leetcode/48.旋转图像.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        const output = rotate([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ]);
        const expectedAnswer = [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3],
        ];

        expect(output).toStrictEqual(expectedAnswer);
    });

    test("用例2", () => {
        const output = rotate([
            [5, 1, 9, 11],
            [2, 4, 8, 10],
            [13, 3, 6, 7],
            [15, 14, 12, 16],
        ]);
        const expectedAnswer = [
            [15, 13, 2, 5],
            [14, 3, 4, 1],
            [12, 6, 8, 9],
            [16, 7, 10, 11],
        ];

        expect(output).toStrictEqual(expectedAnswer);
    });
});

describe("自定义", () => {});
