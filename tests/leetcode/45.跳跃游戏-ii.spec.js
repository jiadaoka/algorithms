import { jump } from "../../leetcode/45.跳跃游戏-ii.js";

describe("leetCode测试用例", () => {
    test("用例1", () => {
        expect(jump([2, 3, 1, 1, 4])).toBe(2);
    });

    test("用例2", () => {
        expect(jump([2, 3, 0, 1, 4])).toBe(2);
    });

    test("用例3", () => {
        expect(jump([1, 1, 1, 2, 1])).toBe(4);
    });

    test("用例4", () => {
        expect(jump([1, 2, 1, 1, 1])).toBe(3);
    });
});

describe("自定义", () => {
    test("用例1", () => {
        expect(jump([2])).toBe(0);
    });
});
