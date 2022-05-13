import { uniquePathsWithObstacles } from "../../leetcode/63.不同路径-ii.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(
            uniquePathsWithObstacles([
                [0, 0, 0],
                [0, 1, 0],
                [0, 0, 0],
            ])
        ).toBe(2);
    });

    test("用例2", () => {
        expect(
            uniquePathsWithObstacles([
                [0, 1],
                [0, 0],
            ])
        ).toBe(1);
    });

    test("用例3", () => {
        expect(
            uniquePathsWithObstacles([
                [0, 1],
                [0, 0],
            ])
        ).toBe(1);
    });
});

describe("自定义", () => {});
